class Spritesheet {
	/**
	 * 
	 * @param {string} src
	 * @param {number} width
	 * @param {number} height
	 */
	constructor(src, jsonsrc=undefined, width=0, height=0) {
		/** @type {string} */
		this.src = src;

		/** @type {string} */
		this.jsonsrc = jsonsrc;

		/** @type {any} */
		this.animationData = undefined;

		/** @type {any} */
		this.animations = {};

		/** @type {number} */
		this.width = width;

		/** @type {number} */
		this.height = height;

		/** @type {Image} */
		this.image = undefined;

		/** @type {Image[]} */
		this.images = [];

		/** @type {number} */
		this.currentFrame = 0;

		/** @type {number} */
		this.currentSubFrames = 0;

		/** @type {number} */
		this.worldFrameRate = 60;

		/** @type {number} */
		this.frameRate = 15;

		/** @type {string} */
		this.currentAnimation = "";

		/** @type {boolean} */
		this.animating = true;

		/** @type {number} Lets the sprite know if its resolution has been changed */
		this.resolutionMult = 1;

		/** @type {boolean} True if the json animation data has been added to this object */
		this.jsonParsed = false;

		/** @type {boolean} True if the image is loaded in memory */
		this.imageLoaded = false;

		/** @type {boolean} True if the image has been split */
		this.sheetSplit = false;

		/** @type {boolean} This should always be true for AssetManager to know that the variable is a Spritesheet */
		this.initSprite = true;
	}

	setWorldFrameRate(num) {
		this.worldFrameRate = num;
	}

	setFrameRate(num) {
		this.frameRate = num;
	}

	loadImage(onLoad, onError) {
		loadImage(this.src, this.createImageLoadFunction(onLoad), onError);
		/*this.image = loadImage(this.src, ((onLoad) => {
			if (graphicsSettings.spriteResolutionMult !== 1 && this.image.width * graphicsSettings.spriteResolutionMult % 1 === 0 && this.image.height * graphicsSettings.spriteResolutionMult % 1 === 0 && !this.noResize) {
				if (debug.noSplit)
					this.image.resize(this.image.width * graphicsSettings.spriteResolutionMult, 0);
				this.resolutionMult = graphicsSettings.spriteResolutionMult;
			}
			this.imageLoaded = true;
			onLoad();
		}).bind(this, onLoad), onError);*/
	}

	loadJSON(onLoad, onError) {
		if (this.jsonsrc !== undefined) {
			loadStrings(this.jsonsrc, this.createAnimationLoadFunction(onLoad), onError);
			//this.animationData = loadStrings(this.jsonsrc, onLoad, onError);
		}
	}

	createImageLoadFunction(onLoad) {
		return ((asset) => {
			this.image = asset;
			this.imageLoaded = true;
			onLoad.bind(this)();
			this.splitImage(assetManager);
			//print("split " + this.src);
		}).bind(this);
	}

	createAnimationLoadFunction(onLoad) {
		return ((asset) => {
			this.animationData = asset;
			this.parseJSON();
			onLoad.bind(this)();
			//print(assetTarget, this.image?.width);
		}).bind(this);
	}

	parseJSON() {
		if (this.animationData !== undefined) {
			let data = JSON.parse(this.animationData.join(""));
			this.animationData = data;
			for (let i in this.animationData.meta.frameTags) {
				this.animations[this.animationData.meta.frameTags[i].name] = {
					from: this.animationData.meta.frameTags[i].from,
					to: this.animationData.meta.frameTags[i].to
				};
				if (this.currentAnimation === "")
					this.currentAnimation = this.animationData.meta.frameTags[i].name;
			}

			let first = Object.keys(this.animationData.frames)[0];
			this.frameRate = round(1000 / this.animationData.frames[first].duration);

			this.width = this.animationData.frames[first].frame.w;
			this.height = this.animationData.frames[first].frame.h;
			this.noResize = this.animationData.noResize;
			this.animationData = undefined;
			this.jsonParsed = true;
		}
	}

	resetImage() {
		this.image = undefined;
		this.images = [];
		this.imageLoaded = false;
		this.sheetSplit = false;
	}

	splitImage(assetManager, finishFunc = () => { }) {
		this.images = [];

		let x = 0;
		let y = 0;
		let i = 0;
		let total = this.image.height / this.height * this.image.width / this.width;
		
		if (debug.noSplit) {
			if (graphicsSettings.spriteResolutionMult !== 1 && !this.noResize) {
				this.image.resize(Math.round(this.image.width * graphicsSettings.spriteResolutionMult), 0);
				this.resolutionMult = graphicsSettings.spriteResolutionMult;
			}

			assetManager._splitLoaded++;
			//print("loaded: " + this.src + ", " + assetManager._splitLoaded);
		} else {
			let loaded = { amount: 0, total: total };
			if (assetManager)
				assetManager.addSmallLoad(loaded);
			while (y < this.image.height) {
				while (x < this.image.width) {
					setTimeout(this._splitImageHelp.bind(this, x, y, i, loaded, assetManager, finishFunc));

					x += this.width;
					i++;
				}
				y += this.height;
				x = 0;
			}
		}
		this.sheetSplit = true;
	}

