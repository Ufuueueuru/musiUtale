/**
 * Contains all of the information for an instance of a fight
 */
class World {
    constructor(width, height, walls, stageWidth = width * 1.3, stageHeight = height * 1.3, xMargins = width / 2, yMargins = height / 2) {
		/** @type {Graphics} */
        this.g = createGraphics(width, height);
        if (!graphicsSettings.antiAliasing)
            this.g.noSmooth();

        /** @type {string} */
        this.name = "󱤰";//ma

        /** @type {Graphics} */
        this.background = createGraphics((stageWidth + 2 * xMargins) * width / 512, (stageHeight + 2 * yMargins) * height / 384);
        /** @type {Graphics} */
        this.foreground = createGraphics((stageWidth + 2 * xMargins) * width / 512, (stageHeight + 2 * yMargins) * height / 384);
        /** @type {boolean} */
        this.loopBackground = false;

		/** @type {number} */
		this.width = width;
		/** @type {number} */
        this.height = height;

        this.maxPlayerDist = 430;

        /** @type {Wall[]} */
        this.walls = walls;
        this.setStageSize(stageWidth, stageHeight, xMargins, yMargins);

        this.startPoints = [
            { x: this.getCenterStageX() - 70, y: this.getCenterStageY(), dir: 0 },
            { x: this.getCenterStageX() + 70, y: this.getCenterStageY(), dir: PI }
        ];

		/** @type {Player[]} */
		this.players = [];
		/** @type {Attack[]} */
        this.attacks = [];

        this.sikeWawa = new SikeWawa();

		//print(Camera);
		/** @type {Camera} */
        this.camera = new Camera();

        /** @type {ParticleSystem} */
        this.ps = new ParticleSystem();
        this.addParticleTemplates();

        this.rSeed = floor(random(0, 1000000));
        this.frameCount = 0;
        
        this.countdownMax = 420;
        this.startCountdown = this.countdownMax;
        
        this.maxTimer = 99;
        this.timer = this.maxTimer;

        this.resetCounter = 0;

        this.playerWonID = 0;

        this.currentMusic = {
            howl: undefined,
            id: undefined
        };

        this.randomizeStage = false;

        this.winScreen = false;

        this.firstTo = 2;
        this.player1Score = 0;
        this.player2Score = 0;

        this.rollbacking = false;
        this.rollbackingFrames = 0;
    }

    resetCountdown() {
        for (let i in this.players) {
            this.players[i].canAttack = false;
            this.players[i].canMove = false;
            //this.players[i].resetPlayer();//Need to implement this later TODO
        }

        this.startCountdown = this.countdownMax;

        this.timer = this.maxTimer;
    }

    resetPositions() {
        let centerX = 0;
        let centerY = 0;
        for (let i in this.players) {
            if (this.startPoints[i]) {
                this.players[i].x = this.startPoints[i].x;
                this.players[i].y = this.startPoints[i].y;
                this.players[i].dir.value = this.startPoints[i].dir;
            }
            centerX += this.players[i].x;
            centerY += this.players[i].y;
            this.players[i].reset();
        }
        centerX /= this.players.length;
        centerY /= this.players.length;

        this.camera.setCenter(centerX, centerY);

        this.resetCountdown();

        this.attacks = [];

        this.ps.reset();
    }

    completeReset() {
        for (let i in this.players) {
            if (this.players[i].randomizeCharacter)
                this.randomizeCharacter(i);
            this.players[i].fullReset();
        }
        this.resetPositions();
        this.initHUDNames();
        this.sikeWawa.reset();
    }

    randomizeCharacter(i) {
        let controls = this.players[i].controls;
        this.players[i] = new characters[this.random(0, characters.length - 2)](this);
        this.players[i].randomizeCharacter = true;
        this.players[i].setWorld(this);
        this.sikeWawa.setPlayers(this.players[0], this.players[1]);
        this.players[i].controls = controls;
        if (controls.player)
            controls.player = this.players[i];
    }

    setFirstTo(firstTo) {
        this.firstTo = firstTo;
    }

    setStageSize(width, height, wallLeft = 100, wallTop = 100) {
        /** @type {number} */
        this.stageWidth = width;
        /** @type {number} */
        this.stageHeight = height;

        /** @type {number} */
        this.bgWidth = this.stageWidth + 2 * this.wallLeft;
        /** @type {number} */
        this.bgHeight = this.stateHeight + 2 * this.wallTop;

        /** @type {number} */
        this.wallLeft = wallLeft;
        /** @type {number} */
        this.wallTop = wallTop;
        /** @type {number} */
        this.wallRight = this.wallLeft + this.stageWidth;
        /** @type {number} */
        this.wallDown = this.wallTop + this.stageHeight;
    }

