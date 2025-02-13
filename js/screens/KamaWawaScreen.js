/** The screen for debugging anything/testing menu stuff */
class KamaWawaScreen extends Screen {
    draw(g) {
        g.background(35, 65, 35);

        let imageWidth = max(width, height * assetManager.images.menuSplashTraining.width / assetManager.images.menuSplashTraining.height);
        let imageHeight = max(height, width * assetManager.images.menuSplashTraining.height / assetManager.images.menuSplashTraining.width);
        g.image(assetManager.images.menuSplashTraining, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);
        assetManager.spritesheets.menuSplashRibbon.draw(g, width / 2 - imageWidth / 2 + imageWidth * 1028 / 1920, height / 2 - imageHeight / 2 + imageHeight * 620 / 1080, imageWidth * 176 / 1920, imageHeight * 160 / 1080);

        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.1, height/2 + imageHeight * 0.1, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.05, height/2 - imageHeight * 0.05, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.0, height/2 - imageHeight * 0.2, imageWidth * 0.2, imageHeight * 0.1);

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.25, imageHeight * 0.1);

        /*g.textFont(assetManager.fonts.asuki);
        g.textFont("Comic Sans");
        g.textAlign(CENTER, CENTER);
        g.fill(255);
        g.textSize(30);
        g.text("Press Spacebar\nto start\n(This is a debug screen)", width / 2, height / 2);*/

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
            g.ellipse(width / 2, height / 2, width / 3 + (30 - this.menu.transitioning) * width / 120, width / 3 + (30 - this.menu.transitioning) * width / 120);
        }
        if (this.menu.transitioning < 0) {
            g.background(0, 0, 0, -this.menu.transitioning * 9);
        }
    }

    run() {
        this.menu.run();

        /*if (keys.Space) {
            currentScreen = new DebugScreen();
        }*/
        assetManager.spritesheets.menuSplashRibbon.run();
    }

    init() {
        this.menu = new Menu(MenuDebugScreen);

        let buttonTraining = new MenuItem(161, 60, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, CharacterSelectScreen, gt("mainMenuTraining"), () => { playersManager.openScreen(); playersManager.resetPositions(KamaWawaScreen); currentScreen.menu.setBackScreen(KamaWawaScreen); currentScreen.setTraining(); });//kama wawa
        let buttonTutorial = new MenuItem(136, 110, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, TutorialScreen, gt("tutorial"), () => { playersManager.openScreen(); playersManager.resetPositions(KamaWawaScreen); playersManager.disableP2(); /*currentScreen = new TutorialScreen([0, 0], [controls[0], null], 0);*/ });
        let buttonReplays = new MenuItem(111, 160, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, ReplayManageScreen, gt("menuKamaWawaReplays"), () => { });
        let buttonBack = new MenuItem(86, 210, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, MenuDebugScreen, gt("otherMenuBack"));

        buttonTraining.addMoves(new MenuMove(buttonTutorial, Angle.DOWN));
        buttonTutorial.addMoves(new MenuMove(buttonTraining, Angle.UP));
        buttonTutorial.addMoves(new MenuMove(buttonReplays, Angle.DOWN));
        buttonReplays.addMoves(new MenuMove(buttonTutorial, Angle.UP));
        buttonReplays.addMoves(new MenuMove(buttonBack, Angle.DOWN));
        buttonBack.addMoves(new MenuMove(buttonReplays, Angle.UP));

        this.menu.addMenuItems(buttonTraining, buttonTutorial, buttonReplays, buttonBack);

        this.menu.setTarget(buttonTraining);
    }
}