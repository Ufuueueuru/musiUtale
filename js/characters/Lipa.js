class Lipa extends Player {
    constructor() {
        super([
			new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)
        ]);

		this.headNoun = "󱤑";//jan
		this.name = "󱤑󱦐󱦗󱤮󱤏󱥔󱤈󱦑";//jan Lipa

		this.selectScreenSizeOffset = 60;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janLipaSheet);

		this.states.DASH_FAIL = new State("dash fail", "neutral action", "BASE");
		this.states.DASH_FAIL_ACTIONS = [];

		this.states.DASH_CANCEL = State.copyState(State.DASH_CANCEL).removeTag("rotateable");
		this.states.SL = State.copyState(State.SL).addTag("rotateable");
		this.states.LL = State.copyState(State.LL).addTag("rotateable");
		this.states.LS = State.copyState(State.LS).addTag("rotateable");
		this.states.NPL = State.copyState(State.NPL).addTag("rotateable");

        this.collideRadius = 55;

		this.movementSpeed = 1.9;
		this.forwardSpeedBoost = 0.6;

		this.OOBBlockFrame = 6;

        this.turnSpeed = 0.018;

        this.dash.speed = 9;
        this.dash.frames = 20;
        this.dash.invFirstFrame = this.dash.frames - 4;
        this.dash.turnSpeedBoost = 0.1;
		this.dash.neutralBoost = 0;
		this.dash.backPenalty = 1;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 2;

        this.dash.iFrames = 13;
        this.dash.invTo = ["attack"];
        this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 13;
		this.dash.grabCancelFrame = this.dash.frames - 25;
		this.dash.blockCancelFrame = this.dash.frames - 17;

		this.dash.comboDashFrame = this.dash.frames - 25;
		this.dash.combos = 0;
		this.dash.maxCombos = 4;

		this.dash.cancelIFrames = 6;
		this.dash.cancelSpeed = 18;
		this.dash.cancelFrames = 20;
		this.dash.cancelDecay = 0.8;
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 1;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 9;

		this.weight = 1.2;

		this.health = 750;
		this.maxHealth = 750;

		this.arrowOffset = 45;
		this.arrowOffsetBack = -25;

		this.dashFailFrames = 32;
		this.dashFailIFrames = 18;
		this.dashFailIFrameStart = this.dashFailFrames - 6;

		this.dashCancelRegen = 0;
		this.dashCancelRegenFull = 120;
		this.dashCancelsMax = 5;
		this.dashCancels = this.dashCancelsMax;
		this.dashDisplays = [];
		for (let i = 0; i < this.dashCancelsMax; i++) {
			this.dashDisplays.push(Spritesheet.copy(assetManager.spritesheets.tawaEnKama));
			this.dashDisplays[i].currentFrame = i;
		}

		this.rightHanded = true;

		this.chargeNN = 0;
		this.chargeNNMax = 60;
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks
		this.DASH_ATTACK = LipaDashAttack;

		this.NL = LipaNL;
		this.SL = LipaSL;
		this.RL = LipaRL;
		this.LL = LipaLL;
		this.ML = LipaML;

		this.NS = LipaNS;
		//this.SS = LipaSS;
		this.RS = LipaRS;
		this.LS = LipaLS;
		//this.MS = LipaMS;

		this.NPL = LipaNPL;
		this.SPL = LipaSPL;
		this.RPL = LipaRPL;
		this.LPL = LipaLPL;
		this.MPL = LipaMPL;

		this.NPS = LipaNPS;
		//this.SPS = LipaSPS;
		this.RPS = LipaRPS;
		this.LPS = LipaLPS;
		//this.MPS = LipaMPS;

		this.NN = LipaNN;
		this.SN = LipaSN;
		//this.RN = LipaRN;
		//this.LN = LipaLN;
		this.MN = LipaMN;
	}

	generalLogic() {
		if (this.currentState.name === "dash fail") {
			if (this.actionLag === this.dashFailIFrameStart) {
				this.iFrames = this.dashFailIFrames;
				this.invTo = ["attack", "grab"];
			}
			this.attackEndable();
		}
		if (this.dashCancels < this.dashCancelsMax) {
			if (this.actionLag <= 0)
				this.dashCancelRegen++;
			if (this.dashCancelRegen >= this.dashCancelRegenFull + (this.dashCancels <= 0 ? this.dashCancelRegenFull * 2 : 0)) {
				this.dashCancelRegen = 0;
				if (this.dashCancels <= 0)
					this.dashCancels += this.dashCancelsMax - 1;
				this.dashCancels++;
			}
		} else {
			this.dashCancelRegen = 0;
		}
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);
		g.scale(this.rightHanded?1:-1, 1);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -160 + rumbleX, -120 + rumbleY, 320, 320);

		g.pop();

		if (debug.displayHurtboxes) {
			let red = 200;
			let green = 210;
			let blue = 220;
			if (this.iFrames > 0 && this.invTo.includes("attack")) {
				red = 40;
				green = 0
				blue = 255;
			}
			if (this.iFrames > 0 && this.invTo.includes("grab")) {
				red = 255;
				green = 200;
				blue = 0;
			}

			this.debugDraw(g, red, green, blue);
		}
	}

	drawExtraHUD(g, i, x, y) {
		let leftX = 512 * 0.12 + 512 * 0.76 * i - 35;

		g.push();
		g.translate(x, y);

		for (let i in this.dashDisplays) {
			this.dashDisplays[i].draw(g, leftX + 15 * i, 65, 15, 15);
		}
		if (this.dashCancels === 0) {
			g.stroke(196, 19, 41, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + 75 * (this.dashCancelRegenFull * 3 - this.dashCancelRegen) / this.dashCancelRegenFull / 3, 85);
		} else if (this.chargeNN > 0) {
			g.stroke(210, 210, 210, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + 75 * this.chargeNN / this.chargeNNMax, 85);
		}

		g.pop();
	}

	startDash() {
		if (!this.chargingNN) {
			if ((this.controls.dashCancelHold && !this.controls.pressed("dash") && this.currentState.name === "dash" && this.actionLag >= this.dash.cancelFrame) || (!this.controls.dashCancelHold && this.controls.clicked("dash"))) {
				if (this.buffer.contains(this.states.DASH) || this.currentState.name === "dash") {
					//let currentAngle = new Angle().setFromPoint(this.dx, this.dy);
					//let angleDist = Angle.distance(this.sinpin, currentAngle);

					//if(angleDist > 3 * PI / 8)//This would prevent sidestepping forwards
					this.startDashCancel();
				}
			}
			if (this.controls.clicked("dash") && this.dashCancels > 0) {
				let tempAngle = this.dir.value;
				let run = true;
				let boost = this.dash.neutralBoost;
				let angleDif = Angle.distance(this.dir, this.controls.angle(0));
				let penalty = max(0, angleDif - PI / 2) * 2 / PI * this.dash.backPenalty;
				this.dash.currentPenalty = 0;
				if (this.controls.joystickPressed(0)) {
					tempAngle = this.controls.angle(0).value;
					run = false;
					boost = 0;
					this.dash.currentPenalty = penalty;
				}

				let bufferInfo = {//Create the buffer.info in order to send with the buffered input
					angle: tempAngle,//The angle to dash towards
					run: run,//Whether to run or not
					boost: boost,
					penalty: this.dash.currentPenalty
				};

				this.buffer.bufferStateChange(this.states.DASH, this.states.DASH_ACTIONS, bufferInfo, () => {
					this.actionLag = this.dash.frames;
					this.dx = cos(this.buffer.info.angle) * (this.dash.speed + this.buffer.info.boost - this.buffer.info.penalty);
					this.dy = sin(this.buffer.info.angle) * (this.dash.speed + this.buffer.info.boost - this.buffer.info.penalty);

					this.sheet.setAnimation("Dash");

					this.iFrames = 0;

					this.dashCancels--;
					if (this.dashCancels <= 0) {
						this.dashCancelRegen = 0;
					}
				});
			} else if (this.controls.clicked("dash")) {
				this.buffer.bufferStateChange(this.states.DASH_FAIL, this.states.DASH_FAIL_ACTIONS, {}, () => {
					this.actionLag = this.dashFailFrames;
					this.dx = 0;
					this.dy = 0;

					this.sheet.setAnimation("Dash Fail");
				});
			}
		}
	}

	startRL() {
		if ((this.controls.clicked("lili") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("lili") && this.pressedLeft() && !this.rightHanded)) {
			
			let bufferInfo = this.RL.bufferInfo ? this.RL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RL, this.states.RL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RL");

				let attack = this.RL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RL.startAttack)
					this.RL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startLL() {
		if ((this.controls.clicked("lili") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("lili") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LL.bufferInfo ? this.LL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.LL, this.states.LL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LL");

				let attack = this.LL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LL.startAttack)
					this.LL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startRS() {
		if ((this.controls.clicked("suli") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("suli") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RS.bufferInfo ? this.RS.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RS, this.states.RS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RS");

				let attack = this.RS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RS.startAttack)
					this.RS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startLS() {
		if ((this.controls.clicked("suli") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("suli") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LS.bufferInfo ? this.LS.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.LS, this.states.LS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LS");

				let attack = this.LS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LS.startAttack)
					this.LS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startRPL() {
		if ((this.controls.clicked("pokaLili") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("pokaLili") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RPL.bufferInfo ? this.RPL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RPL, this.states.RL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RPL");

				let attack = this.RPL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RPL.startAttack)
					this.RPL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startLPL() {
		if ((this.controls.clicked("pokaLili") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("pokaLili") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LPL.bufferInfo ? this.LPL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.LPL, this.states.LPL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LPL");

				let attack = this.LPL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LPL.startAttack)
					this.LPL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startRPS() {
		if ((this.controls.clicked("pokaSuli") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("pokaSuli") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RPS.bufferInfo ? this.RPS.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RPS, this.states.RPS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RPS");

				let attack = this.RPS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RPS.startAttack)
					this.RPS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startLPS() {
		if ((this.controls.clicked("pokaSuli") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("pokaSuli") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LPS.bufferInfo ? this.LPS.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.LPS, this.states.LPS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LPS");

				let attack = this.LPS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LPS.startAttack)
					this.LPS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startNN() {
		if (!this.controls.pressed("nasa"))
			this.chargingNN = false;
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {
			this.chargingNN = true;
			if (this.canChangeState(this.states.NN))
				this.chargeNN = 0;
		}
		if (this.dashCancels === 0)
			this.chargingNN = false;
		if (this.chargingNN/* && this.canChangeState(this.states.NN)*/)
			this.chargeNN++;
		if (this.chargeNN >= this.chargeNNMax) {
			if (this.controls.pressed("nasa")) {
				this.chargeNN = this.chargeNNMax;
			} else {
				this.chargeNN--;

				let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo() : {};

				this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
					this.sheet.setAnimation("NN");
					this.chargeNN = 0;

					let attack = this.NN.createAttack(this);
					this.addCurrentAttack(attack);

					attack.rotateTo(this.dir);

					this.world.addAttack(attack);

					this.setActionLag(attack);

					if (this.NN.startAttack)
						this.NN.startAttack(this, attack, bufferInfo);
				});
			}
		}
	}

	copyHurtbox(target) {
		for (let i in target) {
			this.circles.push(new Circle(target[i].x, target[i].y, target[i].diameter));
			if (target[i].intangible)
				this.circles[i].intangible = target[i].intangible;
			if (!this.rightHanded)
				this.circles[i].y *= -1;
		}
	}

	charSpecificReset() {
		this.dashCancels = this.dashCancelsMax;
		this.dashCancelRegen = 0;
		this.chargeNN = 0;
		this.charging = false;
	}

	charSpecificFullReset() {
		this.rightHanded = true;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
		}

		for (let i = 0; i < this.dashDisplays.length; i++) {
			if (this.dashDisplays[i].currentAnimation === "Full" && this.dashCancels <= i) {
				this.dashDisplays[i].currentFrame += 6;
				this.dashDisplays[i].currentAnimation = "Empty";
			}
			if (this.dashDisplays[i].currentAnimation === "Empty" && this.dashCancels > i) {
				this.dashDisplays[i].currentFrame -= 6;
				this.dashDisplays[i].currentAnimation = "Full";
			}
			if (this.dashCancels <= 0 && this.dashDisplays[i].currentAnimation !== "Ike") {
				if (this.dashDisplays[i].currentAnimation === "Full")
					this.dashDisplays[i].currentFrame += 12;
				if (this.dashDisplays[i].currentAnimation === "Empty")
					this.dashDisplays[i].currentFrame += 6;
				this.dashDisplays[i].currentAnimation = "Ike";
			}
			if (this.dashCancels > 0 && this.dashDisplays[i].currentAnimation === "Ike") {
				this.dashDisplays[i].currentFrame -= 6;
				this.dashDisplays[i].currentAnimation = "Empty";
			}

			this.dashDisplays[i].run();
		}
	}

    static addAssets() {
		assetManager.addSpritesheet("resources/jan_Lipa.png", "janLipaSheet", "//");

		assetManager.addSpritesheet("resources/TawaEnKama.png", "tawaEnKama", "//");

		assetManager.addSound("resources/sfx/spearHit.wav", "spearHit", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/spearBlock.wav", "spearBlock", {
			volume: 0.8
		});
	}

	serialize() {
		let copy = (({
			hurtboxes,
			headNoun,
			name,
			selectScreenSizeOffset,
			world,
			collideRadius,
			deathChanceThreshold,
			OOBBlockFrame,
			//dash,
			powerDash,
			states,
			currentState,
			ifthen,
			ifelse,
			cancelActions,
			actions,
			parryLeniency,
			controls,
			currentAttackReferences,
			mostRecentAttackReference,
			targetPlayer,
			arrowOffset,
			arrowOffsetBack,
			lipuDamage,
			lipuHeavyDamage,
			lipuTickRate,
			lipuSuliFrames,
			lipuLiliFrames,
			edgeCalculationLeniency,
			DASH_ATTACK,
			NL,
			SL,
			RL,
			LL,
			ML,
			NS,
			SS,
			RS,
			LS,
			MS,
			NPL,
			SPL,
			RPL,
			LPL,
			MPL,
			NPS,
			SPS,
			RPS,
			LPS,
			MPS,
			NN,
			SN,
			RN,
			LN,
			MN,
			dashDisplays,
			...o
		}) => defaultSerialize(o))(this);

		copy.actions = [];
		for (let i in this.actions) {
			copy.actions.push(this.actions[i]);
		}

		copy.cancelActions = [];
		for (let i in this.cancelActions) {
			copy.cancelActions.push(this.cancelActions[i]);
		}

		copy.currentState = this.currentState;

		copy.currentAttackReferences = {};
		currentAttackLoop: for (let i in this.currentAttackReferences) {
			for (let u = 0; u < this.world.attacks.length; u++) {
				if (this.world.attacks[u] === this.currentAttackReferences[i]) {
					copy.currentAttackReferences[i] = u;
					continue currentAttackLoop;
				}
			}
		}

		if (this.mostRecentAttackReference) {
			for (let u = 0; u < this.world.attacks.length; u++) {
				if (this.world.attacks[u] === this.mostRecentAttackReference) {
					copy.mostRecentAttackReference = u;
					break;
				}
			}
		} else {
			copy.mostRecentAttackReference = -1;
		}

		return copy;
	}

	deserialize(obj) {
		defaultCopyValues(this, obj, ["currentState", "actions", "cancelActions", "controls", "currentAttackReferences", "mostRecentAttackReference", "frameDataRef", "dashDisplays"]);
		
		if (!obj.frameDataRef) {
			this.frameDataRef = null;
		} else {
			this.frameDataRef = new AttackFrameData();
			this.frameDataRef.deserialize(obj.frameDataRef, this.world);
		}
		
		this.currentState = obj.currentState;
		this.actions = [];
		for (let i in obj.actions) {
			this.actions.push(obj.actions[i]);
		}
		this.cancelActions = [];
		for (let i in obj.cancelActions) {
			this.actions.push(obj.cancelActions[i]);
		}

		if (obj.mostRecentAttackReference === -1) {
			this.mostRecentAttackReference = null;
		} else {
			this.mostRecentAttackReference = this.world.attacks[obj.mostRecentAttackReference];
		}
		this.currentAttackReferences = [];
		for (let i in obj.currentAttackReferences) {
			if (obj.currentAttackReferences[i] === -1) {
				this.currentAttackReferences.push(null);
			} else {
				this.currentAttackReferences.push(this.world.attacks[obj.currentAttackReferences[i]]);
			}
		}
	}
}

class LipaDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "dash"];

		let sour1 = new PriorityCircle(0, 0, 160, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(0, 0, 210, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(40, -20, 8).setProration(-1.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 9).setHitStun(25, 18).setStunFrames(15).setWallPushback(5, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1);
		let sweet = new AttackProperties().setDamage(45, -22, 8).setProration(-1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8).setHitStun(26, 18).setStunFrames(15).setWallPushback(5, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(13).setActiveF(6).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.5);
	}

	draw(g) {
		if (this.getFromStartupF() === 10) {
			this.player.iFrames = 9;
			this.player.invTo = ["attack"];
		}
		if (this.currentlyActive()) {
			/*let x = cos(this.dir.value);
			let y = sin(this.dir.value);

			g.push();
			g.translate(this.x + 50 * x, this.y + 50 * y);
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -64, -64, 128, 128);
			if (this.player.stunFrames <= 0)
				this.sheet.run();

			g.pop();*/

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 1) {
			this.player.rightHanded = !this.player.rightHanded;
		}
	}
}

class LipaNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "NPL", "NPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(0, 32, 20, 0).setVelocity(7, -2);
		let ultraSour2 = new PriorityCircle(-20, 38, 20, 0).setVelocity(7, -2);
		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(7, -2);
		let sour1 = new PriorityCircle(20, 25, 30, 1).setVelocity(7, -2);
		let sour2 = new PriorityCircle(36, 20, 30, 1).setVelocity(7.5, -2);
		let sour3 = new PriorityCircle(54, 15, 30, 1).setVelocity(8, -1);
		let sour4 = new PriorityCircle(71, 10, 25, 1).setVelocity(8, 0);
		let sweet1 = new PriorityCircle(71, 15, 20, 2).setVelocity(11, 0);
		let sweet2 = new PriorityCircle(71, 5, 20, 2).setVelocity(11, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(12).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(1).setHitStun(23, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(18).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(23).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(9).setActiveF(4).setEndF(19).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "NS", "NPL", "NPS", "NN", "MN", "dash"];

		let ultraSour1 = new PriorityCircle(20, 45, 20, 0).setVelocity(0.1, 0.05);
		let ultraSour2 = new PriorityCircle(30, 45, 20, 0).setVelocity(0.1, 0.05);
		let ultraSour3 = new PriorityCircle(40, 45, 20, 0).setVelocity(0.1, 0.05);
		let sour1 = new PriorityCircle(60, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour2 = new PriorityCircle(85, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour3 = new PriorityCircle(110, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour4 = new PriorityCircle(125, 45, 25, 1).setVelocity(0.1, 0.05);
		let sweet1 = new PriorityCircle(160, 50, 30, 2).setVelocity(0.1, 0.05);
		let sweet2 = new PriorityCircle(160, 40, 30, 2).setVelocity(0.1, 0.05);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];
		
		let ultraSour = new AttackProperties().setDamage(28).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 1).setHitStun(29, 22).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.5).setHitStun(31, 27).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(33).setProration(-0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setHitStun(34, 30).setStunFrames(14).setWallPushback(6, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(24).setActiveF(12).setEndF(24).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 0) {
			this.player.dir.changeValue(this.player.rightHanded?-0.01:0.01);
		}
		if (this.getStartupF() === 5) {
			let speed = 5;
			this.player.dx += speed * this.player.dir.getX();
			this.player.dy += speed * this.player.dir.getY();
		} else if (this.getActiveF() > 0 && this.startupOver()) {
			let speed = dist(0, 0, this.player.dx, this.player.dy);
			this.player.dx = speed * this.player.dir.getX();
			this.player.dy = speed * this.player.dir.getY();
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class LipaRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(29, 12).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(53).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(31, 17).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(55).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(34, 19).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(13).setActiveF(6).setEndF(28).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		
	}
}

class LipaLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "dash"];

		let sweet1 = new PriorityCircle(50, -5, 50, 0).setVelocity(1, -0.5);
		let sweet2 = new PriorityCircle(35, -38, 50, 0).setVelocity(1, -0.5);
		let sweet3 = new PriorityCircle(46, -17, 60, 0).setVelocity(1, -0.5);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(15).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(0.3, 0.1, 2).setHitStun(27, 20).setStunFrames(10).setWallPushback(10, 4).setLaunchDampening(8);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(10).setActiveF(3).setEndF(17).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.hitPlayerBool && this.getEndF() < 10) {
			this.player.dir.changeValue(this.player.rightHanded ? -0.05 : 0.05);
		}
	}
}

class LipaML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(29, 22).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(48).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(31, 27).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(50).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(34, 30).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(24).setActiveF(12).setEndF(16).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 4) {
			let angle = new Angle(this.player.dir.value + PI);
			let speed = 3;
			this.player.dx += angle.getX() * speed;
			this.player.dy += angle.getY() * speed;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
		if (this.getStartupF() > 12) {
			this.player.dir.value += (this.player.rightHanded ? -1 : 1) * 0.1;
		}
	}
}

class LipaNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "NPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(0, 32, 20, 0).setVelocity(11, -2);
		let ultraSour2 = new PriorityCircle(-20, 38, 20, 0).setVelocity(11, -2);
		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(11, -2);
		let sour1 = new PriorityCircle(20, 25, 30, 1).setVelocity(11, -2);
		let sour2 = new PriorityCircle(36, 20, 30, 1).setVelocity(11.5, -2);
		let sour3 = new PriorityCircle(54, 15, 30, 1).setVelocity(12, -1);
		let sour4 = new PriorityCircle(71, 10, 25, 1).setVelocity(12, 0);
		let sweet1 = new PriorityCircle(71, 15, 20, 2).setVelocity(15, 0);
		let sweet2 = new PriorityCircle(71, 5, 20, 2).setVelocity(15, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(20).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(1).setHitStun(23, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(26).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(31).setProration(-0.7).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(29, 12).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(53).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(31, 14).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(55).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1).setHitStun(34, 16).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(18).setActiveF(6).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 3) {
			let angle = this.player.dir.value + (PI / 1.7) * (this.player.rightHanded ? -1 : 1);
			this.player.dx += cos(angle) * 3;
			this.player.dy += sin(angle) * 3;
		}
		if (this.getFromStartupF() < 6) {
			this.player.dir.changeValue(0.05 * sqrt(6 - this.getFromStartupF()) * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";
	}

	static createAttack(player) {
		let cancelOptions = ["LS", "dash"];

		let sweet1 = new PriorityCircle(50, -5, 50, 0).setVelocity(1, -0.5);
		let sweet2 = new PriorityCircle(35, -38, 50, 0).setVelocity(1, -0.5);
		let sweet3 = new PriorityCircle(46, -17, 60, 0).setVelocity(1, -0.5);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(25).setProration(1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(1, 2, 2).setHitStun(27, 18).setStunFrames(10).setWallPushback(15, 10).setLaunchDampening(10);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(15).setActiveF(3).setEndF(20).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 4) {
			let speed = 5;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.getFromStartupF() > 8) {
			this.player.dx *= 0.75;
			this.player.dy *= 0.75;
		}
	}
}

class LipaNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "RPL", "LPL", "NPS", "LPS", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(7, 0);
		let ultraSour2 = new PriorityCircle(-21, 43, 20, 0).setVelocity(7, 0);
		let ultraSour1 = new PriorityCircle(-2, 41, 20, 0).setVelocity(7, 0);
		let sour1 = new PriorityCircle(17, 39, 30, 1).setVelocity(7, 0);
		let sour2 = new PriorityCircle(36, 36, 30, 1).setVelocity(7.5, 0);
		let sour3 = new PriorityCircle(55, 33, 30, 1).setVelocity(8, 0);
		let sour4 = new PriorityCircle(70, 30, 25, 1).setVelocity(8, 0);
		let sweet1 = new PriorityCircle(74, 35, 20, 2).setVelocity(11, 0);
		let sweet2 = new PriorityCircle(74, 25, 20, 2).setVelocity(11, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(19).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(4, 0.1).setLaunchDampening(1).setHitStun(23, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(20).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(4, 0.1).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(25).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(3, 0.1).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(11).setActiveF(4).setEndF(21).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "NPL", "RPL", "NPS", "RPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(0, 17, 20, 0).setVelocity(7, 2);
		let ultraSour2 = new PriorityCircle(-20, 10, 20, 0).setVelocity(7, 2);
		let ultraSour3 = new PriorityCircle(-40, 5, 20, 0).setVelocity(7, 2);
		let sour1 = new PriorityCircle(20, 20, 30, 1).setVelocity(7, 3);
		let sour2 = new PriorityCircle(36, 30, 30, 1).setVelocity(7.5, 3);
		let sour3 = new PriorityCircle(54, 48, 30, 1).setVelocity(8, 4);
		let sweet1 = new PriorityCircle(68, 53, 20, 2).setVelocity(10, 5);
		let sweet2 = new PriorityCircle(71, 51, 20, 2).setVelocity(10, 5);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(27).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(1).setHitStun(26, 24).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0.1).setLaunchDampening(0.5).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(38).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 0.1).setLaunchDampening(0.2).setHitStun(30, 27).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(14).setActiveF(8).setEndF(16).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.25);
	}

	logic() {
		if (this.getFromStartupF() === 5) {
			let angle = new Angle(this.dir.value).changeValue(PI / 5 * this.rightHanded ? -1: 1);
			this.player.dx += angle.getX() * 5;
			this.player.dy += angle.getY() * 5;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class LipaRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "NL", "NS", "NPL", "NPS", "NN"];

		let sour1 = new PriorityCircle(40, 40, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(40, 40, 160, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(20).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7.5, 3.5).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.1);
		let sweet = new AttackProperties().setDamage(25).setProration(-1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(6.5, 2.5).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.1);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(18).setActiveF(12).setEndF(30).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
			this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";
	}

	static createAttack(player) {
		let cancelOptions = ["LPS", "NN", "dash"];

		let sweet1 = new PriorityCircle(90, -10, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet2 = new PriorityCircle(85, 0, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet3 = new PriorityCircle(60, 5, 20, 0).setVelocity(0.1, -0.2);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(45, 15, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(20, 20).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(5, 9);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(20).setActiveF(6).setEndF(23).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue((0.7 * this.getActiveF() / 6) ** 2 * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";
	}

	static createAttack(player) {
		let cancelOptions = ["SPL", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 40, 20, 0).setVelocity(7, 7);
		let ultraSour2 = new PriorityCircle(-21, 44, 20, 0).setVelocity(7, 7.2);
		let ultraSour1 = new PriorityCircle(-2, 49, 20, 0).setVelocity(7, 7.4);
		let sour1 = new PriorityCircle(12, 50, 30, 1).setVelocity(7, 8);
		let sour2 = new PriorityCircle(31, 57, 30, 1).setVelocity(7.5, 8.9);
		let sweet1 = new PriorityCircle(74, 60, 40, 2).setVelocity(11, 11);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sweet1];

		let ultraSour = new AttackProperties().setDamage(34).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(4, 0.1).setLaunchDampening(1).setHitStun(23, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(35).setProration(-0.4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(4, 0.1).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(40).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(3.5, 0.1).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(17).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
			this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaNPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";
	}

	static createAttack(player) {
		let cancelOptions = ["RPL", "RPS", "LPS", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(16, 4);
		let ultraSour2 = new PriorityCircle(-21, 43, 20, 0).setVelocity(16, 4);
		let ultraSour1 = new PriorityCircle(-2, 41, 20, 0).setVelocity(16, 4);
		let sour1 = new PriorityCircle(17, 39, 30, 1).setVelocity(16, 4);
		let sour2 = new PriorityCircle(36, 36, 30, 1).setVelocity(16.5, 5);
		let sour3 = new PriorityCircle(55, 33, 30, 1).setVelocity(17, 6);
		let sour4 = new PriorityCircle(70, 30, 25, 1).setVelocity(17, 6);
		let sweet1 = new PriorityCircle(74, 35, 20, 2).setVelocity(20, 7);
		let sweet2 = new PriorityCircle(74, 25, 20, 2).setVelocity(20, 7);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(21).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setHitStun(23, 19).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(27).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setHitStun(26, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(32).setProration(-0.6).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setHitStun(28, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(21).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "NL", "NS", "NPL", "NPS", "NN"];

		let sour1 = new PriorityCircle(40, 40, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(40, 40, 160, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(15).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(6.5, 3.5).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.1);
		let sweet = new AttackProperties().setDamage(20).setProration(-1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(5.5, 2.5).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.1);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(28).setActiveF(12).setEndF(14).setMulti(3, 4, 0.1).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
			this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";
	}

	static createAttack(player) {
		let cancelOptions = ["dash"];

		let sweet1 = new PriorityCircle(90, -10, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet2 = new PriorityCircle(85, 0, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet3 = new PriorityCircle(60, 5, 20, 0).setVelocity(0.1, -0.2);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(50, 16, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(28, 20).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(5, 9);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(23).setActiveF(12).setEndF(28).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue((1.1 * this.getActiveF() / 12) ** 2 * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(70, -10, 20, 0);
		let sour2 = new PriorityCircle(65, -30, 20, 0);
		let sour3 = new PriorityCircle(65, 10, 20, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(55).setGrab(20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(100);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(10).setActiveF(6).setEndF(27).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.3 && this.rightHanded) {
				this.player.dir.value -= 0.15;
			}
			if (compare > 0.3 && !this.rightHanded) {
				this.player.dir.value += 0.15;
			}
		}
	}
}

class LipaNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let ultraSour1 = new PriorityCircle(0, 40, 20, 0);
		let ultraSour2 = new PriorityCircle(20, 35, 20, 0);
		let ultraSour3 = new PriorityCircle(40, 30, 20, 0);
		let sour1 = new PriorityCircle(55, 25, 30, 1);
		let sour2 = new PriorityCircle(70, 20, 30, 1);
		let sour3 = new PriorityCircle(85, 15, 30, 1);
		let sweet3 = new PriorityCircle(100, 10, 25, 2);
		let sweet1 = new PriorityCircle(110, 5, 20, 2);
		let sweet2 = new PriorityCircle(110, -5, 20, 2);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(50, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 4).setLaunchDampening(1).setHitStun(36, 32).setStunFrames(13).setWallPushback(3).setChip(0.25);
		let sour = new AttackProperties().setDamage(58, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 4).setLaunchDampening(0.8).setHitStun(37, 32).setStunFrames(13).setWallPushback(3).setChip(0.25);
		let sweet = new AttackProperties().setDamage(60, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 4).setLaunchDampening(0.5).setHitStun(38, 35).setStunFrames(13).setWallPushback(3).setChip(0.25);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(9).setActiveF(4).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 4 && this.player.controls.joystickPressed(0)) {
			let angleDif = Angle.compare(this.player.dir, this.player.controls.angle(0));
			if (angleDif > 0)
				this.player.dir.changeValue(0.7 * min(abs(angleDif), 1));
			if (angleDif < 0)
				this.player.dir.changeValue(-0.7 * min(abs(angleDif), 1));
		}
		if (this.getStartupF() === 4) {
			this.player.dx *= 0.3;
			this.player.dy *= 0.3;
			this.player.dx += this.player.dir.getX() * 14;
			this.player.dy += this.player.dir.getY() * 14;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.8;
			this.player.dy *= 0.8;
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(1);
		player.startMomentumMultiplyDash(1.2);
	}
}

class LipaMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";
	}

	static createAttack(player) {
		let cancelOptions = ["lili", "suli", "poka lili", "poka suli", "nasa", "dash"];

		let sour1 = new PriorityCircle(70, -50, 30, 0).setCircleVelocity(12);
		let sweet1 = new PriorityCircle(40, -20, 25, 1).setCircleVelocity(12);
		let circles = [sweet1, sour1];

		let sour = new AttackProperties().setDamage(70).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(3, 0.1).setHitStun(45, 10).setCancelWait(5);
		let sweet = new AttackProperties().setDamage(70).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(3, 0.1).setHitStun(45, 10).setCancelWait(5);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(13).setActiveF(8).setEndF(30).reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getActiveF() === 4) {
			this.player.rightHanded = !this.player.rightHanded;
		}
	}
}

characters.push(Lipa);