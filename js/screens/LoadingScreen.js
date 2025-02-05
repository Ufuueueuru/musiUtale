class LoadingScreen extends Screen {
    draw(g) {
        g.background(0);

        if (assetManager.getFontLoadedFraction() >= 1) {
            /*let text = [];
            g.textFont(assetManager.fonts.asuki);
            text = ["󱤴", "󱤬", "󱤉", "󱤰"];
            g.fill(255);
            g.textSize(30);
            g.textAlign(CENTER, CENTER);
            let displayText = text;*/
            if (this.images) {
                for (let i in this.images) {
                    let offset = 0;
                    if ((floor(frameCount/2) - i + 4) % 4 < 1)
                        offset = 7;
                    g.image(this.images[i], width / 2 - 45 + 20 * i, height / 2 - offset - 50);
                    //g.text(displayText[i], width / 2 - 30 + 20 * i, height / 2 - offset - 35);
                }
                g.textFont(assetManager.fonts.asuki);
                g.fill(255);
                g.noStroke();
                g.textSize(30);
                g.textAlign(CENTER, CENTER);
                g.text(floor(max(assetManager.getRealDisplayPercent(), /*assetManager.getRealDisplayPercentNonsmall()*/0)) + "%", windowWidth / 2, windowHeight / 2);
            } else {
                this.images = [];
                let g = createGraphics(30, 30);
                let displayText = ["󱤴", "󱤬", "󱤉", "󱤰"];
                for (let i = 0; i < text.length; i++) {
                    g.textFont(assetManager.fonts.asuki);
                    g.fill(255);
                    g.noStroke();
                    g.textSize(30);
                    g.textAlign(CENTER, CENTER);
                    g.text(displayText[i], 15, 15);
                    this.images.push(g.get());
                    g.clear();
                }
                g.remove();
            }
        }
    }

    run() {
        frameRate(12);
        if (assetManager.getRealDisplayPercent() >= 100 && saveFile || debug.loadingBackDoor) {
            canDisplayFrameRate = true;
            transText = assetManager.jsons.text;
            assetManager.runLoadFuncs();
            if (debug.hitboxEditScreen) {
                currentScreen = new HitboxEditScreen();
            } else {
                currentScreen = new LanguageSelectScreen();
                assetManager.resetAssets();
            }
            frameRate(60);
        }
    }

    init() {
        
    }
}