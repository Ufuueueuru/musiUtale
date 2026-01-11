/** The screen for finding a quickplay match */
let SERVER_ID;

class QuickplayScreen extends Screen {
    constructor() {
        super();

        this.timer = undefined;

        this.playerNumber = -1;
        this.playerControls = [null, null];
        this.fakeControls = false;

        this.inCase = 0;

        SERVER_ID = "musiUtaleDefaultServerID-27182818" + appVersion.replace(/\./g, "-");

        this.currentStatus = gt("quickplayConnecting");

        this.connection = undefined;

        this.serverPeer = undefined;

        this.startPeerConnection();

        this.initLater();
    }

    startPeerConnection() {
        this.peer = new Peer();

        this.peer.on('open', (id) => {
            this.timer = Date.now();
            this.currentStatus = gt("quickplaySearching");

            //print("initial connection");

            //Try to connect to the server
            //print(this.peer);
            let connected = this.peer.connect(SERVER_ID + this.inCase, { reliable: true });
            connected.on("open", () => {
                //print("connection");
                this.currentStatus = gt("quickplayFoundServer");
            })
            //If the server does not exist, catch the error and try to act as the server yourself
            this.peer.on("error", (err) => {
                //print("creating server...");
                this.currentStatus = gt("quickplayNoServer");
                if (err.type === "peer-unavailable") {
                    this.peer.destroy();
                    this.serverPeer = new Peer(SERVER_ID + this.inCase);
                    this.serverPeer.on("open", () => {
                        this.timer = undefined;
                        //print("server established")
                        this.currentStatus = gt("quickplayBecomeServer");
                    });
                    this.serverPeer.on("error", () => {
                        this.timer = Date.now();
                    });
                    this.serverPeer.on("connection", (conn) => {
                        //print("server connection established");
                        this.currentStatus = gt("quickplayFoundOpponent");
                        let newPeer = new Peer();
                        newPeer.on("open", (id) => {
                            //print("created offshoot peer");
                            conn.send({ responseID: id });
                            this.serverPeer.destroy();
                            this.peer = newPeer;
                        });
                        newPeer.on("connection", (newConn) => {
                            //print("offshoot connection established")
                            this.connection = newConn;
                            this.connection.on("open", () => {
                                this.menu.goTo(CharacterSelectScreen, (screen) => {
                                    screen.setPlayerNumber(this.playerNumber);
                                    screen.setNetplay(this.peer, this.connection);
                                    screen.setControls(this.playerControls, this.fakeControls);
                                    playersManager.openScreen();
                                    playersManager.resetPositionsNetplay(QuickplayScreen);
                                });
                            });
                            this.connection.on("error", (err) => {
                                errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
                                errorDisplayFrames = 1200;
                            });
                            this.connection.on("data", (incomingData) => {
                                dataOnFunction(incomingData);
                            });
                            QuickplayScreen.setupDataOnFunction();
                            //NetplayScreen.breakdownEvents();


                            newPeer.on("connection", (conn) => {
                                conn.close();
                            });
                        });
                    });
                    this.serverPeer.on("close", () => {
                        this.connection = undefined;
                    });
                } else {
                    this.inCase++;
                    errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
                    errorDisplayFrames = 1200;
                }
            })
            connected.on("data", (data) => {
                //print("received server offshoot id");
                this.currentStatus = gt("quickplayStartGame");
                connected.close();
                this.connection = this.peer.connect(data.responseID);
                this.connection.on("open", () => {
                    this.playerNumber = 0;
                    let sentData = {
                        type: "setup0"
                    };
                    this.connection.send(sentData);
                    this.menu.goTo(CharacterSelectScreen, (screen) => {
                        screen.setPlayerNumber(this.playerNumber);
                        screen.setNetplay(this.peer, this.connection);
                        screen.setControls(this.playerControls, this.fakeControls);
                        playersManager.openScreen();
                        playersManager.resetPositionsNetplay(QuickplayScreen);
                    });
                });
                this.connection.on("error", (err) => {
                    errorDisplayMessage = "󱤎󱤧󱥈:\n" + err.type;
                    errorDisplayFrames = 1200;
                });
                this.connection.on("data", (incomingData) => {
                    dataOnFunction(incomingData);
                });
                QuickplayScreen.setupDataOnFunction();
                //NetplayScreen.breakdownEvents();
            });
        });
    }

