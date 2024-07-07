class ComputerControlsTree extends Controls {
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

        this.feedbackTimers = [];

        this.dashDecision = "neutral";
        this.makingDecision = 0;
        this.moveDecide = {
            neutral: new DecisionNode(5, "SN", "SL", "NL", "ML", "MN", "MR", "NR", "SR"),
            block: new DecisionNode(5, "SN", "SL", "NL", "ML", "MN", "MR", "NR", "SR")
        }
        this.decisionTree = {
            neutral: {
                far: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near50: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near60: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near70: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near80: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near90: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near100: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near110: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near120: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                near130: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                },
                close: {
                    back: new DecisionNode(5, ...computerActions),
                    front: new DecisionNode(5, ...computerActions),
                    right: new DecisionNode(5, ...computerActions),
                    left: new DecisionNode(5, ...computerActions)
                }
            },
            block: {
                back: new DecisionNode(5, "neutral", "MN"),
                front: new DecisionNode(5, "neutral", "MN")
            },
            hit: {
                all: new DecisionNode(5, "neutral", "powerDash")
            },
            comboing: {
                back: new DecisionNode(5, ...computerActions),
                front: new DecisionNode(5, ...computerActions),
                right: new DecisionNode(5, ...computerActions),
                left: new DecisionNode(5, ...computerActions)
            },
            dashing: new DecisionNode(5, "neutral", "dash")
        };

        defaultDeserialize(this.moveDecide, treeSetAI.moveDecide);
        defaultDeserialize(this.decisionTree, treeSetAI.decisionTree);
    }

    logic() {
        if (this.player.targetPlayer) {
            let decision;
            let targetAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);
            let angleDif = Angle.compare(this.player.dir, targetAngle);
            if (this.player.currentState.name === "dash") {
                if (this.makingDecision <= 0) {
                    decision = this.decisionTree.dashing.getDecision();
                    this.dashDecision = decision.name;
                    this.makingDecision = 9;
                } else {
                    this.makingDecision--;
                    decision = {name: this.dashDecision};
                }
            } else if (this.player.currentState.name === "hitstun") {
                decision = this.decisionTree.hit.all.getDecision();
            } else if (this.player.currentState.name === "block") {
                if (abs(angleDif) <= PI / 2) {
                    decision = this.decisionTree.block.front.getDecision();
                } else {
                    decision = this.decisionTree.block.back.getDecision();
                }
            } else if (this.player.targetPlayer.currentState.name === "hitstun") {
                if (angleDif >= -PI / 6 && angleDif <= PI / 6) {
                    decision = this.decisionTree.comboing.front.getDecision();
                } else if (angleDif >= PI / 6 && angleDif <= 3 * PI / 4) {
                    decision = this.decisionTree.comboing.right.getDecision();
                } else if (angleDif <= -PI / 6 && angleDif >= -3 * PI / 4) {
                    decision = this.decisionTree.comboing.left.getDecision();
                } else {
                    decision = this.decisionTree.comboing.back.getDecision();
                }
            } else if (this.makingDecision <= 0) {//Neutral
                let distName = "far";
                let distanceNum = dist(this.player.x, this.player.y, this.player.targetPlayer.x, this.player.targetPlayer.y);
                if (distanceNum < 140) {
                    distName = "near" + (floor(distanceNum / 10) * 10);
                }
                if (distanceNum < 50)
                    distName = "close";
                if (angleDif >= -PI / 6 && angleDif <= PI / 6) {
                    decision = this.decisionTree.neutral[distName].front.getDecision();
                } else if (angleDif >= PI / 6 && angleDif <= 3 * PI / 4) {
                    decision = this.decisionTree.neutral[distName].right.getDecision();
                } else if (angleDif <= -PI / 6 && angleDif >= -3 * PI / 4) {
                    decision = this.decisionTree.neutral[distName].left.getDecision();
                } else {
                    decision = this.decisionTree.neutral[distName].back.getDecision();
                }
            } else {
                decision = {name: "neutral"};
            }
            if (this.player.canChangeState(this.player.getStateFromString(decision.name))) {
                this.pressAction(decision.name);
                this.feedbackTimers.push(new FeedbackTimer(decision, this.player));
            } else if (decision.name === "dash") {
                this.pressButton("dash");
                this.releaseButton("nasa");
            }
            if (decision.name === "neutral") {
                if (this.makingDecision <= 0) {
                    this.makingDecision = 5;
                } else {
                    this.makingDecision--;
                }
                let direction;
                if (this.player.currentState.name === "block") {
                    direction = this.moveDecide.block.getDecision();
                } else {
                    direction = this.moveDecide.neutral.getDecision();
                }
                
                let x = 0;
                let y = 0;

                switch (direction.name.substring(0, 1)) {
                    case "S":
                        x = 1;
                        break;
                    case "M":
                        x = -1;
                        break;
                }
                switch (direction.name.substring(1, 2)) {
                    case "R":
                        y = 1;
                        break;
                    case "L":
                        y = -1;
                        break;
                }

                let angle = new Angle().setFromPoint(x, y);
                angle.changeValue(targetAngle.value);
                this.pressJoystick(0, angle);
                this.feedbackTimers.push(new FeedbackTimer(direction, this.player));
            }
            for (let i = this.feedbackTimers.length - 1; i >= 0; i--) {
                this.feedbackTimers[i].run();
                if (this.feedbackTimers[i].time <= 0) {
                    this.feedbackTimers[i].responseAction();
                    this.feedbackTimers.splice(i, 1);
                }
            }
        }
        for (let i in this.player.world.attacks) {
            let collideInfo;
            if (this.player !== this.player.world.attacks[i].player && this.player.world.attacks[i].currentlyActive() && !this.player.world.attacks[i].hitPlayerBool)
                collideInfo = this.player.world.attacks[i].getCollideInformation(this.player);
            if (collideInfo?.collided) {
                this.pressJoystick(0, this.player.world.attacks[i].getAttackAngle(this.player, collideInfo.circle, collideInfo.playerCircle, collideInfo.property));
            }
        }
        if (this.player.currentState.name === "grabbed") {
            this.pressJoystick(0, this.player.monsi);
            if (random(0, 1) > 0.99) {
                this.pressButton("nasa");
            }
            if (random(0, 1) > 0.99) {
                this.pressButton("nasa");
                this.pressJoystick(0, this.player.sinpin);
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
        this.pressButton(actionName);//If the cancel option is a general button rather than a specific attack
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
            feedbackTimers,
            moveDecide,
            decisionTree,
            ...o
        }) => defaultSerialize(o))(this);
    }
}

