"use strict";

p5.disableFriendlyErrors = true;

let webVersion = false;
let webgl = false;

let promptFile = document.getElementById("promptFile");
promptFile.addEventListener(
	"change",
	() => {
		if (currentScreen.receiveWebFile)
			currentScreen.receiveWebFile(promptFile.files[0]);
	}
);

if (!window.currentDir) {
	window.currentDir = "";
	console.log("oop");
}
if (!window.electronAPI) {
	webVersion = true;
	dirLoaded = true;
	window.electronAPI = {
		toggleFullscreen: () => { },
		toggleMenuBar: () => { },
		closeWindow: () => { },
		readdir: async (name) => [],
		setMods: (data) => { },
		getMods: (name) => { return []; },
		saveReplay: async (name, data) => { },
		getReplay: async (name) => { },
		writeSave: (data) => {
			localStorage.setItem("saveFile", JSON.stringify(data));
		},
		loadSave: async () => {
			try {
				let file = JSON.parse(localStorage.getItem("saveFile"));
				if (localStorage.getItem("saveFile") !== null && file.defaultKeyboardControls1)
					return file;
			} catch { }
			return { "autoReplay": false, "maxReplays": 10, "defaultKeyboardControls1": { "keys": [["dash", "KeyY"], ["powerDash", "KeyJ"], ["pokaLili", "KeyT"], ["pokaSuli", "KeyG"], ["lili", "KeyR"], ["suli", "KeyF"], ["nasa", "KeyH"], ["frameAdvance", "Space"], ["select", "KeyR"], ["back", "KeyT"], ["start", "Escape"]], "arrows": [["KeyD", "KeyW", "KeyA", "KeyS"]], "deadzones": [0.25] }, "defaultKeyboardControls2": { "keys": [["dash", "KeyO"], ["powerDash", "KeyK"], ["pokaLili", "KeyP"], ["pokaSuli", "Semicolon"], ["lili", "BracketLeft"], ["suli", "Quote"], ["nasa", "KeyL"], ["frameAdvance", "Space"], ["select", "Enter"], ["back", "KeyP"], ["start", "Escape"]], "arrows": [["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]], "deadzones": [0.25] }, "defaultGamepadControls": { "keys": [["dash", 4], ["powerDash", 7], ["pokaLili", 3], ["pokaSuli", 1], ["lili", 2], ["suli", 0], ["nasa", 5], ["frameAdvance", 6], ["select", 0], ["back", 1], ["start", 9], ["up", 12], ["down", 13], ["left", 14], ["right", 15]], "arrows": [0], "deadzones": [0.35] }, "graphicsSettings": { "resolutionMult": 0.5, "spriteResolutionMult": 0.25, antiAliasing: false, "noSplitSheets": true, capFPS: 2 }, "currentLanguage": "tp", "promptTutorial": true, "globalVolume": 1, "version": "0.2.0" }
		},
		getSavesPath: () => { },
		getAppVersion: async () => { appVersion = "0.5.1"; return appVersion; }
	};
}

let timesAlerted = 0;
let totalAlerts = "";

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

let cursorMoveCounter = 0;//When 0, no cursor

let currentScreen;
let loadingScreen;

let assetManager;

let g;

let lostFrames = 0;
let lostDrawFrames = 0;
let previousDrawTime = 0;

let controls = [];

let controlsManager;

let playersManager;

let savingReplayDisplay = false;

let dynamicLoadingDisplay = false;
let forceDynamicLoadingDisplay = false;
let loadingImages = undefined;

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
	spriteResolutionMult: 1,
	antiAliasing: true,
	noSplitSheets: true,
	capFPS: 2//Will skip drawing one of however many frames this number is
}

let maxReplays = 10;
let autoReplay = false;

function preload() {
	//asuki = loadFont("resources/sitelenselikiwenasuki.ttf");
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, (webgl ? WEBGL : undefined));//512x384
	//g = createGraphics(512, 384);
	//g = createGraphics(windowWidth, windowHeight);
	g = window;

	getAppVersion();

	Angle.initEnums();

	controlsManager = new ControlsManager(controls);

	playersManager = new PlayersManager(controls);

	assetManager = new AssetManager();

	assetManager.addFont("resources/sitelenselikiwenjuniko.ttf", "asuki", true);

	assetManager.addImage("resources/backgrounds/MenuSplash.png", "menuSplash", true);
	assetManager.addImage("resources/backgrounds/MenuSplashTraining.png", "menuSplashTraining", true);
	assetManager.addImage("resources/button_unpressed.png", "buttonUnpressed", true);
	assetManager.addImage("resources/button_pressed.png", "buttonPressed", true);
	assetManager.addImage("resources/language_button_unpressed.png", "buttonUnpressedLanguage", true);
	assetManager.addImage("resources/language_button_pressed.png", "buttonPressedLanguage", true);
	assetManager.addImage("resources/genericButtonOn.png", "buttonOn", true);
	assetManager.addImage("resources/genericButtonOff.png", "buttonOff", true);

	assetManager.addImage("resources/backgrounds/PlayerSelect.png", "playerSelect", true);
	assetManager.addImage("resources/keyboardIcon.png", "keyboardIcon", true);
	assetManager.addImage("resources/gamepadIcon.png", "gamepadIcon", true);
	assetManager.addImage("resources/keyboard.png", "keyboard", true);
	assetManager.addImage("resources/PerspectiveToggleAbsolute.png", "perspectiveToggleAbsolute", true);
	assetManager.addImage("resources/PerspectiveToggleRelative.png", "perspectiveToggleRelative", true);
	assetManager.addImage("resources/PowerDashMacro.png", "powerDashMacro", true);

	assetManager.addSpritesheetImp("resources/backgrounds/MenuSplashScarf.png", "menuSplashScarf", "//");
	assetManager.addSpritesheetImp("resources/backgrounds/MenuSplashRibbon.png", "menuSplashRibbon", "//");
	assetManager.addSpritesheetImp("resources/menuFire.png", "menuFire", "//");
	assetManager.addSpritesheetImp("resources/keys.png", "keys", "//");
	assetManager.addSpritesheetImp("resources/nena.png", "nena", "//");
	assetManager.addSpritesheetImp("resources/HitEffect.png", "hitEffect", "//");
	assetManager.addSpritesheetImp("resources/HitBlockEffect.png", "hitBlockEffect", "//");
	assetManager.addSpritesheetImp("resources/HitParryEffect.png", "hitParryEffect", "//");
	assetManager.addSpritesheetImp("resources/CounterHitEffect.png", "counterHitEffect", "//");
	assetManager.addSpritesheetImp("resources/PunishHitEffect.png", "punishHitEffect", "//");
	assetManager.addSpritesheetImp("resources/PowerDashEffect.png", "powerDashEffect", "//");
	assetManager.addSpritesheetImp("resources/PowerDashSlow.png", "powerDashSlow", "//");
	assetManager.addSpritesheetImp("resources/sike_wawa_blue.png", "sikeWawaBlue", "//");
	assetManager.addSpritesheetImp("resources/sike_wawa_red.png", "sikeWawaRed", "//");
	assetManager.addSpritesheetImp("resources/arrowPakala.png", "arrowPakala", "//");

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
	assetManager.addSound("resources/music/ma weka.wav", "maWeka", {
		loop: true,
		volume: 0.4
	});
	assetManager.addSound("resources/music/awen tawa.wav", "awenTawa", {
		loop: true,
		volume: 0.4
	});

	assetManager.addSound("resources/sfx/8bithit.wav", "8BitHit", {
		volume: 0.3
	}, true);

	assetManager.addSound("resources/sfx/grab.wav", "grab", {
		volume: 1
	}, true);

	assetManager.addSound("resources/sfx/explosion.wav", "explosion", {}, true);

	assetManager.addSound("resources/sfx/explosion2.wav", "explosion2", {}, true);

	assetManager.addSound("resources/sfx/awen.wav", "awen", {
		volume: 0.9
	}, true);

	assetManager.addSound("resources/sfx/ParrySound.wav", "parry", {
		volume: 1.0
	}, true);

	assetManager.addSound("resources/sfx/PowerDash.wav", "powerDash", {
		volume: 0.7
	}, true);
	assetManager.addSound("resources/sfx/PowerDashSlow.wav", "powerDashSlow", {
		volume: 0.8
	}, true);

	assetManager.addJSON("resources/misc/text.json", "text");

	for (let i in modFuncs) {
		modFuncs[i]();
	}

	for (let i in characters) {
		characters[i].addAssets();
	}
	for (let i in stages) {
		stages[i].addAssets();
	}

	loadingScreen = new LoadingScreen();

	loadingScreen.init();

	currentScreen = loadingScreen;

	frameRate(60);

	//resetSaveFile();
	loadSaveFile(() => {
		assetManager.loadAssets();

		if (!graphicsSettings.antiAliasing) {
			//These 3 lines should be used only if we want pixel art
			pixelDensity(1);
			g.noSmooth();
			noSmooth();
		}
	});
}

function draw() {
	gamepads = navigator.getGamepads();

	if (cursorMoveCounter > 0) {
		cursorMoveCounter--;
		if (cursorMoveCounter === 1)
			noCursor();
	}

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
			if (controls[c].buttons.frameAdvance && (controls[c].clickedAbsolute("frameAdvance") || (controls[c].pressed("frameAdvance") && controls[c].heldFrames("frameAdvance") > 25)))
				frameAdvance = true;
		}
	} else if (!frameAdvance && keyIsDown(32)) {
		frameAdvance = true;
	}

	//background(0);

	if (currentScreen) {

		if (!dynamicLoadingDisplay) {
			let lostDrawCurrent = 0;
			if (!debug.noSkipDraw) {
				if (deltaTime > 100 / 6)
					lostDrawCurrent = Math.min(0.5, deltaTime * 6 / 100 - 1);
				lostDrawFrames += lostDrawCurrent;
				lostDrawFrames = constrain(lostDrawFrames, 0, 4);
			}

			if (controlsManager.overrideScreen) {
				controlsManager.run();
			} else if (playersManager.overrideScreen) {
				playersManager.run();
			} else if (frameAdvance && !controlsManager.overrideScreen && !playersManager.overrideScreen) {
				currentScreen.run();

				if (!debug.noSkipFrames && currentScreen.canSkipFrames) {
					if (deltaTime > 100 / 6 + lostDrawCurrent)
						lostFrames += deltaTime * 6 / 100 - 1 - lostDrawCurrent;
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
		}

		//let drawStartTime = performance.now();
		if (graphicsSettings.capFPS <= 1 || frameCount % graphicsSettings.capFPS < graphicsSettings.capFPS - 1) {
			if (!debug.noSkipDraw && lostDrawFrames > 1 && currentScreen.canSkipFrames) {
				lostDrawFrames -= 0.5;//Prevent the frame from being drawn if the framerate is lagging behind
			} else if (!debug.negateDraw) {//If the debug option to negate drawing is toggled off
				if (dynamicLoadingDisplay) {
					drawLoadingScreen(g);
					if (assetManager.getRealDisplayPercent() >= 100 && !forceDynamicLoadingDisplay) {
						dynamicLoadingDisplay = false;
						if (currentScreen.loaded)
							currentScreen.loaded();
						else
							print("Current screen does not have a \"loaded\" function");
					}
				} else {
					if (!playersManager.overrideScreen)
						currentScreen.draw(g);

					if (controlsManager.overrideScreen) {
						controlsManager.draw(g);
					} else if (playersManager.overrideScreen) {
						playersManager.draw(g);
					}
				}
			}
		}
		//previousDrawTime = performance.now() - drawStartTime;

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

	//image(g, (webgl ? -width / 2 : 0), (webgl ? -height / 2 : 0));

	if (savingReplayDisplay) {
		stroke(0, 0, 14);
		fill(195, 10, 20);
		textFont(assetManager.fonts.asuki);
		textAlign(LEFT, BASELINE);
		textSize(30 * width / 512);
		let savingText = gt("savingReplay");
		text(savingText.substring(0, savingText.length - 3 + (frameCount % 4)), 10 * width / 512, height - 30 * width / 512);
		textAlign(LEFT, BASELINE);
	}

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

		textAlign(LEFT, BASELINE);
		textFont(assetManager.fonts.asuki);
		fill(255, 0, 0, 170);
		noStroke();
		textSize(25);
		text("Framerate: " + (round(sum / debug.frameRates.length * 10) / 10), 10, 20);

		sum = 0;
		debug.effectiveFrameRates.forEach((a) => {
			sum += a;
		});

		fill(255, 0, 0, 170);
		noStroke();
		textSize(25);
		text("Effective Framerate: " + (round(sum / debug.effectiveFrameRates.length * 10) / 10), 10, 45);
    }
}

async function getAppVersion() {
	appVersion = await window.electronAPI.getAppVersion();
	return appVersion;
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
	if (keys.F3) {
		window.electronAPI.toggleMenuBar();
	}

	return false;
}

function keyReleased(e) {
	keys[e.code] = false;
	
	return false;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight, (webgl ? WEBGL : undefined));
	//g.remove();
	//g = createGraphics(windowWidth, windowHeight);
	g = window;
}

function mouseMoved() {
	cursor(ARROW);
	cursorMoveCounter = 180;
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

function loadSaveFile(buffer = () => {}) {
	setTimeout(async () => {
		saveFile = await window.electronAPI.loadSave();

		loadSaveObject(saveFile);

		buffer();
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
		case "0.0.4":
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

			for (let i in saveFile.graphicsSettings) {
				graphicsSettings[i] = saveFile.graphicsSettings[i];
			}
			debug.noSplit = graphicsSettings.noSplitSheets;
			break;
		case "0.1.0":
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

			for (let i in saveFile.graphicsSettings) {
				graphicsSettings[i] = saveFile.graphicsSettings[i];
			}
			debug.noSplit = graphicsSettings.noSplitSheets;

			maxReplays = saveFile.maxReplays;
			autoReplay = saveFile.autoReplay;

			break;
		case "0.2.0":
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

			for (let i in saveFile.graphicsSettings) {
				graphicsSettings[i] = saveFile.graphicsSettings[i];
			}
			debug.noSplit = graphicsSettings.noSplitSheets;

			maxReplays = saveFile.maxReplays;
			autoReplay = saveFile.autoReplay;

			Howler.volume(saveFile.globalVolume);

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
	saveFile.autoReplay = autoReplay;
	saveFile.maxReplays = maxReplays;

	saveFile.defaultKeyboardControls1 = controlsManager.defaultKeyboardControls1;
	saveFile.defaultKeyboardControls2 = controlsManager.defaultKeyboardControls2;
	saveFile.defaultGamepadControls = controlsManager.defaultGamepadControls;

	saveFile.graphicsSettings = graphicsSettings;

	saveFile.currentLanguage = currentLanguage;

	saveFile.promptTutorial = promptTutorial;

	saveFile.globalVolume = Howler.volume();

	saveFile.version = "0.2.0";

	window.electronAPI.writeSave(saveFile);
}

function drawLoadingScreen(g) {
	g.background(0);

	if (assetManager.getFontLoadedFraction() >= 1 && !forceDynamicLoadingDisplay) {
		/*let text = [];
		g.textFont(assetManager.fonts.asuki);
		text = ["󱤴", "󱤬", "󱤉", "󱤰"];
		g.fill(255);
		g.textSize(30);
		g.textAlign(CENTER, CENTER);
		let displayText = text;*/
		if (loadingImages) {
			for (let i in loadingImages) {
				let offset = 0;
				if ((floor(frameCount / 10) - i + 4) % 4 < 1)
					offset = 7;
				g.image(loadingImages[i], width / 2 - 45 + 20 * i, height / 2 - offset - 50);
				//g.text(displayText[i], width / 2 - 30 + 20 * i, height / 2 - offset - 35);
			}
			g.textFont(assetManager.fonts.asuki);
			g.fill(255);
			g.noStroke();
			g.textSize(30);
			g.textAlign(CENTER, CENTER);
			g.text(floor(max(assetManager.getNonImpDisplayPercent(), /*assetManager.getRealDisplayPercentNonsmall()*/0)) + "%", windowWidth / 2, windowHeight / 2);
		} else {
			loadingImages = [];
			let g = createGraphics(30, 30);
			let displayText = ["󱤴", "󱤬", "󱤉", "󱤰"];
			for (let i = 0; i < text.length; i++) {
				g.textFont(assetManager.fonts.asuki);
				g.fill(255);
				g.noStroke();
				g.textSize(30);
				g.textAlign(CENTER, CENTER);
				g.text(displayText[i], 15, 15);
				loadingImages.push(g.get());
				g.clear();
			}
			g.remove();
		}
	}
}

/**
 * For use after specific contexts where you want something to be guarunteed smooth or noSmooth to reset to what it was before
 */
function resetSmoothingToSave() {
	if (graphicsSettings.antiAliasing) {
		smooth();
	} else {
		noSmooth();
	}
}

function reloadGame() {
	if (webVersion) {
		location.reload();
	} else {
		window.electronAPI.reloadWindow();
	}
}

function drawControlsKeyImage(g, controls, name, x, y, width, height) {
	let keySheet = controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
	//let langOff = (currentLanguage === "en" ? 10 : 0);
	let buttonID = (controls.layout === "keyboard" ? (keyImageID[controls.buttons[name].code] !== undefined ? keyImageID[controls.buttons[name].code] : keyImageIDLength) : min(18, controls.buttons[name].code));

	//assetManager.spritesheets.nena.drawFrame(g, num + 25 + langOff, 108.5 + 30 * id, 135 + 100 * ud, 25, 25);
	keySheet.drawFrame(g, buttonID, x, y, width, height);
}

function drawGameKeyImage(g, name, x, y, width, height) {
	let buttonArray = ["lili", "suli", "pokaLili", "pokaSuli", "nasa", "dash", "select", "back", "start", "frameAdvance"];
	let num = buttonArray.indexOf(name);
	//let keySheet = controls.layout === "keyboard" ? assetManager.spritesheets.keys : assetManager.spritesheets.nena;
	let langOff = (currentLanguage === "en" ? 10 : 0);
	//let buttonID = (controls.layout === "keyboard" ? (keyImageID[controls.buttons[name].code] !== undefined ? keyImageID[controls.buttons[name].code] : keyImageIDLength) : min(18, controls.buttons[name].code));
	
	assetManager.spritesheets.nena.drawFrame(g, num + 25 + langOff, x, y, width, height);
	//keySheet.drawFrame(g, buttonID, 108.5 + 30 * id, 135 + 100 * ud + 26, 25, 25);
}

/**
 * 
 * @param {Graphics} g
 * @param {Spritesheet} sheet
 * @param {number} x
 * @param {number} y
 */
function drawHologram(g, sheet, x, y, rotValue = 0, width = sheet.width, height = sheet.height) {
	let rShearX = random(-0.4, 0.4);
	let rShearY = random(-0.4, 0.4);
	if (random(0, 1) < 0.9) {
		rShearX = 0;
		rShearY = 0;
	}

	g.push();
	g.translate(x, y);
	//g.shearX(mouseX / 512 - 0.5);
	//g.shearY(mouseY / 384 - 0.5);
	g.rotate(rotValue);
	g.shearX(rShearX);
	g.shearY(rShearY);

	sheet.draw(g, -width / 2 + random(-0.5, 0.5), -height / 2 + random(-0.5, 0.5), width, height);

	g.pop();
}

/**
 * 
 * @param {Graphics} g
 * @param {Spritesheet} sheet
 * @param {number} x
 * @param {number} y
 */
function drawHologramImage(g, img, x, y, rotValue = 0, width = img.width, height = img.height) {
	let rShearX = random(-0.4, 0.4);
	let rShearY = random(-0.4, 0.4);
	if (random(0, 1) < 0.9) {
		rShearX = 0;
		rShearY = 0;
	}

	g.push();
	g.translate(x, y);
	//g.shearX(mouseX / 512 - 0.5);
	//g.shearY(mouseY / 384 - 0.5);
	g.rotate(rotValue);
	g.shearX(rShearX);
	g.shearY(rShearY);

	g.image(img, -width / 2 + random(-0.5, 0.5), -height / 2 + random(-0.5, 0.5), width, height);

	g.pop();
}

/**
 * 
 * @param {Graphics} g
 * @param {Spritesheet} sheet
 * @param {number} x
 * @param {number} y
 */
function drawHologramFunc(g, func, x, y, rotValue = 0) {
	let rShearX = random(-0.4, 0.4);
	let rShearY = random(-0.4, 0.4);
	if (random(0, 1) < 0.9) {
		rShearX = 0;
		rShearY = 0;
	}

	g.push();
	g.translate(x, y);
	//g.shearX(mouseX / 512 - 0.5);
	//g.shearY(mouseY / 384 - 0.5);
	g.rotate(rotValue);
	g.shearX(rShearX);
	g.shearY(rShearY);

	g.translate(random(-0.5, 0.5), random(-0.5, 0.5));

	func(g);

	g.pop();
}

/**
 * Stands for get text - returns the text in the correct language specified by the currentLanguage variable
 * @param {string} key
 * @returns
 */
function gt(key) {
	if (transText[key] && transText[key][currentLanguage])
		return transText[key][currentLanguage].text;
	else
		return "ERROR";
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

window.onerror = function (msg, url, linenumber, colno, error) {
	totalAlerts += '\n' + 'Error message ' + timesAlerted + ': ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber + '\n' + colno;
	if (timesAlerted < 3)
		alert('Error message ' + timesAlerted + ': ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber + '\n' + colno);
	if (timesAlerted === 3)
		alert('Too many errors - please send this error message to Ufuueueuru:' + totalAlerts);
	timesAlerted++;
	//console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
	return false;
}