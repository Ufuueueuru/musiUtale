/* Sample creation of Attack
	let sweet1 = new PriorityCircle(0, 0, 10, 0);
	let sour1 = new PriorityCircle(10, 0, 14, 1).setVelocity(0, 1, -1, 1);
	let circles = [sweet1, sour1];

	let sweet = new AttackProperties().setDamage(5);
	let sour = new AttackProperties().setDamage(3);
	let prop = [sweet, sour];

	let attack = new Attack(player, circles, prop).setActiveF(5);
*/
//Use this line to see all proration properties of each attack of a character (primitive - does not work for command grabs)
//["DASH_ATTACK", "NL", "SL", "RL", "LL", "ML", "NS", "SS", "RS", "LS", "MS", "NPL", "SPL", "RPL", "LPL", "MPL", "NPS", "SPS", "RPS", "LPS", "MPS", "NN", "SN", "RN", "LN", "MN"].forEach((a) => {currentScreen.player1[a].createAttack(currentScreen.player1).properties.forEach((b) => print(b.nanpaLipu + ", " + a))})
class Attack extends Hitcircle {
	constructor(player, circles = [], props = []) {
		super(player.x, player.y, circles);

		this.name = "generic";

		/** @type {World} */
		this.world = player.world;

		/** @type {Angle} */
		this.dir = player.dir;

		/** @type {number} */
		this.dx = 0;

		/** @type {number} */
		this.dy = 0;

		/** @type {AttackProperties[]} */
		this.properties = props;

		/** @type {number} 5 is the highest priority */
		this.clashPriority = 0;

		/** @type {boolean} True if the attack can clash */
		this.clashable = true;

		/** @type {boolean} Becomes true when the attack is negated by a clash */
		this.clashNegate = false;

		/** @type {boolean} True if the attack should have projectile properties */
		this.projectile = false;

		/** @type {number} How many times an attack can hit an opponent */
		this.multi = 1;
		/** @type {number} this.multi except the value does not change when a hit lands (This is for limiting the number of the same sound playing at once) */
		this.multiConst = 1;
		/** @type {number} How many frames to wait between rehits */
		this.rehitRate = 5;
		/** @type {number} How much launch the hits of a multi-hit do before the last hit */
		this.multiLaunch = 1;

		/** @type {Player} */
		this.player = player;
		/** @type {boolean} */
		this.follow = true;//If the hitbox is locked onto the player position

		/** @type {boolean} */
		this.rotateable = false;

		/** @type {Player[]} @private Which players have already been hit with an attack */
		this._hitPlayers = [];

		/** @type {number[]} @private Counts for already hit players to be hit by multi-hits */
		this._hitPlayerCounts = [];

		/** @type {boolean} True once the attack has connected with an opponent */
		this.hitPlayerBool = false;

		/** @type {number} @private */
		this._startupF = 0;
		/** @type {number} @private */
		this._activeF = 0;
		/** @type {number} @private */
		this._endF = 0;

		/** @type {number} */
		this.duration = 0;

		this.frameDataRef = new AttackFrameData(this);
	}

	/** */
	run() {
		this.logic();

		this.duration--;

		if (this._startupF > 0) {
			this._startupF--;
		} else if (this._activeF > 0) {
			this._activeF--;
		} else {
			this._endF--;
		}

		this.countRehits();

		if (this._startupF <= 0)
			this.move();

		this.followPlayer();
	}

	/** @override */
	end() {
		this.cleanup();
	}

