/**
 * Like a Hitbox, but uses circles instead of rectangles
 */
class Hitcircle {
	constructor(x = 0, y = 0, circles = []) {
		/** @type {number} */
		this.x = x;
		/** @type {number} */
		this.y = y;
		/** @type {Circle[]} */
		this.circles = circles;

		/** @type {number} */
		this.circleRotation = new Angle();

		/** @type {Rectangle} @private */
		this._main = new Rectangle();
		this.resetMain();
	}

	/** */
	resetMain() {
		let left;
		let top;
		let right;
		let down;
		if(this.circles.length > 0) {
			left = this.circles[0].left();
			top = this.circles[0].top();
			right = this.circles[0].right();
			down = this.circles[0].down();
		}
		for(let i in this.circles) {
			left = min(left, this.circles[i].left());
			top = min(top, this.circles[i].top());
			right = max(right, this.circles[i].right());
			down = max(down, this.circles[i].down());
		}
		
		this._main.x = left;
		this._main.y = top;
		this._main.width = right - left;
		this._main.height = down - top;
	}

	mainRadius() {
		let max = 0;
		for (let i in this.circles) {
			let current = dist(0, 0, this.circles[i].x, this.circles[i].y) + this.circles[i].diameter/2;
			if (current > max) {
				max = current;
            }
		}
		return max;
    }

	/** */
	mainX() {
		return this.x + this._main.x;
	}

	/** */
	mainY() {
		return this.y + this._main.y;
	}

	/** */
	mainWidth() {
		return this._main.width;
	}

	/** */
	mainHeight() {
		return this._main.height;
    }

	/** */
	averageX() {
		let sum = 0;
		for (let i in this.circles) {
			sum += this.circles[i].x;
		}
		return sum / this.circles.length + this.x;
	}
	/** */
	averageY() {
		let sum = 0;
		for (let i in this.circles) {
			sum += this.circles[i].y;
		}
		return sum / this.circles.length + this.y;
	}

	/**
	 * 
	 * @param {number} i The index of the desired circle in this.circles array
	 */
	circleX(i) {
		return this.circles[i].x + this.x;
	}

	/**
	 * 
	 * @param {number} i The index of the desired circle in this.circles array
	 */
	circleY(i) {
		return this.circles[i].y + this.y;
	}

	/**
	 * 
	 * @param {number} i The index of the desired circle in this.circles array
	 */
	circleDiameter(i) {
		return this.circles[i].diameter;
	}

	circleIntangible(i) {
		return this.circles[i].intangible ? true : false;
	}

	rotateTo(angle) {
		for (let i in this.circles) {
			let c = this.circles[i];

			let currentPosAngle = atan2(c.y, c.x);
			let posAngle = angle.value + currentPosAngle - this.circleRotation.value;
			let posMag = dist(0, 0, c.x, c.y);

			c.x = cos(posAngle) * posMag;
			c.y = sin(posAngle) * posMag;
		}

		this.resetMain();

		this.circleRotation.value = angle.value;
	}

	/**
	 * 
	 * @param {Graphics} g The Graphics object to draw on
	 */
	debugDraw(g, red = 255, green = 0, blue = 0, opacity = 120) {
		for (let i in this.circles) {
			g.fill(red, green, blue, opacity);
			g.noStroke();
			if (this.circleIntangible(i))
				g.fill(red * 0.7, green * 0.7, blue * 0.7, opacity);

			g.ellipse(this.circleX(i), this.circleY(i), this.circleDiameter(i), this.circleDiameter(i));
		}
	}

	/**
	 * 
	 * @param {Graphics} g The graphics object to draw on
	 */
	debugDrawMain(g) {
		g.fill(255, 0, 0, 150);
		g.noStroke();
		
		g.rect(this.mainX(), this.mainY(), this._main.width, this._main.height);
	}

