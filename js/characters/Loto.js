class Loto extends Player {
	constructor() {
		super([
			new Circle(0, 0, 50),//Body
			new Circle(40, 0, 50),//Head
			new Circle(40, 30, 30),//Right frill
			new Circle(40, -30, 30),//Left frill
			new Circle(-40, 0, 40),//Tail Close
			new ICircle(-60, -5, 10)//Tail Far
		]);

		this.hurtboxes["walk"] = [
			[new Circle(0, 0, 50),//Body
				new Circle(40, 0, 50),//Head
				new Circle(40, 30, 30),//Right frill
				new Circle(40, -30, 30),//Left frill
				new Circle(-40, 0, 40),//Tail Close
				new ICircle(-62, -15, 10)],//Tail Far
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-62, 15, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-60, 20, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-50, 25, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-45, 30, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-50, 25, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-60, 20, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-62, 15, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-62, -15, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-60, -20, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-50, -25, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-45, -30, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-50, -25, 10)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new ICircle(-60, -20, 10)]
		];

		this.headNoun = "󱤁";//akesi
		this.name = currentLanguage === "tp" ? "󱤁󱦐󱦗󱤢󱥇󱥩󱥅󱦑" : "Loto";//akesi Loto

		this.collideRadius = 70;

		this.selectScreenSizeOffset = 90;
		this.selectScreenYOffset = -25;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.akesiLotoSheet);

		this.states.HITSTUN_ACTIONS = ["power dash", "NN"];
		this.states.NEUTRAL = State.copyState(State.NEUTRAL).removeTag("rotateable");

		this.states.UTK = State.copyState(State.DASH_ATTACK).setName("UTK").addTag("dash attack");
		this.states.UTK_ACTIONS = ["power dash"];
		this.states.UTU = State.copyState(State.DASH_ATTACK).setName("UTU").addTag("dash attack").addTag("rotateable");
		this.states.UTU_ACTIONS = ["power dash"];
		this.states.UTT = State.copyState(State.DASH_ATTACK).setName("UTT").addTag("dash attack");
		this.states.UTT_ACTIONS = ["power dash"];
		this.states.UTA = State.copyState(State.DASH_ATTACK).setName("UTA").addTag("dash attack");
		this.states.UTA_ACTIONS = ["power dash"];

		this.states.NN = State.copyState(State.NN).addTag("hitstun");

		this.states.MNK = State.copyState(State.MN).setName("MNK").addTag("MN");
		this.states.MNK_ACTIONS = ["power dash"];
		this.states.MNU = State.copyState(State.MN).setName("MNU").addTag("MN");
		this.states.MNU_ACTIONS = ["power dash"];
		this.states.MNT = State.copyState(State.MN).setName("MNT").addTag("MN");
		this.states.MNT_ACTIONS = ["power dash"];
		this.states.MNA = State.copyState(State.MN).setName("MNA").addTag("MN");
		this.states.MNA_ACTIONS = ["power dash"];

		this.movementSpeed = 2;
		this.forwardSpeedBoost = 1;

		this.defense = 1;

		this.turnSpeed = 0.025;

		this.dash.speed = 17;
		this.dash.frames = 35;
		this.dash.invFirstFrame = this.dash.frames - 6;
		this.dash.turnSpeedBoost = 0.3;
		this.dash.turnFrame = this.dash.frames - 6;
		this.dash.backPenalty = 3;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 2;
		this.dash.friction = 0.85;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.dash.iFrames = 14;
		this.dash.invTo = ["attack"];
		this.dash.dashAttackStartDelay = 1;
		this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 20;
		this.dash.grabCancelFrame = this.dash.frames - 28;
		this.dash.blockCancelFrame = this.dash.frames - 20;

		this.dash.comboDashFrame = this.dash.frames - 5;

		this.dash.cancelIFrames = 12;
		this.dash.cancelSpeed = 22;
		this.dash.cancelFrames = 20;
		this.dash.cancelDecay = 0.8;//Speed decay
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 2;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 16;
		this.dash.currentPenalty = 0;

		this.weight = 0.7;

		this.health = 650;
		this.maxHealth = 650;
		this.timerPunishMult = 0.7;

		this.arrowOffset = 25;

		this.stances = {
			OFFENSE: 0,
			NEUTRAL: 1,
			DEFENSE: 2,
			MOVE: 3
		};
		this.stance = this.stances.NEUTRAL;
		this.backStance = false;

		this.teloTonsi = 7;//How many max fills akesi Loto has
		this.teloTonsiMaxInd = 6;//How many different fill levels of the animation there are (not including the empty level)
		this.teloTonsiMax = this.teloTonsi * this.teloTonsiMaxInd;//The max value for genderfluid fills
		this.teloTonsiNanpa = this.teloTonsiMax;
		this.teloTonsiRegenFrames = 60;
		this.teloTonsiCurrentRegen = 0;

		this.teloDisplayFrame = 0;
		this.teloDisplays = [];
		for (let i = 0; i < this.teloTonsi; i++) {
			this.teloDisplays.push(Spritesheet.copy(assetManager.spritesheets.teloTonsi));
			this.teloDisplays[i].currentFrame += i * 2;
		}
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks

		this.UTK = LotoDashAttackK;
		this.UTU = LotoDashAttackU;
		this.UTT = LotoDashAttackT;
		this.UTA = LotoDashAttackA;

		this.NL = LotoNL;
		this.SL = LotoSL;
		this.RL = LotoRL;
		this.LL = LotoLL;
		this.ML = LotoML;

		//this.NS = LotoNS;
		//this.SS = LotoSS;
		//this.RS = LotoRS;
		//this.LS = LotoLS;
		//this.MS = LotoMS;

		this.NPL = LotoNPL;
		this.SPL = LotoSPL;
		this.RPL = LotoRPL;
		this.LPL = LotoLPL;
		this.MPL = LotoMPL;

		//this.NPS = LotoNPS;
		//this.SPS = LotoSPS;
		this.RPS = LotoRPS;
		this.LPS = LotoLPS;
		//this.MPS = LotoMPS;

		this.NN = LotoNN;
		this.SN = LotoSN;

		this.MNK = LotoMNK;//akesi
		this.MNU = LotoMNU;//utala
		this.MNT = LotoMNT;//tawa
		this.MNA = LotoMNA;//awen
	}

	generalLogic() {
		if (this.backStance) {
			if (this.currentState.name !== "dash" && this.currentState.name !== "UTU")
				this.turnSpeedModifier = -1;

			if (this.targetPlayer && (this.currentState.name === "neutral" || this.currentState.name === "walk" || this.currentState.name === "ML" || this.currentState.name === "power dash")) {
				let angle = new Angle().setFromPoint(this.targetPlayer.x - this.x, this.targetPlayer.y - this.y);
				let compare = Angle.compare(angle, this.dir);
				let slowDown = (this.rotateSlowDownFrames > 0 ? this.rotateSlowDown * this.rotateSlowDown : 1);
				if (compare === 0)
					compare = 0.01;
				if (abs(compare) < 3.1)
					this.dir.changeValue(constrain(0.1 / compare * slowDown, -0.4, 0.4));
				if (this.currentState.name === "power dash")
					this.dir.value = (angle.value + PI) % (2 * PI);
			}
			if (this.stance !== this.stances.OFFENSE || this.currentState.name === "grabbed" || this.currentState.name === "grab")
				this.backStance = false;
		}

		if (this.currentState.name.substring(0, 2) === "MN") {
			this.attackEndable();
		}

		if (this.currentState.name === "walk" && this.moveCount < 7) {
			this.turnSpeedModifier = -1;
		}

		if (this.teloTonsiNanpa < this.teloTonsiMax) {
			if (this.stance === this.stances.NEUTRAL || this.world.frameCount % 10 === 0)
				this.teloTonsiCurrentRegen++;
			if (this.teloTonsiCurrentRegen >= this.teloTonsiRegenFrames) {
				this.teloTonsiNanpa++;
				this.teloTonsiCurrentRegen = 0;
			}
		}

		this.attackMult = 1;
		this.weight = 0.7;
		this.defense = 1;
		this.movementSpeed = 2;
		this.forwardSpeedBoost = 1;
		this.dash.speed = 12;
		this.dash.maxCombos = 1;
		this.sheet.image = assetManager.spritesheets.akesiLotoSheet.image;
		this.sheet.images = assetManager.spritesheets.akesiLotoSheet.images;
		if (this.stance === this.stances.MOVE) {
			this.movementSpeed = 3;
			this.bufferHitStunModifier = 5;
			this.defense = 1.15;
			this.dash.speed = 17;
			this.dash.maxCombos = 2;
			this.attackMult = 0.9;

			this.sheet.image = assetManager.spritesheets.akesiLotoLasoSheet.image;
			this.sheet.images = assetManager.spritesheets.akesiLotoLasoSheet.images;
		}
		if (this.stance === this.stances.DEFENSE) {
			this.movementSpeed = 1.2;
			this.bufferHitStunModifier = -3;
			this.weight = 1.4;
			this.defense = 0.5;
			this.dash.speed = 10;
			this.dash.maxCombos = 0;
			this.attackMult = 0.6;

			this.sheet.image = assetManager.spritesheets.akesiLotoJeloSheet.image;
			this.sheet.images = assetManager.spritesheets.akesiLotoJeloSheet.images;
		}
		if (this.stance === this.stances.OFFENSE) {
			this.weight = 1.1;
			this.bufferHitStunModifier = 3;
			this.defense = 1.3;
			this.attackMult = 1.4;

			this.sheet.image = assetManager.spritesheets.akesiLotoLojeSheet.image;
			this.sheet.images = assetManager.spritesheets.akesiLotoLojeSheet.images;
		}
	}

	moveStanceDashCancel(options) {
		if (this.stance === this.stances.MOVE)
			options.push("dash");
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);
		g.translate(0, -12);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -153 + rumbleX, -153 + rumbleY, 307, 307);

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
			if (this.iFrames > 0 && this.invTo.includes("attack") && this.invTo.includes("grab")) {
				red = 0;
				green = 255;
				blue = 40;
			}

			this.debugDraw(g, red, green, blue);
		}
	}

	drawExtraHUD(g, i, x, y) {
		let leftX = 512 * 0.12 + 512 * 0.76 * i - 35;

		g.push();
		g.translate(x, y);

		for (let i in this.teloDisplays) {
			this.teloDisplays[i].draw(g, leftX + 10 * i, 65, 12, 19);
		}

		g.pop();
	}

	useTelo(amount) {
		this.teloTonsiNanpa -= amount;
		if (this.teloTonsiNanpa < 0) {
			this.teloTonsiNanpa = 0;
		}
	}

	charSpecificReset() {
		this.stance = this.stances.NEUTRAL;
		this.backStance = false;
		this.teloTonsiNanpa = this.teloTonsiMax;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();

			this.teloDisplayFrame++;
		}

		for (let i = 0; i < this.teloDisplays.length; i++) {
			if (this.teloDisplayFrame % 4 === 0) {
				let currentLevel = constrain(this.teloTonsiNanpa - this.teloTonsiMaxInd * i, 0, 6);

				let lowest = currentLevel * 15;
				let highest = currentLevel * 15 + 14;

				if (this.teloDisplays[i].currentFrame < lowest) {
					this.teloDisplays[i].currentFrame += 15;
					this.teloDisplays[i].currentAnimation = (Number.parseInt(this.teloDisplays[i].currentAnimation) + 1).toString();
				}
				let nextFrame = 0;
				if (this.teloDisplays[i + 1])
					nextFrame = this.teloDisplays[i + 1].currentFrame;
				if (nextFrame < 15) {
					if (this.teloDisplays[i].currentFrame > highest) {
						this.teloDisplays[i].currentFrame -= 15;
						this.teloDisplays[i].currentAnimation = (Number.parseInt(this.teloDisplays[i].currentAnimation) - 1).toString();
					}
				}
			}

			this.teloDisplays[i].run();
		}
	}

	copyAssets() {
		this.sheet = Spritesheet.copy(assetManager.spritesheets.akesiLotoSheet);
		this.teloDisplays = [];
		for (let i = 0; i < this.teloTonsi; i++) {
			this.teloDisplays.push(Spritesheet.copy(assetManager.spritesheets.teloTonsi));
			this.teloDisplays[i].currentFrame += i * 2;
		}
	}

	getShouldLoadSpritesheets() {
		return ["akesiLotoSheet", "akesiLotoLasoSheet", "akesiLotoLojeSheet", "akesiLotoJeloSheet", "sitelenAkesi", "sitelenAwen", "sitelenTawa", "sitelenUtala", "teloTonsi", "teloLili"];
	}

	static getMenuImage() {
		return assetManager.images.akesiLotoMenuImage;
	}

	static addAssets() {
		assetManager.addImage("resources/akesi_LotoAWEN.png", "akesiLotoMenuImage", true);

		assetManager.addSpritesheet("resources/akesi_Loto.png", "akesiLotoSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Laso.png", "akesiLotoLasoSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Loje.png", "akesiLotoLojeSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Jelo.png", "akesiLotoJeloSheet", "//");

		assetManager.addSpritesheet("resources/sitelen_akesi.png", "sitelenAkesi", "//");
		assetManager.addSpritesheet("resources/sitelen_awen.png", "sitelenAwen", "//");
		assetManager.addSpritesheet("resources/sitelen_tawa.png", "sitelenTawa", "//");
		assetManager.addSpritesheet("resources/sitelen_utala.png", "sitelenUtala", "//");

		assetManager.addSpritesheet("resources/TeloTonsi.png", "teloTonsi", "//");

		assetManager.addSpritesheet("resources/teloLili.png", "teloLili", "//");
	}

	startDashAttack() {
		let attack = this.controls.clicked("lili") || this.controls.clicked("suli") || this.controls.clicked("pokaLili") || this.controls.clicked("pokaSuli");

		if (attack && (this.currentState.name === "dash" || this.buffer.contains(this.states.DASH))/* && this.canChangeState(this.states.DASH_ATTACK)*/) {

			let UT = "UTK";
			if (this.stance === this.stances.OFFENSE)
				UT = "UTU";
			if (this.stance === this.stances.MOVE)
				UT = "UTT";
			if (this.stance === this.stances.DEFENSE)
				UT = "UTA";

			let bufferInfo = this[UT].bufferInfo ? this[UT].bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states[UT], this.states[UT + "_ACTIONS"], bufferInfo, () => {
				this.sheet.setAnimation("dash attack");
				this.iFrames = 0;

				let attack = this[UT].createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				if (this[UT].startAttack)
					this[UT].startAttack(this);
			});
		}
	}

	startNPS() {
		if (this.controls.clicked("pokaSuli") && this.pressedNeutral()) {

			let bufferInfo = this.NPS.bufferInfo ? this.NPS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NPS, this.states.NPS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NPS");

				let attack = this.NPS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NPS.startAttack)
					this.NPS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startNN() {
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {
			let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
				if (this.teloTonsiNanpa >= 6 && !this.buffer.info.hurt || this.teloTonsiNanpa >= 12) {
					this.sheet.setAnimation("NN");

					let attack = this.NN.createAttack(this);
					this.addCurrentAttack(attack);

					attack.rotateTo(this.dir);

					this.world.addAttack(attack);

					if (this.NN.startAttack)
						this.NN.startAttack(this, attack, bufferInfo);

					this.setActionLag(attack);
				} else {
					this.sheet.setAnimation("NNF");

					this.actionLag = 16;
				}
			});
		}
	}

	NNLogic() {
		super.NNLogic();
		if (this.currentState.name === "NN") {
			this.dir.value += this.rotateVel;
			this.dx *= 0.3 ** (1 / this.hitStun);
			this.dy *= 0.3 ** (1 / this.hitStun);
			this.rotateVel *= 0.1 ** (1 / this.hitStun);
		}
	}

	startMN() {
		if (this.controls.clicked("nasa") && this.pressedMonsi()) {

			let MN = "MNK";
			if (this.stance === this.stances.OFFENSE)
				MN = "MNU";
			if (this.stance === this.stances.MOVE)
				MN = "MNT";
			if (this.stance === this.stances.DEFENSE)
				MN = "MNA";

			let bufferInfo = this[MN].bufferInfo ? this[MN].bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states[MN], this.states[MN + "_ACTIONS"], bufferInfo, () => {
				this.sheet.setAnimation(MN);

				let attack = this[MN].createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this[MN].startAttack)
					this[MN].startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
}

class LotoDashAttackK extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "UTK";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 0, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(0, 0, 140, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(60).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(17, 9).setHitStun(20, 14).setStunFrames(13, 25).setWallPushback(5, 1).setWallLaunchMod(3);
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8).setHitStun(21, 14).setStunFrames(15, 25).setWallPushback(5, 1.6).setWallLaunchMod(10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(21).setActiveF(6).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.25);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {

	}
}

