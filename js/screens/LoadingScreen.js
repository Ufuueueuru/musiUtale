class LoadingScreen extends Screen {
    draw(g) {
        g.background(0);

        if (assetManager.getFontLoadedFraction() >= 1) {
            let text = [];
            g.textFont(assetManager.fonts.asuki);
            text = ["󱤴", "󱤬", "󱤉", "󱤰"];
            g.fill(255);
            g.textSize(30);
            g.textAlign(CENTER, CENTER);
            let displayText = text;
            for (let i in displayText) {
                let offset = 0;
                if ((frameCount - i + 4) % 4 < 1)
                    offset = 7;
                g.text(displayText[i], width / 2 - 30 + 20 * i, height / 2 - offset - 35);
            }
            g.text(floor(max(assetManager.getDisplayPercent(), assetManager.getDisplayPercentNonsmall())) + "%", windowWidth / 2, windowHeight / 2);
        }
    }

    run() {
        frameRate(6);
        if (assetManager.getDisplayPercent() >= 100 && saveFile || debug.loadingBackDoor) {
            assetManager.runLoadFuncs();
            if (debug.hitboxEditScreen) {
                currentScreen = new HitboxEditScreen();
            } else {
                currentScreen = new MenuDebugScreen();
            }
            frameRate(60);
        }
    }

    init() {
        
    }
}