class Training extends World {
    constructor(width, height) {
        super(width, height, [
            new Wall(256 + 185, 256, 256 + 316, 256),
            new Wall(256 + 316, 256, 256 + 500, 256 + 185),
            new Wall(256 + 500, 256 + 185, 256 + 500, 256 + 316),
            new Wall(256 + 500, 256 + 316, 256 + 316, 256 + 500),
            new Wall(256 + 316, 256 + 500, 256 + 185, 256 + 500),
            new Wall(256 + 185, 256 + 500, 256, 256 + 316),
            new Wall(256, 256 + 316, 256, 256 + 185),
            new Wall(256, 256 + 185, 256 + 185, 256)
        ], 500, 500, 256, 256);

        for (let i = 0; i < this.walls.length; i++) {
            this.walls[i].point1.x = 506 + 300 * cos(PI * i / 4);
            this.walls[i].point1.y = 506 + 300 * sin(PI * i / 4);
            this.walls[i].point2.x = 506 + 300 * cos(PI * i / 4 + PI / 4);
            this.walls[i].point2.y = 506 + 300 * sin(PI * i / 4 + PI / 4);
        }

        this.name = "󱤰󱥍󱤖󱥵";//ma pi kama wawa

        this.background.image(assetManager.images.trainingBackground, 0, 0, this.background.width, this.background.height);
    }

    drawGrounds() {
        
    }

    playMusic() {
        this.playSong(assetManager.sounds.kalamaPiKamaSona);
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/training_background.png", "trainingBackground");
    }
}

stages.push(Training);