    getCenterStageX() {
        return this.wallLeft + this.stageWidth / 2;
    }

    getCenterStageY() {
        return this.wallTop + this.stageHeight / 2;
    }

    setMaxTimer(num) {
        this.maxTimer = num;
        this.timer = num;
    }

    /** @override */
    drawGrounds() { }

    /** @override */
    drawForegroundManual(g, width, height) { }

    stopMusic() {
        if (this.currentMusic?.howl)
            this.currentMusic.howl.stop(this.currentMusic.id);
    }

    playSong(howl) {
        this.currentMusic.howl = howl;
        this.currentMusic.id = howl.play();
    }

    /** @override */
    playMusic() { }

    addParticleTemplates() {
        this.ps.addParticleTemplate("hitEffect", assetManager.spritesheets.hitEffect);
        this.ps.addParticleTemplate("hitBlockEffect", assetManager.spritesheets.hitBlockEffect);
        this.ps.addParticleTemplate("hitParryEffect", assetManager.spritesheets.hitParryEffect);
        this.ps.addParticleTemplate("counterHitEffect", assetManager.spritesheets.counterHitEffect);
        this.ps.addParticleTemplate("punishHitEffect", assetManager.spritesheets.punishHitEffect);
        this.ps.addParticleTemplate("powerDashEffect", assetManager.spritesheets.powerDashEffect);
        this.ps.addParticleTemplate("powerDashSlow", assetManager.spritesheets.powerDashSlow);
    }

	/** */
    _draw() {
        this.drawGrounds();

		this.camera.pushMatrix(this.g);
        this.camera.transform(this.g);

        this.g.push();
        this.g.scale(512 / this.width, 384 / this.height);
        if (this.loopBackground) {
            this.g.image(this.background, floor(this.camera.x * this.camera.zoom / this.background.width * graphicsSettings.resolutionMult) * this.background.width, floor(this.camera.y * this.camera.zoom / this.background.height * graphicsSettings.resolutionMult) * this.background.height);
            this.g.image(this.background, floor(this.camera.x * this.camera.zoom / this.background.width * graphicsSettings.resolutionMult) * this.background.width + this.background.width, floor(this.camera.y * this.camera.zoom / this.background.height * graphicsSettings.resolutionMult) * this.background.height);
            this.g.image(this.background, floor(this.camera.x * this.camera.zoom / this.background.width * graphicsSettings.resolutionMult) * this.background.width, floor(this.camera.y * this.camera.zoom / this.background.height * graphicsSettings.resolutionMult) * this.background.height + this.background.height);
            this.g.image(this.background, floor(this.camera.x * this.camera.zoom / this.background.width * graphicsSettings.resolutionMult) * this.background.width + this.background.width, floor(this.camera.y * this.camera.zoom / this.background.height * graphicsSettings.resolutionMult) * this.background.height + this.background.height);
        } else {
            this.g.image(this.background, 0, 0);
        }
        this.g.pop();

        if (debug.displayWalls) {
            this.drawWalls(this.g);
        }

		for (let i in this.players) {
			let p = this.players[i];
            p.draw(this.g);
            if (debug.displayBlocking) {
                p.drawBlock(this.g);
            }
		}
		for (let i in this.attacks) {
			let a = this.attacks[i];
            a.draw(this.g);
        }
        this.ps.draw(this.g);

        for (let i = 0; i < this.players.length; i++) {
            let p = this.players[i];
            p.drawArrow(this.g, i);
        }

        this.g.push();
        this.g.scale(512 / this.width, 384 / this.height);
        if (this.loopBackground) {
            this.g.image(this.foreground, floor(this.camera.x * this.camera.zoom / this.foreground.width * graphicsSettings.resolutionMult) * this.foreground.width, floor(this.camera.y * this.camera.zoom / this.foreground.height * graphicsSettings.resolutionMult) * this.foreground.height);
            this.g.image(this.foreground, floor(this.camera.x * this.camera.zoom / this.foreground.width * graphicsSettings.resolutionMult) * this.foreground.width + this.foreground.width, floor(this.camera.y * this.camera.zoom / this.foreground.height * graphicsSettings.resolutionMult) * this.foreground.height);
            this.g.image(this.foreground, floor(this.camera.x * this.camera.zoom / this.foreground.width * graphicsSettings.resolutionMult) * this.foreground.width, floor(this.camera.y * this.camera.zoom / this.foreground.height * graphicsSettings.resolutionMult) * this.foreground.height + this.foreground.height);
            this.g.image(this.foreground, floor(this.camera.x * this.camera.zoom / this.foreground.width * graphicsSettings.resolutionMult) * this.foreground.width + this.foreground.width, floor(this.camera.y * this.camera.zoom / this.foreground.height * graphicsSettings.resolutionMult) * this.foreground.height + this.foreground.height);
        } else {
            this.g.image(this.foreground, 0, 0);
        }
        this.g.pop();

        this.camera.popMatrix(this.g);

        this.g.push();
        this.g.scale(512 / this.width, 384 / this.height);
        this.drawForegroundManual(this.g, this.width, this.height);
        this.g.pop();

        if(this.startCountdown >= 0 && this.startCountdown < this.countdownMax - 60)
            this.drawCountdown(this.g);
        if (this.resetCounter > 0 && this.resetCounter < 180)
            this.drawEndingText(this.g);
    }

