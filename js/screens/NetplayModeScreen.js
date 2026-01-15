/** The screen for establishing a connection with another player */
class NetplayModeScreen extends Screen {
    constructor() {
        super();

        this.initLater();
    }

    draw(g) {
        g.background(15, 25, 20);

        let imageWidth = max(width, height * 512 / 384);
        let imageHeight = max(height, width * 384 / 512);
        //g.image(assetManager.images.menuSplash, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        let binaryTextSize = 10 * imageWidth / 384;

        let one;
        for (let i = 0; i < 150; i++) {
            //one = (2081 + i * 2207) % 1753 > 876;
            one = noise(i) > 0.5;
            g.image(one ? this.one : this.ala, (frameCount * 2 + i * 709) * width / 512 % (width + binaryTextSize) - binaryTextSize, (frameCount * 4 + i * 701) * height / 384 % (height + binaryTextSize) - binaryTextSize, binaryTextSize, binaryTextSize);
        }

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.7, imageHeight / 6);



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
            g.rect((this.menu.transitioning) / 30 * width + width, 0, width, height);

            g.push();
            g.translate((this.menu.transitioning) / 30 * width + width, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
    }

    run() {
        this.menu.run();
    }

    destruct() {

    }

    initLater() {
        this.menu = new Menu(MenuDebugScreen);

        this.quickplayButton = new MenuItem(50, 80, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, QuickplayScreen, gt("netplayModeQuickplay"));
        this.lobbyButton = new MenuItem(90, 150, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, NetplayScreen, gt("netplayModeLobby"));
        this.backButton = new MenuItem(130, 220, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, MenuDebugScreen, gt("netplayModeBack"));

        this.quickplayButton.addMoves(new MenuMove(this.lobbyButton, Angle.DOWN));
        this.lobbyButton.addMoves(new MenuMove(this.quickplayButton, Angle.UP), new MenuMove(this.backButton, Angle.DOWN));
        this.backButton.addMoves(new MenuMove(this.lobbyButton, Angle.UP));

        this.menu.addMenuItems(this.quickplayButton, this.lobbyButton, this.backButton);

        this.menu.setTarget(this.quickplayButton);

        this.one = createGraphics(100, 100);
        this.one.textFont(assetManager.fonts.asuki);
        this.one.textSize(100);
        this.one.fill(15, 200, 40, 100);
        this.one.noStroke();
        this.one.text("󱥳", 0, 100);
        this.one = this.one.get();
        this.ala = createGraphics(100, 100);
        this.ala.textFont(assetManager.fonts.asuki);
        this.ala.textSize(100);
        this.ala.fill(15, 200, 40, 100);
        this.ala.noStroke();
        this.ala.text("󱤂", 0, 100);
        this.ala = this.ala.get();
    }
}