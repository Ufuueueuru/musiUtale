/** The screen for vs battles */
class VSNetplayScreen extends Screen {
    constructor(peer, connection, characters, controls, stageID, firstTo, dataQueue, rSeed) {
        super();

        /*this.myID = "UtaleTestID1";
        this.theirID = "UtaleTestID2";
        if (keys.KeyM) {
            this.myID = "UtaleTestID2";
            this.theiID = "UtaleTestID1";
        }
        this.peer = new Peer(this.myID);

        this.peer.on("connection", (conn) => {
            this.myPlayer = this.world.players[1];
            this.theirPlayer = this.world.players[0];

            this.connection = conn;
            this.setupEvents();
        });*/

        this.peer = peer;

        this.connection = connection;
        this.connectionOpen = true;
        this.theirID = this.connection.peer;

        //this.setupEvents();

        this.setCharacters(characters);
        this.setControls(controls);
        this.setStage(stageID);

        this.firstTo = firstTo;

        if (rSeed)
            this.rSeed = rSeed;

        this.initLater();

        if (!this.world.players[0].controls.netplay) {
            /** @type {Player} */
            this.myPlayer = this.world.players[0];
            /** @type {Player} */
            this.theirPlayer = this.world.players[1];
        } else {
            /** @type {Player} */
            this.myPlayer = this.world.players[1];
            /** @type {Player} */
            this.theirPlayer = this.world.players[0];
        }

        this.paused = true;

        this.leaveMenu = false;
        this.pausedControls = undefined;
        this.bufferUnpause = 0;

        this.pauseMenu = new Menu();

        let select = assetManager.images.buttonPressedLanguage;
        let deselect = assetManager.images.buttonUnpressedLanguage;
        let backButton = new MenuItem(128, 90, select, deselect, undefined, gt("battleBack"), () => {
            this.bufferUnpause = 4;
        });
        let characterSelectButton = new MenuItem(128, 150, select, deselect, undefined, gt("battleCharacterSelect"), () => {
            dataOnFunction = () => { };
            currentScreen = new CharacterSelectScreen();
            currentScreen.setNetplay(this.peer, this.theirID);
            currentScreen.setControls([this.pausedControls, new NetplayControls()]);
            this.destruct();
        });
        let exitButton = new MenuItem(128, 210, select, deselect, undefined, gt("battleExit"), () => {
            this.destruct();
            this.peer?.destroy();
            dataOnFunction = () => { };
            currentScreen = new MenuDebugScreen();
        });

        backButton.addMoves(new MenuMove(characterSelectButton, Angle.DOWN));
        characterSelectButton.addMoves(new MenuMove(backButton, Angle.UP));
        characterSelectButton.addMoves(new MenuMove(exitButton, Angle.DOWN));
        exitButton.addMoves(new MenuMove(characterSelectButton, Angle.UP));

        this.pauseMenu.addMenuItems(backButton, characterSelectButton, exitButton);

        this.pauseMenu.setTarget(backButton);


        this.past = [];//Game states saved in the past that have not yet received data for
        this.future = [];//Game states in the future with data but have not happened yet

        this.farPast = [];//This will look 4 times farther back than this.past for use in resolving packet loss
        this.farPastMultiply = 400;//4

        this.timeStamps = [];//Timestamps used to calculate ping values
        this.pings = [0];//A list of the past ping amounts

        /** @type {Object[]} An array of serialized Controls objects received by the other player */
        this.dataQueue = dataQueue;
        //this.currentData = 0;

        /** @type {Object} The received inputs (a serialized Controls object) */
        this.data = undefined;
        
        this.rollbackFrames = 15;//15

        this.maxDistressWait = 3;
        this.distressWait = 0;

        this.averageRollbackFrames = [0];
        this.totalAverageRollback = 0;

        this.randomChoices = [false, false, false];

        debug.noUpdateControls = true;
        debug.noSkipFrames = false;

        this.netplayAutoSavedReplay = false;
        this.world.savedReplay = false;
        this.replay = new Replay();
        this.currentReplayFrame = 0;

        this.winScreenMenuOn = false;
        this.winScreenMenu = new Menu();

        let playAgainButton = new MenuItem(128, 90, select, deselect, undefined, gt("battlePlayAgain"), () => {
            this.world.player1Score = 0;
            this.world.player2Score = 0;
            this.world.winScreen = false;
            this.world.stopMusic();
            //this.reRandomize();
            this.world.playMusic();
            this.world.completeReset();
            this.player1 = this.world.players[0];
            this.player2 = this.world.players[1];

            //this.resetWorld();
            this.replay = new Replay();
            this.netplayAutoSavedReplay = false;
        });
        //let playerSelectWinButton = new MenuItem(128, 140, select, deselect, undefined, gt("battlePlayerSelect"), playerSelectButton.pressFunction);
        //let editControlsWinButton = new MenuItem(128, 190, select, deselect, undefined, gt("battleEditControls"), editControlsButton.pressFunction);
        let characterSelectWinButton = new MenuItem(128, 240, select, deselect, undefined, gt("battleCharacterSelect"), characterSelectButton.pressFunction);
        let saveReplayButton = new MenuItem(128, 290, select, deselect, undefined, gt("battleSaveReplay"), () => {
            savingReplayDisplay = true;
            saveReplayManual(this.replay, () => {
                savingReplayDisplay = false;
            }, () => {//If the replays are maxed out
                savingReplayDisplay = false;
            });
        });
        let exitWinButton = new MenuItem(128, 340, select, deselect, undefined, gt("battleExit"), exitButton.pressFunction);

        playAgainButton.addMoves(new MenuMove(characterSelectWinButton, Angle.DOWN));
        //playerSelectWinButton.addMoves(new MenuMove(playAgainButton, Angle.UP));
        //playerSelectWinButton.addMoves(new MenuMove(editControlsWinButton, Angle.DOWN));
        //editControlsWinButton.addMoves(new MenuMove(playerSelectWinButton, Angle.UP));
        //editControlsWinButton.addMoves(new MenuMove(characterSelectWinButton, Angle.DOWN));
        characterSelectWinButton.addMoves(new MenuMove(playAgainButton, Angle.UP));
        characterSelectWinButton.addMoves(new MenuMove(saveReplayButton, Angle.DOWN));
        saveReplayButton.addMoves(new MenuMove(characterSelectWinButton, Angle.UP));
        saveReplayButton.addMoves(new MenuMove(exitWinButton, Angle.DOWN));
        exitWinButton.addMoves(new MenuMove(saveReplayButton, Angle.UP));

        this.winScreenMenu.addMenuItems(playAgainButton, characterSelectWinButton, saveReplayButton, exitWinButton);

        this.winScreenMenu.setTarget(playAgainButton);
    }

