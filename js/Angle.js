/**
 * 
 */
class Angle {
	/**
	 * 
	 * @param {number} value
	 */
	constructor(value = 0) {
		/** @type {number} */
		this.value = value;

		this.normalize();
	}

	/**
	 * 
	 * @param {number} x
	 * @param {number} y
	 */
	setFromPoint(x, y) {
		this.value = atan2(y, x);
		this.normalize();
		
		return this;
	}

	getX() {
		return cos(this.value);
	}

	getY() {
		return sin(this.value);
    }

	/**
	 * 
	 * @param {number} value
	 */
	setValue(value) {
		this.value = value;

		return this;
	}

	/**
	 * 
	 * @param {number} d
	 */
	changeValue(d) {
		this.value += d;

		this.normalize();

		return this;
    }

	/** */
	normalize() {
		while(this.value < 0) {
			this.value += 2*PI;
		}
		while(this.value > 2*PI) {
			this.value -= 2*PI;
		}
	}

	static dot(angle1, angle2) {
		return angle1.getX() * angle2.getX() + angle1.getY() * angle2.getY();
    }
	
	/**
	 * Tells the smallest (least magnitude) angle difference between two angles (positive indicates a clockwise rotation)
	 * @param {Angle} angle1
	 * @param {Angle} angle2
	 */
	static compare(angle1, angle2) {
		if (typeof angle1 === "number")
			angle1 = new Angle(angle1);

		if (typeof angle2 === "number")
			angle2 = new Angle(angle2);

		let diff = angle2.value - angle1.value;
		
		while(diff <= -PI) {
			diff += 2*PI;
		}
		while(diff > PI) {
			diff -= 2*PI;
		}
		
		return diff;
	}

	/**
	 * Tells the smallest (least magnitude) angle difference (always positive) between two angles
	 * @param {Angle} angle1
	 * @param {Angle} angle2
	 */
	static distance(angle1, angle2) {
		return abs(Angle.compare(angle1, angle2));
	}

	static initEnums() {
		/** @type {Angle} */
		Angle.RIGHT = new Angle(0);
		/** @type {Angle} */
		Angle.DOWN = new Angle(PI / 2);
		/** @type {Angle} */
		Angle.LEFT = new Angle(PI);
		/** @type {Angle} */
		Angle.UP = new Angle(3 * PI / 2);

		/** @type {Angle} */
		Angle.DOWNRIGHT = new Angle(PI / 4);
		/** @type {Angle} */
		Angle.DOWNLEFT = new Angle(3 * PI / 4);
		/** @type {Angle} */
		Angle.UPLEFT = new Angle(5 * PI / 4);
		/** @type {Angle} */
		Angle.UPRIGHT = new Angle(7 * PI / 4);
    }
}