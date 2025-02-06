/** The screen for vs battles */
class ReplayScreen extends Screen {
    constructor(replayDest, characters, controls, stageID, firstToWin = 2) {
        super();

        this.setCharacters(characters);
        this.setControls(controls);
        this.setStage(stageID);

        this.firstTo = firstToWin;

        this.initLater();

        this.pausedPlayer = undefined;

        this.paused = false;
        this.bufferUnpause = -1;

        this.pauseMenu = new Menu();

        let select = assetManager.images.buttonPressedLanguage;
        let deselect = assetManager.images.buttonUnpressedLanguage;
        let backButton = new MenuItem(128, 90, select, deselect, undefined, gt("battleBack"), () => {
            this.bufferUnpause = 4;
        });
        let playerSelectButton = new MenuItem(128, 150, select, deselect, undefined, gt("replayTools"), () => {
            this.replayToolsOn = !this.replayToolsOn;
            if (this.replayToolsOn) {
                this.setControls([null, null]);
                this.bufferUnpause = 4;
            }
        });
        let editControlsButton = new MenuItem(128, 210, select, deselect, undefined, gt("replayTakeover"), () => {
            this.playingReplay = true;
            this.replayToolsOn = false;
            playersManager.openScreen();
            playersManager.resetPositions(undefined);
        });
        let characterSelectButton = new MenuItem(128, 270, select, deselect, undefined, "", () => {
            
        });
        let exitButton = new MenuItem(128, 330, select, deselect, undefined, gt("battleExit"), () => {
            this.destruct();
            currentScreen = new MenuDebugScreen();
        });

        backButton.addMoves(new MenuMove(playerSelectButton, Angle.DOWN));
        playerSelectButton.addMoves(new MenuMove(backButton, Angle.UP));
        playerSelectButton.addMoves(new MenuMove(editControlsButton, Angle.DOWN));
        editControlsButton.addMoves(new MenuMove(playerSelectButton, Angle.UP));
        editControlsButton.addMoves(new MenuMove(characterSelectButton, Angle.DOWN));
        characterSelectButton.addMoves(new MenuMove(editControlsButton, Angle.UP));
        characterSelectButton.addMoves(new MenuMove(exitButton, Angle.DOWN));
        exitButton.addMoves(new MenuMove(characterSelectButton, Angle.UP));

        this.pauseMenu.addMenuItems(backButton, playerSelectButton, editControlsButton, characterSelectButton, exitButton);

        this.pauseMenu.setTarget(backButton);
        
        this.replay = new Replay(replayDest);
        this.playingReplay = true;
        this.currentPlayback = 0;
        this.playbackSpeed = 1;

        this.replayTotalFrames = undefined;

        this.replayToolsOn = true;

        if (webVersion) {
            
        } else {
            this.replay.loadJSON((() => {
                this.replay.deserialize(this.replay.jsonData);
                this.replay.initLoad(this);

                this.world.savedReplay = true;
                this.world.addShouldLoad();

                assetManager.loadAssetsWithScreen();
            }).bind(this));
        }

        assetManager.forceDynamicLoadingDisplay();

        this.farPast = {};
    }

    draw(g) {
        g.background(35, 65, 35);

        //this.world.g.background(55, 155, 45);
        //this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        if (this.replayToolsOn) {
            g.push();
            g.translate(windowWidth / 2, 0);
            g.scale(windowHeight / 384);
            g.translate(-256, 0);

            g.fill(175);
            g.stroke(220, 220, 235);
            g.strokeWeight(3);
            g.triangle(47, 340, 47, 365, 25, 352.5);
            g.triangle(512 - 47, 340, 512 - 47, 365, 512 - 25, 352.5);
            g.stroke(175);
            g.line(55, 353.5, 512 - 55, 353.5);
            g.stroke(175, 0, 14);
            g.line(55, 353.5, 55 + (this.world.frameCount - this.replay.minFrameCount) / (this.replayTotalFrames - this.replay.minFrameCount) * 402, 353.5);
            g.stroke(220, 220, 235);
            g.ellipse(55 + (this.world.frameCount - this.replay.minFrameCount) / (this.replayTotalFrames - this.replay.minFrameCount) * 402, 352.5, 25, 25);

            g.pop();
        }

