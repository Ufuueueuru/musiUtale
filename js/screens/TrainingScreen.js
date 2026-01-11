/** The screen for training mode */
class TrainingScreen extends VSScreen {
    constructor(characters, controls, stageID, firstToWin = 0) {
        super(characters, controls, stageID, firstToWin);

        /** @type {Object} */
        this.trainingSettings = {};

        /*this.world.startCountdown = 0;
        this.world.timer = 100;
        this.player1.canMove = true;
        this.player1.canAttack = true;
        this.player2.canMove = true;
        this.player2.canAttack = true;
        this.trainingSettings.positionReset = this.world.serialize();*/
        this.world.addShouldLoad();
        /*this.world.startCountdown = this.world.countdownMax;
        this.player1.canMove = false;
        this.player1.canAttack = false;
        this.player2.canMove = false;
        this.player2.canAttack = false;*/

        this.trainingSettings.meter = {
            staticSikeWawa: false,//Should the sike wawa meter be stuck how it is?
            meters: [0, 0, 0, 0, 0, 0, 0, 0],
            staticNanpaLipu: false,//Should the lipu meter be stuck?
            lipuMeters: [0, 0],
            staticHealth: true,//Should the health bars be stuck?
            healthMeters: [1, 1],
            resetFunctions: {
                always: (p) => { return true; },
                neutralPlayer: (p) => {
                    return (p.currentState.name === "walk" || p.currentState.name === "neutral");
                },
                neutralAction: (p) => {
                    return (State.stateIs(p.currentState, "neutral action"));
                },
                neutral: () => {
                    return (this.player1.currentState.name === "walk" || this.player1.currentState.name === "neutral") && 
                           (this.player2.currentState.name === "walk" || this.player2.currentState.name === "neutral");
                },
                opponentNeutral: () => {
                    return (this.getNonTrainingPlayer().currentState.name === "walk" || this.getNonTrainingPlayer().currentState.name === "neutral");
                }
            },
            sikeResetBuffer: 0,
            sikeResetNeed: 1,//Reset 1 frame after the condition is fulfilled
            lipuResetBuffer: [0, 0],
            lipuResetNeed: 1,//Reset 1 frame after the condition is fulfilled
            healthResetBuffer: [0, 0],
            healthResetNeed: 1//Reset 1 frame after the condition is fulfilled
        };
        this.trainingSettings.meter.sikeResetFunction = this.trainingSettings.meter.resetFunctions.neutral;
        this.trainingSettings.meter.lipuResetFunction = this.trainingSettings.meter.resetFunctions.neutralPlayer;
        this.trainingSettings.meter.healthResetFunction = this.trainingSettings.meter.resetFunctions.neutralAction;

        this.trainingSettings.display = {
            isVisible: true,
            HUD: true,
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

        //Opponent menu
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
        let opponentParryButton = new MenuItem(150, 95, select, deselect, undefined, gt("opponentParryButton"), () => {
            if (this.trainingControls)
                this.trainingControls.trainingSettings.block.isParry = !this.trainingControls.trainingSettings.block.isParry;
        });
        let opponentCounterHitButton = new MenuItem(150, 130, select, deselect, undefined, gt("opponentCounterButton"), () => {
            if (this.trainingControls)
                this.trainingControls.trainingSettings.block.isCounter = !this.trainingControls.trainingSettings.block.isCounter;
        });

        opponentBlockingButton.addMoves(new MenuMove(opponentNeutralBlockButton, Angle.DOWN));
        opponentNeutralBlockButton.addMoves(new MenuMove(opponentBlockingButton, Angle.UP));
        opponentNeutralBlockButton.addMoves(new MenuMove(opponentParryButton, Angle.DOWN));
        opponentParryButton.addMoves(new MenuMove(opponentNeutralBlockButton, Angle.UP));
        opponentParryButton.addMoves(new MenuMove(opponentCounterHitButton, Angle.DOWN));
        opponentCounterHitButton.addMoves(new MenuMove(opponentParryButton, Angle.UP));

        this.opponentMenu.addMenuItems(opponentBlockingButton, opponentNeutralBlockButton, opponentParryButton, opponentCounterHitButton);

        this.opponentMenu.setTarget(opponentBlockingButton);
        
        //Display menu
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
        let displayHUDButton = new MenuItem(150, 60, select, deselect, undefined, gt("displayHUDButton"), () => {
            this.trainingSettings.display.HUD = !this.trainingSettings.display.HUD;
        });
        if (currentLanguage === "en")
            displayFrameDataButton.textSize = 23;
        let displayHurtboxesButton = new MenuItem(150, 96, select, deselect, undefined, gt("displayHurtboxesButton"), () => {
            debug.displayHurtboxes = !debug.displayHurtboxes;
        });
        if (currentLanguage === "en")
            displayHurtboxesButton.textSize = 28;
        let displayHitboxesButton = new MenuItem(150, 130, select, deselect, undefined, gt("displayHitboxesButton"), () => {
            debug.displayHitboxes = !debug.displayHitboxes;
        });
        let displayBlockingButton = new MenuItem(150, 165, select, deselect, undefined, gt("displayBlockingButton"), () => {
            debug.displayBlocking = !debug.displayBlocking;
        });
        if (currentLanguage === "en")
            displayBlockingButton.textSize = 20;
        let displayWallsButton = new MenuItem(150, 200, select, deselect, undefined, gt("displayWallsButton"), () => {
            debug.displayWalls = !debug.displayWalls;
        });

        displayFrameDataButton.addMoves(new MenuMove(displayHUDButton, Angle.DOWN));
        displayHUDButton.addMoves(new MenuMove(displayFrameDataButton, Angle.UP), new MenuMove(displayHurtboxesButton, Angle.DOWN));
        displayHurtboxesButton.addMoves(new MenuMove(displayHUDButton, Angle.UP), new MenuMove(displayHitboxesButton, Angle.DOWN));
        displayHitboxesButton.addMoves(new MenuMove(displayHurtboxesButton, Angle.UP), new MenuMove(displayBlockingButton, Angle.DOWN));
        displayBlockingButton.addMoves(new MenuMove(displayHitboxesButton, Angle.UP), new MenuMove(displayWallsButton, Angle.DOWN));
        displayWallsButton.addMoves(new MenuMove(displayBlockingButton, Angle.UP));

        this.displayMenu.addMenuItems(displayFrameDataButton, displayHUDButton, displayHurtboxesButton, displayHitboxesButton, displayBlockingButton, displayWallsButton);

        this.displayMenu.setTarget(displayFrameDataButton);


        //Meter menu
        let meterButton = new MenuItem(-750, 125, select, deselect, undefined, gt("meterButton"), () => {
            this.currentMenu = this.meterMenu;
            this.meterMenuOn = true;
        });
        if (currentLanguage === "en")
            meterButton.textSize = 23;
        this.meterMenu = new Menu();
        this.meterMenuOppn = false;

        let resetHealthButton = new MenuItem(150, 25, select, deselect, undefined, gt("resetHealthButton"), () => {
            this.trainingSettings.meter.staticHealth = !this.trainingSettings.meter.staticHealth;
        });
        let resetSikeWawaButton = new MenuItem(150, 60, select, deselect, undefined, gt("resetSikeWawaButton"), () => {
            this.trainingSettings.meter.staticSikeWawa = !this.trainingSettings.meter.staticSikeWawa;
        });
        resetSikeWawaButton.textSize = 25;
        if (currentLanguage === "en")
            resetSikeWawaButton.textSize = 23;
        let resetNanpaLipuButton = new MenuItem(150, 95, select, deselect, undefined, gt("resetNanpaLipuButton"), () => {
            this.trainingSettings.meter.staticNanpaLipu = !this.trainingSettings.meter.staticNanpaLipu;
        });
        resetNanpaLipuButton.textSize = 25;
        if (currentLanguage === "en")
            resetNanpaLipuButton.textSize = 23;

        resetHealthButton.addMoves(new MenuMove(resetSikeWawaButton, Angle.DOWN));
        resetSikeWawaButton.addMoves(new MenuMove(resetHealthButton, Angle.UP), new MenuMove(resetNanpaLipuButton, Angle.DOWN));
        resetNanpaLipuButton.addMoves(new MenuMove(resetSikeWawaButton, Angle.UP));

        this.meterMenu.addMenuItems(resetHealthButton, resetSikeWawaButton, resetNanpaLipuButton);

        this.meterMenu.setTarget(resetHealthButton);


        //Meter menu
        let autoAttackButton = new MenuItem(-750, 175, select, deselect, undefined, gt("autoAttackButton"), () => {
            this.currentMenu = this.autoAttackMenu;
            this.autoAttackMenuOn = true;
        });
        if (currentLanguage === "en")
            autoAttackButton.textSize = 18;
        this.autoAttackMenu = new Menu();
        this.autoAttackMenuOn = false;

        let reversalButton = new MenuItem(130, 25, select, deselect, undefined, gt("reversalButton") + (this.trainingControls?.trainingSettings.reversal.fromBlock ? "󱥱" : "󱤂"), () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.reversal.fromBlock = !this.trainingControls.trainingSettings.reversal.fromBlock;
                reversalButton.text = gt("reversalButton") + (this.trainingControls.trainingSettings.reversal.fromBlock ? "󱥱" : "󱤂");
            }
        });
        reversalButton.textSize = 25;
        if (currentLanguage === "en")
            reversalButton.textSize = 18;