    getNextData() {
        if (this.dataQueue.length > 0 && !this.dataQueue[0].inputs)
            this.dataQueue.splice(0, 1);
        if (this.dataQueue.length > 0) {
            this.data = this.dataQueue[0];
            //print("r: " + this.data.frameCount);
            //this.currentData++;
            this.dataQueue.splice(0, 1);
        } else {
            this.data = undefined;
        }
        /*for (let i in this.farPast) {//Debug to display when a frame input is received more than once
            if (this.data && this.farPast[i].gameState.frameCount === this.data.frameCount && this.farPast[i].dataReceived)
                print(this.data.frameCount);
        }*/
    }

    run() {
        while (debug.displayRollbackFrames && this.averageRollbackFrames.length > 60) {
            this.averageRollbackFrames.splice(0, 1);
        }

        /*if (deltaTime > 100 / 6)
            lostFrames += deltaTime * 6 / 100 - 1;
        lostFrames = constrain(lostFrames, 0, 4);*/
        //let ifCount = 0;
        //lostFrames++;
        //while (lostFrames > 1 && ifCount < 3) {
            //if (this.paused && ifCount > 1)
                //break;
        while (this.farPast[this.currentReplayFrame] && this.farPast[this.currentReplayFrame].dataReceived) {
            this.replay.recordControls(this.farPast[this.currentReplayFrame].gameState, [this.farPast[this.currentReplayFrame].player1Inputs, this.farPast[this.currentReplayFrame].player2Inputs]);
            this.currentReplayFrame++;
        }

        this.updateControls();
        this.testShouldPause();
        if (!this.paused) {
            this.addFramePast();
            if (!debug.noSendData)
                this.connection.send(this.getExports());

            this.world.run();

            this.data = undefined;
        }
            //lostFrames--;
        //}

        if (this.bufferUnpause === 0) {
            this.leaveMenu = false;
        }
        if (this.bufferUnpause >= 0)
            this.bufferUnpause--;

        this.endRun = false;
        for (let i in controls) {
            if (!controls[i].computer && !controls[i].netplay) {
                if (controls[i] != this.myPlayer.controls) {
                    controls[i].update();
                }
                this.runControls(controls[i]);
                if (this.endRun)
                    return;
            }
        }
        this.runControls(this.myPlayer.controls);
        if (this.endRun)
            return;

        if (this.world.winScreen) {
            this.leaveMenu = false;
            if (!this.winScreenMenuOn) {
                this.winScreenMenuOn = true;
                this.winScreenMenu.transitioning = 30;
            }
        }
        if (this.winScreenMenuOn) {
            this.winScreenMenu.run();
            if (this.replay && !this.netplayAutoSavedReplay && autoReplay && this.currentReplayFrame >= this.farPast.length) {
                savingReplayDisplay = true;
                saveReplay(parentScreen.replay, () => {
                    savingReplayDisplay = false;
                }, () => {//If the replays are maxed out
                    savingReplayDisplay = false;
                });
                this.savedReplay = true;
            }
        }

        if (this.leaveMenu) {
            if (this.pauseMenu.transitioning <= 0) {
                this.pauseMenu.run();
            } else {
                this.pauseMenu.controlMenu(this.pausedPlayer);
                this.pauseMenu.transitioning--;
            }
        }

        /*if (!this.myPlayer.controls.valid()) {
            playersManager.openScreen();
            playersManager.resetPositionsNetplay();
        }*/

        /*if (keys.KeyU && !this.connection)
            this.startConnection();*/

        /*if (keys.KeyN && this.connection) {//Debug
            //this.connection.send({ pause: true });
            noLoop();
        }*/
    }

