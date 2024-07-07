/** The screen for debugging anything/testing things */
class DebugScreen extends Screen {
    draw(g) {
        g.background(35, 65, 35);

        //this.world.g.background(55, 155, 45);
        this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);
        //this.world.drawHUD(g);

        //g.stroke(0);
        //g.noFill();
        //g.circle(100, 100, 50, 50);
        //g.circle(100 + this.player1.controls.joysticks[0].x * 25, 100 + this.player1.controls.joysticks[0].y * 25, 10, 10);

        //let x1 = this.player1.x + 50 * cos(PI + this.player1.controls.joysticks[0].angle().value + this.player1.blockLeniency);
        //let y1 = this.player1.y + 50 * sin(PI + this.player1.controls.joysticks[0].angle().value + this.player1.blockLeniency);
        //let x2 = this.player1.x + 50 * cos(PI + this.player1.controls.joysticks[0].angle().value - this.player1.blockLeniency);
        //let y2 = this.player1.y + 50 * sin(PI + this.player1.controls.joysticks[0].angle().value - this.player1.blockLeniency);

        //g.line(this.player1.x, this.player1.y, x1, y1);
        //g.line(this.player1.x, this.player1.y, x2, y2);

        //g.circle(100 + gamepads[0].axes[0] * 25, 100 + gamepads[0].axes[1] * 25, 10, 10);
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

        this.world.run();
    }

    setControls(c) {
        this.player1.controls = c[0];
        this.player2.controls = c[1];
    }

    init() {
        assetManager.sounds.konWawa.play();

        this.world = new KulupuTomo(512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        g.noSmooth();
        
        //this.controls1 = new Controls("keyboard", keys, [["jump", "KeyZ"], ["attack", "KeyX"]], [["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]], [0.2]);
        /*this.controls1 = new Controls("gamepad", 0, [
            ["dash", 4],
            ["pokaLili", 3],
            ["pokaSuli", 1],
            ["lili", 2],
            ["suli", 0],
            ["nasa", 5],
            ["frameAdvance", 7]],
            [0], [0.2]);
        this.controls4 = new Controls("gamepad", 1, [
            ["dash", 4],
            ["pokaLili", 3],
            ["pokaSuli", 1],
            ["lili", 2],
            ["suli", 0],
            ["nasa", 5],
            ["frameAdvance", 7]],
            [0], [0.2]);
        this.controls2 = new Controls("keyboard", keys, [
            ["dash", "KeyY"],
            ["pokaLili", "KeyT"],
            ["pokaSuli", "KeyG"],
            ["lili", "KeyR"],
            ["suli", "KeyF"],
            ["nasa", "KeyH"],
            ["frameAdvance", "Space"],
            ["start", "Enter"]],
        [["KeyD", "KeyW", "KeyA", "KeyS"]], [0.2]);
        this.controls3 = new Controls("keyboard", keys, [
            ["dash", "KeyO"],
            ["pokaLili", "KeyP"],
            ["pokaSuli", "Semicolon"],
            ["lili", "BracketLeft"],
            ["suli", "Quote"],
            ["nasa", "KeyL"],
            ["frameAdvance", "Space"],
            ["start", "Enter"]],
        [["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]], [0.2]);*/

        //controls.push(this.controls1, this.controls2, this.controls3, this.controls4);

        this.player1 = new characters[0]();
        this.computer1 = new ComputerControls(this.player1);
        this.player1.controls = controls[0];//this.controls2;//this.computer1;
        this.player1.x = this.world.getCenterStageX() - 70;
        this.player1.y = this.world.getCenterStageY();

        this.player2 = new characters[0]();
        this.computer2 = new ComputerControls(this.player2);
        this.player2.controls = controls[1];//this.controls3;//this.computer2;
        this.player2.x = this.world.getCenterStageX() + 70;
        this.player2.y = this.world.getCenterStageY();
        this.player2.dir.value = PI;

        controls.push(this.computer1, this.computer2);

        this.world.addPlayer(this.player1);
        this.world.addPlayer(this.player2);

        this.world.sikeWawa.setPlayers(this.player1, this.player2);

        writeSaveFile();

        /*for (let i = 0; i < 5; i++) {
            let player = new characters[0]();
            let computer = new ComputerControls(player);
            player.controls = computer;
            player.x = this.world.getCenterStageX();
            player.y = this.world.getCenterStageY() - 120 + 40 * i;
            player.dir.value = 0;
            controls.push(computer);
            this.world.addPlayer(player);
        }*/

        /*this.world.background.background(55, 155, 45);
        this.world.background.stroke(186, 140, 99);
        this.world.background.strokeWeight(10);
        this.world.background.noFill();
        this.world.background.rect(this.world.wallLeft, this.world.wallTop, this.world.stageWidth, this.world.stageHeight);*/
    }
}