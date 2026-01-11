class MenuItem {
    constructor(x, y, pressedImage, unpressedImage, targetScreenClass, text = "", pressFunction = () => { }, awenFunction = () => { }, awenControlFunction = (control) => { }) {
        this.x = x;
        this.y = y;

        this.moves = [];

        this.negateMove = false;

        this.pressedImage = pressedImage;
        this.unpressedImage = unpressedImage;

        this.targetScreenClass = targetScreenClass;

        this.text = text;

        this.pressFunction = pressFunction;
        this.awenFunction = awenFunction;
        this.awenControlFunction = awenControlFunction;

        this.widthMult = 1;
        this.heightMult = 1;

        this.textSize = 30;
    }

    setTextSize(num) {
        this.textSize = num;
        return this;
    }

    addMoves(...moves) {
        for (let i in moves) {
            this.moves.push(moves[i]);
        }
    }

    drawSelected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        imageWidth *= this.widthMult;
        imageHeight *= this.heightMult;
        if (this.pressedImage)
            g.image(this.pressedImage, x, y, imageWidth, imageHeight);
        g.fill(35, 35, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 2 * height / 384);
    }
    drawUnselected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        imageWidth *= this.widthMult;
        imageHeight *= this.heightMult;
        if (this.unpressedImage)
            g.image(this.unpressedImage, x, y, imageWidth, imageHeight);
        g.fill(15, 15, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 + 3 * height / 384);
    }
}

class MenuMove {
    constructor(target, angle, leniency = PI / 4) {
        /** @type {MenuMove} */
        this.target = target;
        /** @type {number} */
        this.angle = angle;
        /** @type {number} */
        this.leniency = leniency;
    }
}

class MenuButton extends MenuItem {
    constructor(x, y, pressedImage, unpressedImage, targetScreenClass, text = "", pressFunction, pressedFunction) {
        super(x, y, pressedImage, unpressedImage, targetScreenClass, text, pressFunction);
        this.pressedFunction = pressedFunction;
    }

    drawSelected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512 + imageWidth * 1.1;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384 + imageHeight * 1.1 - imageHeight;
        super.drawSelected(g, width, height, imageWidth, imageHeight);
        if (this.pressedFunction()) {
            g.image(assetManager.images.buttonOn, x, y, imageHeight * 400 / 224, imageHeight);
        } else {
            g.image(assetManager.images.buttonOff, x, y, imageHeight * 400 / 224, imageHeight);
        }
    }
    drawUnselected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512 + imageWidth * 1.1;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384 + imageHeight * 1.1 - imageHeight;
        super.drawUnselected(g, width, height, imageWidth, imageHeight);
        if (this.pressedFunction()) {
            g.image(assetManager.images.buttonOn, x, y, imageHeight * 400 / 224, imageHeight);
        } else {
            g.image(assetManager.images.buttonOff, x, y, imageHeight * 400 / 224, imageHeight);
        }
    }
}

class MenuDirSelector extends MenuItem {
    constructor(x, y, pressedImage, unpressedImage, text = "", subPressFunction = (selecting, value) => { }) {
        super(x, y, pressedImage, unpressedImage, undefined, text);

        this.displayOffsetX = 0;
        this.displayOffsetY = 0;
        this.displayOffsetRot = 0;
        this.displayTextSize = 20;

        this.selectedDirValue = "N";

        this.subPressFunction = subPressFunction;

        this.pressFunction = function() {
            this.subPressFunction(this.negateMove, this.selectedDirValue);

            this.negateMove = !this.negateMove;
        }

        this.awenControlFunction = function (control) {
            if (this.negateMove) {
                if (!control.joystickPressed(0)) {
                    //this.selectedDirValue = "N";
                } else {
                    this.selectedDirValue = control.angle(0).value;
                }
            }
        }
    }

    drawUnselected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        /*if (this.pressedImage)
            g.image(this.pressedImage, x, y, imageWidth, imageHeight);
        g.fill(35, 35, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 2 * height / 384);*/

        super.drawUnselected(g, width, height, imageWidth, imageHeight);

        imageWidth *= this.widthMult;
        imageHeight *= this.heightMult;
        let alpha = this.negateMove ? 225 : 100;
        g.stroke(35, 35, 15, alpha);
        g.strokeWeight(imageWidth * imageHeight / 512 / 384 * 10);
        if (this.negateMove) {
            g.fill(200, 200, 200, alpha);
        } else {
            g.fill(90, 90, 90, alpha);
        }
        g.ellipse(x + imageWidth * 1.4, y + imageHeight / 2, imageHeight * 0.8, imageHeight * 0.8);
        if (this.selectedDirValue === "N") {
            g.ellipse(x + imageWidth * 1.4, y + imageHeight / 2, imageHeight * 0.1, imageHeight * 0.1);
        } else {
            let angle = new Angle(this.selectedDirValue);
            g.ellipse(x + imageWidth * 1.4 + angle.getX() * imageHeight * 0.4, y + imageHeight / 2 + angle.getY() * imageHeight * 0.4, imageHeight * 0.1, imageHeight * 0.1);
        }
        g.textSize(this.displayTextSize * height / 384);
        g.textFont(assetManager.fonts.asuki);

