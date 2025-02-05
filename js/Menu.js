class Menu {
    constructor(backScreenClass) {
        this.menus = [];

        this.target = undefined;

        this.backScreenClass = backScreenClass;

        this.transitioning = -30;

        this.back = false;
    }

    setBackScreen(back) {
        this.backScreenClass = back;
    }

    draw(g, width = windowWidth, height = windowHeight, imageWidth = windowWidth * 0.2, imageHeight = windowHeight * 0.2) {
        for (let i in this.menus) {
            if (this.target === this.menus[i]) {
                this.menus[i].drawSelected(g, width, height, imageWidth, imageHeight);
            } else {
                this.menus[i].drawUnselected(g, width, height, imageWidth, imageHeight);
            }
        }
    }

    controlMenu(control) {
        if (control.joystickPressedMenu(0)) {
            this.moveSelect(control.angle(0));
        }
        if (control.clickedAbsolute("select")) {
            this.selectItem();
            return;
        } else if (control.clickedAbsolute("back")) {
            this.backOut();
            return;
        }
    }

    run() {
        if (this.transitioning === 0) {
            for (let i in controls) {
                if (!controls[i].computer && !controls[i].netplay)
                    this.controlMenu(controls[i]);
            }
            if (this.target)
                this.target.awenFunction();
        } else {
            if (this.transitioning === 2) {
                if (this.back && this.backScreenClass) {
                    if (currentScreen.destruct)
                        currentScreen.destruct();
                    currentScreen = new this.backScreenClass();
                } else if (this.target?.targetScreenClass) {
                    if (currentScreen.destruct)
                        currentScreen.destruct();
                    currentScreen = new this.target.targetScreenClass();
                    this.target.pressFunction();
                }
            }
            if (this.transitioning > 0)
                this.transitioning -= 2;
            if (this.transitioning < 0)
                this.transitioning += 2;
        }
    }

    addMenuItems(...menus) {
        for (let i in menus) {
            this.menus.push(menus[i]);
        }
    }

    moveSelect(angle) {
        if (!this.target)
            return;
        let min = 99999;
        let target = undefined;
        for (let i in this.target.moves) {
            let compare = Angle.distance(angle, this.target.moves[i].angle);
            if (compare < this.target.moves[i].leniency && compare < min) {
                min = compare;
                target = this.target.moves[i].target;
                break;
            }
        }
        if (target)
            this.target = target;
    }

    selectItem() {
        if (!this.target)
            return;
        if (this.target.targetScreenClass) {
            this.transitioning = 30;
            this.back = false;
        } else {
            this.target.pressFunction();
        }
    }

    backOut() {
        if (this.backScreenClass) {
            this.transitioning = 30;
            this.back = true;
        }
    }

    setTarget(menu) {
        this.target = menu;
    }

    getDisplayX(x, width) {
        return windowWidth / 2 - width / 2 + x * width / 512;
    }
    getDisplayY(y, height) {
        return windowHeight / 2 - height / 2 + y * height / 384;
    }
}