	/**
	 * 
	 * @param {Hitcircle} hit1 The first hitcircle
	 * @param {Hitcircle} hit2 The second hitcircle
	 */
	static collideMain(hit1, hit2) {
		let left = hit1.mainX() + hit1._main.width > hit2.mainX();
		let right = hit1.mainX() < hit2.mainX() + hit2._main.width;
		let top = hit1.mainY() + hit1._main.height > hit2.mainY();
		let down = hit1.mainY() < hit2.mainY() + hit2._main.height;
		return left && right && top && down;
	}

	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {Hitcircle} hit2
	 */
	static collideMainEdge(hit1, hit2) {
		let left = hit1.mainX() + hit1._main.width >= hit2.mainX();
		let right = hit1.mainX() <= hit2.mainX() + hit2._main.width;
		let top = hit1.mainY() + hit1._main.height >= hit2.mainY();
		let down = hit1.mainY() <= hit2.mainY() + hit2._main.height;
		return left && right && top && down;
	}

	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {number} i
	 * @param {Hitcircle} hit2
	 * @param {number} u
	 */
	static collideCircle(hit1, i, hit2, u) {
		return dist(hit1.circleX(i), hit1.circleY(i), hit2.circleX(u), hit2.circleY(u)) < hit1.circleDiameter(i)/2 + hit2.circleDiameter(u)/2;
	}
	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {number} i
	 * @param {Hitcircle} hit2
	 * @param {number} u
	 */
	static collideCircleEdge(hit1, i, hit2, u) {
		return dist(hit1.circleX(i), hit1.circleY(i), hit2.circleX(u), hit2.circleY(u)) <= hit1.circleDiameter(i)/2 + hit2.circleDiameter(u)/2;
	}

	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {Hitcircle} hit2
	 */
	static collide(hit1, hit2) {
		let collided = false;
		if(Hitcircle.collideMain(hit1, hit2)) {
			for(let i in hit1.circles) {
				for(let u in hit2.circles) {
					if(hit1.circles[i].diameter > 0 && hit2.circles[u].diameter > 0 && Hitcircle.collideCircle(hit1, i, hit2, u))
						collided = true;
				}
			}
		}
		return collided;
	}

	static collideSpecificFirst(hit1, hit2, result) {
		if (Hitcircle.collideMain(hit1, hit2)) {
			for (let i in hit1.circles) {
				for (let u in hit2.circles) {
					if (hit1.circles[i].diameter > 0 && hit2.circles[u].diameter > 0 && Hitcircle.collideCircle(hit1, i, hit2, u)) {
						return result(i, u);
					}
				}
			}
		}
	}
	static collideSpecific(hit1, hit2, result) {
		if (Hitcircle.collideMain(hit1, hit2)) {
			for (let i in hit1.circles) {
				for (let u in hit2.circles) {
					if (hit1.circles[i].diameter > 0 && hit2.circles[u].diameter > 0 && Hitcircle.collideCircle(hit1, i, hit2, u)) {
						result(i, u);
					}
				}
			}
		}
	}

	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {Hitcircle} hit2
	 */
	static collideEdge(hit1, hit2) {
		let collided = false;
		if(Rectangle.collideMain(hit1, hit2)) {
			for(let i in hit1.circles) {
				for(let u in hit2.circles) {
					if (hit1.circles[i].diameter > 0 && hit2.circles[u].diameter > 0 && Hitcircle.collideCircle(hit1, i, hit2, u))
						 collided = true;
				}
			}
		}
		return collided;
	}
	/**
	 * 
	 * @param {Hitcircle} hit1
	 * @param {Hitcircle} hit2
	 */
	static collideAngle(hit1, hit2) {
		let y = (hit2.mainY()+hit2._main.height/2) - (hit1.mainY()+hit1._main.height/2);
		let x = (hit2.mainX()+hit2._main.width/2) - (hit1.mainX()+hit1._main.width/2);
		return atan2(y, x);
	}

	serialize() {
		return (({
			...o
		}) => defaultSerialize(o))(this);
	}
}