    runControls(control) {
        if (control.clickedAbsolute("start") && !this.winScreenMenuOn) {
            this.leaveMenu = !this.leaveMenu;
            this.pausedControls = control;
        }
        /*if (this.pausedControls === control && this.leaveMenu && control.clickedAbsolute("back")) {//Character select screen
            //this.peer?.destroy();
            dataOnFunction = () => { };
            currentScreen = new CharacterSelectScreen();
            currentScreen.setNetplay(this.peer, this.theirID);
            currentScreen.setControls([control, new NetplayControls()]);
            this.destruct();
            this.endRun = true;
            return;
        }
        if (this.pausedControls === control && this.leaveMenu && control.clickedAbsolute("back")) {//Back to main menu
            this.destruct();
            this.peer?.destroy();
            dataOnFunction = () => { };
            currentScreen = new MenuDebugScreen();
            this.endRun = true;
            return;
        }*/
        if (this.pausedControls === control && this.leaveMenu && control.clickedAbsolute("back")) {//Leave the menu by pressing back
            this.leaveMenu = false;
        }
        /*if (this.world.winScreen && (control.clickedAbsolute("select") || debug.skipWinScreen)) {
            this.world.player1Score = 0;
            this.world.player2Score = 0;
            this.world.winScreen = false;
            this.world.stopMusic();
            //this.reRandomize();
            this.world.playMusic();
            this.world.completeReset();
            this.player1 = this.world.players[0];
            this.player2 = this.world.players[1];

            //this.resetWorld();
        }*/
    }

