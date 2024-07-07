class Staling {
	constructor(staleDuration, maxStale = 8) {
		this.attacks = {};
		this.staleDuration = staleDuration;
		this.maxStale = maxStale;
		this.totalAttacks = 0;
	}

	add(attack) {
		if (this.attacks[attack.name]) {
			if (this.attacks[attack.name].count <= 0)
				this.attacks[attack.name].duration = this.attacks[attack.name].maxDuration;
			this.attacks[attack.name].count++;
			if (this.attacks[attack.name].count > this.maxStale) {
				this.attacks[attack.name].count = this.maxStale;
				this.attacks[attack.name].duration = this.attacks[attack.name].maxDuration;
			}
		} else {
			this.attacks[attack.name] = new MoveStale(1, this.staleDuration);
		}
	}

	getStaling(name) {
		if (this.attacks[name])
			return this.attacks[name].count;
		return 0;
	}

	update() {
		let total = 0;
		for (let i in this.attacks) {
			this.attacks[i].update(this.totalAttacks/4 + 1);
			if (this.attacks[i].count > 0)
				total++;
		}
		this.totalAttacks = total;
	}

	reset() {
		this.attacks = {};
	}

	serialize() {
		let copy = {};
		copy.attacks = {};
		for (let i in this.attacks) {
			copy.attacks[i] = {
				count: this.attacks[i].count,
				duration: this.attacks[i].duration,
				maxDuration: this.attacks[i].maxDuration
			};
		}
		copy.staleDuration = this.staleDuration;
		copy.maxStale = this.maxStale;
		copy.totalAttacks = this.totalAttacks;
		return copy;
	}

	deserialize(obj) {
		this.attacks = {};
		for (let i in obj.attacks) {
			this.attacks[i] = new MoveStale(obj.attacks[i].count, obj.attacks[i].duration, obj.attacks[i].maxDuration);
		}
		this.staleDuration = obj.staleDuration;
		this.maxStale = obj.maxStale;
		this.totalAttacks = obj.totalAttacks;
	}
}

class MoveStale {
	constructor(count, duration, maxDuration = duration) {
		this.maxDuration = maxDuration;
		this.duration = duration;
		this.count = count;
	}

	update(speed) {
		if (this.duration > 0)
			this.duration -= speed;
		if (this.duration <= 0 && this.count > 0) {
			this.count--;
			this.duration = this.maxDuration;
		}
	}
}