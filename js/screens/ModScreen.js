class ModScreen extends Screen {
    draw(g) {
        g.background(0);

        let imageWidth = max(width, height * assetManager.images.menuSplash.width / assetManager.images.menuSplash.height);
        let imageHeight = max(height, width * assetManager.images.menuSplash.height / assetManager.images.menuSplash.width);

        for (let u in this.menu.menus) {
            if (this.menu.target === this.menu.menus[u])
                this.scroll = Math.max(u - 3, 0);
        }

        if (this.menu.menus.length === 0) {
            g.fill(240, 240, 250);
            g.noStroke();
            g.textAlign(CENTER, CENTER);
            g.text(gt("noMods"), width / 2, height / 2);
            g.textAlign(LEFT, BASELINE);
        }

        g.push();
        g.translate(0, -imageHeight * 40 / 384 * this.scroll);

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.4, imageHeight * 0.1);

        g.pop();

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
    }

    init() {
        this.scroll = 0;

        this.totalList = [];

        this.menu = new Menu(MenuOtherScreen);

        (async () => {
            this.totalList = await window.electronAPI.readdir("/mods");

            for (let i = modFiles.length; i >= 0; i--) {
                if (!this.totalList.includes(modFiles[i])) {
                    modFiles.splice(i, 1);
                }
            }

            let select = assetManager.images.buttonPressedLanguage;
            let deselect = assetManager.images.buttonUnpressedLanguage;
            for (let i = 0; i < this.totalList.length; i++) {
                if (this.totalList[i].substring(this.totalList[i].length - 3, this.totalList[i].length) === ".js") {
                    let pressFunc = (function(id) {
                        if (modFiles.includes(this.totalList[id])) {
                            modFiles = modFiles.filter((a) => { return a !== this.totalList[id]});
                            window.electronAPI.setMods(modFiles);
                        } else {
                            modFiles.push(this.totalList[id]);
                            window.electronAPI.setMods(modFiles);
                        }
                    }).bind(this, i);
                    let pressedFunc = (function(id) {
                        return modFiles.includes(this.totalList[id]);
                    }).bind(this, i);
                    let newButton = new MenuButton(70, 35 + this.menu.menus.length * 40, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, this.totalList[i], pressFunc, pressedFunc);

                    if (this.menu.menus.length > 0) {
                        this.menu.menus[this.menu.menus.length - 1].addMoves(new MenuMove(newButton, Angle.DOWN));
                        newButton.addMoves(new MenuMove(this.menu.menus[this.menu.menus.length - 1], Angle.UP));
                    }

                    this.menu.addMenuItems(newButton);

                    if (this.menu.menus.length === 1)
                        this.menu.setTarget(newButton);
                }
            }
        })();
    }
}