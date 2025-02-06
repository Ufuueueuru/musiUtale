/** */
class Player extends Hitcircle {
	/**
	 * 
	 * @param {Circle[]} circles
	 */
	constructor(circles) {
		super(0, 0, circles);

		/** @type {Object} */
		this.hurtboxes = {};

		this.hurtboxes["BASE"] = [[]];//Set the base to a copy of the passed in Circle array
		let target = this.hurtboxes["BASE"][0];
		for (let i in this.circles) {
			target.push(new Circle(this.circles[i].x, this.circles[i].y, this.circles[i].diameter));
			if (this.circles[i].intangible)
				target[i].intangible = true;
		}

		/** @type {string} */
		this.hurtboxState = "BASE";
		/** @type {number} */
		this.hurtboxStateFrame = 0;

		/** @type {string} */
		this.headNoun = "jan";
		/** @type {string} */
		this.name = "player";

		/** @type {number} How much bigger to draw the image in the character select screen */
		this.selectScreenSizeOffset = 0;
		/** @type {number} How offset the y-value of the character is drawn on the select screen */
		this.selectScreenYOffset = 0;
		/** @type {number} How much to rotate the character model in the character select screen*/
		this.selectScreenRotation = 0;

		/** @type {Spritesheet} */
		this.sheet = Spritesheet.copy(assetManager.spritesheets.hitEffect);//DEBUG (I think)
		/** @type {string} Should be a string exactly the same as the images name in assetManager */
		this.menuImage = "";

		/** @type {World} */
		this.world = world;

		/** @type {number} */
		this.dx = 0;
		/** @type {number} */
		this.dy = 0;

		/** @type {number} */
		this.dr = 0;

		/** @type {Angle} */
		this.dir = new Angle(0);
		
		/** @type {number} */
		this.collideRadius = this.mainRadius();

		/** @type {number} Changes how far the character gets moved by attacks or collisions */
		this.weight = 1;

		/** @type {number} */
		this.health = 800;
		/** @type {number} */
		this.maxHealth = 800;
		/** @type {number} Says how skewed the health is displayed (higher number = have more health than looks) */
		this.healthSkew = 1.5;
		/** @type {number} The red part of your health bar */
		this.tempDamageCount = 0;
		/** @type {number} How much health you lose when the timer hits 0 */
		this.timerPunishHealth = 0;
		/** @type {number} Character specific - multiplies the amount that you lose timer health by */
		this.timerPunishMult = 1;

		/** @type {number} Once health hits this threshold,
		 * you instead have a chance of dying based on how much health is left instead of getting hurt
		 * Chip damage cannot 
		 */
		this.deathChanceThreshold = 10;

		/** @type {number} */
		this.combo = 0;
		/** @type {number} */
		this.comboProration = 0;
		/** @type {number} */
		this.counterHittable = false;
		/** @type {number} Makes the next frame counterhittable (used for training mode stuff) */
		this.bufferCounterHittable = false;

		/** @type {number} */
		this.movementSpeed = 2;
		/** @type {number} */
		this.slowWalk = 1;//Multiplies walking speed
		/** @type {number} */
		this.slowWalkFrames = 0;//How long to slow down walk speed

		/** @type {number} How fast the player can turn to face the opponent */
		this.turnSpeed = 0.02;

		/** @type {number} Temporary buff to turn speed */
		this.turnSpeedModifier = 0;
		/** @type {number} Nerf - increases the amount of hitstun you take from each hit */
		this.hitStunModifier = 0;
		/** @type {number} To be used in generalLogic so that a character can access the hitStunModifier value (DO NOT USE THIS INSIDE ATTACK CODE) */
		this.bufferHitStunModifier = 0;
		/** @type {number} Used for making a block angle larger */
		this.blockLeniencyModifier = 0;

		/** @type {number} Determines how much faster a character moves forward than backwards */
		this.forwardSpeedBoost = 0;

		/** @type {number} A fractional number multiplying all damage received */
		this.defense = 1;

		/** @type {number} How many frames you can cancel into back special while in blockstun */
		this.OOBBlockFrame = 8;
		/** @type {number} Decreases blockstun received when neutral blocking */
		this.neutralBlockBuff = 8;
		/** @type {number} Decreases blockstun received when parrying */
		this.parryFrameBuff = 16;

		/** @type {Object} */
		this.dash = {};
		this.dash.speed = 12;
		this.dash.frames = 39;
		this.dash.invFirstFrame = this.dash.frames - 6;
		this.dash.turnSpeedBoost = 0.3;
		this.dash.turnFrame = this.dash.frames - 6;
		this.dash.neutralBoost = 0;//How much your speed increases from pressing dash while not pressing a direction
		this.dash.backPenalty = 3;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 2;
		this.dash.friction = 0.9;
		this.dash.regularFriction = 0.8;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.dash.iFrames = 14;
		this.dash.invTo = ["attack"];
		this.dash.dashAttackStartDelay = 1;
		this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 20;
		this.dash.grabCancelFrame = this.dash.frames - 28;
		this.dash.blockCancelFrame = this.dash.frames - 20;

		this.dash.comboDashFrame = this.dash.frames - 10;
		this.dash.combos = 0;
		this.dash.maxCombos = 1;

		//All values for the dash cancel (aka sidestep or tawa lili)
		this.dash.cancelIFrames = 7;
		this.dash.cancelSpeed = 22;
		this.dash.cancelFrames = 20;
		this.dash.cancelDecay = 0.8;//Speed decay
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 2;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 16;
		this.dash.currentPenalty = 0;

		/** @type {Object} This is the information for a power dash (tawa wawa) */
		this.powerDash = {};
		this.powerDash.frames = 20;
		this.powerDash.speed = 8;
		this.powerDash.iFrames = 18;
		this.powerDash.turnSpeedBoost = 0.3;
		this.powerDash.addHitstunFrames = 15;
		this.powerDash.proration = 1;
		this.powerDash.reversalIFrameMult = 0.65;

		//Init States
		this.states = {};
		this.states.NEUTRAL = State.NEUTRAL;
		this.states.NEUTRAL_ACTIONS = State.NEUTRAL_ACTIONS;
		this.states.WALK = State.WALK;
		this.states.WALK_ACTIONS = State.WALK_ACTIONS;
		this.states.CLASH = State.CLASH;
		this.states.CLASH_ACTIONS = State.CLASH_ACTIONS;
		this.states.POWER_DASH = State.POWER_DASH;
		this.states.POWER_DASH_ACTIONS = State.POWER_DASH_ACTIONS;
		this.states.DASH = State.DASH;
		this.states.DASH_ACTIONS = State.DASH_ACTIONS;
		this.states.DASH_CANCEL = State.DASH_CANCEL;
		this.states.DASH_CANCEL_ACTIONS = State.DASH_CANCEL_ACTIONS;
		this.states.BLOCK = State.BLOCK;
		this.states.BLOCK_ACTIONS = State.BLOCK_ACTIONS;
		this.states.HITSTUN = State.HITSTUN;
		this.states.HITSTUN_ACTIONS = State.HITSTUN_ACTIONS;

		this.states.DASH_ATTACK = State.DASH_ATTACK;
		this.states.DASH_ATTACK_ACTIONS = State.DASH_ATTACK_ACTIONS;

		this.states.NL = State.NL;
		this.states.NL_ACTIONS = State.NL_ACTIONS;
		this.states.SL = State.SL;
		this.states.SL_ACTIONS = State.SL_ACTIONS;
		this.states.RL = State.RL;
		this.states.RL_ACTIONS = State.RL_ACTIONS;
		this.states.LL = State.LL;
		this.states.LL_ACTIONS = State.LL_ACTIONS;
		this.states.ML = State.ML;
		this.states.ML_ACTIONS = State.ML_ACTIONS;

		this.states.NS = State.NS;
		this.states.NS_ACTIONS = State.NS_ACTIONS;
		this.states.SS = State.SS;
		this.states.SS_ACTIONS = State.SS_ACTIONS;
		this.states.RS = State.RS;
		this.states.RS_ACTIONS = State.RS_ACTIONS;
		this.states.LS = State.LS;
		this.states.LS_ACTIONS = State.LS_ACTIONS;
		this.states.MS = State.MS;
		this.states.MS_ACTIONS = State.MS_ACTIONS;

		this.states.NPL = State.NPL;
		this.states.NPL_ACTIONS = State.NPL_ACTIONS;
		this.states.SPL = State.SPL;
		this.states.SPL_ACTIONS = State.SPL_ACTIONS;
		this.states.RPL = State.RPL;
		this.states.RPL_ACTIONS = State.RPL_ACTIONS;
		this.states.LPL = State.LPL;
		this.states.LPL_ACTIONS = State.LPL_ACTIONS;
		this.states.MPL = State.MPL;
		this.states.MPL_ACTIONS = State.MPL_ACTIONS;

		this.states.NPS = State.NPS;
		this.states.NPS_ACTIONS = State.NPS_ACTIONS;
		this.states.SPS = State.SPS;
		this.states.SPS_ACTIONS = State.SPS_ACTIONS;
		this.states.RPS = State.RPS;
		this.states.RPS_ACTIONS = State.RPS_ACTIONS;
		this.states.LPS = State.LPS;
		this.states.LPS_ACTIONS = State.LPS_ACTIONS;
		this.states.MPS = State.MPS;
		this.states.MPS_ACTIONS = State.MPS_ACTIONS;

		this.states.NN = State.NN;
		this.states.NN_ACTIONS = State.NN_ACTIONS;
		this.states.SN = State.SN;
		this.states.SN_ACTIONS = State.SN_ACTIONS;
		this.states.RN = State.RN;
		this.states.RN_ACTIONS = State.RN_ACTIONS;
		this.states.LN = State.LN;
		this.states.LN_ACTIONS = State.LN_ACTIONS;
		this.states.MN = State.MN;
		this.states.MN_ACTIONS = State.MN_ACTIONS;

		this.states.GRAB = State.GRAB;
		this.states.GRAB_ACTIONS = State.GRAB_ACTIONS;
		this.states.GRABBED = State.GRABBED;
		this.states.GRABBED_ACTIONS = State.GRABBED_ACTIONS;

		this.states.LIPU_SULI = State.LIPU_SULI;
		this.states.LIPU_SULI_ACTIONS = State.LIPU_SULI_ACTIONS;
		this.states.LIPU_LILI = State.LIPU_LILI;
		this.states.LIPU_LILI_ACTIONS = State.LIPU_LILI_ACTIONS;
		this.states.RIGHTROLL = State.RIGHTROLL;
		this.states.RIGHTROLL_ACTIONS = State.RIGHTROLL_ACTIONS;
		this.states.NEUTRALROLL = State.NEUTRALROLL;
		this.states.NEUTRALROLL_ACTIONS = State.NEUTRALROLL_ACTIONS;
		this.states.LEFTROLL = State.LEFTROLL;
		this.states.LEFTROLL_ACTIONS = State.LEFTROLL_ACTIONS;

		this.states.DEAD = State.DEAD;
		this.states.DEAD_ACTIONS = State.DEAD_ACTIONS;
		this.states.WIN = State.WIN;
		this.states.WIN_ACTIONS = State.WIN_ACTIONS;

		this.frameDataRef = null;

		/** @type {number} The leniency of angle where you can block an attack */
		this.blockLeniency = (PI / 4 + PI / 8);
		/** @type {number} Block leniency gets increased for a short time while you are blocking an attack */
		this.blockLeniencyBuff = PI / 3;
		/** @type {number} How long the block leniency buff lasts */
		this.blockLeniencyFrames = 0;
		/** @type {number} How much leniency you get to block mids via standing instead of moving */
		this.standingBlockLeniency = PI / 8;

		/** @type {number} Frames where the player does not further their animation state */
		this.stunFrames = 0;

		/** @type {number} */
		this.hitStun = 0;

		/** @type {number} How fast the opponent rotates when in hit stun */
		this.rotateVel = 0;

		/** @type {number} */
		this.rotateSlowDown = 0;
		/** @type {number} */
		this.rotateSlowDownFrames = 0;

		/** @type {number} The denominator for calculation speed */
		this.slowDownMod = 2;
		/** @type {number} The numerator for calculation speed */
		this.slowDownMax = 1;
		/** @type {number} How many frames the player will be slowed down */
		this.slowDownFrames = 0;

		/** @type {number} How many frames you have to parry */
		this.parryLeniency = 6;
		/** @type {number} Countdown for parry to be useable */
		this.parryCooldown = 0;
		/** @type {number} Number of frames after starting moving where a parry cannot be performed */
		this.maxParryCooldown = 22;
		/** @type {number} Whether the parry cooldown should be buffered or not */
		this.bufferCooldown = false;
		/** @type {number} Used for knowing whether something was a parry or not */
		this.moveCount = 0;

		/** @type {number} */
		this.cancelWait = 0;
		/** @type {string[]} */
		this.cancelActions = [];

		/** @type {Controls} */
		this.controls = new Controls();

		/** @type {State} */
		this.currentState = this.states.NEUTRAL;

		/** @type {string[]} */
		this.actions = [];

		/** @type {Attack[]} */
		this.currentAttackReferences = [];
		/** @type {Attack} */
		this.mostRecentAttackReference = null;

		/** @type {Staling} */
		this.moveStaling = new Staling(600, 8);//Staling duration = 600, max stale = 8
		this.stalePenalty = 0.92;

		/** @type {number} */
		this.iFrames = 0;

		/** @type String[] */
		this.invTo = [];

		/** @type {string[]} The current actions that can be performed by the player */
		this.actions = ["neutral action", "attack", "block", "dash"];

		/** @type {number} How many frames are left in the player's current action */
		this.actionLag = 0;

		/** @type {boolean} Prevents the players from attacking at the start of the match */
		this.canAttack = false;
		/** @type {boolean} Prevents the players from moving at the very start of the match */
		this.canMove = false;
		
		/** @type {Buffer} */
		this.buffer = new Buffer(this);

		/** @type {number} */
		this.largestDiameter = 0;

		/** @type {Player} */
		this.targetPlayer = null;

		this.sinpin = new Angle();
		this.right = new Angle(PI / 2);
		this.monsi = new Angle(PI);
		this.left = new Angle(-PI / 2);

		//These are for training mode purposes
		this.advantage = 0;
		this.cancelAdvantage = 0;
		this.oobAdvantage = 0;
		this.oobCancelAdvantage = 0;
		this.percentDamage = 0;
		this.dealtDamage = 0;

		this.hitByProjectile = false;

		/** @type {number} How much farther away from the player the directional indicator arrow should be displayed */
		this.arrowOffset = 0;
		/** @type {number} How much farther away from the player the player number indicator arrow should be displayed */
		this.arrowOffsetBack = 0;

		/** @type {number} */
		this.wallBounce = 1;

		/** @type {boolean} Used to save whether an attack should perform a heavy or light wall splat */
		this.lipuHeavy = false;
		/** @type {number} Lipu Meter - If full 100% you will flatten onto a wall */
		this.nanpaLipu = 0;
		/** @type {number} How much damage you take from being flattened */
		this.lipuDamage = 30;
		/** @type {number} How much damage you take from being strongly flattened */
		this.lipuHeavyDamage = 65;
		/** @type {number} How fast lipu meter goes down over time */
		this.lipuTickRate = 0.04;
		/** @type {number} How many frames the lipu suli lasts */
		this.lipuSuliFrames = 60;
		/** @type {number} How many frames the lipu lili lasts */
		this.lipuLiliFrames = 32;

		this.edgeCalculationLeniency = 10;

		this.randomizeCharacter = false;

		this.currentlyPlaying = [];

		this.setAttacks();
	}

