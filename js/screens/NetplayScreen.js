/** The screen for establishing a connection with another player */
class NetplayScreen extends Screen {
    draw(g) {
        g.background(15, 25, 20);

        let imageWidth = max(width, height * 512 / 384);
        let imageHeight = max(height, width * 384 / 512);
        //g.image(assetManager.images.menuSplash, width / 2 - imageWidth / 2, height / 2 - imageHeight / 2, imageWidth, imageHeight);

        g.textFont(assetManager.fonts.asuki);
        let binaryTextSize = 10 * imageWidth / 384;

        let one;
        for (let i = 0; i < 150; i++) {
            //one = (2081 + i * 2207) % 1753 > 876;
            one = noise(i) > 0.5;
            g.image(one ? this.one : this.ala, (frameCount * 2 + i * 709) * width / 512 % (width + binaryTextSize) - binaryTextSize, (frameCount * 4 + i * 701) * height / 384 % (height + binaryTextSize) - binaryTextSize, binaryTextSize, binaryTextSize);
        }

        this.menu.draw(g, imageWidth, imageHeight, imageWidth * 0.43, imageHeight * 0.15);

        g.textSize(20 * width / 384);
        g.fill(200, 215, 205, this.clipboard.displayFrames * 4);
        g.noStroke();
        g.text(this.clipboard.text, width / 2 - imageWidth / 4, height / 2 + 30 * height / 512 + max(0, 30 - this.clipboard.displayFrames) * height / 512);

        g.textSize(100 * width / 384);
        g.fill(200, 215, 205, (this.startCountdown % 60) * 6);
        g.stroke(0, 15, 0, (this.startCountdown % 60) * 6);
        g.text(ceil(this.startCountdown / 60), width / 2, height / 2);

        if (this.keyboardActive) {
            g.background(0, 50);
            let imageWidth2 = min(width, height * 5 / 2);
            let imageHeight2 = min(height, width * 2 / 5);
            g.image(assetManager.images.keyboard, width / 2 - imageWidth2 / 2 * 4 / 5, height - imageHeight2 * 4 / 5, imageWidth2 * 4 / 5, imageHeight2 * 4 / 5);

            g.strokeWeight(10 * imageHeight2 / 384);
            g.stroke(51, 32, 49);
            g.fill(186, 179, 190);
            g.rect(width / 2 - imageWidth2 / 2 * 4 / 5, height - imageHeight2, imageWidth2 * 4 / 5, imageHeight2 / 5);
            g.textSize(imageHeight2 / 9);

            g.noStroke();
            g.fill(51, 32, 49);
            g.text(this.theirID, width / 2, height - imageHeight2 + imageHeight2 / 18);
            

            g.noStroke();
            g.fill(0, 150);
            if (this.keyboardY >= 0) {
                let x = width / 2 - imageWidth2 / 2 + this.keyboardX * imageHeight2 / 5 + imageHeight2 * 1 / 4;
                if (this.keyboardY > 1)
                    x += imageHeight2 / 20;
                if (this.keyboardY > 2)
                    x += imageHeight2 / 10;
                let y = height - imageHeight2 * 4 / 5 + this.keyboardY * imageHeight2 / 5;
                g.rect(x, y, imageHeight2 / 5, imageHeight2 / 5);
            }
        }

        if (this.menu.transitioning > 0) {
            g.fill(0);
            g.noStroke();
            g.rect((32 - this.menu.transitioning) / 30 * width - width, 0, width, height);

            g.push();
            g.translate((32 - this.menu.transitioning) / 30 * width, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
        if (this.menu.transitioning < 0) {
            g.fill(0);
            g.noStroke();
            g.rect((this.menu.transitioning) / 30 * width + width, 0, width, height);

            g.push();
            g.translate((this.menu.transitioning) / 30 * width + width, 0);
            g.rotate(PI / 4);

            g.rect(0, 0, height / 1.4, height / 1.4);

            g.pop();
        }
    }

    run() {
        if (this.startCountdown === -1 && !this.keyboardActive) {
            this.menu.run();
        } else {
            for (let i in this.playerControls) {
                if (this.playerControls[i] && this.playerControls[i].layout === "gamepad" && this.keyboardActive) {
                    if (this.playerControls[i].joystickPressedMenu(0)) {
                        if (this.keyboardY > 0 && Angle.distance(this.playerControls[i].angle(0), Angle.UP) <= PI / 4) {
                            this.keyboardY--;
                        } else if (this.keyboardY < 3 && Angle.distance(this.playerControls[i].angle(0), Angle.DOWN) <= PI / 4) {
                            this.keyboardY++;
                            if (this.keyboardY > 1) {
                                this.keyboardX = min(this.keyboardX, 8);
                            }
                        } else if (this.keyboardX > 0 && Angle.distance(this.playerControls[i].angle(0), Angle.LEFT) <= PI / 4) {
                            this.keyboardX--;
                        } else if (this.keyboardX < 9 && Angle.distance(this.playerControls[i].angle(0), Angle.RIGHT) <= PI / 4) {
                            this.keyboardX++;
                            if (this.keyboardY > 1) {
                                this.keyboardX = min(this.keyboardX, 8);
                            }
                        }
                    }
                    if (this.playerControls[i].heldFrames("select") === 1 || this.playerControls[i].heldFrames("select") > 15) {
                        if (this.theirID.length < 50 && this.keyboardValues[this.keyboardY][this.keyboardX])
                            this.theirID += this.keyboardValues[this.keyboardY][this.keyboardX];
                        if (this.theirID.length > 0 && !this.keyboardValues[this.keyboardY][this.keyboardX])
                            this.theirID = this.theirID.substring(0, this.theirID.length - 1);
                        this.setIDButton.text = "󱤽󱤝:\n" + this.theirID;//nanpa kon:
                    }
                    if (this.playerControls[i].clickedAbsolute("back")) {
                        this.deactivateKeyboard();
                    }
                }
            }
            if (this.keyboardActive && (keyIsDown(27) || keyIsDown(13))) {
                this.deactivateKeyboard();
            }
        }

        if (this.clipboard.displayFrames > 0)
            this.clipboard.displayFrames--;
        if (this.startCountdown > 0)
            this.startCountdown--;
        if (this.startCountdown === 0) {
            this.destruct();
            let screen = new VSNetplayScreen(this.peer, this.connection, this.characterSelections, this.playerControls, this.selection, 2, this.dataQueue, this.rSeed);
            //screen.setupEvents();
            //screen.world.rSeed = this.rSeed;
            currentScreen = screen;
        }

        /*for (let u in controls) {
            if (!controls[u].computer && controls[u].heldFrames("back") > 60) {
                let screen = new MenuDebugScreen();
                currentScreen = screen;
                break;
            }
        }

        for (let i = 0; i < this.playerControls.length; i++) {
            if (this.playerControls[i] === null)
                continue;
            if (this.playerControls[i].clickedAbsolute("back")) {
                if (this.selected) {
                    this.selected = false;
                    break;
                } else {
                    let screen = new StageSelectScreen();
                    screen.setNetplay();
                    screen.setSelections(this.charecterSelections, this.selection);
                    screen.setControls(this.playerControls, this.fakeControls);
                    currentScreen = screen;
                    break;
                }
            }
            if (this.playerControls[i] !== null && this.playerControls[i].clickedAbsolute("select")) {
                if (!this.selected) {
                    this.selected = true;
                    break;
                } else {
                    if (this.fakeControls)
                        this.playerControls[0] = null;
                    let screen = new VSNetplayScreen(this.characterSelections, this.playerControls, this.selection);
                    currentScreen = screen;
                    break;
                }
            }
        }*/
    }

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        this.fakeControls = fake;
    }

    setSelections(selections, stage) {
        this.characterSelections = selections;
        this.selection = stage;
    }

    setFromClipboard() {
        navigator.clipboard.readText().then((clipText) => {
            this.theirID = clipText;
            if (this.theirID.length > 50)
                this.theirID = this.theirID.substring(0, 50);
            this.setIDButton.text = "󱤽󱤝:\n" + this.theirID;
            this.clipboard.displayFrames = 540;
            this.clipboard.text = gt("clipboardPasted");//mi kama sona e nanpa tan lipu len
        });
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.myID).then(() => {
            this.clipboard.displayFrames = 540;
            this.clipboard.text = gt("copiedToClipboard");//nanpa sina li lon lipu len la \n o pana e ona kepeken [ctrl + v]
        });
    }

