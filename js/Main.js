"use strict";

if (!window.electronAPI) {
	window.electronAPI = {
		toggleFullscreen: () => { },
		closeWindow: () => { },
		writeSave: (data) => { },
		loadSave: () => { },
		getSavesPath: () => { }
	};
}

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

let dataOnFunction = (incomingData) => { };

let graphicsSettings = {
	resolutionMult: 1
}

function preload() {
	//asuki = loadFont("resources/sitelenselikiwenasuki.ttf");
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);//512x384
	//g = createGraphics(512, 384);
	g = createGraphics(windowWidth, windowHeight);

	Angle.initEnums();

	controlsManager = new ControlsManager(controls);

	playersManager = new PlayersManager(controls);

	assetManager = new AssetManager();

	assetManager.addFont("resources/sitelenselikiwenasuki.ttf", "asuki");

	assetManager.addImage("resources/backgrounds/MenuSplash.png", "menuSplash");
	assetManager.addImage("resources/button_unpressed.png", "buttonUnpressed");
	assetManager.addImage("resources/button_pressed.png", "buttonPressed");

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
	}

	background(0);

	if (currentScreen) {
		if (frameAdvance && !controlsManager.overrideScreen && !playersManager.overrideScreen) {
			currentScreen.run();

			if (!debug.noSkipFrames && currentScreen.canSkipFrames) {
				if (deltaTime > 100 / 6)
					lostFrames += deltaTime * 6 / 100 - 1;
				lostFrames = min(3, lostFrames);

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
		if (controlsManager.overrideScreen) {
			controlsManager.run();
		} else if (playersManager.overrideScreen) {
			playersManager.run();
		}
		
		if (!debug.negateDraw) {
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
	
	if (debug.displayFrameRate && deltaTime > 0) {
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

function drawBackHold(g, hold = 60) {
	let maxHeld = 0;
	for (let i in controls) {
		if (!controls[i].computer)
			maxHeld = max(maxHeld, controls[i].heldFrames("back"));
	}
	g.noStroke();
	g.fill(150, 40, 40, 150 + maxHeld * 200 / hold);
	g.arc(60, 60, 80, 80, PI / 2, PI / 2 + maxHeld * 2 * PI / (hold - 1));
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
	resetSave = loadJSON("resources/SaveReset.json", finishResetSaveFile);
}
function finishResetSaveFile() {
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
	if (saveFile.version === "0.0.1") {
		controlsManager.defaultKeyboardControls1 = saveFile.defaultKeyboardControls1;
		controlsManager.defaultKeyboardControls2 = saveFile.defaultKeyboardControls2;
		controlsManager.defaultGamepadControls = saveFile.defaultGamepadControls;

		let keyboard1 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls1.keys, controlsManager.defaultKeyboardControls1.arrows, controlsManager.defaultKeyboardControls1.deadzones);
		let keyboard2 = new Controls("keyboard", keys, controlsManager.defaultKeyboardControls2.keys, controlsManager.defaultKeyboardControls2.arrows, controlsManager.defaultKeyboardControls2.deadzones);
		controls.push(keyboard1);
		controls.push(keyboard2);
		controlsManager.keyboardControls.push(keyboard1);
		controlsManager.keyboardControls.push(keyboard2);
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

	saveFile.version = "0.0.1";

	window.electronAPI.writeSave(saveFile);
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