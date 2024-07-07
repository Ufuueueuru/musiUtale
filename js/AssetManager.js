class AssetManager {
    constructor() {
        this.images = {};
        this.spritesheets = {};
        this.fonts = {};
        this.sounds = {};

        this.loadFuncs = [];

        this.loadedFonts = 0;
        this.totalFonts = 0;

        this._total = 0;
        this._loaded = 0;

        this._splitTotal = 0;
        this._splitLoaded = 0;

        this._smallLoadPercents = [];

        this._split = false;
    }

    loadAssets() {
        let time = millis();
        for (let u in this.fonts) {//Load all fonts
            this.fonts[u] = loadFont(this.fonts[u], this.onLoadFont.bind(this), this.onError);
        }
        for (let i in this.images) {//Load all images
            this.images[i] = loadImage(this.images[i], this.onLoad.bind(this), this.onError);
        }
        for (let i in this.spritesheets) {//Load all spritesheets
            let current = new Spritesheet(this.spritesheets[i].src, this.spritesheets[i].jsonsrc, this.spritesheets[i].width, this.spritesheets[i].height);
            current.loadImage(this.onLoad.bind(this), this.onError);
            current.loadJSON(this.onLoad.bind(this), this.onError);
            this.spritesheets[i] = current;
        }
        for (let j in this.sounds) {//Load all sounds (This is different because we are using howler.js)
            this.sounds[j] = new Howl(this.sounds[j]);

            this.sounds[j].once("load", this.onLoad.bind(this));
            this.sounds[j].once("loaderror", this.onHowlError);
        }
    }

    splitSheets() {
        //setTimeout(async () => {
            for (let i in this.spritesheets) {
                this.spritesheets[i].splitImage(this);
                //this._splitLoaded++;
            }
        //});
    }
    parseJSONs() {
        for (let i in this.spritesheets) {
            this.spritesheets[i].parseJSON();
            this._splitLoaded++;
        }
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

    getDisplayPercentNonsmall() {
        return 100 * (this._loaded + this._splitLoaded) / (this._total + this._splitTotal);
    }

    getDisplayPercent() {
        return 100 * (this._loaded + this._splitLoaded + this.smallLoadCurrent()) / (this._total + this._splitTotal + this.smallLoadTotal());
    }

    addImage(imageStr, name) {
        this.images[name] = imageStr;
        this._total++;
    }
    addSpritesheet(sheetStr, name, jsonStr = undefined, width = 0, height = 0) {
        if (jsonStr === "//") {
            sheetStr = sheetStr.replace(".png", "");
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
        this._splitTotal++;
        if (jsonStr !== undefined) {
            this._total++;
            this._splitTotal++;
        }
    }
    addFont(fontsStr, name) {
        this.fonts[name] = fontsStr;
        this._total++;
        this.totalFonts++;
    }
    addSound(soundStr, name, options = { }) {
        if (typeof soundStr === "string")
            soundStr = [soundStr];
        this.sounds[name] = options;
        this.sounds[name].src = soundStr;
        this._total++;
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

        if (!this._split && this.getLoadedPercent() === 100) {
            this.parseJSONs();
            this.splitSheets();
        }
    }

    onLoadFont() {
        this.onLoad();
        this.loadedFonts++;
    }

    onError(event) {
        alert("There was an error loading the file:\n" + event);
    }

    onHowlError(id, code) {
        alert("There was an error loading a sound file:\nID: " + id + "\nDetails/code: " + code)
    }
}