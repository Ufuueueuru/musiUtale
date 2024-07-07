class MaKasi extends World {
    constructor(width, height) {
        super(width, height, [], 500, 500, 256, 256);

        this.background.image(assetManager.images.maKasi, 0, 0, this.background.width, this.background.height);
    }

    drawGrounds() {
        
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/ma_kasi.png", "maKasi");
    }
}

stages.push(MaKasi);