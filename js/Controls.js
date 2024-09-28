/** */
class Controls {
	constructor(layout = "keyboard", keyspad = undefined, buttons = [], joysticks = [], deadzones = []) {
		/** Either the keys array or a gamepad id
		 *  @type {any} @private */
		this._keyspad = keyspad;
		/** @type {string} */
		this.layout = layout;//keyboard or gamepad

		/** @type {boolean} */
		this.computer = false;
		/** @type {boolean} */
		this.netplay = false;

		/** How far a joystick has to be pressed in order for the game to register an input
		 * @type {number[]} */
		this.deadzones = deadzones;

		/** A map of the button objects
		 * @type {Button[]} */
		this.buttons = {};
		this.initButtons(buttons);

		/** An array of joystick objects
		 * @type {Joystick[]} */
		this.joysticks = [];
		this.initJoysticks(joysticks, this.deadzones);

		/** @type {boolean} True if dash cancel is started via a hold, false if dash cancel is started via a double tap */
		this.dashCancelHold = true;

		/** @type {string} Could be absolute (ignore character rotation) or relative */
		this.inputAngleType = "relative";

		/** @type {string} The name of the controls */
		this.name = "";
	}

	valid() {
		if (this.layout === "keyboard")
			return true;
		return gamepads[this._keyspad] !== null && gamepads[this._keyspad];
	}

	/**
	 * 
	 * @param {string} name
	 */
	pressed(name) {
		return this.buttons[name]?.pressed;
	}

	held(name) {
		return this.buttons[name]?.heldFrames;
	}

	/**
	 * This is specific to clickedInGame
	 * @param {string} name
	 */
	clicked(name) {
		return this.buttons[name]?.clickedInGame;
	}

	clickedAbsolute(name) {
		return this.buttons[name]?.clicked;
	}

	heldFrames(name) {
		return this.buttons[name]?.heldFrames;
    }

	/**
	 * 
	 * @param {number} i
	 */
	angle(i) {
		return this.joysticks[i].angle();
	}

	joystickPressedMenu(i) {
		return this.joystickHeld(i) === 1 || (this.joystickHeld(i) > 13 && this.joystickHeld(i) % 2 === 0);
	}

	/**
	 * 
	 * @param {number} i
	 */
	joystickPressed(i) {
		return this.joysticks[i].pressed();
	}

	joystickHeld(i) {
		if (!this.joysticks[i])
			return false;
		return this.joysticks[i].held();
    }

	/**
	 * 
	 * @param {any} keyspad
	 */
	setKeyspad(keyspad) {
		this._keyspad = keyspad;
		for (let i in this.buttons) {
			this.buttons[i].keyspad = keyspad;
		}
		for (let i in this.joysticks) {
			this.joysticks[i].keyspad = keyspad;
		}
	}

	/** */
	getKeyspad() {
		return this._keyspad;
	}

	getGamepad() {
		return gamepads[this._keyspad];
	}

	updateInGame() {
		if ((this.layout === "gamepad" && this.getGamepad()) || (this.layout === "keyboard" && this._keyspad)) {
			for (let i in this.buttons) {
				this.buttons[i].updateInGame();
			}
		}
	}

	/** */
	update() {
		//this._keyspad = gamepad;
		if ((this.layout === "gamepad" && this.getGamepad()) || (this.layout === "keyboard" && this._keyspad)) {
			for (let i in this.buttons) {
				this.buttons[i].update();
			}
			for (let i in this.joysticks) {
				this.joysticks[i].update();
			}
		}
	}

	/**
	 * 
	 * @param {any} buttons
	 */
	initButtons(buttons) {//Example input: [["jump",90], ["attack",88]]
		for (let i in buttons) {
			let name = buttons[i][0];
			let code = buttons[i][1];
			this.buttons[name] = new Button(this.layout, this._keyspad, code);
		}
	}

	/**
	 * 
	 * @param {any[]} joysticks
	 * @param {number[]} deadzones
	 */
	initJoysticks(joysticks, deadzones) {//Example input: [["KeyD","KeyW","KeyA","KeyS"], ["ArrowRight","ArrowUp","ArrowLeft","ArrowDown"]] (keyboard) or [0, 1] (gamepad)
		this.joysticks = [];
		for (let i in joysticks) {
			this.joysticks.push(new Joystick(this.layout, this._keyspad, joysticks[i], deadzones[i]));
		}
	}

	serialize() {
		return (({
			_keyspad,
			layout,
			computer,
			netplay,
			name,
			...o
		}) => defaultSerialize(o))(this);
	}
}