    drawEndingText(g) {
        g.fill(0, 0, 15, 25);
        g.noStroke();
        g.rect(-1, -1, 512 + 2, 384 + 2);

        let currentSize = 180 - this.resetCounter;
        g.textFont(assetManager.fonts.asuki);
        g.textSize(180 + currentSize / 15);
        g.fill(170, 40, 60, 200);
        g.strokeWeight(5);
        g.stroke(0, 0, 15, 200);
        g.textAlign(CENTER, CENTER);

        g.text(gt("gameFinish"), 256, 192 - 30);//pini a
        g.textSize(80 + currentSize / 15);
        let lookup = [
            "󱥳",//wan
            "󱥮",//tu
            "󱥮󱥳",//tu wan
            "󱥮󱥮"//tu tu
        ];
        if (this.playersTied) {
            g.fill(255, 242, 0, 200);
            g.text("", 256, 192 + 90);//utala li wawa sama!
        } else {
            if (this.playerWonID == 1)
                g.fill(47, 31, 171, 200);
            let winText = this.players[this.playerWonID].headNoun + "󱤽" + lookup[this.playerWonID] + "󱤧󱥵!";//jan nanpa # li wawa!
            if (currentLanguage === "en")
                winText = "Player 󱤽" + lookup[this.playerWonID] + " wins!";
            g.text(winText, 256, 192 + 90);
        }

        g.textAlign(CENTER, BASELINE);
    }

    drawCountdown(g) {
        let currentSize = this.startCountdown % 60;
        g.textFont(assetManager.fonts.asuki);
        g.textSize(180 + currentSize / 5);
        g.fill(170, 40, 60, 75 + currentSize * 5);
        g.strokeWeight(5);
        g.stroke(0, 0, 15, 15 + currentSize * 7);
        g.textAlign(CENTER, CENTER);
        let count = ceil(this.startCountdown / 60) - 1;
        let countdown = "";
        countdown = ((c) => {
            switch (c) {
                case 0:
                    return gt("gameFight");//o utala!
                case 1:
                    return "󱥳...";//wan
                case 2:
                    return "󱥮...";//tu
                case 3:
                    return "󱤼...";//mute
                case 4:
                    return gt("gameMove");//o tawa
                case 5:
                    return gt("gameWait");//o awen...
                default:
                    return "󱥄󱥱!";
            }
        })(count);

        if (count === 5)
            g.fill(47, 31, 171, 75 + currentSize * 5);

        g.text(countdown, 256, 192);
        g.textAlign(LEFT, BASELINE);
    }

