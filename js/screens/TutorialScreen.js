/** The screen for the tutorial */
class TutorialScreen extends Screen {
    constructor(characters = [0, 0], controlsIn = [controls[0], null], stageID = 0, firstToWin = 0) {
        super();

        this.setStage(stageID);
        this.setCharacters(characters);
        this.player1Controls = controlsIn[0];
        this.player2Controls = controlsIn[1];

        this.firstTo = firstToWin;
        this.initLater();

        this.paused = false;

        this.tutorial = new Tutorial(this.world);
    }

    draw(g) {
        g.background(35, 65, 35);

        //this.world.g.background(55, 155, 45);
        //this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        if (this.paused) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.pausedPlayer === 1)
                g.fill(47, 31, 171);
            g.text(gt("paused"), windowWidth / 2, windowHeight / 2);//musi li awen
            /*if (frameCount % 60 === 0)
                print(stringifyRefJSON(this.player1));*/
        }

        this.tutorial.draw(g);
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

        if (!this.paused && !this.tutorial.textPause) {
            let max = debug.negateDraw ? debug.throttleRun : 1;
            for (let i = 0; i < max; i++) {
                this.world.run(this);
            }
        }
        this.world.timer = 100;
        if (this.world.players[0].actionLag === 0) {
            this.world.players[0].health = this.world.players[0].maxHealth;
            this.world.players[0].tempDamageCount = 0;
        }
        if (this.world.players[1].actionLag === 0) {
            this.world.players[1].health = this.world.players[1].maxHealth;
            this.world.players[1].tempDamageCount = 0;
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
                currentScreen = new MenuDebugScreen();
                break;
            }
            if (this.tutorial.stayPaused) {
                for (let u in controls[i].buttons) {
                    controls[i].buttons[u].clickedInGame = 0;
                }
            }
        }

        this.tutorial.run();
    }

    initComputerControls() {
        let trainingControls;
        if (this.player1Controls === null) {
            this.player1Controls = new TrainingComputer(this.player1, this.world);
            controls.push(this.player1Controls);
            trainingControls = this.player1Controls;
        }
        if (this.player2Controls === null) {
            this.player2Controls = new TrainingComputer(this.player2, this.world);
            controls.push(this.player2Controls);
            trainingControls = this.player2Controls;
        }
        if (trainingControls) {
            trainingControls.trainingSettings.reversal.isReversal = false;
            trainingControls.trainingSettings.mash = [
                {
                    names: ["neutral"],
                    isMashing: false,
                    wait: 0,
                    count: 0,
                    hold: 1,
                    offset: 0,
                    actions: ["NPS"]
                }
            ]
        }
    }

    setControls(c) {
        this.player1Controls = c[0];
        this.player2Controls = c[1];
        this.initComputerControls();
        if (this.world?.players[0]) {
            this.world.players[0].controls = this.player1Controls;
        }
        if (this.world?.players[1]) {
            this.world.players[1].controls = this.player2Controls;
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

        this.initComputerControls();

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

        this.world.playMusic();

        this.world.startCountdown = -1;
        this.world.players[0].canMove = true;
        this.world.players[0].canAttack = true;
        this.world.players[1].canMove = true;
        this.world.players[1].canAttack = true;

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
}