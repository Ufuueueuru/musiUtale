/** The screen for debugging anything/testing menu stuff */
class MenuOtherScreen extends Screen {
    draw(g) {
        g.background(25, 25, 35);

        let imageWidth = max(width, height * assetManager.images.menuSplash.width / assetManager.images.menuSplash.height);
        let imageHeight = max(height, width * assetManager.images.menuSplash.height / assetManager.images.menuSplash.width);
        //g.image(assetManager.images.menuSplash, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.1, height/2 + imageHeight * 0.1, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.05, height/2 - imageHeight * 0.05, imageWidth * 0.2, imageHeight * 0.1);
        //g.image(assetManager.images.buttonUnpressed, width/2 + imageWidth * 0.0, height/2 - imageHeight * 0.2, imageWidth * 0.2, imageHeight * 0.1);

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.3, imageHeight * 0.1);

        if (this.graphicsMenuOn) {
            g.background(0, 0, 14, 50);
            this.graphicsMenu.draw(g, imageWidth, imageHeight, imageWidth * 0.4, imageHeight * 0.15);

            let resText = ["1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8", "1"];
            this.drawMenuText(g, resText[graphicsSettings.resolutionMult * 8 - 1], 300, 70, 30, imageWidth, imageHeight, imageWidth * 0.4, imageHeight * 0.15);
            let spriteResText = "1";
            if (graphicsSettings.spriteResolutionMult === 0.5)
                spriteResText = "1/2";
            if (graphicsSettings.spriteResolutionMult === 0.25)
                spriteResText = "1/4";
            this.drawMenuText(g, spriteResText, 300, 130, 30, imageWidth, imageHeight, imageWidth * 0.4, imageHeight * 0.15);
        } else if (this.volumeMenuOn) {
            g.background(0, 0, 14, 50);
            this.volumeMenu.draw(g, imageWidth, imageHeight, imageWidth * 0.4, imageHeight * 0.15);
        }

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

        //TODO update this to be unique
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
        if (this.graphicsMenuOn) {
            this.graphicsMenu.run();
        } else if (this.volumeMenuOn) {
            this.volumeMenu.run();
        } else {
            this.menu.run();
        }

        for (let i in controls) {
            if (controls[i].computer)
                continue;
            if (controls[i].clickedAbsolute("back") && (this.graphicsMenuOn || this.volumeMenuOn)) {
                this.graphicsMenuOn = false;
                this.volumeMenuOn = false;
            }
        }
    }

    drawMenuText(g, txt, xPos, yPos, txtSize, width, height, imageWidth, imageHeight) {
        let x = windowWidth / 2 - width / 2 + xPos * width / 512;
        let y = windowHeight / 2 - height / 2 + yPos * height / 384;
        g.fill(240, 240, 255);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.textSize(txtSize * height / 384);
        g.textFont(assetManager.fonts.asuki);
        g.text(txt, x + imageWidth / 2, y + imageHeight / 2 - 7 * height / 384);
    }

    init() {
        this.menu = new Menu(MenuDebugScreen);

        let button1 = new MenuItem(220, 66, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("otherMenuGraphics"), () => { this.graphicsMenuOn = true; });
        let button2 = new MenuItem(200, 103, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("otherMenuSound"), () => { this.volumeMenuOn = true; });
        let button3 = new MenuItem(180, 140, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("otherMenuPlaceholder"), () => { });
        let button4 = new MenuItem(160, 177, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, ModScreen, gt("otherMenuMods"), () => { });
        let button5 = new MenuItem(140, 214, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("otherMenuReload"), () => { reloadGame(); });
        let button6 = new MenuItem(120, 251, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, CreditsScreen, gt("otherMenuCredits"));
        let button7 = new MenuItem(100, 288, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, MenuDebugScreen, gt("otherMenuBack"));


        button1.addMoves(new MenuMove(button2, Angle.DOWN));
        button2.addMoves(new MenuMove(button1, Angle.UP));
        button2.addMoves(new MenuMove(button3, Angle.DOWN));
        button3.addMoves(new MenuMove(button2, Angle.UP));
        button3.addMoves(new MenuMove(button4, Angle.DOWN));
        button4.addMoves(new MenuMove(button3, Angle.UP));
        button4.addMoves(new MenuMove(button5, Angle.DOWN));
        button5.addMoves(new MenuMove(button4, Angle.UP));
        button5.addMoves(new MenuMove(button6, Angle.DOWN));
        button6.addMoves(new MenuMove(button5, Angle.UP));
        button6.addMoves(new MenuMove(button7, Angle.DOWN));
        button7.addMoves(new MenuMove(button6, Angle.UP));

        this.menu.addMenuItems(button1, button2, button3, button4, button5, button6, button7);

        this.menu.setTarget(button1);


        this.graphicsMenuOn = false;
        this.graphicsMenu = new Menu();

        let gButton1 = new MenuItem(130, 70, assetManager.images.buttonPressedLanguage, assetManager.images.buttonUnpressedLanguage, undefined, gt("graphicsResolution"), () => {
            graphicsSettings.resolutionMult -= 0.125;
            if (graphicsSettings.resolutionMult <= 0) {
                graphicsSettings.resolutionMult = 1;
            }
            writeSaveFile();
        });
        let gButton2 = new MenuItem(130, 130, assetManager.images.buttonPressedLanguage, assetManager.images.buttonUnpressedLanguage, undefined, gt("graphicsSpriteResolution"), () => {
            graphicsSettings.spriteResolutionMult *= 0.5;
            if (graphicsSettings.spriteResolutionMult < 0.25) {
                graphicsSettings.spriteResolutionMult = 1;
            }
            writeSaveFile();
        });

        gButton1.addMoves(new MenuMove(gButton2, Angle.DOWN));
        gButton2.addMoves(new MenuMove(gButton1, Angle.UP));

        this.graphicsMenu.addMenuItems(gButton1, gButton2);
        this.graphicsMenu.setTarget(gButton1);

        this.volumeMenuOn = false;
        this.volumeMenu = new Menu();
    }
}