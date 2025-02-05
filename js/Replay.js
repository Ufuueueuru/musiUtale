class Replay {
    constructor(json) {
        this.rSeed = 0;
        this.characters = [0, 0];
        this.stage = 0;
        this.firstTo = 2;

        this.inputs = {}
;

        this.minFrameCount = undefined;
        this.initialized = false;

        this.appVersion = appVersion;

        this.jsonSRC = json;
        this.jsonData = undefined;
        this.loaded = false;

        this.onParsed = () => { };
    }

    onLoad() {
        try {
            this.jsonData = JSON.parse(this.jsonData.join(""));
            this.loaded = true;
            if (this.jsonData.appVersion != appVersion)
                this.onErrer("Mismatched game versions");
            else
                this.onParsed();
        } catch (e) {
            this.onError("INCORRECT/CORRUPT FILE FORMAT");
        }
    }

    onError(event) {
        print(event);
        alert("There was an error loading the replay file:\n" + event + "\n" + this.jsonSRC);
    }

    loadJSON(onParsed = this.onParsed) {
        this.onParsed = onParsed;
        this.jsonData = loadStrings(this.jsonSRC, this.onLoad.bind(this), this.onError.bind(this));
    }

    initLoad(parent) {
        if (this.loaded) {
            parent.world.stopMusic();
            parent.world = new stages[this.stage](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
            parent.world.setFirstTo(this.firstTo);
            for (let i = 0; i < this.characters.length; i++) {
                let currentPlayer = new characters[this.characters[i]](world);
                currentPlayer.controls = new NetplayControls();
                parent.world.addPlayer(currentPlayer);
            }
            parent.world.sikeWawa.setPlayers(parent.world.players[0], parent.world.players[1]);
            parent.world.completeReset();

            parent.world.rSeed = this.rSeed;
            parent.world.frameCount = this.minFrameCount;

            parent.player1 = parent.world.players[0];
            parent.player2 = parent.world.players[1];
            parent.player1Controls = parent.world.players[0].controls;
            parent.player2Controls = parent.world.players[1].controls;
        }

        this.load(parent.world);
    }

    load(world) {
        if (this.loaded) {
            if (this.inputs[world.frameCount] !== undefined) {
                for (let i = 0; i < this.inputs[world.frameCount].length; i++) {
                    if (world.players[i].controls.computer)
                        defaultDeserialize(world.players[i].controls, this.inputs[world.frameCount][i]);
                }
            } else {
                print("ERROR - no replay data for frame: " + world.frameCount);
                return false;
            }
        } else {
            print("ERROR - replay file not loaded");
            return false;
        }
        return true;
    }

    recordCharacters(world) {
        this.characters = [];
        for (let i = 0; i < world.players.length; i++) {
            for (let u = 0; u < characters.length; u++) {
                if (world.players[i].name === new characters[u]().name) {
                    this.characters[i] = u;
                    break;
                }
            }
        }
    }

    recordStage(world) {
        for (let i = 0; i < stages.length; i++) {
            if (world.name === new stages[i]().name) {
                this.stage = i;
                break;
            }
        }
    }

    initRecord(world) {
        this.rSeed = world.rSeed;
        this.recordCharacters(world);
        this.recordStage(world);
        this.firstTo = world.firstTo;

        this.minFrameCount = world.frameCount;
        this.initialized = true;

        this.appVersion = appVersion;
    }

    record(world, frameCount = world.frameCount) {
        if (!this.initialized) {
            this.initRecord(world);
        }

        this.inputs[frameCount] = [];
        for (let i = 0; i < world.players.length; i++) {
            this.inputs[frameCount].push(world.players[i].controls.serialize());
        }
    }

    serialize() {
        return (({
            jsonSRC,
            jsonData,
            loaded,
            initialized,
            onParsed,
            ...o
        }) => defaultSerialize(o))(this);
    }

    deserialize(obj) {
        defaultCopyValues(this, obj, ["jsonSRC", "jsonData", "loaded", "inputs"]);

        this.deserializeHelp(obj);
    }

    deserializeHelp(obj) {
        if (obj?.inputs) {
            this.inputs = {};
            for (let frame in obj.inputs) {
                this.inputs[frame] = [];
                for (let p in obj.inputs[frame]) {
                    this.inputs[frame].push(obj.inputs[frame][p]);
                }
            }
        }
    }

    serializeHLP() {
        return (({
            jsonSRC,
            jsonData,
            loaded,
            initialized,
            onParsed,
            inputs,
            ...o
        }) => defaultSerialize(o))(this);
    }
}

async function getReplay(name) {
    let data = await window.electronAPI.getReplay(name);
    return data;
}

function saveReplay(replay, finish = () => { }, fail = () => { }) {
    if (webVersion) return;
    (async () => {
        //let timey = Date.now();
        let files = await window.electronAPI.readdir("/replays/auto");
        files = files.filter((s) => s.substring(s.length - 5, 5) === ".json");
        print(files);
        //print("readdir: " + (Date.now() - timey) + "ms");
        //timey = Date.now();
        let data = defaultSerialize(replay);
        let addReplay = true;
        if (files.length >= maxReplays) {
            addReplay = await window.electronAPI.deleteReplay("auto/" + files[0]);
        }
        if (addReplay) {
            let fileName = "auto/autoReplay " + (new Date().toLocaleString("sv-SE").replaceAll("/", "-").replaceAll(":", "_"));
            setTimeout(async () => {
                await window.electronAPI.resetReplay();
                function addData(i, keys) {
                    setTimeout(async () => {
                        if (i >= keys.length) {
                            window.electronAPI.saveCurrentReplay(fileName + ".json");
                            window.electronAPI.saveReplay(fileName + ".jsonhlp", replay.serializeHLP());
                            finish();
                            return;
                        }
                        await window.electronAPI.addReplayData(keys[i], data[keys[i]]);
                        addData(i + 1, keys);
                    });
                }
                addData(0, Object.keys(data));
            });
            //window.electronAPI.saveReplay(fileName, data);//sync method
        }
        //print("saveReplay: " + (Date.now() - timey) + "ms");
    })();
}