        let reversalHitButton = new MenuItem(330, 25, select, deselect, undefined, gt("reversalHitButton") + (this.trainingControls?.trainingSettings.reversal.fromHit ? "󱥱" : "󱤂"), () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.reversal.fromHit = !this.trainingControls.trainingSettings.reversal.fromHit;
                reversalHitButton.text = gt("reversalHitButton") + (this.trainingControls.trainingSettings.reversal.fromHit ? "󱥱" : "󱤂");
            }
        });
        reversalHitButton.textSize = 25;
        if (currentLanguage === "en")
            reversalHitButton.textSize = 20;

        let reversalDirectionSelector = new MenuSelector(530, 25, select, deselect, ["n", "s", "r", "l", "m"], (selecting, text) => {
            if (this.trainingControls && selecting) {
                this.updateReversalAction(text.toUpperCase(), undefined, reversalDirectionSelector);
            }
        });
        reversalDirectionSelector.widthMult = 0.15;
        reversalDirectionSelector.setSelected(4);
        reversalDirectionSelector.textSize = 22;

        let reversalButtonSelector = new MenuSelector(560, 25, select, deselect, ["L", "S", "PL", "PS", "N", "UT", "T", "TW"], (selecting, text) => {
            if (this.trainingControls && selecting) {
                this.updateReversalAction(undefined, text, reversalDirectionSelector);
            }
        });
        reversalButtonSelector.widthMult = 0.15;
        reversalButtonSelector.setSelected(4);
        reversalButtonSelector.textSize = 22;

        let choices = [];
        for (let i = 60; i > 0; i--) {
            choices.push("󱥫" + i + "");
        }
        let reversalHoldSelector = new MenuSelector(590, 25, select, deselect, choices, (selecting, text) => {
            if (this.trainingControls && selecting) {
                this.trainingControls.trainingSettings.reversal.hold = parseInt(text.substring(1));
            }
        });
        reversalHoldSelector.widthMult = 0.24;
        reversalHoldSelector.setSelected(59);
        reversalHoldSelector.textSize = 20;

        let reversalDirSelector = new MenuDirSelector(130, 75, select, deselect, gt("reversalDirSelector"), (selecting, dirValue) => {
            if (this.trainingControls && selecting) {
                this.trainingControls.trainingSettings.reversal.dir = dirValue;
            }
        });
        reversalDirSelector.widthMult = 0.40;
        reversalDirSelector.textSize = 23;

        let reversalDirResetButton = new MenuItem(280, 75, select, deselect, undefined, gt("reversalDirResetButton"), () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.reversal.dir = "N";
                reversalDirSelector.selectedDirValue = "N";
            }
        });
        reversalDirResetButton.textSize = 12;
        reversalDirResetButton.widthMult = 0.25;

        let choices2 = [];
        for (let i = 60; i >= 0; i--) {
            choices2.push("󱥫" + i + "");
        }
        let reversalDirHoldSelector = new MenuSelector(340, 75, select, deselect, choices2, (selecting, text) => {
            if (this.trainingControls && selecting) {
                this.trainingControls.trainingSettings.reversal.dirHold = parseInt(text.substring(1));
            }
        });
        reversalDirHoldSelector.widthMult = 0.24;
        reversalDirHoldSelector.setSelected(60);
        reversalDirHoldSelector.textSize = 20;

        let reversalThresholdTypeSelector = new MenuSelector(470, 75, undefined, undefined, ["󱥫", "󱥫󱥱", "󱥫/mN", "󱥫󱥱/mN"], (selecting, text, i) => {
            if (this.trainingControls && selecting) {
                this.trainingControls.trainingSettings.reversal.advantageMode = ["standard", "cancel", "oob", "oobCancel"][i];
            }
        });
        reversalThresholdTypeSelector.widthMult = 0.25;
        reversalThresholdTypeSelector.textSize = 20;

        let reversalThresholdButton = new MenuItem(450, 75, select, deselect, undefined, "   --", () => {
            if (this.trainingControls) {
                this.trainingControls.trainingSettings.reversal.isThreshold = !this.trainingControls.trainingSettings.reversal.isThreshold;
                if (this.trainingControls.trainingSettings.reversal.isThreshold) {
                    reversalThresholdButton.text = "   <=";
                } else {
                    reversalThresholdButton.text = "   --";
                }
            }
        });
        reversalThresholdButton.textSize = 30;
        reversalThresholdButton.widthMult = 0.9;
        if (currentLanguage === "en")
            reversalThresholdButton.textSize = 20;

        let choices3 = [];
        for (let i = 60; i >= -60; i--) {
            choices3.push((i >= 0 ? "+" : "") + i);
        }
        let reversalThresholdSelector = new MenuSelector(570, 75, undefined, undefined, choices3, (selecting, text) => {
            if (this.trainingControls && selecting) {
                this.trainingControls.trainingSettings.reversal.frameAdvantageThreshold = -parseInt(text);
            }
        });
        reversalThresholdSelector.widthMult = 0.15;
        reversalThresholdSelector.setSelected(60);
        reversalThresholdSelector.textSize = 22;

        reversalButton.addMoves(new MenuMove(reversalHitButton, Angle.RIGHT), new MenuMove(reversalDirSelector, Angle.DOWN));
        reversalHitButton.addMoves(new MenuMove(reversalButton, Angle.LEFT), new MenuMove(reversalDirectionSelector, Angle.RIGHT));
        reversalDirectionSelector.addMoves(new MenuMove(reversalHitButton, Angle.LEFT), new MenuMove(reversalButtonSelector, Angle.RIGHT));
        reversalButtonSelector.addMoves(new MenuMove(reversalDirectionSelector, Angle.LEFT), new MenuMove(reversalHoldSelector, Angle.RIGHT));
        reversalHoldSelector.addMoves(new MenuMove(reversalButtonSelector, Angle.LEFT));

        reversalDirSelector.addMoves(new MenuMove(reversalButton, Angle.UP));
        reversalDirSelector.addMoves(new MenuMove(reversalDirResetButton, Angle.RIGHT));
        reversalDirResetButton.addMoves(new MenuMove(reversalDirSelector, Angle.LEFT), new MenuMove(reversalDirHoldSelector, Angle.RIGHT));
        reversalDirHoldSelector.addMoves(new MenuMove(reversalDirResetButton, Angle.LEFT), new MenuMove(reversalThresholdTypeSelector, Angle.RIGHT));
        reversalThresholdTypeSelector.addMoves(new MenuMove(reversalDirHoldSelector, Angle.LEFT), new MenuMove(reversalThresholdButton, Angle.RIGHT));
        reversalThresholdButton.addMoves(new MenuMove(reversalThresholdTypeSelector, Angle.LEFT), new MenuMove(reversalThresholdSelector, Angle.RIGHT));
        reversalThresholdSelector.addMoves(new MenuMove(reversalThresholdButton, Angle.LEFT));

        this.autoAttackMenu.addMenuItems(reversalButton, reversalHitButton, reversalDirectionSelector, reversalButtonSelector, reversalHoldSelector, reversalDirSelector, reversalDirResetButton, reversalDirHoldSelector, reversalThresholdButton, reversalThresholdTypeSelector, reversalThresholdSelector);

        this.autoAttackMenu.setTarget(reversalButton);



        let exitButton = new MenuItem(-750, 225, select, deselect, undefined, gt("trainingExitButton"), () => {
            this.destruct();
            currentScreen = new MenuDebugScreen();
        });

        opponentButton.addMoves(new MenuMove(displayButton, Angle.DOWN));
        displayButton.addMoves(new MenuMove(opponentButton, Angle.UP));
        displayButton.addMoves(new MenuMove(meterButton, Angle.DOWN));
        meterButton.addMoves(new MenuMove(displayButton, Angle.UP));
        meterButton.addMoves(new MenuMove(autoAttackButton, Angle.DOWN));
        autoAttackButton.addMoves(new MenuMove(meterButton, Angle.UP));
        autoAttackButton.addMoves(new MenuMove(exitButton, Angle.DOWN));
        exitButton.addMoves(new MenuMove(autoAttackButton, Angle.UP));

        this.pauseMenu.addMenuItems(opponentButton, displayButton, meterButton, autoAttackButton, exitButton);
        this.pauseMenu.setTarget(opponentButton);

        this.closeMenus = () => {
            this.opponentMenuOn = false;//Every sub-menu needs to be added here :(
            this.displayMenuOn = false;
            this.meterMenuOn = false;
            this.autoAttackMenuOn = false;
        };

        assetManager.loadAssetsWithScreen();
    }

    run() {
        if (this.trainingSettings.meter.staticSikeWawa && this.trainingSettings.meter.sikeResetFunction()) {
            this.trainingSettings.meter.sikeResetBuffer++;
            if (this.trainingSettings.meter.sikeResetBuffer > this.trainingSettings.meter.sikeResetNeed) {
                for (let i in this.world.sikeWawa.slices) {
                    this.world.sikeWawa.slices[i].setMeter(this.trainingSettings.meter.meters[i]);
                }
            }
        } else {
            this.trainingSettings.meter.sikeResetBuffer = 0;
        }
        if (this.trainingSettings.meter.staticNanpaLipu) {
            for (let i in this.world.players) {
                if (this.trainingSettings.meter.lipuResetFunction(this.world.players[i])) {
                    this.trainingSettings.meter.lipuResetBuffer[i]++;
                } else {
                    this.trainingSettings.meter.lipuResetBuffer[i] = 0;
                }
                if (this.trainingSettings.meter.lipuResetBuffer[i] > this.trainingSettings.meter.lipuResetNeed) {
                    this.world.players[i].nanpaLipu = this.trainingSettings.meter.lipuMeters[i];
                }
            }
        }
        if (this.trainingSettings.meter.staticHealth) {
            for (let i in this.world.players) {
                if (this.trainingSettings.meter.healthResetFunction(this.world.players[i])) {
                    this.trainingSettings.meter.healthResetBuffer[i]++;
                } else {
                    this.trainingSettings.meter.healthResetBuffer[i] = 0;
                }
                if (this.trainingSettings.meter.healthResetBuffer[i] > this.trainingSettings.meter.healthResetNeed) {
                    this.world.players[i].health = this.trainingSettings.meter.healthMeters[i] * this.world.players[i].maxHealth;
                    this.world.players[i].tempDamageCount = 0;
                }
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
                    if (!this.currentMenu.target.negateMove) {
                        this.currentMenu = this.pauseMenu;
                        this.closeMenus();
                    } else {
                        this.currentMenu.selectItem();
                    }
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

    updateReversalAction(dir = undefined, button = undefined, menuItem) {
        if (this.trainingControls) {
            if (dir !== undefined)
                this.trainingControls.trainingSettings.reversal.actionDir = dir;
            if (button !== undefined)
                this.trainingControls.trainingSettings.reversal.actionButton = button;
            if (this.trainingControls.trainingSettings.reversal.actionButton === "UT") {
                this.trainingControls.trainingSettings.reversal.action = "dash attack";
                menuItem.text = "";
            } else if (this.trainingControls.trainingSettings.reversal.actionButton === "T") {
                this.trainingControls.trainingSettings.reversal.action = "dash";
                menuItem.text = "";
            } else {
                this.trainingControls.trainingSettings.reversal.action = this.trainingControls.trainingSettings.reversal.actionDir + this.trainingControls.trainingSettings.reversal.actionButton;
                if (menuItem.text === "") {
                    menuItem.text = menuItem.texts[menuItem.selectedText];
                }
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
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope, this.trainingSettings.display.HUD);

        this.drawDisplay(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        if (this.paused) {
            g.textFont(assetManager.fonts.asuki);
            g.noStroke();
            g.fill(15, 0, 0, 200);
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
                g.fill(15, 0, 60, 200);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.opponentMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                if (this.trainingControls) {
                    this.drawButton(g, this.trainingControls.trainingSettings.block.isBlocking, 400, 25, 60);
                    this.drawButton(g, !this.trainingControls.trainingSettings.block.isBlocking && !this.trainingControls.trainingSettings.block.isHit, 400, 60, 60);
                    this.drawButton(g, this.trainingControls.trainingSettings.block.isParry, 400, 95, 60);
                    this.drawButton(g, this.trainingControls.trainingSettings.block.isCounter, 400, 130, 60);
                }

                g.pop();
            }
            if (this.displayMenuOn) {
                g.noStroke();
                g.fill(15, 0, 60, 200);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.displayMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                this.drawButton(g, this.trainingSettings.display.isVisible, 400, 25, 60);
                this.drawButton(g, this.trainingSettings.display.HUD, 400, 60, 60);
                this.drawButton(g, debug.displayHurtboxes, 400, 95, 60);
                this.drawButton(g, debug.displayHitboxes, 400, 130, 60);
                this.drawButton(g, debug.displayBlocking, 400, 165, 60);
                this.drawButton(g, debug.displayWalls, 400, 200, 60);

                g.pop();
            }
            if (this.meterMenuOn) {
                g.noStroke();
                g.fill(15, 0, 60, 200);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.meterMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                this.drawButton(g, this.trainingSettings.meter.staticHealth, 400, 25, 60);
                this.drawButton(g, this.trainingSettings.meter.staticSikeWawa, 400, 60, 60);
                this.drawButton(g, this.trainingSettings.meter.staticNanpaLipu, 400, 95, 60);

                g.pop();
            }
            if (this.autoAttackMenuOn) {
                g.noStroke();
                g.fill(15, 0, 60, 200);
                g.rect(windowWidth / 3, 0, windowWidth * 2 / 3, windowHeight);
                this.autoAttackMenu.draw(g, windowWidth * 2 / 3, windowHeight, windowWidth / 4, windowHeight / 12);

                g.push();
                g.translate(windowWidth / 2, 0);
                g.scale(windowHeight / 384);
                g.translate(-256, 0);

                //this.drawButton(g, this.trainingSettings.meter.staticSikeWawa, 400, 25, 60);

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

        this.world.destruct();

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

        this.world.startCountdown = 0;
        this.world.timer = 100;
        this.player1.canMove = true;
        this.player1.canAttack = true;
        this.player2.canMove = true;
        this.player2.canAttack = true;
        this.trainingSettings.positionReset = this.world.serialize();
        this.world.startCountdown = this.world.countdownMax;
        this.player1.canMove = false;
        this.player1.canAttack = false;
        this.player2.canMove = false;
        this.player2.canAttack = false;
    }
}