	/**
	 * 
	 * @param {AttackProperties} property
	 * @param {Player} p
	 */
	confirmAttack(property, circle, pCircle, p) {
		if ((p.iFrames <= 0 || !p.invTo.includes("attack"))) {
			this.multi--;//Hit the opponent, decrease number of multi-hits left
			if (this.getActiveF() <= this.rehitRate) {
				this.multi = 0;
			}
		}
		let counterHit = p.combo === 0 && (p.counterHittable || p.mostRecentAttackReference?.getActiveF() > 0 || p.mostRecentAttackReference?.getStartupF() > 0);
		let punishHit = p.combo === 0 && p.mostRecentAttackReference?.getStartupF() <= 0 && p.mostRecentAttackReference?.getActiveF() <= 0;
		let dealtDamage;
		let hitBool = false;
		if (property.grab) {
			if ((p.iFrames <= 0 || !p.invTo.includes("grab"))) {//grabbed the opponent
				hitBool = true;
				p.forceChangeState(p.states.GRABBED, p.states.GRABBED_ACTIONS);
				this.player.forceChangeState(this.player.states.GRAB, this.player.states.GRAB_ACTIONS);

				p.actionLag = 50;
				p.dx = 0;
				p.dy = 0;

				this.player.actionLag = 50;
				this.player.dx = 0;
				this.player.dy = 0;

				p.iFrames = 120;
				p.invTo = ["grab"];

				this.player.iFrames = 0;

				p.sheet.setAnimation("Grabbed");
				this.player.sheet.setAnimation("Grab");

				this.player.playSound(assetManager.sounds.grab);

				//this.world.sikeWawa.addMeterAll(1, -0.5, this.player);
				this.world.sikeWawa.subtractMeter(4, 1, p);

				dealtDamage = p.damageHealth(property.grabInitialDamage, p.combo * 4 + p.comboProration * 4, true, property.scaling);

				let angle = new Angle().setFromPoint(this.player.x - p.x, this.player.y - p.y);
				let distance = dist(this.player.x, this.player.y, p.x, p.y);
				p.x += angle.getX() * (distance - this.player.collideRadius - p.collideRadius);
				p.y += angle.getY() * (distance - this.player.collideRadius - p.collideRadius);

				//Creating the attack that will come
				let sour1 = new PriorityCircle(50, 0, 100, 0);
				let circles = [sour1];

				let sour = property.setGrab(0, false).setBlockBreak();
				let prop = [sour];

				let comingAttack = new Attack(this.player, circles, prop).setClashPriority(0).setStartupF(40).setActiveF(1).setEndF(10);

				this.player.addCurrentAttack(comingAttack);

				comingAttack.rotateTo(this.player.dir);

				this.world.addAttack(comingAttack);

				if (counterHit) {
					p.comboProration -= 6;
					this.player.world.ps.createParticle("counterHitEffect", p, p.x - 80, p.y - 40, 80, 40);
				}
				if (punishHit) {
					this.player.world.ps.createParticle("punishHitEffect", p, p.x - 80, p.y, 80, 40);
				}
			}
		} else {
			if (p.iFrames <= 0 || ((property.commandGrab || !p.invTo.includes("attack")) && (!property.commandGrab || !p.invTo.includes("grab")))) {
				hitBool = true;
				let joystickAngle = p.controls.angle(0);

				/*let ax = this.x + circle.x;
				let ay = this.y + circle.y;

				let circle1 = circle;
				let circle2 = pCircle;

				let ox = p.x + pCircle.x;
				let oy = p.y + pCircle.y;

				let d1 = circle.diameter;
				let d2 = p.collideRadius * 2;

				let dx = circle.dx + this.dx;
				let dy = circle.dy + this.dy;

				if (dx === 0 && dy === 0) {
					dx = p.x - this.x;
					dy = p.y - this.y;
				}

				if (dx === 0) {
					dx = 0.01;
				}

				let attackAngle;

				let slope = dy / dx;

				let a = 1 + slope ** 2;
				let b = -2 * ox + 2 * slope * ay - 2 * slope * oy - 2 * slope * slope * ax;
				let c = (ay - oy - slope * ax) ** 2 + ox * ox - (d1 / 2 + d2 / 2) ** 2;

				let sign = dx > 0 ? -1 : 1;
				let angleX = (-b + sign * sqrt(b * b - 4 * a * c)) / 2 / a;
				let angleY = slope * (angleX - ax) + ay;
				angleX -= ox;
				angleY -= oy;*/
				let results = this.calculateAngleStuff(p, circle, pCircle, property);
				let attackAngle;

				if(property.angleCalcType === "direct")
					attackAngle = new Angle().setFromPoint(-results.angleX, -results.angleY);
				if (property.angleCalcType === "vel")
					attackAngle = new Angle().setFromPoint(results.dx, results.dy);
				if (property.angleLaunchType === "direct")
					property.angle = new Angle().setFromPoint(p.x - results.ax, p.y - results.ay);
				let parryAngle = new Angle(attackAngle.value + PI);

				let parryAngleDif = Angle.distance(joystickAngle, parryAngle);
				let angleDif = Angle.distance(joystickAngle, attackAngle);
				let standingAngleDif = Angle.distance(new Angle(p.dir.value + PI), attackAngle);//Not sure if this should be p.dir or just use playerAngle (might have to 180 swap playerAngle)

				//let particleAngle = new Angle().setFromPoint(angleX, angleY);
				let px = p.x - attackAngle.getX() * (p.largestDiameter / 2 - 5);
				let py = p.y - attackAngle.getY() * (p.largestDiameter / 2 - 5);

				let playerAngle = new Angle().setFromPoint(p.x - this.player.x, p.y - this.player.y);

				let wallPushback = 1;//TODO This will need to be fixed sometime (?)
				let wallAngle = new Angle();
				let wallLaunchMod = 0;

				let effectiveLeniency = p.blockLeniency + p.blockLeniencyModifier;
				let standLeniency = p.standingBlockLeniency + p.blockLeniencyModifier;
				if (p.blockLeniencyFrames > 0) {
					effectiveLeniency += p.blockLeniencyBuff;
					standLeniency += p.blockLeniencyBuff;
				}

				p.lipuHeavy = property.launch >= 8;

				let parried = (p.moveCount <= p.parryLeniency && p.moveCount > 0 && parryAngleDif < effectiveLeniency && p.parryCooldown <= 0);
				if ((p.controls.joystickPressed(0) && !(angleDif < effectiveLeniency) && !parried) || (!p.controls.joystickPressed(0) && (!(standingAngleDif < standLeniency) || debug.noNeutralBlock)) || !(p.canChangeState(p.states.BLOCK) || (State.stateIsTag(p.currentState, "parry override") && parried)) || ((property.blockBreak && !property.blockBreakParriable) || (property.blockBreak && property.blockBreakParriable && !parried))) {//Standard hit
					p.iFrames = 0;

					if (!property.commandGrab)
						this.player.world.ps.createParticle("hitEffect", p, px, py, 220, 220, attackAngle, true);
					
					if (p.atEdge(3)) {
						wallPushback = property.hitPushback;
						wallAngle = p.edgeAngle();
						wallLaunchMod = property.wallLaunchMod;
					}

					if (p.hitStun <= 0) {
						p.dx = 0;
						p.dy = 0;
					}

					if (p.currentState.name !== "hitstun") {
						if (this.world.sikeWawa.sliceOwnerIs(this.player)) {
							this.world.sikeWawa.addMeter(7, 2.8, this.player);
						} else {
							this.world.sikeWawa.addMeter(4, 1.6, this.player);
						}
					}

					p.stunFrames = max(p.stunFrames, property.stunFrames);
					if (this.follow || wallPushback !== 1) {
						if (!property.commandGrab) {
							this.player.stunFrames = max(this.player.stunFrames, property.stunFrames);
						} else {
							this.player.stunFrames = max(this.player.stunFrames, 6);
						}
					}
					let hitStunModify = property.normalizeHitStun ? this._activeF - 1 : 0;
					let comboBreaker = 0;
					if (p.combo > 5 && this.player.moveStaling.getStaling(this.name) >= this.player.moveStaling.maxStale - 1)
						comboBreaker += (p.combo - 5) * 2;
					p.hitStun = max(p.hitStun, property.hitStun + hitStunModify - comboBreaker + p.hitStunModifier);
					p.actionLag = p.hitStun;
					p.forceChangeState(p.states.HITSTUN, p.states.HITSTUN_ACTIONS);
					
					if (property.commandGrab)
						p.removeAction("power dash");

					p.sheet.setAnimation("Hurt");

					//p.health -= property.damage;//Old way of damaging health
					let staledDamage = property.damage * (this.player.stalePenalty ** this.player.moveStaling.getStaling(this.name));
					dealtDamage = p.damageHealth(staledDamage, p.combo + p.comboProration, property.noKill, property.scaling);

					p.nanpaLipu += property.nanpaLipu;
					p.nanpaLipu = constrain(p.nanpaLipu, 0, 105);

					if (p.combo === 0)
						p.comboProration += property.starterProration;
					if (property.comboCounter)
						p.combo++;
					p.comboProration += property.proration;
					if (counterHit) {
						p.comboProration -= 6;
						if (p.nanpaLipu < 100)
							p.nanpaLipu -= 30;
						if (!property.commandGrab) {
							p.stunFrames += 10;
						} else {
							p.damageHealthAbs(30, 0, property.noKill);
						}
						this.player.world.ps.createParticle("counterHitEffect", p, px - 80, py - 40, 80, 40);
					}
					if (punishHit) {
						this.player.world.ps.createParticle("punishHitEffect", p, px - 80, py, 80, 40);
					}

					if (property.rotateOnHit) {
						p.rotateVel = property.rotateVel / property.hitStun;
					}
					if (property.rotateSlowDownOnHit) {
						if (p.rotateSlowDownFrames <= 0) {
							p.rotateSlowDown = property.rotateSlowDown;
						} else {
							p.rotateSlowDown = min(p.rotateSlowDown, property.rotateSlowDown);
						}
						p.rotateSlowDownFrames = max(p.rotateSlowDownFrames, property.rotateSlowDownFrames);
					}

					let further = 1.6;//This makes it so that consecutive attacks don't add as much velocity as the very first attack
					if (p.combo <= 1)
						further = 1;
					let counterVel = 1;//When a combo is too long, start making it do more knockback in an effort to prevent infinites
					if (p.combo > 15) {
						counterVel += (p.combo - 15) / 2;
					}

					let launchIncludeMulti = (this.multi > 0 ? this.multiLaunch : property.launch);

					if (this.multi > 0) {
						p.dx = this.player.dx;
						p.dy = this.player.dy;
					} else {
						this.player.moveStaling.add(this);
					}

					p.dx *= property.launchDampening;
					p.dy *= property.launchDampening;
					let preDampSpeed = p.dx * p.dx + p.dy * p.dy;
					let multiple = property.launchDampeningMaxSpeed * property.launchDampeningMaxSpeed / preDampSpeed;
					if (abs(multiple) < 1) {
						p.dx *= multiple;
						p.dy *= multiple;
					}
					p.dx += (launchIncludeMulti + wallLaunchMod) * property.angle.getX() / sqrt(p.weight) / further * counterVel;
					p.dy += (launchIncludeMulti + wallLaunchMod) * property.angle.getY() / sqrt(p.weight) / further * counterVel;

					if (this.follow || wallPushback !== 1) {
						if (this.player.dx * -property.counterLaunch * playerAngle.getX() / sqrt(this.player.weight) / 5 * wallPushback / further + this.player.dy * -property.counterLaunch * playerAngle.getY() / sqrt(this.player.weight) / 5 * wallPushback / further < 0) {
							further -= 0.4 * (p.combo - 1);
							further = max(0.4, further);
							if (further < 1) {
								this.player.dx /= 2;
								this.player.dy /= 2;
							}
						}
						let wallX = max(0.4, abs(wallAngle.getX()));
						let wallY = max(0.4, abs(wallAngle.getY()));
						if (wallPushback === 1) {
							wallX = 1;
							wallY = 1;
						}

						let counterLaunchIncludeMulti = (this.multi > 0 ? 0 : property.counterLaunch);

						this.player.dx += -counterLaunchIncludeMulti * playerAngle.getX() / sqrt(this.player.weight) / 5 * wallPushback * wallX / further;
						this.player.dy += -counterLaunchIncludeMulti * playerAngle.getY() / sqrt(this.player.weight) / 5 * wallPushback * wallY / further;

						let magnitude = dist(0, 0, this.player.dx, this.player.dy);
						if (magnitude > 15) {
							this.player.dx *= 15 / magnitude;
							this.player.dy *= 15 / magnitude;
						}
					}

					//this.player.addAction(...property.hitCancelOptions);
					this.player.cancelWait = property.cancelWait;
					this.player.cancelActions.push(...property.hitCancelOptions);

					property.playHitSound(this.world, this.multiConst);

					this.hitConfirmSetFrames();
				} else {//Blocked the hit
					if (p.atEdge(3)) {
						wallPushback = property.blockPushback;
						wallAngle = p.edgeAngle();
						wallLaunchMod = property.wallLaunchModBlock;
					}

					if (p.hitStun <= 0) {
						p.dx = 0;
						p.dy = 0;
					}

					if (this.multi === 0) {
						this.world.sikeWawa.subtractMeter(-1.5, -0.6, p);//Add meter to opponent when they block but only if they already control the slice
						if (!p.controls.joystickPressed(0))
							this.world.sikeWawa.subtractMeter(-4.0, -3.6, p);
						/* else {
							this.world.sikeWawa.addMeter(1.2, 0.48, p);
						}*/
					}

					p.blockLeniencyFrames = property.blockLeniency;

					p.stunFrames = max(p.stunFrames, property.blockStunFrames);
					if (this.follow || wallPushback !== 1)
						this.player.stunFrames = max(this.player.stunFrames, property.blockStunFrames);
					let hitStunModify = property.normalizeHitStun ? this._activeF - 1 : 0;
					p.hitStun = max(p.hitStun, property.blockStun + hitStunModify + p.hitStunModifier - (!p.controls.joystickPressed(0) ? p.neutralBlockBuff : 0));
					p.actionLag = p.hitStun;
					p.forceChangeState(p.states.BLOCK, p.states.BLOCK_ACTIONS);

					//p.combo++;//Should this be here or not? IDK

					property.cancelWait = property.cancelWaitBlock;

					if (property.rotateOnBlock) {
						p.rotateVel = property.rotateVelBlock / property.blockStun;
					}
					if (property.rotateSlowDownOnBlock) {
						if (p.rotateSlowDownFrames <= 0) {
							p.rotateSlowDown = property.rotateSlowDown;
						} else {
							p.rotateSlowDown = min(p.rotateSlowDown, property.rotateSlowDown);
						}
						p.rotateSlowDownFrames = max(p.rotateSlowDown, property.rotateSlowDownFrames);
					}

					let further = 3;//This makes it so that consecutive attacks don't add as much velocity as the first attack
					if (p.combo <= 1)
						further = 1;

					let launchIncludeMulti = (this.multi > 0 ? this.multiLaunch : property.launch);

					if (this.multi > 0) {
						p.dx = this.player.dx;
						p.dy = this.player.dy;
					}

					p.dx *= property.launchDampeningBlock;
					p.dy *= property.launchDampeningBlock;
					let preDampSpeed = p.dx * p.dx + p.dy * p.dy;
					let multiple = property.launchDampeningMaxSpeedBlock * property.launchDampeningMaxSpeedBlock / preDampSpeed;
					if (abs(multiple) < 1) {
						p.dx *= multiple;
						p.dy *= multiple;
					}
					p.dx += (launchIncludeMulti + wallLaunchMod) * property.blockLaunchMult * property.angle.getX() / sqrt(p.weight) / 3 / further;
					p.dy += (launchIncludeMulti + wallLaunchMod) * property.blockLaunchMult * property.angle.getY() / sqrt(p.weight) / 3 / further;

					if (this.follow || wallPushback !== 1) {
						/*if (this.player.dx * -property.counterLaunch * playerAngle.getX() / sqrt(this.player.weight) / 5 * wallPushback / further + this.player.dy * -property.counterLaunch * playerAngle.getY() / sqrt(this.player.weight) / 5 * wallPushback / further < 0) {
							further -= 0.3 * (p.combo - 1);
							further = max(0.5, further);
						}*///TODO Don't know if I want this here or not (would need to be updated from the hit code)
						let wallX = max(0.5, abs(wallAngle.getX()));
						let wallY = max(0.5, abs(wallAngle.getY()));
						if (wallPushback === 1) {
							wallX = 1;
							wallY = 1;
						}

						let counterLaunchIncludeMulti = (this.multi > 0 ? 0 : property.counterLaunch);

						this.player.dx += -counterLaunchIncludeMulti * property.blockLaunchMult * playerAngle.getX() / sqrt(this.player.weight) / 2.5 * wallPushback * wallX / further;
						this.player.dy += -counterLaunchIncludeMulti * property.blockLaunchMult * playerAngle.getY() / sqrt(this.player.weight) / 2.5 * wallPushback * wallY / further;
					}

					property.playBlockSound(this.world, this.multiConst);

					if (parried) {//p.controls.joystickHeld(0) <= 4
						this.player.dx /= 1.5;
						this.player.dy /= 1.5;
						this.player.stunFrames += 23;

						p.dx /= 1.5;
						p.dy /= 1.5;
						p.stunFrames += 23 - p.parryFrameBuff;

						p.parryCooldown = 0;

						//Add a fancy particle effect here
						this.player.world.ps.createParticle("hitParryEffect", p, px, py, 250, 250, attackAngle, true);

						assetManager.sounds.parry.play();

						p.sheet.setAnimation("Parry");
					} else {
						//Regular block effect
						if (property.chip > 0 && p.health > p.deathChanceThreshold) {
							let staledDamage = property.damage * (this.player.stalePenalty ** this.player.moveStaling.getStaling(this.name));
							dealtDamage = p.damageHealth(staledDamage * property.chip, p.combo + p.comboProration, true, property.scaling);
						}
						
						this.player.world.ps.createParticle("hitBlockEffect", p, px, py, 200, 200, attackAngle, true);

						p.sheet.setAnimation("Block");
					}
					this.hitConfirmSetFrames();
				}
				p.hitByProjectile = this.projectile;
				p.advantage = -(p.hitStun - this.player.actionLag + p.stunFrames - this.player.stunFrames);
				p.cancelAdvantage = -(p.hitStun - property.cancelWait + p.stunFrames - this.player.stunFrames);
				p.oobAdvantage = -(max(0, p.hitStun - p.OOBBlockFrame) - this.player.actionLag + p.stunFrames - this.player.stunFrames);
				p.oobCancelAdvantage = -(max(0, p.hitStun - p.OOBBlockFrame) - property.cancelWait + p.stunFrames - this.player.stunFrames);
				if (debug.displayFrameAdvantage) {
					print("Advantage: " + (-p.advantage) + " /C: " + (-p.cancelAdvantage));// Frame advantage
					//print("Cancel Advantage: " + (-p.cancelAdvantage));
					print("OOB Advantage: " + (-p.oobAdvantage) + " /C: " + (-p.oobCancelAdvantage));
					//print("OOBC Advantage: " + (-p.oobCancelAdvantage));
				}
				if (dealtDamage) {
					p.dealtDamage = floor(dealtDamage * 10) / 10;
					p.percentDamage = round(1000 * dealtDamage / property.damage) / 10;
				}
				if (debug.displayScalingPercent && dealtDamage) {
					print(round(1000 * dealtDamage / property.damage) / 10 + "% Damage");
				}
			} else {
				//p.stunFrames = 5;
				//this.player.stunFrames = 5;
            }
		}

		if (hitBool) {
			//this.player.addAction(...property.cancelOptions);
			this.player.cancelWait = property.cancelWait;
			this.player.cancelActions.push(...property.cancelOptions);

			if (this.player.cancelWait === 0) {
				this.player.addAction(...this.player.cancelActions);
				this.player.cancelActions = [];
			}

			this.hitPlayer(p);
		}
	}

