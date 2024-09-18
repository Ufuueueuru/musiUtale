"use strict";

let webVersion = false;

if (!window.electronAPI) {
	webVersion = true;
	window.electronAPI = {
		toggleFullscreen: () => { },
		closeWindow: () => { },
		writeSave: (data) => {
			localStorage.setItem("saveFile", data);
		},
		loadSave: async () => {
			if (localStorage.getItem("saveFile") !== null && localStorage.getItem("saveFile").defaultKeyboardControls1)
				return localStorage.getItem("saveFile");
			return { "defaultKeyboardControls1": { "keys": [["dash", "KeyY"], ["powerDash", "KeyJ"], ["pokaLili", "KeyT"], ["pokaSuli", "KeyG"], ["lili", "KeyR"], ["suli", "KeyF"], ["nasa", "KeyH"], ["frameAdvance", "Space"], ["select", "KeyR"], ["back", "KeyT"], ["start", "Escape"]], "arrows": [["KeyD", "KeyW", "KeyA", "KeyS"]], "deadzones": [0.25] }, "defaultKeyboardControls2": { "keys": [["dash", "KeyO"], ["powerDash", "KeyK"], ["pokaLili", "KeyP"], ["pokaSuli", "Semicolon"], ["lili", "BracketLeft"], ["suli", "Quote"], ["nasa", "KeyL"], ["frameAdvance", "Space"], ["select", "Enter"], ["back", "KeyP"], ["start", "Escape"]], "arrows": [["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]], "deadzones": [0.25] }, "defaultGamepadControls": { "keys": [["dash", 4], ["powerDash", 7], ["pokaLili", 3], ["pokaSuli", 1], ["lili", 2], ["suli", 0], ["nasa", 5], ["frameAdvance", 6], ["select", 0], ["back", 1], ["start", 9]], "arrows": [0], "deadzones": [0.35] }, "graphicsSettings": { "resolutionMult": 0.25 }, "currentLanguage": "tp", "promptTutorial": true, "version": "0.0.3" }
		},
		getSavesPath: () => { },
		getAppVersion: async () => "0.4.0"
	};
}

let appVersion = "";

let hit;
let hit2;
let canvas;

let saveFile;
let resetSave;

let characters = [];//An array of Player classes

let stages = [];//An array of World classes

let world;//debug

let keys = [];

let playerGamepads = [];

let currentScreen;
let loadingScreen;

let assetManager;

let g;

let lostFrames = 0;

let controls = [];

let controlsManager;

let playersManager;

let errorDisplayMessage = "";
let errorDisplayFrames = 0;

let promptTutorial = true;
let tutorialPromptSelected = false;

let transText;
let currentLanguage = "tp";//en or tp

let canDisplayFrameRate = false;

let dataOnFunction = (incomingData) => { };

let graphicsSettings = {
	resolutionMult: 1,
	spriteResolutionMult: 0.5
}

function preload() {
	//asuki = loadFont("resources/sitelenselikiwenasuki.ttf");
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);//512x384
	//g = createGraphics(512, 384);
	g = createGraphics(windowWidth, windowHeight);

	getAppVersion();

	Angle.initEnums();

	controlsManager = new ControlsManager(controls);

	playersManager = new PlayersManager(controls);

	assetManager = new AssetManager();

	assetManager.addFont("resources/sitelenselikiwenjuniko.ttf", "asuki");

	assetManager.addImage("resources/backgrounds/MenuSplash.png", "menuSplash");
	assetManager.addImage("resources/button_unpressed.png", "buttonUnpressed");
	assetManager.addImage("resources/button_pressed.png", "buttonPressed");
	assetManager.addImage("resources/language_button_unpressed.png", "buttonUnpressedLanguage");
	assetManager.addImage("resources/language_button_pressed.png", "buttonPressedLanguage");
	assetManager.addImage("resources/genericButtonOn.png", "buttonOn");
	assetManager.addImage("resources/genericButtonOff.png", "buttonOff");

	assetManager.addImage("resources/backgrounds/PlayerSelect.png", "playerSelect");
	assetManager.addImage("resources/keyboardIcon.png", "keyboardIcon");
	assetManager.addImage("resources/gamepadIcon.png", "gamepadIcon");
	assetManager.addImage("resources/keyboard.png", "keyboard");
	assetManager.addImage("resources/PerspectiveToggleAbsolute.png", "perspectiveToggleAbsolute");
	assetManager.addImage("resources/PerspectiveToggleRelative.png", "perspectiveToggleRelative");
	assetManager.addImage("resources/PowerDashMacro.png", "powerDashMacro");

	assetManager.addSpritesheet("resources/backgrounds/MenuSplashScarf.png", "menuSplashScarf", "//");
	assetManager.addSpritesheet("resources/menuFire.png", "menuFire", "//");
	assetManager.addSpritesheet("resources/keys.png", "keys", "//");
	assetManager.addSpritesheet("resources/nena.png", "nena", "//");
	assetManager.addSpritesheet("resources/HitEffect.png", "hitEffect", "//");
	assetManager.addSpritesheet("resources/HitBlockEffect.png", "hitBlockEffect", "//");
	assetManager.addSpritesheet("resources/HitParryEffect.png", "hitParryEffect", "//");
	assetManager.addSpritesheet("resources/CounterHitEffect.png", "counterHitEffect", "//");
	assetManager.addSpritesheet("resources/PunishHitEffect.png", "punishHitEffect", "//");
	assetManager.addSpritesheet("resources/PowerDashEffect.png", "powerDashEffect", "//");
	assetManager.addSpritesheet("resources/PowerDashSlow.png", "powerDashSlow", "//");
	assetManager.addSpritesheet("resources/sike_wawa_blue.png", "sikeWawaBlue", "//");
	assetManager.addSpritesheet("resources/sike_wawa_red.png", "sikeWawaRed", "//");

	assetManager.addSound("resources/music/telo nasa lon ilo.wav", "teloNasaLonIlo", {
		loop: true,
		volume: 0.2
	});
	assetManager.addSound("resources/music/kon wawa.wav", "konWawa", {
		loop: true,
		volume: 0.4
	});
	assetManager.addSound("resources/music/ken kulupu tomo.wav", "kenKulupuTomo", {
		loop: true,
		volume: 0.4
	});
	assetManager.addSound("resources/music/kalama pi kama sona.wav", "kalamaPiKamaSona", {
		loop: true,
		volume: 0.4
	});

	assetManager.addSound("resources/sfx/8bithit.wav", "8BitHit", {
		volume: 0.3
	});

	assetManager.addSound("resources/sfx/grab.wav", "grab", {
		volume: 1
	});

	assetManager.addSound("resources/sfx/explosion.wav", "explosion");

	assetManager.addSound("resources/sfx/awen.wav", "awen", {
		volume: 0.9
	});

	assetManager.addSound("resources/sfx/ParrySound.wav", "parry", {
		volume: 1.0
	});

	assetManager.addSound("resources/sfx/PowerDash.wav", "powerDash", {
		volume: 0.7
	});
	assetManager.addSound("resources/sfx/PowerDashSlow.wav", "powerDashSlow", {
		volume: 0.8
	});

	assetManager.addJSON("resources/misc/text.json", "text");

	for (let i in characters) {
		characters[i].addAssets();
	}
	for (let i in stages) {
		stages[i].addAssets();
	}

	assetManager.loadAssets();

	loadingScreen = new LoadingScreen();

	loadingScreen.init();

	currentScreen = loadingScreen;

	//These 3 lines should be used only if we want pixel art
	//pixelDensity(1);
	//g.noSmooth();
	//noSmooth();

	frameRate(60);

	//resetSaveFile();
	loadSaveFile();
}

function draw() {
	if (debug.controlFrameRateMouse) {
		frameRate(constrain(90 * mouseX / windowWidth, 1, 60));
	}
	if (debug.displayFrameRate) {
		debug.effectiveFrameRates.push(1);
	}

	if (document.hasFocus())
		gamepads = navigator.getGamepads();

	let frameAdvance = !debug.manualFrameAdvance || controls.length === 0;

	if (!debug.noUpdateControls) {
		for (let c in controls) {
			controls[c].update();
			if (controls[c].buttons.frameAdvance && (controls[c].clickedAbsolute("frameAdvance") || (controls[c].pressed("frameAdvance") && controls[c].heldFrames("frameAdvance") > 15)))
				frameAdvance = true;
		}
	} else if (!frameAdvance && keyIsDown(32)) {
		frameAdvance = true;
	}

	//background(0);

	if (currentScreen) {
		if (controlsManager.overrideScreen) {
			controlsManager.run();
		} else if (playersManager.overrideScreen) {
			playersManager.run();
		} else if (frameAdvance && !controlsManager.overrideScreen && !playersManager.overrideScreen) {
			currentScreen.run();

			if (!debug.noSkipFrames && currentScreen.canSkipFrames) {
				if (deltaTime > 100 / 6)
					lostFrames += deltaTime * 6 / 100 - 1;
				lostFrames = constrain(lostFrames, 0, 4);

				let i = 0;
				while (lostFrames >= 1 && i < 2) {//This is an attempt to make the game feel less stuttery - it's possible that this could break the consistency of frame perfect stuff, IDK
					if (!debug.noUpdateControls) {
						for (let c in controls) {
							controls[c].update();
						}
					}
					currentScreen.run();
					lostFrames--;
					i++;

					if (debug.displayFrameRate) {
						debug.effectiveFrameRates[debug.effectiveFrameRates.length - 1]++;
					}
				}
			}
		}

		if (!debug.noSkipDraw && debug.noSkipFrames) {
			if (deltaTime > 100 / 6)
				lostFrames += deltaTime * 6 / 100 - 1;
			lostFrames = constrain(lostFrames, 0, 4);
		}
		if (!debug.noSkipDraw && lostFrames > 0.5) {
			lostFrames -= 0.5;
		} else if (!debug.negateDraw && !playersManager.overrideScreen) {
			currentScreen.draw(g);
		}

		if (controlsManager.overrideScreen) {
			controlsManager.draw(g);
		} else if (playersManager.overrideScreen) {
			playersManager.draw(g);
		}
	}
	/*if (currentScreen === undefined) {
		currentScreen = new DebugScreen();
    }*/

	//world.run();
	//world.draw(g, 0, 0);
	/*gamepads = navigator.getGamepads();
	//print(gamepads.length);
	//if(gamepads.length >= 0)
		//controls.setKeyspad(gamepads[0]);
	controls.update();
	//print(controls.buttons.jump.clicked);
	
	hit.x = mouseX;
	hit.y = mouseY;
	
	g.background(255);
	
	hit.debugDraw(g);
	hit2.debugDraw(g);
	
	g.textSize(12);
	g.textFont(asuki);
	g.fill(0);
	g.text("musi Utale! 󱤑󱦐󱤨󱤊󱥔󱤊󱤞󱤄󱦑󱤧󱤱󱥍󱦗󱤿‍󱥠󱥠󱥗󱤛󱦘", 20, 20);
	g.text(Hitcircle.collide(hit, hit2), 20, 50);

	g.noFill();
	g.stroke(255, 0, 0);
	g.strokeWeight(3);
	g.rect(0, 0, 512, 384);*/

	image(g, 0, 0, width, height);

	if (errorDisplayFrames > 0) {
		errorDisplayFrames--;
		stroke(0, 0, 14, errorDisplayFrames * 2);
		fill(235, 10, 20, errorDisplayFrames * 2);
		textFont(assetManager.fonts.asuki);
		textAlign(CENTER, CENTER);
		textSize(60);
		text(errorDisplayMessage, width / 2, height / 2);
		textAlign(LEFT, BASELINE);
	}
	
	if (debug.displayFrameRate && deltaTime > 0 && canDisplayFrameRate) {
		debug.effectiveFrameRates[debug.effectiveFrameRates.length - 1] *= 1000 / deltaTime;
		if (debug.effectiveFrameRates.length > 30)
			debug.effectiveFrameRates.splice(0, 1);

		let rate = frameRate();
		if (rate < 2000)
			debug.frameRates.push(frameRate());
		if (debug.frameRates.length > 30)
			debug.frameRates.splice(0, 1);

		let sum = 0;
		debug.frameRates.forEach((a) => {
			sum += a;
		});

		fill(255, 0, 0, 170);
		noStroke();
		textSize(15);
		text("Framerate: " + (round(sum / debug.frameRates.length * 10) / 10), 10, 20);

		sum = 0;
		debug.effectiveFrameRates.forEach((a) => {
			sum += a;
		});

		fill(255, 0, 0, 170);
		noStroke();
		textSize(15);
		text("Effective Framerate: " + (round(sum / debug.effectiveFrameRates.length * 10) / 10), 10, 40);
    }
}

async function getAppVersion() {
	appVersion = await window.electronAPI.getAppVersion();
}

function drawBackHold(g, hold = 60) {
	g.push();
	g.scale(height / 384);

	let maxHeld = 0;
	for (let i in controls) {
		if (!controls[i].computer)
			maxHeld = max(maxHeld, controls[i].heldFrames("back"));
	}
	g.noStroke();
	let size = 40;
	if (maxHeld > 0) {
		g.fill(75, 20, 20);
		g.ellipse(60, 60, 90, 90);
		size = 60;
	}
	g.fill(150, 40, 40, 150 + maxHeld * 200 / hold);
	g.arc(60, 60, 80, 80, PI / 2, PI / 2 + maxHeld * 2 * PI / (hold - 1));

	assetManager.spritesheets.nena.drawFrame(g, currentLanguage === "en" ? 42 : 32, 60 - size / 2, 60 - size / 2, size, size);

	g.pop();
}

function mouseWheelHelper(e) { }
function mouseWheel(e) { 
	mouseWheelHelper(e);
}
function mousePressedHelper(e) { }
function mousePressed(e) {
	mousePressedHelper(e);
}
function mouseDraggedHelper(e) { }
function mouseDragged(e) {
	mouseDraggedHelper(e);
}

function keyPressedHelper(e) { }

function keyPressed(e) {
	keys[e.code] = true;

	keyPressedHelper(e);

	if (keys.Escape && debug.escapeKeyExit) {
		window.electronAPI.closeWindow();
	}
	if (keys.F11) {
		window.electronAPI.toggleFullscreen();
	}

	return false;
}

function keyReleased(e) {
	keys[e.code] = false;
	
	return false;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	g = createGraphics(windowWidth, windowHeight);
}

function resetSaveFile() {
	if (webVersion)
		return;
	resetSave = loadJSON("resources/SaveReset.json", finishResetSaveFile);
}
function finishResetSaveFile() {
	if (webVersion)
		return;
	saveFile = resetSave;
	loadSaveObject(saveFile);
	writeSaveFile();
}

function loadSaveFile() {
	setTimeout(async () => {
		saveFile = await window.electronAPI.loadSave();

		loadSaveObject(saveFile);
	});
}

function loadSaveObject(saveFile) {
	let keyboard1;
	let keyboard2;
	switch (saveFile.version) {
		case "0.0.1":
			controlsManager.defaultKeyboardControls1 = saveFile.defaultKeyboardControls1;
			controlsManager.defaultKeyboardControls2 = saveFile.defaultKeyboardControls2;
			controlsManager.defaultGamepadControls = saveFile.defaultGamepadControls;

			keyboard1 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls1.keys, controlsManager.defaultKeyboardControls1.arrows, controlsManager.defaultKeyboardControls1.deadzones);
			keyboard2 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls2.keys, controlsManager.defaultKeyboardControls2.arrows, controlsManager.defaultKeyboardControls2.deadzones);
			controls.push(keyboard1);
			controls.push(keyboard2);
			controlsManager.keyboardControls.push(keyboard1);
			controlsManager.keyboardControls.push(keyboard2);
			break;
		case "0.0.2":
			controlsManager.defaultKeyboardControls1 = saveFile.defaultKeyboardControls1;
			controlsManager.defaultKeyboardControls2 = saveFile.defaultKeyboardControls2;
			controlsManager.defaultGamepadControls = saveFile.defaultGamepadControls;

			keyboard1 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls1.keys, controlsManager.defaultKeyboardControls1.arrows, controlsManager.defaultKeyboardControls1.deadzones);
			keyboard2 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls2.keys, controlsManager.defaultKeyboardControls2.arrows, controlsManager.defaultKeyboardControls2.deadzones);
			controls.push(keyboard1);
			controls.push(keyboard2);
			controlsManager.keyboardControls.push(keyboard1);
			controlsManager.keyboardControls.push(keyboard2);
			currentLanguage = saveFile.currentLanguage;
			break;
		case "0.0.3":
			controlsManager.defaultKeyboardControls1 = saveFile.defaultKeyboardControls1;
			controlsManager.defaultKeyboardControls2 = saveFile.defaultKeyboardControls2;
			controlsManager.defaultGamepadControls = saveFile.defaultGamepadControls;

			keyboard1 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls1.keys, controlsManager.defaultKeyboardControls1.arrows, controlsManager.defaultKeyboardControls1.deadzones);
			keyboard2 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls2.keys, controlsManager.defaultKeyboardControls2.arrows, controlsManager.defaultKeyboardControls2.deadzones);
			controls.push(keyboard1);
			controls.push(keyboard2);
			controlsManager.keyboardControls.push(keyboard1);
			controlsManager.keyboardControls.push(keyboard2);
			currentLanguage = saveFile.currentLanguage;
			promptTutorial = saveFile.promptTutorial;
			break;
	}
}

