class Tutorial {
    constructor(world) {
        /** @type {World} */
        this.world = world;

        this.initTutorial();

        this.textPause = false;

        this.text = "";

        this.textWait = 0;

        this.pressedNext = false;

        this.stayPaused = false;

        this.testCondition = {};

        this.setTutorialSet(Tutorial.sets.FIRST);
    }

    run() {
        this.pressedNext = false;//Test if they are ready to move to the next text box
        for (let i in controls) {
            if (controls[i].clickedAbsolute("select"))
                this.pressedNext = true;
        }

        this.runTutorial();

        if (this.finish(this)) {
            this.tutorialNum++;
            if (this.tutorialSet.length > this.tutorialNum) {
                this.setTutorial(this.tutorialSet[this.tutorialNum]);
            } else {
                promptTutorial = false;
                writeSaveFile();
                currentScreen.destruct();
                currentScreen = new MenuDebugScreen();
            }
        }

        if (this.textWait > 0) {
            this.textWait--;
        } else if (!this.stayPaused) {
            this.textPause = false;
        }
    }

    runTutorial() { }
    finish() { }

    defaultFinish() {
        return this.textWait <= 0 && this.pressedNext;
    }

    setTutorialSet(tutorialSet) {
        this.tutorialSet = tutorialSet;
        this.tutorialNum = 0;
        this.setTutorial(tutorialSet[0]);
    }

    setTutorial(tutorial) {
        this.testCondition = tutorial.testCondition;
        this.stayPaused = tutorial.stayPaused;
        this.textPause = true;
        this.textWait = tutorial.text.length;
        this.text = tutorial.text;
        if (tutorial.run) {
            this.runTutorial = tutorial.run;
        } else {
            this.runTutorial = () => { };
        }
        if (tutorial.finish) {
            this.finish = tutorial.finish;
        } else {
            this.finish = this.defaultFinish;
        }
        if (tutorial.draw) {
            this.tutorialDraw = tutorial.draw;
        } else {
            this.tutorialDraw = (g) => { };
        }
    }

    tutorialDraw(g) { }

    draw(g) {
        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);

        g.push();
        g.translate((windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2);
        g.scale(minSize / 512);

        if (currentLanguage === "en") {
            g.textSize(15);
            g.textFont("Verdana");
        } else {
            g.textSize(22);
            g.textFont(assetManager.fonts.asuki);
        }
        g.strokeWeight(3);
        g.stroke(0, 0, 14, 200);
        g.fill(170, 170, 195, 200);
        g.rect(10, 234, 492, 140);
        if (this.textWait <= 0 && this.finish === this.defaultFinish) {
            g.triangle(256 - 5, 365 + (frameCount % 40 > 20 ? 5 : 0), 256 + 5, 365 + (frameCount % 40 > 20 ? 5 : 0), 256, 377 + (frameCount % 40 > 20 ? 5 : 0));
        }

        g.noStroke();
        g.fill(0, 0, 14);
        g.textAlign(LEFT, TOP);
        let roundTextAdd = 2;
        if (currentLanguage === "en")
            roundTextAdd = 1;
        g.text(this.text.substring(0, Math.floor((this.text.length - this.textWait) / roundTextAdd) * roundTextAdd), 14, 238, 484, 138);

        this.tutorialDraw(g);

        g.pop();
    }

