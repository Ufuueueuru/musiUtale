/** The screen for vs battles */
class NetplayDebugScreen extends Screen {
    constructor(peer, connection, characters, controls, stageID, firstTo = 2) {
        super();

        this.myID = "UtaleTestID1";
        this.theirID = "UtaleTestID2";
        if (keys.KeyM) {
            this.myID = "UtaleTestID2";
            this.theiID = "UtaleTestID1";
        }
        this.peer = new Peer(this.myID);

        this.peer.on("connection", (conn) => {
            this.myPlayer = this.world.players[1];
            this.theirPlayer = this.world.players[0];

            this.connection = conn;
            this.setupEvents();
        });

        this.setCharacters(characters);
        this.setControls(controls);
        this.setStage(stageID);

        this.initLater();

        this.paused = true;

        this.firstTo = firstTo;

        /** @type {Player} */
        this.myPlayer = undefined;
        /** @type {Player} */
        this.theirPlayer = undefined;

        this.past = [];//Game states saved in the past that have not yet received data for
        this.future = [];//Game states in the future with data but have not happened yet

        /** @type {Object[]} An array of serialized Controls objects received by the other player */
        this.dataQueue = [];
        //this.currentData = 0;

        /** @type {Object} The received inputs (a serialized Controls object) */
        this.data = undefined;

        this.connectionOpen = false;
        this.connection = undefined;

        this.rollbackFrames = 10;

        this.averageRollbackFrames = [];

        debug.noUpdateControls = true;
        //debug.noSkipFrames = true;
    }

    getNextData() {
        if (this.dataQueue.length > 0) {
            this.data = this.dataQueue[0];
            //this.currentData++;
            this.dataQueue.splice(0, 1);
        } else {
            this.data = undefined;
        }
    }

    run() {
        this.updateControls();
        if (!this.connectionOpen)
            this.paused = true;
        if (!this.paused) {
            this.addFramePast();
            this.connection.send(this.getExports());

            this.world.run();

            this.data = undefined;
        }

        if (keys.KeyU && !this.connection)
            this.startConnection();

        /*if (keys.KeyN && this.connection) {//Debug
            this.connection.send({ pause: true });
            noLoop();
        }*/
    }

    updateControls() {
        if (this.averageRollbackFrames.length > 60) {
            this.averageRollbackFrames.splice(0, 1);
        }

        this.getNextData();
        let receivedData = this.data;
        //let rolledBack = false;
        while (receivedData && receivedData.frameCount !== this.world.frameCount) {
            //print("r: " + receivedData.frameCount + "m: " + this.frameCount);
            if (receivedData.frameCount < this.world.frameCount) {
                //rolledBack = true;
                this.averageRollbackFrames.push(this.rollbackTo(receivedData));
                receivedData = undefined;
            } else if (receivedData.frameCount > this.world.frameCount) {
                let futureI = 0;
                while (this.future[futureI]?.frameCount < receivedData.frameCount) {
                    futureI++;
                }
                this.future.splice(futureI, 0, receivedData);
                receivedData = undefined;
            }
            this.getNextData();
            receivedData = this.data;
        }
        /*if (!rolledBack) {
            this.averageRollbackFrames.push(0);
        }*/
        if (!receivedData) {
            if (this.future[0]) {
                /*while (this.future[0].frameCount < this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                }*/
                if (this.future[0].frameCount === this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                } else if (this.future[0].frameCount < this.world.frameCount) {
                    receivedData = this.future[0];
                    this.future.splice(0, 1);
                    this.rollbackTo(receivedData);
                    receivedData = undefined;
                }

            }
        }

        //
        if (this.myPlayer) {
            this.theirPlayer.controls.update(receivedData);
            this.myPlayer.controls.update();
        }
        //if (this.myPlayer)
        //    print(this.myPlayer.controls.pressed("dash"));

        this.paused = true;
        while (this.past[0] && this.past[0].dataReceived && this.past.length > this.rollbackFrames - 5) {
            this.past.splice(0, 1);
        }
        if (this.past.length < this.rollbackFrames)
            this.paused = false;
        if (!this.connectionOpen)
            this.paused = true;
    }

    rollbackTo(receivedData) {
        let currentFrameCount = this.world.frameCount;
        let frame = this.past.length + receivedData.frameCount - this.world.frameCount;
        let rollbackFrames = this.world.frameCount - receivedData.frameCount;
        //print(this.past[frame]?.frameCount, frame, receivedData.frameCount, this.world.frameCount);
        //let origFrame = frame;
        //print(frame, receivedData.frameCount, this.world.frameCount, this.past[frame].dataReceived, !!this.past[frame]);
        //print("b: ", this.past[origFrame].dataReceived, receivedData.frameCount);
        if (this.past[frame]/* && !this.past[frame].dataReceived*/) {
            this.past[frame].dataReceived = true;
            defaultDeserialize(this.world, this.past[frame].gameState);

            defaultDeserialize(this.theirPlayer.controls, receivedData.inputs);
            if (this.myPlayer === this.world.players[0]) {
                defaultDeserialize(this.myPlayer.controls, this.past[frame].player1Inputs);
                this.past[frame].player2Inputs = defaultSerialize(this.theirPlayer.controls);
            } else {
                defaultDeserialize(this.myPlayer.controls, this.past[frame].player2Inputs);
                this.past[frame].player1Inputs = defaultSerialize(this.theirPlayer.controls);
            }

            this.world.run();
            frame++;
            while (this.world.frameCount < currentFrameCount) {
                for (let i = this.dataQueue.length - 1; i >= 0; i--) {
                    if (this.dataQueue[i].frameCount === this.world.frameCount) {
                        receivedData = this.dataQueue[i];
                        this.past[frame].dataReceived = true;
                        if (this.theirPlayer === this.world.players[0]) {
                            this.past[frame].player1Inputs = receivedData.inputs;
                        } else {
                            this.past[frame].player2Inputs = receivedData.inputs;
                        }
                        this.dataQueue.splice(i, 1);
                    }
                }
                this.past[frame].gameState = defaultSerialize(this.world);
                defaultDeserialize(this.world.players[0].controls, this.past[frame].player1Inputs);
                defaultDeserialize(this.world.players[1].controls, this.past[frame].player2Inputs);
                this.world.run();
                frame++;
            }
        }
        //print("a: ", this.past[origFrame].dataReceived, receivedData.frameCount);
        return rollbackFrames;
    }

