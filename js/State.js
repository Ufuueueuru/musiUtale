class State {
    constructor(name, ...tags) {
        /** @type {string} */
        this.name = name;

        /** @type {string[]} */
        this.tags = tags;
    }

    setName(name) {
        this.name = name;

        return this;
    }

    addTag(name) {
        this.tags.push(name);

        return this;
    }

    removeTag(name) {
        for (let i = this.tags.length - 1; i >= 0; i--) {
            if (this.tags[i] === name)
                this.tags.splice(i, 1);
        }

        return this;
    }

    /**
     * 
     * @param {State} state
     * @param {string} tag
     */
    static stateIsTag(state, tag) {
        for (let i in state.tags) {
            if (state.tags[i] === tag)
                return true;
        }
        return false;
    }

    /**
     * Creates a copy of the given state (to avoid references causing problems)
     * @param {State} state
     */
    static copyState(state) {
        let output = new State(state.name, ...state.tags);
        return output;
    }
}

State.NEUTRAL = new State("neutral", "neutral action", "rotateable", "BASE");
State.NEUTRAL_ACTIONS = ["neutral action", "walk", "attack", "block", "dash", "power dash"];

State.WALK = new State("walk", "neutral action", "rotateable", "loop hurtbox");
State.WALK_ACTIONS = ["neutral action", "attack", "block", "dash", "power dash"];

State.CLASH = new State("clash", "BASE");
State.CLASH_ACTIONS = [];

//State.RUN = new State("neutral", "neutral action", "rotateable");
//State.RUN_ACTIONS = ["neutral action", "attack", "block", "dash"];

State.POWER_DASH = new State("power dash", "neutral action", "no collide", "rotateable", "BASE");
State.POWER_DASH_ACTIONS = [];

State.DASH = new State("dash", "neutral action", "rotateable", "no collide", "BASE");
State.DASH_ACTIONS = ["power dash"];

State.DASH_CANCEL = new State("dash cancel", "no collide", "BASE");
State.DASH_CANCEL_ACTIONS = ["power dash"];

State.BLOCK = new State("block", "BASE");
State.BLOCK_ACTIONS = ["block cancel", "block", "power dash"];

State.HITSTUN = new State("hitstun", "BASE");
State.HITSTUN_ACTIONS = ["power dash"];

//Default Attack States

State.DASH_ATTACK = new State("dash attack", "no collide");
State.DASH_ATTACK_ACTIONS = ["power dash"];

//lili
State.NL = new State("NL", "lili", "neutral action", "attack", "rotateable");
State.NL_ACTIONS = ["power dash"];

State.SL = new State("SL", "lili", "neutral action", "attack");
State.SL_ACTIONS = ["power dash"];

State.RL = new State("RL", "lili", "neutral action", "attack");
State.RL_ACTIONS = ["power dash"];

State.LL = new State("LL", "lili", "neutral action", "attack");
State.LL_ACTIONS = ["power dash"];

State.ML = new State("ML", "lili", "neutral action", "attack");
State.ML_ACTIONS = ["power dash"];

//suli
State.NS = new State("NS", "suli", "neutral action", "attack");
State.NS_ACTIONS = ["power dash"];

State.SS = new State("SS", "suli", "neutral action", "attack");
State.SS_ACTIONS = ["power dash"];

State.RS = new State("RS", "suli", "neutral action", "attack");
State.RS_ACTIONS = ["power dash"];

State.LS = new State("LS", "suli", "neutral action", "attack");
State.LS_ACTIONS = ["power dash"];

State.MS = new State("MS", "suli", "neutral action", "attack");
State.MS_ACTIONS = ["power dash"];

//poka lili
State.NPL = new State("NPL", "poka lili", "neutral action", "attack");
State.NPL_ACTIONS = ["power dash"];

State.SPL = new State("SPL", "poka lili", "neutral action", "attack");
State.SPL_ACTIONS = ["power dash"];

State.RPL = new State("RPL", "poka lili", "neutral action", "attack");
State.RPL_ACTIONS = ["power dash"];

State.LPL = new State("LPL", "poka lili", "neutral action", "attack");
State.LPL_ACTIONS = ["power dash"];

State.MPL = new State("MPL", "poka lili", "neutral action", "attack");
State.MPL_ACTIONS = ["power dash"];

//poka suli
State.NPS = new State("NPS", "poka suli", "neutral action", "attack");
State.NPS_ACTIONS = ["power dash"];

State.SPS = new State("SPS", "poka suli", "neutral action", "attack");
State.SPS_ACTIONS = ["power dash"];

State.RPS = new State("RPS", "poka suli", "neutral action", "attack");
State.RPS_ACTIONS = ["power dash"];

State.LPS = new State("LPS", "poka suli", "neutral action", "attack");
State.LPS_ACTIONS = ["power dash"];

State.MPS = new State("MPS", "poka suli", "neutral action", "attack");
State.MPS_ACTIONS = ["power dash"];

//nasa
State.NN = new State("NN", "nasa", "neutral action", "attack");
State.NN_ACTIONS = ["power dash"];

State.SN = new State("SN", "nasa", "neutral action");
State.SN_ACTIONS = ["power dash"];

State.RN = new State("RN", "nasa", "neutral action", "attack");
State.RN_ACTIONS = ["power dash"];

State.LN = new State("LN", "nasa", "neutral action", "attack");
State.LN_ACTIONS = ["power dash"];

State.MN = new State("MN", "nasa", "neutral action", "attack", "oob");//"oob" means "out of block" (Think oos in Smash)
State.MN_ACTIONS = ["power dash"];

State.GRAB = new State("grab", "rotateable", "loop hurtbox");
State.GRAB_ACTIONS = ["power dash", "block"];

State.GRABBED = new State("grabbed", "rotateable", "loop hurtbox");
State.GRABBED_ACTIONS = ["power dash", "block"];

State.LIPU_SULI = new State("lipuSuli", "lipu", "no collide", "loop hurtbox");
State.LIPU_SULI_ACTIONS = ["rightRoll", "neutralRoll", "leftRoll", "power dash"];

State.LIPU_LILI = new State("lipuLili", "lipu", "no collide", "loop hurtbox");
State.LIPU_LILI_ACTIONS = ["rightRoll", "neutralRoll", "leftRoll", "power dash"];

State.RIGHTROLL = new State("rightRoll", "no collide");
State.RIGHTROLL_ACTIONS = ["power dash"];

State.NEUTRALROLL = new State("neutralRoll", "no collide");
State.NEUTRALROLL_ACTIONS = ["power dash"];

State.LEFTROLL = new State("leftRoll", "no collide");
State.LEFTROLL_ACTIONS = ["power dash"];

State.DEAD = new State("dead");
State.DEAD_ACTIONS = [];

State.WIN = new State("win");
State.WIN_ACTIONS = [];