	/**
	 * Defines the classes/blueprints for all of the character's standard atacks
	 * @override
	 */
	setAttacks() {
		this.DASH_ATTACK = DefaultAttack;

		this.NL = DefaultAttack;
		this.SL = DefaultAttack;
		this.RL = DefaultAttack;
		this.LL = DefaultAttack;
		this.ML = DefaultAttack;

		this.NS = DefaultAttack;
		this.SS = DefaultAttack;
		this.RS = DefaultAttack;
		this.LS = DefaultAttack;
		this.MS = DefaultAttack;

		this.NPL = DefaultAttack;
		this.SPL = DefaultAttack;
		this.RPL = DefaultAttack;
		this.LPL = DefaultAttack;
		this.MPL = DefaultAttack;

		this.NPS = DefaultAttack;
		this.SPS = DefaultAttack;
		this.RPS = DefaultAttack;
		this.LPS = DefaultAttack;
		this.MPS = DefaultAttack;

		this.NN = DefaultAttack;
		this.SN = DefaultAttack;
		this.RN = DefaultAttack;
		this.LN = DefaultAttack;
		this.MN = DefaultAttack;
	}

	/** This will be overridden in order to reset characters */
	charSpecificReset() { }
	charSpecificFullReset() { }

	reset() {
		this.resetModifiers();
		this.buffer.clear();
		this.iFrames = 0;
		this.health = this.maxHealth;
		this.timerPunishHealth = 0;//Should this reset?
		this.nanpaLipu = 0;
		this.actionLag = 0;
		this.forceChangeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
		this.hitStun = 0;
		this.stunFrames = 0;
		this.blockLeniencyFrames = 0;
		this.dx = 0;
		this.dy = 0;
		this.currentAttackReferences = [];
		this.rotateSlowDownFrames = 0;
		this.rotateVel = 0;
		this.moveStaling.reset();
		this.charSpecificReset();
	}

	getShouldLoadImages() {
		return [];
	}
	getShouldLoadSpritesheets() {
		return [];
	}
	getShouldLoadFonts() {
		return [];
	}
	getShouldLoadSounds() {
		return [];
	}
	addShouldLoad() {
		for (let i of this.getShouldLoadImages()) {
			assetManager.addShouldImage(i);
		}
		for (let i of this.getShouldLoadSpritesheets()) {
			assetManager.addShouldSpritesheet(i);
		}
		for (let i of this.getShouldLoadFonts()) {
			assetManager.addShouldFont(i);
		}
		for (let i of this.getShouldLoadSounds()) {
			assetManager.addShouldSound(i);
		}
	}
	deload() {
		for (let i of this.getShouldLoadImages()) {
			assetManager.removeShouldImage(i);
		}
		for (let i of this.getShouldLoadSpritesheets()) {
			assetManager.removeShouldSpritesheet(i);
		}
		for (let i of this.getShouldLoadFonts()) {
			assetManager.removeShouldFont(i);
		}
		for (let i of this.getShouldLoadSounds()) {
			assetManager.removeShouldSound(i);
		}
	}

	setBlockLeniencyModifier(num) {
		if (num > this.blockLeniencyModifier)
			this.blockLeniencyModifier = num;
	}

	fullReset() {
		this.reset();
		this.charSpecificFullReset();
		//this.timerPunishHealth = 0;
	}

	resetModifiers() {
		this.turnSpeedModifier = 0;
		this.hitStunModifier = this.bufferHitStunModifier;
		this.bufferHitStunModifier = 0;
		this.blockLeniencyModifier = 0;
		this.counterHittable = false;
		if (this.bufferCounterHittable) {
			this.counterHittable = true;
			this.bufferCounterHittable = false;
		}
	}

	resetMain() {
		super.resetMain();
		this.largestDiameter = 0;
		for (let i in this.circles) {
			if (this.circles[i].diameter > this.largestDiameter) {
				this.largestDiameter = this.circles[i].diameter;
            }
        }
	}

	playSound(howl, maxPlay = 1) {
		let count = 0;
		for (let i = this.currentlyPlaying.length - 1; i >= 0; i--) {
			if (!this.currentlyPlaying[i].howl.playing(this.currentlyPlaying[i].id)) {
				this.currentlyPlaying.splice(i, 1);
			} else if (this.currentlyPlaying[i].howl === howl) {
				count++;
			}
		}
		if (howl && count < max(1, maxPlay)) {
			let id = howl.play();
			this.currentlyPlaying.push({ howl: howl, id: id });
			if (this.world.rollbacking) {
				howl.seek(this.world.rollbackingFrames / 60, id);
			}
		}
	}

	/** */
	atEdge(leniencyMult = 1) {
		for (let i in this.world.walls) {
			if (this.world.walls[i].collidePointSuper(this, this.edgeCalculationLeniency * leniencyMult))
				return true;
		}
		return false;
	}

