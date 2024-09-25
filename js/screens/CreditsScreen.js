class CreditsScreen extends Screen {
    draw(g) {
        g.background(100, 20, 45);
        g.fill(240, 240, 255, this.textOpacity);
        g.noStroke();
        g.textAlign(CENTER, CENTER);
        g.text(this.finalText, width / 2, height / 2);
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
    }

    init() {
        this.menu = new Menu(MenuOtherScreen);

        this.textOpacity = 0;
        this.loaded = false;
        this.strings = loadStrings("resources/Credits.txt", () => { this.loaded = true; this.finalText = this.strings.join("\n"); });
        this.finalText = "";
    }
}