    updateControls() {
        this.getNextData();
        let receivedData = this.data;
        //let rolledBack = false;
        /*if (receivedData?.rollbackFrames) {//Test to see if slowdowns can be fixed FLAG POSSIBLE BAD CODE HERE
            if (receivedData.rollbackFrames - this.totalAverageRollback < -this.rollbackFrames / 2) {
                this.paused = true;
                this.distressWait = 1;
            }
        }*/
        if (receivedData?.rollback) {
            if (this.totalAverageRollback / this.averageRollbackFrames.length < 15 && receivedData.rollback - this.totalAverageRollback / this.averageRollbackFrames.length > 1) {
                lostFrames += (receivedData.rollback - this.totalAverageRollback / this.averageRollbackFrames.length - 1) / 30;
                if (debug.displayLostFrames)
                    print((receivedData.rollback - this.totalAverageRollback / this.averageRollbackFrames.length - 1) / 30);
            }
            if (this.future.length > 2) {
                lostFrames += this.future.length / 30;
                if (debug.displayLostFrames)
                    print(this.future.length / 30);
            }
        }
        while (receivedData && (receivedData.frameCount !== this.world.frameCount || this.paused)) {
            //print("r: " + receivedData.frameCount + "m: " + this.frameCount);
            while (this.timeStamps.length > 100) {
                this.timeStamps.splice(0, 1);
            }
            for (let i = this.timeStamps.length - 1; i >= 0; i--) {
                if (this.timeStamps[i].frameCount === receivedData.frameCount) {
                    this.pings.push(Date.now() - this.timeStamps[i].time);
                    if (this.pings.length > 5)
                        this.pings.splice(0, 1);
                    this.timeStamps.splice(i, 1);
                    break;
                }
            }
            if (receivedData.frameCount < this.world.frameCount) {
                //rolledBack = true;
                let rollback = this.rollbackTo(receivedData);
                if (debug.displayRollbackFrames)
                    this.averageRollbackFrames.push(rollback);
                receivedData = undefined;
                this.data = undefined;
            } else if (receivedData.frameCount >= this.world.frameCount) {
                let futureI = 0;
                while (this.future[futureI]?.frameCount < receivedData.frameCount) {
                    futureI++;
                }
                this.future.splice(futureI, 0, receivedData);
                receivedData = undefined;
                this.data = undefined;
            }
            this.getNextData();
            receivedData = this.data;
        }
        /*if (!rolledBack) {
            this.averageRollbackFrames.push(0);
        }*/
        if (!receivedData) {
            //this.data = undefined;
            let u = 0;
            let id = 0;
            while (this.future[id] !== undefined && id < this.future.length && u < this.future.length) {
                //print(id + " " + this.future[id].frameCount);
                if (this.future[id].frameCount === this.world.frameCount && !this.paused) {
                    //receivedData = this.future[id];
                    //this.future.splice(id, 1);
                } else if (this.future[id].frameCount < this.world.frameCount) {
                    this.rollbackTo(this.future[id]);
                    this.future.splice(id, 1);
                } else {
                    id++;
                }
                u++;
            }
        }

        //
        if (this.myPlayer) {
            //if (!this.paused) {
            if (receivedData) {
                this.theirPlayer.controls.update(receivedData);
            } else {
                let i = this.past.length - 1;
                while (i > 0 && !this.past[i].dataReceived) {
                    i--;
                }
                //Make sure the past frame exists
                if (this.past[i] !== undefined) {
                    if (this.myPlayer === this.world.players[0]) {
                        this.theirPlayer.controls.update(this.past[i].player2Inputs);
                    } else {
                        this.theirPlayer.controls.update(this.past[i].player1Inputs);
                    }
                }
            }
                this.myPlayer.controls.update();
            //} else {
                //this.myPlayer.controls.buttons.start.update();
                //this.myPlayer.controls.buttons.select.update();
                //this.myPlayer.controls.buttons.back.update();
            //}
        }
        //if (this.myPlayer)
        //    print(this.myPlayer.controls.pressed("dash"));
    }

    testShouldPause() {
        this.paused = true;
        while (this.past[0] && this.past[0].dataReceived && this.past.length > this.rollbackFrames - 5) {
            this.past.splice(0, 1);
        }
        while (this.farPast.length > this.rollbackFrames * this.farPastMultiply) {
            this.farPast.splice(0, 1);
        }
        if (this.past.length < this.rollbackFrames)
            this.paused = false;
        if (!this.connectionOpen)
            this.paused = true;
        if (this.world.winScreen)
            this.paused = true;

        if (this.distressWait > 0)
            this.distressWait--;
        if (!this.paused)
            this.distressWait = this.maxDistressWait;
        if (this.paused && this.distressWait === 0) {
            for (let i in this.past) {
                if (!this.past[i].dataReceived) {
                    this.connection.send({ needFrame: this.past[i].gameState.frameCount });
                    this.distressWait = this.maxDistressWait;
                    this.timeStamps.push({ time: Date.now(), frameCount: this.past[i].gameState.frameCount });
                    if (debug.displayNetplayPauses)
                        print("Waiting for frame " + this.past[i].gameState.frameCount + "...");
                    break;
                }
            }
        }
    }

