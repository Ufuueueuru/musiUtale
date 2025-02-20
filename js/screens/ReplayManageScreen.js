class ReplayManageScreen extends Screen {
    draw(g) {
        g.background(0);

        let imageWidth = max(width, height * assetManager.images.menuSplash.width / assetManager.images.menuSplash.height);
        let imageHeight = max(height, width * assetManager.images.menuSplash.height / assetManager.images.menuSplash.width);

        for (let u = 0; u < this.menu.menus.length; u++) {
            if (this.menu.target === this.menu.menus[u])
                this.scroll = Math.max(u - 3, 0);
        }

        if (this.menu.menus.length === 0) {
            g.fill(240, 240, 250);
            g.noStroke();
            g.textAlign(CENTER, CENTER);
            g.text(gt("noReplays"), width / 2, height / 2);
            g.textAlign(LEFT, BASELINE);
        }

        g.push();
        g.translate(0, -imageHeight * 40 / 384 * this.scroll);

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.7, imageHeight * 0.1);

        for (let i = 0; i < this.replayList.length; i++) {
            if (this.replayList[i].characters[0] < characters.length && this.replayList[i].characters[1] < characters.length) {
                Player.drawMenu(g, characters[this.replayList[i].characters[0]], this.menu.getDisplayX(400, imageWidth), this.menu.getDisplayY(35 + i * 40, imageHeight), imageHeight * 0.1, imageHeight * 0.1);
                Player.drawMenu(g, characters[this.replayList[i].characters[1]], this.menu.getDisplayX(420, imageWidth), this.menu.getDisplayY(35 + i * 40, imageHeight), imageHeight * 0.1, imageHeight * 0.1);
            }
        }

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
        if (this.loaded)
            this.menu.run();
    }

    init() {
        if (webVersion) {
            keyPressedHelper = (event) => {
                for (let i in controls) {
                    if (controls[i].buttons.select.code === event.code) {
                        promptFile.click();
                        break;
                    }
                }
            };
        }

        this.loaded = false;

        this.scroll = 0;

        this.totalList = [];
        this.autoList = [];
        this.savedList = [];

        this.replayList = [];

        this.menu = new Menu(KamaWawaScreen);

        if (webVersion) {
            let newButton = new MenuItem(70, 115, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("replayUploadFile"));

            this.menu.addMenuItems(newButton);

            this.menu.setTarget(newButton);

            this.loaded = true;
        } else {
            (async () => {
                this.savedList = await window.electronAPI.readdir("/replays");
                const tempAutoList = await window.electronAPI.readdir("/replays/auto");
                this.autoList = tempAutoList.map(a => "auto/" + a);
                this.totalList = this.autoList.concat(this.savedList);

                for (let i = modFiles.length; i >= 0; i--) {
                    if (!this.totalList.includes(modFiles[i])) {
                        modFiles.splice(i, 1);
                    }
                }

                let select = assetManager.images.buttonPressed;
                let deselect = assetManager.images.buttonUnpressed;
                for (let i = 0; i < this.totalList.length; i++) {
                    let single = this.totalList[i].substring(this.totalList[i].length - 5, this.totalList[i].length) === ".json" && !this.totalList.includes(this.totalList[i] + "hlp");
                    if (this.totalList[i].substring(this.totalList[i].length - 8, this.totalList[i].length) === ".jsonhlp" || (single && this.totalList[i].substring(this.totalList[i].length - 5, this.totalList[i].length) === ".json")) {
                        //const response = await fetch("replays/" + this.totalList[i]);
                        //const json = await response.json();
                        const json = await electronAPI.getReplay(this.totalList[i]);
                        this.replayList.push(json);

                        if (single) {
                            let helperFile = (({ inputs, ...o }) => o)(json);
                            electronAPI.saveReplay(this.totalList[i] + "hlp", helperFile);
                        }

                        let jsonFileName = "replays/" + this.totalList[i];
                        if (this.totalList[i].substring(this.totalList[i].length - 8, this.totalList[i].length) === ".jsonhlp")
                            jsonFileName = "replays/" + this.totalList[i].substring(0, this.totalList[i].length - 3);
                        let pressFunc = (function (id, src) {
                            currentScreen.destruct();
                            currentScreen = new ReplayScreen(src, this.replayList[id].characters, [undefined, undefined], this.replayList[id].stage, this.replayList[id].firstTo);
                        }).bind(this, this.replayList.length - 1, "replays/" + this.totalList[i].substring(0, this.totalList[i].length - 3));
                        let pressedFunc = (function (id) {

                        }).bind(this, this.replayList.length - 1);
                        let buttonText = this.totalList[i];
                        buttonText = buttonText.substring(0, buttonText.length - 8);
                        if (buttonText.length > 31)
                            buttonText = buttonText.substring(0, 28) + "...";
                        let newButton = new MenuItem(20, 35 + this.menu.menus.length * 40, select, deselect, undefined, buttonText, pressFunc, pressedFunc);

                        if (this.menu.menus.length > 0) {
                            this.menu.menus[this.menu.menus.length - 1].addMoves(new MenuMove(newButton, Angle.DOWN));
                            newButton.addMoves(new MenuMove(this.menu.menus[this.menu.menus.length - 1], Angle.UP));
                        }

                        this.menu.addMenuItems(newButton);

                        if (this.menu.menus.length === 1)
                            this.menu.setTarget(newButton);
                    }
                }
                this.loaded = true;
            })();
        }

        this.characterNames = {};
        for (let i in characters) {
            this.characterNames[i] = new characters[i]().name;
        }
    }

    destruct() {
        keyPressedHelper = () => { };
    }

    receiveWebFile(file) {
        if (!file)
            return;

        let read = new FileReader();

        read.addEventListener(
            "load",
            (() => {
                let replay = new Replay("");
                replay.jsonData = [read.result];
                replay.onLoad();

                currentScreen.destruct();
                currentScreen = new ReplayScreen("WebReplay", replay.characters, [undefined, undefined], replay.stage, replay.firstTo);
                currentScreen.replay = replay;

                currentScreen.replay.deserialize(currentScreen.replay.jsonData);
                currentScreen.replay.initLoad(currentScreen);

                currentScreen.world.savedReplay = true;
                currentScreen.world.addShouldLoad();

                assetManager.loadAssetsWithScreen();
            }).bind(this)
        );

        read.readAsText(file);
    }
}