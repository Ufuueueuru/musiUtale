/** The screen for debugging anything/testing menu stuff */
class PlayersManager {
    constructor(globalControls) {
        /** @type {Controls[]} */
        this.controls = globalControls;

        this.chosenControls = [null, null];

        this.overrideScreen = false;
        this.overrideBuffer = 0;

        this.disableP2Bool = false;

        this.backScreen = undefined;
    }

    disableP2() {
        this.disableP2Bool = true;
    }

    resetPositions(backScreen = undefined) {
        this.chosenControls = [null, null];
        this.disableP2Bool = false;
        this.backScreen = backScreen;
    }

    resetPositionsNetplay(backScreen = undefined) {
        this.chosenControls = [null, new NetplayControls()];
        this.disableP2Bool = false;
        this.backScreen = backScreen;
    }

    openScreen(buffer = 4) {
        this.overrideScreen = true;
        this.overrideBuffer = buffer;
    }

    reset() {
        this.chosenControls = [null, null];
    }

    draw(g) {
        g.background(35, 65, 35);

        let imageWidth = max(width, height * 384 / 512);
        let imageHeight = max(height, width * 384 / 512);
        g.image(assetManager.images.playerSelect, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        let y = 0;
        for (let i = 0; i < this.controls.length; i++) {
            if (!this.controls[i].computer) {
                let intercept = 0;
                loop1: for (let u = 0; u < this.chosenControls.length; u++) {
                    if (this.chosenControls[u] === this.controls[i]) {
                        intercept = 2 * u - 1;
                        break loop1;
                    }
                }
                let layoutImage = assetManager.images.keyboardIcon;
                if (this.controls[i].layout === "gamepad")
                    layoutImage = assetManager.images.gamepadIcon;
                g.image(layoutImage, width / 2 - imageWidth * 0.05 + imageWidth * 0.2 * intercept, height / 2 - imageHeight * 0.14 + imageHeight * 0.08 * y, imageWidth * 0.10, imageHeight * 0.07);
                y++;
            }
        }

        g.textFont(assetManager.fonts.asuki);
        g.textSize(30 * imageWidth / 384);
        g.stroke(51, 32, 49);
        g.strokeWeight(5 * imageWidth / 384);
        g.fill(186, 179, 190);
        g.textAlign(CENTER, CENTER);
        if (this.chosenControls[0] === null) {
            g.text("󱤎", width / 2 - imageWidth * 0.2, height / 2 - imageHeight * 0.07);//ilo
        }
        if (this.chosenControls[1] === null) {
            g.text("󱤎", width / 2 + imageWidth * 0.2, height / 2 - imageHeight * 0.07);//ilo
            if (this.disableP2Bool) {
                g.fill(250, 129, 140);
                g.textSize(50 * imageWidth / 384);
                g.text("󱤂", width / 2 + imageWidth * 0.2, height / 2 - imageHeight * 0.07);//ala
            }
        } else if (this.chosenControls[1].netplay) {
            g.fill(250, 129, 140);
            g.textSize(60 * imageWidth / 384);
            g.text("󱤝", width / 2 + imageWidth * 0.2, height / 2 - imageHeight * 0.07);//kon
        }
        g.textAlign(LEFT, BASELINE);
    }

    run() {
        if (this.overrideBuffer > 0)
            this.overrideBuffer--;

        for (let i in this.controls) {
            if (this.overrideBuffer <= 0 && !this.controls[i].computer && !this.controls[i].netplay) {
                if (this.controls[i].joystickPressedMenu(0)) {
                    if (Angle.distance(this.controls[i].angle(0), Angle.RIGHT) <= PI / 4) {
                        if (this.chosenControls[0] === this.controls[i]) {
                            this.chosenControls[0] = null;
                        } else if (this.chosenControls[1] === null && !this.disableP2Bool) {
                            this.chosenControls[1] = this.controls[i];
                        }
                    }
                    if (Angle.distance(this.controls[i].angle(0), Angle.LEFT) <= PI / 4) {
                        if (this.chosenControls[1] === this.controls[i]) {
                            this.chosenControls[1] = null;
                        } else if (this.chosenControls[0] === null) {
                            this.chosenControls[0] = this.controls[i];
                        }
                    }
                }
                if (this.controls[i].clickedAbsolute("select")) {
                    let fakeControls = false;
                    if (this.chosenControls[0] === null && this.chosenControls[1] === null || this.chosenControls[0] === null && this.chosenControls[1]?.netplay) {
                        this.chosenControls[0] = this.controls[i];
                        fakeControls = true;
                    }
                    this.overrideScreen = false;
                    if (currentScreen.setControls) {
                        if (this.chosenControls[1]?.netplay)
                            currentScreen.setNetplay();
                        currentScreen.setControls(this.chosenControls, fakeControls);
                    }
                } else if (this.controls[i].clickedAbsolute("back") && this.backScreen) {
                    this.overrideScreen = false;
                    currentScreen = new this.backScreen();
                }
            }
        }
    }
}