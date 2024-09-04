class ControlsManager {
	constructor(controlsArray) {
		/** @type {Controls[]} */
		this.controls = controlsArray;
		/** @type {Controls[]} */
		this.gamepadControls = [];
		/** @type {Controls[]} */
		this.keyboardControls = [];

		this.defaultKeyboardControls1 = {};
		this.defaultKeyboardControls2 = {};
		this.defaultGamepadControls = {};

		/** @type {boolean} */
		this.overrideScreen = false;
		/** @type {number} */
		this.overrideBuffer = 0;

		/** @type {Controls[]} */
		this.playersActive = [];

		/** @type {ControlsMenu[]} */
		this.menus = [];

		this.buttonArray = ["lili", "suli", "pokaLili", "pokaSuli", "nasa", "dash", "select", "back", "start", "frameAdvance"];
	}

	openScreen(buffer = 5) {
		this.playersActive = [];
		this.menus = [];
		this.overrideScreen = true;
		this.overrideBuffer = buffer;
	}

	draw(g) {
		g.background(0, 0, 0, 150);

		let imageWidth = max(width, height * assetManager.images.menuSplash.width / assetManager.images.menuSplash.height);
		let imageHeight = max(height, width * assetManager.images.menuSplash.height / assetManager.images.menuSplash.width);

		g.push();
		g.translate(width / 2, height / 2);
		g.scale(imageWidth / 512);
		g.translate(-256, -192);

		g.textFont(assetManager.fonts.asuki);
		g.textSize(30);
		g.fill(51, 32, 49);
		g.stroke(186, 179, 190);
		g.strokeWeight(2);
		g.textAlign(CENTER, CENTER);
		g.text("󱤤󱤎", 256, 90);//lawa ilo

		for (let i = this.playersActive.length; i < 2; i++) {
			g.text("󱤆󱤡󱥄󱤅󱤉", 246, 130 + 100 * i);//ante la o anpa e [select]
			assetManager.spritesheets.nena.drawFrame(g, 31, 246 + 55, 120 + 100 * i, 25, 25);
		}

		g.textAlign(LEFT, BASELINE);

		let buttonArray = this.buttonArray;
		for (let ud = 0; ud < this.playersActive.length; ud++) {
			let id = 0;
			let keySheet = this.playersActive[ud].layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
			for (let num = 0; num < buttonArray.length; num++) {
				let i = buttonArray[num];
				let langOff = (currentLanguage === "en" ? 10 : 0);
				let buttonID = (this.playersActive[ud].layout === "keyboard" ? (keyImageID[this.playersActive[ud].buttons[i].code] !== undefined ? keyImageID[this.playersActive[ud].buttons[i].code] : keyImageIDLength) : min(18, this.playersActive[ud].buttons[i].code));
				assetManager.spritesheets.nena.drawFrame(g, num + 25 + langOff, 108.5 + 30 * id, 135 + 100 * ud, 25, 25);
				keySheet.drawFrame(g, buttonID, 108.5 + 30 * id, 135 + 100 * ud + 26, 25, 25);
				id++;
			}

			if (this.playersActive[ud].inputAngleType === "relative") {
				g.image(assetManager.images.perspectiveToggleRelative, 256 + 32, 108 + 100 * ud, 78, 26);
			}
			if (this.playersActive[ud].inputAngleType === "absolute") {
				g.image(assetManager.images.perspectiveToggleAbsolute, 256 + 32, 108 + 100 * ud, 78, 26);
			}
			if (this.playersActive[ud].layout === "keyboard") {
				for (let i = 0; i < 4; i++) {
					let baseCode = this.playersActive[ud].joysticks[0].getCode(i);
					assetManager.spritesheets.keys.drawFrame(g, keyImageID[baseCode], 195 + 40 * i, 135 + 100 * ud + 52, 18, 18);
					assetManager.spritesheets.nena.drawFrame(g, 21 + i, 177 + 40 * i, 135 + 100 * ud + 52, 18, 18);
				}
				g.image(assetManager.images.keyboardIcon, 256 - 16, 110 + 100 * ud, 32, 22);

				keySheet.drawFrame(g, keyImageID[this.playersActive[ud].buttons.powerDash.code], 256 - 60, 108 + 100 * ud, 26, 26);
			} else {
				g.image(assetManager.images.gamepadIcon, 256 - 16, 110 + 100 * ud, 32, 22);

				keySheet.drawFrame(g, this.playersActive[ud].buttons.powerDash.code, 256 - 60, 108 + 100 * ud, 26, 26);
	
			}
			g.image(assetManager.images.powerDashMacro, 256 - 135, 108 + 100 * ud, 78, 26);
		}

		for (let i = 0; i < this.menus.length; i++) {
			g.stroke(205, 200, 225);
			g.strokeWeight(2);
			g.noFill();
			if (this.menus[i].selecting) {
				g.stroke(225, 225, 100);
				g.fill(105, 105, 0, 40);
			}
			if (this.menus[i].ySelect === -1) {
				if (this.menus[i].xSelect === 6) {
					g.rect(256 + 32, 108 + 100 * i, 78, 27);
				} else {
					g.rect(256 - 138, 108 + 100 * i, 108, 26);
				}
			} else if (this.menus[i].ySelect === 0) {
				g.rect(106 + 30 * this.menus[i].xSelect, 134 + 100 * i, 30, 55);
			} else {
				g.rect(136 + 40 * this.menus[i].ySelect, 135 + 100 * i + 52, 40, 20);
			}
		}

		g.pop();

		drawBackHold(g, 60);
	}

	run() {
		if (this.overrideBuffer > 0)
			this.overrideBuffer--;

		playerLoop: for (let i = this.playersActive.length - 1; i >= 0; i--) {
			if (this.menus[i].selecting) {
				if (this.playersActive[i].layout === "keyboard") {
					let keyspad = this.playersActive[i].getKeyspad();
					for (let u in keyspad) {
						let notSelectOverlap = (this.menus[i].xSelect === 6 || this.menus[i].xSelect < 6 || u !== this.playersActive[i].buttons["select"].code);
						let notBackOverlap = (this.menus[i].xSelect === 7 || this.menus[i].xSelect < 6 || u !== this.playersActive[i].buttons["back"].code);
						let noArrowCollisions = (u !== this.playersActive[i].joysticks[0].buttonaxis[0] && u !== this.playersActive[i].joysticks[0].buttonaxis[1] && u !== this.playersActive[i].joysticks[0].buttonaxis[2] && u !== this.playersActive[i].joysticks[0].buttonaxis[3]);
						let notArrowsOverlap = (this.menus[i].ySelect <= 0 || u === this.playersActive[i].joysticks[0].buttonaxis[this.menus[i].ySelect - 1] || noArrowCollisions);
						if (keyspad[u] && notArrowsOverlap && notBackOverlap && notSelectOverlap) {
							if (this.menus[i].ySelect === -1 && this.menus[i].xSelect !== 6) {
								this.playersActive[i].buttons["powerDash"].code = u;
							} else if (this.menus[i].ySelect === 0) {
								this.playersActive[i].buttons[this.buttonArray[this.menus[i].xSelect]].code = u;
							} else {
								this.playersActive[i].joysticks[0].buttonaxis[this.menus[i].ySelect - 1] = u;
								this.menus[i].finishSelectingArrows = true;
							}
							this.menus[i].selecting = false;
							this.menus[i].holdingSelect = false;
							this.menus[i].finishSelecting = true;
							continue playerLoop;
						}
					}
				} else {
					let gamepad = this.playersActive[i].getGamepad();
					for (let u = 0; u < gamepad.buttons.length; u++) {
						if (gamepad.buttons[u].pressed && (this.menus[i].xSelect === 7 || this.menus[i].xSelect < 6 || u !== this.playersActive[i].buttons["back"].code) && (this.menus[i].xSelect === 6 || this.menus[i].xSelect < 6 || u !== this.playersActive[i].buttons["select"].code)) {
							if (this.menus[i].ySelect === -1 && this.menus[i].xSelect !== 6) {
								this.playersActive[i].buttons["powerDash"].code = u;
							} else {
								this.playersActive[i].buttons[this.buttonArray[this.menus[i].xSelect]].code = u;
							}
							this.menus[i].selecting = false;
							this.menus[i].holdingSelect = false;
							this.menus[i].finishSelecting = true;
							continue playerLoop;
						}
					}
				}
			}
			if (this.playersActive[i].clickedAbsolute("select") && !this.menus[i].selecting && !this.menus[i].finishSelecting) {
				this.menus[i].holdingSelect = true;
			}
			if (!this.playersActive[i].pressed("select") && this.menus[i].holdingSelect && !this.menus[i].finishSelecting) {
				this.menus[i].selecting = true;
				this.menus[i].holdingSelect = false;
			}
			if (!this.menus[i].selecting && !this.menus[i].finishSelecting && this.playersActive[i].clickedAbsolute("back")) {
				this.playersActive.splice(i, 1);
				this.menus.splice(i, 1);
				continue;
			}
			if (!this.playersActive[i].pressed("select") && this.menus[i].finishSelecting) {
				this.menus[i].finishSelecting = false;
			}
			if (this.menus[i].ySelect === -1) {
				if (this.menus[i].xSelect === 6) {
					this.menus[i].selecting = false;
					this.menus[i].holdingSelect = false;
				}
				if (this.playersActive[i].clickedAbsolute("select")) {
					if (this.menus[i].xSelect === 6) {
						if (this.playersActive[i].inputAngleType === "absolute") {
							this.playersActive[i].inputAngleType = "relative";
						} else {
							this.playersActive[i].inputAngleType = "absolute";
						}
					}
				}
			}
			if (this.playersActive[i].joystickPressedMenu(0) && !this.menus[i].selecting && !this.menus[i].finishSelectingArrows) {
				if (Angle.distance(this.playersActive[i].angle(0), Angle.LEFT) <= 2.5 * PI / 8) {
					this.menus[i].moveLeft();
				}
				if (Angle.distance(this.playersActive[i].angle(0), Angle.RIGHT) <= 2.5 * PI / 8) {
					this.menus[i].moveRight();
				}
				if (Angle.distance(this.playersActive[i].angle(0), Angle.UP) <= 2.5 * PI / 8) {
					this.menus[i].moveUp();
				}
				if (Angle.distance(this.playersActive[i].angle(0), Angle.DOWN) <= 2.5 * PI / 8) {
					this.menus[i].moveDown(this.playersActive[i].layout === "keyboard");
				}
			}
			if (this.menus[i].finishSelectingArrows && !this.playersActive[i].joystickPressedMenu(0)) {
				this.menus[i].finishSelectingArrows = false;
			}
		}

		for (let i in this.controls) {
			if (!this.controls[i].computer) {
				if (this.overrideBuffer <= 0) {
					if (this.controls[i].held("back") > 60) {
						this.overrideScreen = false;
						this.controls[i].buttons.back.heldFrames = 0;
					}
				}
				if (this.controls[i].clickedAbsolute("select")) {
					let includedAlready = false;
					for (let u in this.playersActive) {
						if (this.playersActive[u] == this.controls[i]) {
							includedAlready = true;
						}
					}
					if (!includedAlready && this.playersActive.length < 2) {
						this.playersActive.push(this.controls[i]);
						this.menus.push(new ControlsMenu());
					}
				}
			}
		}
	}
}

