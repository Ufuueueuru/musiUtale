class KulupuTomo extends World {
    constructor(width, height) {
        super(width, height, [new Wall(256, 192, 922, 192), new Wall(922, 192, 922, 692), new Wall(922, 692, 256, 692), new Wall(256, 692, 256, 192)], 666, 500, 256, 192);

        this.name = "󱤟󱥭";//kulupu tomo

        this.background.image(assetManager.images.kulupuTomo, 0, 0, this.background.width, this.background.height);

        this.foreground.background(0, 0, 0, 50);

        this.displayOffX = -170;
        this.displayOffY = -100;
    }

    drawGrounds() {
        
    }

    drawForegroundManual(g, width, height) {
        g.stroke(130, 130, 225, 30);
        g.strokeWeight(3 * width / 512);

        for (let i = 0; i < 150; i++) {
            g.line((frameCount * 2 + i * 709) * width / 512 % width, (frameCount * 4 + i * 701) * height / 384 % height, (frameCount * 2 + i * 709) * width / 512 % width + 3 * width / 512, (frameCount * 4 + i * 701) * height / 384 % height + 6 * height / 384);
        }
    }

    playMusic() {
        let r = random(0, 3);
        if (r < 1) {
            this.playSong(assetManager.sounds.kenKulupuTomo);
        } else if (r < 2) {
            this.playSong(assetManager.sounds.teloNasaLonIlo);
        } else {
            this.playSong(assetManager.sounds.konWawa);
        }
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/kulupu_tomo.png", "kulupuTomo", true);
    }
}

stages.push(KulupuTomo);