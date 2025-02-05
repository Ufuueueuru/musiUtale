/** The screen for debugging anything/testing menu stuff */
class StageSelectScreen extends Screen {
    draw(g) {
        g.background(45, 55, 85);

        let imageWidth = max(width, height * 512 / 384);
        let imageHeight = max(height, width * 384 / 512);
        //g.image(assetManager.images.menuSplash, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        this.menu.draw(g, imageWidth, imageHeight);

        g.textFont(assetManager.fonts.asuki);

        g.push();
        g.translate(width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
        g.scale(imageWidth / 512, imageHeight / 384);

        let charWidth = ceil(sqrt(this.stages.length));
        let charHeight = ceil(this.stages.length / charWidth);
        let y = 0;
        let x = 0;
        let i = 0;
        while (y < charHeight) {
            charWidth = min((this.stages.length - i), charWidth);
            x = 0;
            while (x < charWidth) {
                g.noFill();
                //g.stroke(40, 255, 40);
                g.strokeWeight(3);
                if (this.selection === i) {
                    g.stroke(220, 220, 220, 150);
                    if (this.selected)
                        g.stroke(150, 150, 10);
                    g.rect(257.5 - 98 * charWidth / 2 + 98 * x, 193.5 - 75 * charHeight / 2 + 75 * y, 95, 72);
                }
                //g.image(this.stages[i].background, 259 - 75 * charWidth / 2 + 75 * x, 195 - 75 * charHeight / 2 + 75 * y, 69, 69, this.stages[i].getCenterStageX() - 256, this.stages[i].background.height/2 - 192, 512, 384);
                this.stages[i].draw(g, 259 - 98 * charWidth / 2 + 98 * x, 195 - 75 * charHeight / 2 + 75 * y, 92, 69, false);
                g.fill(15, 0, 60);
                g.noStroke();
                g.textSize(15);
                g.textAlign(CENTER, CENTER);
                g.text(this.stages[i].name, 257.5 - 98 * charWidth / 2 + 98 * x + 46, 193.5 - 75 * charHeight / 2 + 75 * y + 60);

                i++;
                x++;
            }
            y++;
        }
        g.pop();

        if (this.menu.transitioning > 0) {
            g.fill(0);
            g.noStroke();
            g.rect((32 - this.menu.transitioning) / 30 * width - width, 0, width, height);

            g.push();
            g.translate((32 - this.menu.transitioning) / 30 * width, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
        if (this.menu.transitioning < 0) {
            g.fill(0);
            g.noStroke();
            g.rect((this.menu.transitioning) / 30 * width + width, 0, width, height);

            g.push();
            g.translate((this.menu.transitioning) / 30 * width + width, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
    }

    run() {
        this.menu.run();

        for (let u in controls) {
            if (!controls[u].computer && controls[u].heldFrames("back") > 60) {
                let screen = new MenuDebugScreen();
                currentScreen = screen;
                break;
            }
        }

        for (let i = 0; i < this.playerControls.length; i++) {
            if (this.playerControls[i] === null || this.playerControls[i].netplay)
                continue;
            if (this.playerControls[i].clickedAbsolute("back")) {
                if (this.selected) {
                    this.selected = false;
                    break;
                } else {
                    let screen = new CharacterSelectScreen();
                    if (this.netplay)
                        screen.setNetplay();
                    screen.setControls(this.playerControls, this.fakeControls);
                    currentScreen = screen;
                    break;
                }
            }
            if (this.playerControls[i] !== null && this.playerControls[i].clickedAbsolute("select")) {
                if (!this.selected) {
                    this.selected = true;
                    break;
                } else {
                    if (this.fakeControls)
                        this.playerControls[0] = null;
                    if (this.netplay) {
                        let randomChoices = [false, false, false];
                        if (this.characterSelections[0] === characters.length - 1) {
                            this.characterSelections[0] = floor(random(0, characters.length - 2));
                            randomChoices[0] = true;
                        }
                        if (this.characterSelections[1] === characters.length - 1) {
                            this.characterSelections[1] = floor(random(0, characters.length - 2));
                            randomChoices[1] = true;
                        }
                        if (this.selection === stages.length - 1) {
                            this.selection = floor(random(0, stages.length - 2));
                            randomChoices[2] = true;
                        }
                        let screen = new NetplayScreen(this.peer, this.connectionID);
                        screen.setRandom(randomChoices);
                        screen.setSelections(this.characterSelections, this.selection);
                        screen.setControls(this.playerControls, this.fakeControls);
                        currentScreen = screen;
                    } else if (this.training) {
                        let screen = new TrainingScreen(this.characterSelections, this.playerControls, this.selection, 0);
                        currentScreen = screen;
                    } else {
                        let screen = new VSScreen(this.characterSelections, this.playerControls, this.selection, 2);
                        currentScreen = screen;
                    }
                    break;
                }
            }
            if (this.playerControls[i].joystickPressedMenu(0) && !this.selected) {
                let characterWidth = ceil(sqrt(this.stages.length));
                if (this.selection % characterWidth > 0 && Angle.distance(this.playerControls[i].angle(0), Angle.LEFT) <= 2.5 * PI / 8) {
                    this.selection--;
                }
                if (this.selection >= characterWidth && Angle.distance(this.playerControls[i].angle(0), Angle.UP) <= 2.5 * PI / 8) {
                    this.selection -= characterWidth;
                    this.selection = max(0, this.selection);
                }
                if (this.selection % characterWidth < characterWidth - 1 && this.selection < this.stages.length - 1 && Angle.distance(this.playerControls[i].angle(0), Angle.RIGHT) <= 2.5 * PI / 8) {
                    this.selection++;
                }
                if (this.selection < ceil(this.stages.length / characterWidth) * characterWidth - characterWidth && Angle.distance(this.playerControls[i].angle(0), Angle.DOWN) <= 2.5 * PI / 8) {
                    this.selection += characterWidth;
                    this.selection = min(this.stages.length - 1, this.selection);
                }
            }
        }
    }

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        this.fakeControls = fake;
    }

    setSelections(selections) {
        this.characterSelections = selections;
    }

    setNetplay(peer, connectionID) {
        this.netplay = true;
        this.peer = peer;
        this.connectionID = connectionID;
    }

    setTraining() {
        this.training = true;
    }

    init() {
        this.menu = new Menu();

        this.netplay = false;

        this.training = false;

        //Which stage has been selected
        this.selection = 0;

        this.characterSelections = [0, 0];

        this.selected = false;

        this.playerControls = [null, null];

        this.stages = [];
        for (let i in stages) {
            this.stages.push(new stages[i](512, 384));
            this.stages[i].drawGrounds();
            this.stages[i].camera.zoom = 0.8;
            this.stages[i].camera.setCenter(this.stages[i].getCenterStageX() + this.stages[i].displayOffX, this.stages[i].getCenterStageY() + this.stages[i].displayOffY);
        }

        /** @type {boolean} Used to indicate that both players are supposed to be computers */
        this.fakeControls = false;
    }
}