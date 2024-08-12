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

        this.past = [];//Game states saved in the past that have not yet received data for
        this.future = [];//Game states in the future with data but have not happened yet

        this.farPast = [];//This will look 4 times farther back than this.past for use in resolving packet loss
        this.farPastMultiply = 4;//4

        this.timeStamps = [];//Timestamps used to calculate ping values
        this.pings = [0];//A list of the past ping amounts

        /** @type {Object[]} An array of serialized Controls objects received by the other player */
        this.dataQueue = dataQueue;
        //this.currentData = 0;

        /** @type {Object} The received inputs (a serialized Controls object) */
        this.data = undefined;
        
        this.rollbackFrames = 15;//10

        this.maxDistressWait = 3;
        this.distressWait = 0;

        this.averageRollbackFrames = [0];
        this.totalAverageRollback = 0;

        debug.noUpdateControls = true;
        debug.noSkipFrames = false;
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
        this.updateControls();
        this.testShouldPause();
        if (!this.paused) {
            this.addFramePast();
            this.connection.send(this.getExports());

            this.world.run();

            this.data = undefined;
        }
            //lostFrames--;
        //}

        if (this.world.winScreen) {
            for (let i in controls) {
                if (!controls[i].computer && !controls[i].netplay) {
                    if (controls[i] != this.myPlayer.controls) {
                        controls[i].update();
                    }
                    if (controls[i].clickedAbsolute("select")) {
                        this.world.player1Score = 0;
                        this.world.player2Score = 0;
                        this.world.winScreen = false;
                        if (this.world.randomizeStage) {
                            this.world.stopMusic();
                            this.world = new stages[this.world.random(0, stages.length - 2)](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
                            this.world.randomizeStage = true;
                            this.world.addPlayer(this.player1);
                            this.world.addPlayer(this.player2);
                            this.world.sikeWawa.setPlayers(this.player1, this.player2);
                            this.world.playMusic();
                        }
                        this.world.completeReset();
                        this.player1 = this.world.players[0];
                        this.player2 = this.world.players[1];
                    }
                }
            }
        }

        /*if (!this.myPlayer.controls.valid()) {
            playersManager.openScreen();
            playersManager.resetPositionsNetplay();
        }*/

        if (this.myPlayer.controls?.clickedAbsolute("start")) {
            this.leaveMenu = !this.leaveMenu;
        }
        if (this.myPlayer.controls?.clickedAbsolute("back") && this.leaveMenu) {
            this.destruct();
            this.peer?.destroy();
            dataOnFunction = () => { };
            currentScreen = new MenuDebugScreen();
        }

        /*if (keys.KeyU && !this.connection)
            this.startConnection();*/

        /*if (keys.KeyN && this.connection) {//Debug
            //this.connection.send({ pause: true });
            noLoop();
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
                lostFrames += (receivedData.rollback - this.totalAverageRollback / this.averageRollbackFrames.length - 1) / 45;
                if (debug.displayLostFrames)
                    print((receivedData.rollback - this.totalAverageRollback / this.averageRollbackFrames.length - 1) / 45);
            } else {
                lostFrames += this.future.length / 45;
                if (debug.displayLostFrames)
                    print(this.future.length / 45);
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
        if (!receivedData && !this.paused) {
            if (this.future[0]) {
                /*while (this.future[0].frameCount < this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                }*/
                if (this.future[0].frameCount === this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                } else if (this.future[0].frameCount < this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                    this.rollbackTo(receivedData);
                    receivedData = undefined;
                    this.data = undefined;
                }

            }
        }

        //
        if (this.myPlayer) {
            //if (!this.paused) {
                this.theirPlayer.controls.update(receivedData);
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

        if (this.leaveMenu) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            g.text("󱤻󱤧󱤈", windowWidth / 2, windowHeight / 2);//musi li awen
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
    }

    initLater() {
        this.world = new stages[this.stageID](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        this.world.setFirstTo(this.firstTo);
        //g.noSmooth();

        if (this.rSeed)
            this.world.rSeed = this.rSeed;

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
            this.world = new stages[this.world.random(0, stages.length - 2)](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
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

        this.world.playMusic();
    }
}