	/** @override */
	applyModifiers() {

	}

	/** @override */
	logic() {

    }

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	debugDraw(g) {
		if (this.currentlyActive())
			super.debugDraw(g);
	}

	calculateAngleStuff(p, circle, pCircle, property) {
		let ax = this.x + circle.x;
		let ay = this.y + circle.y;

		let circle1 = circle;
		let circle2 = pCircle;

		let ox = p.x + pCircle.x;
		let oy = p.y + pCircle.y;

		let d1 = circle.diameter;
		let d2 = p.collideRadius * 2;

		let dx = circle.dx + this.dx;
		let dy = circle.dy + this.dy;

		if (dx === 0 && dy === 0) {
			dx = p.x - this.x;
			dy = p.y - this.y;
		}

		if (dx === 0) {
			dx = 0.01;
		}

		let attackAngle;

		let slope = dy / dx;

		let a = 1 + slope ** 2;
		let b = -2 * ox + 2 * slope * ay - 2 * slope * oy - 2 * slope * slope * ax;
		let c = (ay - oy - slope * ax) ** 2 + ox * ox - (d1 / 2 + d2 / 2) ** 2;

		let sign = dx > 0 ? -1 : 1;
		let angleX = (-b + sign * sqrt(b * b - 4 * a * c)) / 2 / a;
		let angleY = slope * (angleX - ax) + ay;
		angleX -= ox;
		angleY -= oy;

		return {angleX, angleY, dx, dy, ax, ay};
	}

