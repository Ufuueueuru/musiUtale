/** The screen for training mode */
class TrainingScreen extends VSScreen {
    constructor(characters, controls, stageID, firstToWin = 0) {
        super(characters, controls, stageID, firstToWin);

        /** @type {Object} */
        this.trainingSettings = {};

        this.world.startCountdown = 0;
        this.world.timer = 100;
        this.player1.canMove = true;
        this.player1.canAttack = true;
        this.player2.canMove = true;
        this.player2.canAttack = true;
        this.trainingSettings.positionReset = this.world.serialize();
        this.world.addShouldLoad();
        this.world.startCountdown = this.world.countdownMax;
        this.player1.canMove = false;
        this.player1.canAttack = false;
        this.player2.canMove = false;
        this.player2.canAttack = false;

        this.trainingSettings.meter = {
            staticSikeWawa: false,//Should the sike wawa meter be stuck how it is?
            meters: [0, 0, 0, 0, 0, 0, 0, 0],
            staticNanpaLipu: false,//Should the lipu meter be stuck?
            lipuMeters: [0, 0],
            staticHealth: true,//Should the health bars be stuck?
            healthMeters: [1, 1],
            resetFunctions: {
                always: () => { return true; },
                neutral: () => {
                    return (this.player1.currentState.name === "walk" || this.player1.currentState.name === "neutral") && 
                           (this.player2.currentState.name === "walk" || this.player2.currentState.name === "neutral");
                },
                opponentNeutral: () => {
                    return (this.getNonTrainingPlayer().currentState.name === "walk" || this.getNonTrainingPlayer().currentState.name === "neutral");
                }
            }
        };
        this.trainingSettings.meter.sikeResetFunction = this.trainingSettings.meter.resetFunctions.neutral;
        this.trainingSettings.meter.lipuResetFunction = this.trainingSettings.meter.resetFunctions.neutral;
        this.trainingSettings.meter.healthResetFunction = this.trainingSettings.meter.resetFunctions.opponentNeutral;

        this.trainingSettings.display = {
            isVisible: true,
            dealtDamage: 0,
            percentDamage: 0,
            proration: 0,
            lastState: "",
            lastCanStates: "",
            lastCanStates2: ""
        };

        let select = assetManager.images.buttonPressedLanguage;
        let deselect = assetManager.images.buttonUnpressedLanguage;

        //let pressedButton =
        this.paused = false;
        this.bufferUnpause = -1;

        this.pauseMenu = new Menu();
        this.currentMenu = this.pauseMenu;

        //opponent menu
        let opponentButton = new MenuItem(-750, 25, select, deselect, undefined, gt("opponentSettingsButton"), () => {
            this.currentMenu = this.opponentMenu;
            this.opponentMenuOn = true;
        });
        if (currentLanguage === "en")
            opponentButton.textSize = 23;
        this.opponentMenu = new Menu();
        this.opponentMenuOn = false;

        let opponentBlockingButton = new MenuItem(150, 25, select, deselect, undefined, gt("opponentBlockingButton"), () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.block.isBlocking = !this.trainingControls.trainingSettings.block.isBlocking;
                this.trainingControls.trainingSettings.block.isHit = !this.trainingControls.trainingSettings.block.isBlocking;
            }
        });
        let opponentNeutralBlockButton = new MenuItem(150, 60, select, deselect, undefined, gt("opponentNeutralBlockButton"), () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.block.isBlocking = false;
                this.trainingControls.trainingSettings.block.isHit = !this.trainingControls.trainingSettings.block.isHit;
            }
        });
        let opponentCounterHitButton = new MenuItem(150, 95, select, deselect, undefined, gt("opponentCounterButton"), () => {
            if (this.trainingControls)
                this.trainingControls.trainingSettings.block.isCounter = !this.trainingControls.trainingSettings.block.isCounter;
        });

        opponentBlockingButton.addMoves(new MenuMove(opponentNeutralBlockButton, Angle.DOWN));
        opponentNeutralBlockButton.addMoves(new MenuMove(opponentBlockingButton, Angle.UP));
        opponentNeutralBlockButton.addMoves(new MenuMove(opponentCounterHitButton, Angle.DOWN));
        opponentCounterHitButton.addMoves(new MenuMove(opponentNeutralBlockButton, Angle.UP));

        this.opponentMenu.addMenuItems(opponentBlockingButton, opponentNeutralBlockButton, opponentCounterHitButton);

        this.opponentMenu.setTarget(opponentBlockingButton);
        //

        let displayButton = new MenuItem(-750, 75, select, deselect, undefined, gt("displaySettingsButton"), () => {
            this.currentMenu = this.displayMenu;
            this.displayMenuOn = true;
        });
        if (currentLanguage === "en")
            displayButton.textSize = 23;
        this.displayMenu = new Menu();
        this.displayMenuOn = false;

        let displayFrameDataButton = new MenuItem(150, 25, select, deselect, undefined, gt("displayFrameDataButton"), () => {
            this.trainingSettings.display.isVisible = !this.trainingSettings.display.isVisible;
        });
        if (currentLanguage === "en")
            displayFrameDataButton.textSize = 23;
        let displayHurtboxesButton = new MenuItem(150, 60, select, deselect, undefined, gt("displayHurtboxesButton"), () => {
            debug.displayHurtboxes = !debug.displayHurtboxes;
        });
        if (currentLanguage === "en")
            displayHurtboxesButton.textSize = 28;
        let displayHitboxesButton = new MenuItem(150, 95, select, deselect, undefined, gt("displayHitboxesButton"), () => {
            debug.displayHitboxes = !debug.displayHitboxes;
        });
        let displayBlockingButton = new MenuItem(150, 130, select, deselect, undefined, gt("displayBlockingButton"), () => {
            debug.displayBlocking = !debug.displayBlocking;
        });
        if (currentLanguage === "en")
            displayBlockingButton.textSize = 20;
        let displayWallsButton = new MenuItem(150, 165, select, deselect, undefined, gt("displayWallsButton"), () => {
            debug.displayWalls = !debug.displayWalls;
        });

        displayFrameDataButton.addMoves(new MenuMove(displayHurtboxesButton, Angle.DOWN));
        displayHurtboxesButton.addMoves(new MenuMove(displayFrameDataButton, Angle.UP), new MenuMove(displayHitboxesButton, Angle.DOWN));
        displayHitboxesButton.addMoves(new MenuMove(displayHurtboxesButton, Angle.UP), new MenuMove(displayBlockingButton, Angle.DOWN));
        displayBlockingButton.addMoves(new MenuMove(displayHitboxesButton, Angle.UP), new MenuMove(displayWallsButton, Angle.DOWN));
        displayWallsButton.addMoves(new MenuMove(displayBlockingButton, Angle.UP));

        this.displayMenu.addMenuItems(displayFrameDataButton, displayHurtboxesButton, displayHitboxesButton, displayBlockingButton, displayWallsButton);

        this.displayMenu.setTarget(displayFrameDataButton);

        /*
        debug.controlFrameRateMouse = false;
        debug.manualFrameAdvance = false;*/


        let exitButton = new MenuItem(-750, 125, select, deselect, undefined, gt("trainingExitButton"), () => {
            this.destruct();
            currentScreen = new MenuDebugScreen();
        });

        opponentButton.addMoves(new MenuMove(displayButton, Angle.DOWN));
        displayButton.addMoves(new MenuMove(opponentButton, Angle.UP));
        displayButton.addMoves(new MenuMove(exitButton, Angle.DOWN));
        exitButton.addMoves(new MenuMove(displayButton, Angle.UP));

        this.pauseMenu.addMenuItems(opponentButton, displayButton, exitButton);
        this.pauseMenu.setTarget(opponentButton);

        this.closeMenus = () => {
            this.opponentMenuOn = false;//Every sub-menu needs to be added here :(
            this.displayMenuOn = false;
        };

        assetManager.loadAssetsWithScreen();
    }

    run() {
        if (this.trainingSettings.meter.staticSikeWawa && this.trainingSettings.meter.sikeResetFunction()) {
            for (let i in this.world.sikeWawa.slices) {
                this.world.sikeWawa.slices[i].setMeter(this.trainingSettings.meter.meters[i]);
            }
        }
        if (this.trainingSettings.meter.staticNanpaLipu && this.trainingSettings.meter.lipuResetFunction()) {
            for (let i in this.world.players) {
                this.world.players[i].nanpaLipu = this.trainingSettings.meter.lipuMeters[i];
            }
        }
        if (this.trainingSettings.meter.staticHealth && this.trainingSettings.meter.healthResetFunction()) {
            for (let i in this.world.players) {
                this.world.players[i].health = this.trainingSettings.meter.healthMeters[i] * this.world.players[i].maxHealth;
            }
        }

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

        if (!this.paused) {
            this.world.run(this);
        } else {
            this.currentMenu.run();
        }

        this.world.timer = 100;

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
                this.paused = !this.paused;
                this.pausedPlayer = i;
                break;
            }
            if (controls[i].clickedAbsolute("back") && this.paused) {
                if (this.currentMenu !== this.pauseMenu) {
                    this.currentMenu = this.pauseMenu;
                    this.closeMenus();
                } else {
                    this.bufferUnpause = 4;
                    controls[i].clickedInGame = 0;
                }
            }
            if (controls[i].pressed("nasa") && controls[i].pressed("lili") && controls[i].pressed("pokaLili") && !this.paused) {
                this.world.deserialize(this.trainingSettings.positionReset);
                break;
            }
            if (controls[i].pressed("nasa") && controls[i].pressed("suli") && controls[i].pressed("pokaSuli") && !this.paused) {
                this.trainingSettings.positionReset = this.world.serialize();
                break;
            }
        }
    }

    convertState(name) {
        switch (name) {
            case "power dash":
                return "TW";
            case "dash":
                return "T";
            case "dash cancel":
                return "TL";
            case "dash attack":
                return "UT";
            case "hitstun":
                return gt("hit");
            case "block":
                return gt("block");
            case "attack":
                return gt("attack");
            case "dead":
                return gt("dead");
            case "lili":
                return "L";
            case "poka lili":
                return "PL";
            case "suli":
                return "S";
            case "poka suli":
                return "PS";
            case "nasa":
                return "N";
            case "block cancel":
                return "";
            case "oob":
                return "mN";
            case "UTK":
                return "UT";
            case "UTU":
                return "UT";
            case "UTT":
                return "UT";
            case "UTA":
                return "UT";
            case "rightRoll":
                return "";
            case "leftRoll":
                return "";
            case "neutralRoll":
                return "";
            case "grab":
                return gt("grab");
            case "grabbed":
                return gt("grabbed");
        }

        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    getNonTrainingPlayer() {
        return (this.player1 === this.trainingPlayer ? this.player2 : this.player1);
    }

    drawDisplay(g, x, y, width, height) {
        if (this.trainingSettings.display.isVisible) {
            g.fill(0, 0, 14, 75);
            g.stroke(0, 0, 14, 150);
            g.strokeWeight(2);

            g.rect(x + width / 4, y + height / 8, width / 2, height / 3.5);

            g.noStroke();
            g.fill(240, 240, 250);
            g.textSize(25 * width / 512);
            g.textFont(assetManager.fonts.asuki);
            g.textAlign(LEFT, BASELINE);
            let theirPlayer = (this.player1 === this.trainingPlayer ? this.player2 : this.player1);
            g.text("󱥫: " + (-theirPlayer.advantage > 0 ? "+" : "") + -theirPlayer.advantage, x + width / 4, y + height / 8 + 25 * width / 512);
            g.text("󱥫󱥱: " + (-theirPlayer.cancelAdvantage > 0 ? "+" : "") + -theirPlayer.cancelAdvantage, x + width / 4, y + height / 8 + 50 * width / 512);
            g.text("󱥫/mN: " + (-theirPlayer.oobAdvantage > 0 ? "+" : "") + -theirPlayer.oobAdvantage, x + width / 4, y + height / 8 + 75 * width / 512);
            g.text("󱥫󱥱/mN: " + (-theirPlayer.oobCancelAdvantage > 0 ? "+" : "") + -theirPlayer.oobCancelAdvantage, x + width / 4, y + height / 8 + 100 * width / 512);

            if (theirPlayer.currentState.name !== "neutral" && this.trainingPlayer.currentState.name !== "walk") {
                this.trainingSettings.display.dealtDamage = theirPlayer.dealtDamage;
                this.trainingSettings.display.percentDamage = theirPlayer.percentDamage;
                this.trainingSettings.display.proration = round((theirPlayer.comboProration + theirPlayer.combo) * 10) / 10;
            }
            if (this.trainingPlayer.currentState.name !== "neutral" && this.trainingPlayer.currentState.name !== "walk") {
                this.trainingSettings.display.lastState = this.convertState(this.trainingPlayer.currentState.name);
                this.trainingSettings.display.lastCanStates = "";
                this.trainingSettings.display.lastCanStates2 = "";
                let bool = true;
                for (let i in this.trainingPlayer.actions) {
                    let name = this.convertState(this.trainingPlayer.actions[i]);
                    if (name !== "") {
                        if (bool) {
                            this.trainingSettings.display.lastCanStates += "\n";
                            this.trainingSettings.display.lastCanStates += name;
                        } else {
                            this.trainingSettings.display.lastCanStates2 += "\n";
                            this.trainingSettings.display.lastCanStates2 += name;
                        }
                        bool = !bool;
                    }
                }
            }

            g.textSize(15 * width / 512);
            g.text("󱥉: " + this.trainingSettings.display.lastState, x + width / 2 + 25 * width / 512, y + height / 8 + 25 * width / 512);
            g.text("󱥈: " + this.trainingSettings.display.dealtDamage, x + width / 2 + 25 * width / 512, y + height / 8 + 40 * width / 512);
            g.text("󱥻󱥈: " + this.trainingSettings.display.percentDamage + "%", x + width / 2 + 25 * width / 512, y + height / 8 + 55 * width / 512);
            g.text("󱤨󱥈: " + this.trainingSettings.display.proration, x + width / 2 + 25 * width / 512, y + height / 8 + 70 * width / 512);

            g.text("󱤘󱥉: " + this.trainingSettings.display.lastCanStates, x + width - 75 * width / 512, y + height / 8 + 35 * width / 512);
            g.text(this.trainingSettings.display.lastCanStates2, x + width - 35 * width / 512, y + height / 8 + 35 * width / 512);
        }
    }

    draw(g) {
        g.background(35, 65, 35);

        //this.world.g.background(55, 155, 45);
        //this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        this.drawDisplay(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        if (this.paused) {
            g.textFont(assetManager.fonts.asuki);
            g.noStroke();
            g.fill(15, 0, 0, 140);
            g.rect(0, 0, windowWidth / 3.5, windowHeight);

            g.textAlign(CENTER, CENTER);
            g.textSize(80 * windowHeight / 384);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.pausedPlayer === 1)
                g.fill(47, 31, 171);
            //g.text(gt("trainingSettingsTitle"), windowWidth / 2, windowHeight / 2);//Training settings / ante lawa pi kama sona
            this.pauseMenu.draw(g, windowWidth / 4, windowHeight, windowWidth / 3.6, windowHeight / 12);
            if (this.opponentMenuOn) {
                g.noStroke();
                g.fill(15, 0, 60, 150);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.opponentMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                if (this.trainingControls) {
                    this.drawButton(g, this.trainingControls.trainingSettings.block.isBlocking, 400, 25, 60);
                    this.drawButton(g, !this.trainingControls.trainingSettings.block.isBlocking && !this.trainingControls.trainingSettings.block.isHit, 400, 60, 60);
                    this.drawButton(g, this.trainingControls.trainingSettings.block.isCounter, 400, 95, 60);
                }

                g.pop();
            }
            if (this.displayMenuOn) {
                g.noStroke();
                g.fill(15, 0, 60, 150);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.displayMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                this.drawButton(g, this.trainingSettings.display.isVisible, 400, 25, 60);
                this.drawButton(g, debug.displayHurtboxes, 400, 60, 60);
                this.drawButton(g, debug.displayHitboxes, 400, 95, 60);
                this.drawButton(g, debug.displayBlocking, 400, 130, 60);
                this.drawButton(g, debug.displayWalls, 400, 165, 60);

                g.pop();
            }
        }
    }

    drawButton(g, bool, x, y, width=400, height=width*224/400) {
        if (bool) {
            g.image(assetManager.images.buttonOn, x, y, width, height);
        } else {
            g.image(assetManager.images.buttonOff, x, y, width, height);
        }
    }

    initLater() {
        this.world = new stages[this.stageID](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        this.world.setFirstTo(this.firstTo);
        //g.noSmooth();

        this.player1 = new characters[this.player1CharacterID]();
        this.player2 = new characters[this.player2CharacterID]();

        if (this.player1Controls === null) {
            this.player1Controls = new TrainingComputer(this.player1, this.world);
            controls.push(this.player1Controls);
            this.trainingControls = this.player1Controls;
            this.trainingPlayer = this.player2;
        }
        if (this.player2Controls === null) {
            this.player2Controls = new TrainingComputer(this.player2, this.world);
            controls.push(this.player2Controls);
            this.trainingControls = this.player2Controls;
            this.trainingPlayer = this.player1;
        }
        if (!this.trainingPlayer) {
            this.trainingPlayer = this.player1;
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

        //this.world.addShouldLoad();
    }

    destruct() {
        debug.displayHurtboxes = false;
        debug.displayHitboxes = false;
        debug.displayWalls = false;
        debug.displayBlocking = false;
        debug.controlFrameRateMouse = false;
        debug.manualFrameAdvance = false;

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

    loaded() {
        this.world.copyAssets();
        this.world.playMusic();
    }
}