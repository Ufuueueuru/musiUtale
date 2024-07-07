class MenuItem {
    constructor(x, y, pressedImage, unpressedImage, targetScreenClass, text = "", pressFunction = () => { }, awenFunction = () => { }) {
        this.x = x;
        this.y = y;

        this.moves = [];

        this.pressedImage = pressedImage;
        this.unpressedImage = unpressedImage;

        this.targetScreenClass = targetScreenClass;

        this.text = text;

        this.pressFunction = pressFunction;
        this.awenFunction = awenFunction;

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
        g.image(this.pressedImage, x, y, imageWidth, imageHeight);
        g.fill(35, 35, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 7 * height / 384);
    }
    drawUnselected(g, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + this.x * width / 512;
        let y = windowHeight / 2 - height / 2 + this.y * height / 384;
        g.image(this.unpressedImage, x, y, imageWidth, imageHeight);
        g.fill(15, 15, 15, 225);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(this.textSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(this.text, x + imageWidth / 2, y + imageHeight / 2 - 2 * height / 384);
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