    establishConnection() {
        this.connection = this.peer.connect(this.theirID/*, {reliable: true}*/);
        this.pickMyStage = random(0, 1) > 0.5;
        
        //print(this.pickMyStage, this.selection);
        this.connection.on("open", () => {
            let sentData = {
                character: this.characterSelections[0],
                rSeed: this.rSeed
            };
            if (this.pickMyStage)
                sentData.stage = this.selection;
            this.connection.send(sentData);
        });
        this.connection.on("error", (err) => {
            errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
            errorDisplayFrames = 1200;
        });
        dataOnFunction = (incomingData) => {
            //print("character");
            this.characterSelections[1] = incomingData.character;
            if (!this.pickMyStage)
                this.selection = incomingData.stage;

            this.startCountdown = 180;

            this.breakdownEvents();
        };
        this.connection.on("data", (incomingData) => {
            dataOnFunction(incomingData);
        });
    }

    breakdownEvents() {
        /*dataOnFunction = (incomingData) => {
            if (incomingData.my && currentScreen.world) {
                currentScreen.connectionOpen = true;
                currentScreen.setupEvents();
            }
            if (!incomingData.my || !incomingData.you)
                currentScreen.connection.send({ you: incomingData.my, my: !!currentScreen.world });
        };*/
        dataOnFunction = (incomingData) => {
            if (incomingData.wantResponse) {
                currentScreen.connection.send({ frameCount: incomingData.frameCount, response: true });
            }
            if (incomingData.response) {
                for (let i = currentScreen.timeStamps.length - 1; i >= 0; i--) {
                    if (currentScreen.timeStamps[i].frameCount === incomingData.frameCount) {
                        currentScreen.pings.push(Date.now() - currentScreen.timeStamps[i].time);
                        if (currentScreen.pings.length > 5)
                            currentScreen.pings.splice(0, 1);
                        currentScreen.timeStamps.splice(i, 1);
                        break;
                    }
                }
            } else if (incomingData.needFrame) {
                let success = false;
				let errorOutput = "0";
                //print("n:" + incomingData.needFrame);
                if (currentScreen.farPast?.length > 0) {
					errorOutput = "1";
                    let pastFrame = currentScreen.farPast[0].gameState.frameCount;
                    if (pastFrame <= incomingData.needFrame) {
                        let id = incomingData.needFrame - pastFrame;
						errorOutput = "2," + id;
                        if (currentScreen.farPast[id]) {
                            //print("s: " + currentScreen.farPast[id].gameState.frameCount);
                            currentScreen.connection.send(currentScreen.getExportsFrame(id));
                            success = true;
                        }
                    }
                }
                if (!success && currentScreen.paused) {
                    errorDisplayFrames = 600;
                    errorDisplayMessage = "󱤩󱤟󱤧󱥈" + ": " + errorOutput;//linja kulupu li pakala
                    //this.connectionOpen = false;//Not sure if this is the right thing to do or not
                }
            } else {
                currentScreen.dataQueue.push(incomingData);
            }
        }
        /*this.connection.on("data", (incomingData) => {
            this.dataQueue.push(incomingData);
            this.rSeed = incomingData.rSeed;
        });*/
    }

