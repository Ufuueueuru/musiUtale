/** The screen for vs battles */
class VSScreen extends Screen {
    constructor(characters, controls, stageID, firstToWin = 2) {
        super();

        this.setCharacters(characters);
        this.setControls(controls);
        this.setStage(stageID);
        
        this.firstTo = firstToWin;

        this.initLater();

        this.paused = false;
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
            g.text("󱤻󱤧󱤈", windowWidth / 2, windowHeight / 2);//musi li awen
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

        if (!this.paused) {
            let max = debug.negateDraw ? debug.throttleRun : 1;
            for (let i = 0; i < max; i++) {
                this.world.run(this);
            }
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
                let fake = false;
                if (this.player1.controls === null && this.player2.controls === null) {
                    fake = true;
                    this.player1.controls = controls[i];
                }
                currentScreen.setControls([this.player1.controls, this.player2.controls], fake);
                break;
            }
        }
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

        this.world.playMusic();

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