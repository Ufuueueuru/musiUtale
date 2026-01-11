/** The screen for establishing stage and character selections in an online match */
class NetplaySetupScreen extends Screen {
    constructor(peer, connection) {
        super();

        this.setupScreen = true;

        this.rSeed = floor(random(0, 1000000));

        this.peer = peer;
        this.connection = connection;

        this.playerControls = [null, null];
        this.fakeControls = false;

        this.characterSelections = [0, 0];
        this.selection = 0;

        this.playerNumber = -1;

        this.pickMyStage = random(0, 1) < 0.5;

        this.randomChoices = [false, false, false];
    }

    draw(g) {
        g.background(0);
    }

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        this.fakeControls = fake;
    }

    setPlayerNumber(number) {
        this.playerNumber = number;
    }

    setSelections(selections, stage) {
        this.characterSelections = selections;
        this.selection = stage;
    }

    setControls(c, fake = false) {
        this.playerControls[0] = c[0];
        this.playerControls[1] = c[1];

        /*if (this.netplay) {
            this.playerControls[1] = null;
        }*/

        this.fakeControls = fake;
    }

    setRandom(choices) {
        this.randomChoices = choices;
    }

    run() {
        
    }

    destruct() {

    }

    sendInitialMessage() {
        if (this.playerNumber === 0) {
            this.connection.send({ type: "setupScreen", ready: false });
        }
    }
}