class ControlsMenu {
	constructor(xButtons = 10, yButtons = 4) {
		this.xSelect = 0;
		this.ySelect = 0;
		this.xMax = xButtons - 1;
		this.yMax = yButtons;

		this.holdingSelect = false;
		this.selecting = false;
		this.finishSelecting = false;
		this.finishSelectingArrows = false;
	}

	moveLeft() {
		if (this.ySelect === -1) {
			this.xSelect = 3;
		} else if (this.ySelect === 0) {
			this.xSelect--;
			this.xSelect = constrain(this.xSelect, 0, this.xMax);
		} else {
			this.ySelect--;
			this.ySelect = constrain(this.ySelect, 1, this.yMax);
		}
	}
	moveRight() {
		if (this.ySelect === -1) {
			this.xSelect = 6;
		} else if (this.ySelect === 0) {
			this.xSelect++;
			this.xSelect = constrain(this.xSelect, 0, this.xMax);
		} else {
			this.ySelect++;
			this.ySelect = constrain(this.ySelect, 1, this.yMax);
		}
	}
	moveUp() {
		if (this.ySelect > 0) {
			this.xSelect = this.ySelect + 2;
			this.ySelect = 0;
		} else {
			this.ySelect = -1;
			if (this.xSelect > 4) {
				this.xSelect = 6;
			} else {
				this.xSelect = 3;
			}
		}
	}
	moveDown(isKeyboard) {
		if (this.ySelect === 0 && isKeyboard) {
			this.ySelect = constrain(this.xSelect - 2, 1, this.yMax);
		}
		if (this.ySelect === -1) {
			this.ySelect = 0;
			//this.xSelect = 6;
		}
	}
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetNumbers = "0123456789";
let specialKeyArray = [
	"Period",
	"Comma",
	"Quote",
	"Semicolon",
	"Slash",
	"Backslash",
	"Equal",
	"Minus",
	"Backquote",
	"BracketLeft",
	"BracketRight",
	"ArrowRight",
	"ArrowUp",
	"ArrowLeft",
	"ArrowDown",
	"Backspace",
	"Enter",
	"ShiftLeft",
	"ShiftRight",
	"CapsLock",
	"Tab",
	"ControlLeft",
	"ControlRight",
	"AltLeft",
	"AltRight",
	"Escape",
	"Space"
];
let keyImageID = {};
let keyImageIDLength = alphabet.length + alphabetNumbers.length + specialKeyArray.length;
for (let i in alphabet) {
	keyImageID["Key" + alphabet[i]] = Number.parseInt(i);
}
for (let i in alphabetNumbers) {
	keyImageID["Digit" + alphabetNumbers[i]] = Number.parseInt(i) + alphabet.length;
}
for (let i in specialKeyArray) {
	keyImageID[specialKeyArray[i]] = Number.parseInt(i) + alphabet.length + alphabetNumbers.length;
}