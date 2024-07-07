class ComputerControls extends Controls {
    constructor(player) {
        super(undefined, undefined, [
            ["dash", 4],
            ["powerDash", 6],
            ["pokaLili", 3],
            ["pokaSuli", 1],
            ["lili", 2],
            ["suli", 0],
            ["nasa", 5]],
            [0], [0.2]);

        this.computer = true;

        /** @type {Player} */
        this.player = player;

        this.frameCount = 0;


        this.modes = {};
        /** @type {AIMode} Angle change amount to account for calculating direction of attack */
        this.modes.rightLeftSkew = new AIMode([
            "right",
            "left",
            "sinpin",
            "sinpin",
            "sinpin"
        ], 10, 30);
        this.modes.forwardBackMove = new AIMode([
            "sinpin",
            "sinpin",
            "sinpin",
            "sinpin",
            "monsi",
            "monsi",
            "ala",
            "ala"
        ], 8, 20);
        this.modes.attackType = new AIMode([
            "lili",
            "lili",
            "suli",
            "pokaLili",
            "pokaLili",
            "pokaSuli",
            "nasa"
        ], 3, 10);
        this.modes.attack = new AIMode([
            "yes",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no"
        ], 3, 10);
        this.modes.dash = new AIMode([
            "yes",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no",
            "no"
        ], 3, 8);
    }

    logic() {
        
        this.frameCount++;
        for (let i in this.modes) {
            this.modes[i].update();
        }

        //this.pressJoystick(0, this.player.sinpin);
        //this.spamButton("lili", 90);

        let rightLeft = (this.modes.rightLeftSkew.mode === "right" ? PI / 3 : 0) - (this.modes.rightLeftSkew.mode === "left" ? PI / 3 : 0);
        let forwardAngle = new Angle(this.player.sinpin.value + rightLeft);
        let backwardAngle = new Angle(this.player.monsi.value - rightLeft);

        if(this.modes.forwardBackMove.mode === "sinpin")
            this.pressJoystick(0, forwardAngle);
        if (this.modes.forwardBackMove.mode === "monsi")
            this.pressJoystick(0, backwardAngle);

        if (this.player.targetPlayer) {
            let distance = dist(this.player.x, this.player.y, this.player.targetPlayer.x, this.player.targetPlayer.y);
            if (distance < 70) {
                if (this.player.world.random(0, floor(distance/12)) <= 2) {
                    this.modes.attack.mode = "yes";
                }
            }
            if (distance > 70) {
                if (this.player.world.random(0, floor(distance / 12)) >= 70) {
                    this.modes.forwardBackMove.mode = "sinpin";
                }
            }
        }

        if (this.modes.dash.mode === "yes") {
            this.pressButton("dash");
        }

        if (this.modes.attack.current <= 1 && this.modes.attack.mode === "yes") {
            this.pressButton(this.modes.attackType.mode);
            this.pressJoystick(0, new Angle(random(0, 2 * PI)));
            if (this.player.world.random(0, 4) >= 3)
                this.neutralJoystick(0);
        }

        if (this.player.targetPlayer !== null) {
            if (this.player.currentState.name === "block" || (State.stateIsTag(this.player.targetPlayer.currentState, "attack") && random(0, 1) > 0.05)) {
                backwardAngle = new Angle(this.player.monsi.value);
                this.pressJoystick(0, backwardAngle);
                this.modes.forwardBackMove.mode = "monsi";
                this.modes.forwardBackMove.current = 7;
                //print(this.player.oobAdvantage);
                if ((this.player.oobAdvantage >= 15 || (this.player.advantage >= 15 && random(0, 1) > 0.95)) && this.player.currentState.name === "block")
                    this.pressButton("nasa");
            }
        }

        if (this.player.currentState.name === "grabbed") {
            this.pressJoystick(0, backwardAngle);
            if (random(0, 1) > 0.99) {
                this.pressButton("nasa");
            }
            if (random(0, 1) > 0.99) {
                this.pressButton("nasa");
                this.pressJoystick(0, forwardAngle);
            }
        }
        if (this.player.currentState.name === "grab") {
            if (this.modes.attack.current > 6) {
                this.modes.attack.current = 6;
            }
        }
        if (this.player.currentState.name === "hitstun" && this.player.targetPlayer) {
            if (this.player.world.random(0, 500 + this.player.targetPlayer.cancelAdvantage) >= 499) {
                this.pressButton("powerDash");
            }
        }
        if (this.player.targetPlayer && this.player.targetPlayer.hitstun > 0 && this.player.actions.length > 0) {
            let i = this.player.world.random(0, this.player.actions.length - 1);
            switch (this.player.actions[i].substring(0, 1)) {
                case "N":
                    this.neutralJoystick(0);
                    break;
                case "S":
                    this.pressJoystick(0, this.player.sinpin);
                    break;
                case "R":
                    this.pressJoystick(0, this.player.right);
                    break;
                case "L":
                    this.pressJoystick(0, this.player.left);
                    break;
                case "M":
                    this.pressJoystick(0, this.player.monsi);
                    break;
            }
            switch (this.player.actions[i].substring(1)) {
                case "L":
                    this.pressButton("lili");
                    break;
                case "S":
                    this.pressButton("suli");
                    break;
                case "PL":
                    this.pressButton("poka lili");
                    break;
                case "PS":
                    this.pressButton("poka suli");
                    break;
                case "N":
                    this.pressButton("nasa");
                    break;
            }
            this.pressButton(this.player.actions[i]);//If the cancel option is a general button rather than a specific attack
        }
    }

    spamButton(i, interval=1) {
        if (this.frameCount % interval === 0)
            this.pressButton(i);
    }

    releaseButton(i) {
        this.buttons[i].pressed = false;
        this.buttons[i].clicked = false;
        this.buttons[i].clickedInGame = 0;
    }

    pressButton(i) {
        if (this.buttons[i]) {
            if (!this.buttons[i].pressed) {
                this.buttons[i].clicked = true;
                if (this.buttons[i].clickedInGame !== 1)
                    this.buttons[i].clickedInGame = 2;
            }
            this.buttons[i].pressed = true;
            this.buttons[i].heldFrames++;
        }
    }

    pressJoystick(i, angle) {
        this.joysticks[i].x = angle.getX();
        this.joysticks[i].y = angle.getY();
        this.joysticks[i].heldFrames++;
    }
    neutralJoystick(i) {
        this.joysticks[i].x = 0;
        this.joysticks[i].y = 0;
    }

    update() {
        this.resetButtons();

        this.logic();

        this.endResetButtons();
    }

    resetButtons() {
        for (let i in this.buttons) {
            this.buttons[i].clickedInGame = 0;
            this.buttons[i].clicked = false;
            this.buttons[i].pressed = false;
        }

        for (let i in this.joysticks) {
            this.joysticks[i].x = 0;
            this.joysticks[i].y = 0;
        }
    }

    endResetButtons() {
        for (let i in this.buttons) {
            if (!this.buttons[i].pressed)
                this.buttons[i].heldFrames = 0;
        }
        for (let i in this.joysticks) {
            if (!this.joysticks[i].pressed())
                this.joysticks[i].heldFrames = 0;
        }
    }

    serialize() {
        return (({
            player,
            computer,
            name,
            _keyspad,
            code,
            layout,
            frameCount,
            modes,
            ...o
        }) => defaultSerialize(o))(this);
    }
}

class AIMode {
    constructor(modes, min, max, mode=undefined, current = 0) {
        /** @type {any} */
        this.mode = mode;
        /** @type {any[]} */
        this.modes = modes;
        /** @type {number} */
        this.min = min;
        /** @type {number} */
        this.max = max;
        /** @type {number} How much longer the current mode lasts */
        this.current = current;
    }

    update() {
        if (this.current <= 0) {
            this.current = random(this.min, this.max);
            let rand = floor(random(0, this.modes.length));
            this.mode = this.modes[rand];
        }
        this.current--;
    }

    randomizeMode() {
        this.current = random(this.min, this.max);
        let rand = floor(random(0, this.modes.length));
        this.mode = this.modes[rand];
    }

    toString() {
        return this.mode;
    }
}