	atEdgeOld(leniencyMult = 1) {
		return this.x < this.world.wallLeft + this.edgeCalculationLeniency * leniencyMult || this.x > this.world.wallRight - this.edgeCalculationLeniency * leniencyMult || this.y < this.world.wallTop + this.edgeCalculationLeniency * leniencyMult || this.y > this.world.wallDown - this.edgeCalculationLeniency * leniencyMult;
	}

	edgeAngle() {
		let wallVector = new Point();
		for (let i in this.world.walls) {
			if (this.world.walls[i].collidePointSuper(this, this.edgeCalculationLeniency) || !this.world.walls[i].pointInFront(this)) {
				let orthoNormal = this.world.walls[i].getOrthoNormalVector();
				wallVector.x += orthoNormal.x;
				wallVector.y += orthoNormal.y;
			}
		}
		return new Angle().setFromPoint(wallVector.x, wallVector.y);
	}

	edgeAngleOld() {
		let angle = new Angle();
		let x = 0;
		let y = 0;
		if (this.x < this.world.wallLeft + 10)
			x++;
		if (this.x > this.world.wallRight - 10)
			x--;
		if (this.y < this.world.wallTop + 10)
			y++;
		if (this.y > this.world.wallDown - 10)
			y--;
		angle.setFromPoint(x, y);
		return angle;
    }

	/** */
	counterAngle() {//TODO this doesn't do anything
		let x = 0;
		let y = 0;
		if (this.x < 105) {
			x = 1;
		}
		if (this.x > this.world.background.width - 105) {
			x = -1;
		}
		if (this.y < 105) {
			y = 1;
		}
		if (this.y > this.world.background.height - 105) {
			y = -1;
		}

		if (x === 0 && y === 0)
			return null;

		return new Angle().setFromPoint(x, y);
    }

	/** */
	tickStunFrames() {
		this.stunFrames--;

		if (this.stunFrames > 0) {
			if (this.controls.joystickHeld(0)) {
				this.moveCount++;
				if (this.moveCount === this.parryLeniency + 1) {
					this.parryCooldown = this.maxParryCooldown;
				} else if (this.moveCount <= this.parryLeniency) {
					this.bufferCooldown = true;
				} else if (this.bufferCooldown) {
					this.bufferCooldown = false;
					this.parryCooldown = this.maxParryCooldown;
				}
			} else {
				if (this.bufferCooldown) {
					this.bufferCooldown = false;
					this.parryCooldown = this.maxParryCooldown;
				}
				//if (this.moveCount > 0 && this.parryCooldown <= 0)
				//this.parryCooldown = this.maxParryCooldown;
				this.moveCount = 0;
			}
		}

		if (this.stunFrames > 13)
			this.buffer.update();
	}

	/**
	 * This should be used to determine if a move can slide at the beginning of the attack (mult should be between 0 and 1)
	 * @param {number} mult
	 */
	startMomentumMultiply(mult) {
		if (this.actionLag === 0) {
			this.dx *= mult;
			this.dy *= mult;
		}
	}

	/**
	 * This should be used to determine if a move can slide at the beginning of the attack (mult should be between 0 and 1)
	 * @param {number} mult
	 */
	startMomentumMultiplyDash(mult) {
		if (this.currentState.name === "dash") {
			this.dx *= mult;
			this.dy *= mult;
		}
	}

	/**
	 * Changes the hurtbox of the character
	 * @param {string} state
	 */
	requestHurtboxChange(state, frame, frameRate = 4) {
		if (this.hurtboxes[state] && (this.hurtboxState !== state || frame % frameRate === 0)) {
			let actualFrame = min(floor(frame / frameRate), this.hurtboxes[state].length - 1);
			this.circles = [];
			let target = this.hurtboxes[state][actualFrame];
			this.copyHurtbox(target);
			this.circleRotation.value = 0;
			this.rotateTo(this.dir);
			this.resetMain();

			this.hurtboxState = state;
		}
	}

	/**
	 * Changes the hurtbox of the character
	 * @param {string} state
	 */
	requestHurtboxChangeLoop(state, frame, frameRate = 4) {
		if (this.hurtboxes[state] && (this.hurtboxState !== state || frame % frameRate === 0)) {
			let actualFrame = floor(frame / frameRate) % this.hurtboxes[state].length;
			this.circles = [];
			let target = this.hurtboxes[state][actualFrame];
			this.copyHurtbox(target);
			this.circleRotation.value = 0;
			this.rotateTo(this.dir);
			this.resetMain();

			this.hurtboxState = state;
		}
	}

	copyHurtbox(target, rollbacking = false) {
		this.circles = [];
		for (let i in target) {
			this.circles.push(new Circle(target[i].x, target[i].y, target[i].diameter));
			if (target[i].intangible)
				this.circles[i].intangible = target[i].intangible;
		}
	}

	getStateFromString(string) {
		switch (string) {
			case "NL": return this.states.NL;
			case "SL": return this.states.SL;
			case "RL": return this.states.RL;
			case "LL": return this.states.LL;
			case "ML": return this.states.ML;
			case "NS": return this.states.NS;
			case "SS": return this.states.SS;
			case "RS": return this.states.RS;
			case "LS": return this.states.LS;
			case "MS": return this.states.MS;
			case "NPL": return this.states.NPL;
			case "SPL": return this.states.SPL;
			case "RPL": return this.states.RPL;
			case "LPL": return this.states.LPL;
			case "MPL": return this.states.MPL;
			case "NPS": return this.states.NPS;
			case "SPS": return this.states.SPS;
			case "RPS": return this.states.RPS;
			case "LPS": return this.states.LPS;
			case "MPS": return this.states.MPS;
			case "NN": return this.states.NN;
			case "SN": return this.states.SN;
			case "RN": return this.states.RN;
			case "LN": return this.states.LN;
			case "MN": return this.states.MN;
			case "dash": return this.states.DASH;
			case "dash attack": return this.states.DASH_ATTACK;
			case "powerDash": return this.states.POWER_DASH;
			default: return undefined;
		}
	}

	/**
	 * 
	 * @param {State} state
	 */
	canChangeState(state) {
		if (!state)
			return false;
		if (this.actions.includes(state.name))
			return true;
		for (let i in state.tags) {
			if (this.actions.includes(state.tags[i]))
				return true;
        }
		return false;
    }

	/**
	 * 
	 * @param {State} state
	 * @param {string[]} actions
	 * @param {function} ifthen
	 * @param {function} ifelse
	 */
	changeState(state, actions, ifthen = () => { }, ifelse = () => { }) {
		if (this.canChangeState(state)) {
			this.endAttacks();

			ifthen();

			if (this.currentState.name !== state.name || this.currentState.name !== "neutral")
				this.hurtboxStateFrame = 1;

			this.currentState = state;
			this.actions = actions;

			this._updateHurtbox();
		} else {
			ifelse();
        }
	}

	/**
	 * Changes the state regardless of whether the state change is allowed or not
	 * @param {State} state
	 * @param {string[]} actions
	 */
	forceChangeState(state, actions) {
		if (this.currentState.name !== state.name)
			this.hurtboxStateFrame = 1;

		this.currentState = state;
		this.actions = actions;
		this.endAttacks();

		this._updateHurtbox();
	}

	/**
	 * Changes the state name WITHOUT CHANGING ANYTHING ELSE *INCLUDING ACTIONS*
	 * @param {any} state
	 */
	setStateIgnore(state) {
		this.currentState = state;

		this.hurtboxStateFrame = 1;
	}

	endAttacks() {
		for (let i in this.currentAttackReferences) {
			if (this.currentAttackReferences[i].follow || this.currentAttackReferences[i].getStartupF() > 0) {
				this.currentAttackReferences[i].endLife();
			}
		}
		this.removeAttackReferences();
	}

	forceEndAttacks() {
		for (let i in this.currentAttackReferences) {
			this.currentAttackReferences[i].endLife();
		}
		this.removeAttackReferences();
	}

	removeCurrentAttack(attack) {
		for (let i = this.currentAttackReferences.length - 1; i >= 0; i--) {
			if (attack === this.currentAttackReferences[i])
				this.currentAttackReferences.splice(i);
        }
    }

	addCurrentAttack(attack) {
		this.currentAttackReferences.push(attack);
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.fill(40, 30, 150);
		g.stroke(20, 15, 125);
		g.ellipse(this.x, this.y, this.mainWidth(), this.mainHeight());
		g.fill(150, 30, 50);
		g.noStroke();
		g.ellipse(this.x + cos(this.dir.value) * this.mainWidth() / 2, this.y + sin(this.dir.value) * this.mainHeight() / 2, 20, 20);
		/*if (this.controls.pressed("dash")) {
			g.background(255, 0, 0);
		}*/
		//this.drawArrow(g);
	}

	drawBlock(g) {
		g.push();
		g.translate(this.x, this.y);

		g.strokeWeight(3);
		g.stroke(0);
		g.fill(0, 200, 0, 100);
		let angle = new Angle();
		if (this.controls.joystickPressed(0)) {
			angle.value = this.controls.angle(0).value;
			let leniency = this.blockLeniency + (this.blockLeniencyFrames > 0 ? this.blockLeniencyBuff : 0) + this.blockLeniencyModifier;
			angle.value += leniency;
			if (leniency >= PI) {
				g.ellipse(0, 0, 200, 200);
			} else {
				g.line(0, 0, -angle.getX() * 100, -angle.getY() * 100);
				angle.value -= 2 * leniency;
				g.line(0, 0, -angle.getX() * 100, -angle.getY() * 100);
				g.arc(0, 0, 200, 200, PI + angle.value, PI + angle.value + 2 * leniency);
			}
		} else {//Standing
			angle.value = this.dir.value;
			let leniency = this.standingBlockLeniency + (this.blockLeniencyFrames > 0 ? this.blockLeniencyBuff : 0) + this.blockLeniencyModifier;
			angle.value += leniency;
			if (leniency >= PI) {
				g.ellipse(0, 0, 200, 200);
			} else {
				g.line(0, 0, angle.getX() * 100, angle.getY() * 100);
				angle.value -= 2 * leniency;
				g.line(0, 0, angle.getX() * 100, angle.getY() * 100);
				g.arc(0, 0, 200, 200, angle.value, angle.value + 2 * leniency);
			}

		}

		g.pop();
	}

