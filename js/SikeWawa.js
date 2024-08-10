class SikeWawa {
    constructor(player1 = undefined, player2 = undefined) {
        this.slices = [];
        while (this.slices.length < 8) {
            this.slices.push(new SikeWawaSlice(player1, player2, this.slices.length * PI / 4));
        }

        this.player1 = player1;
        this.player2 = player2;

        this.player1Angle = new Angle();
        this.player2Angle = new Angle();
    }

    reset() {
        for (let i in this.slices) {
            this.slices[i].value = 0;
            this.slices[i].positiveSheet.requestAnimationChange(0);
            this.slices[i].negativeSheet.requestAnimationChange(0);
        }
    }

    setPlayers(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        for (let i in this.slices) {
            this.slices[i].positivePlayer = p1;
            this.slices[i].negativePlayer = p2;
        }
    }

    draw(g, x, y) {
        for (let i = 0; i < this.slices.length; i++) {
            this.slices[i].draw(g, x, y, 0.065, 0.065);
        }

        g.push();
        g.translate(x, y);
        g.rotate(this.player1Angle.value);

        g.noStroke();
        g.fill(172, 50, 50, 250);
        g.triangle(17, 0, 21, -4, 21, 4);
        g.fill(48, 96, 130, 250);
        g.triangle(-17, 0, -21, -4, -21, 4);

        g.pop();
    }

    run() {
        for (let i in this.slices) {
            this.slices[i].run();
        }

        if (this.player1 && this.player2) {
            this.player1Angle.setFromPoint(this.player1.x - this.player2.x, this.player1.y - this.player2.y);
            this.player1Angle.value = round(this.player1Angle.value * 4 / PI) * PI / 4;

            this.player2Angle.setValue(this.player1Angle.value + PI);
        }
    }

    addMeter(value, sideValue, player) {
        let signV = this.player1 === player ? 1 : -1;

        let sliceID;
        if (signV > 0) {
            sliceID = round(this.player1Angle.value * 4 / PI);
        } else {
            sliceID = round(this.player2Angle.value * 4 / PI);
        }
        sliceID %= 8;
        let leftID = (sliceID + 7) % 8;
        let rightID = (sliceID + 1) % 8;

        this.slices[sliceID].value += value * signV;
        this.slices[leftID].value += sideValue * signV;
        this.slices[rightID].value += sideValue * signV;

        let frameID = floor(min(abs(this.slices[sliceID].value), 16));
        this.slices[sliceID].positiveSheet.requestAnimationChange(frameID);
        this.slices[sliceID].negativeSheet.requestAnimationChange(frameID);
        frameID = floor(min(abs(this.slices[leftID].value), 16))
        this.slices[leftID].positiveSheet.requestAnimationChange(frameID);
        this.slices[leftID].negativeSheet.requestAnimationChange(frameID);
        frameID = floor(min(abs(this.slices[rightID].value), 16))
        this.slices[rightID].positiveSheet.requestAnimationChange(frameID);
        this.slices[rightID].negativeSheet.requestAnimationChange(frameID);
    }

    addMeterAll(value, minusValue, player) {
        let signV = this.player1 === player ? 1 : -1;

        for (let i in this.slices) {
            if (signV * this.slices[i].value >= 0) {
                this.slices[i].value += value * signV;
            } else {
                this.slices[i].value += minusValue * signV;
            }
            let frameID = floor(min(abs(this.slices[i].value), 16));
            this.slices[i].positiveSheet.requestAnimationChange(frameID);
            this.slices[i].negativeSheet.requestAnimationChange(frameID);
        }
    }

    /**
     * A value representing how much of the sike wawa a player controls (from 0 to 100)
     * @param {Player} player
     * @returns
     */
    getTotalInfluence(player) {
        let count = 0;
        let signV = this.player1 === player ? 1 : -1;
        for (let i in this.slices) {
            if (this.slices[i].value * signV > 0)
                count += min(this.slices[i].value * signV, 16);
        }

        return round(count * 100 / 128);
    }

    sliceOwnerIs(player) {
        let signV = this.player1 === player ? 1 : -1;

        let sliceID;
        if (signV > 0) {
            sliceID = round(this.player1Angle.value * 4 / PI);
        } else {
            sliceID = round(this.player2Angle.value * 4 / PI);
        }
        sliceID %= 8;

        return signV * this.slices[sliceID].value >= 0;
    }

    serialize() {
        return (({
            player1,
            player2,
            ...o
        }) => defaultSerialize(o))(this);
    }
}

class SikeWawaSlice {
    constructor(positivePlayer, negativePlayer, angleValue = 0) {
        this.positivePlayer = positivePlayer;
        this.negativePlayer = negativePlayer;
        this.value = 0;
        this.direction = new Angle(angleValue);

        this.positiveSheet = Spritesheet.copy(assetManager.spritesheets.sikeWawaRed);
        this.negativeSheet = Spritesheet.copy(assetManager.spritesheets.sikeWawaBlue);
    }

    ownerIs(player) {
        return (this.positivePlayer === player ? 1 : -1) * this.value >= 0;
    }

    isFull() {
        return abs(this.value) >= 16;
    }

    setMeter(value) {
        this.value = value;

        let frameID = floor(min(abs(this.value), 16));
        this.positiveSheet.requestAnimationChange(frameID);
        this.negativeSheet.requestAnimationChange(frameID);
    }

    useMeter(player, value) {
        let signV = this.positivePlayer === player ? 1 : -1;

        this.value -= value * signV;
        let frameID = floor(min(abs(this.value), 16));
        this.positiveSheet.requestAnimationChange(frameID);
        this.negativeSheet.requestAnimationChange(frameID);
    }

    draw(g, x, y, widthMult = 1, heightMult = 1) {
        g.push();
        g.translate(x, y);
        g.rotate(this.direction.value);
        g.scale(widthMult, heightMult);

        let sheet = this.value > 0 ? this.positiveSheet : this.negativeSheet;
        sheet.draw(g, -32, -112);

        g.pop();
    }

    run() {
        this.value = constrain(this.value, -18, 18);

        this.positiveSheet.run();
        this.negativeSheet.run();
    }

    serialize() {
        return (({
            positivePlayer,
            negativePlayer,
            //positiveSheet,
            //negativeSheet,
            ...o
        }) => defaultSerialize(o))(this);
    }
}