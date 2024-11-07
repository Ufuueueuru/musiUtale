class TestCharacter extends Player {
	constructor() {
		super([
			new Circle(5, 0, 60),
			new Circle(-36, 0, 30),
		]);

		this.headNoun = "";//
		this.name = "";//

		this.selectScreenSizeOffset = 75;

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.);

		this.collideRadius = 70;

		this.movementSpeed = 2;
		this.forwardSpeedBoost = 1.5;

		this.turnSpeed = 0.02;

		this.weight = 1;

		this.health = 850;
		this.maxHealth = 850;

		this.arrowOffset = -15;
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks
	}

	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		//this.sheet.draw(g, -156 + rumbleX, -156 + rumbleY, 312, 312);

		g.pop();

		//this.drawArrow(g);

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

	charSpecificReset() {

	}

	runSheets() {
		if (this.stunFrames <= 0) {
			//this.sheet.run();
		}
	}

	static addAssets() {

	}
}

characters.push(TestCharacter);