        if (this.paused) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.pausedPlayer === this.player2Controls)
                g.fill(47, 31, 171);
            g.text(gt("gamePaused"), windowWidth / 2, (windowHeight - minSize * canvasSlope) / 2 + 40 * minSize / 512);//musi li awen
            this.pauseMenu.draw(g, minSize, minSize * 384 / 512, minSize * 0.5, minSize * canvasSlope * 0.13);
            /*if (frameCount % 60 === 0)
                print(stringifyRefJSON(this.player1));*/
        }
    }

    run() {
        /**if (gamepads[0] !== null) {
            this.player1.controls = controlsManager.gamepadControls[0];
        }
        if (gamepads[1] !== null) {
            this.player2.controls = controlsManager.gamepadControls[1];
        }
        if (!this.player1.controls.valid()) {
            this.player1.controls = controlsManager.controls[0];
        }
        if (!this.player2.controls.valid()) {
            this.player2.controls = controlsManager.controls[1];
        }**/
        //this.player1.controls = this.computer1;
        //this.player2.controls = this.computer2;

        if (!this.replay.loaded)
            this.paused = true;
        else if (this.replayTotalFrames === undefined)
            this.replayTotalFrames = Object.keys(this.replay.inputs).length;

        if (!this.paused) {
            if (this.playingReplay) {
                this.currentPlayback += this.playbackSpeed;
                while (this.currentPlayback > 1) {
                    let pastFrame = {
                        gameState: this.world.serialize(),
                        player1Inputs: this.world.players[0].controls.serialize(),
                        player2Inputs: this.world.players[1].controls.serialize()
                    };
                    if (this.replay.load(this.world)) {
                        this.world.run(this);
                        this.farPast[this.world.frameCount] = pastFrame;
                        this.currentPlayback--;
                    } else {
                        this.currentPlayback = 0;
                    }
                }
            }
        } else {
            if (this.pauseMenu.transitioning <= 0) {
                this.pauseMenu.run();
            } else {
                this.pauseMenu.controlMenu(this.pausedPlayer);
                this.pauseMenu.transitioning--;
            }
        }

        /*if (!this.world.players[0]?.controls.valid() || !this.world.players[1]?.controls.valid()) {
            playersManager.openScreen();
            playersManager.resetPositions();
        }*/

        if (this.bufferUnpause === 0) {
            this.paused = false;
            for (let i in controls) {
                controls[i].updateInGame();
            }
        }
        if (this.bufferUnpause >= 0)
            this.bufferUnpause--;

        for (let i in controls) {
            if (controls[i].computer)
                continue;
            if (controls[i].clickedAbsolute("start")) {
                if (!this.paused) {
                    this.paused = true;
                    this.pauseMenu.transitioning = 30;
                    this.pausedPlayer = controls[i];
                    break;
                }
            }
            if (controls[i].clickedAbsolute("start") || controls[i].clickedAbsolute("back")) {
                if (this.paused && this.pauseMenu.transitioning === 0) {
                    this.bufferUnpause = 4;
                    break;
                }
            }

            if (!this.paused && this.replayToolsOn) {
                if (controls[i].joystickPressedMenu(0)) {
                    if (Angle.distance(controls[i].angle(0), Angle.RIGHT) < PI / 2 && this.farPast[Math.max(0, this.world.frameCount - 1)]) {
                        //Skip forward in playback
                        let currentFrame = this.farPast[Math.max(0, this.world.frameCount - 1)];
                        this.world.deserialize(currentFrame.gameState);
                        defaultDeserialize(this.world.players[0].controls, currentFrame.player1Inputs);
                        defaultDeserialize(this.world.players[1].controls, currentFrame.player2Inputs);

                        for (let i = 0; i < Math.max(this.playbackSpeed * 60, 1); i++) {
                            let pastFrame = {
                                gameState: this.world.serialize(),
                                player1Inputs: this.world.players[0].controls.serialize(),
                                player2Inputs: this.world.players[1].controls.serialize()
                            };
                            if (this.replay.load(this.world)) {
                                this.world.run(this);
                                this.farPast[this.world.frameCount] = pastFrame;
                            } else {
                                break;
                            }
                        }
                    }
                    if (Angle.distance(controls[i].angle(0), Angle.LEFT) < PI / 2 && this.farPast[Math.max(0, this.world.frameCount - Math.ceil(this.playbackSpeed * 60))]) {
                        //Skip backward in playback
                        let currentFrame = this.farPast[Math.max(0, this.world.frameCount - Math.ceil(this.playbackSpeed * 60))];
                        this.world.deserialize(currentFrame.gameState);
                        defaultDeserialize(this.world.players[0].controls, currentFrame.player1Inputs);
                        defaultDeserialize(this.world.players[1].controls, currentFrame.player2Inputs);
                    }
                }

                if (controls[i].clickedAbsolute("select")) {
                    this.playingReplay = !this.playingReplay;
                }
            }
            /*if (controls[i].clickedAbsolute("back") && this.paused) {
                this.destruct();
                currentScreen = new CharacterSelectScreen();
                let fake = false;
                if (this.player1.controls === null && this.player2.controls === null) {
                    fake = true;
                    this.player1.controls = controls[i];
                }
                currentScreen.setControls([this.player1.controls, this.player2.controls], fake);
                break;
            }*/
        }
    }

    setControls(c, fake = false) {
        this.player1Controls = c[0];
        this.player2Controls = c[1];

        for (let u = controls.length - 1; u >= 0; u--) {
            if (controls[u].computer)
                controls.splice(u, 1);
        }
        if (this.player1?.controls) {
            if ((fake || !this.player1Controls)) {
                this.player1.controls = new NetplayControls(this.player1);
                this.player1Controls = this.player1.controls;
                controls.push(this.player1.controls);
            } else {
                this.player1.controls = this.player1Controls;
            }
        }
        if (this.player2?.controls) {
            if ((fake || !this.player2Controls)) {
                this.player2.controls = new NetplayControls(this.player2);
                this.player2Controls = this.player2.controls;
                controls.push(this.player2.controls);
            } else {
                this.player2.controls = this.player2Controls;
            }
        }
    }
    setCharacters(c) {
        this.player1CharacterID = c[0];
        this.player2CharacterID = c[1];
    }
    setStage(id) {
        this.stageID = id;
    }

    destruct() {
        for (let u = controls.length - 1; u >= 0; u--) {
            if (controls[u].computer)
                controls.splice(u, 1);
        }
        if (this.player1.controls.computer)
            this.player1.controls = null;
        if (this.player2.controls.computer)
            this.player2.controls = null;
        Howler.stop();
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
        this.player1 = this.world.players[0];
        this.player2 = this.world.players[1];

        this.canSkipFrames = true;

        //this.world.addShouldLoad();

        //let randArr = [
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0],
        //    [0, 0, 0, 0, 0, 0, 0]
        //];
        //for (let i = 0; i < 1000000; i++) {
        //    this.world.rSeed = random(0, 1000000);
        //    randArr[this.world.random(0, 6)][this.world.random(0, 6)]++;
        //}
        //print(...randArr);
    }

    loaded() {
        this.world.copyAssets();
        this.world.playMusic();
    }
}