    getExports() {
        return {
            rSeed: this.world.rSeed,
            frameCount: this.world.frameCount,
            inputs: defaultSerialize(this.myPlayer.controls)
        }
    }

    startConnection() {
        this.connection = this.peer.connect(this.theirID);
        this.myPlayer = this.world.players[0];
        this.theirPlayer = this.world.players[1];
        this.setupEvents();
    }

    setupEvents() {
        this.theirPlayer.controls = new NetplayControls();

        this.connection.on('data', (incomingData) => {
            this.dataQueue.push(incomingData);
            this.world.rSeed = incomingData.rSeed;
            /*if (incomingData.pause)//debug
                noLoop();*/
        });
        this.connection.on('open', () => {
            this.paused = false;
            this.connectionOpen = true;
            this.connection.send(this.getExports());
        });
    }

    draw(g) {
        g.background(35, 65, 35);

        //this.world.g.background(55, 155, 45);
        this.world.g.background(0);

        let canvasSlope = this.world.height / this.world.width;
        let minSize = min(windowWidth, windowHeight / canvasSlope);
        this.world.draw(g, (windowWidth - minSize) / 2, (windowHeight - minSize * canvasSlope) / 2, minSize, minSize * canvasSlope);

        /*if (this.paused) {
            g.textFont(assetManager.fonts.asuki);
            g.background(15, 0, 0, 50);
            g.textAlign(CENTER, CENTER);
            g.textSize(80 * minSize / 512);
            g.stroke(15, 0, 0);
            g.strokeWeight(5);
            g.fill(170, 40, 60);
            if (this.pausedPlayer === 1)
                g.fill(47, 31, 171);
            g.text("󱤻󱤧󱤈", windowWidth / 2, windowHeight / 2);//musi li awen
        }*/

        let sum = 0;
        this.averageRollbackFrames.forEach((a) => {
            sum += a;
        });

        if (debug.displayRollbackFrames) {
            g.fill(255, 0, 0, 170);
            g.noStroke();
            g.textSize(15);
            g.text("Rollback Frames: " + (round(sum / this.averageRollbackFrames.length * 10) / 10), 10, 60);
        }
    }

    addFramePast() {
        //print(this.world.frameCount);
        let dataReceived = this.data?.frameCount === this.world.frameCount;
        this.past.push({
            gameState: defaultSerialize(this.world),
            player1Inputs: defaultSerialize(this.world.players[0].controls),
            player2Inputs: defaultSerialize(this.world.players[1].controls),
            dataReceived
        });
    }

    setControls(c) {
        this.player1Controls = c[0];
        this.player2Controls = c[1];
    }
    setCharacters(c) {
        this.player1CharacterID = c[0];
        this.player2CharacterID = c[1];
    }
    setStage(id) {
        this.stageID = id;
    }

    destruct() {
        debug.noUpdateControls = false;
        //debug.noSkipFrames = false;
        for (let u = controls.length - 1; u >= 0; u--) {
            if (controls[u].computer)
                controls.splice(u, 1);
        }
        if (this.player1.controls.computer)
            this.player1.controls = null;
        if (this.player2.controls.computer)
            this.player2.controls = null;
        Howler.stop();
    }

    initLater() {
        this.world = new stages[this.stageID](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
        this.world.setFirstTo(this.firstTo);
        //g.noSmooth();

        this.world.playMusic();

        this.player1 = new characters[this.player1CharacterID]();
        this.player2 = new characters[this.player2CharacterID]();

        if (this.player1Controls === null) {
            this.player1Controls = new ComputerControlsTree(this.player1);
            controls.push(this.player1Controls);
        }
        if (this.player2Controls === null) {
            this.player2Controls = new ComputerControlsTree(this.player2);
            controls.push(this.player2Controls);
        }

        this.player1.controls = this.player1Controls;//this.controls2;//this.computer1;
        this.player1.x = this.world.getCenterStageX() - 70;
        this.player1.y = this.world.getCenterStageY();

        this.player2.controls = this.player2Controls;//this.controls3;//this.computer2;
        this.player2.x = this.world.getCenterStageX() + 70;
        this.player2.y = this.world.getCenterStageY();
        this.player2.dir.value = PI;

        this.world.addPlayer(this.player1);
        this.world.addPlayer(this.player2);

        this.world.sikeWawa.setPlayers(this.player1, this.player2);
    }
}