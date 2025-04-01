class TrainingComputer extends Controls {
    constructor(player, world) {
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

        /** @type {World} */
        this.world = world;

        /** @type {Object} */
        this.trainingSettings = {};

        this.trainingSettings.block = {
            isBlocking: false,//Whether the training dummy tries to block attacks or not
            angle: new Angle(),//What angle to block from
            dynamicAngle: true,//Should the block angle change relative to attack position?
            staticRelative: true,//Should the static block angle rotate relative to the enemy position?
            isParry: false,//Should the dummy parry when it blocks?
            isHit: false,//Should the dummy always get hit (prevents neutral blocking)
            isCounter: false
        };

        this.trainingSettings.reversal = {
            isReversal: false,
            action: "MN",
            fromBlock: true,//Should the dummy mash out of block?
            fromHit: false,//Should the dummy mash out of hit?
            isThreshold: false,//Should the dummy take frame advantage in account on whether to mash or not?
            advantageMode: "oob",//Either "standard", "cancel", "oob", "oobCancel"
            frameAdvantageThreshold: 4,
            count: 0,
            hold: 5
        };

        this.trainingSettings.mash = [
            {
                names: ["grabbed"],
                isMashing: false,
                wait: 0,
                count: 6,
                hold: 1,
                offset: 2,
                actions: ["SN", "SN", "SN", "SN", "SN", "MN", "M", "M", "M", "M", "M"]
            },
            {
                names: ["block"],
                isMashing: false,
                wait: 0,
                count: 0,
                hold: 1,
                offset: 0,
                actions: ["MPS", "MN"]
            }
        ];
    }

    logic() {
        //Reversaling attacks
        let fromBlock = this.trainingSettings.reversal.fromBlock && this.player.currentState.name === "block";
        let fromHit = this.trainingSettings.reversal.fromHit && this.player.currentState.name === "hitstun";
        let playerAdvantage = {standard: this.player.advantage, cancel: this.player.cancelAdvantage, oob: this.player.oobAdvantage, oobCancel: this.player.oobCancelAdvantage}[this.trainingSettings.reversal.advantageMode];
        //if (this.player.targetPlayer && this.player.targetPlayer.actions.length <= 1 && this.trainingSettings.reversal.advantageMode === "cancel")
        //    playerAdvantage = this.player.advantage;
        //if (this.player.targetPlayer && this.player.targetPlayer.actions.length <= 1 && this.trainingSettings.reversal.advantageMode === "oobCancel")
        //    playerAdvantage = this.player.oobAdvantage;
        let threshold = (this.trainingSettings.reversal.isThreshold && playerAdvantage >= this.trainingSettings.reversal.frameAdvantageThreshold) || !this.trainingSettings.reversal.isThreshold;
        if (this.trainingSettings.reversal.isReversal && (fromBlock || fromHit) && threshold) {
            this.clickAction(this.trainingSettings.reversal.action);
            this.trainingSettings.reversal.count = 0;
        }
        if (this.trainingSettings.reversal.isReversal && this.player.currentState.name === this.trainingSettings.reversal.action && this.trainingSettings.reversal.count < this.trainingSettings.reversal.hold) {
            this.pressAction(this.trainingSettings.reversal.action);
            this.trainingSettings.reversal.count++;
        }

        //Mashing
        for (let i in this.trainingSettings.mash) {
            let mash = this.trainingSettings.mash[i];
            if (mash.isMashing && (mash.names.includes(this.player.currentState.name) || ((mash.count + mash.offset) % (mash.wait + mash.hold) <= mash.hold && (mash.count + mash.offset) % (mash.wait + mash.hold) > 0))) {
                mash.count++;
                if ((mash.count + mash.offset) % (mash.wait + mash.hold) <= mash.hold) {
                    let chosenAction = mash.actions[floor(random(0, mash.actions.length))];
                    if ((mash.count + mash.offset) % (mash.wait + mash.hold) === 0) {
                        this.clickAction(chosenAction);
                    } else {
                        this.pressAction(chosenAction);
                    }
                }
            } else {
                mash.count = mash.hold;
            }
        }

        //Blocking attacks
        for (let i = this.world.attacks.length - 1; i >= 0; i--) {
            let collideInfo;
            if (this.player !== this.world.attacks[i].player && this.world.attacks[i].currentlyActive() && (!this.world.attacks[i].alreadyHitPlayer(this.player))) {
                collideInfo = this.world.attacks[i].getCollideInformation(this.player);
            }
            if (collideInfo?.collided) {
                if (this.trainingSettings.block.isBlocking) {
                    this.resetButtons();
                    let parryOffset = (this.trainingSettings.block.isParry ? PI : 0);
                    if (this.trainingSettings.block.dynamicAngle) {
                        if (!collideInfo.property.blockBreak || (collideInfo.property.blockBreakParriable && this.trainingSettings.block.isParry))
                            this.pressJoystick(0, new Angle(this.world.attacks[i].getAttackAngle(this.player, collideInfo.circle, collideInfo.playerCircle, collideInfo.property).value + parryOffset));
                    } else {
                        let rotation = 0;
                        if (this.player.targetPlayer && this.trainingSettings.block.staticRelative)
                            rotation = atan2(this.player.targetPlayer.y - this.player.y, this.player.targetPlayer.x - this.player.x);
                        this.pressJoystick(0, new Angle(this.trainingSettings.block.angle.value + rotation + parryOffset));
                    }
                    if (this.trainingSettings.block.isParry) {
                        this.player.moveCount = 1;
                        this.player.parryCooldown = 0;
                    } else {
                        this.player.moveCount = 10;
                    }
                }
                if (this.trainingSettings.block.isHit) {
                    this.resetButtons();
                    if (this.trainingSettings.block.isCounter)
                        this.player.bufferCounterHittable = true;

                    if (!collideInfo.property.blockBreak) {
                        this.player.moveCount = 10;
                        this.pressJoystick(0, this.world.attacks[i].getAttackAngle(this.player, collideInfo.circle, collideInfo.playerCircle, collideInfo.property).changeValue(PI));
                    }
                }
            }
        }
    }

    pressAction(actionName) {
        switch (actionName.substring(0, 1)) {
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
        switch (actionName.substring(1)) {
            case "L":
                this.pressButton("lili");
                break;
            case "S":
                this.pressButton("suli");
                break;
            case "PL":
                this.pressButton("pokaLili");
                break;
            case "PS":
                this.pressButton("pokaSuli");
                break;
            case "N":
                this.pressButton("nasa");
                break;
        }
        if (actionName === "dash attack") {
            this.pressButton("dash");
            this.pressButton("lili");
            return;
        }
        this.pressButton(actionName);//If the cancel option is a general button rather than a specific attack
    }

    clickAction(actionName) {
        switch (actionName.substring(0, 1)) {
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
        switch (actionName.substring(1)) {
            case "L":
                this.clickButton("lili");
                break;
            case "S":
                this.clickButton("suli");
                break;
            case "PL":
                this.clickButton("pokaLili");
                break;
            case "PS":
                this.clickButton("pokaSuli");
                break;
            case "N":
                this.clickButton("nasa");
                break;
        }
        if (actionName === "dash attack") {
            this.clickButton("dash");
            this.clickButton("lili");
            return;
        }
        this.clickButton(actionName);//If the cancel option is a general button rather than a specific attack
    }

    releaseButton(i) {
        this.buttons[i].pressed = false;
        this.buttons[i].clicked = false;
        this.buttons[i].clickedInGame = 0;
    }

    clickButton(i) {
        if (this.buttons[i]) {
            this.buttons[i].clicked = true;
            this.buttons[i].clickedInGame = 2;
            this.buttons[i].pressed = true;
            this.buttons[i].heldFrames++;
        }
    }

    pressButton(i) {
        if (this.buttons[i]) {
            /*if (!this.buttons[i].pressed) {
                this.buttons[i].clicked = true;
                if (this.buttons[i].clickedInGame !== 1)
                    this.buttons[i].clickedInGame = 2;
            }*/
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
        this.joysticks[i].heldFrames = 0;
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

    setSettingsToBlock() {
        this.trainingSettings.block.isBlocking = true;
        this.trainingSettings.block.isParry = false;
        this.trainingSettings.block.isHit = false;

        this.trainingSettings.reversal.isReversal = false;

        this.trainingSettings.mash = [];
    }
}