    activateKeyboard() {
        this.keyboardActive = true;
        keyPressedHelper = (e) => {
            if (e.key.length === 1 && this.theirID.length < 50)
                this.theirID += e.key;
            if (e.key === "Backspace" && this.theirID.length > 0)
                this.theirID = this.theirID.substring(0, this.theirID.length - 1);
            if (e.key === "Enter")
                this.deactivateKeyboard();
            this.setIDButton.text = "󱤽󱤝:\n" + this.theirID;
        };
    }

    deactivateKeyboard() {
        this.keyboardActive = false;
        keyPressedHelper = (e) => { };
    }

    destruct() {
        this.deactivateKeyboard();
        errorDisplayFrames = 0;
    }

    init() {
        this.menu = new Menu(MenuDebugScreen);

        let gg = createGraphics(800, 300);
        gg.image(assetManager.images.keyboardIcon, 162, 50);
        let keyboardUnpressedImage = gg.get();
        gg.stroke(72);
        gg.strokeWeight(10);
        gg.noFill();
        gg.rect(162, 40, 416, 260);
        let keyboardPressedImage = gg.get();
        gg.remove();

        this.getIDButton = new MenuItem(46, 130, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, "󱤽󱥞󱤧󱤖...", () => { this.copyToClipboard(); }).setTextSize(10);//nanpa sina li kama...
        this.setIDButton = new MenuItem(246, 130, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, "󱤽󱤝:", () => { this.setFromClipboard(); }).setTextSize(10);//nanpa kon:
        this.keyboardButton = new MenuItem(246, 180, keyboardPressedImage, keyboardUnpressedImage, undefined, "", () => { this.activateKeyboard(); });
        this.startButton = new MenuItem(146, 240, assetManager.images.buttonPressed, assetManager.images.buttonUnpressed, undefined, gt("netplayStartFight"), () => { if (this.theirID !== "" && this.myID !== "") this.establishConnection(); });//open utala

        this.getIDButton.addMoves(new MenuMove(this.setIDButton, Angle.RIGHT));
        this.getIDButton.addMoves(new MenuMove(this.startButton, Angle.DOWN));
        this.setIDButton.addMoves(new MenuMove(this.getIDButton, Angle.LEFT));
        //this.setIDButton.addMoves(new MenuMove(this.startButton, Angle.DOWNLEFT));
        this.setIDButton.addMoves(new MenuMove(this.keyboardButton, Angle.DOWN));
        this.keyboardButton.addMoves(new MenuMove(this.setIDButton, Angle.UP));
        this.keyboardButton.addMoves(new MenuMove(this.getIDButton, Angle.LEFT));
        this.keyboardButton.addMoves(new MenuMove(this.startButton, Angle.DOWN));
        this.startButton.addMoves(new MenuMove(this.keyboardButton, Angle.UPRIGHT, PI / 3.9));
        this.startButton.addMoves(new MenuMove(this.getIDButton, Angle.UPLEFT, PI / 3.9));

        this.menu.addMenuItems(this.getIDButton, this.setIDButton, this.startButton, this.keyboardButton);

        this.menu.setTarget(this.getIDButton);

        this.one = createGraphics(100, 100);
        this.one.textFont(assetManager.fonts.asuki);
        this.one.textSize(100);
        this.one.fill(15, 200, 40, 100);
        this.one.noStroke();
        this.one.text("󱥳", 0, 100);
        this.one = this.one.get();
        this.ala = createGraphics(100, 100);
        this.ala.textFont(assetManager.fonts.asuki);
        this.ala.textSize(100);
        this.ala.fill(15, 200, 40, 100);
        this.ala.noStroke();
        this.ala.text("󱤂", 0, 100);
        this.ala = this.ala.get();

        this.myID = "";
        this.theirID = "";

        this.connection = undefined;

        this.peer = new Peer();

        this.peer.on("error", (err) => {
            errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
            errorDisplayFrames = 1200;
        });
        this.peer.on("open", (id) => {
            this.myID = id;
            this.getIDButton.text = "󱤽󱥞:\n" + this.myID;//nanpa sina
        });
        this.peer.on("connection", (conn) => {
            this.connection = conn;
            this.connection.on("open", () => {
                this.connection.send({
                    character: this.characterSelections[this.myCharacter],
                    stage: this.selection
                });
            });
            this.connection.on("error", (err) => {
                errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
                errorDisplayFrames = 1200;
            });
            dataOnFunction = (incomingData) => {
                this.myCharacter = 1;
                this.characterSelections[1] = this.characterSelections[0];
                this.characterSelections[0] = incomingData.character;

                let tempControls = this.playerControls[0];
                this.playerControls[0] = this.playerControls[1];
                this.playerControls[1] = tempControls;

                if (incomingData.stage)
                    this.selection = incomingData.stage;

                this.rSeed = incomingData.rSeed;

                this.startCountdown = 180;

                this.breakdownEvents();
            };
            this.connection.on("data", (incomingData) => {
                dataOnFunction(incomingData);
            })
        });

        this.rSeed = floor(random(0, 1000000));

        this.startCountdown = -1;

        this.clipboard = {
            displayFrames: 0,
            text: ""
        };

        //Which stage has been selected
        this.selection = 0;

        this.characterSelections = [0, 0];
        this.myCharacter = 0;

        this.selected = false;

        this.playerControls = [null, null];

        /** @type {boolean} Used to indicate that both players are supposed to be computers */
        this.fakeControls = false;

        this.dataQueue = [];

        this.keyboardActive = false;
        this.keyboardX = 0;
        this.keyboardY = 0;
        this.keyboardValues = [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm', '-']
        ];
    }
}