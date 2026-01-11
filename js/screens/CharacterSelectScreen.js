/** The screen for choosing a character */
class CharacterSelectScreen extends Screen {
    draw(g) {
        //g.background(160, 95, 135);
        let halfX = width / 2;
        let halfY = height / 2;

        g.background(80, 40, 50);
        g.noStroke();
        for (let i = 0; i < 100; i += 15) {
            let y1 = height - ((i * width/51 + frameCount * 5 * height / 384 - halfY) % (height + 120) - 60) + random(-5, 5);
            let x1 = halfX + (1 - y1 / height) * ((i * 613 + frameCount / 20) % halfX) * ((i % 2) * 2 - 1) + random(-5, 5);
            let x2 = x1 + width / 10 + random(-5, 5) + (x1 - halfX) / width * 100;
            let y2 = y1 - width / 10 + random(-5, 5);
            let x3 = x1 - width / 10 + random(-5, 5) + (x1 - halfX) / width * 100;
            let y3 = y1 - width / 10 + random(-5, 5);
            g.fill(200, (i * 15 ^ 17) / 2, 19, 10);
            g.triangle(x1, y1, x2, y2, x3, y3);
        }

        let imageWidth = max(width, height * 512 / 384);
        let imageHeight = max(height, width * 384 / 512);
        //g.image(assetManager.images.menuSplash, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        this.menu.draw(g, imageWidth, imageHeight);

        g.textFont(assetManager.fonts.asuki);
        
        g.push();
        g.translate(width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
        g.scale(imageWidth / 512, imageHeight / 384);

        let charWidth = ceil(sqrt(this.characters.length));
        let charHeight = ceil(this.characters.length / charWidth);
        let y = 0;
        let x = 0;
        let i = 0;
        while (y < charHeight) {
            charWidth = min((this.characters.length - i), charWidth);
            x = 0;
            while (x < charWidth) {
                g.noFill();
                //g.stroke(40, 255, 40);
                g.strokeWeight(3);
                if (this.selections[0] === i) {
                    g.stroke(150, 40, 40, 150);
                    if (this.selected[0])
                        g.stroke(150, 150, 10);
                    g.rect(256 - 75 * charWidth / 2 + 75 * x, 192 - 75 * charHeight / 2 + 75 * y, 75, 75);
                }
                if (this.selections[1] === i && !this.netplay) {
                    g.stroke(40, 40, 150, 150);
                    if (this.selected[1])
                        g.stroke(150, 150, 10);
                    g.rect(256 - 75 * charWidth / 2 + 75 * x + 3, 192 - 75 * charHeight / 2 + 75 * y + 3, 69, 69);
                }

                let selectScreenSizeOffset = 0;
                let selectScreenYOffset = 0;
                g.push();
                g.translate(75/2 + selectScreenSizeOffset/2, 75/2 + selectScreenSizeOffset/2);
                g.translate(256 - 75 * charWidth / 2 + 75 * x - selectScreenSizeOffset / 2, 192 - 75 * charHeight / 2 + 75 * y - selectScreenSizeOffset / 2);
                g.rotate(this.characters[i].selectScreenRotation);

                Player.drawMenu(g, this.characters[i], -75 / 2 - selectScreenSizeOffset / 2, -75 / 2 - selectScreenSizeOffset / 2 + selectScreenYOffset, 75 + selectScreenSizeOffset, 75 + selectScreenSizeOffset);

                g.pop();

                g.fill(15, 0, 0);
                g.stroke(240, 240, 255);
                g.strokeWeight(2);
                g.textSize(15);
                g.textAlign(CENTER, CENTER);
                g.text(this.characterNames[i], 256 - 75 * charWidth / 2 + 75 * x + 38, 192 - 75 * charHeight / 2 + 75 * y + 65);

                i++;
                x++;
            }
            y++;
        }
        g.pop();

        let nonCPUCount = 0;
        for (let i in this.playerControls) {
            if (!this.playerControls[i] || this.playerControls[i].computer || this.playerControls[i].netplay)
                continue;
            let buttonSize = windowWidth / 512 * 25;
            if (this.playerControls[i].layout === "keyboard") {
                assetManager.spritesheets.keys.drawFrame(g, keyImageID[this.playerControls[i].buttons.start.code], 3.5 * buttonSize + nonCPUCount * buttonSize, height - buttonSize * 1.2, buttonSize, buttonSize);
            } else {
                assetManager.spritesheets.nena.drawFrame(g, min(18, this.playerControls[i].buttons.start.code), 3.5 * buttonSize + nonCPUCount * buttonSize, height - buttonSize * 1.2, buttonSize, buttonSize);
            }
            g.fill(0, 0, 14);
            g.textSize(30 * windowWidth / 512);
            g.textAlign(LEFT, BASELINE);
            g.text(gt("mainMenuControls") + ":", buttonSize / 5, height - buttonSize / 5);

            nonCPUCount++;
        }

        drawBackHold(g, 60);

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
            g.rect((this.menu.transitioning) / 30 * width * 1.5 + width * 1.5, 0, width, height);

            g.push();
            g.translate((this.menu.transitioning) / 30 * width * 1.5 + width * 1.5, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
    }

    run() {
        this.menu.run();

        //Only control the menu if it is not transitioning out (can still control while menu is fading in)
        if (this.menu.transitioning <= 0) {
            for (let i = 0; i < this.playerControls.length; i++) {
                let u = i;
                let o = (i + 1) % 2;
                if (!this.playerControls[u] || this.playerControls[u].netplay)
                    u = (u + 1) % 2;
                if (u !== i && !this.selected[u])
                    continue;
                if (this.playerControls[u].clickedAbsolute("back")) {
                    if (this.selected[i]) {
                        if (this.playerControls[o] === null && this.selected[o]) {
                            this.selected[o] = false;
                            if (this.netplay)
                                this.selected[i] = false;
                        } else {
                            this.selected[i] = false;
                            if (this.netplay)
                                this.selected[o] = false;
                        }
                        break;
                    } else if (!this.selected[0] && !this.selected[1]) {
                        //let screen = new this.menu.backScreenClass();
                        //currentScreen = screen;
                        this.menu.backOut();
                        break;
                    }
                }
                if (this.playerControls[u].clickedAbsolute("start")) {
                    controlsManager.openScreen();
                    break;
                }
                if (this.playerControls[u] !== null && this.playerControls[u].clickedAbsolute("select")) {
                    if (!this.selected[i]) {
                        if (this.netplay) {
                            this.selected[o] = true;
                        }
                        this.selected[i] = true;
                        break;
                    } else if (this.selected[0] && this.selected[1]) {
                        /*if (this.fakeControls)
                            this.playerControls[0] = null;
                        let screen = new VSScreen(this.selections, this.playerControls, 0);
                        currentScreen = screen;*/
                        this.menu.goTo(StageSelectScreen, (screen) => {
                            if (this.netplay)
                                screen.setNetplay(this.peer, this.connection);
                            if (this.training)
                                screen.setTraining();
                            screen.setPlayerNumber(this.playerNumber);
                            screen.setSelections(this.selections);
                            screen.setControls(this.playerControls, this.fakeControls);
                        });
                        //let screen = new StageSelectScreen();
                        //currentScreen = screen;
                        break;
                    }
                }
                if (u === i && this.selected[i])
                    continue;
                if (this.selected[i])
                    continue;
                if (this.playerControls[u].joystickPressedMenu(0)) {
                    let characterWidth = ceil(sqrt(this.characters.length));
                    let bottomLineWidth = (this.characters.length-1) % characterWidth + 1;
                    let bottomOverflow = (this.selections[i]) % characterWidth + 1;
                    let bottomMissing = characterWidth - bottomLineWidth;
                    if (this.selections[i] % characterWidth > 0 && Angle.distance(this.playerControls[u].angle(0), Angle.LEFT) <= 2.5 * PI / 8) {
                        this.selections[i]--;
                    }
                    if (this.selections[i] >= characterWidth && Angle.distance(this.playerControls[u].angle(0), Angle.UP) <= 2.5 * PI / 8) {
                        if (this.selections[i] >= this.characters.length - bottomLineWidth) {
                            this.selections[i] += Math.round(bottomMissing / 2 - bottomOverflow / bottomLineWidth + 0.5);
                        }
                        this.selections[i] -= characterWidth;
                        this.selections[i] = max(0, this.selections[i]);
                    }
                    if (this.selections[i] % characterWidth < characterWidth - 1 && this.selections[i] < this.characters.length - 1 && Angle.distance(this.playerControls[u].angle(0), Angle.RIGHT) <= 2.5 * PI / 8) {
                        this.selections[i]++;
                    }
                    if (this.selections[i] < ceil(this.characters.length / characterWidth) * characterWidth - characterWidth && Angle.distance(this.playerControls[u].angle(0), Angle.DOWN) <= 2.5 * PI / 8) {
                        if (this.selections[i] >= this.characters.length - characterWidth - bottomLineWidth) {
                            this.selections[i] += Math.max(characterWidth - bottomOverflow + 1, round(characterWidth - bottomMissing / 2 + 0.5 - bottomOverflow / characterWidth));
                        } else {
                            this.selections[i] += characterWidth;
                        }
                        this.selections[i] = min(this.characters.length - 1, this.selections[i]);
                    }
                }
            }
        }
        for (let i in controls) {
            if (!controls[i].computer && controls[i].heldFrames("back") > 60) {
                //let screen = new this.menu.backScreenClass();
                //currentScreen = screen;
                this.menu.backOut();
                break;
            }
        }
    }

    setNetplay(peer, connection) {
        this.netplay = true;

        if (peer !== undefined)
            this.peer = peer;
        if (connection !== undefined)
            this.connection = connection;

        //print(peer, connectionID);
    }

    setTraining() {
        this.training = true;
    }

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        /*if (this.netplay) {
            this.playerControls[1] = null;
        }*/

        this.fakeControls = fake;
    }

    setPlayerNumber(number) {
        this.playerNumber = number;
    }

    init() {
        this.menu = new Menu(undefined, () => { playersManager.openScreen() }, false);

        this.netplay = false;

        this.training = false;

        //Which characters have been selected
        this.selections = [0, 0];

        this.playerNumber = -1;

        this.selected = [false, false];

        this.playerControls = [null, null];

        this.characters = characters;
        this.characterNames = {};
        for (let i in characters) {
            this.characterNames[i] = new characters[i]().name;
        }

        /** @type {boolean} Used to indicate that both players are supposed to be computers */
        this.fakeControls = false;

        this.canSkipFrames = true;
    }
}