	drawArrow(g, playerID) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value);
		g.push();

		g.translate(this.arrowOffset, 0);

		let red = (this.rotateSlowDownFrames > 0 ? 200 : 0);
		let blue = (this.slowWalkFrames > 0 ? 150 : 0);
		g.stroke(red, 0, 15 + blue, 50 + red / 2);
		g.strokeWeight(1);
		g.noFill();
		g.triangle(65, 0, 60, 3, 60, -3);

		g.pop();

		g.push();
		g.translate(-this.arrowOffsetBack, 0);

		g.noStroke();
		if (playerID % 2 === 0) {
			g.fill(200, 70, 90);
		} else {
			g.fill(77, 61, 201);
		}
		g.triangle(-63, 0, -77, 10, -77, -10);

		g.pop();

		//g.noStroke();
		//if (playerID % 2 === 0) {
		//	g.fill(170, 40, 60, 50);
		//} else {
		//	g.fill(47, 31, 171, 50);
		//}
		//g.ellipse(0, 0, this.collideRadius * 2, this.collideRadius * 2);

		g.pop();
	}

	/**
	 * 
	 * @param {Graphics} g
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
	drawHealth(g, x, y, flip = false, width = 200, height = 35) {
		g.push();
		g.scale(width / 200, height / 35);
		g.translate(x, y);

		g.fill(0, 0, 15);
		g.stroke(0, 0, 15);
		g.strokeWeight(5);
		g.rect(0, 0, width, height);

		/*g.strokeWeight(1);//Player number color-coded border
		g.noFill();
		if (!flip)
			g.stroke(47, 31, 171);
		else
			g.stroke(170, 40, 60);
		g.rect(-1, -1, width + 2, height + 2);*/

		if (flip) {
			g.noStroke();
			g.fill(240, 240, 34);
			g.rect(width - width * this.displayHealth() / this.maxHealth, 0, width * this.displayHealth() / this.maxHealth, height);

			g.fill(240, 34, 0);
			g.rect(width - width * this.displayDamagedHealth() / this.maxHealth - width * this.displayHealth() / this.maxHealth, 0, width * this.displayDamagedHealth() / this.maxHealth, height);

			let red = 0;
			if (this.targetPlayer && (this.health - this.timerPunishHealth) / this.maxHealth < (this.targetPlayer.health - this.targetPlayer.timerPunishHealth) / this.targetPlayer.maxHealth)
				red = 140;
			g.fill(red, 0, 15, 200);
			let pointerX = width - width * this.displayTimerHealth() / this.maxHealth;
			g.triangle(pointerX, height - 6, pointerX - 3, height + 1, pointerX + 3, height + 1);
		} else {
			g.noStroke();
			g.fill(240, 240, 34);
			g.rect(0, 0, width * this.displayHealth() / this.maxHealth, height);

			g.fill(240, 34, 0);
			g.rect(width * this.displayHealth() / this.maxHealth, 0, width * this.displayDamagedHealth() / this.maxHealth, height);

			let red = 0;
			if (this.targetPlayer && (this.health - this.timerPunishHealth) / this.maxHealth < (this.targetPlayer.health - this.targetPlayer.timerPunishHealth) / this.targetPlayer.maxHealth)
				red = 140;
			g.fill(red, 0, 15, 200);
			let pointerX = width * this.displayTimerHealth() / this.maxHealth;
			g.triangle(pointerX, height - 6, pointerX - 3, height + 1, pointerX + 3, height + 1);
		}

		g.pop();
	}

	drawNanpaLipu(g, x, y, width = 200, height = 35) {
		let displayLipu = constrain(this.nanpaLipu, 0, 100);

		g.push();
		g.scale(width / 200, height / 35);
		g.translate(x, y);

		g.fill(0, 0, 15);
		g.stroke(0, 0, 15);
		g.strokeWeight(2);
		g.rect(0, 40, 50, 35 / 7);
		g.noStroke();
		g.fill(40 + displayLipu * 2, 240 - displayLipu * 2, 34);
		g.rect(0, 40, displayLipu / 2, 35 / 7);

		let startValue = 70;
		if (this.nanpaLipu >= startValue) {
			let mod = 5 * sin(this.world.frameCount / 1.5);
			g.stroke(196, 19, 41, min(160, (this.nanpaLipu - startValue) * 8));
			g.strokeWeight(6);
			g.noFill();
			g.bezier(-7, 50, -9.5 + mod, 52.5 + mod,    -13.5 - mod, 57.5 - mod, -14, 60);
			g.bezier(11, 55, 13.5 + mod,   57.5 + mod / 3, 5.5 - mod, 62.5 - mod / 3, 8, 68);
			g.bezier(37, 55, 39.5 - mod,   57.5 + mod / 3, 39   + mod, 62.5 - mod / 3, 41, 68);
			g.bezier(59, 50, 61.5 - mod,   52.5 + mod,     68.5 + mod, 57.5 - mod, 66, 60);
		}

		g.pop();
	}

	drawCombo(g, i) {
		let player1 = i % 2 === 0;
		if ((this.currentState.name === "hitstun" || this.currentState.name === "grabbed") && this.combo > 0) {
			g.textFont(assetManager.fonts.asuki);
			g.stroke(240, 240, 255);
			if (player1) {
				g.fill(170, 40, 60);//Loje
			} else {
				g.fill(47, 31, 171);//Laso
			}
			g.strokeWeight(3);
			g.textSize(25);
			g.textAlign(CENTER, CENTER);
			g.text("󱤟" + this.combo + "󱤀", 256 + 128 * (i * 2 - 1), 105);
			g.textAlign(LEFT, BASELINE);
		}
		if ((this.currentState.name === "hitstun" || this.currentState.name === "block") && this.hitStun > 0) {
			g.noStroke();
			g.fill(0, 0, 14);
			g.rect(256 + 128 * (i * 2 - 1) - 36, 84, 72, 10, 5);
			if (this.currentState.name === "hitstun") {
				g.fill(130, 40, 40);//Red
			} else {
				g.fill(40, 40, 130);//Blue
				if (this.hitStun <= this.OOBBlockFrame)
					g.fill(240, 240, 34);
			}
			g.rect(256 + 128 * (i * 2 - 1) - 36 + 2, 84 + 2, (72 - 4) * min(this.hitStun, 60) / 60, 10 - 4, 5);
		}

	}

	/**
	 * @override
	 * @param {Graphics} g
	 * @param {number} i
	 * @param {number} x
	 * @param {number} y
	 */
	drawExtraHUD(g, i, x, y) {}

	/** */
	displayHealth() {
		let health = max(0, this.health);
		
		return this.maxHealth * (health / this.maxHealth * sqrt((this.healthSkew - 1) / this.healthSkew)) ** 2 + health / this.healthSkew;
	}

	/** */
	displayDamagedHealth() {
		let health = max(0, this.health + this.tempDamageCount);
		let total = this.maxHealth * (health / this.maxHealth * sqrt((this.healthSkew - 1) / this.healthSkew)) ** 2 + health / this.healthSkew;
		return total - this.displayHealth();
	}

	/** */
	displayTimerHealth() {
		let health = max(0, this.health - this.timerPunishHealth);
		if (this.world.resetCounter > 0) {
			health = max(0, this.health);
		}

		return this.maxHealth * (health / this.maxHealth * sqrt((this.healthSkew - 1) / this.healthSkew)) ** 2 + health / this.healthSkew;
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} combo
	 */
	damageHealth(num, combo, chip = false, scaling = 4) {
		if (num === 0 || this.health <= 0)
			return 0;

		let damage = Player.comboScale(num, combo, scaling) * this.defense;
		let dealtDamage = this.health;
		this.health -= damage;
		this.tempDamageCount += damage;
		if (this.health < this.deathChanceThreshold && this.health > 0) {
			let tempRandom = this.world.random(0, this.deathChanceThreshold);
			if (tempRandom > this.deathChanceThreshold - this.health) {
				this.tempDamageCount -= this.deathChanceThreshold - this.health;
				this.health = this.deathChanceThreshold;
			} else {
				this.tempDamageCount += this.health;
				this.health = 0;
			}
		}

		if (chip && this.health < this.deathChanceThreshold) {
			this.tempDamageCount -= this.deathChanceThreshold - this.health;
			this.health = this.deathChanceThreshold;
		}

		dealtDamage -= this.health;
		return dealtDamage;
	}

	/**
	 * Does not use the defense stat
	 * @param {number} num
	 * @param {number} combo
	 */
	damageHealthAbs(num, combo, chip = false, scaling = 4) {
		if (num === 0 || this.health <= 0)
			return 0;

		let damage = num;
		let dealtDamage = this.health;
		this.health -= damage;
		this.tempDamageCount += damage;
		if (this.health < this.deathChanceThreshold && this.health > 0) {
			let tempRandom = this.world.random(0, this.deathChanceThreshold);
			if (tempRandom > this.deathChanceThreshold - this.health) {
				this.tempDamageCount -= this.deathChanceThreshold - this.health;
				this.health = this.deathChanceThreshold;
			} else {
				this.tempDamageCount += this.health;
				this.health = 0;
			}
		}

		if (chip && this.health < this.deathChanceThreshold) {
			this.tempDamageCount -= this.deathChanceThreshold - this.health;
			this.health = this.deathChanceThreshold;
		}

		dealtDamage -= this.health;
		return dealtDamage;
	}

	static comboScale(num, combo=1, scaling=4) {
		let shrink = scaling;//Lower number = less damaging combos ~15% loss per hit when shrink=4
		return max(1, num * (shrink / max(shrink, combo + shrink)));//Deal ~15% less damage for every consecutive move you hit in a combo
    }

	setWorld(world) {
		this.world = world;
	}

	setActionLag(attack) {
		this.actionLag = attack.duration;//Do this when the attack is a projectile
		if (attack.projectile) {
			this.actionLag -= attack.getActiveF();
		}
		this.frameDataRef = new AttackFrameData(attack);
	}

	/**
	 * 
	 * @param {Circle[]} circleArr
	 */
	setHurtbox(circleArr) {
		this.circles = circleArr;
		this.resetMain();
		this.rotateTo(this.dir);
	}

	/** @private */
	_updatePosition() {
		this.dx *= 0.98;
		this.dy *= 0.98;

		if (abs(this.dx) < 0.05)
			this.dx = 0;
		if (abs(this.dy) < 0.05)
			this.dy = 0;
		
		if (this.slowDownFrames) {
			this.x += this.dx * this.slowDownMax / this.slowDownMod;
			this.y += this.dy * this.slowDownMax / this.slowDownMod;
		} else {
			this.x += this.dx;
			this.y += this.dy;
		}

		if (this.targetPlayer && this.world.startCountdown <= 0 && (this.dx !== 0 || this.dy !== 0) && this.currentState.name !== "hitstun" && this.currentState.name !== "block") {
			let targetAngle = new Angle().setFromPoint(this.targetPlayer.x - this.x, this.targetPlayer.y - this.y);
			let moveAngle = new Angle().setFromPoint(this.dx, this.dy);
			let distance = Angle.distance(targetAngle, moveAngle);
			let magnitude = dist(0, 0, this.dx, this.dy);
			magnitude *= sqrt(magnitude);
			if (distance > PI / 2)
				this.timerPunishHealth += (distance - PI / 2) / PI / 8 * magnitude * this.timerPunishMult;//TODO possibly divide this by the number of rounds there are
		}

		if (this.controls.joystickHeld(0)) {
			this.moveCount++;
			if (this.moveCount === this.parryLeniency + 1) {
				this.parryCooldown = this.maxParryCooldown;
			} else if (this.moveCount <= this.parryLeniency) {
				this.bufferCooldown = true;
			} else if (this.bufferCooldown) {
				this.bufferCooldown = false;
				this.parryCooldown = this.maxParryCooldown;
			}
		} else {
			if (this.bufferCooldown) {
				this.bufferCooldown = false;
				this.parryCooldown = this.maxParryCooldown;
			}
			//if (this.moveCount > 0 && this.parryCooldown <= 0)
			//this.parryCooldown = this.maxParryCooldown;
			this.moveCount = 0;
		}
	}

	_updateHurtbox() {
		if (State.stateIsTag(this.currentState, "BASE") || !this.hurtboxes[this.currentState.name]) {
			this.requestHurtboxChange("BASE", this.hurtboxStateFrame);
		} else {
			if (State.stateIsTag(this.currentState, "loop hurtbox")) {
				this.requestHurtboxChangeLoop(this.currentState.name, this.hurtboxStateFrame);
			} else {
				this.requestHurtboxChange(this.currentState.name, this.hurtboxStateFrame);
			}
		}
	}
	
	/**
	 * 
	 * @param {State} state THIS SHOULD BE A LIPU STATE
	 * @param {string[]} actions THIS SHOULD BE A LIPU_ACTIONS
	 * @param {number} frames
	 * @param {string} animation
	 */
	startLipu(state, actions, frames, animation, damage) {
		this.sheet.setAnimation(animation);

		this.forceChangeState(state, actions);
		this.actionLag = frames;

		this.iFrames = frames;
		this.invTo = ["attack", "grab"];

		this.stunFrames = 24;

		this.damageHealth(damage, this.combo);
	}
	lipuLogic() {
		this.dx = 0;
		this.dy = 0;

		if (this.actionLag === 0) {
			let right = Angle.distance(this.controls.angle(0), this.right);
			let left = Angle.distance(this.controls.angle(0), this.left);
			if (this.controls.joystickPressed(0) && (left < PI * 0.3 || right < PI * 0.3)) {
				if (right < PI / 2) {
					this.sheet.setAnimation("Right Roll");
					this.changeState(this.states.RIGHTROLL, this.states.RIGHTROLL_ACTIONS);
				} else {
					this.sheet.setAnimation("Left Roll");
					this.changeState(this.states.LEFTROLL, this.states.LEFTROLL_ACTIONS);
				}

				this.actionLag = 20;
				this.iFrames = 19;
				this.invTo = ["attack", "grab"];
			} else {
				this.sheet.setAnimation("Neutral Roll");
				this.changeState(this.states.NEUTRALROLL, this.states.NEUTRALROLL_ACTIONS);

				this.actionLag = 14;
				this.iFrames = 13;
				this.invTo = ["attack", "grab"];
			}
		}
	}

	lipuSuliLogic() {
		if (this.currentState.name === "lipuSuli") {
			this.lipuLogic();
		}
	}
	lipuLiliLogic() {
		if (this.currentState.name === "lipuLili") {
			this.lipuLogic();
		}
	}

	rightRollLogic() {
		if (this.currentState.name === "rightRoll") {
			let wallDir = this.edgeAngle().changeValue(PI / 2);
			let speed = this.actionLag / 2 + 0.75;
			/*if (wallDir.getX() * wallDir.getY() > 0.1) {
				speed *= 4;
			}*/
			this.dx = wallDir.getX() * speed;
			this.dy = wallDir.getY() * speed;

			if (this.actionLag === 0) {
				this.iFrames = 8;
				this.invTo = ["grab"];
			}

			this.dir.value = wallDir.value - PI / 2;

			this.attackEndable();
		}
	}

	neutralRollLogic() {
		if (this.currentState.name === "neutralRoll") {
			if (this.actionLag === 0) {
				this.iFrames = 8;
				this.invTo = ["grab"];
			}

			this.attackEndable();
		}
	}

	leftRollLogic() {
		if (this.currentState.name === "leftRoll") {
			let wallDir = this.edgeAngle().changeValue(-PI / 2);
			let speed = this.actionLag / 2 + 0.75;
			/*if (wallDir.getX() * wallDir.getY() > 0.1) {
				speed *= 4;
			}*/
			this.dx = wallDir.getX() * speed;
			this.dy = wallDir.getY() * speed;

			if (this.actionLag === 0) {
				this.iFrames = 8;
				this.invTo = ["grab"];
			}

			this.dir.value = wallDir.value + PI / 2;

			this.attackEndable();
		}
	}

	hitStunLogic() {
		if (this.currentState.name === "hitstun") {
			if (this.nanpaLipu > 100) {
				this.world.sikeWawa.addMeterAll(0.02, 0, this);
				if (this.targetPlayer) {
					this.world.sikeWawa.addMeterAll(0.01, 0, this.targetPlayer);
				}
			}
			if (this.hitStun > 0) {
				this.dir.value += this.rotateVel;
				this.dx *= 0.3 ** (1 / this.hitStun);
				this.dy *= 0.3 ** (1 / this.hitStun);
				this.rotateVel *= 0.1 ** (1 / this.hitStun);
			}
			if (this.hitStun === 0) {
				this.forceChangeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
            }
        }
	}

	blockLogic() {
		if (this.currentState.name === "block") {
			if (this.hitStun > 0) {
				this.dir.value += this.rotateVel;
				this.rotateVel *= 0.1 ** (1 / this.hitStun);
			}
			if (this.hitStun <= this.OOBBlockFrame) {
				this.addAction("oob");
            }
			if (this.hitStun === 0) {
				this.forceChangeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
			}
		}
	}

	startWalk() {
		if (this.controls.joystickPressed(0) && this.currentState.name !== "walk") {
			this.changeState(this.states.WALK, this.states.WALK_ACTIONS);
			if (this.currentState.name === "walk")
				this.hurtboxStateFrame = 0;
		}
	}
	walkLogic() {
		if (this.currentState.name === "walk") {
			this.walkMovement(1, true, true);

			this.dash.combos = this.dash.maxCombos;

			this.sheet.requestAnimationChange("Walk");
		}
	}

	walkMovement(mult = 1, set = false, bool = false) {
		if (bool || this.controls.joystickPressed(0)) {
			let xBoost = cos(this.controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(this.controls.angle(0), this.dir) / PI);
			let yBoost = sin(this.controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(this.controls.angle(0), this.dir) / PI);

			if (set) {
				this.dx = this.slowWalk * (cos(this.controls.angle(0).value) * this.movementSpeed + xBoost) * mult;
				this.dy = this.slowWalk * (sin(this.controls.angle(0).value) * this.movementSpeed + yBoost) * mult;
			} else {
				this.x += this.slowWalk * (cos(this.controls.angle(0).value) * this.movementSpeed + xBoost) * mult;
				this.y += this.slowWalk * (sin(this.controls.angle(0).value) * this.movementSpeed + yBoost) * mult;
			}
		}
	}

	startStand() {
		if (!this.controls.joystickPressed(0)) {
			this.changeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
		}
	}
	standLogic() {
		if (this.currentState.name === "neutral") {
			this.dx = 0;
			this.dy = 0;
			this.dash.combos = this.dash.maxCombos;

			this.sheet.requestAnimationChange("Idle");
		}
	}

	clashLogic() {
		if (this.currentState.name === "clash") {
			this.attackEndable();
		}
	}

	startPowerDash() {
		if (((this.controls.clicked("dash") && this.controls.pressed("nasa")) || this.controls.clicked("powerDash")) && this.world.resetCounter <= 0) {
			let tempAngle = this.dir.value;
			if (this.controls.joystickPressed(0)) {
				tempAngle = this.controls.angle(0).value;
			}

			let sliceID = undefined;
			let distance = 100;
			for (let i in this.world.sikeWawa.slices) {
				let currentDistance = Angle.distance(tempAngle, this.world.sikeWawa.slices[i].direction);
				if (this.world.sikeWawa.slices[i].ownerIs(this) && this.world.sikeWawa.slices[i].isFull() && currentDistance < distance) {
					sliceID = i;
					distance = currentDistance;
				}
			}

			if (sliceID) {
				let bufferInfo = {//Create the buffer.info in order to send with the buffered input
					sliceID//The angle to dash towards
				};

				this.buffer.bufferStateChange(this.states.POWER_DASH, this.states.POWER_DASH_ACTIONS, bufferInfo, () => {
					this.endAttacks();
					this.world.removeFinishedAttacks();

					let slice = this.world.sikeWawa.slices[this.buffer.info.sliceID];

					let iFramePunish = 1;

					this.actionLag = this.powerDash.frames;
					if (State.stateIs(this.currentState, "hitstun") && this.hitStun > 0) {
						this.slowDownMax = 3;
						this.slowDownMod = 10;
						this.slowDownFrames = floor(this.powerDash.frames * this.slowDownMod / this.slowDownMax);

						iFramePunish = this.powerDash.reversalIFrameMult;

						slice.value *= -1;

						this.dx = cos(slice.direction.value) * (this.powerDash.speed);
						this.dy = sin(slice.direction.value) * (this.powerDash.speed);

						this.world.ps.createParticle("powerDashSlow", this, this.x, this.y, 200, 200, this.dir, true);

						this.playSound(assetManager.sounds.powerDashSlow);
					} else {
						this.world.ps.createParticle("powerDashEffect", this, this.x, this.y, 200, 200, this.dir, true);

						this.playSound(assetManager.sounds.powerDash, 2);
					}
					if (this.currentState.name === "dash") {
						this.dx /= 3;
						this.dy /= 3;
					} else {
						this.dx /= 2;
						this.dy /= 2;
					}

					this.hitStun = 0;

					this.dx += cos(slice.direction.value) * (this.powerDash.speed);
					this.dy += sin(slice.direction.value) * (this.powerDash.speed);

					if (this.world.resetCounter <= 0)
						slice.useMeter(this, 6);

					this.sheet.setAnimation("Power Dash");

					this.iFrames = Math.floor(this.powerDash.iFrames * iFramePunish);
					this.invTo = ["attack", "grab"];

					if (this.targetPlayer) {
						this.stunFrames = 8;
						this.targetPlayer.stunFrames = 8;

						if (this.targetPlayer.hitStun > 0) {
							this.targetPlayer.comboProration = min(this.targetPlayer.comboProration, -this.targetPlayer.combo + this.powerDash.proration);

							this.targetPlayer.hitStun += this.powerDash.addHitstunFrames;
							this.targetPlayer.actionLag += this.powerDash.addHitstunFrames;

							this.targetPlayer.slowDownFrames = this.targetPlayer.hitStun;
							this.targetPlayer.slowDownMax = 3;
							this.targetPlayer.slowDownMod = 5;
						}
					}
				});
			}
		}
	}
	powerDashLogic() {
		if (this.currentState.name === "power dash") {
			this.turnSpeedModifier = this.powerDash.turnSpeedBoost;

			this.attackEndable();
		}
	}

	startDash() {
		if ((this.controls.dashCancelHold && !this.controls.pressed("dash") && this.currentState.name === "dash" && this.actionLag >= this.dash.cancelFrame) || (!this.controls.dashCancelHold && this.controls.clicked("dash"))) {
			if (this.buffer.contains(this.states.DASH) || this.currentState.name === "dash") {
				//let currentAngle = new Angle().setFromPoint(this.dx, this.dy);
				//let angleDist = Angle.distance(this.sinpin, currentAngle);

				//if(angleDist > 3 * PI / 8)//This would prevent sidestepping forwards
				this.startDashCancel();
			}
		}
		if (this.controls.clicked("dash")) {
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
			});
		}
	}
	dashLogic() {
		if (this.currentState.name === "dash") {
			if (this.actionLag < this.dash.turnFrame)
				this.turnSpeedModifier = this.dash.turnSpeedBoost;
			if (this.actionLag === this.dash.invFirstFrame) {
				this.iFrames = this.dash.iFrames;
				this.invTo = this.dash.invTo;
			}
			if (this.actionLag > this.dash.frames - 6) {
				this.x -= this.dx;
				this.y -= this.dy;
			}
			if (this.actionLag < this.dash.regularFrictionFrame) {//27
				this.dx *= this.dash.regularFriction;
				this.dy *= this.dash.regularFriction;
			}
			if (this.actionLag === this.dash.cancelFrame) {
				this.addAction("dash cancel");
            }
			if (this.actionLag === this.dash.cancelLastFrame) {
				this.removeAction("dash cancel");
			}//flag
			if (this.actionLag === this.dash.frames - this.dash.dashAttackStartDelay) {
				this.addAction("dash attack");
			}
			if (this.actionLag === this.dash.dashAttackLastFrame) {
				this.removeAction("dash attack");
            }
			if (this.actionLag === this.dash.attackCancelFrame) {
				this.addAction("lili");
				this.addAction("suli");
				this.addAction("poka lili");
				this.addAction("poka suli");
				this.addAction("NN");
				this.addAction("RN");
				this.addAction("LN");
				this.addAction("MN");
			}
			if (this.actionLag === this.dash.comboDashFrame && this.dash.combos > 0) {
				this.addAction("dash");
				this.dash.combos--;
			}
			if (this.actionLag === this.dash.grabCancelFrame) {
				this.addAction("SN");
			}
			if (this.actionLag === this.dash.blockCancelFrame) {
				this.addAction("block");
			}
			if (this.actionLag === 1) {
				this.dx = 0;
				this.dy = 0;
				this.dash.combos = this.dash.maxCombos;
			}
			this.attackEndable();
		}
	}

	startDashCancel() {
		this.buffer.bufferStateChange(this.states.DASH_CANCEL, this.states.DASH_CANCEL_ACTIONS, {}, () => {


			this.actionLag = this.dash.cancelFrames;
			let angle = new Angle().setFromPoint(this.dx, this.dy);

			this.dx = (this.dash.cancelSpeed - this.dash.currentPenalty * this.dash.cancelBackPenaltyMult) * angle.getX();
			this.dy = (this.dash.cancelSpeed - this.dash.currentPenalty * this.dash.cancelBackPenaltyMult) * angle.getY();

			this.sheet.setAnimation("Dash Cancel");

			this.iFrames = 0;
		});
	}
	dashCancelLogic() {
		if (this.currentState.name === "dash cancel") {
			this.dx *= this.dash.cancelDecay;
			this.dy *= this.dash.cancelDecay;
			if (this.actionLag === this.dash.cancelAttackCancelFrame) {
				this.addAction("attack");
			}
			if (this.actionLag === this.dash.cancelComboDashFrame && this.dash.combos > 0) {
				this.addAction("dash");
				this.dash.combos--;
			}
			if (this.actionLag === this.dash.cancelFrames - 3) {
				this.iFrames = this.dash.cancelIFrames;
				this.invTo = ["attack"];
			}
			if (this.actionLag === 1) {
				this.dx = 0;
				this.dy = 0;
				this.dash.combos = this.dash.maxCombos;
            }
			this.attackEndable();
		}
    }

	startDashAttack() {
		/*let attack = this.controls.clicked("lili") || this.controls.clicked("suli") || this.controls.clicked("pokaLili") || this.controls.clicked("pokaSuli");

		if (attack && (this.currentState.name === "dash" || this.buffer.contains(this.states.DASH))) {

			let bufferInfo = {

			};

			this.buffer.bufferStateChange(this.states.DASH_ATTACK, this.states.DASH_ATTACK_ACTIONS, bufferInfo, () => {

				let sweet1 = new PriorityCircle(0, 0, 50, 0);
				let sour1 = new PriorityCircle(0, 0, 70, 1);
				let circles = [sweet1, sour1];

				let sweet = new AttackProperties().setDamage(75).setHitStun(30, 16).setLaunch(5).setAngleValue(this.dir.value);
				let sour = new AttackProperties().setDamage(60).setHitStun(29, 15).setLaunch(5).setAngleValue(this.dir.value);
				let prop = [sweet, sour];

				let attack = new Attack(this, circles, prop).setStartupF(10).setActiveF(6).setEndF(24);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.actionLag = attack.duration;
			});
		}*/
		let attack = this.controls.clicked("lili") || this.controls.clicked("suli") || this.controls.clicked("pokaLili") || this.controls.clicked("pokaSuli");

		if (attack && (this.currentState.name === "dash" || this.buffer.contains(this.states.DASH))/* && this.canChangeState(this.states.DASH_ATTACK)*/) {

			let bufferInfo = this.DASH_ATTACK.bufferInfo ? this.DASH_ATTACK.bufferInfo.bind(this)(): { };

			this.buffer.bufferStateChange(this.states.DASH_ATTACK, this.states.DASH_ATTACK_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("dash attack");
				this.iFrames = 0;

				let attack = this.DASH_ATTACK.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				if (this.DASH_ATTACK.startAttack)
					this.DASH_ATTACK.startAttack(this);
			});
		}
	}
	dashAttackLogic() {
		if (State.stateIs(this.currentState, "dash attack")) {
			this.dx *= this.dash.friction;
			this.dy *= this.dash.friction;
			//this.turnSpeedModifier = 0;
			this.attackEndable();
		}
	}

	//Start of lili attacks
	startNL() {
		if (this.controls.clicked("lili") && this.pressedNeutral()) {

			let bufferInfo = this.NL.bufferInfo ? this.NL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NL, this.states.NL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NL");

				let attack = this.NL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NL.startAttack)
					this.NL.startAttack(this, attack);

				this.setActionLag(attack);
			});
		}
	}
	NLLogic() {
		if (this.currentState.name === "NL") {
			this.attackEndable();
		}
	}

	startSL() {
		if (this.controls.clicked("lili") && this.pressedSinpin()) {

			let bufferInfo = this.SL.bufferInfo ? this.SL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SL, this.states.SL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SL");

				let attack = this.SL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SL.startAttack)
					this.SL.startAttack(this, attack);

				this.setActionLag(attack);
			});
		}
	}
	SLLogic() {
		if (this.currentState.name === "SL") {
			this.attackEndable();
		}
	}

	startRL() {
		if (this.controls.clicked("lili") && this.pressedRight()) {

			let bufferInfo = this.RL.bufferInfo ? this.RL.bufferInfo.bind(this)() : {};

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
	RLLogic() {
		if (this.currentState.name === "RL") {
			this.attackEndable();
		}
	}

	startLL() {
		if (this.controls.clicked("lili") && this.pressedLeft()) {

			let bufferInfo = this.LL.bufferInfo ? this.LL.bufferInfo.bind(this)() : {};

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
	LLLogic() {
		if (this.currentState.name === "LL") {
			this.attackEndable();
		}
	}

	startML() {
		if (this.controls.clicked("lili") && this.pressedMonsi()) {

			let bufferInfo = this.ML.bufferInfo ? this.ML.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.ML, this.states.ML_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("ML");

				let attack = this.ML.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.ML.startAttack)
					this.ML.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	MLLogic() {
		if (this.currentState.name === "ML") {
			this.attackEndable();
		}
	}

	//Start of suli attacks
	startNS() {
		if (this.controls.clicked("suli") && this.pressedNeutral()) {

			let bufferInfo = this.NS.bufferInfo ? this.NS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NS, this.states.NS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NS");

				let attack = this.NS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NS.startAttack)
					this.NS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	NSLogic() {
		if (this.currentState.name === "NS") {
			this.attackEndable();
		}
	}

	startSS() {
		if (this.controls.clicked("suli") && this.pressedSinpin()) {

			let bufferInfo = this.SS.bufferInfo ? this.SS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SS, this.states.SS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SS");

				let attack = this.SS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SS.startAttack)
					this.SS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	SSLogic() {
		if (this.currentState.name === "SS") {
			this.attackEndable();
		}
	}

	startRS() {
		if (this.controls.clicked("suli") && this.pressedRight()) {

			let bufferInfo = this.RS.bufferInfo ? this.RS.bufferInfo.bind(this)() : {};

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
	RSLogic() {
		if (this.currentState.name === "RS") {
			this.attackEndable();
		}
	}

	startLS() {
		if (this.controls.clicked("suli") && this.pressedLeft()) {

			let bufferInfo = this.LS.bufferInfo ? this.LS.bufferInfo.bind(this)() : {};

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
	LSLogic() {
		if (this.currentState.name === "LS") {
			this.attackEndable();
		}
	}

	startMS() {
		if (this.controls.clicked("suli") && this.pressedMonsi()) {

			let bufferInfo = this.MS.bufferInfo ? this.MS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MS, this.states.MS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MS");

				let attack = this.MS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MS.startAttack)
					this.MS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	MSLogic() {
		if (this.currentState.name === "MS") {
			this.attackEndable();
		}
	}

	//Start of poka lili attacks
	startNPL() {
		if (this.controls.clicked("pokaLili") && this.pressedNeutral()) {

			let bufferInfo = this.NPL.bufferInfo ? this.NPL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NPL, this.states.NPL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NPL");

				let attack = this.NPL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NPL.startAttack)
					this.NPL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
    }
	NPLLogic() {
		if (this.currentState.name === "NPL") {
			this.attackEndable();
        }
	}

	startSPL() {
		if (this.controls.clicked("pokaLili") && this.pressedSinpin()) {

			let bufferInfo = this.SPL.bufferInfo ? this.SPL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SPL, this.states.SPL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SPL");

				let attack = this.SPL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SPL.startAttack)
					this.SPL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	SPLLogic() {
		if (this.currentState.name === "SPL") {
			this.attackEndable();
		}
	}

	startRPL() {
		if (this.controls.clicked("pokaLili") && this.pressedRight()) {

			let bufferInfo = this.RPL.bufferInfo ? this.RPL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.RPL, this.states.RPL_ACTIONS, bufferInfo, () => {
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
	RPLLogic() {
		if (this.currentState.name === "RPL") {
			this.attackEndable();
		}
	}

	startLPL() {
		if (this.controls.clicked("pokaLili") && this.pressedLeft()) {

			let bufferInfo = this.LPL.bufferInfo ? this.LPL.bufferInfo.bind(this)() : {};

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
	LPLLogic() {
		if (this.currentState.name === "LPL") {
			this.attackEndable();
		}
	}

	startMPL() {
		if (this.controls.clicked("pokaLili") && this.pressedMonsi()) {

			let bufferInfo = this.MPL.bufferInfo ? this.MPL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MPL, this.states.MPL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MPL");

				let attack = this.MPL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MPL.startAttack)
					this.MPL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	MPLLogic() {
		if (this.currentState.name === "MPL") {
			this.attackEndable();
		}
    }

	//Start of poka suli attacks
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
	NPSLogic() {
		if (this.currentState.name === "NPS") {
			this.attackEndable();
		}
	}

	startSPS() {
		if (this.controls.clicked("pokaSuli") && this.pressedSinpin()) {

			let bufferInfo = this.SPS.bufferInfo ? this.SPS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SPS, this.states.SPS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SPS");

				let attack = this.SPS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SPS.startAttack)
					this.SPS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	SPSLogic() {
		if (this.currentState.name === "SPS") {
			this.attackEndable();
		}
	}
	
	startRPS() {
		if (this.controls.clicked("pokaSuli") && this.pressedRight()) {

			let bufferInfo = this.RPS.bufferInfo ? this.RPS.bufferInfo.bind(this)() : {};

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
	RPSLogic() {
		if (this.currentState.name === "RPS") {
			this.attackEndable();
		}
	}

	startLPS() {
		if (this.controls.clicked("pokaSuli") && this.pressedLeft()) {

			let bufferInfo = this.LPS.bufferInfo ? this.LPS.bufferInfo.bind(this)() : {};

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
	LPSLogic() {
		if (this.currentState.name === "LPS") {
			this.attackEndable();
		}
	}

	startMPS() {
		if (this.controls.clicked("pokaSuli") && this.pressedMonsi()) {

			let bufferInfo = this.MPS.bufferInfo ? this.MPS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MPS, this.states.MPS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MPS");

				let attack = this.MPS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MPS.startAttack)
					this.MPS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	MPSLogic() {
		if (this.currentState.name === "MPS") {
			this.attackEndable();
		}
	}

	//Start of nasa attacks
	startNN() {
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {

			let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NN");

				let attack = this.NN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NN.startAttack)
					this.NN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	NNLogic() {
		if (this.currentState.name === "NN") {
			this.attackEndable();
		}
    }

	startSN() {
		if (this.controls.clicked("nasa") && this.pressedSinpin()) {

			let bufferInfo = this.SN.bufferInfo ? this.SN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SN, this.states.SN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SN");

				let attack = this.SN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SN.startAttack)
					this.SN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	SNLogic() {
		if (this.currentState.name === "SN") {
			this.attackEndable();
		}
	}

	startRN() {
		if (this.controls.clicked("nasa") && this.pressedRight()) {

			let bufferInfo = this.RN.bufferInfo ? this.RN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.RN, this.states.RN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RN");

				let attack = this.RN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RN.startAttack)
					this.RN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	RNLogic() {
		if (this.currentState.name === "RN") {
			this.attackEndable();
		}
    }

	startLN() {
		if (this.controls.clicked("nasa") && this.pressedLeft()) {

			let bufferInfo = this.LN.bufferInfo ? this.LN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.LN, this.states.LN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LN");

				let attack = this.LN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LN.startAttack)
					this.LN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	LNLogic() {
		if (this.currentState.name === "LN") {
			this.attackEndable();
		}
	}

	startMN() {
		if (this.controls.clicked("nasa") && this.pressedMonsi()) {

			let bufferInfo = this.MN.bufferInfo ? this.MN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MN, this.states.MN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MN");

				let attack = this.MN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MN.startAttack)
					this.MN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	MNLogic() {
		if (this.currentState.name === "MN") {
			this.attackEndable();
		}
	}

	grabLogic() {
		if (this.currentState.name === "grab") {
			if (this.targetPlayer?.currentState.name !== "grabbed") {
				this.endAttacks();
			}

			this.turnSpeedModifier = 0.5;

			if (this.actionLag === 39) {
				this.addAction("dash", "lili", "suli", "poka lili", "poka suli");
            }

			if (this.actionLag === 10 && this.targetPlayer?.currentState.name === "grabbed") {
				this.actions = [];
				if (this.targetPlayer) {
					this.targetPlayer.iFrames = 0;
				}
			}
			this.attackEndable();
        }
	}

	grabbedLogic() {
		if (this.currentState.name === "grabbed") {
			if (this.targetPlayer?.currentState.name === "dash" || this.targetPlayer?.currentState.name === "power dash")
				this.actionLag = 0;

			this.turnSpeedModifier = 0.5;

			if (this.actionLag === 40) {
				this.addAction("oob");
            }

			if (this.actionLag === 33) {
				this.addAction("SN");
			}

			if (this.actionLag === 10) {
				this.actions = [];
				this.iFrames = 0;
            }
			this.attackEndable();
		}
	}

	deadLogic() {
		if (this.currentState.name === "dead") {
			if (this.actionLag > 0) {
				this.dx *= 0.95;
				this.dy *= 0.95;
			} else {
				this.dx *= 0.98;
				this.dy *= 0.98;
			}
		}
	}

	attackEndable() {
		if (this.actionLag === 0 && this.currentState.name !== "neutral") {
			this.forceChangeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
			this.sheet.setAnimation("neutral");
		}
    }

	runNoStun() {
		this.controls.updateInGame();//
		/*if (this.x <= 100) {//debug
			this.controls.joysticks[0].x = -1;
			this.controls.joysticks[0].y = -1;
			this.controls.joysticks[0].heldFrames = 5;
			if (this.currentState.name === "block" && this.hitStun <= 9) {
				this.controls.buttons.nasa.clicked = true;
			}
		}*/
		if (this.canMove) {
			this.startWalk();
			this.startStand();
			
			this.startDash();
			this.startPowerDash();
		}

		if (this.canAttack && this.stunFrames <= 10 && this.cancelWait <= 10) {
			this.startDashAttack();

			if (!this.buffer.containsStateTag("dash attack") || !this.currentState.name === "dash" || !this.buffer.contains(this.states.DASH)) {
				this.startNL();
				this.startSL();
				this.startRL();
				this.startLL();
				this.startML();

				this.startNPL();//
				this.startSPL();
				this.startRPL();
				this.startLPL();
				this.startMPL();

				this.startNS();
				this.startSS();
				this.startRS();
				this.startLS();
				this.startMS();

				this.startNPS();
				this.startSPS();
				this.startRPS();
				this.startLPS();
				this.startMPS();

				this.startNN();
				this.startSN();
				this.startRN();
				this.startLN();
				this.startMN();
			}
			if (this.currentAttackReferences.length > 0) {
				this.mostRecentAttackReference = this.currentAttackReferences[this.currentAttackReferences.length - 1];
			} else {
				this.mostRecentAttackReference = null;
			}
		}

		this.generalLogicNoStun();
    }

	/** */
	run() {
		this._updatePosition();//This should always be at the very beginning of the run function

		this.countDownValues();

		this.lipuSuliLogic();
		this.lipuLiliLogic();

		this.rightRollLogic();
		this.neutralRollLogic();
		this.leftRollLogic();

		this.hitStunLogic();
		this.blockLogic();

		this.walkLogic();
		this.standLogic();

		this.clashLogic();

		this.powerDashLogic();
		this.dashLogic();
		this.dashCancelLogic();

		this.dashAttackLogic();

		this.NLLogic();
		this.SLLogic();
		this.RLLogic();
		this.LLLogic();
		this.MLLogic();

		this.NPLLogic();
		this.SPLLogic();
		this.RPLLogic();
		this.LPLLogic();
		this.MPLLogic();

		this.NSLogic();
		this.SSLogic();
		this.RSLogic();
		this.LSLogic();
		this.MSLogic();

		this.NPSLogic();
		this.SPSLogic();
		this.RPSLogic();
		this.LPSLogic();
		this.MPSLogic();

		this.NNLogic();
		this.SNLogic();
		this.RNLogic();
		this.LNLogic();
		this.MNLogic();

		this.grabLogic();
		this.grabbedLogic();

		this.deadLogic();

		this.generalLogic();

		/*if (Angle.distance(this.controls.angle(0), Angle.RIGHT) < PI / 8 && this.controls.joysticks[0].pressed()) {
			this.x++;
		}*/

		this.removeAttackReferences();

		if(this.cancelWait <= 0)
			this.buffer.update();

		if (!debug.negateHurtboxShifting)
			this._updateHurtbox();

		this.runSheets();
	}

	/** @override */
	runSheets() { }

	/** @override */
	generalLogic() { }
	/** @override */
	generalLogicNoStun() { }

	/** Gets rid of attacks that don't need to be referenced anymore */
	removeAttackReferences() {
		for (let i = this.currentAttackReferences.length - 1; i >= 0; i--) {
			if (this.currentAttackReferences[i].duration <= 0)
				this.currentAttackReferences.splice(i, 1);
		}
	}

	setAngleRefs(inputAngleType) {
		if (inputAngleType === undefined)
			inputAngleType = this.controls.inputAngleType;
		let angle
		if (this.targetPlayer === null) {
			angle = this.dir;
		} else {
			angle = new Angle().setFromPoint(this.targetPlayer.x - this.x, this.targetPlayer.y - this.y);
		}
		if (inputAngleType === "relative")
			angle = this.dir;
		this.sinpin = new Angle(angle.value);
		this.right = new Angle(angle.value + PI / 2);
		this.left = new Angle(angle.value - PI / 2);
		this.monsi = new Angle(angle.value + PI);
    }

	/**
	 * Adds an action(s) to the current action list
	 * @param {string} name
	 */
	addAction(...names) {

		let output = [];
		for (let i in this.actions) {
			let addBool = true;
			for (let u in names) {//Don't add an action that hasn't already been added
				if (names[u] === this.actions[i])
					addBool = false;
			}
			if(addBool)
				output.push(this.actions[i]);
		}
		for (let i in names) {
			output.push(names[i]);
		}

		this.actions = output;
	}

	/**
	 * Remove an action(s) to the current action list
	 * @param {string} name
	 */
	removeAction(...names) {
		let output = [];
		for (let i in this.actions) {
			let add = true;
			for (let u in names) {
				if (this.actions[i] === names[u])
					add = false;
			}
			if(add)
				output.push(this.actions[i]);
		}

		this.actions = output;
	}

	countDownValues() {
		if (this.parryCooldown > 0)
			this.parryCooldown--;
		if (this.slowWalkFrames > 0) {
			this.slowWalkFrames--;
		} else {
			this.slowWalk = 1;
		}
		if (this.rotateSlowDownFrames > 0) {
			this.rotateSlowDownFrames--;
		}
		if (this.blockLeniencyFrames > 0) {
			this.blockLeniencyFrames--;
		}
		if (this.currentState.name !== "hitstun")
			this.nanpaLipu = max(0, this.nanpaLipu - this.lipuTickRate);
		if (this.actionLag > 0) {
			this.actionLag--;
		}
		if (State.stateIsTag(this.currentState, "BASE")) {
			this.hurtboxStateFrame = 0;
		} else {
			this.hurtboxStateFrame++;//This is for advancing the hurtbox shifting animation (4 frames = 1 advance)
		}
		if (this.iFrames > 0) {
			this.iFrames--;
			if (this.iFrames === 0)
				this.invTo = [];
		}
		if (this.hitStun > 0)
			this.hitStun--;
		if (this.cancelWait > 0) {
			this.cancelWait--;
			if (this.cancelWait === 0) {
				this.addAction(...this.cancelActions);
				this.cancelActions = [];
			}
		}
		if (this.targetPlayer && this.targetPlayer.combo <= 0)
			this.moveStaling.update();
		if (this.currentState.name !== "grabbed" && this.currentState.name !== "hitstun" && this.currentState.name !== "block") {
			if (this.tempDamageCount !== 0 && this.combo > 1) {//Debug (I think?)
				let particle = new Particle(undefined).setPlayer(this).setPosition(this.x, this.y).setDraw((g) => {
					g.image(particle.image, 0, 0);
				}).setLogic(() => {
					particle.currentFrame++;
					if (particle.currentFrame > 180)
						particle.currentFrame = 0;
				});
				particle.count = this.tempDamageCount;
				particle.combo = this.combo;

				let tempImage = createGraphics(100, 100);
				tempImage.noStroke();
				tempImage.fill(243, 34, 13);
				tempImage.textAlign(CENTER, CENTER);
				tempImage.textSize(40 + (particle.currentFrame % particle.count * 3) / 12);
				tempImage.textFont(assetManager.fonts.asuki);
				tempImage.text(round(particle.count) + "󱤀", 50, 50);
				tempImage.textSize(30 + (particle.currentFrame / 2 % particle.count * 3) / 14);
				tempImage.text("󱤟" + particle.combo, 50, 80);
				particle.image = tempImage.get();
				tempImage.remove();

				this.world.ps.particles.push(particle);
			}

			this.tempDamageCount = 0;
			this.combo = 0;
			this.comboProration = 0;
		}
    }

	setDir(players) {
		this.dr = 0;
		if (State.stateIsTag(this.currentState, "rotateable")) {
			if (players.length > 1) {
				let distance = 999999;
				let tPlayer;//Target player; reference to the closest player
				for (let i in players) {
					let p = players[i];
					if (p !== this) {
						if (dist(this.x, this.y, p.x, p.y) < distance) {
							distance = min(distance, dist(this.x, this.y, p.x, p.y));
							tPlayer = p;
						}
					}
				}
				
				if (tPlayer)
					this.targetPlayer = tPlayer;

				let targetAngle = new Angle().setFromPoint(this.targetPlayer.x - this.x, this.targetPlayer.y - this.y);
				let dif = Angle.compare(this.dir, targetAngle);

				//print(this.dir.value + dif * this.turnSpeed);

				//this.dir.changeValue(this.dr);
				let slowDown = (this.rotateSlowDownFrames > 0 ? this.rotateSlowDown : 1);
				this.dr = constrain(dif, -PI / 2, PI / 2) * max(0, this.turnSpeed + this.turnSpeedModifier) * slowDown;
				this.dir.changeValue(this.dr);
				this.dir.normalize();
				//this.dir.setValue(this.dir.value + dif * (this.turnSpeed + this.turnSpeedModifier));
				//this.dir.setFromPoint(tPlayer.x - this.x, tPlayer.y - this.y);
			} else if (this.controls.joystickPressed(0)) {
				this.dir = this.controls.angle(0);
			}
		}
		this.rotateTo(this.dir);
	}

	dirTo(destinationAngle, speed, tolerance=0.2) {
		let angle = Angle.compare(destinationAngle, this.dir);

		if (angle < -tolerance) {
			this.dir.value += speed;
		}
		if (angle < tolerance) {
			this.dir.value -= speed;
		}
	}

	pressedNeutral() {
		return !this.controls.joystickPressed(0);
    }

	pressedSinpin() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.sinpin) <= PI / 4;
	}

	pressedLeft() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.left) <= PI / 4;
	}

	pressedRight() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.right) <= PI / 4;
	}

	pressedMonsi() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.monsi) <= PI / 4;
	}

	static drawMenu(g, characterClass, x, y, width = characterClass.getMenuImage().width, height = characterClass.getMenuImage().height) {
		g.image(characterClass.getMenuImage(), x, y, width, height);
	}

	serialize() {
		let copy = (({
			hurtboxes,
			headNoun,
			selectScreenSizeOffset,
			selectScreenYOffset,
			selectScreenRotation,
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
			invTo,
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
			currentlyPlaying,
			...o
		}) => defaultSerialize(o))(this);

		this.serializeCopyHelp(copy);

		return copy;
	}

	serializeCopyHelp(copy) {
		copy.invTo = [];
		for (let i in this.invTo) {
			copy.invTo.push(this.invTo[i]);
		}

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
			if (!this.mostRecentAttackReference)
				copy.mostRecentAttackReference = -1;
		} else {
			copy.mostRecentAttackReference = -1;
		}
	}

	deserialize(obj) {
		defaultCopyValues(this, obj, ["circles", "currentState", "invTo", "actions", "cancelActions", "controls", "currentAttackReferences", "mostRecentAttackReference", "frameDataRef"]);

		this.deserializeHelp(obj);
	}

	deserializeHelp(obj) {
		this.circles = [];
		this.copyHurtbox(obj.circles, true);

		if (!obj.frameDataRef) {
			this.frameDataRef = null;
		} else {
			this.frameDataRef = new AttackFrameData();
			this.frameDataRef.deserialize(obj.frameDataRef, this.world);
		}

		this.invTo = [];
		for (let i in obj.invTo) {
			this.invTo.push(obj.invTo[i]);
		}

		this.currentState = obj.currentState;
		this.actions = [];
		for (let i in obj.actions) {
			this.actions.push(obj.actions[i]);
		}
		this.cancelActions = [];
		for (let i in obj.cancelActions) {
			this.cancelActions.push(obj.cancelActions[i]);
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

class DefaultAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
	}

	static createAttack(player) {
		let cancelOptions = ["lili", "suli", "poka lili", "poka suli", "nasa", "dash"];

		let sweet1 = new PriorityCircle(20, 0, 70, 0).setVelocity(5, 0);
		let sweet2 = new PriorityCircle(40, 0, 50, 0).setVelocity(5, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 3, 1.1).setHitStun(20, 5).setStunFrames(11).setWallPushback(4, 1).setCancelWait(3);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(7).setActiveF(4).setEndF(22);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}
}