	getLaunchAngle(p, circle, pCircle, property) {
		let results = this.calculateAngleStuff(p, circle, pCircle, property);

		let outputAngle;
		if (property.angleLaunchType === "direct")
			outputAngle = new Angle().setFromPoint(p.x - results.ax, p.y - results.ay);

		return outputAngle;
	}

	getAttackAngle(p, circle, pCircle, property) {
		let results = this.calculateAngleStuff(p, circle, pCircle, property);

		let attackAngle;
		if (property.angleCalcType === "direct")
			attackAngle = new Angle().setFromPoint(-results.angleX, -results.angleY);
		if (property.angleCalcType === "vel")
			attackAngle = new Angle().setFromPoint(results.dx, results.dy);

		return attackAngle;
	}

	getCollideInformation(p) {
		let property;
		let circle;
		let playerCircle;
		let collided = false;
		if (Hitcircle.collideMain(this, p)) {
			loop1:
			for (let i in p.circles) {
				for (let u in this.circles) {
					if (p.circles[i].diameter > 0 && this.circles[u].diameter > 0 && Hitcircle.collideCircle(p, i, this, u)) {
						property = this.properties[this.circles[u].priority];
						circle = this.circles[u];
						playerCircle = p.circles[i];
						collided = true;
						break loop1;
					}
				}
			}
		}
		return {collided, property, circle, playerCircle};
	}

	attack(p) {
		let collided;
		let circle;
		let playerCircle;
		if (Hitcircle.collideMain(this, p)) {
			loop1:
			for (let i in p.circles) {
				for (let u in this.circles) {
					if (p.circles[i].diameter > 0 && this.circles[u].diameter > 0 && Hitcircle.collideCircle(p, i, this, u)) {
						collided = this.circles[u].priority;
						circle = this.circles[u];
						playerCircle = p.circles[i];
						break loop1;
					}
				}
			}
		}
		
		let property = this.properties[collided];

		if (property)
			this.confirmAttack(property, circle, playerCircle, p);
	}

