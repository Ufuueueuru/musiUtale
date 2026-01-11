class AssetManager {
    constructor() {
        this.images = {};
        this.imageNames = {};
        this.imagesImp = {};
        this.shouldLoadImages = {};
        this.spritesheets = {};
        this.spritesheetsImp = {};
        this.shouldLoadSpritesheets = {};
        this.fonts = {};
        this.fontNames = {};
        this.fontsImp = {};
        this.shouldLoadFonts = {};
        this.sounds = {};
        this.soundNames = {};
        this.soundsImp = {};
        this.shouldLoadSounds = {};
        this.jsons = {};

        this.loadFuncs = [];

        this.loadedFonts = 0;
        this.totalFonts = 0;

        this._shouldTotal = 0;
        this._totalImp = 0;
        this._total = 0;
        this._loaded = 0;

        this._splitTotal = 0;
        this._splitLoaded = 0;

        this._smallLoadPercents = [];

        this._jsonsLoaded = false;
        this._jsonsParsed = false;
        this._sheetsSplit = false;

        this._split = false;
    }

    addShouldImage(name) {
        if (!this.shouldLoadImages[name] && this.images[name] === undefined) {
            this._shouldTotal++;
            this.shouldLoadImages[name] = true;
        }
    }
    removeShouldImage(name) {
        if (this.shouldLoadImages[name] && !this.imagesImp[name]) {
            this._shouldTotal--;
            this._loaded--;
            this.images[name] = undefined;
            delete this.shouldLoadImages[name];
        }
    }
    addShouldSpritesheet(name) {
        if (!this.shouldLoadSpritesheets[name] && !this.spritesheets[name].imageLoaded) {
            this._shouldTotal += 2;
            this._splitTotal++;
            this.shouldLoadSpritesheets[name] = true;
        }
    }
    removeShouldSpritesheet(name) {
        if (this.shouldLoadSpritesheets[name] && !this.spritesheetsImp[name]) {
            this._shouldTotal--;
            this._loaded--;
            this._splitTotal--;
            this._splitLoaded--;
            this.spritesheets[name].resetImage();
            delete this.shouldLoadSpritesheets[name];
        }
    }
    addShouldFont(name) {
        if (!this.shouldLoadFonts[name] && this.fonts[name] === undefined) {
            this._shouldTotal++;
            this.shouldLoadFont[name] = true;
        }
    }
    removeShouldFont(name) {
        if (this.shouldLoadFonts[name] && !this.fontsImp[name]) {
            this._shouldTotal--;
            this._loaded--;
            this.fonts[name] = undefined;
            delete this.shouldLoadFonts[name];
        }
    }
    addShouldSound(name) {
        if (!this.shouldLoadSounds[name] && (this.sounds[name] === undefined || this.sounds[name].state() !== "unloaded")) {
            //print("loading " + name + "...");
            this._shouldTotal++;
            this.shouldLoadSounds[name] = true;
        }
    }
    removeShouldSound(name) {
        if (this.shouldLoadSounds[name] && !this.soundsImp[name]) {
            this._shouldTotal--;
            this._loaded--;
            this.sounds[name].deload();
            this.sounds[name] = undefined;
            delete this.shouldLoadSounds[name];
        }
    }

    resetAssets() {
        this._sheetsSplit = false;
        this._splitTotal = 0;
        this._splitLoaded = 0;
        this._shouldTotal = 0;
        this._loaded = this._totalImp;
        this.shouldLoadImages = {};
        this.shouldLoadSpritesheets = {};
        this.shouldLoadFonts = {};
        this.shouldLoadSounds = {};
        for (let u in this.fonts) {
            if (!this.fontsImp[u])
                this.fonts[u] = undefined;
        }
        for (let u in this.images) {
            if (!this.imagesImp[u])
                this.images[u] = undefined;
        }
        for (let u in this.spritesheets) {
            if (!this.spritesheetsImp[u])
                this.spritesheets[u].resetImage();
        }
        for (let u in this.sounds) {
            if (!this.soundsImp[u] && this.sounds[u] !== undefined) {
                this.sounds[u].unload();
                this.sounds[u] = undefined;
            }
        }
    }

    loadAssetsWithScreen() {
        this.loadAssets();
        dynamicLoadingDisplay = true;
        forceDynamicLoadingDisplay = false;
    }

    createLoadFunction(map, index, onLoadFunc) {
        return ((asset) => {
            map[index] = asset;
            onLoadFunc.bind(this)();
        }).bind(this);
    }

    loadAssets() {
        //let time = millis();
        //let wait = 0;
        for (let u in this.fontNames) {//Load all fonts
            if ((this.fontsImp[u] || this.shouldLoadFonts[u]) && this.fonts[u] === undefined) {
                /*setTimeout(((i) => {
                    loadFont(this.fontNames[i], this.createLoadFunction(this.fonts, i, this.onLoadFont), this.onError.bind(this, i));
                    //this.fonts[i] = loadFont(this.fontNames[i], this.onLoadFont.bind(this), this.onError);
                }).bind(this, u));*/
                this.loadFont(u);
            }
        }

        for (let u in this.imageNames) {//Load all images
            if ((this.imagesImp[u] || this.shouldLoadImages[u]) && this.images[u] === undefined) {
                /*setTimeout(((i) => {
                    loadImage(this.imageNames[i], this.createLoadFunction(this.images, i, this.onLoad), this.onError.bind(this, i));
                    //this.images[i] = loadImage(this.imageNames[i], this.onLoad.bind(this), this.onError.bind(this, i));
                }).bind(this, u));*/
                this.loadImage(u);
            }
        }
        
        let imageNames = Object.keys(this.spritesheets);//Sequential image loading
        function loadImages(i, imageNames) {
            if (i >= imageNames.length)
                return;

            if (!this.spritesheets[imageNames[i]].initSprite) {
                this.spritesheets[imageNames[i]] = new Spritesheet(this.spritesheets[imageNames[i]].src, this.spritesheets[imageNames[i]].jsonsrc, this.spritesheets[imageNames[i]].width, this.spritesheets[imageNames[i]].height);
            }
            //if (!this.spritesheets[imageNames[i]].jsonParsed) {
            //    this.spritesheets[imageNames[i]].loadJSON(this.onLoad.bind(this), this.onError);
            //}
            if ((!this.spritesheetsImp[imageNames[i]] && !this.shouldLoadSpritesheets[imageNames[i]]) || this.spritesheets[imageNames[i]].imageLoaded) {
                loadImages(i + 1, imageNames);
                return;
            }
            //print(this.spritesheets[imageNames[i]]);
            //print(imageNames[i], i);
            this.spritesheets[imageNames[i]].loadImage((() => {
                loadImages(i + 1, imageNames);
                this.onLoad.bind(this)();
            }).bind(this), this.onError);
            this.spritesheets[imageNames[i]].loadJSON(this.onLoad.bind(this), this.onError);
        }
        loadImages = loadImages.bind(this);
        loadImages(0, imageNames);
        /*for (let u in this.spritesheets) {//Load all spritesheets LEGACY
            setTimeout(((i) => {
                let current = new Spritesheet(this.spritesheets[i].src, this.spritesheets[i].jsonsrc, this.spritesheets[i].width, this.spritesheets[i].height);
                current.loadImage(this.onLoad.bind(this), this.onError);
                current.loadJSON(this.onLoad.bind(this), this.onError);
                this.spritesheets[i] = current;
            }).bind(this, u));
        }*/
        for (let u in this.soundNames) {//Load all sounds (This is different because we are using howler.js)
            if ((this.soundsImp[u] || this.shouldLoadSounds[u]) && this.sounds[u] === undefined) {
                /*setTimeout(((j) => {
                    this.sounds[j] = new Howl(this.soundNames[j]);

                    this.sounds[j].once("load", this.onLoad.bind(this));
                    this.sounds[j].once("loaderror", this.onHowlError);
                }).bind(this, u));*/
                this.loadSound(u);
            }
        }
        if (!this._jsonsLoaded) {
            for (let u in this.jsons) {
                /*setTimeout(((o) => {
                    loadStrings(this.jsons[o], this.createLoadFunction(this.jsons, o, this.onLoad), this.onError.bind(this, o));
                    //this.jsons[o] = loadStrings(this.jsons[o], this.onLoad.bind(this), this.onError);
                }).bind(this, u));*/
                this.loadJSON(u);
            }
            this._jsonsLoaded = true;
        }
    }

    /**
     * This will force the loading screen to show up (until another loadAssetsWithScreen is called)
     */
    forceDynamicLoadingDisplay() {
        dynamicLoadingDisplay = true;
        forceDynamicLoadingDisplay = true;
    }

    /*loadSpritesheet(sheetName) {
        setTimeout(((i) => {
            let current = new Spritesheet(this.spritesheets[i].src, this.spritesheets[i].jsonsrc, this.spritesheets[i].width, this.spritesheets[i].height);
            current.loadImage(this.onLoad.bind(this), this.onError);
            current.loadJSON(this.onLoad.bind(this), this.onError);
            this.spritesheets[i] = current;
        }).bind(this, sheetName));
    }
    loadSpritesheetJSON(sheetName) {
        setTimeout(((i) => {
            let current = new Spritesheet(this.spritesheets[i].src, this.spritesheets[i].jsonsrc, this.spritesheets[i].width, this.spritesheets[i].height);
            //current.loadImage(this.onLoad.bind(this), this.onError);
            current.loadJSON(this.onLoad.bind(this), this.onError);
            this.spritesheets[i] = current;
        }).bind(this, sheetName));
    }*/

    loadFont(fontName) {
        setTimeout(((i) => {
            loadFont(this.fontNames[i], this.createLoadFunction(this.fonts, i, this.onLoadFont), this.onError.bind(this, i));
            //this.fonts[i] = loadFont(this.fontNames[i], this.onLoadFont.bind(this), this.onError);
        }).bind(this, fontName));
    }

    loadImage(imageName) {
        setTimeout(((i) => {
            loadImage(this.imageNames[i], this.createLoadFunction(this.images, i, this.onLoad), this.onError.bind(this, i));
            //this.images[i] = loadImage(this.imageNames[i], this.onLoad.bind(this), this.onError.bind(this, i));
        }).bind(this, imageName));
    }

    loadSound(soundName) {
        setTimeout(((j) => {
            //print("load sound: " + this.soundNames[j].src);
            this.sounds[j] = new Howl(this.soundNames[j]);

            this.sounds[j].once("load", this.onLoad.bind(this));
            this.sounds[j].once("loaderror", this.onHowlError);
        }).bind(this, soundName));
    }

    splitSheets() {

        for (let i in this.spritesheets) {
            if ((this.spritesheetsImp[i] || this.shouldLoadSpritesheets[i]) && !this.spritesheets[i].sheetSplit) {
                setTimeout(((u) => {
                    this.spritesheets[u].splitImage(this);
                    //this._splitLoaded++;
                }).bind(this, i));
            }
        }
        this._sheetsSplit = true;
    }
    /** DEFUNCT */
    parseJSONs() {
        if (!this._jsonsParsed) {
            for (let i in this.spritesheets) {
                this.spritesheets[i].parseJSON();
                this._splitLoaded++;
            }
            for (let i in this.jsons) {
                this.jsons[i] = JSON.parse(this.jsons[i].join(""));
                this._splitLoaded++;
            }
            this._jsonsParsed = true;
        }
    }
    loadJSON(jsonName) {
        setTimeout(((o) => {
            loadStrings(this.jsons[o], this.createJSONLoadFunction(this.jsons, o, this.onLoad), this.onError.bind(this));
            //this.jsons[o] = loadStrings(this.jsons[o], this.onLoad.bind(this), this.onError);
        }).bind(this, jsonName));
    }
    parseJSON(jsonName) {
        this.jsons[jsonName] = JSON.parse(this.jsons[jsonName].join(""));
        this._splitLoaded++;
    }
    createJSONLoadFunction(map, index, onLoadFunc) {
        return ((asset) => {
            map[index] = asset;
            this.parseJSON(index);
            onLoadFunc.bind(this)();
        }).bind(this);
    }

    getFontLoadedFraction() {
        return this.loadedFonts / this.totalFonts;
    }

    getLoadedFraction() {
        return this._loaded / this._total;
    }

    getLoadedPercent() {
        return 100 * this._loaded / this._total;
    }

    getRealLoadedPercent() {
        return 100 * this._loaded / (this._totalImp + this._shouldTotal);
    }

    getDisplayPercentNonsmall() {
        return 100 * (this._loaded + this._splitLoaded) / (this._total + this._splitTotal);
    }

    getDisplayPercent() {
        return 100 * (this._loaded * 9 + this._splitLoaded + this.smallLoadCurrent() * 9) / (this._total * 9 + this._splitTotal + this.smallLoadTotal() * 9);
    }

    getRealDisplayPercent() {
        return 100 * (this._loaded * 9 + this._splitLoaded + this.smallLoadCurrent() * 9) / ((this._totalImp + this._shouldTotal) * 9 + this._splitTotal + this.smallLoadTotal() * 9);
    }

    getNonImpDisplayPercent() {
        return 100 * ((this._loaded - this._totalImp) * 9 + this._splitLoaded + this.smallLoadCurrent() * 9 + 1) / ((this._shouldTotal) * 9 + this._splitTotal + this.smallLoadTotal() * 9 + 1);
    }

    addImage(imageStr, name, imp = false) {
        this.imageNames[name] = imageStr;
        this.imagesImp[name] = imp;
        if (imp)
            this._totalImp++;
        this._total++;
    }
    addImageMod(imageStr, name, imp = false) {
        this.addImage(currentDir + imageStr, name, imp);
    }
    addSpritesheet(sheetStr, name, jsonStr = undefined, width = 0, height = 0) {
        if (jsonStr === "//") {
            sheetStr = sheetStr.replace(/\.png$/, "");
            jsonStr = sheetStr + ".json";
            sheetStr += ".png";
        }
        this.spritesheets[name] = {
            src: sheetStr,
            width: width,
            height: height,
            jsonsrc: jsonStr
        }
        this._total++;
        //this._splitTotal++;
        //print("total: " + this._splitTotal);
        if (jsonStr !== undefined) {
            this._total++;
        }
        this.spritesheetsImp[name] = false;
    }
    addSpritesheetMod(sheetStr, name, jsonStr = undefined, width = 0, height = 0) {
        this.addSpritesheet(currentDir + sheetStr, name, jsonStr, width, height);
    }
    addSpritesheetImp(sheetStr, name, jsonStr = undefined, width = 0, height = 0) {
        this.addSpritesheet(sheetStr, name, jsonStr, width, height);
        this._totalImp += 2;
        this._splitTotal++;
        this.spritesheetsImp[name] = true;
    }
    addSpritesheetModImp(sheetStr, name, jsonStr = undefined, width = 0, height = 0) {
        this.addSpritesheetImp(currentDir + sheetStr, name, jsonStr, width, height);
    }
    addFont(fontsStr, name, imp = false) {
        this.fontNames[name] = fontsStr;
        if (imp)
            this._totalImp++;
        this._total++;
        this.totalFonts++;
        this.fontsImp[name] = imp;
    }
    addFontMod(fontsStr, name, imp = false) {
        this.addFont(currentDir + fontsStr, name, imp);
    }
    addSound(soundStr, name, options = {}, imp = false) {
        if (typeof soundStr === "string")
            soundStr = [soundStr];
        this.soundNames[name] = options;
        this.soundNames[name].src = soundStr;
        if (imp)
            this._totalImp++;
        this._total++;
        this.soundsImp[name] = imp;
    }
    addSoundMod(soundStr, name, options = {}, imp = false) {
        this.addSound(currentDir + soundStr, name, options, imp);
    }
    addJSON(jsonStr, name) {
        this.jsons[name] = jsonStr;
        this._totalImp++;
        this._total++;
        this._splitTotal++;
    }
    addJSONMod(jsonStr, name) {
        this.addJSON(currentDir + jsonStr, name);
    }
    addFunc(func) {
        this.loadFuncs.push(func.bind(this));
    }

    runLoadFuncs() {
        for (let i in this.loadFuncs) {
            this.loadFuncs[i]();
        }
    }

    addSmallLoad(loaded) {
        this._smallLoadPercents.push(loaded);
    }
    smallLoadTotal() {
        return this._smallLoadPercents.length;
    }
    smallLoadCurrent() {
        let total = 0;
        this._smallLoadPercents.forEach((a) => {
            total += a.amount / a.total;
        });
        if (total === 0)
            return 0;
        return total;
    }

    onLoad() {
        this._loaded++;
        //print(this.getRealLoadedPercent());

        //if (!this._split && this.getRealLoadedPercent() >= 100) {
            //this.parseJSONs();
            //this.splitSheets();
        //}
    }

    onLoadFont() {
        this.onLoad();
        this.loadedFonts++;
    }

    onError(event) {
        print(event);
        totalAlerts += "\n" + "There was an error loading the file:\n" + event;
        if (timesAlerted < 3)
            alert("There was an error loading the file:\n" + event);
        timesAlerted++;
    }

    onHowlError(id, code) {
        totalAlerts += "\n" + "There was an error loading a sound file:\nID: " + id + "\nDetails/code: " + code;
        if (timesAlerted < 3)
            alert("There was an error loading a sound file:\nID: " + id + "\nDetails/code: " + code);
        timesAlerted++;
    }
}