/** */
class Button {
	/**
	 * 
	 * @param {string} layout
	 * @param {any} keyspad
	 * @param {number|string} keyCode
	 */
	constructor(layout = "keyboard", keyspad = undefined, keyCode = undefined) {
		/** Pass in a reference to the global keys array
		 * @type {any} */
		this.keyspad = keyspad;
		/** @type {string} */
		this.layout = layout;

		/** @type {boolean} */
		this.pressed = false;
		/** @type {boolean} */
		this.clickCheck = false;
		/** @type {boolean} */
		this.clicked = false;
		/** @type {number} */
		this.clickedInGame = 0;

		/** @type {number} */
		this.heldFrames = 0;

		/** @type {number|string} */
		this.code = keyCode;
	}

	updateInGame() {
		if (this.clickedInGame > 0) {
			this.clickedInGame--;
		}
	}

	/** */
	update() {
		if (this.keyspad[this.code] && ((this.layout === "gamepad" && this.getGamepad()) || (this.layout === "keyboard" && this.keyspad))) {
			this.clickCheck = this.pressed;
			if (this.layout === "keyboard") {
				this.pressed = !!this.keyspad[this.code];
			}
			if (this.layout === "gamepad") {
				this.pressed = this.getGamepad().buttons[this.code].pressed;
			}
			this.clicked = this.pressed && !this.clickCheck;

			if (this.clicked && this.clickedInGame !== 1)
				this.clickedInGame = 2;

			if (this.pressed) {
				this.heldFrames++;
			} else {
				this.heldFrames = 0;
			}
		}
	}

	getGamepad() {
		return gamepads[this.keyspad];
	}

	serialize() {
		return (({
			keyspad,
			code,
			layout,
			...o
		}) => defaultSerialize(o))(this);
	}
}

/** */
class Joystick {
	/**
	 * 
	 * @param {string} layout
	 * @param {any} keyspad
	 * @param {number} buttonaxis
	 */
	constructor(layout = "keyboard", keyspad = undefined, buttonaxis = undefined, deadzone = 0.3) {
		if (buttonaxis === undefined) {
			if (layout === "keyboard")
				buttonaxis = [];
			if (layout === "gamepad")
				buttonaxis = 0;
		}
		/** Reference to the keys object or the gamepad object
		 * @type {any} */
		this.keyspad = keyspad;

		/** The given joystick's deadzone
		 * @type {number} */
		this.deadzone = deadzone;

		/**  Index of desired axis on the gamepads.axes array when layout === "gamepad"
		 *  Alternatively uses right=0, up=1, left=2, and down=3 when layout === "keyboard"
		 * @type {number} */
		this.buttonaxis = buttonaxis;
		/** Whether the input method is via keyboard or gamepad
		 * @type {string} */
		this.layout = layout;
		/** @type {number} */
		this.x = 0;
		/** Whether to round joystick angles or not
		 * @type {number} */
		this.y = 0;

		/** @type {boolean} */
		this.round = false;

		/** @type {number} */
		this.heldFrames = 0;
	}

	/** */
	update() {
		if (((this.layout === "gamepad" && this.getGamepad() && this.getGamepad().axes && this.getGamepad().axes[this.buttonaxis*2+1] && this.getGamepad().axes[this.buttonaxis*2]) || (this.layout === "keyboard" && this.keyspad))) {
			if (this.layout === "keyboard") {
				this.x = (this.keyspad[this.buttonaxis[0]] ? 1 : 0) - (this.keyspad[this.buttonaxis[2]] ? 1 : 0);
				this.y = (this.keyspad[this.buttonaxis[3]] ? 1 : 0) - (this.keyspad[this.buttonaxis[1]] ? 1 : 0);
			}
			if (this.layout === "gamepad") {
				this.x = this.getGamepad().axes[this.buttonaxis * 2];
				this.y = this.getGamepad().axes[this.buttonaxis * 2 + 1];
			}
			if (this.pressed()) {
				this.heldFrames++;
			} else {
				this.heldFrames = 0;
			}
		}
	}

	/** */
	magnitude() {
		return sqrt(this.y * this.y + this.x * this.x);
	}

	/** */
	angle() {
		let angle = atan2(this.y, this.x);
		if (this.round) {
			let partitions = 8;
			angle = round(angle * partitions / PI / 2) * PI * 2 / partitions;
			return new Angle(angle);
		} else {
			return new Angle(angle);
        }
	}

	/** */
	pressed() {
		if (this.layout === "keyboard") {
			//return (this.keyspad[this.buttonaxis[0]] || this.keyspad[this.buttonaxis[1]] || this.keyspad[this.buttonaxis[2]] || this.keyspad[this.buttonaxis[3]]);
		}
		if (this.layout === "gamepad") {
			return this.magnitude() >= this.deadzone;
		}
		return this.magnitude() >= this.deadzone;
	}

	held() {
		return this.heldFrames;
    }

	getGamepad() {
		return gamepads[this.keyspad];
	}

	getCode(i) {
		return this.buttonaxis[i];
	}

	serialize() {
		return (({
			keyspad,
			buttonaxis,
			layout,
			...o
		}) => defaultSerialize(o))(this);
	}
}