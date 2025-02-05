class NasinNoka extends World {
    constructor(width, height) {
        super(width, height, [new Wall(0, 196, 512, 196), new Wall(512, 540, 0, 540)], 700, 350, 384, 192);

        this.name = "󱤿󱥃";//nasin noka

        this.background.image(assetManager.images.nasinNoka, 0, 0, this.background.width, this.background.height);

        this.foreground.background(217, 160, 102, 40);
        this.foreground.background(0, 0, 0, 40);

        this.loopBackground = true;

        this.displayOffY = -100;
    }

    drawGrounds() {
        
    }

    drawForegroundManual(g, width, height) {
        g.stroke(167, 110, 52, 90);
        g.strokeWeight(2 * width / 512);

        for (let i = 0; i < 150; i++) {
            g.line((frameCount * 10 + i * 739) * width / 512 % width, (frameCount * 4 + i * 701) * height / 384 % height, (frameCount * 10 + i * 739) * width / 512 % width + 2.5 * width / 512, (frameCount * 4 + i * 701) * height / 384 % height + 2 * height / 384);
        }
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/nasin_noka.png", "nasinNoka", true);
    }
}

stages.push(NasinNoka);