	followPlayer() {
		if (this.follow) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
	}

	move() {
		for (let i in this.circles) {
			this.circles[i].run();
		}

		for (let i in this.properties) {
			if (this.currentlyActive()) {
				this.properties[i].angle.value += this.properties[i].launchDR;
			}
		}

		this.x += this.dx;
		this.y += this.dy;

		if (this.rotateable && !this.projectile) {
			/*if (this.tempCountDR === undefined)
				this.tempCountDR = 0;
			this.tempCountDR += this.player.dr;*///This was debug stuff

			this.rotateTo(this.player.dir);
			//print(this.player.dr);
		}

		this.resetMain();
	}

	startupOver() {
		return this._startupF <= 0;
	}

	activeOver() {
		return this._activeF <= 0;
	}
	
	endOver() {
		return this._endF <= 0;
	}

	currentlyStartup() {
		return this._startupF > 0;
	}

	currentlyActive() {
		return this._startupF <= 0 && this._activeF > 0;
	}

	currentlyEnd() {
		return this._startupF <= 0 && this._activeF <= 0 && this._endF > 0;
	}

	/**
	 * 
	 * @param {Circle} circle
	 * @param {AttackProperties} atkProps
	 */
	addCircle(circle, atkProps) {
		this.circles.push(circle);
		this.properties.push(atkProps);

		this.sortCircles();

		return this;
	}

	/** */
	sortCircles() {
		this.circles.sort((a, b) => {
			return a.priority - b.priority;
		});
	}

	/** */
	endLife() {
		this.duration = 0;
		this._startupF = 0;
		this._activeF = 0;
		this._endF = 0;

		this.cleanup();
	}

	/** @override */
	cleanup() {
		//this.endSounds();
	}

	/** Ends playback of all sounds associated with this attack */
	endSounds() {
		this.properties.forEach((prop) => {
			prop.stopSounds();
		});
	}

	/**
	 * 
	 * @param {Player} player
	 */
	hitPlayer(player) {
		//if(!this.alreadyHitPlayer(player))
		this._hitPlayers.push(player);
		this._hitPlayerCounts.push(this.rehitRate);
		this.hitPlayerBool = true;
	}
	countRehits() {
		for (let i in this._hitPlayerCounts) {
			this._hitPlayerCounts[i]--;
		}
	}
	resetHits() {
		this._hitPlayers = [];
		this._hitPlayerCounts = [];
		this.hitPlayerBool = false;
	}

	/**
	 * @Override
	 */
	hitConfirmSetFrames() {

	}

	/**
	 * 
	 * @param {Player} player
	 */
	alreadyHitPlayer(player) {
		for (let i in this._hitPlayers) {
			if (this._hitPlayers[i] === player && (this.multi <= 0 || this._hitPlayerCounts[i] > 0))
				return true;
		}
		return false;
	}

	attackHasHit() {
		return this._hitPlayers[i] > 0;
    }

	/**
	 * 
	 * @param {PriorityCircle[]} circles
	 */
	setCircles(circles) {
		this.circles = circles;

		return this;
	}

	/**
	 * 
	 * @param {boolean} follow
	 */
	setFollow(follow) {
		this.follow = follow;

		if (follow) {
			this.dir = this.player.dir;
		} else {
			this.dir = new Angle(this.player.dir.value);
		}

		return this;
	}

	/**
	 * 
	 * @param {boolean} bool
	 */
	setProjectile(bool = true) {
		this.projectile = bool;

		return this;
    }

	/**
	 * 
	 * @param {number} dx
	 * @param {number} dy
	 */
	setVelocity(dx, dy) {
		this.dx = dx;
		this.dy = dy;

		return this;
	}

	/**
	 * 
	 * @param {boolean} setting
	 */
	setRotateable(setting = true) {
		this.rotateable = setting;

		return this;
    }

	/**
	 * 
	 * @param {AttackProperties} props
	 */
	setProperties(props) {
		this.properties = props;

		return this;
	}

	/**
	 * 
	 * @param {number} num Can be a boolean as well (false prevents the attack from clashing ever)
	 */
	setClashPriority(num) {
		if (typeof num === "boolean") {
			this.clashable = num;
		} else {
			this.clashPriority = num;
		}

		return this;
	}

	setMulti(hits = this.multi, rehitRate = this.rehitRate, launch = this.multiLaunch) {
		this.multi = hits;
		this.multiConst = hits;
		this.rehitRate = rehitRate;
		this.multiLaunch = launch;

		return this;
	}

