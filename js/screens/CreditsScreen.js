class CreditsScreen extends Screen {
    draw(g) {
        g.background(100, 20, 45);
        g.fill(240, 240, 255, this.textOpacity);
        g.noStroke();
        g.textAlign(CENTER, TOP);
        g.textFont(assetManager.fonts.asuki);
        g.textSize(30 * height / 512);
        g.text(this.finalText, 0, 0 - this.scroll * height / 384, width);
        g.textAlign(LEFT, BASELINE);

        //TODO update this to be unique
        if (this.menu.transitioning > 0) {
            g.background(0, 0, 0, 255 - this.menu.transitioning * 8.5);
        }
        if (this.menu.transitioning < 0) {
            g.background(0, 0, 0, -this.menu.transitioning * 9);
        }
    }

    run() {
        this.menu.run();

        if (this.loaded && this.textOpacity < 255)
            this.textOpacity += 5;

        for (let i in controls) {
            if (Angle.distance(controls[i].angle(0), Angle.DOWN) < PI / 2) {
                this.scroll += 4;
            }
            if (Angle.distance(controls[i].angle(0), Angle.UP) < PI / 2) {
                this.scroll -= 4;
            }
        }

        this.scroll = Math.min(Math.max(0, this.scroll), 30 * this.lines - 192);
    }

    init() {
        this.menu = new Menu(MenuOtherScreen);

        this.scroll = 0;

        this.textOpacity = 0;
        this.lines = 0;
        this.loaded = false;
        this.strings = loadStrings("resources/Credits.txt", (strings) => { this.loaded = true; this.lines = strings.length;  this.finalText = strings.join("\n"); });
        this.finalText = "";
    }
}