        /*g.text("S", x + imageWidth * 2.4, y + imageHeight / 2);
        g.text("R", x + imageWidth * 1.8, y + imageHeight / 2 + imageHeight * 0.6);
        g.text("M", x + imageWidth * 1.2, y + imageHeight / 2);
        g.text("L", x + imageWidth * 1.8, y + imageHeight / 2 - imageHeight * 0.6);*/
    }

    drawSelected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        /*if (this.pressedImage)
            g.image(this.pressedImage, x, y, imageWidth, imageHeight);
        g.fill(35, 35, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 2 * height / 384);*/

        super.drawSelected(g, width, height, imageWidth, imageHeight);

        imageWidth *= this.widthMult;
        imageHeight *= this.heightMult;
        let alpha = this.negateMove ? 225 : 200;
        g.stroke(35, 35, 15, alpha);
        g.strokeWeight(imageWidth * imageHeight / 3500);
        if (this.negateMove) {
            g.fill(200, 200, 200, alpha);
        } else {
            g.fill(90, 90, 90, alpha);
        }
        g.ellipse(x + imageWidth * 1.4, y + imageHeight / 2, imageHeight * 0.8, imageHeight * 0.8);
        if (this.selectedDirValue === "N") {
            g.ellipse(x + imageWidth * 1.4, y + imageHeight / 2, imageHeight * 0.1, imageHeight * 0.1);
        } else {
            let angle = new Angle(this.selectedDirValue);
            g.ellipse(x + imageWidth * 1.4 + angle.getX() * imageHeight * 0.4, y + imageHeight / 2 + angle.getY() * imageHeight * 0.4, imageHeight * 0.1, imageHeight * 0.1);
        }
        g.textSize(this.displayTextSize * height / 384);
        g.textFont(assetManager.fonts.asuki);

        g.noStroke();

        g.text("S", x + imageWidth * 1.4 + imageHeight * 0.6 , y + imageHeight / 2);
        g.text("R", x + imageWidth * 1.4, y + imageHeight / 2 + imageHeight * 0.65);
        g.text("M", x + imageWidth * 1.4 - imageHeight * 0.6, y + imageHeight / 2);
        g.text("L", x + imageWidth * 1.4, y + imageHeight / 2 - imageHeight * 0.65);
    }
}

class MenuSelector extends MenuItem {
    constructor(x, y, pressedImage, unpressedImage, texts = [""], subPressFunction = (selecting, text, textI) => { }) {
        super(x, y, pressedImage, unpressedImage, undefined, texts[0]);

        this.texts = texts;
        this.selectedText = 0;

        this.subPressFunction = subPressFunction;

        this.pressFunction = function() {
            this.subPressFunction(this.negateMove, this.texts[this.selectedText], this.selectedText);
            
            this.negateMove = !this.negateMove;
        };

        this.awenControlFunction = function(control) {
            if (this.negateMove) {
                let down = Angle.distance(control.angle(0), Angle.DOWN);
                let up = Angle.distance(control.angle(0), Angle.UP);
                if (control.joystickPressedMenu(0)) {
                    if (down < PI / 4) {
                        this.setSelected(this.selectedText + 1);
                    }
                    if (up < PI / 4) {
                        this.setSelected(this.selectedText - 1);
                    }
                }
            }
        };
    }

    setSelected(i) {
        this.selectedText = constrain(i, 0, this.texts.length - 1);
        this.text = this.texts[this.selectedText];
    }

    drawSelected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        /*if (this.pressedImage)
            g.image(this.pressedImage, x, y, imageWidth, imageHeight);
        g.fill(35, 35, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 2 * height / 384);*/

        super.drawSelected(g, width, height, imageWidth, imageHeight);

        imageWidth *= this.widthMult;
        imageHeight *= this.heightMult;
        let alpha = this.negateMove ? 225 : 50;
        g.stroke(35, 35, 15, alpha);
        g.strokeWeight(imageWidth * imageHeight / 512 / 384 * 5);
        if (this.selectedText === 0) {
            g.fill(90, 90, 90, alpha);
        } else {
            g.fill(200, 200, 200, alpha);
        }
        g.triangle(x + imageWidth / 2, y - imageHeight / 3, x + imageWidth / 2 - imageWidth / 4, y - imageHeight / 6, x + imageWidth / 2 + imageWidth / 4, y - imageHeight / 6);
        if (this.selectedText === this.texts.length - 1) {
            g.fill(90, 90, 90, alpha);
        } else {
            g.fill(200, 200, 200, alpha);
        }
        g.triangle(x + imageWidth / 2, y + imageHeight + imageHeight / 3, x + imageWidth / 2 - imageWidth / 4, y + imageHeight + imageHeight / 6, x + imageWidth / 2 + imageWidth / 4, y + imageHeight + imageHeight / 6);
    }
}