    rollbackTo(receivedData) {
        let currentFrameCount = this.world.frameCount;
        let frame = this.past.length + receivedData.frameCount - this.world.frameCount;
        let rollbackFrames = this.world.frameCount - receivedData.frameCount;
        //print(this.past[frame]?.frameCount, frame, receivedData.frameCount, this.world.frameCount);
        //let origFrame = frame;
        //print(frame, receivedData.frameCount, this.world.frameCount, this.past[frame].dataReceived, !!this.past[frame]);
        //print("b: ", this.past[origFrame].dataReceived, receivedData.frameCount);
        if (this.past[frame]/* && !this.past[frame].dataReceived*/) {
            this.past[frame].dataReceived = true;
            defaultDeserialize(this.world, this.past[frame].gameState);
            
            defaultDeserialize(this.theirPlayer.controls, receivedData.inputs);
            if (this.myPlayer === this.world.players[0]) {
                defaultDeserialize(this.myPlayer.controls, this.past[frame].player1Inputs);
                this.past[frame].player2Inputs = defaultSerialize(this.theirPlayer.controls);
            } else {
                defaultDeserialize(this.myPlayer.controls, this.past[frame].player2Inputs);
                this.past[frame].player1Inputs = defaultSerialize(this.theirPlayer.controls);
            }

            this.world.rollbacking = true;
            this.world.rollbackingFrames = currentFrameCount - this.world.frameCount;
            this.world.run();
            frame++;
            while (this.world.frameCount < currentFrameCount) {
                for (let i = this.dataQueue.length - 1; i >= 0; i--) {
                    if (this.dataQueue[i].frameCount === this.world.frameCount) {
                        receivedData = this.dataQueue[i];
                        this.past[frame].dataReceived = true;
                        if (this.theirPlayer === this.world.players[0]) {
                            this.past[frame].player1Inputs = receivedData.inputs;
                        } else {
                            this.past[frame].player2Inputs = receivedData.inputs;
                        }
                        this.dataQueue.splice(i, 1);
                    }
                }
                this.past[frame].gameState = defaultSerialize(this.world);
                defaultDeserialize(this.world.players[0].controls, this.past[frame].player1Inputs);
                defaultDeserialize(this.world.players[1].controls, this.past[frame].player2Inputs);
                this.world.rollbacking = true;
                this.world.rollbackingFrames = currentFrameCount - this.world.frameCount;
                this.world.run();
                frame++;
            }
        }
        //print("a: ", this.past[origFrame].dataReceived, receivedData.frameCount);
        return rollbackFrames;
    }

    getExports() {
        let want = (frameCount % 12 === 0);
        if (want)
            this.timeStamps.push({ time: Date.now(), frameCount: this.world.frameCount });
        return {
            frameCount: this.world.frameCount,
            inputs: defaultSerialize(this.myPlayer.controls),
            rollback: this.totalAverageRollback / this.averageRollbackFrames.length,
            wantResponse: want
        };
    }

    getExportsFrame(id, wasNeedFrame = true) {
        let inputs = (this.myPlayer === this.world.players[0]) ? this.farPast[id].player1Inputs : this.farPast[id].player2Inputs;
        return {
            frameCount: this.farPast[id].gameState.frameCount,
            inputs: inputs,
            rollback: this.farPast[id].rollback
        };
    }

    setRandom(choices) {
        this.randomChoices = choices;
    }

    setNewRandom(choices) {
        if (choices[0] > -1) {
            this.world.setCharacter(0, choices[0]);
        }
        if (choices[1] > -1) {
            this.world.setCharacter(1, choices[1]);
        }
        if (choices[2] > -1) {
            this.setStage(choices[2]);
        }
    }