	reflectHitboxes(bool) {
		if (bool) {
			for (let i in this.circles) {
				this.circles[i].y *= -1;
				this.circles[i].dy *= -1;
				this.circles[i].dr *= -1;
				this.circles[i].subdy *= -1;
				this.circles[i].subdr *= -1;
			}
			for (let i in this.properties) {
				this.properties[i].angle.value = 2 * this.player.dir.value - this.properties[i].angle.value;
				this.properties[i].launchDR *= -1;
				this.properties[i].rotateVel *= -1;
				this.properties[i].rotateVelBlock *= -1;
			}
		}

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 */
	setStartupF(num) {
		this._startupF = num;
		this._updateDuration();

		return this;
	}

	getStartupF() {
		return this._startupF;
	}

	getFromStartupF() {
		return this.frameDataRef.getFromStartupF();
	}

	/**
	 * 
	 * @param {number} num
	 */
	setActiveF(num) {
		this._activeF = num;
		this._updateDuration();

		return this;
	}

	getActiveF() {
		return this._activeF;
	}

	getFromActiveF() {
		return this.frameDataRef.getFromActiveF();
	}

	/**
	 * 
	 * @param {number} num
	 */
	setEndF(num) {
		this._endF = num;
		this._updateDuration();

		return this;
	}

	getEndF() {
		return this._endF;
	}

	/**
	 * 1 indicates either the first frame of endlag or that endlag has not started yet
	 * @returns
	 */
	getFromEndF() {
		return this.frameDataRef.getFromEndF();
	}

	getTotalDuration() {
		return this.frameDataRef.getDuration();
	}

	/** @private */
	_updateDuration() {
		this.duration = this._startupF + this._activeF + this._endF;

		this.frameDataRef = new AttackFrameData(this);
	}

	rotateTo(angle, xStart = undefined, yStart = undefined) {
		for (let i in this.circles) {
			let c = this.circles[i];

			c.rotateTo(new Angle(angle.value - this.circleRotation.value));
		}
		
		let startX = this.player.x;
		let startY = this.player.y;
		if (xStart !== undefined && yStart !== undefined) {
			startX = xStart;
			startY = yStart;
        }

		let currentVelAngle = atan2(this.dy, this.dx);
		let velAngle = angle.value - this.circleRotation.value + currentVelAngle;
		let velMag = dist(0, 0, this.dx, this.dy);
		
		let currentPosAngle = atan2(this.y - startY, this.x - startX);
		let posAngle = angle.value - this.circleRotation.value + currentPosAngle;
		let posMag = dist(0, 0, this.x - startX, this.y - startY);

		this.dx = cos(velAngle) * velMag;
		this.dy = sin(velAngle) * velMag;
		this.x = cos(posAngle) * posMag + startX;
		this.y = sin(posAngle) * posMag + startY;

		this.circleRotation.value = angle.value;

		this.resetMain();
	}

	serialize() {
		let copy = (({
			player,
			world,
			_hitPlayers,
			...o
		}) => defaultSerialize(o))(this);

		for (let i = 0; i < this.world.players.length; i++) {
			if (this.player === this.world.players[i])
				copy.player = i;
		}

		copy._hitPlayers = {};
		currentPlayerLoop: for (let i in this._hitPlayers) {
			for (let u = 0; u < this.world.players.length; u++) {
				if (this.world.players[u] === this._hitPlayers[i]) {
					copy._hitPlayers[i] = u;
					continue currentPlayerLoop;
				}
			}
		}

		return copy;
	}

	deserialize(obj, world) {
		this.world = world;
		defaultCopyValues(this, obj, ["circles", "properties", "frameDataRef"]);

		if (!this.follow) {
			this.dir = new Angle(this.dir.value);
		}

		if (!obj.frameDataRef) {
			this.frameDataRef = null;
		} else {
			this.frameDataRef = new AttackFrameData();
			this.frameDataRef.deserialize(obj.frameDataRef, world);
			this.frameDataRef.attack = this;
		}

		this.player = this.world.players[this.player];
		for (let i in obj.properties) {
			this.properties.push(new AttackProperties());
			defaultCopyValues(this.properties[i], obj.properties[i], ["angle"]);
			this.properties[i].angle = new Angle(obj.properties[i].angle.value);
		}
		for (let i in obj.circles) {
			this.circles.push(new PriorityCircle());
			defaultCopyValues(this.circles[i], obj.circles[i]);
		}

		this._hitPlayers = [];
		for (let i in obj._hitPlayers) {
			if (obj._hitPlayers[i] === -1) {
				this._hitPlayers.push(null);
			} else {
				this._hitPlayers.push(this.world.players[obj._hitPlayers[i]]);
			}
		}
	}
}

/** */
class AttackProperties {
	constructor() {
		/** @type {number} */
		this.damage = 0;
		/** @type {number} */
		this.blockStun = 0;
		/** @type {number} Combo scaling - lower number deals less damage further into a combo */
		this.scaling = 4;
		/** @type {number} */
		this.proration = 0;
		/** @type {number} Makes a move better or worse when starting a combo */
		this.starterProration = 0;
		/** @type {boolean} If the combo counter should go up or down */
		this.comboCounter = true;

		/** @type {boolean} If true, the attack cannot kill */
		this.noKill = false;

		/** @type {number} A percentage of damage done when the move is blocked */
		this.chip = 0;

		/** @type {number} */
		this.hitStun = 0;

		/** @type {number} Whether the hitstun should decrease with the active frames or not */
		this.normalizeHitStun = false;

		/** @type {number} */
		this.launch = 0;
		/** @type {number} Multiplies the momentum of the target player before adding the launch */
		this.launchDampening = 1;
		/** @type {number} The speed cap at which the launch dampening multiplier with never exceed */
		this.launchDampeningMaxSpeed = 20;
		/** @type {number} Multiplies the momentum of the target player before adding the launch (when blocked) */
		this.launchDampeningBlock = 1;
		/** @type {number} The speed cap at which the launch dampening multiplier with never exceed (when blocked) */
		this.launchDampeningMaxSpeedBlock = 20;

		/** @type {number} */
		this.wallLaunchMod = 0;
		/** @type {number} */
		this.wallLaunchModBlock = 0;

		/** @type {number} */
		this.launchDR = 0;

		/** @type {number} */
		this.rotateVel = 0;

		/** @type {number} */
		this.rotateVelBlock = 0;

		/** @type {number} Slows down rotation for some time (This is a percentage) */
		this.rotateSlowDown = 1;
		/** @type {number} How many frames the slowdown lasts */
		this.rotateSlowDownFrames = 0;
		/** @type {boolean} */
		this.rotateSlowDownOnHit = true;
		/** @type {boolean} */
		this.rotateSlowDownOnBlock = false;

		/** @type {boolean} */
		this.rotateOnBlock = false;

		/** @type {boolean} */
		this.rotateOnHit = true;

		/** @type {number} */
		this.counterLaunch = 0;

		/** @type {number} */
		this.blockLaunchMult = 0.97;

		/** @type {number} */
		this.hitPushback = 1;

		/** @type {number} */
		this.blockPushback = 1;

		/** @type {number} How many frames the opponent gets to have a more lenient block angle if this attack lands */
		this.blockLeniency = 10;

		/** @type {Angle} */
		this.angle = new Angle();

		/** @type {number} */
		this.priority = 0;

		/** @type {boolean} */
		this.grab = false;

		/** @type {boolean} */
		this.commandGrab = false;

		/** @type {number} */
		this.grabInitialDamage = 40;

		/** @type {number} How long to freeze both players when a hit lands */
		this.stunFrames = 15;
		/** @type {number} */
		this.blockStunFrames = 12;

		/** @type {string[]} */
		this.cancelOptions = [];

		/** @type {string[]} */
		this.hitCancelOptions = [];

		/** @type {number} How many frames to wait before a move is cancellable */
		this.cancelWait = 0;

		/** @type {number} How many frames to wait before a move is cancellable after a block */
		this.cancelWaitBlock = 0;

		/** @type {string} Could be "vel" or "direct". "vel" uses the move velocity while "direct" detects what angle it hit the opponent at */
		this.angleCalcType = "vel";

		/** @type {string} Could be "vel" or "direct". "vel" uses the standard launch angle but "direct" calculates the angle from the attack to the player */
		this.angleLaunchType = "vel";

		/** @type {number} How much of the lipu meter is filled up when a hit happens (100 is full) */
		this.nanpaLipu = 0;

		/** @type {boolean} If true, the move cannot be blocked */
		this.blockBreak = false;
		/** @type {boolean} If true, the unblockable attack can still be parried */
		this.blockBreakParriable = false;

		/** @type {Howler} */
		this.hitSound = assetManager.sounds["8BitHit"];
		/** @type {Howler} */
		this.blockSound = assetManager.sounds.awen;
		/** @type {number[]} Which sounds are currently being played by this attack */
		this.currentlyPlaying = [];
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} lipu
	 */
	setDamage(num, lipu = min(30, num / 3), scaling=this.scaling) {
		this.damage = num;
		this.nanpaLipu = lipu;
		this.scaling = scaling;

		return this;
	}

