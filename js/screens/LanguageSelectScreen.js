/** The screen for choosing a language */
class LanguageSelectScreen extends Screen {
    draw(g) {
        g.background(35, 35, 35);

        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.1, height/2 + imageHeight * 0.1, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.05, height/2 - imageHeight * 0.05, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.0, height/2 - imageHeight * 0.2, imageWidth * 0.2, imageHeight * 0.1);

        let binaryTextSize = 5 * width / 384;
        for (let i = 0; i < 150; i++) {
            g.stroke(240, 245, 255);
            g.strokeWeight(binaryTextSize + noise(frameCount / 8 + i * 1779) * width / 384 * 2);
            g.point((913 + i * 7879) * width / 512 % (width + binaryTextSize) - binaryTextSize, (967 + i * 6173) * height / 384 % (height + binaryTextSize) - binaryTextSize);
        }

        this.menu.draw(g, width, height, width * 0.3, height * 0.75);

        if (controls[0]?.layout === "keyboard") {
            let buttonSize = width / 20;
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].joysticks[0].buttonaxis[2]], 0, height - buttonSize, buttonSize, buttonSize);
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].joysticks[0].buttonaxis[3]], buttonSize, height - buttonSize, buttonSize, buttonSize);
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].joysticks[0].buttonaxis[0]], 2 * buttonSize, height - buttonSize, buttonSize, buttonSize);
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].joysticks[0].buttonaxis[1]], buttonSize, height - 2 * buttonSize, buttonSize, buttonSize);
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].buttons.select.code], 3.5 * buttonSize, height - buttonSize, buttonSize, buttonSize);
            assetManager.spritesheets.keys.drawFrame(g, keyImageID[controls[0].buttons.back.code], 4.5 * buttonSize, height - buttonSize, buttonSize, buttonSize);
        }

        if (this.menu.transitioning > 0) {
            g.noFill();
            g.stroke(0);
            g.strokeWeight(12 * width / 512 * (30 - this.menu.transitioning));
            g.ellipse(width / 2, height / 2, width / 3 + (30 - this.menu.transitioning) * width / 90, width / 3 + (30 - this.menu.transitioning) * width / 90);
        }
        if (this.menu.transitioning < 0) {
            g.background(0, 0, 0, -this.menu.transitioning * 9);
        }
    }

    run() {
        this.menu.run();
    }

    init() {
        this.menu = new Menu();

        let menu = MenuDebugScreen;
        let button1 = new MenuItem(50, 50, assetManager.images.buttonPressedLanguage, assetManager.images.buttonUnpressedLanguage, menu, "󱥬󱥔\n(toki pona)", () => { writeSaveFile(); }, () => { currentLanguage = "tp"; });
        let button2 = new MenuItem(306, 50, assetManager.images.buttonPressedLanguage, assetManager.images.buttonUnpressedLanguage, menu, "English", () => { writeSaveFile(); }, () => { currentLanguage = "en"; });
        
        button1.addMoves(new MenuMove(button2, Angle.RIGHT));
        button2.addMoves(new MenuMove(button1, Angle.LEFT));

        this.menu.addMenuItems(button1, button2);

        if (currentLanguage === "tp") {
            this.menu.setTarget(button1);
        } else {
            this.menu.setTarget(button2);
        }
    }
}