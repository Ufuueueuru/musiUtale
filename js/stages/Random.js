class RandomStage extends World {
    constructor(width, height) {
        super(width, height, [], 512, 384, 0, 0);

        this.name = "󱤰󱥙";//ma seme

        this.randomizeStage = true;

        assetManager.spritesheets.seme.drawFrame(this.background, 0, 64, 0, 384, 384);
    }

    static addAssets() {
        
    }
}

stages.push(RandomStage);