function writeSaveFile() {
	let saveFile = {};
	/*saveFile.defaultKeyboardControls1 = {
		keys: [["dash", "KeyY"],
			["pokaLili", "KeyT"],
			["pokaSuli", "KeyG"],
			["lili", "KeyR"],
			["suli", "KeyF"],
			["nasa", "KeyH"],
			["frameAdvance", "Space"],
			["select", "KeyR"],
			["back", "KeyT"],
			["start", "Enter"]],
		arrows: [["KeyD", "KeyW", "KeyA", "KeyS"]],
		deadzones: [0.25]
	};
	saveFile.defaultKeyboardControls2 = {
		keys: [["dash", "KeyO"],
			["pokaLili", "KeyP"],
			["pokaSuli", "Semicolon"],
			["lili", "BracketLeft"],
			["suli", "Quote"],
			["nasa", "KeyL"],
			["frameAdvance", "Space"],
			["select", "BracketLeft"],
			["back", "KeyP"],
			["start", "Enter"]],
		arrows: [["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]],
		deadzones: [0.25]
	};
	saveFile.defaultGamepadControls = {
		keys: [["dash", 4],
			["pokaLili", 3],
			["pokaSuli", 1],
			["lili", 2],
			["suli", 0],
			["nasa", 5],
			["frameAdvance", 7],
			["select", 0],
			["back", 1],
			["start", 10]],
		arrows: [0],
		deadzones: [0.25]
	};*/
	saveFile.defaultKeyboardControls1 = controlsManager.defaultKeyboardControls1;
	saveFile.defaultKeyboardControls2 = controlsManager.defaultKeyboardControls2;
	saveFile.defaultGamepadControls = controlsManager.defaultGamepadControls;

	saveFile.graphicsSettings = graphicsSettings;

	saveFile.currentLanguage = currentLanguage;

	saveFile.promptTutorial = promptTutorial;

	saveFile.version = "0.0.3";

	window.electronAPI.writeSave(saveFile);
}