class LotoDashAttackU extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "UTU";

		this.damper = true;
	}

	static createAttack(player) {

		return new this(player, [], []).setStartupF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(0);
	}

	draw(g) { }

	logic() {
		if (State.stateIs(this.player.currentState, "dash attack")) {
			this.player.turnSpeedModifier = 0.9;
			this.player.dx = 0;
			this.player.dy = 0;
			if (this.getFromStartupF() === 4) {
				this.player.addAction("attack", "SN", "dash");
			}
			if (this.getFromStartupF() < 10) {
				this.player.dx = this.player.dir.getX() * 15;
				this.player.dy = this.player.dir.getY() * 15;
			}
			if (this.getFromStartupF() > 0 && this.getFromStartupF() < 11) {
				this.player.x -= this.player.dir.getX() * 15;
				this.player.y -= this.player.dir.getY() * 15;
			}
		} else if (!State.stateIs(this.player.currentState, "SN") && this.damper) {
			this.player.dx = 0;
			this.player.dy = 0;
			this.damper = false;
		}
	}
}

class LotoDashAttackT extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "UTT";
	}

	static createAttack(player) {
		let cancelOptions = ["dash"];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 0, 70, 0);
		let sweet1 = new PriorityCircle(0, 0, 140, 1);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(60).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(17, 9).setHitStun(20, 14).setStunFrames(13, 25).setWallPushback(5, 1).setWallLaunchMod(3).setAngleTypes("direct", "direct");
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8).setHitStun(21, 14).setStunFrames(15, 25).setWallPushback(5, 1.6).setWallLaunchMod(10).setAngleTypes("direct", "direct");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(17).setActiveF(6).setEndF(26);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.25);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {

	}
}