    drawHUD(g) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].drawHealth(g, 28 + i * 256, 25, i % 2 === 0);
            this.players[i].drawNanpaLipu(g, 175 + i * 112, 25);
            this.players[i].drawCombo(g, i);
            this.players[i].drawExtraHUD(g, i, 0, 0);
            this.drawWins(g, i, 220, 77);
        }
        this.sikeWawa.draw(g, 256, 75);

        this.drawHUDNames(g);

        /*g.fill(170, 40, 60);
        g.stroke(15, 0, 0);
        g.strokeWeight(2);
        g.textSize(25);
        g.textAlign(LEFT, BASELINE);
        g.text(this.players[0].headNoun + "󱤽󱥳", 28, 20);//[head noun] nanpa wan
        g.fill(47, 31, 171);
        g.text(this.players[1].headNoun + "󱤽󱥮", 284, 20);//[head noun] nanpa wan*/


        g.textFont(assetManager.fonts.asuki);
        g.stroke(15, 0, 0);
        g.fill(240, 240, 255);
        g.strokeWeight(3);
        g.textSize(30);
        g.textAlign(CENTER, CENTER);
        let timerDisplay = this.timer > 99 ? "󱤄" : ceil(this.timer);
        g.text(timerDisplay, 256, 35);
        g.textAlign(LEFT, BASELINE);
    }

    drawHUDNames(g) {
        g.image(this.name1, 28, 0);
        g.image(this.name2, 284, 0);
    }

    initHUDNames() {
        let name1 = createGraphics(100, 30);
        let name2 = createGraphics(100, 30);
        name1.textFont(assetManager.fonts.asuki);
        name1.fill(170, 40, 60);
        name1.stroke(15, 0, 0);
        name1.strokeWeight(1);
        name1.textSize(25);
        name1.textAlign(LEFT, BASELINE);
        name1.text(this.players[0].headNoun + "󱤽󱥳", 0, 20);//[head noun] nanpa wan
        this.name1 = name1.get();
        name1.remove();

        name2.textFont(assetManager.fonts.asuki);
        name2.fill(47, 31, 171);
        name2.stroke(15, 0, 0);
        name2.strokeWeight(1);
        name2.textSize(25);
        name2.textAlign(LEFT, BASELINE);
        name2.text(this.players[1].headNoun + "󱤽󱥮", 0, 20);//[head noun] nanpa tu
        this.name2 = name2.get();
        name2.remove();
    }

    drawWins(g, i, x, y) {
        let score = i === 0 ? this.player1Score : this.player2Score;
        g.push();
        g.translate(256, 0);
        if (i === 1)
            g.scale(-1, 1);
        g.translate(-256, 0);

        g.stroke(0, 0, 15);
        g.strokeWeight(1);
        for (let num = 0; num < this.firstTo; num++) {
            g.noFill();
            if (score > num)
                g.fill(156, 40, 94);
            g.ellipse(x - num * 10, y, 8, 8);
        }

        g.pop();
    }

    drawWalls(g) {
        for (let i in this.walls) {
            this.walls[i].draw(g);
        }
    }

	/**
	 * 
	 * @param {Graphics} gg
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
    draw(gg, x = 0, y = 0, width = this.width, height = this.height, HUD = true) {
        this.g.push();
        this.g.scale(this.width / 512, this.height / 384);

        this._draw();

        if (HUD) {
            this.drawHUD(this.g);
        }

        if (this.winScreen) {
            this.g.background(0, 0, 15, 130);
            this.g.fill(179, 156, 196);
            this.g.textFont(assetManager.fonts.asuki);
            this.g.textSize(50);
            this.g.textAlign(CENTER, CENTER);
            this.g.text("󱥄󱥱󱥝󱤇󱥙", 256, 166);//o utala sin anu seme?
            this.g.textAlign(LEFT, BASELINE);

            assetManager.spritesheets.nena.drawFrame(this.g, 31, 236, 196, 40, 40);
        }

        this.g.pop();

        gg.image(this.g, x, y, width, height);
    }

    _run() {
        if (abs(this.startCountdown - 300) < 0.75) {
            for (let i in this.players) {
                this.players[i].canMove = true;
            }
        }
        if (abs(this.startCountdown) < 0.75) {
            for (let i in this.players) {
                this.players[i].canAttack = true;
            }
        }
        if (this.startCountdown <= 0 && this.resetCounter <= 0)
            this.timer -= 0.016667;
        if (this.startCountdown >= -0.75) {
            if (this.startCountdown > 240 && this.startCountdown < 360)
                this.startCountdown += 0.75;
            this.startCountdown -= 1.5;
        }

        this.sikeWawa.run();

        let middleX = 0;
        let middleY = 0;
        
        for (let i in this.players) {
            let p = this.players[i];

            //Old wall collision method
            //p.x = constrain(p.x, 100, this.background.width/1.3 - 100);
            //p.y = constrain(p.y, 100, this.background.height/1.3 - 100);

            middleX += p.x;
            middleY += p.y;

            p.runNoStun();

            if (p.stunFrames <= 0) {
                p.setAngleRefs();

                if (p.slowDownFrames % p.slowDownMod < p.slowDownMax) {
                    p.run();
                } else {
                    p.x += p.dx * p.slowDownMax / p.slowDownMod;
                    p.y += p.dy * p.slowDownMax / p.slowDownMod;
                }
                if (p.slowDownFrames > 0)
                    p.slowDownFrames--;

                if (this.players.length > 1)
                    p.setDir(this.players);

                this.collidePlayer(p);
            } else {
                p.tickStunFrames();
            }

            let wallVector = new Point();
            let collided = false;
            let leniency = p.edgeCalculationLeniency;//Calculate which wall you are facing
            for (let i in this.walls) {
                let inBack = !this.walls[i].pointInFront(p);
                if (this.walls[i].collidePointSuper(p, leniency) || inBack) {
                    let orthoNormal = this.walls[i].getOrthoNormalVector();
                    wallVector.x += orthoNormal.x;
                    wallVector.y += orthoNormal.y;
                }
                if (/*this.walls[i].collidePoint(p, p.collideRadius) && */inBack) {
                    let closestPoint = this.walls[i].getClosestPoint(p);
                    p.x = closestPoint.x;
                    p.y = closestPoint.y;
                    collided = true;
                }
            }
            wallVector = Point.getNormalizedVector(wallVector);

            let velAngle = new Angle().setFromPoint(p.dx, p.dy);

            if (collided) {
                let dot = Point.dotProduct(new Point(p.dx, p.dy), wallVector);
                p.dx -= (2) * dot * wallVector.x * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
                p.dy -= (2) * dot * wallVector.y * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
            }

            let suli = p.lipuHeavy;
            let wallX = 0;
            let wallY = 0;
            
            /*if (p.atEdge()) {
                if (p.x < this.wallLeft + leniency)
                    wallX++;
                if (p.x > this.wallRight - leniency)
                    wallX--;
                if (p.y < this.wallTop + leniency)
                    wallY++;
                if (p.y > this.wallDown - leniency)
                    wallY--;
            }*/
            wallX = wallVector.x;
            wallY = wallVector.y;

            //lipu sinpin
            let wallAngle = new Angle().setFromPoint(-wallX, -wallY);
            let angleDif = Angle.distance(velAngle, wallAngle);
            let speed = dist(0, 0, p.dx, p.dy);
            if (speed > 0.5 && p.nanpaLipu >= 100 && angleDif < PI * 0.40 && (wallX !== 0 || wallY !== 0) && p.currentState.name === "hitstun") {//lipu sinpin
                p.dir = new Angle().setFromPoint(wallX, wallY);
                p.rotateTo(p.dir);
                p.nanpaLipu = 0;
                p.dx = 0;
                p.dy = 0;

                if (suli) {
                    p.startLipu(p.states.LIPU_SULI, p.states.LIPU_SULI_ACTIONS, p.lipuSuliFrames, "LipuSuli", p.lipuHeavyDamage);
                } else {
                    p.startLipu(p.states.LIPU_LILI, p.states.LIPU_LILI_ACTIONS, p.lipuLiliFrames, "LipuLili", p.lipuDamage);
                }
            }

            //Bouncing off of a wall
            /*if (p.x < this.wallLeft) {
                p.dx = abs(p.dx) * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
                p.x = this.wallLeft;
            }
            if (p.x > this.wallRight) {
                p.dx = -abs(p.dx) * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
                p.x = this.wallRight;
            }
            if (p.y < this.wallTop) {
                p.dy = abs(p.dy) * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
                p.y = this.wallTop;
            }
            if (p.y > this.wallDown) {
                p.dy = -abs(p.dy) * p.wallBounce * (p.currentState.name === "hitstun" ? 1 : 0);
                p.y = this.wallDown;
            }*/
        }
        for (let i in this.players) {
            this.players[i].resetModifiers();
        }
        for (let i = this.attacks.length - 1; i >= 0; i--) {//Apply the modifiers that an attack uses
            let a = this.attacks[i];
            a.applyModifiers();
        }
        for (let i = this.attacks.length - 1; i >= 0; i--) {//Loop through all of the attacks currently in the world for collisions
            let a = this.attacks[i];
            if (a.notStun()) {
                this.collideAttacks();
            }
        }
        for (let i = this.attacks.length - 1; i >= 0; i--) {//Loop through all of the attacks currently in the world for standard logic
            let a = this.attacks[i];
            if (a.notStun()) {
                a.run();

                if (a.duration <= 0) {
                    this.removeAttack(i);
                }
            }
        }

        this.ps.run();

        middleX /= this.players.length;
        middleY /= this.players.length;
        this.followCamera(middleX, middleY);
    }

	/** */
    run(parentScreen) {
        if (this.resetCounter % 5 < 2 && !this.winScreen)
            this._run();

        if (this.winScreen) {
            for (let i in controls) {
                if (!controls[i].computer && !controls[i].netplay) {
                    if (controls[i].clickedAbsolute("select") || debug.skipWinScreen) {
                        this.player1Score = 0;
                        this.player2Score = 0;
                        this.winScreen = false;
                        this.completeReset();
                        if (parentScreen) {
                            parentScreen.player1 = this.players[0];
                            parentScreen.player2 = this.players[1];
                            if (this.randomizeStage) {
                                this.stopMusic();
                                parentScreen.world = new stages[this.random(0, stages.length - 2)](512 * graphicsSettings.resolutionMult, 384 * graphicsSettings.resolutionMult);
                                parentScreen.world.randomizeStage = true;
                                parentScreen.world.setFirstTo(this.firstTo);
                                parentScreen.world.addPlayer(this.players[0]);
                                parentScreen.world.addPlayer(this.players[1]);
                                parentScreen.world.sikeWawa.setPlayers(this.players[0], this.players[1]);
                                parentScreen.world.completeReset();
                                parentScreen.world.playMusic();
                                if (parentScreen.player1.controls.world)
                                    parentScreen.player1.controls.world = this.world;
                                if (parentScreen.player2.controls.world)
                                    parentScreen.player2.controls.world = this.world;
                                return;
                            }
                        }
                    }
                }
            }
        }

        //This should always be here (It might actually need to go at the very end of this._run)
        this.frameCount++;

        let playerDead = false;
        let timeout = false;
        for (let i in this.players) {
            if (this.players[i].health <= 0) {
                playerDead = true;
                break;
            }
        }
        if (this.timer <= 0 && this.resetCounter <= 0) {//Timer runs out - damage players based on their timer penalties
            playerDead = true;
            timeout = true;
            for (let i in this.players) {
                this.players[i].damageHealthAbs(this.players[i].timerPunishHealth, 0);
            }
        }
        if (this.resetCounter === 1) {
            if (max(this.player1Score, this.player2Score) < this.firstTo || this.firstTo <= 0) {
                this.resetPositions();
            } else {
                this.winScreen = true;
                this.resetCounter++;
            }
            playerDead = false;
        }
        if (this.resetCounter > 0)
            this.resetCounter--;
        if (this.resetCounter <= 0 && playerDead) {
            this.resetCounter = 185;
            let minHealthPlayer = 0;
            let maxHealthPlayer = 0;
            let numDeadPlayers = 0;
            for (let i in this.players) {
                this.players[i].canAttack = false;
                this.players[i].stunFrames = 20;
                if (this.players[i].health <= 0) {
                    this.players[i].forceChangeState(this.players[i].states.DEAD, this.players[i].states.DEAD_ACTIONS);
                    this.players[i].sheet.setAnimation("Dead");
                    this.players[i].iFrames = 185;
                    this.players[i].invTo = ["attack", "grab"];
                    this.players[i].canMove = false;
                    this.players[i].canAttack = false;
                    numDeadPlayers++;
                } else {
                    this.playerWonID = i;
                    //this.players[i].forceChangeState(this.players[i].states.WIN, this.players[i].states.WIN_ACTIONS);
                    //this.players[i].sheet.setAnimation("Win");
                }
                if (this.players[i].health / this.players[i].maxHealth < this.players[minHealthPlayer].health / this.players[minHealthPlayer].maxHealth) {
                    minHealthPlayer = i;
                }
                if (this.players[i].health / this.players[i].maxHealth > this.players[maxHealthPlayer].health / this.players[maxHealthPlayer].maxHealth) {
                    maxHealthPlayer = i;
                }
            }
            if (numDeadPlayers === this.players.length) {
                this.playersTied = true;
            } else {
                this.playersTied = false;
            }
            if (timeout) {
                if (this.players[minHealthPlayer].health / this.players[minHealthPlayer].maxHealth === this.players[maxHealthPlayer].health / this.players[maxHealthPlayer].maxHealth) {
                    this.playersTied = true;
                } else {
                    this.players[minHealthPlayer].forceChangeState(this.players[minHealthPlayer].states.DEAD, this.players[minHealthPlayer].states.DEAD_ACTIONS);
                    this.players[minHealthPlayer].sheet.setAnimation("Dead");
                    this.players[minHealthPlayer].iFrames = 185;
                    this.players[minHealthPlayer].invTo = ["attack", "grab"];
                    this.players[minHealthPlayer].canMove = false;
                    this.players[minHealthPlayer].canAttack = false;
                    this.playerWonID = maxHealthPlayer;
                    this.playersTied = false;
                }
            }
            if (!this.playersTied) {
                if (this.playerWonID == "0")
                    this.player1Score++;
                if (this.playerWonID == "1")
                    this.player2Score++;
            }
        }

        this.rollbacking = false;
    }

    followCamera(x, y) {
        this.camera.follow(x, y, 3);
    }

    addPlayer(p) {
        this.players.push(p);
        p.setWorld(this);
    }

    addAttack(a) {
        this.attacks.push(a);
    }

    removeAttack(id) {
        this.attacks[id].end();
        this.attacks.splice(id, 1);
    }

    removeFinishedAttacks() {
        for (let i = this.attacks.length - 1; i >= 0; i--) {
            if (this.attacks[i].duration <= 0) {
                this.removeAttack(i);
            }
        }
    }

    collidePlayer(p, distMult = 1) {
        for (let u in this.players) {//Resolve collisions between players
            let c = this.players[u];
            if (c !== p) {
                if (c.x === p.x && c.y === p.y) {//Don't let both players have the same positions - it causes math errors
                    p.x += 0.01;
                }
                /*let tempDist = dist(c.x, c.y, p.x, p.y);
                let minDist = c.collideRadius + p.collideRadius;
                let tempAngle = atan2(p.y - c.y, p.x - c.x);
                if (Hitcircle.collide(p, c)) {//tempDist < minDist
                    if (!State.stateIsTag(p.currentState, "no collide") && !State.stateIsTag(c.currentState, "no collide")) {
                        p.x -= cos(tempAngle) * -sqrt(abs(tempDist - minDist) / 30) / p.weight;
                        p.y -= sin(tempAngle) * -sqrt(abs(tempDist - minDist) / 30) / p.weight;
                        c.x += cos(tempAngle) * -sqrt(abs(tempDist - minDist) / 30) / c.weight;
                        c.y += sin(tempAngle) * -sqrt(abs(tempDist - minDist) / 30) / c.weight;
                    }
                }*/
                if (!State.stateIsTag(p.currentState, "no collide") && !State.stateIsTag(c.currentState, "no collide")) {
                    let collisionNumPenalty = 0;
                    Hitcircle.collideSpecific(p, c, (i, u) => {
                        if (p.circleIntangible(i) || c.circleIntangible(u))
                            return;
                        let tempAngle = new Angle().setFromPoint(p.circleX(i) - c.circleX(u), p.circleY(i) - c.circleY(u));
                        let maxDist = p.circleDiameter(i) / 2 + c.circleDiameter(u) / 2;
                        let tempDist = dist(p.circleX(i), p.circleY(i), c.circleX(u), c.circleY(u));
                        p.x += tempAngle.getX() * sqrt((maxDist - tempDist) / (20 + collisionNumPenalty)) / p.weight;
                        p.y += tempAngle.getY() * sqrt((maxDist - tempDist) / (20 + collisionNumPenalty)) / p.weight;
                        c.x -= tempAngle.getX() * sqrt((maxDist - tempDist) / (20 + collisionNumPenalty)) / c.weight;
                        c.y -= tempAngle.getY() * sqrt((maxDist - tempDist) / (20 + collisionNumPenalty)) / c.weight;

                        collisionNumPenalty += 5;
                    });
                }
                
                let totalDist = dist(c.x, c.y, p.x, p.y);
                if (totalDist > this.maxPlayerDist * distMult) {
                    let tempAngle = atan2(p.y - c.y, p.x - c.x);
                    if (abs(p.dx) > 0 || abs(p.dy) > 0) {
                        p.x -= cos(tempAngle) * (totalDist - this.maxPlayerDist * distMult) / 90;
                        p.y -= sin(tempAngle) * (totalDist - this.maxPlayerDist * distMult) / 90;
                    }
                    if ((abs(c.dx) > 0 || abs(c.dy) > 0) && distMult === 1) {
                        c.x += cos(tempAngle) * (totalDist - this.maxPlayerDist) / 90;
                        c.y += sin(tempAngle) * (totalDist - this.maxPlayerDist) / 90;
                    }
                }
            }
        }
    }

    collideAttacks() {
        let attackCollisions = [];
        let playerCollisions = [];
        for (let i in this.attacks) {
            let a = this.attacks[i];
            for (let u in this.attacks) {
                let b = this.attacks[u];
                if (a !== b) {
                    if (a.currentlyActive() && b.currentlyActive() && Hitcircle.collide(a, b) && a.player !== b.player) {
                        attackCollisions.push({
                            a: a,
                            b: b
                        });
                    }
                }
            }
            for (let u in this.players) {
                let p = this.players[u];
                if (a.player !== p && !a.alreadyHitPlayer(p) && a.currentlyActive()) {
                    if (Hitcircle.collide(a, p)) {
                        playerCollisions.push({
                            a: a,
                            p: p
                        });
                    }
                }
            }
        }
        this._resolveAttackCollisions(attackCollisions, playerCollisions);
    }

    _resolveAttackCollisions(acs, pcs) {
        for (let i in acs) {
            let a = acs[i].a;
            let b = acs[i].b;

            //this.removeAttack(max(acs[i].aid, acs[i].bid));
            //this.removeAttack(min(acs[i].aid, acs[i].bid));
            if (a.clashable && b.clashable) {
                if (a.clashPriority >= b.clashPriority) {
                    a.endLife();
                    if (a.player.hitStun <= 0)
                        a.player.hitStun = 1;
                    if (a.follow) {
                        if (!a.player.sheet.setAnimation("Clash"))
                            a.player.sheet.setAnimation("Hurt");
                        a.player.actionLag = 12;
                        a.player.forceChangeState(a.player.states.CLASH, a.player.states.CLASH_ACTIONS);
                    }
                    if (b.clashPriority !== a.clashPriority) {
                        a.clashNegate = true;
                    }
                }

                if (b.clashPriority >= a.clashPriority) {
                    b.endLife();
                    if (b.player.hitStun <= 0)
                        b.player.hitStun = 1;
                    if (b.follow) {
                        if (!b.player.sheet.setAnimation("Clash"))
                            b.player.sheet.setAnimation("Hurt");
                        b.player.actionLag = 12;
                        b.player.forceChangeState(b.player.states.CLASH, b.player.states.CLASH_ACTIONS);
                    }
                    if (b.clashPriority !== a.clashPriority) {
                        b.clashNegate = true;
                    }
                }

                if (a.follow)
                    a.setPlayerStunFrames(20);
                if (b.follow)
                    b.setPlayerStunFrames(20);
            }
        }
        for (let i in pcs) {
            let a = pcs[i].a;
            let p = pcs[i].p;

            if(!a.clashNegate)
                a.attack(p);


            if (a.projectile && (p.iFrames <= 0 || !p.invTo.includes("attack")) && a.multi <= 0) {
                a.endLife();
            }
        }
    }

    random(low, high) {
        let highPlus = high + 1;

        let count = 0;
        for (let i in this.players) {
            count += 9 * this.players[i].x + 3 * this.players[i].y + 1 + this.players[i].health;
        }
        for (let i in this.attacks) {
            count += 81 * this.attacks[i].properties.length;
        }
        count += this.rSeed + this.frameCount;
        count += this.camera.x + this.camera.y;

        this.rSeed *= 1.61803;
        this.rSeed = floor(this.rSeed);
        this.rSeed %= 1000000;

        return floor(((count * 3581 + 3457) % highPlus) + low);
    }

    serialize() {
        return (({
            g,
            name,
            background,
            foreground,
            width,
            height,
            name1,
            name2,
            maxPlayerDist,
            walls,
            stageWidth,
            stageHeight,
            bgWidth,
            bgHeight,
            wallLeft,
            wallTop,
            wallRight,
            wallDown,
            startPoints,
            currentMusic,
            firstTo,
            ps,
            rollbacking,
            rollbackingFrames,
            ...o
        }) => defaultSerialize(o))(this);
    }

    deserialize(obj) {
        this.attacks = [];
        for (let i in obj.attacks) {
            let name = obj.attacks[i].name;
            if (name === "dash attack")
                name = "DASH_ATTACK";
            let player = this.players[obj.attacks[i].player];
            if (player[name]) {
                this.attacks.push(new player[name](player));
            } else {
                this.attacks.push(new Attack(player));
            }
            this.attacks[i].deserialize(obj.attacks[i], this);
        }

        defaultCopyValues(this, obj, ["attacks"]);

        /*this.attacks = [];
        for (let i in obj.attacks) {
            let name = obj.attacks[i].name;
            if (name === "dash attack")
                name = "DASH_ATTACK";
            let player = this.players[obj.attacks[i].player];
            this.attacks.push(new player[name](player));
            this.attacks[i].deserialize(obj.attacks[i], this);
        }*/
    }
}