/**
 * Stands for get text - returns the text in the correct language specified by the currentLanguage variable
 * @param {string} key
 * @returns
 */
function gt(key) {
	return transText[key][currentLanguage].text;
}
/**
 * Stands for get size - returns the size of the text in the correct language specified by the currentLanguage variable
 * @param {string} key
 * @returns
 */
function gs(key) {
	return transText[key][currentLanguage].size;
}

function defaultCopyValues(dest, obj, excludes = []) {
	if (!dest && !!obj) {
		dest = {};
	}
	mainCopyLoop: for (let i in obj) {
		for (let u in excludes) {
			if (i === excludes[u])
				continue mainCopyLoop;
		}
		if (typeof obj[i] === "object") {
			if (!obj[i]) {
				dest[i] = obj[i];
			} else if (dest[i] && dest[i].deserialize) {
				dest[i].deserialize(obj[i]);
			} else {
				if (!dest[i] && !!obj[i])
					dest[i] = {};
				defaultCopyValues(dest[i], obj[i]);
			}
		} else {
			dest[i] = obj[i];
		}
	}
}

function compareObjects(obj1, obj2, u = "") {
	//if (typeof obj1 !== "object" || typeof obj2 !== "object")
	//	print("typeof " + u, obj1, obj2, obj1 === obj2);
	if (typeof obj1 !== "object" || typeof obj2 !== "object")
		return obj1 === obj2 ? "" : u;
		
	for (let i in obj1) {
		if (obj2[i] !== undefined) {
			let out = compareObjects(obj1[i], obj2[i], i);
			//if (out !== "") {
			//	print("obj2[i] " + (u === "" ? "" : u + ".") + out, i);
			//} else {
			//	print("test: " + (u === "" ? "" : u + ".") + i);
			//}
			if (out !== "")
				return (u === "" ? "" : u + ".") + out;
		} else {
			//print("!obj2[i] " + i);
			return (u === "" ? "" : u + ".") + i;
		}
	}

	for (let i in obj2) {
		if (obj1[i] !== undefined) {
			let out = compareObjects(obj2[i], obj1[i], i);
			//if (out !== "") {
			//	print("obj2[i] " + (u === "" ? "" : u + ".") + out, i);
			//} else {
			//	print("test: " + (u === "" ? "" : u + ".") + i);
			//}
			if (out !== "")
				return (u === "" ? "" : u + ".") + out;
		} else {
			//print("!obj2[i] " + i);
			return (u === "" ? "" : u + ".") + i;
		}
	}

	return "";
}

