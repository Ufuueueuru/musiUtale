class NetplayControls extends Controls {
    constructor() {
        super(undefined, undefined, [
            ["dash", 4],
            ["powerDash", 6],
            ["pokaLili", 3],
            ["pokaSuli", 1],
            ["lili", 2],
            ["suli", 0],
            ["nasa", 5]],
            [0], [0.2]);

        this.netplay = true;
        this.computer = true;
    }

    update(receivedData) {
        //this.startUpdateButtons();
        if (receivedData)
            defaultDeserialize(this, receivedData.inputs);
        super.update();
        //this.endUpdateButtons();
    }

    updateInGame() {
        for (let i in this.buttons) {
            this.buttons[i].updateInGame();
        }
    }

    startUpdateButtons() {
        for (let i in this.buttons) {
            this.buttons[i].clickCheck = this.buttons[i].pressed;
        }
    }

    endUpdateButtons() {
        for (let i in this.buttons) {
            this.buttons[i].clicked = this.buttons[i].pressed && !this.buttons[i].clickCheck;

            if (this.buttons[i].clicked && this.buttons[i].clickedInGame !== 1)
                this.buttons[i].clickedInGame = 2;

            if (this.buttons[i].pressed) {
                this.buttons[i].heldFrames++;
            } else {
                this.buttons[i].heldFrames = 0;
            }
        }
        for (let i in this.joysticks) {
            if (this.joysticks[i].pressed()) {
                this.joysticks[i].heldFrames++;
            } else {
                this.joysticks[i].heldFrames = 0;
            }
        }
    }
}