	_splitImageHelp(x, y, i, loaded, assetManager, finishFunc = () => { }) {
		//let tg = createGraphics(this.width, this.height);//Old method (slow I think)
		//tg.image(this.image, 0, 0, this.width, this.height, x, y, this.width, this.height);

		let tg = this.image.get(x, y, this.width, this.height);
		this.images[i] = tg;

		if (graphicsSettings.spriteResolutionMult !== 1 && !this.noResize)
			this.images[i].resize(Math.round(this.width * graphicsSettings.spriteResolutionMult), 0);

		loaded.amount++;

		if (assetManager && loaded.amount >= loaded.total) {
			assetManager._splitLoaded++;
			this.image = null;
			finishFunc();
		}
	}

	/**
	 * 
	 * @param {number} num
	 * @returns
	 */
	setFrameRelative(num) {
		if (this.animations[this.currentAnimation].from + num <= this.animations[this.currentAnimation].to) {
			this.currentSubFrames = 0;
			this.currentFrame = this.animations[this.currentAnimation].from + num;
			return true;
		}
		return false;
	}

	/**
	 * 
	 * @param {number} num
	 * @returns
	 */
	getFrameRelative(num=this.currentFrame) {
		return num - this.animations[this.currentAnimation].from;
	}

	/**
	 * 
	 * @param {string} name
	 * @returns
	 */
	setAnimation(name) {
		if (this.animations[name] !== undefined) {
			this.currentSubFrames = 0;
			this.currentAnimation = name;
			this.currentFrame = this.animations[this.currentAnimation].from;
			return true;
		}
		return false;
	}

	/**
	 * 
	 * @param {string} name
	 */
	requestAnimationChange(name) {
		if (this.currentAnimation !== name) {
			this.setAnimation(name);
        }
    }

	/**
	 * 
	 * @param {string} name
	 */
	isAnimation(name) {
		return this.currentAnimation === name;
    }

	drawFrame(g, id, x, y, width = this.width, height = this.height) {
		if (debug.noSplit) {
			let spriteWidth = this.width * this.resolutionMult;
			let spriteHeight = this.height * this.resolutionMult;
			g.image(this.image, x, y, width, height, id * spriteWidth % this.image.width, Math.floor(id * spriteWidth / this.image.width) * spriteHeight, spriteWidth, spriteHeight);
		} else {
			g.image(this.images[id % this.images.length], x, y, width, height);
		}
	}

	draw(g, x, y, width = this.width, height = this.height) {
		if (debug.noSplit) {
			let spriteWidth = this.width * this.resolutionMult;
			let spriteHeight = this.height * this.resolutionMult;
			if (!this.image)
				print("failure image: " + this.src);
			g.image(this.image, x, y, width, height, this.currentFrame * spriteWidth % this.image.width, Math.floor(this.currentFrame * spriteWidth / this.image.width) * spriteHeight, spriteWidth, spriteHeight);
		} else {
			g.image(this.images[this.currentFrame], x, y, width, height);
		}
	}

	run() {
		if (this.animating) {
			this.currentSubFrames += this.frameRate;
			this.currentFrame += floor(this.currentSubFrames / this.worldFrameRate);
			this.currentSubFrames %= this.worldFrameRate;
		}
		if (this.currentFrame > this.animations[this.currentAnimation].to)
			this.currentFrame = this.animations[this.currentAnimation].from;
	}

	static getTinted(spritesheet, r, g, b, a=255) {
		let out = Spritesheet.copy(spritesheet);

		let gg = createGraphics(out.image.width, out.image.height);
		gg.tint(r, g, b, a);
		gg.image(out.image, 0, 0);

		out.image = gg.get();
		out.images = [];
		out.splitImage();

		gg.remove();

		return out;
	}

	static copy(spritesheet) {
		let out = new Spritesheet(spritesheet.src, spritesheet.jsonsrc, spritesheet.width, spritesheet.height);

		out.animationData = spritesheet.animationData;

		out.animations = spritesheet.animations;

		out.image = spritesheet.image;

		out.images = spritesheet.images;

		out.currentFrame = spritesheet.currentFrame;

		out.currentSubFrames = spritesheet.currentSubFrames;

		out.worldFrameRate = spritesheet.worldFrameRate;

		out.frameRate = spritesheet.frameRate;

		out.currentAnimation = spritesheet.currentAnimation;

		out.animating = spritesheet.animating;

		out.resolutionMult = spritesheet.resolutionMult;

		return out;
	}

	serialize() {
		return (({
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
			resolutionMult,
			jsonParsed,
			imageLoaded,
			sheetSplit,
			initSprite,
			...o
		}) => defaultSerialize(o))(this);
	}
}