class LotoDashAttackA extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "UTA";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 0, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(0, 0, 140, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(60).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(17, 9).setHitStun(20, 14).setStunFrames(13, 25).setWallPushback(5, 1).setWallLaunchMod(3);
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8).setHitStun(21, 14).setStunFrames(15, 25).setWallPushback(5, 1.6).setWallLaunchMod(10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(21).setActiveF(6).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.25);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {

	}
}

class LotoNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["lili", "poka lili", "suli", "poka suli", "NN", "MN"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(65, 0, 50, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(60, 30, 40, 0).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(60, -30, 40, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(20 * player.attackMult).setProration(0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 7, 1.1).setHitStun(19, 18).setStunFrames(11).setWallPushback(8, 8).setCancelWait(1);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(4).setEndF(15).setRotateable();
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
		this.player.turnSpeedModifier = 0.05;

		if (this.getStartupF() === 4) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 14 : (this.player.stance === this.player.stances.DEFENSE ? 4 : 8));
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.currentlyActive()) {
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
		}
	}
}

class LotoSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "RL", "LL", "ML", "MPL"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(60, 0, 60, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(90, -30, 60, 0).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(90, 30, 60, 0).setVelocity(1, 0);
		let sweet4 = new PriorityCircle(45, -45, 60, 0).setVelocity(1, 0);
		let sweet5 = new PriorityCircle(45, 45, 60, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(23 * player.attackMult).setProration(0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 7, 1.1).setHitStun(25, 10).setStunFrames(11).setWallPushback(8, 8).setCancelWait(3);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(12).setActiveF(4).setEndF(23);
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
		if (this.getStartupF() === 8) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 18 : (this.player.stance === this.player.stances.DEFENSE ? 10 : 14));
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.getStartupF() === 5) {
			this.player.dir.changeValue(PI);
		}
		if (this.getStartupF() < 4) {
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
		}
	}
}

class LotoRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "ML"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(-60, 0, 60, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(-90, -30, 60, 0).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(-90, 30, 60, 0).setVelocity(1, 0);
		let sweet4 = new PriorityCircle(-45, -45, 60, 0).setVelocity(1, 0);
		let sweet5 = new PriorityCircle(-45, 45, 60, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20 * player.attackMult).setProration(0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(7, 7, 1.1).setHitStun(19, 18).setStunFrames(11).setWallPushback(8, 8).setCancelWait(1);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(10).setActiveF(4).setEndF(15).setRotateable();
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
		if (this.getStartupF() === 4) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 16 : (this.player.stance === this.player.stances.DEFENSE ? 8 : 12));
			let angle = new Angle(this.player.dir.value + PI);
			this.player.dx += angle.getX() * speed;
			this.player.dy += angle.getY() * speed;
		}
		if (this.getStartupF() === 5) {
			let targetAngle = new Angle().setFromPoint(this.player.x - this.player.targetPlayer.x, this.player.y - this.player.targetPlayer.y);
			let diff1 = Angle.compare(targetAngle, this.player.dir);
			this.player.dir.changeValue(-PI / 2);
			let diff = Angle.compare(targetAngle, this.player.dir);
			if (abs(diff1) - abs(diff) > 0)
				this.player.dir.changeValue(-diff / 2);
		}
		if (this.getStartupF() <= 0) {
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
		}
	}
}

class LotoLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "ML"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(-60, 0, 60, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(-90, -30, 60, 0).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(-90, 30, 60, 0).setVelocity(1, 0);
		let sweet4 = new PriorityCircle(-45, -45, 60, 0).setVelocity(1, 0);
		let sweet5 = new PriorityCircle(-45, 45, 60, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20 * player.attackMult).setProration(0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(7, 7, 1.1).setHitStun(19, 18).setStunFrames(11).setWallPushback(8, 8).setCancelWait(1);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(10).setActiveF(4).setEndF(15).setRotateable();
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
		if (this.getStartupF() === 4) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 16 : (this.player.stance === this.player.stances.DEFENSE ? 8 : 12));
			let angle = new Angle(this.player.dir.value + PI);
			this.player.dx += angle.getX() * speed;
			this.player.dy += angle.getY() * speed;
		}
		if (this.getStartupF() === 5) {
			let targetAngle = new Angle().setFromPoint(this.player.x - this.player.targetPlayer.x, this.player.y - this.player.targetPlayer.y);
			let diff1 = Angle.compare(targetAngle, this.player.dir);
			this.player.dir.changeValue(PI / 2);
			let diff = Angle.compare(targetAngle, this.player.dir);
			if (abs(diff1) - abs(diff) > 0)
				this.player.dir.changeValue(-diff / 2);
		}
		if (this.getStartupF() <= 0) {
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
		}
	}
}

class LotoML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["MPL"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(-120, 0, 50, 0).setVelocity(-1, 0);
		let sweet2 = new PriorityCircle(-80, 0, 50, 0).setVelocity(-1, 0);
		let sweet3 = new PriorityCircle(-40, 0, 50, 0).setVelocity(-1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(20 * player.attackMult).setProration(0.4, -1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(4, 2, 1.1).setHitStun(25, 12).setStunFrames(11).setWallPushback(4, 3);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(10).setActiveF(4).setEndF(16).setRotateable();
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
		if (this.getStartupF() === 4) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 12 : (this.player.stance === this.player.stances.DEFENSE ? 4 : 8));
			this.player.dx -= this.player.dir.getX() * speed;
			this.player.dy -= this.player.dir.getY() * speed;
		}
		if (this.currentlyActive() || this.getFromEndF() > 10) {
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
		}
		if (this.getFromEndF() === 6 && this.hitPlayerBool) {
			let speed = (this.player.stance === this.player.stances.MOVE ? 14 : (this.player.stance === this.player.stances.DEFENSE ? 6 : 12));
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
	}
}

class LotoNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";

		this.held = true;
	}

	static createAttack(player) {
		let cancel = ["dash"];

		let left1 = new PriorityCircle(0, -50, 70, 0).setVelocity(0, -1).setSubVelocity(0, 1);
		let left2 = new PriorityCircle(0, -100, 70, 0).setVelocity(0, -1).setSubVelocity(0, 1);
		let right1 = new PriorityCircle(0, 50, 70, 1).setVelocity(0, 1).setSubVelocity(0, -1);
		let right2 = new PriorityCircle(0, 100, 70, 1).setVelocity(0, 1).setSubVelocity(0, -1);
		let circles = [left1, left2, right1, right2];

		let left = new AttackProperties().setDamage(15 * player.attackMult, 10, 10).setProration(-1.5).setCancelOptions(cancel).setAngleValue(player.dir.value - PI / 2).setLaunch(8).setHitStun(36, 4).setStunFrames(8).setRotateSlowDown(0.7, 60);
		let right = new AttackProperties().setDamage(15 * player.attackMult, 10, 10).setProration(-1.5).setCancelOptions(cancel).setAngleValue(player.dir.value + PI / 2).setLaunch(8).setHitStun(36, 4).setStunFrames(8).setRotateSlowDown(0.7, 60);
		let prop = [left, right];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(6).setActiveF(8).setEndF(17);
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
		if (!this.player.controls.pressed("pokaLili"))
			this.held = false;
		if (this.held && this.getActiveF() === 1) {
			this.setActiveF(this.getActiveF() + 1);
		}
	}
}

class LotoSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.teloLili);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(55, 0, 20, 0).setVelocity(15, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(10 * player.attackMult, undefined, 10).setProration(0.5).setAngleValue(player.dir.value).setLaunch(4).setHitStun(6, 4).setStunFrames(10).setRotateSlowDown(0.5, 120);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(13).setActiveF(16).setEndF(18).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {

			g.push();
			g.translate(this.circleX(0), this.circleY(0));
			g.rotate(this.dir.value);

			this.sheet.draw(g, -30, -15, 43, 30);


			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.stunFrames <= 0 && this.currentlyActive())
			this.sheet.run();
		if (this.getStartupF() > 0) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
	}
}

class LotoRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";
	}

	static createAttack(player) {
		let cancelOptions = [];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(0, -20, 50, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(0, 20, 50, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(50, -20, 50, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(50, 20, 50, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(6 * player.attackMult).setProration(-0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(3, 2, 0.5).setLaunchDampening(0.8, 8).setHitStun(35, 11).setStunFrames(0).setWallPushback(4, 3).setRotateSlowDown(0.8, 300);
		let prop = [sweet];

		sweet.setHitSound(undefined);
		sweet.setBlockSound(undefined);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(16).setActiveF(30).setEndF(25).setMulti(15, 2, 0.1).setRotateable();
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
		if (this.multi === 14) {
			for (let i in this.circles) {
				this.circles[i].diameter = 100;
			}
		}
		if (this.getFromStartupF() >= 3 && this.getFromStartupF() <= 8) {
			this.player.dir.changeValue(PI / 6 / 6);
		}
		if (this.getStartupF() < 3 && this.getActiveF() > 7) {
			let speed = 2;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		this.player.dx *= 0.85;
		this.player.dy *= 0.85;
	}
}

class LotoLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";
	}

	static createAttack(player) {
		let cancelOptions = [];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(0, -20, 50, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(0, 20, 50, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(50, -20, 50, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(50, 20, 50, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(6 * player.attackMult).setProration(-0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(3, 2, 0.5).setLaunchDampening(0.8, 8).setHitStun(35, 11).setStunFrames(0).setWallPushback(4, 3).setRotateSlowDown(0.8, 300);
		let prop = [sweet];

		sweet.setHitSound(undefined);
		sweet.setBlockSound(undefined);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(16).setActiveF(30).setEndF(25).setMulti(15, 2, 0.1).setRotateable();
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
		if (this.multi === 14) {
			for (let i in this.circles) {
				this.circles[i].diameter = 100;
			}
		}
		if (this.getFromStartupF() >= 3 && this.getFromStartupF() <= 8) {
			this.player.dir.changeValue(-PI / 6 / 6);
		}
		if (this.getStartupF() < 3 && this.getActiveF() > 7) {
			let speed = 2;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		this.player.dx *= 0.85;
		this.player.dy *= 0.85;
	}
}

class LotoMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";
	}

	static createAttack(player) {
		let cancelOptions = ["dash attack"];

		let sweet1 = new PriorityCircle(-100, 0, 40, 0).setVelocity(-6, -7, -0.5);
		let sweet2 = new PriorityCircle(-100, 0, 40, 0).setVelocity(-8, -3, -0.5);
		let sweet3 = new PriorityCircle(-100, 0, 40, 0).setVelocity(-5, 2, -0.5);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(30 * player.attackMult).setProration(0, -1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI * 0.95).setLaunch(9, 4, 1.5).setHitStun(45, 7).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(18).setActiveF(20).setEndF(29).setProjectile(true).setFollow(false);
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
		if (this.getStartupF() === 1) {
			this.player.dir.changeValue(PI / 8);
		}
		this.player.dx *= 0.7;
		this.player.dy *= 0.7;
	}
}

class LotoRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "MPL"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(-50, -40, 90, 0).setVelocity(0, -0.1);
		let sweet2 = new PriorityCircle(-10, -55, 80, 0).setVelocity(0, -0.1);
		let sweet3 = new PriorityCircle(20, -55, 80, 0).setVelocity(0, -0.1);
		let sweet4 = new PriorityCircle(50, -50, 70, 0).setVelocity(0, -0.1);
		let sour1 = new PriorityCircle(40, -50, 40, 1).setVelocity(18, 3);
		let circles = [sweet1, sweet2, sweet3, sweet4, sour1];

		let sweet = new AttackProperties().setDamage(30 * player.attackMult).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 3).setLaunch(5, 2, 1.2).setHitStun(39, 30).setStunFrames(15).setWallPushback(4, 3);
		let sour = new AttackProperties().setDamage(10 * player.attackMult).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0, 0.5).setHitStun(18, 5).setStunFrames(5);
		let prop = [sweet, sour];

		//sweet.setHitSound(undefined);
		//sweet.setBlockSound(undefined);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(24).setActiveF(16).setEndF(15);
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
		if (this.getFromStartupF() < 20) {
			let angle = new Angle(this.dir.value + 1.1 * PI / 2 + PI / 6 * this.getFromStartupF() / 4);
			let speed = 9;
			if (this.getFromStartupF() < 10)
				speed = 15;
			this.player.dx = angle.getX() * speed;
			this.player.dy = angle.getY() * speed;
			this.player.dx += this.dir.getX() * 2;
			this.player.dy += this.dir.getY() * 2;
		}
		if (this.getFromActiveF() === 5) {
			this.circles[0].diameter = 0;
			this.circles[1].diameter = 0;
			this.circles[2].diameter = 0;
			this.circles[3].diameter = 0;
		}
		this.player.dx *= 0.8;
		this.player.dy *= 0.8;
	}
}

class LotoLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "MPL"];
		player.moveStanceDashCancel(cancelOptions);

		let sweet1 = new PriorityCircle(-50, 40, 90, 0).setVelocity(0, 0.1);
		let sweet2 = new PriorityCircle(-10, 55, 80, 0).setVelocity(0, 0.1);
		let sweet3 = new PriorityCircle(20, 55, 80, 0).setVelocity(0, 0.1);
		let sweet4 = new PriorityCircle(50, 50, 70, 0).setVelocity(0, 0.1);
		let sour1 = new PriorityCircle(40, 50, 40, 1).setVelocity(18, -3);
		let circles = [sweet1, sweet2, sweet3, sweet4, sour1];

		let sweet = new AttackProperties().setDamage(30 * player.attackMult).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 3).setLaunch(5, 2, 1.2).setHitStun(39, 30).setStunFrames(15).setWallPushback(4, 3);
		let sour = new AttackProperties().setDamage(10 * player.attackMult).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0, 0.5).setHitStun(18, 5).setStunFrames(5);
		let prop = [sweet, sour];

		//sweet.setHitSound(undefined);
		//sweet.setBlockSound(undefined);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(24).setActiveF(16).setEndF(15);
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
		if (this.getFromStartupF() < 20) {
			let angle = new Angle(this.dir.value - 1.1 * PI / 2 - PI / 6 * this.getFromStartupF() / 4);
			let speed = 9;
			if (this.getFromStartupF() < 10)
				speed = 15;
			this.player.dx = angle.getX() * speed;
			this.player.dy = angle.getY() * speed;
			this.player.dx += this.dir.getX() * 2;
			this.player.dy += this.dir.getY() * 2;
		}
		if (this.getFromActiveF() === 5) {
			this.circles[0].diameter = 0;
			this.circles[1].diameter = 0;
			this.circles[2].diameter = 0;
			this.circles[3].diameter = 0;
		}
		this.player.dx *= 0.8;
		this.player.dy *= 0.8;
	}
}

class LotoNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);

		this.name = "NN";

		this.selection = this.player.stances.NEUTRAL;

		this.held = true;
		this.heldCount = 4;
		this.fromHitstun = false;

		this.akesiSheet = Spritesheet.copy(assetManager.spritesheets.sitelenAkesi);
		this.awenSheet = Spritesheet.copy(assetManager.spritesheets.sitelenAwen);
		this.tawaSheet = Spritesheet.copy(assetManager.spritesheets.sitelenTawa);
		this.utalaSheet = Spritesheet.copy(assetManager.spritesheets.sitelenUtala);
	}

	static createAttack(player) {
		return new this(player, [], []).setEndF(max(20, player.hitStun));
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (bufferInfo.hurt) {
			attack.fromHitstun = true;
			player.useTelo(12);
		} else {
			player.useTelo(6);
		}
	}

	static bufferInfo() {
		return { hurt: this.currentState.name === "hitstun" };
	}

	draw(g) {
		let startSize = (this.getEndF() > 7 ? 60 : 20);
		let akesiSize = startSize, awenSize = startSize, rightSize = startSize, leftSize = startSize, utalaSize = startSize;
		let angle = Angle.compare(this.player.sinpin, this.player.controls.angle(0));
		if (this.selection === this.player.stances.NEUTRAL) {
			akesiSize = 90;
		} else {
			if (this.selection === this.player.stances.DEFENSE) {
				awenSize = 90;
			} else if (this.selection === this.player.stances.MOVE) {
				if (angle > 0) {
					rightSize = 90;
				} else {
					leftSize = 90;
				}
			} else {
				utalaSize = 90;
			}
		}

		this.akesiSheet.draw(g, this.x - akesiSize / 2, this.y - akesiSize / 2, akesiSize, akesiSize);
		this.awenSheet.draw(g, this.x + this.player.monsi.getX() * 90 - awenSize / 2, this.y + this.player.monsi.getY() * 90 - awenSize / 2, awenSize, awenSize);
		this.tawaSheet.draw(g, this.x + this.player.right.getX() * 90 - rightSize / 2, this.y + this.player.right.getY() * 90 - rightSize / 2, rightSize, rightSize);
		this.tawaSheet.draw(g, this.x + this.player.left.getX() * 90 - leftSize / 2, this.y + this.player.left.getY() * 90 - leftSize / 2, leftSize, leftSize);
		this.utalaSheet.draw(g, this.x + this.player.sinpin.getX() * 90 - utalaSize / 2, this.y + this.player.sinpin.getY() * 90 - utalaSize / 2, utalaSize, utalaSize);
	}

	logic(g) {
		this.akesiSheet.run();
		this.awenSheet.run();
		this.tawaSheet.run();
		this.utalaSheet.run();
		if (this.heldCount > 0 && this.getFromEndF() <= 7) {
			let angle = Angle.compare(this.player.sinpin, this.player.controls.angle(0));
			if (!this.player.controls.joystickPressed(0)) {
				this.selection = this.player.stances.NEUTRAL;
			} else if (abs(angle) > 3 * PI / 4) {
				this.selection = this.player.stances.DEFENSE;
			} else if (abs(angle) > PI / 4) {
				this.selection = this.player.stances.MOVE;
			} else {
				this.selection = this.player.stances.OFFENSE;
			}
		}
		if (!this.player.controls.pressed("nasa"))
			this.held = false;
		if (!this.held)
			this.heldCount--;
		if (this.getFromEndF() < 7 && this.heldCount > 0 && !this.fromHitstun) {
			this.setEndF(this.getEndF() + 1);
			this.player.actionLag++;
		}
		if (this.getFromEndF() === 7) {
			this.player.stance = this.selection;
			if (!this.fromHitstun) {
				this.player.iFrames = 15;
				this.player.invTo = ["attack", "grab"];
			}
		}
	}
}

class LotoSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(70, 0, 30, 0);
		let sour2 = new PriorityCircle(65, -30, 30, 0);
		let sour3 = new PriorityCircle(65, 30, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(40).setGrab(55).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(5).setActiveF(6).setEndF(27).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		if (!State.stateIs(player.currentState, "dash attack")) {
			player.dx = 0;
			player.dy = 0;
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.dx *= 0.8;
		this.player.dy *= 0.8;
		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.1) {
				this.player.dir.value -= 0.1;
			}
			if (compare > 0.1) {
				this.player.dir.value += 0.1;
			}
		}
	}
}

class LotoMNK extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MNK";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(40, 0, 180, 0);/*.setCircleVelocity(16, -1)*/;//20, 95
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(80 * player.attackMult).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(18).setHitStun(33, 10).setStunFrames(15, 19).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(15).setActiveF(17).setEndF(25);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 12;
		}
	}
}

class LotoMNU extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MNU";
	}

	static createAttack(player) {
		return new this(player, [], []).setClashPriority(0).setEndF(14);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiply(1);
	}

	draw(g) { }

	logic() {
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 10;
		}
		if (this.getEndF() === 1) {
			this.player.backStance = !this.player.backStance;
		}
	}
}

class LotoMNT extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MNT";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 160, 0);/*.setCircleVelocity(16, -1)*/;//20, 95
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(80 * player.attackMult).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(18).setHitStun(40, 5).setStunFrames(15, 19).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(15).setActiveF(17).setEndF(30);
	}

	static startAttack(player, attack, bufferInfo) {
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
			this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 12;
		}
	}
}

class LotoMNA extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MNA";

		this.active = false;

		this.activeStart = 1;
		this.activeEnd = 20;
	}

	static createAttack(player) {
		let circles = [];

		let prop = [new AttackProperties()];

		return new this(player, circles, prop).setClashPriority(false).setEndF(45);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.iFrames = 0;
	}

	draw(g) {
		if (debug.displayHitboxes && this.getFromEndF() >= this.activeStart && this.getFromEndF() <= this.activeEnd) {
			g.fill(0, 220, 30, 128);
			g.noStroke();
			g.ellipse(this.x, this.y, 140, 140);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
		if (this.getFromEndF() >= this.activeStart && this.getFromEndF() <= this.activeEnd) {
			this.player.setBlockLeniencyModifier(PI);
		}
	}

	logic() {
		if (this.active) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
		if (this.active && this.getEndF() === 1) {
			this.player.forceChangeState(this.player.states.MNA, []);

			let cancelOptions = [];

			let sweet1 = new PriorityCircle(60, 0, 200, 0);
			let circles = [sweet1];

			let angleValue = this.player.dir.value;
			if (this.player.targetPlayer)
				angleValue = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y).value;
			let sweet = new AttackProperties().setDamage(60 * this.player.attackMult).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(angleValue).setLaunch(10, 0.1).setHitStun(28).setStunFrames(15);
			let prop = [sweet];

			//sweet.setHitSound(assetManager.sounds.fanTP);
			//sweet.setBlockSound(assetManager.sounds.fanTP);

			let attack = new Attack(this.player, circles, prop).setClashPriority(false).setStartupF(28).setActiveF(2).setEndF(10).setRotateable();

			this.player.addCurrentAttack(attack);
			attack.rotateTo(this.player.dir);
			this.world.addAttack(attack);

			this.player.setActionLag(attack);

			if (this.player.targetPlayer) {
				let targetPlayer = this.player.targetPlayer;
				this.player.dir.value = angleValue;
				targetPlayer.endAttacks();
				if (!this.player.hitByProjectile) {
					targetPlayer.x = this.player.x + this.player.dir.getX() * (targetPlayer.collideRadius + this.player.collideRadius);
					targetPlayer.y = this.player.y + this.player.dir.getY() * (targetPlayer.collideRadius + this.player.collideRadius);
					targetPlayer.forceChangeState(targetPlayer.states.HITSTUN, targetPlayer.states.HITSTUN_ACTIONS);
					targetPlayer.actionLag = 10;
					targetPlayer.hitStun = 10;
					targetPlayer.stunFrames = 30;
				}
			}
		} else {
			if (this.getFromEndF() === this.activeStart) {
				this.player.addAction("block");
			}
			if (this.getFromEndF() === this.activeEnd + 1) {
				this.player.removeAction("block");
			}
		}
	}

	endLife() {
		if (this.getFromEndF() >= this.activeStart && this.getFromEndF() <= this.activeEnd && !this.active) {
			this.active = this.player.currentState.name !== "hitstun" && this.player.currentState.name !== "dead" && this.player.currentState.name !== "grabbed";
			if (this.active) {
				this.properties[0].playSound(this.world, assetManager.sounds.parry);
			}

			this.setEndF(3);
		} else {
			this.setEndF(0);
		}
	}
}

characters.push(Loto);