class Loto extends Player {
	constructor() {
		super([
			new Circle(0, 0, 50),//Body
			new Circle(40, 0, 50),//Head
			new Circle(40, 30, 30),//Right frill
			new Circle(40, -30, 30),//Left frill
			new Circle(-40, 0, 40),//Tail Close
			new Circle(-80, -10, 40)//Tail Far
		]);

		this.hurtboxes["walk"] = [
			[new Circle(0, 0, 50),//Body
				new Circle(40, 0, 50),//Head
				new Circle(40, 30, 30),//Right frill
				new Circle(40, -30, 30),//Left frill
				new Circle(-40, 0, 40),//Tail Close
				new Circle(-80, -15, 40)],//Tail Far
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-80, 15, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-70, 20, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-60, 25, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-55, 30, 35)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-60, 25, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-70, 20, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-80, 15, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-80, -15, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-70, -20, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-60, -25, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-55, -30, 35)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-60, -25, 40)],
			[new Circle(0, 0, 50),
				new Circle(40, 0, 50),
				new Circle(40, 30, 30),
				new Circle(40, -30, 30),
				new Circle(-40, 0, 40),
				new Circle(-70, -20, 40)]
		];

		this.headNoun = "󱤁";//akesi
		this.name = currentLanguage === "tp" ? "󱤁󱦐󱦗󱤢󱥇󱥩󱥅󱦑" : "Loto";//akesi Loto

		this.collideRadius = 70;

		this.selectScreenSizeOffset = -10;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.akesiLotoSheet);

		this.states.HITSTUN_ACTIONS = ["power dash", "NN"];
		this.states.NEUTRAL = State.copyState(State.NEUTRAL).removeTag("rotateable");

		this.movementSpeed = 2;
		this.forwardSpeedBoost = 1;

		this.defense = 1;

		this.turnSpeed = 0.025;

		this.weight = 0.7;

		this.health = 650;
		this.maxHealth = 650;

		this.arrowOffset = 25;

		this.stances = {
			OFFENSE: 0,
			NEUTRAL: 1,
			DEFENSE: 2,
			MOVE: 3
		};
		this.stance = this.stances.NEUTRAL;

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

		this.NN = LotoNN;
	}

	generalLogic() {
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
		this.dash.maxCombos = 1;
		this.sheet.images = assetManager.spritesheets.akesiLotoSheet.images;
		if (this.stance === this.stances.MOVE) {
			this.movementSpeed = 3;
			this.hitStunModifier = 5;
			this.dash.maxCombos = 2;
			this.defense = 1.2;

			this.sheet.images = assetManager.spritesheets.akesiLotoLasoSheet.images;
		}
		if (this.stance === this.stances.DEFENSE) {
			this.movementSpeed = 1.2;
			this.hitStunModifier = -3;
			this.weight = 1.4;
			this.defense = 0.5;
			this.dash.maxCombos = 0;
			this.attackMult = 0.6;

			this.sheet.images = assetManager.spritesheets.akesiLotoJeloSheet.images;
		}
		if (this.stance === this.stances.OFFENSE) {
			this.weight = 1.1;
			this.hitStunModifier = 3;
			this.defense = 1.3;
			this.attackMult = 1.4;

			this.sheet.images = assetManager.spritesheets.akesiLotoLojeSheet.images;
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
		g.translate(0, -12);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -102 + rumbleX, -102 + rumbleY, 205, 205);

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

	static addAssets() {
		assetManager.addSpritesheet("resources/akesi_Loto.png", "akesiLotoSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Laso.png", "akesiLotoLasoSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Loje.png", "akesiLotoLojeSheet", "//");
		assetManager.addSpritesheet("resources/akesi_Loto_Jelo.png", "akesiLotoJeloSheet", "//");

		assetManager.addSpritesheet("resources/sitelen_akesi.png", "sitelenAkesi", "//");
		assetManager.addSpritesheet("resources/sitelen_awen.png", "sitelenAwen", "//");
		assetManager.addSpritesheet("resources/sitelen_tawa.png", "sitelenTawa", "//");
		assetManager.addSpritesheet("resources/sitelen_utala.png", "sitelenUtala", "//");

		assetManager.addSpritesheet("resources/TeloTonsi.png", "teloTonsi", "//");
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
}

class LotoNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);

		this.name = "NN";

		this.held = true;
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
		let startSize = (this.getEndF() > 5 ? 60 : 20);
		let akesiSize = startSize, awenSize = startSize, rightSize = startSize, leftSize = startSize, utalaSize = startSize;
		let angle = Angle.compare(this.player.dir, this.player.controls.angle(0));
		if (!this.player.controls.joystickPressed(0)) {
			akesiSize = 90;
		} else {
			if (abs(angle) > 3 * PI / 4) {
				awenSize = 90;
			} else if (abs(angle) > PI / 4) {
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
		if (!this.player.controls.pressed("nasa"))
			this.held = false;
		if (this.getEndF() > 5 && this.held && !this.fromHitstun) {
			this.setEndF(this.getEndF() + 1);
			this.player.actionLag++;
		}
		if (this.getEndF() === 5) {
			let angle = Angle.compare(this.player.dir, this.player.controls.angle(0));
			if (!this.player.controls.joystickPressed(0)) {
				this.player.stance = this.player.stances.NEUTRAL;
			} else {
				if (abs(angle) > 3 * PI / 4) {
					this.player.stance = this.player.stances.DEFENSE;
				} else if (abs(angle) > PI / 4) {
					this.player.stance = this.player.stances.MOVE;
				} else {
					this.player.stance = this.player.stances.OFFENSE;
				}
			}
			if (!this.fromHitstun) {
				this.player.iFrames = 6;
				this.player.invTo = ["attack", "grab"];
			}
		}
	}
}

characters.push(Loto);