    initTutorial() {
        Tutorial.sets = {};

        Tutorial.START = {
            text: gt("tutorialWelcome"),
            run: () => {
                this.world.players[1].controls.setSettingsToBlock();
            },
            finish: undefined,
            stayPaused: true
        };
        Tutorial.MOVE = {
            text: gt("tutorialExplainMovement"),
            run: () => { },
            finish: undefined,
            stayPaused: true
        }
        Tutorial.TESTMOVE = {
            text: gt("tutorialTestMove"),
            run: () => {
                if (this.world.players[0].currentState.name.substring(0, 1) === "N") {
                    if (!this.testCondition.neutral)
                        assetManager.sounds.grab.play();
                    this.testCondition.neutral = true;
                }
                if (this.world.players[0].currentState.name.substring(0, 1) === "S") {
                    if (!this.testCondition.forward)
                        assetManager.sounds.grab.play();
                    this.testCondition.forward = true;
                }
                if (this.world.players[0].currentState.name.substring(0, 1) === "R") {
                    if (!this.testCondition.right)
                        assetManager.sounds.grab.play();
                    this.testCondition.right = true;
                }
                if (this.world.players[0].currentState.name.substring(0, 1) === "L") {
                    if (!this.testCondition.left)
                        assetManager.sounds.grab.play();
                    this.testCondition.left = true;
                }
                if (this.world.players[0].currentState.name.substring(0, 1) === "M") {
                    if (!this.testCondition.back)
                        assetManager.sounds.grab.play();
                    this.testCondition.back = true;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.neutral) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("neutral") + ": " + (this.testCondition.neutral ? "󱥔" : "󱤂"), 10, 80);
                if (this.testCondition.forward) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("forward") + ": " + (this.testCondition.forward ? "󱥔" : "󱤂"), 10, 110);
                if (this.testCondition.right) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("right") + ": " + (this.testCondition.right ? "󱥔" : "󱤂"), 10, 140);
                if (this.testCondition.left) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("left") + ": " + (this.testCondition.left ? "󱥔" : "󱤂"), 10, 170);
                if (this.testCondition.back) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("back") + ": " + (this.testCondition.back ? "󱥔" : "󱤂"), 10, 200);

                let keySheet = this.world.players[0].controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
                let buttonName = "lili";
                let buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 385, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 25, 385, 167, 25, 25);
                buttonName = "suli";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 410, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 26, 410, 167, 25, 25);
                buttonName = "pokaLili";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 435, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 27, 435, 167, 25, 25);
                buttonName = "pokaSuli";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 460, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 28, 460, 167, 25, 25);
                buttonName = "nasa";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 485, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 29, 485, 167, 25, 25);

                if (this.world.players[0].controls.layout === "keyboard") {
                    assetManager.spritesheets.keys.drawFrame(g, keyImageID[this.world.players[0].controls.joysticks[0].getCode(0)], 460, 142, 25, 25);
                    assetManager.spritesheets.keys.drawFrame(g, keyImageID[this.world.players[0].controls.joysticks[0].getCode(1)], 435, 117, 25, 25);
                    assetManager.spritesheets.keys.drawFrame(g, keyImageID[this.world.players[0].controls.joysticks[0].getCode(2)], 410, 142, 25, 25);
                    assetManager.spritesheets.keys.drawFrame(g, keyImageID[this.world.players[0].controls.joysticks[0].getCode(3)], 435, 142, 25, 25);
                }
            },
            testCondition: { neutral: false, forward: false, right: false, left: false, back: false },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.neutral && this.testCondition.forward && this.testCondition.right && this.testCondition.left && this.testCondition.back },
            stayPaused: false
        }
        Tutorial.DASH = {
            text: gt("tutorialExplainDash"),
            run: () => { },
            finish: undefined,
            stayPaused: true
        }
        Tutorial.TESTDASH = {
            text: gt("tutorialTestDash"),
            run: () => {
                if (this.world.players[0].currentState.name === "dash" && this.world.players[0].actionLag < 29) {
                    if (!this.testCondition.dash)
                        assetManager.sounds.grab.play();
                    this.testCondition.dash = true;
                }
                if (this.world.players[0].currentState.name === "dash cancel") {
                    if (!this.testCondition.dashCancel)
                        assetManager.sounds.grab.play();
                    this.testCondition.dashCancel = true;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.dash) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("dash") + ": " + (this.testCondition.dash ? "󱥔" : "󱤂"), 10, 80);
                if (this.testCondition.dashCancel) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("dashCancel") + ": " + (this.testCondition.dashCancel ? "󱥔" : "󱤂"), 10, 110);

                let keySheet = this.world.players[0].controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
                let buttonName = "dash";
                let buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 460, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 30, 460, 167, 25, 25);
            },
            testCondition: { dash: false, dashCancel: false },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.dash && this.testCondition.dashCancel },
            stayPaused: false
        }
        Tutorial.TESTDASHATTACK = {
            text: gt("tutorialExplainDashAttack"),
            run: () => {
                if (this.world.players[0].currentState.name === "dash attack") {
                    if (!this.testCondition.dashAttack)
                        assetManager.sounds.grab.play();
                    this.testCondition.dashAttack = true;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.dashAttack) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("dashAttack") + ": " + (this.testCondition.dashAttack ? "󱥔" : "󱤂"), 10, 80);

                let keySheet = this.world.players[0].controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
                let buttonName = "lili";
                let buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 360, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 25, 360, 167, 25, 25);
                buttonName = "suli";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 385, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 26, 385, 167, 25, 25);
                buttonName = "pokaLili";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 410, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 27, 410, 167, 25, 25);
                buttonName = "pokaSuli";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 435, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 28, 435, 167, 25, 25);
                buttonName = "dash";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 475, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 30, 475, 167, 25, 25);
            },
            testCondition: { dashAttack: false },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.dashAttack },
            stayPaused: false
        }
        Tutorial.BUTTONS = {
            text: gt("tutorialExplainButtons"),
            run: () => { },
            finish: undefined,
            stayPaused: false
        }
        Tutorial.TESTBLOCK = {
            text: gt("tutorialExplainBlock"),
            run: () => {
                if (this.world.players[1].controls.trainingSettings.mash.length < 1) {
                    this.world.players[1].controls.trainingSettings.mash = [{
                        names: ["neutral"],
                        isMashing: true,
                        wait: 90,
                        count: 0,
                        hold: 1,
                        offset: 0,
                        actions: ["NPS"]
                    }];
                }
                if ((this.world.players[0].currentState.name === "block" || this.world.players[0].currentState.name === "parry") && this.world.players[0].actionLag === 1) {
                    assetManager.sounds.grab.play();
                    this.testCondition.block++;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.block > 4) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("block") + ": " + this.testCondition.block + "/5", 10, 80);
            },
            testCondition: { block: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.block > 4 },
            stayPaused: false
        }
        Tutorial.BLOCKANGLES = {
            text: gt("tutorialExplainBlockAngles"),
            run: () => {
                this.world.players[1].controls.trainingSettings.mash[0].actions = ["MN"];
                this.world.players[1].controls.trainingSettings.mash[0].wait = 105;
                if ((this.world.players[0].currentState.name === "block" || this.world.players[0].currentState.name === "parry") && this.world.players[0].actionLag === 1) {
                    assetManager.sounds.grab.play();
                    this.testCondition.block++;
                }
                for (let i in this.world.sikeWawa.slices) {
                    this.world.sikeWawa.slices[i].value = 0;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.block > 4) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("block") + ": " + this.testCondition.block + "/5", 10, 80);
            },
            testCondition: { block: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.block > 4 },
            stayPaused: false
        }
        Tutorial.SIKEWAWA = {
            text: gt("tutorialExplainSikeWawa"),
            run: () => { },
            draw: (g) => {
                g.noFill();
                g.stroke(255, 60, 70);
                g.ellipse(256, 75, 45 + random(-2, 2), 45 + random(-2, 2));
            },
            finish: undefined,
            stayPaused: true
        }
        Tutorial.TESTSIKEWAWA = {
            text: gt("tutorialTestSikeWawa"),
            run: () => {
                this.world.players[1].controls.trainingSettings.mash[0].isMashing = false;
                this.world.players[1].controls.trainingSettings.block.isHit = true;
                let sum = 0;
                for (let i in this.world.sikeWawa.slices) {
                    if (this.world.sikeWawa.slices[i].ownerIs(this.world.players[0]) && this.world.sikeWawa.slices[i].isFull())
                        sum++;
                }
                if (sum > this.testCondition.full)
                    assetManager.sounds.grab.play();
                this.testCondition.full = sum;
            },
            draw: (g) => {
                g.noFill();
                g.stroke(255, 60, 70);
                g.ellipse(256, 75, 45 + random(-2, 2), 45 + random(-2, 2));

                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.full > 2) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("sikeWawaSlices") + ": " + this.testCondition.full + "/3", 10, 80);
            },
            testCondition: { full: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.full > 2 },
            stayPaused: false
        }
        Tutorial.TESTPOWERDASH = {
            text: gt("tutorialTestPowerDash"),
            run: () => {
                if (this.world.players[0].currentState.name === "power dash" && this.world.players[0].actionLag === 1) {
                    assetManager.sounds.grab.play();
                    this.testCondition.dashes++;
                }
            },
            draw: (g) => {
                g.noFill();
                g.stroke(255, 60, 70);
                g.ellipse(256, 75, 45 + random(-2, 2), 45 + random(-2, 2));

                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.dashes > 2) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("powerDashes") + ": " + this.testCondition.dashes + "/3", 10, 80);

                let keySheet = this.world.players[0].controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
                let buttonName = "nasa";
                let buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 415, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 29, 415, 167, 25, 25);
                buttonName = "dash";
                buttonID = (this.world.players[0].controls.layout === "keyboard" ? (keyImageID[this.world.players[0].controls.buttons[buttonName].code] !== undefined ? keyImageID[this.world.players[0].controls.buttons[buttonName].code] : keyImageIDLength) : min(18, this.world.players[0].controls.buttons[buttonName].code));
                keySheet.drawFrame(g, buttonID, 460, 192, 25, 25);
                assetManager.spritesheets.nena.drawFrame(g, 30, 460, 167, 25, 25);
            },
            testCondition: { dashes: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.dashes > 2 },
            stayPaused: false
        }
        Tutorial.TESTWALLSTICK = {

            text: gt("tutorialTestWallStick"),
            run: () => {
                this.world.players[1].controls.trainingSettings.mash[0].isMashing = true;
                this.world.players[1].controls.trainingSettings.mash[0].wait = 0;
                this.world.players[1].controls.trainingSettings.mash[0].names = ["lipuLili", "lipuSuli"];
                this.world.players[1].controls.trainingSettings.mash[0].actions = ["R", "L", "N"];
                if ((this.world.players[1].currentState.name === "lipuSuli" || this.world.players[1].currentState.name === "lipuLili") && this.world.players[1].actionLag === 20) {
                    assetManager.sounds.grab.play();
                    this.testCondition.sticks++;
                }
            },
            draw: (g) => {
                g.noFill();
                g.stroke(255, 60, 70);
                g.ellipse(312, 68, 60 + random(-2, 2), 20 + random(-2, 2));

                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.stick > 2) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("wallSticks") + ": " + this.testCondition.sticks + "/3", 10, 80);
            },
            testCondition: { sticks: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.sticks > 2 },
            stayPaused: false
        }
        Tutorial.END = {
            text: gt("tutorialEnd"),
            run: () => { },
            finish: undefined,
            stayPaused: true
        }

        Tutorial.sets.FIRST = [Tutorial.START, Tutorial.MOVE, Tutorial.TESTMOVE, Tutorial.DASH, Tutorial.TESTDASH, Tutorial.TESTDASHATTACK, Tutorial.BUTTONS, Tutorial.TESTBLOCK, Tutorial.BLOCKANGLES, Tutorial.SIKEWAWA, Tutorial.TESTSIKEWAWA, Tutorial.TESTPOWERDASH, Tutorial.TESTWALLSTICK, Tutorial.END];

        Tutorial.REVERSAL = {
            text: gt("tutorialExplainReversal"),
            run: () => {
                this.world.players[1].controls.trainingSettings.mash[0].actions = ["NPS"];
                if (this.world.players[0].currentState.name === "MN" && this.world.players[1].currentState.name === "hitstun") {
                    assetManager.sounds.grab.play();
                    this.testCondition.punish++;
                }
            },
            draw: (g) => {
                g.noStroke();
                g.textFont(assetManager.fonts.asuki);
                g.textSize(30);
                if (this.testCondition.block > 2) {
                    g.fill(170, 250, 195);
                } else {
                    g.fill(170, 170, 195);
                }
                g.text(gt("dashAttack") + ": " + this.testCondition.punish + "/3", 10, 80);
            },
            testCondition: { punish: 0 },
            finish: () => { return this.world.players[0].actionLag <= 0 && this.testCondition.block > 2 },
            stayPaused: false
        }
        Tutorial.sets.SECOND = [Tutorial.REVERSAL, Tutorial.END];

    }
}