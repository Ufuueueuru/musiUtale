class HitboxEditScreen extends Screen {
    draw(g) {
        g.background(100, 110, 110);

        this.camera.pushMatrix(g);
        this.camera.transform(g);

        g.stroke(0);
        g.strokeWeight(1);
        g.line(-windowWidth / this.camera.zoom, 0, windowWidth / this.camera.zoom, 0);
        g.line(0, -windowHeight / this.camera.zoom, 0, windowHeight / this.camera.zoom);

        let currentPlayer = this.players[this.currentPlayerID];

        currentPlayer.draw(g);

        let red = 200;
        let green = 210;
        let blue = 220;
        if (currentPlayer.iFrames > 0 && currentPlayer.invTo.includes("attack")) {
            red = 40;
            green = 0
            blue = 255;
        }
        if (currentPlayer.iFrames > 0 && currentPlayer.invTo.includes("grab")) {
            red = 255;
            green = 200;
            blue = 0;
        }
        if (this.showHurtboxes) {
            currentPlayer.debugDraw(g, red, green, blue);
        }
        g.noStroke();
        let lastFrame = (floor(currentPlayer.hurtboxStateFrame / 4) % currentPlayer.hurtboxes[currentPlayer.hurtboxState].length + currentPlayer.hurtboxes[currentPlayer.hurtboxState].length - 1) % currentPlayer.hurtboxes[currentPlayer.hurtboxState].length;
        if (this.onionSkin && lastFrame >= 0) {
            g.fill(100, 145, 110, 100);
            for (let i = 0; i < currentPlayer.hurtboxes[currentPlayer.hurtboxState][lastFrame].length; i++) {
                let circle = currentPlayer.hurtboxes[currentPlayer.hurtboxState][lastFrame][i];
                let r = dist(0, 0, circle.x, circle.y);
                let dir = atan2(circle.y, circle.x);
                let x = cos(currentPlayer.dir.value + dir) * r;
                let y = sin(currentPlayer.dir.value + dir) * r;
                g.ellipse(x + currentPlayer.x, y + currentPlayer.y, circle.diameter, circle.diameter);
            }
        }
        g.stroke(0, 0, 15);
        g.noFill();
        if (currentPlayer.circles.length > this.currentHurtboxID)
            g.ellipse(currentPlayer.circleX(this.currentHurtboxID), currentPlayer.circleY(this.currentHurtboxID), 10, 10);

        for (let i in this.fakeWorld.attacks) {
            this.fakeWorld.attacks[i].draw(g);
            if (this.showHitboxes)
                this.fakeWorld.attacks[i].debugDraw(g);
        }

        this.camera.popMatrix(g);

        g.strokeWeight(5);
        g.fill(125, 125, 135);
        if (this.sideBarActive) {
            g.rect(10, 10, 200, windowHeight - 20, 20);

            g.fill(0, 0, 15);
            g.textFont(assetManager.fonts.asuki);
            g.textAlign(CENTER, BASELINE);
            g.textSize(17);
            g.text(currentPlayer.hurtboxState, 105, 30);
            g.text((currentPlayer.hurtboxStateFrame / 4) + "/" + (currentPlayer.hurtboxes[this.players[this.currentPlayerID].hurtboxState].length), 105, 50);

            g.strokeWeight(2);

            g.fill(0, 0, 15);
            g.text("-", 42, 50);
            g.noFill();
            g.rect(30, 30, 25, 25);

            g.fill(0, 0, 15);
            g.text("+", 173, 50);
            g.noFill();
            g.rect(160, 30, 25, 25);

            g.fill(0, 0, 15);
            g.text("EXPORT", 105, 80);
            g.noFill();
            g.rect(65, 60, 80, 25);

            g.fill(0, 0, 15);
            g.text("Circle " + (this.currentHurtboxID + 1) + "/" + currentPlayer.circles.length, 105, 110);
            g.noFill();
            g.rect(65, 90, 80, 25);

            g.fill(0, 0, 15);
            g.text("-", 42, 110);
            g.noFill();
            g.rect(30, 90, 25, 25);

            g.fill(0, 0, 15);
            g.text("+", 173, 110);
            g.noFill();
            g.rect(160, 90, 25, 25);
        } else {
            g.rect(10, 10, 250, 20, 20);
        }
    }

    run() {
        let currentPlayer = this.players[this.currentPlayerID];

        for (let i in currentPlayer.world.sikeWawa.slices) {
            currentPlayer.world.sikeWawa.slices[i].value = -18;
        }

        if (currentPlayer.circles.length > 0)
            this.currentHurtboxID %= currentPlayer.circles.length;

        this.camera.x = constrain(this.camera.x, -windowWidth - this.camera.zoom * 50, this.camera.zoom * 50);
        this.camera.y = constrain(this.camera.y, -windowHeight - this.camera.zoom * 50, this.camera.zoom * 50);

        if (this.moving) {
            this.runPhysics();
        } else {
            
        }
    }

    init() {
        this.showHurtboxes = true;
        this.showHitboxes = true;

        this.fakeWorld = new Training(512, 384);
        this.players = [];
        for (let i in characters) {
            this.players.push(new characters[i]());
            this.players[i].controls = new NetplayControls();
            this.fakeWorld.addPlayer(this.players[i]);
        }
        this.fakeWorld.resetPositions();
        for (let i in characters) {
            this.players[i].canMove = true;
            this.players[i].canAttack = true;
            this.players[i].x = 0;
            this.players[i].y = 0;
        }
        this.currentPlayerID = 0;
        this.moving = true;

        this.currentHurtboxID = 0;

        this.sideBarActive = true;
        this.onionSkin = true;

        this.camera = new Camera();
        this.camera.x = -windowWidth / 2;
        this.camera.y = -windowHeight / 2;

        this.fakeWorld.addShouldLoad();
        assetManager.loadAssetsWithScreen();

        mousePressedHelper = (e) => {
            if (mouseButton === LEFT) {
                if (this.mouseIn(65, 60, 80, 25))//EXPORT
                    this.exportHurtbox();
                if (this.mouseIn(65, 90, 80, 25))//Circle #/#
                    this.currentHurtboxID = (this.currentHurtboxID + 1) % this.players[this.currentPlayerID].circles.length;
                if (this.mouseIn(30, 90, 25, 25)) {//-
                    let frame = floor(this.players[this.currentPlayerID].hurtboxStateFrame / 4) % this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState].length;
                    this.players[this.currentPlayerID].circles.splice(this.currentHurtboxID, 1);
                    this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame].splice(this.currentHurtboxID, 1);
                    if (this.currentHurtboxID > 0)
                        this.currentHurtboxID--;
                }
                if (this.mouseIn(160, 90, 25, 25)) {//+
                    let frame = floor(this.players[this.currentPlayerID].hurtboxStateFrame / 4) % this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState].length;
                    this.players[this.currentPlayerID].circles.push(new Circle(0, 0, 50));
                    this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame].push(new Circle(0, 0, 50));
                }
                if (this.mouseIn(30, 30, 25, 25)) {//- (delete frame)
                    this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState].pop();
                }
                if (this.mouseIn(160, 30, 25, 25)) {//+ (new frame)
                    let frame = floor(this.players[this.currentPlayerID].hurtboxStateFrame / 4) % this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState].length;
                    let add = [];
                    for (let i in this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame]) {
                        if (this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].intangible) {
                            add.push(new ICircle(this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].x, this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].y, this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].diameter));
                        } else {
                            add.push(new Circle(this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].x, this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].y, this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState][frame][i].diameter));
                        }
                    }
                    this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState].push(add);
                }

            }
        };

        mouseDraggedHelper = (e) => {
            if (mouseButton === CENTER || mouseButton === RIGHT) {
                this.camera.x += (pmouseX - mouseX);
                this.camera.y += (pmouseY - mouseY);
            }
            if (mouseButton === LEFT && !this.mouseIn(0, 0, 200, windowHeight)) {
                let hurtbox = this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState];
                if (hurtbox) {
                    let frame = floor(this.players[this.currentPlayerID].hurtboxStateFrame / 4) % hurtbox.length;
                    this.players[this.currentPlayerID].rotateTo(Angle.RIGHT);
                    if (keyIsDown(32)) {
                        hurtbox[frame][this.currentHurtboxID].diameter += round((pmouseY - mouseY) / this.camera.zoom);
                        this.players[this.currentPlayerID].circles[this.currentHurtboxID].diameter += round((pmouseY - mouseY) / this.camera.zoom);
                    } else {
                        hurtbox[frame][this.currentHurtboxID].y -= round((pmouseY - mouseY) / this.camera.zoom);
                        this.players[this.currentPlayerID].circles[this.currentHurtboxID].y -= round((pmouseY - mouseY) / this.camera.zoom);
                        hurtbox[frame][this.currentHurtboxID].x -= round((pmouseX - mouseX) / this.camera.zoom);
                        this.players[this.currentPlayerID].circles[this.currentHurtboxID].x -= round((pmouseX - mouseX) / this.camera.zoom);
                    }
                    this.players[this.currentPlayerID].rotateTo(this.players[this.currentPlayerID].dir);
                }
            }
        };

        mouseWheelHelper = (e) => {
            this.camera.zoom -= constrain(e.delta, -10, 10) * this.camera.zoom / 80;
            this.camera.zoom = constrain(this.camera.zoom, 0.25, 5);
        };

        keyPressedHelper = (e) => {
            if (e.code === "KeyP") {
                this.moving = !this.moving;
            }
            if (e.code === "BracketLeft") {
                this.runPhysics();
            }
            if (e.code === "KeyM") {
                this.showHurtboxes = !this.showHurtboxes;
            }
            if (e.code === "KeyN") {
                this.showHitboxes = !this.showHitboxes;
            }
            if (e.code === "KeyO") {
                this.onionSkin = !this.onionSkin;
            }
            if (e.code === "KeyL") {
                this.players[this.currentPlayerID].dir.value = 0;
                this.players[this.currentPlayerID].x = 0;
                this.players[this.currentPlayerID].y = 0;
            }
            if (e.code === "KeyQ") {
                this.players[this.currentPlayerID].controls.joysticks[0].x = 0;
                this.players[this.currentPlayerID].controls.joysticks[0].y = 0;
                for (let i in this.players[this.currentPlayerID].controls.buttons) {
                    this.players[this.currentPlayerID].controls.buttons[i].pressed = false;
                    this.players[this.currentPlayerID].controls.buttons[i].heldFrames = 0;
                }
            }
            if (e.code === "KeyD") {
                this.players[this.currentPlayerID].controls.joysticks[0].x = 1;
                this.players[this.currentPlayerID].controls.joysticks[0].y = 0;
            }
            if (e.code === "KeyA") {
                this.players[this.currentPlayerID].controls.joysticks[0].x = -1;
                this.players[this.currentPlayerID].controls.joysticks[0].y = 0;
            }
            if (e.code === "KeyS") {
                this.players[this.currentPlayerID].controls.joysticks[0].x = 0;
                this.players[this.currentPlayerID].controls.joysticks[0].y = 1;
            }
            if (e.code === "KeyW") {
                this.players[this.currentPlayerID].controls.joysticks[0].x = 0;
                this.players[this.currentPlayerID].controls.joysticks[0].y = -1;
            }
            if (e.code === "KeyR") {
                this.players[this.currentPlayerID].controls.buttons.lili.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.lili.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.lili.heldFrames = 1;
            }
            if (e.code === "KeyF") {
                this.players[this.currentPlayerID].controls.buttons.suli.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.suli.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.suli.heldFrames = 1;
            }
            if (e.code === "KeyT") {
                this.players[this.currentPlayerID].controls.buttons.pokaLili.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.pokaLili.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.pokaLili.heldFrames = 1;
            }
            if (e.code === "KeyG") {
                this.players[this.currentPlayerID].controls.buttons.pokaSuli.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.pokaSuli.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.pokaSuli.heldFrames = 1;
            }
            if (e.code === "KeyY") {
                this.players[this.currentPlayerID].controls.buttons.dash.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.dash.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.dash.heldFrames = 1;
            }
            if (e.code === "KeyH") {
                this.players[this.currentPlayerID].controls.buttons.nasa.clickedInGame = 2;
                this.players[this.currentPlayerID].controls.buttons.nasa.pressed = true;
                this.players[this.currentPlayerID].controls.buttons.nasa.heldFrames = 1;
            }
            if (e.code === "KeyJ") {
                this.players[this.currentPlayerID].controls.buttons.powerDash.clickedInGame = 2;
            }
            let hurtbox = this.players[this.currentPlayerID].hurtboxes[this.players[this.currentPlayerID].hurtboxState];
            if (hurtbox) {
                let frame = floor(this.players[this.currentPlayerID].hurtboxStateFrame / 4) % hurtbox.length;
                this.players[this.currentPlayerID].rotateTo(Angle.RIGHT);
                if (e.code === "ArrowUp") {
                    hurtbox[frame][this.currentHurtboxID].y--;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].y--;
                }
                if (e.code === "ArrowDown") {
                    hurtbox[frame][this.currentHurtboxID].y++;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].y++;
                }
                if (e.code === "ArrowLeft") {
                    hurtbox[frame][this.currentHurtboxID].x--;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].x--;
                }
                if (e.code === "ArrowRight") {
                    hurtbox[frame][this.currentHurtboxID].x++;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].x++;
                }
                if (e.code === "Quote") {
                    hurtbox[frame][this.currentHurtboxID].diameter++;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].diameter++;
                }
                if (e.code === "Slash") {
                    hurtbox[frame][this.currentHurtboxID].diameter--;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].diameter--;
                }
                if (e.code === "KeyI") {
                    let result = hurtbox[frame][this.currentHurtboxID].intangible ? undefined : true;
                    hurtbox[frame][this.currentHurtboxID].intangible = result;
                    this.players[this.currentPlayerID].circles[this.currentHurtboxID].intangible = result;
                }
                this.players[this.currentPlayerID].rotateTo(this.players[this.currentPlayerID].dir);
            }
        };
    }

    destruct() {
        mousePressedHelper = (e) => { };
        mouseDraggedHelper = (e) => { };
        mouseWheelHelper = (e) => { };
        keyPressedHelper = (e) => { };
    }

    exportHurtbox() {
        let currentPlayer = this.players[this.currentPlayerID];
        let hurtbox = currentPlayer.hurtboxes[currentPlayer.hurtboxState];
        let text = 'this.hurtboxes["' + currentPlayer.hurtboxState + '"] = [\n';

        for (let i = 0; i < hurtbox.length; i++) {
            text += '\t[';
            for (let u = 0; u < hurtbox[i].length; u++) {
                if (u !== 0)
                    text += '\t';
                if (hurtbox[i][u].intangible) {
                    text += 'new ICircle(';
                } else {
                    text += 'new Circle(';
                }
                text += hurtbox[i][u].x + ', ' + hurtbox[i][u].y + ', ' + hurtbox[i][u].diameter + ')';
                if (u !== hurtbox[i].length - 1)
                    text += ',\n';
            }
            text += ']';
            if (i !== hurtbox.length - 1)
                text += ',\n';
        }

        text += '\n];';
        navigator.clipboard.writeText(text);
    }

    mouseIn(x, y, width, height) {
        return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
    }

    runPhysics() {
        this.players[this.currentPlayerID].runNoStun();
        this.players[this.currentPlayerID].run();
        this.players[this.currentPlayerID].rotateTo(this.players[this.currentPlayerID].dir);
        for (let i in this.fakeWorld.attacks) {
            this.fakeWorld.attacks[i].run();
            this.fakeWorld.attacks[i].logicNoStun();
        }
        let attackCount = this.fakeWorld.attacks.length;
        this.fakeWorld.removeFinishedAttacks();
        if (attackCount !== this.fakeWorld.attacks.length) {
            this.players[this.currentPlayerID].dx = 0;
            this.players[this.currentPlayerID].dy = 0;
        }
        if (this.players[this.currentPlayerID].currentState.name === "walk") {
            this.players[this.currentPlayerID].dx = 0;
            this.players[this.currentPlayerID].dy = 0;
        }
    }

    loaded() {
        this.fakeWorld.copyAssets();
    }
}