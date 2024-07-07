/** */
class Rectangle {
	/**
	 * 
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
	constructor(x = 0, y = 0, width = 0, height = 0) {
		/** @type {number} */
		this.x = x;
		/** @type {number} */
		this.y = y;
		/** @type {number} */
		this.width = width;
		/** @type {number} */
		this.height = height;
	}

	/**
	 * 
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 */
	add(x, y, width=0, height=0) {
		return new Rectangle(this.x + x, this.y + y, this.width + width, this.height + height);
	}

	/**
	 * 
	 * @param {Graphics} g
	 */
	debugDraw(g) {
		g.fill(255, 0, 0, 150);
		g.noStroke();
		
		g.rect(this.x, this.y, this.width, this.height);
	}

	/**
	 * 
	 * @param {Rectangle} rect1
	 * @param {Rectangle} rect2
	 */
	static collide(rect1, rect2) {
		let left = rect1.x + rect1.width > rect2.x;
		let right = rect1.x < rect2.x + rect2.width;
		let top = rect1.y + rect1.height > rect2.y;
		let down = rect1.y < rect2.y + rect2.height;
		return left && right && top && down;
	}

	/**
	 * 
	 * @param {Rectangle} rect1
	 * @param {Rectangle} rect2
	 */
	static collideEdge(rect1, rect2) {
		let left = rect1.x + rect1.width >= rect2.x;
		let right = rect1.x <= rect2.x+rect2.width;
		let top = rect1.y + rect1.height >= rect2.y;
		let down = rect1.y <= rect2.y+rect2.height;
		return left && right && top && down;
	}
}

/** */
class Circle {
	/**
	 * 
	 * @param {number} x
	 * @param {number} y
	 * @param {number} diameter
	 */
	constructor(x, y, diameter) {
		/** @type {number} */
		this.x = x;
		/** @type {number} */
		this.y = y;
		/** @type {number} */
		this.diameter = diameter;
	}

	/** */
	left() {
		return this.x - this.diameter/2;
	}

	/** */
	right() {
		return this.x + this.diameter/2;
	}

	/** */
	top() {
		return this.y - this.diameter/2;
	}

	/** */
	down() {
		return this.y + this.diameter/2;
	}

	/**
	 * 
	 * @param {Circle} circle1
	 * @param {Circle} circle2
	 */
	static collide(circle1, circle2) {
		return dist(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.diameter/2 + circle2.diameter/2;
	}

	/**
	 * 
	 * @param {Circle} circle1
	 * @param {Circle} circle2
	 */
	static collideEdge(circle1, circle2) {
		return dist(circle1.x, circle1.y, circle2.x, circle2.y) <= circle1.diameter/2 + circle2.diameter/2;
	}
}

class ICircle extends Circle {
	constructor(x, y, diameter) {
		super(x, y, diameter);

		this.intangible = true;
	}
}