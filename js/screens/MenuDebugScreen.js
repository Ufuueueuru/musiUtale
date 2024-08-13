/** The screen for debugging anything/testing menu stuff */
class MenuDebugScreen extends Screen {
    draw(g) {
        g.background(35, 65, 35);

        let imageWidth = max(width, height * assetManager.images.menuSplash.width / assetManager.images.menuSplash.height);
        let imageHeight = max(height, width * assetManager.images.menuSplash.height / assetManager.images.menuSplash.width);
        g.image(assetManager.images.menuSplash, width/2 - imageWidth / 2, height/2 - imageHeight / 2, imageWidth, imageHeight);
        assetManager.spritesheets.menuSplashScarf.draw(g, width / 2 - imageWidth / 2 + imageWidth * 250 / 1920, height / 2 - imageHeight / 2 + imageHeight * 740 / 1080, imageWidth * 464 / 1920, imageHeight * 336 / 1080);

        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.1, height/2 + imageHeight * 0.1, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.05, height/2 - imageHeight * 0.05, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.0, height/2 - imageHeight * 0.2, imageWidth * 0.2, imageHeight * 0.1);

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.2, imageHeight * 0.1);

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

        assetManager.spritesheets.menuFire.draw(g, width / 2 - imageWidth / 6, height - imageWidth / 3, imageWidth / 3, imageWidth / 3.05);

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
        assetManager.spritesheets.menuFire.run();
        assetManager.spritesheets.menuSplashScarf.run();
    }

    init() {
        this.menu = new Menu();

        let button1 = new MenuItem(236, 66, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, CharacterSelectScreen, gt("mainMenuFight"), () => { playersManager.openScreen(); playersManager.resetPositions(); });
        let button2 = new MenuItem(256, 103, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("mainMenuControls"), () => { controlsManager.openScreen(); });
        let buttonTraining = new MenuItem(276, 140, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, CharacterSelectScreen, gt("mainMenuTraining"), () => { playersManager.openScreen(); playersManager.resetPositions(); currentScreen.setTraining(); });//kama wawa
        let buttonNetplay = new MenuItem(296, 177, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, CharacterSelectScreen, gt("mainMenuOnline"), () => { playersManager.openScreen(); playersManager.resetPositionsNetplay(); currentScreen.setNetplay(); });
        let buttonTutorial = new MenuItem(316, 214, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("tutorial"), () => { currentScreen = new TutorialScreen([0, 0], [controls[0], null], 0); });
        let button3 = new MenuItem(336, 251, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, MenuDebugScreen, "󱥜");
        let button4 = new MenuItem(356, 288, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("mainMenuClose"), window.electronAPI.closeWindow);

        
        button1.addMoves(new MenuMove(button2, Angle.DOWN));
        button2.addMoves(new MenuMove(button1, Angle.UP));
        button2.addMoves(new MenuMove(buttonTraining, Angle.DOWN));
        buttonTraining.addMoves(new MenuMove(button2, Angle.UP));
        buttonTraining.addMoves(new MenuMove(buttonNetplay, Angle.DOWN));
        buttonNetplay.addMoves(new MenuMove(buttonTraining, Angle.UP));
        buttonNetplay.addMoves(new MenuMove(buttonTutorial, Angle.DOWN));
        buttonTutorial.addMoves(new MenuMove(button3, Angle.UP));
        buttonTutorial.addMoves(new MenuMove(button3, Angle.DOWN));
        button3.addMoves(new MenuMove(buttonTutorial, Angle.UP));
        button3.addMoves(new MenuMove(button4, Angle.DOWN));
        button4.addMoves(new MenuMove(button3, Angle.UP));

        this.menu.addMenuItems(button1, button2, buttonNetplay, buttonTraining, button3, button4, buttonTutorial);

        this.menu.setTarget(button1);
    }
}