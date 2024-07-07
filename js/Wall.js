class Point {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	draw(g) {
		g.strokeWeight(5);
		g.stroke(0);
		g.point(this.x, this.y);
	}

	static collidePointCircle(x1, y1, x, y, r) {
		return dist(x1, y1, x, y) <= r;
	}

	static getNormalizedVector(p) {
		let dis = sqrt(p.x * p.x + p.y * p.y);
		return new Point(p.x / dis, p.y / dis);
	}

	static dotProduct(p1, p2) {
		return p1.x * p2.x + p1.y * p2.y;
	}
}
class Line {
	constructor(x1, y1, x2, y2) {
		this.point1 = new Point(x1, y1);
		this.point2 = new Point(x2, y2);
	}

	getOrthoVector() {
		return new Point(this.point1.y - this.point2.y, this.point2.x - this.point1.x);
	}

	getOrthoNormalVector() {
		return Point.getNormalizedVector(this.getOrthoVector());
	}

	getClosestPoint(c, constrain = false) {
		let point = new Point();
		let m = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x);

		let ax = this.point1.x;
		let ay = this.point1.y;
		let bx = this.point2.x;
		let by = this.point2.y;
		let cx = c.x;
		let cy = c.y;

		if (ax === bx) {
			if (ay === by) {
				point.y = ay;
			} else {
				point.y = cy;
			}
			point.x = ax;
		} else {
			point.y = (m * ((ax * cx - bx * cx + ay * cy - by * cy) / (ax - bx) - ax) + ay) / (1 + m * m);
			point.x = (ax * cx - bx * cx + ay * cy - ay * point.y - by * cy + by * point.y) / (ax - bx);
		}

		if (constrain) {
			if (point.x > max(ax, bx)) {
				point.x = max(ax, bx);
				point.y = point.x === ax ? ay : by;
			}
			if (point.x < min(ax, bx)) {
				point.x = min(ax, bx);
				point.y = point.x === ax ? ay : by;
			}
			if (point.y > max(ay, by)) {
				point.y = max(ay, by);
				point.x = point.y === ay ? ax : bx;
			}
			if (point.y < min(ay, by)) {
				point.y = min(ay, by);
				point.x = point.y === ay ? ax : bx;
			}
		}
		return point;
	}

	collidePoint(p, lineR, constrain = false) {
		let point = this.getClosestPoint(p, constrain);

		return dist(p.x, p.y, point.x, point.y) <= lineR;
	}

	pointInFront(p) {
		let dot = Point.dotProduct(new Point(p.x - this.point1.x, p.y - this.point1.y), this.getOrthoVector());
		return dot >= 0;
	}
}

class Wall extends Line {
	constructor(x1, y1, x2, y2, radius = 10) {
		super(x1, y1, x2, y2);

		this.radius = radius;
	}

	collidePoint(p, constrain = false) {
		return super.collidePoint(p, this.radius, constrain);
	}

	collidePointSuper(p, radius, constrain = false) {
		return super.collidePoint(p, radius, constrain);
	}

	draw(g, accuracy = 0.0125) {
		g.noStroke();
		g.fill(255, 0, 0, max(1, 4800 * accuracy));
		for (let percent = 0; percent <= 1; percent += accuracy) {
			g.ellipse(this.point1.x * percent + this.point2.x * (1 - percent), this.point1.y * percent + this.point2.y * (1 - percent), this.radius * 2, this.radius * 2);
		}
	}
}