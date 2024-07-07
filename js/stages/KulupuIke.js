class KulupuIke extends World {
    constructor(width, height) {
        super(width, height, [new Wall(400, 235, 740, 235), new Wall(740, 235, 890, 815), new Wall(890, 815, 250, 815), new Wall(250, 815, 400, 235)], 500, 666, 320, 192);

        this.name = "󱤟󱤍";//kulupu ike

        this.background.image(assetManager.images.kulupuIke, 0, 0, this.background.width, this.background.height);

        this.foreground.background(0, 0, 0, 40);
    }

    playMusic() {
        this.playSong(assetManager.sounds.maPiKulupuIke);
    }

    static addAssets() {
        assetManager.addImage("resources/backgrounds/kulupu_ike.png", "kulupuIke");

        assetManager.addSound("resources/music/ma pi kulupu ike.wav", "maPiKulupuIke", {
            loop: true,
            volume: 0.8
        });
    }
}

stages.push(KulupuIke);