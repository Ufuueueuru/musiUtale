class ParticleSystem {
	constructor() {
		this.particles = [];

		this.templates = {};
	}

	reset() {
		this.particles = [];
	}

	addParticleTemplate(name, spritesheet) {
		this.templates[name] = spritesheet;
	}

	createParticle(name, player, x, y, width, height, angle=Angle.RIGHT, follow = false, dx = 0, dy = 0, logic = () => { }, startup = 0) {
		if (name !== undefined) {
			this.particles.push(Particle.fromTemplate(this.templates[name], player).setPosition(x, y).setSize(width, height).setVelocity(dx, dy).setLogic(logic).setStartup(startup).setAngle(angle).setFollow(follow));
		} else {
			this.particles.push(new Particle(undefined).setPosition(x, y).setSize(width, height).setVelocity(dx, dy).setLogic(logic).setStartup(startup).setAngle(angle).setFollow(follow));
		}
	}

	createManualParticle(player, x, y, angle, drawFunc, follow = false, dx = 0, dy = 0, logic = () => { }, startup = 0) {
		this.particles.push(new Particle(undefined).setPlayer(player).setPosition(x, y).setVelocity(dx, dy).setLogic(logic).setStartup(startup).setAngle(angle).setFollow(follow).setDraw(drawFunc));
	}

	run() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			this.particles[i].run();

			if (!this.particles[i].alive) {
				this.particles.splice(i, 1);
			}
		}
	}

	draw(g) {
		for (let i in this.particles) {
			this.particles[i].draw(g);
		}
	}

	serialize() {
		this.particles = [];
		for (let i in obj._hitPlayers) {
			if (obj._hitPlayers[i] === -1) {
				this.currentAttackReferences.push(null);
			} else {
				this.currentAttackReferences.push(this.world.players[obj._hitPlayers[i]]);
			}
		}


	}

	deserialize(obj) {
		this.particles = [];
		for (let i in obj.particles) {
			this.particles.push(new Particle().deserialize(obj.particles[i]))
		}
	}
}

class Particle extends Spritesheet {
	constructor(spritesheet = undefined) {
		super("");

		this.player = undefined;

		this.dx = 0;
		this.dy = 0;

		this.logic = () => { };

		this.alive = true;

		this.startup = 0;

		this.angle = new Angle(0);

		this.displayWidth = 0;
		this.displayHeight = 0;

		this.follow = false;

		this.followX = 0;
		this.followY = 0;

		this.hasSpritesheet = (spritesheet !== undefined);

		if (this.hasSpritesheet) {
			this.src = spritesheet.src;

			this.width = spritesheet.width;

			this.height = spritesheet.height;

			this.jsonsrc = spritesheet.jsonsrc;

			this.animationData = spritesheet.animationData;

			this.animations = spritesheet.animations;

			this.image = spritesheet.image;

			this.images = spritesheet.images;

			this.currentFrame = spritesheet.currentFrame;

			this.currentSubFrames = spritesheet.currentSubFrames;

			this.worldFrameRate = spritesheet.worldFrameRate;

			this.frameRate = spritesheet.frameRate;

			this.currentAnimation = spritesheet.currentAnimation;

			this.animating = spritesheet.animating;
		}
	}

	static fromTemplate(spritesheet, player) {
		let out = new Particle(spritesheet);

		/** @type {Player} */
		out.player = player;

		out.x = 0;
		out.y = 0;

		out.dx = 0;
		out.dy = 0;
		
		out.logic = () => { };

		out.alive = true;

		out.startup = 0;

		out.angle = new Angle();

		out.displayWidth = 0;

		out.displayHeight = 0;

		out.follow = false;

		return out;
	}

	run() {
		if (this.player.stunFrames <= 0) {
			if (this.startup > 0)
				this.startup++;

			if (this.follow) {
				this.dx = this.player.x - this.x - this.followX;
				this.dy = this.player.y - this.y - this.followY;
			}

			if (this.player.slowDownFrames <= 0) {
				this.x += this.dx;
				this.y += this.dy;
			} else {
				this.x += this.dx * this.player.slowDownMax / this.player.slowDownMod;
				this.y += this.dy * this.player.slowDownMax / this.player.slowDownMod;
			}

			let currentFrame = this.currentFrame;
			if (this.hasSpritesheet) {
				super.run();
			}
			this.logic();
			if (currentFrame > this.currentFrame) {
				this.alive = false;
			}
		}
	}

	draw(g) {
		if (this.alive && this.startup === 0) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.angle.value);

			if(this.hasSpritesheet)
				super.draw(g, -this.displayWidth / 2, -this.displayHeight / 2, this.displayWidth, this.displayHeight);
			this.drawManual(g);

			g.pop();
		}
	}

	drawManual(g) {

	}

	setDraw(func) {
		this.drawManual = func;

		return this;
	}

	setPlayer(player) {
		this.player = player;

		return this;
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;

		return this;
	}

	setVelocity(dx, dy) {
		this.dx = dx;
		this.dy = dy;

		return this;
	}

	setLogic(logic) {
		this.logic = logic;

		return this;
	}

	setStartup(startup) {
		this.startup = startup;

		return this;
	}

	setAngle(angle) {
		this.angle = angle;

		return this;
	}

	setSize(width, height) {
		this.displayWidth = width;
		this.displayHeight = height;

		return this;
	}

	setFollow(bool=true) {
		this.follow = bool;

		this.followX = this.player.x - this.x;
		this.followY = this.player.y - this.y;

		return this;
	}

	serialize() {
		let copy = (({
			src,
			jsonsrc,
			animationData,
			animations,
			width,
			height,
			image,
			images,
			worldFrameRate,
			frameRate,
			player,
			...o
		}) => defaultSerialize(o))(this);
		//TODO a ton of things need to be fixed here
		//copy.spritesheet

		return copy;
	}

	deserialize(obj) {

	}
}