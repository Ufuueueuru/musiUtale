class Menu {
    constructor(backScreenClass) {
        this.menus = [];

        this.target = undefined;

        this.backScreenClass = backScreenClass;

        this.transitioning = -30;

        this.back = false;
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

    run() {
        if (this.transitioning === 0) {
            for (let i in controls) {
                if (controls[i].joystickPressedMenu(0)) {
                    this.moveSelect(controls[i].angle(0));
                }
                if (controls[i].clickedAbsolute("select")) {
                    this.selectItem();
                    break;
                } else if (controls[i].clickedAbsolute("back")) {
                    this.backOut();
                    break;
                }
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
            this.target.pressFunction();
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
}