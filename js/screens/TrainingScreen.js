/** The screen for training mode */
class TrainingScreen extends VSScreen {
    constructor(characters, controls, stageID, firstToWin = 0) {
        super(characters, controls, stageID, firstToWin);

        /** @type {Object} */
        this.trainingSettings = {};

        this.world.startCountdown = 0;
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

        this.trainingSettings.meter = {
            staticSikeWawa: true,//Should the sike wawa meter be stuck how it is?
            meters: [16, -16, 16, -16, 16, -16, 16, -16],
            staticNanpaLipu: true,//Should the lipu meter be stuck?
            lipuMeters: [0, 0],
            resetFunctions: {
                always: () => { return true; },
                neutral: () => {
                    return (this.player1.currentState.name === "walk" || this.player1.currentState.name === "neutral") && 
                           (this.player2.currentState.name === "walk" || this.player2.currentState.name === "neutral");
                }
            }
        };
        this.trainingSettings.meter.sikeResetFunction = this.trainingSettings.meter.resetFunctions.neutral;
        this.trainingSettings.meter.lipuResetFunction = this.trainingSettings.meter.resetFunctions.neutral;
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
        }

        /*if (!this.world.players[0]?.controls.valid() || !this.world.players[1]?.controls.valid()) {
            playersManager.openScreen();
            playersManager.resetPositions();
        }*/

        for (let i in controls) {
            if (controls[i].computer)
                continue;
            if (controls[i].clickedAbsolute("start")) {
                this.paused = !this.paused;
                this.pausedPlayer = i;
                break;
            }
            if (controls[i].clickedAbsolute("back") && this.paused) {
                this.destruct();
                currentScreen = new CharacterSelectScreen();
                currentScreen.setTraining();
                let fake = false;
                if (this.player1.controls === null && this.player2.controls === null) {
                    fake = true;
                    this.player1.controls = controls[i];
                }
                currentScreen.setControls([this.player1.controls, this.player2.controls], fake);
                break;
            }
            if (controls[i].pressed("nasa") && controls[i].pressed("lili") && controls[i].pressed("pokaLili")) {
                this.world.deserialize(this.trainingSettings.positionReset);
                break;
            }
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
        }
        if (this.player2Controls === null) {
            this.player2Controls = new TrainingComputer(this.player2, this.world);
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