//A class for matrix transformations that emulate a camera (2d)
class CameraFake {
    constructor() {
        /** @type {number} */
        this.x = 0;
        /** @type {number} */
        this.y = 0;
        /** @type {number} */
        this.width = 512;
        /** @type {number} */
        this.height = 384;
        /** @type {number} */
        this.zoom = 1;

        /** @type {string} */
        this.options = "follow";//Could be follow (default), close, far, or fixed
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    setCenter(x, y) {
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
    }

    /**
     * 
     * @param {Graphics} g
     */
    pushMatrix(g) {
        g.push();
    }

    /**
     * 
     * @param {Graphics} g
     */
    transform(g) {
        g.scale(this.zoom);
        g.translate(-this.x, -this.y);
    }

    /**
     * 
     * @param {Graphics} g
     */
    popMatrix(g) {
        g.pop();
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} speed
     * @param {number} zSpeed
     */
    follow(x, y, speed = 1, zSpeed = 1) {
        let zoom = 1;
        switch (this.options) {
            case "follow":
                zoom = 1;
                break;
            case "close":
                zoom = 1;
                break;
            case "far":
                zoom = 1.25;
                break;
            case "fixed":
                zoom = 1;
                break;
        }
        this.x += (x - this.x - this.width / 2 * zoom) * speed / 100;
        this.y += (y - this.y - this.height / 2 * zoom) * speed / 100;
        this.zoom = 1 / (this.zoom + (zoom - this.zoom) / zSpeed);//This formula is found on Desmos (look at documentation)
    }
}