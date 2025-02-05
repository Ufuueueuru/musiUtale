class TomoAwen extends World {
    constructor(width, height) {
        super(width, height, [], 666, 500, 256, 192);

        this.name = "󱤰󱥍󱥭󱤈";//ma pi tomo awen

        this.background.image(assetManager.images.tomoAwen, 0, 0, this.background.width, this.background.height);

        this.foreground.background(0, 0, 0, 20);

        let tempWidth = 512 * graphicsSettings.resolutionMult;
        let tempHeight = 384 * graphicsSettings.resolutionMult;
        let tempG = createGraphics(tempWidth, tempHeight);
        tempG.noFill();
        for (let i = 0.3; i < 1.5; i += 0.005) {
            tempG.stroke(0, 0, 0, 1 * (i+2) * (i+2) * (i+2) * (i+2) - 20);
            tempG.strokeWeight(tempWidth / 64 * i * i);
            tempG.ellipse(tempWidth / 2, tempHeight / 2, tempWidth * i, tempHeight * i);
        }
        this.helperForeground = tempG.get();
        tempG.remove();

        this.loopBackground = true;

        this.offsetX = 0;
        this.offsetY = 0;
    }

    drawForegroundManual(g, width, height) {
        if (this.players[0] && this.players[1]) {
            this.offsetX = (99 * this.offsetX + constrain((this.players[0].x + this.players[1].x + this.camera.x) / 3 - this.camera.x - 170, -100, 100)) / 100;
            this.offsetY = (99 * this.offsetY + constrain((this.players[0].y + this.players[1].y + this.camera.y) / 3 - this.camera.y - 128, -100, 100)) / 100;
        }
        g.image(this.helperForeground, this.offsetX - 100, this.offsetY - 100, width + 200, height + 200);
    }

    drawGrounds() {
        
    }

    playMusic() {
        let r = random(0, 2);
        if (r < 1) {
            this.playSong(assetManager.sounds.maWeka);
        } else {
            this.playSong(assetManager.sounds.awenTawa);
        }
    }

    getShouldLoadSounds() {
        return ["maWeka", "awenTawa"];
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/ma_pi_tomo_awen.png", "tomoAwen", true);
    }

    serialize() {
        return (({
            g,
            name,
            background,
            name1,
            name2,
            helperForeground,
            foreground,
            width,
            height,
            maxPlayerDist,
            walls,
            stageWidth,
            stageHeight,
            bgWidth,
            bgHeight,
            wallLeft,
            wallTop,
            wallRight,
            wallDown,
            startPoints,
            currentMusic,
            firstTo,
            ps,
            ...o
        }) => defaultSerialize(o))(this);
    }
}

stages.push(TomoAwen);