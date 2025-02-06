/** The screen for vs battles */
class VSScreen extends Screen {
    constructor(characters, controls, stageID, firstToWin = 2) {
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
        let playerSelectButton = new MenuItem(128, 150, select, deselect, undefined, gt("battlePlayerSelect"), () => {
            playersManager.resetPositions();
            playersManager.openScreen();
        });
        let editControlsButton = new MenuItem(128, 210, select, deselect, undefined, gt("battleEditControls"), () => {
            controlsManager.openScreen();
        });
        let characterSelectButton = new MenuItem(128, 270, select, deselect, undefined, gt("battleCharacterSelect"), () => {
            this.destruct();
            currentScreen = new CharacterSelectScreen();
            let fake = false;
            if (this.player1.controls === null && this.player2.controls === null) {
                fake = true;
                this.player1.controls = this.pausedPlayer;
            }
            currentScreen.setControls([this.player1.controls, this.player2.controls], fake);
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


        this.replay = new Replay();


        this.winScreenMenuOn = false;
        this.winScreenMenu = new Menu();

        let playAgainButton = new MenuItem(128, 90, select, deselect, undefined, gt("battlePlayAgain"), () => {
            this.world.resetAndLoad(currentScreen);
            this.replay = new Replay();
        });
        let playerSelectWinButton = new MenuItem(128, 140, select, deselect, undefined, gt("battlePlayerSelect"), playerSelectButton.pressFunction);
        let editControlsWinButton = new MenuItem(128, 190, select, deselect, undefined, gt("battleEditControls"), editControlsButton.pressFunction);
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

        playAgainButton.addMoves(new MenuMove(playerSelectWinButton, Angle.DOWN));
        playerSelectWinButton.addMoves(new MenuMove(playAgainButton, Angle.UP));
        playerSelectWinButton.addMoves(new MenuMove(editControlsWinButton, Angle.DOWN));
        editControlsWinButton.addMoves(new MenuMove(playerSelectWinButton, Angle.UP));
        editControlsWinButton.addMoves(new MenuMove(characterSelectWinButton, Angle.DOWN));
        characterSelectWinButton.addMoves(new MenuMove(editControlsWinButton, Angle.UP));
        characterSelectWinButton.addMoves(new MenuMove(saveReplayButton, Angle.DOWN));
        saveReplayButton.addMoves(new MenuMove(characterSelectWinButton, Angle.UP));
        saveReplayButton.addMoves(new MenuMove(exitWinButton, Angle.DOWN));
        exitWinButton.addMoves(new MenuMove(saveReplayButton, Angle.UP));

        this.winScreenMenu.addMenuItems(playAgainButton, playerSelectWinButton, editControlsWinButton, characterSelectWinButton, saveReplayButton, exitWinButton);

        this.winScreenMenu.setTarget(playAgainButton);

        assetManager.loadAssetsWithScreen();
    }

    draw(g) {
        g.background(35, 65, 35);

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

        if (this.world.winScreen) {
            this.paused = false;
            if (!this.winScreenMenuOn) {
                this.winScreenMenuOn = true;
                this.winScreenMenu.transitioning = 30;
            }
        }
        if (this.winScreenMenuOn) {
            this.winScreenMenu.run();
        }

        if (!this.paused) {
            let max = debug.negateDraw ? debug.throttleRun : 1;
            for (let i = 0; i < max; i++) {
                if (this.replay)
                    this.replay.record(this.world);
                this.world.run(this);
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
                if (!this.paused && !this.winScreenMenuOn) {
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
                this.player1.controls = new ComputerControlsTree(this.player1);
                this.player1Controls = this.player1.controls;
                controls.push(this.player1.controls);
            } else {
                this.player1.controls = this.player1Controls;
            }
        }
        if (this.player2?.controls) {
            if ((fake || !this.player2Controls)) {
                this.player2.controls = new ComputerControlsTree(this.player2);
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

        this.world.addShouldLoad();

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