function defaultDeserialize(dest, obj) {
	if (typeof obj !== "object") {
		dest = obj;
		return;
	}
	if (dest?.deserialize) {
		dest.deserialize(obj);
		return;
	}

	if (!dest && !!obj) {
		dest = { };
	}
	for (let i in obj) {
		if (typeof obj[i] === "object") {
			if (!obj[i]) {
				dest[i] = obj[i];
			} else if (dest[i] && dest[i].deserialize) {
				dest[i].deserialize(obj[i]);
			} else {
				defaultDeserialize(dest[i], obj[i]);
			}
		} else {
			dest[i] = obj[i];
		}
	}
}

function defaultSerialize(obj) {
	if (typeof obj !== "object")
		return obj;
	if (obj.serialize)
		return obj.serialize();

	let outputObject = {};
	for (let i in obj) {
		if (typeof obj[i] === "object") {
			if (!obj[i]) {
				outputObject[i] = obj[i];
			} else if (obj[i].serialize) {
				outputObject[i] = obj[i].serialize();
			} else {
				outputObject[i] = defaultSerialize(obj[i]);
			}
			//print(i);
		} else {
			outputObject[i] = obj[i];
		}
	}
	return outputObject;
}

window.onerror = function (msg, url, linenumber) {
	alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
	console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
	return true;
}