let computerActions = ["neutral", "NL", "SL", "RL", "LL", "ML", "NS", "SS", "RS", "LS", "MS", "NPL", "SPL", "RPL", "LPL", "MPL", "NPS", "SPS", "RPS", "LPS", "MPS", "NN", "SN", "RN", "LN", "MN", "dash", "powerDash"];

class DecisionNode {
    constructor(initValue, ...names) {
        this.actions = [];
        for (let i in names) {
            this.actions.push(new Decision(names[i], initValue));
        }

        this.actions.sort((a, b) => {
            return a.name > b.name;
        });
    }

    getAction(name) {
        let low = 0;
        let high = this.actions.length - 1;
        let i = floor((low + high) / 2);
        let max = 0;
        while (low <= high && max < 50) {
            max++;
            if (this.actions[i].name === name) {
                return this.actions[i];
            }
            if (this.actions[i].name > name) {
                if (high === i)
                    break;
                high = i;
            }
            if (this.actions[i].name < name) {
                if (low === i)
                    i++;
                low = i;
            }
            i = floor((low + high) / 2);
        }
        return null;
    }

    setWeight(name, value) {
        this.getAction(name).value = value;
    }

    decreaseWeight(name, min = 0, amount = 1) {
        let action = this.getAction(name);
        action.value -= amount;
        if (action.value < min)
            action.value = min;
    }

    increaseWeight(name, max = 100, amount = 1) {
        let action = this.getAction(name);
        action.value -= amount;
        if (action.value < min)
            action.value = min;
    }

    getDecision() {
        let sum = 0;
        this.actions.forEach((a) => { sum += a.value; });
        let decisionNum = floor(random(0, sum));
        let i = -1;
        sum = 0;
        while (sum <= decisionNum) {
            i++;
            sum += this.actions[i].value;
        }
        return this.actions[i];
    }
}

class Decision {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        if (this.name === "neutral") {
            this.value *= 100;
        }
    }
}

class FeedbackTimer {
    constructor(decision, player, responseAction = this.responseAction, time = 90) {
        this.decision = decision;
        this.player = player;
        this.initialHealth = this.player.health;
        this.initialHealthEnemy = this.player.targetPlayer.health;
        this.responseAction = responseAction;

        this.time = time;
    }

    run() {
        this.time--;
    }

    responseAction() {
        if (this.decision.name !== "neutral") {
            this.decision.value += ceil((this.player.health - this.initialHealth) / 30)
                + ceil((this.initialHealthEnemy - this.player.targetPlayer.health) / 10);
        }
        if (this.player.health === this.initialHealth && this.initialHealthEnemy === this.player.targetPlayer.health) {
            if (this.decision.name !== "neutral") {
                this.decision.value -= 3;
            } else {
                this.decision.value += 6;
            }
        }
        if (this.decision.name !== "neutral") {
            this.decision.value = constrain(this.decision.value, 1, 100);
        } else {
            this.decision.value = constrain(this.decision.value, 1, 1000);
        }
    }
}