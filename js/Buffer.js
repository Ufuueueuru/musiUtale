class Buffer {
    constructor(player) {
        /** @type {Player} */
        this.player = player;

        /**  */
        this.queue = [[], [], [], []];//

        /** @type {Object} This will contain buffered information (such as the angle of the joystick when dash is pressed) */
        this.info = { };
    }

    contains(state) {
        let output = false;
        for (let i in this.queue) {
            for (let u in this.queue[i]) {
                if (this.queue[i][u].state === state)
                    output = true;
            }
        }

        return output;
    }

    containsStateTag(tag) {
        let output = false;
        for (let i in this.queue) {
            for (let u in this.queue[i]) {
                if (State.stateIs(this.queue[i][u].state, tag))
                    output = true;
            }
        }

        return output;
    }

    bufferStateChange(state, actions, info = { }, ifthen = undefined, ifelse = undefined) {
        this.queue[0].push({
            state: state,
            actions: actions,
            info: info,
            ifthen: ifthen,
            ifelse: ifelse
        });
    }

    update() {
        for (let i in this.queue) {
            for (let u = this.queue[i].length - 1; u >= 0; u--) {
                if (this.player.canChangeState(this.queue[i][u].state)) {
                    this.info = this.queue[i][u].info;//Receive the buffer info

                    this.player.changeState(this.queue[i][u].state, this.queue[i][u].actions, this.queue[i][u].ifthen, this.queue[i][u].ifelse);
                    this.queue[i].splice(u, 1);
                }
            }
        }

        this.queue.pop();
        this.queue.splice(0, 0, []);
    }

    serialize() {
        let copy = (({
            player,
            queue,
            ...o
        }) => defaultSerialize(o))(this);

        copy.queue = [];
        for (let i in this.queue) {
            copy.queue.push([]);
            for (let u in this.queue[i]) {
                copy.queue[i].push({
                    state: this.queue[i][u].state,
                    actions: this.queue[i][u].actions,
                    info: this.queue[i][u].info,
                    ifthen: this.queue[i][u].ifthen,
                    ifelse: this.queue[i][u].ifelse
                });
            }
        }

        return copy;
    }

    deserialize(obj) {
        this.info = {};
        defaultCopyValues(this, obj, ["queue"]);

        this.queue = [];
        for (let i in obj.queue) {
            this.queue.push([]);
            for (let u in obj.queue[i]) {
                this.queue[i].push({
                    state: obj.queue[i][u].state,
                    actions: obj.queue[i][u].actions,
                    info: obj.queue[i][u].info,
                    ifthen: obj.queue[i][u].ifthen,
                    ifelse: obj.queue[i][u].ifelse
                });
            }
        }
    }
}