    static setupDataOnFunction() {
        dataOnFunction = (data) => {
            let incomingData = data;
            if (data.type === "setup0") {
                currentScreen.playerNumber = 1;
            }
            if (data.type === "setupScreen") {
                if (currentScreen.setupScreen === true) {
                    if (data.ready === true && currentScreen.playerNumber === 0) {
                        let sentData = {
                            type: "setup1",
                            character: currentScreen.characterSelections[0],
                            rSeed: currentScreen.rSeed
                        };
                        if (currentScreen.pickMyStage) {
                            sentData.selection = currentScreen.selection;
                        }
                        currentScreen.connection.send(sentData);
                    } else {
                        currentScreen.connection.send({ type: "setupScreen", ready: true });
                    }
                } else {
                    setTimeout(async () => { currentScreen.connection.send({ type: "setupScreen", ready: false })}, 50);
                }
            }
            if (data.type === "setup1") {
                currentScreen.characterSelections[1] = currentScreen.characterSelections[0];
                currentScreen.characterSelections[0] = incomingData.character;
                currentScreen.rSeed = data.rSeed;
                
                let sentData = {
                    type: "setup2",
                    character: currentScreen.characterSelections[1]
                };

                if (incomingData.selection) {
                    currentScreen.selection = incomingData.selection;
                } else {
                    sentData.selection = currentScreen.selection;
                }

                currentScreen.connection.send(sentData);
            }
            if (data.type === "setup2") {
                currentScreen.characterSelections[1] = incomingData.character;
                if (incomingData.selection)
                    currentScreen.selection = incomingData.selection;

                let sentData = {
                    type: "init",
                    subtype: 0
                };

                currentScreen.connection.send(sentData);
            }
            if (data.type === "init") {
                if (data.subtype === 0) {
                    let temp = currentScreen.playerControls[0];
                    currentScreen.playerControls[0] = currentScreen.playerControls[1];
                    currentScreen.playerControls[1] = temp;
                }

                new characters[currentScreen.characterSelections[0]]().addShouldLoad();
                new characters[currentScreen.characterSelections[1]]().addShouldLoad();
                new stages[currentScreen.selection]().addShouldLoad();
                assetManager.loadAssetsWithScreen();

                currentScreen = new VSNetplayScreen(currentScreen.peer, currentScreen.connection, currentScreen.characterSelections, currentScreen.playerControls, currentScreen.selection, 2, [], currentScreen.rSeed);
                currentScreen.setRandom(currentScreen.randomChoices);

                if (data.subtype === 0) {
                    let sentData = {
                        type: "init",
                        subtype: 1
                    };
                    currentScreen.connection.send(sentData);
                }
            }
            if (data.type === "game") {
                /*if (random(0, 100) > 98 && currentScreen.world.frameCount > 180) {
                    //fake packet loss
                    print(data);
                    return;
                }*/
                if (currentScreen.started === undefined)
                    return;
                else if (currentScreen.started === false) {
                    currentScreen.connection.send({ type: "game", started: true });
                    if (incomingData.started)
                        currentScreen.started = true;
                } else if (incomingData.started) {
                    return;
                }
                if (incomingData.wantResponse) {
                    currentScreen.connection.send({ type: "game", frameCount: incomingData.frameCount, response: true });
                }
                if (incomingData.desyncTest && currentScreen.farPast.length > 0) {
                    
                    currentScreen.desyncQueue.push(incomingData.desyncTest);
                }
                if (incomingData.randomChoices) {
                    currentScreen.setNewRandom(incomingData.randomChoices);
                } else if (incomingData.response) {
                    for (let i = currentScreen.timeStamps.length - 1; i >= 0; i--) {
                        if (currentScreen.timeStamps[i].frameCount === incomingData.frameCount) {
                            currentScreen.pings.push(Date.now() - currentScreen.timeStamps[i].time);
                            if (currentScreen.pings.length > 5)
                                currentScreen.pings.splice(0, 1);
                            currentScreen.timeStamps.splice(i, 1);
                            break;
                        }
                    }
                } else if (incomingData.needFrame !== undefined) {
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
                    if (!success) {
                        if (currentScreen.bufferedLocalInputs?.length > 0) {
                            let pastFrame = currentScreen.bufferedLocalInputs[0].frameCount;
                            if (pastFrame >= incomingData.needFrame && pastFrame < incomingData.needFrame + currentScreen.bufferedLocalInputs.length) {
                                let id = incomingData.needFrame - pastFrame;
                                if (currentScreen.bufferedLocalInputs[id]) {
                                    currentScreen.connection.send(currentScreen.getExportsBufferedFrame(id));
                                    success = true;
                                }
                            }
                        }
                    }
                    if (!success && currentScreen.paused && currentScreen.world.frameCount > currentScreen.rollbackFrames && !(currentScreen.world.startCountdown < currentScreen.world.countdownMax - 60 && currentScreen.world.startCountdown >= 0) && !currentScreen.world.winScreen) {
                        errorDisplayFrames = 240;
                        errorDisplayMessage = "󱤩󱤟󱤧󱥈" + ": " + errorOutput;//linja kulupu li pakala
                        //this.connectionOpen = false;//Not sure if this is the right thing to do or not
                    }
                } else {
                    if (debug.manualOnlineDelay) {
                        setTimeout(() => {
                            currentScreen.dataQueue.push(incomingData);
                        }, debug.manualOnlineDelayMillis);
                    } else {
                        currentScreen.dataQueue.push(incomingData);
                    }
                }
            }
            if (data.type === "forceCharacterSelect") {
                if (currentScreen.myPlayer !== undefined) {
                    let newScreen = new CharacterSelectScreen();
                    newScreen.setNetplay(currentScreen.peer, currentScreen.connection);
                    newScreen.setControls([currentScreen.myPlayer.controls, new NetplayControls()]);
                    newScreen.setPlayerNumber(currentScreen.myPlayer === currentScreen.player1 ? 0 : 1);
                    currentScreen.destruct();
                    currentScreen = newScreen;
                }
            }
        };
    }

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

        g.textAlign(CENTER, CENTER);
        g.textSize(imageWidth / 512 * 30);
        g.fill(200, 215, 205);
        g.noStroke();
        g.text(this.currentStatus + "...".substring(0, round(frameCount / 12) % 4), width / 2, height / 2);


        //g.textSize(70 * width / 384);
        //g.text(gt("netplayTitle"), width / 2, height / 50);


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

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        /*if (this.netplay) {
            this.playerControls[1] = null;
        }*/

        this.fakeControls = fake;
    }

    run() {
        this.menu.run();

        if (this.timer !== undefined && Date.now() - this.timer > 10000) {
            this.timer = Date.now();
            this.peer.destroy();
            this.startPeerConnection();
        }
    }

    destruct() {
        this.serverPeer?.destroy();
    }

    initLater() {
        this.menu = new Menu(NetplayModeScreen);

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
    }
}