    setStage(choice) {
        let firstTo = this.world.firstTo;
        let player1 = this.world.players[0];
        let player2 = this.world.players[1];
        this.world = new stages[choice](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        this.world.setFirstTo(firstTo);
        this.world.addPlayer(player1);
        this.world.addPlayer(player2);
        this.world.sikeWawa.setPlayers(player1, players2);
        this.world.completeReset();
        if (this.player1.controls.world)
            this.player1.controls.world = this.world;
        if (this.player2.controls.world)
            this.player2.controls.world = this.world;
    }

    resetWorld() {
        this.past = [];
        this.farPast = [];
        this.future = [];
        this.dataQueue = [];

        this.currentReplayFrame = 0;
    }

    reRandomize() {
        let choices = [-1, -1, -1];
        //Randomize characters
        if (this.randomChoices[0]) {
            choices[0] = this.world.randomizeCharacter(0);
            this.world.players[0].randomizeCharacter = false;
        }
        if (this.randomChoices[1]) {
            choices[1] = this.world.randomizeCharacter(1);
            this.world.players[1].randomizeCharacter = false;
        }
        //Randomize the world
        if (this.randomChoices[2]) {
            choices[2] = floor(random(0, stages.length - 2));
            this.setStage(choices[2]);
        }

        this.connection.send({
            randomChoices: choices
        });
    }

    /*startConnection() {
        this.connection = this.peer.connect(this.theirID);
        this.myPlayer = this.world.players[0];
        this.theirPlayer = this.world.players[1];
        this.setupEvents();
    }*/

    setupEvents() {
        /*this.connection.off("data");
        this.connection.on("data", (incomingData) => {
            this.dataQueue.push(incomingData);
            this.world.rSeed = incomingData.rSeed;
            //if (incomingData.pause)//debug
                //noLoop();
        });*/
        /*dataOnFunction = (incomingData) => {
            if (incomingData.needFrame) {
                let success = false;
                if (this.farPast.length > 0) {
                    let pastFrame = this.farPast[0].gameState.frameCount;
                    if (pastFrame <= incomingData.needFrame) {
                        let id = incomingData.needFrame - pastFrame;
                        this.connection.send(this.getExportsFrame(id));
                        success = true;
                    }
                }
                if (!success) {
                    //this.connectionOpen = false;//Not sure if this is the right thing to do or not
                }
            } else {
                this.dataQueue.push(incomingData);
                this.world.rSeed = incomingData.rSeed;
            }
        }*/
        /*this.connection.on('open', () => {
            this.paused = false;
            this.connectionOpen = true;
            this.connection.send(this.getExports());
        });*/
    }

    draw(g) {
        g.background(20, 35, 25);

        //this.world.g.background(55, 155, 45);
        //this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        if (this.winScreenMenuOn) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.pausedPlayer === this.player2Controls)
                g.fill(47, 31, 171);
            g.text(gt("gameFinishWinScreen"), windowWidth / 2, (windowHeight - minSize * canvasSlope) / 2 + 40 * minSize / 512);//musi li awen
            this.winScreenMenu.draw(g, minSize, minSize * 384 / 512, minSize * 0.5, minSize * canvasSlope * 0.1);
        }

        if (this.leaveMenu) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.myPlayer.controls === this.player2Controls)
                g.fill(47, 31, 171);
            g.text(gt("gamePaused"), windowWidth / 2, (windowHeight - minSize * canvasSlope) / 2 + 40 * minSize / 512);//musi li awen
            this.pauseMenu.draw(g, minSize, minSize * 384 / 512, minSize * 0.5, minSize * canvasSlope * 0.13);
        }

        if (debug.displayRollbackFrames) {
            let sum = 0;
            this.averageRollbackFrames.forEach((a) => {
                sum += a;
            });
            this.totalAverageRollback = sum;

            sum = 0;//sum becomes the average ping
            this.pings.forEach((a) => {
                sum += a;
            });
            
            g.fill(255, 0, 0, 170);
            g.noStroke();
            g.textSize(20);
            g.textAlign(CENTER, CENTER);
            g.textFont(assetManager.fonts.asuki);
            g.text("󱥫󱥜: " + (round(this.totalAverageRollback / this.averageRollbackFrames.length * 10) / 10).toFixed(1), width / 2 - 70, 10);//tenpo sike
            g.text(round(sum / this.pings.length) + "ms", width / 2, 10);//ping
        }
    }

    addFramePast() {
        //print(this.world.frameCount);
        let dataReceived = this.data?.frameCount === this.world.frameCount;
        
        let pastData = {
            gameState: defaultSerialize(this.world),
            player1Inputs: defaultSerialize(this.world.players[0].controls),
            player2Inputs: defaultSerialize(this.world.players[1].controls),
            dataReceived,
            rollback: this.totalAverageRollback / this.averageRollbackFrames.length,
        };
        this.past.push(pastData);
        this.farPast.push(pastData);
    }

    setControls(c) {
        this.player1Controls = c[0];
        this.player2Controls = c[1];
    }
    setCharacters(c) {
        this.player1CharacterID = c[0];
        this.player2CharacterID = c[1];
    }
    setStage(id) {
        this.stageID = id;
    }

    halfDestruct() {
        debug.noUpdateControls = false;
        debug.noSkipFrames = false;
        for (let u = controls.length - 1; u >= 0; u--) {
            if (controls[u].computer)
                controls.splice(u, 1);
        }
        if (this.player1.controls.computer)
            this.player1.controls = null;
        if (this.player2.controls.computer)
            this.player2.controls = null;
        errorDisplayFrames = 0;
        Howler.stop();
    }

    destruct() {
        debug.noUpdateControls = false;
        debug.noSkipFrames = false;
        for (let u = controls.length - 1; u >= 0; u--) {
            if (controls[u].computer)
                controls.splice(u, 1);
        }
        if (this.player1.controls.computer)
            this.player1.controls = null;
        if (this.player2.controls.computer)
            this.player2.controls = null;
        this.connection?.close();
        errorDisplayFrames = 0;
        Howler.stop();

        assetManager.resetAssets();
    }

    initLater() {
        this.world = new stages[this.stageID](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        this.world.setFirstTo(this.firstTo);
        //g.noSmooth();

        this.player1 = new characters[this.player1CharacterID]();
        this.player2 = new characters[this.player2CharacterID]();

        if (this.player1Controls === null) {
            this.player1Controls = new ComputerControlsTree(this.player1);
            controls.push(this.player1Controls);
        }
        if (this.player2Controls === null) {
            this.player2Controls = new ComputerControlsTree(this.player2);
            controls.push(this.player2Controls);
        }

        this.player1.controls = this.player1Controls;//this.controls2;//this.computer1;
        this.player1.x = this.world.getCenterStageX() - 70;
        this.player1.y = this.world.getCenterStageY();

        this.player2.controls = this.player2Controls;//this.controls3;//this.computer2;
        this.player2.x = this.world.getCenterStageX() + 70;
        this.player2.y = this.world.getCenterStageY();
        this.player2.dir.value = PI;

        this.world.addPlayer(this.player1);
        this.world.addPlayer(this.player2);

        this.world.sikeWawa.setPlayers(this.player1, this.player2);

        if (this.world.randomizeStage) {
            this.world = new stages[floor(random(0, stages.length - 2))](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
            this.world.randomizeStage = true;
            this.world.setFirstTo(this.firstTo);
            this.world.addPlayer(this.player1);
            this.world.addPlayer(this.player2);
            this.world.sikeWawa.setPlayers(this.player1, this.player2);
            if (this.player1.controls.world)
                this.player1.controls.world = this.world;
            if (this.player2.controls.world)
                this.player2.controls.world = this.world;
        }
        this.world.completeReset();
        this.world.randomizeStage = false;//I don't feel like dealing with serializing/deserializing random characters so I'm not
        this.player1 = this.world.players[0];
        this.player1.randomizeCharacter = false;
        this.player2 = this.world.players[1];
        this.player2.randomizeCharacter = false;

        this.canSkipFrames = true;

        if (this.rSeed)
            this.world.rSeed = this.rSeed;

        if (assetManager.getRealDisplayPercent() >= 100)
            this.world.playMusic();
        else
            dynamicLoadingDisplay = true;
    }

    loaded() {
        this.world.copyAssets();
        this.world.playMusic();
    }
}