	/**
	 * Sets the attack to be incapable of killing on hit
	 * @param {boolean} bool
	 * @returns
	 */
	setNoKill(bool = true) {
		this.noKill = bool;

		return this;
	}

	/**
	 * 
	 * @param {boolean} bool
	 * @returns
	 */
	setNoComboCounter(bool=false) {
		this.comboCounter = bool;

		return this;
	}

	/**
	 * starterProration is added in addition to regular proration on starter hit
	 * @param {number} proration
	 */
	setProration(proration, starterProration=0) {
		this.proration = proration;
		this.starterProration = starterProration;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 */
	setBlockStun(num) {
		this.blockStun = num;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 */
	setPriority(num) {
		this.priority = num;

		return this;
	}

	/**
	 * 
	 * @param {number} damage
	 * @param {boolean} bool
	 */
	setGrab(damage = this.grabInitialDamage, bool = true) {
		this.grabInitialDamage = damage;
		this.grab = bool;

		return this;
	}

	/**
	 * @param {boolean} bool
	 */
	setCommandGrab(bool = true) {
		this.commandGrab = bool;
		this.blockBreak = bool;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} block
	 */
	setStunFrames(num, block = ceil(9 * num / 10)) {
		this.stunFrames = num;
		this.blockStunFrames = block;

		return this;
	}

	/**
	 * 
	 * @param {string[]} strings
	 * @param {string[]} hitCancelStrings
	 */
	setCancelOptions(strings, hitCancelStrings = []) {
		this.cancelOptions = strings;
		this.hitCancelOptions = hitCancelStrings;

		return this;
	}

	/**
	 * 
	 * @param {number} frames
	 */
	setCancelWait(frames = this.cancelWait, blockFrames = frames) {
		this.cancelWait = frames;
		this.cancelWaitBlock = blockFrames;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} block
	 */
	setHitStun(num, block = floor(num / 3)) {
		this.hitStun = num;
		this.blockStun = block;

		return this;
	}

	/**
	 * 
	 * @param {boolean} bool
	 */
	setNormalizeHitStun(bool = true) {
		this.normalizeHitStun = bool;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} counter
	 * @param {number} blockLaunch
	 */
	setLaunch(num, counter = num, blockLaunch = this.blockLaunchMult) {
		this.launch = num;
		this.counterLaunch = counter;
		this.blockLaunchMult = blockLaunch;

		return this;
	}

	/**
	 * Multiplies the opponent's velocity before knockback is applied (use this to make moves that require multiple hits to ramp up speed)
	 * @param {number} num
	 * @param {number} max
	 * @returns
	 */
	setLaunchDampening(num, max = 20, numBlock=num, maxBlock=max) {
		this.launchDampening = num;
		this.launchDampeningMaxSpeed = max;
		this.launchDampeningBlock = numBlock;
		this.launchDampeningMaxSpeedBlock = maxBlock;

		return this;
	}

	/**
	 * 
	 * @param {number} hit
	 * @param {number} block
	 */
	setWallPushback(hit, block = this.blockPushback) {
		this.hitPushback = hit;
		this.blockPushback = block;

		return this;
	}

	/**
	 * 
	 * @param {number} hit
	 * @param {number} block
	 */
	setWallLaunchMod(hit, block = hit) {
		this.wallLaunchMod = hit;
		this.wallLaunchModBlock = block;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 */
	setAngleValue(num, dr = 0) {
		this.angle.value = num;
		this.launchDR = dr;

		return this;
	}

	/**
	 * 
	 * @param {angle} angle
	 */
	setAngle(angle) {
		this.angle = angle;

		return this;
	}

	/**
	 * "vel" or "direct"
	 * @param {string} launch
	 * @param {string} blockAngle
	 */
	setAngleTypes(launch, blockAngle = this.angleCalcType) {
		this.angleLaunchType = launch;
		this.angleCalcType = blockAngle;

		return this;
	}

	/**
	 * 
	 * @param {number} chip
	 */
	setChip(chip) {
		this.chip = chip;

		return this;
	}

	/**
	 * 
	 * @param {number} vel
	 */
	setRotateVel(vel, blockVel = vel, block = false, hit = true) {
		this.rotateVel = vel;
		this.rotateVelBlock = blockVel;
		this.rotateOnBlock = block;
		this.rotateOnHit = hit;

		return this;
	}

	/**
	 * 
	 * @param {number} num
	 * @param {number} frames
	 */
	setRotateSlowDown(num, frames, block = false, hit = true) {
		this.rotateSlowDown = num;
		this.rotateSlowDownFrames = frames;
		this.rotateSlowDownOnBlock = block;
		this.rotateSlowDownOnHit = hit;

		return this;
	}

	setBlockBreak(bool = true, parriable = false) {
		this.blockBreak = bool;
		this.blockBreakParriable = parriable;

		return this;
	}

	setHitSound(howl) {
		this.hitSound = howl;

		return this;
	}

	setBlockSound(howl) {
		this.blockSound = howl;

		return this;
	}

	setStartSound(howl) {
		this.startSound = howl;

		return this;
	}

	playSound(world, howl, maxPlay = 1) {
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
			if (world.rollbacking) {
				howl.seek(world.rollbackingFrames / 60, id);
			}
		}
	}
	playHitSound(world, maxPlay = 1) {
		this.playSound(world, this.hitSound, maxPlay);
	}
	playBlockSound(world, maxPlay = 1) {
		this.playSound(world, this.blockSound, maxPlay);
	}

	stopSounds() {
		this.currentlyPlaying.forEach((a) => {
			a.howl?.stop(a.id);
		});
	}

	serialize() {
		let copy = (({
			hitSound,
			blockSound,
			currentlyPlaying,
			angle,
			...o
		}) => defaultSerialize(o))(this);
		copy.angle = {
			value: this.angle.value
		};

		return copy;
	}

	deserialize(obj) {
		defaultCopyValues(this, obj, ["angle", "currentlyPlaying"]);
		this.angle = new Angle(obj.angle.value);
	}
}

class PriorityCircle extends Circle {
	constructor(x, y, radius, priority) {
		super(x, y, radius);

		/** @type {number} */
		this.dx = 0;

		/** @type {number} */
		this.dy = 0;

		/** @type {number} Rotates the velocity every frame */
		this.dr = 0;

		/** @type {number} Changes magnitude every frame */
		this.dm = 0;

		/** @type {number} This velocity does not affect block angles */
		this.subdx = 0;
		/** @type {number} */
		this.subdy = 0;
		/** @type {number} */
		this.subdr = 0;
		/** @type {number} */
		this.subdm = 0;

		/** @type {number} */
		this.priority = priority;
	}

	/**
	 * 
	 * @param {number} dx
	 * @param {number} dy
	 * @param {number} dr
	 * @param {number} dm
	 */
	setSubVelocity(dx, dy, dr = 0, dm = 0) {
		this.subdx = dx;
		this.subdy = dy;
		this.subdr = dr;
		this.subdm = dm;

		return this;
	}

	/**
	 * 
	 * @param {number} partitions
	 * @param {number} sign
	 * @param {number} centerX
	 * @param {number} centerY
	 */
	setCircleSubVelocity(partitions, sign = 1, centerX = 0, centerY = 0) {
		let s = sign >= 0 ? 1 : -1;
		let m = dist(this.x, this.y, centerX, centerY);
		let angle = new Angle().setFromPoint(this.x - centerX, this.y - centerY);

		let da = 2 * PI / partitions;

		let nx = cos(angle.value + s * da) * m;
		let ny = sin(angle.value + s * da) * m;

		this.subdx = nx - this.x + centerX;
		this.subdy = ny - this.y + centerY;
		this.subdr = s * da * PI * 2;

		return this;
	}

	/**
	 * 
	 * @param {number} dx
	 * @param {number} dy
	 * @param {number} dr
	 * @param {number} dm
	 */
	setVelocity(dx, dy, dr = 0, dm = 0) {
		this.dx = dx;
		this.dy = dy;
		this.dr = dr;
		this.dm = dm;

		return this;
	}

	/**
	 * 
	 * @param {number} partitions
	 * @param {number} sign
	 * @param {number} centerX
	 * @param {number} centerY
	 */
	setCircleVelocity(partitions, sign = 1, centerX = 0, centerY = 0) {
		let s = sign >= 0 ? 1 : -1;
		let m = dist(this.x, this.y, centerX, centerY);
		let angle = new Angle().setFromPoint(this.x - centerX, this.y - centerY);

		let da = 2 * PI / partitions;

		let nx = cos(angle.value + s * da) * m;
		let ny = sin(angle.value + s * da) * m;

		this.dx = nx - this.x + centerX;
		this.dy = ny - this.y + centerY;
		this.dr = s * da * PI * 2;

		return this;
	}

	run() {
		this.x += this.dx + this.subdx;
		this.y += this.dy + this.subdy;

		let mag = dist(0, 0, this.dx, this.dy) + this.dm;
		let angle = atan2(this.dy, this.dx);
		let angle2 = angle + this.dr / PI / 2;

		this.dx = cos(angle2) * mag;
		this.dy = sin(angle2) * mag;

		let magSub = dist(0, 0, this.subdx, this.subdy) + this.subdm;
		let angleSub = atan2(this.subdy, this.subdx);
		let angle2Sub = angleSub + this.subdr / PI / 2;

		this.subdx = cos(angle2Sub) * magSub;
		this.subdy = sin(angle2Sub) * magSub;
	}

	/**
	 * 
	 * @param {Angle} angle
	 */
	rotateTo(angle) {
		let currentVelAngle = atan2(this.dy, this.dx);
		let velAngle = angle.value + currentVelAngle;
		let velMag = dist(0, 0, this.dx, this.dy);

		let currentSubVelAngle = atan2(this.subdy, this.subdx);
		let velSubAngle = angle.value + currentSubVelAngle;
		let velSubMag = dist(0, 0, this.subdx, this.subdy);

		let currentPosAngle = atan2(this.y, this.x);
		let posAngle = angle.value + currentPosAngle;
		let posMag = dist(0, 0, this.x, this.y);

		this.dx = cos(velAngle) * velMag;
		this.dy = sin(velAngle) * velMag;
		this.subdx = cos(velSubAngle) * velSubMag;
		this.subdy = sin(velSubAngle) * velSubMag;
		this.x = cos(posAngle) * posMag;
		this.y = sin(posAngle) * posMag;
	}

	serialize() {
		return (({
			name,
			world,
			player,
			...o
		}) => defaultSerialize(o))(this);
	}
}

class AttackFrameData {
	constructor(attack) {
		if (attack) {
			this.attack = attack;

			this._activeF = attack.getActiveF();
			this._startupF = attack.getStartupF();
			this._endF = attack.getEndF();
		} else {
			this.attack = undefined;

			this._activeF = 0;
			this._startupF = 0;
			this._endF = 0;
		}
	}

	endFromIs(num) {
		return this.attack.getEndF() === this._endF - num && this.attack.getActiveF() <= 0 && this.attack.getStartupF() <= 0;
	}

	endLeftIs(num) {
		return this.attack.getEndF() === num && this.attack.getActiveF() <= 0 && this.attack.getStartupF() <= 0;
	}

	activeFromIs(num) {
		return this.attack.getActiveF() === this._activeF - num && this.attack.getStartupF() <= 0;
	}

	activeLeftIs(num) {
		return this.attack.getActiveF() === num && this.attack.getStartupF() <= 0;
	}

	startupFromIs(num) {
		return this.attack.getStartupF() === this._startupF - num;
	}

	startupLeftIs(num) {
		return this.attack.getStartupF() === num;
	}

	getFromActiveF() {
		return this._activeF - this.attack.getActiveF() + this.attack.getFromEndF();
	}

	getFromStartupF() {
		return this._startupF - this.attack.getStartupF() + this.attack.getFromActiveF();
	}

	getFromEndF() {
		return this._endF - this.attack.getEndF();
	}

	getActiveF() {
		return this._activeF;
	}

	getStartupF() {
		return this._startupF;
	}

	getEndF() {
		return this._endF;
	}

	getDuration() {
		return this._startupF + this._activeF + this._endF;
	}

	static copy(afd) {
		let out = new AttackFrameData(afd.attack);
		out._startupF = afd._startupF;
		out._activeF = afd._activeF;
		out._endF = afd._endF;
		return out;
	}

	serialize() {
		let copy = (({
			attack,
			...o
		}) => defaultSerialize(o))(this);

		copy.attack = -1;
		if (this.attack?.world?.attacks) {
			for (let i = 0; i < this.attack.world.attacks.length; i++) {
				if (this.attack.world.attacks[i] === this.attack)
					copy.attack = i;
			}
		}

		return copy;
	}

	deserialize(obj, world) {
		defaultCopyValues(this, obj, ["attack"]);
		if (obj.attack === undefined || obj.attack === -1) {
			this.attack = undefined;
		} else {
			this.attack = world.attacks[obj.attack];
		}
	}
}