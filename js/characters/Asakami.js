class Asakami extends Player {
	constructor() {
		super([
			new Circle(0, 0, 80)
		]);

		this.hurtboxes["grab"] = [
			[new Circle(0, 0, 80),
			new Circle(9, 36, 24),
			new ICircle(26, -22, 49)]
		];

		this.hurtboxes["grabbed"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["lipuLili"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["lipuSuli"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["rightRoll"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["neutralRoll"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["leftRoll"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["walk"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(8, 40, 20),
			new Circle(12, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(6, 40, 20),
			new Circle(14, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(6, 40, 20),
			new Circle(14, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(8, 40, 20),
			new Circle(12, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(12, 40, 20),
			new Circle(8, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(14, 40, 20),
			new Circle(6, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(14, 40, 20),
			new Circle(6, -40, 20)],
			[new Circle(0, 0, 80),
			new Circle(12, 40, 20),
			new Circle(8, -40, 20)]
		];

		this.hurtboxes["dash attack"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(0, 0, 80),
			new ICircle(30, 30, 23),
			new Circle(10, -40, 20)],
			[new Circle(5, 5, 85),
			new ICircle(45, 20, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(65, 16, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(65, 17, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(58, 21, 30),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new ICircle(44, 22, 36),
			new Circle(10, -40, 20)],
			[new Circle(2, 2, 82),
			new ICircle(36, 29, 29),
			new Circle(12, -36, 23)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(-1, -3, 82),
			new Circle(10, 34, 26),
			new Circle(10, -40, 20)],
			[new Circle(-2, -5, 83),
			new Circle(2, 34, 26),
			new Circle(15, -35, 25)],
			[new Circle(-2, -6, 82),
			new Circle(-3, 32, 27),
			new Circle(15, -40, 20)],
			[new Circle(6, -2, 85),
			new ICircle(42, 26, 25),
			new Circle(14, -37, 20)],
			[new Circle(10, 4, 86),
			new ICircle(65, 20, 30),
			new Circle(14, -35, 24)],
			[new Circle(10, 4, 86),
			new ICircle(66, 17, 30),
			new Circle(14, -35, 24)],
			[new Circle(15, 1, 73),
			new Circle(65, 10, 28),
			new Circle(8, -29, 24)],
			[new Circle(13, 2, 77),
			new Circle(64, 4, 30),
			new Circle(8, -31, 20)],
			[new Circle(12, 2, 78),
			new Circle(64, 4, 30),
			new Circle(8, -31, 20)],
			[new Circle(13, 2, 79),
			new Circle(61, 21, 26),
			new Circle(13, -37, 20)],
			[new Circle(11, 3, 83),
			new Circle(50, 28, 27),
			new Circle(10, -31, 31)],
			[new Circle(6, 1, 80),
			new Circle(39, 34, 22),
			new Circle(14, -33, 27)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, -2, 80),
			new ICircle(26, 27, 36),
			new Circle(10, -32, 33)],
			[new Circle(2, 0, 79),
			new ICircle(40, 18, 39),
			new Circle(11, -33, 26)],
			[new Circle(8, -3, 84),
			new Circle(37, 11, 48),
			new ICircle(68, 14, 30)],
			[new Circle(9, -3, 79),
			new Circle(40, 13, 45),
			new ICircle(66, 15, 30)],
			[new Circle(7, -2, 84),
			new Circle(37, 17, 40),
			new ICircle(59, 23, 31)],
			[new Circle(4, -5, 79),
			new Circle(26, 18, 41),
			new ICircle(48, 24, 31)],
			[new Circle(2, -5, 81),
			new Circle(27, 23, 34),
			new ICircle(45, 25, 25)],
			[new Circle(4, 0, 79),
			new ICircle(34, 27, 33),
			new Circle(12, -29, 37)],
			[new Circle(2, 0, 80),
			new Circle(30, 27, 34),
			new Circle(12, -29, 37)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(-4, 3, 83),
			new Circle(13, 29, 34),
			new ICircle(4, -33, 32)],
			[new Circle(-1, 7, 79),
			new Circle(20, 30, 31),
			new ICircle(4, -28, 35)],
			[new Circle(0, -3, 85),
			new Circle(14, 27, 32),
			new ICircle(30, -36, 32)],
			[new Circle(6, -6, 86),
			new Circle(28, -26, 50),
			new ICircle(51, -40, 29)],
			[new Circle(10, -10, 85),
			new Circle(35, -33, 39),
			new ICircle(55, -38, 29)],
			[new Circle(8, -8, 84),
			new ICircle(43, -36, 29)],
			[new Circle(6, -7, 79),
			new Circle(19, 18, 37),
			new ICircle(38, -34, 30)],
			[new Circle(4, -7, 80),
			new Circle(18, 22, 34),
			new ICircle(34, -37, 31)],
			[new Circle(2, -4, 78),
			new Circle(15, 25, 33),
			new ICircle(28, -30, 37)],
			[new Circle(0, -3, 80),
			new Circle(12, 25, 33),
			new ICircle(21, -35, 32)],
			[new Circle(1, -1, 75),
			new Circle(12, 30, 29),
			new Circle(5, -33, 29)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 85),
			new Circle(16, 37, 27),
			new Circle(15, -38, 20)],
			[new Circle(-1, -1, 82),
			new ICircle(37, 31, 74),
			new Circle(15, -37, 22)],
			[new Circle(-2, -1, 83),
			new Circle(24, 31, 32),
			new ICircle(35, -15, 103)],
			[new Circle(-2, 0, 84),
			new Circle(24, 28, 34),
			new ICircle(18, -13, 86)],
			[new Circle(-1, -1, 84),
			new Circle(25, 30, 31),
			new Circle(19, -38, 31)],
			[new Circle(-1, -1, 83),
			new Circle(17, 31, 32),
			new Circle(17, -30, 40)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 30),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new ICircle(30, 30, 30),
			new Circle(10, -40, 20)],
			[new Circle(5, 5, 85),
			new ICircle(45, 20, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(65, 20, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(65, 20, 30),
			new Circle(10, -40, 20)],
			[new Circle(10, 10, 90),
			new ICircle(55, 20, 30),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new ICircle(45, 30, 30),
			new Circle(10, -40, 20)],
		];

		this.hurtboxes["SS"] = [
			[new Circle(0, 0, 80),
			new Circle(21, 31, 30),
			new Circle(14, -31, 36)],
			[new Circle(3, 0, 79),
			new Circle(27, 26, 37),
			new Circle(15, -34, 35)],
			[new Circle(6, -2, 80),
			new Circle(34, 22, 38),
			new Circle(18, -33, 38)],
			[new Circle(5, -1, 79),
			new Circle(31, 24, 39),
			new Circle(23, -32, 36)],
			[new Circle(5, -2, 82),
			new Circle(36, 24, 36),
			new Circle(34, -28, 39)],
			[new Circle(3, -1, 82),
			new Circle(33, 23, 40),
			new Circle(31, -30, 39)],
			[new Circle(4, -1, 83),
			new Circle(36, 22, 40),
			new Circle(33, -29, 40)],
			[new Circle(4, -1, 81),
			new Circle(30, 23, 42),
			new Circle(29, -30, 38)],
			[new Circle(7, -3, 83),
			new Circle(35, 26, 34),
			new Circle(33, -30, 35)],
			[new Circle(6, -2, 81),
			new Circle(31, 25, 37),
			new Circle(31, -30, 39)],
			[new Circle(7, -1, 83),
			new Circle(35, 24, 35),
			new Circle(36, -30, 35)],
			[new Circle(5, -1, 81),
			new Circle(33, 27, 35),
			new Circle(31, -27, 40)],
			[new Circle(8, -2, 82),
			new Circle(36, 25, 34),
			new Circle(35, -24, 40)],
			[new Circle(6, -2, 80),
			new Circle(33, 26, 35),
			new Circle(31, -28, 36)],
			[new Circle(5, -2, 77),
			new Circle(28, 25, 40),
			new Circle(24, -28, 36)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(2, 0, 80),
			new Circle(21, 37, 23),
			new Circle(10, -38, 21)],
			[new Circle(4, 1, 82),
			new Circle(22, 31, 32),
			new Circle(10, -21, 50)],
			[new Circle(4, 0, 81),
			new Circle(17, 29, 33),
			new Circle(12, -31, 29)],
			[new Circle(5, -2, 80),
			new Circle(9, 33, 29),
			new Circle(18, -30, 35)],
			[new Circle(7, -3, 82),
			new Circle(9, 31, 32),
			new Circle(25, -32, 31)],
			[new Circle(8, -2, 81),
			new Circle(15, 35, 33),
			new Circle(21, -33, 29)],
			[new Circle(6, 0, 85),
			new Circle(24, 33, 35),
			new Circle(11, -23, 50)],
			[new Circle(6, 4, 85),
			new Circle(31, 37, 34),
			new Circle(10, -33, 27)],
			[new Circle(12, 3, 81),
			new Circle(45, 28, 30),
			new Circle(9, -24, 41)],
			[new Circle(13, 2, 79),
			new Circle(45, 29, 29),
			new Circle(8, -21, 47)],
			[new Circle(13, 2, 79),
			new Circle(42, 29, 28),
			new Circle(8, -21, 47)],
			[new Circle(7, 0, 79),
			new Circle(26, 32, 29),
			new Circle(7, -33, 28)],
			[new Circle(3, -1, 76),
			new Circle(12, 33, 29),
			new Circle(8, -34, 31)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(3, -5, 84),
			new Circle(9, 37, 20),
			new Circle(18, -37, 20)],
			[new Circle(7, -5, 85),
			new Circle(7, 37, 20),
			new Circle(26, -37, 20)],
			[new Circle(7, -3, 85),
			new Circle(7, 36, 20),
			new Circle(26, -36, 20)],
			[new Circle(6, -4, 82),
			new Circle(8, 33, 25),
			new Circle(21, -33, 26)],
			[new Circle(4, 0, 79),
			new Circle(14, 33, 25),
			new Circle(15, -34, 31)],
			[new Circle(4, 4, 81),
			new Circle(20, 35, 26),
			new Circle(9, -31, 30)],
			[new Circle(6, 1, 83),
			new Circle(21, 30, 38),
			new Circle(9, -21, 50)],
			[new Circle(6, -1, 82),
			new Circle(19, 25, 39),
			new Circle(16, -37, 31)],
			[new Circle(7, -1, 84),
			new Circle(16, 28, 39),
			new Circle(24, -34, 33)],
			[new Circle(7, -2, 82),
			new Circle(14, 27, 36),
			new Circle(34, -33, 36)],
			[new Circle(12, -5, 84),
			new Circle(7, 30, 28),
			new Circle(46, -28, 28)],
			[new Circle(14, -5, 82),
			new Circle(4, 33, 26),
			new Circle(45, -28, 28)],
			[new Circle(13, -3, 82),
			new Circle(4, 31, 27),
			new Circle(46, -31, 21)],
			[new Circle(8, -1, 77),
			new Circle(7, 34, 27),
			new Circle(27, -29, 33)],
			[new Circle(8, 1, 78),
			new Circle(9, 34, 31),
			new Circle(17, -30, 31)],
			[new Circle(2, 2, 75),
			new Circle(9, 33, 31),
			new Circle(11, -28, 36)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(0, 0, 80),
			new Circle(14, 38, 27),
			new Circle(14, -41, 26)],
			[new Circle(0, 0, 79),
			new Circle(8, 39, 30),
			new Circle(9, -40, 30)],
			[new Circle(0, 0, 79),
			new Circle(6, 40, 23),
			new Circle(9, -42, 28)],
			[new Circle(0, 0, 78),
			new Circle(27, -18, 45),
			new Circle(27, 18, 45)],
			[new Circle(0, 0, 78),
			new Circle(26, 17, 47),
			new Circle(25, -19, 44)],
			[new Circle(0, 0, 78),
			new Circle(28, 18, 47),
			new Circle(26, -18, 46)],
			[new Circle(0, 0, 77),
			new Circle(29, 17, 46),
			new Circle(27, -18, 46)],
			[new Circle(0, 0, 77),
			new Circle(28, 22, 41),
			new Circle(27, -19, 43)],
			[new Circle(0, 0, 76),
			new Circle(25, 27, 36),
			new Circle(27, -24, 40)],
			[new Circle(0, 0, 75),
			new Circle(22, 30, 33),
			new Circle(23, -27, 34)],
			[new Circle(0, 0, 75),
			new Circle(23, 29, 37),
			new Circle(23, -28, 37)],
			[new Circle(2, 0, 76),
			new Circle(17, 30, 37),
			new Circle(20, -30, 39)],
			[new Circle(2, 0, 75),
			new Circle(17, 30, 39),
			new Circle(17, -30, 40)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(0, 0, 80),
			new Circle(9, 36, 24),
			new ICircle(26, -22, 49)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(0, 0, 80),
			new Circle(21, 37, 24),
			new Circle(21, -35, 30)],
			[new Circle(0, 0, 80),
			new Circle(25, 34, 30),
			new Circle(17, -21, 51)],
			[new Circle(0, 1, 80),
			new Circle(24, 28, 36),
			new Circle(19, -19, 50)],
			[new Circle(0, 2, 80),
			new Circle(29, 29, 32),
			new Circle(20, -16, 50)],
			[new Circle(0, 0, 71),
			new Circle(13, 41, 35),
			new Circle(25, -38, 38)],
			[new Circle(0, 0, 72),
			new Circle(12, 44, 32),
			new Circle(24, -37, 44)],
			[new Circle(0, 0, 73),
			new Circle(14, 41, 35),
			new Circle(26, -39, 39)],
			[new Circle(0, 0, 70),
			new Circle(14, 45, 32),
			new Circle(24, -40, 39)],
			[new Circle(0, 0, 73),
			new Circle(16, 44, 32),
			new Circle(26, -40, 37)],
			[new Circle(0, 0, 75),
			new Circle(15, 34, 35),
			new Circle(21, -33, 35)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(0, 0, 80),
			new Circle(23, 33, 25),
			new Circle(10, -40, 20)],
			[new Circle(0, 6, 80),
			new Circle(30, 34, 24),
			new Circle(9, -19, 50)],
			[new Circle(3, 5, 77),
			new Circle(35, 36, 28),
			new Circle(8, -20, 50)],
			[new Circle(1, 1, 77),
			new Circle(31, 29, 32),
			new Circle(9, -19, 50)],
			[new Circle(0, -10, 72),
			new Circle(17, 16, 50),
			new Circle(38, 33, 22)],
			[new Circle(2, -10, 70),
			new Circle(13, 14, 56),
			new Circle(38, 35, 22)],
			[new Circle(2, -11, 67),
			new Circle(14, 16, 54),
			new Circle(36, 36, 22)],
			[new Circle(3, -11, 66),
			new Circle(14, 15, 53),
			new Circle(36, 37, 21)],
			[new Circle(4, -10, 68),
			new Circle(11, 18, 53),
			new Circle(32, 35, 22)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(20, -29, 33)],
			[new Circle(-1, -3, 81),
			new Circle(7, 22, 47),
			new Circle(26, -29, 37)],
			[new Circle(-1, -1, 80),
			new Circle(7, 21, 50),
			new Circle(33, -33, 36)],
			[new Circle(0, -3, 79),
			new Circle(8, 21, 50),
			new Circle(33, -33, 37)],
			[new Circle(1, -3, 79),
			new Circle(8, 22, 50),
			new Circle(32, -34, 36)],
			[new Circle(1, -3, 78),
			new Circle(8, 22, 50),
			new Circle(33, -32, 38)],
			[new Circle(2, -4, 77),
			new Circle(8, 22, 50),
			new Circle(33, -33, 36)],
			[new Circle(0, -2, 79),
			new Circle(8, 22, 50),
			new Circle(32, -33, 38)],
			[new Circle(1, -1, 79),
			new Circle(8, 25, 45),
			new Circle(26, -29, 38)],
			[new Circle(1, 0, 78),
			new Circle(8, 26, 44),
			new Circle(18, -25, 41)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(-3, -2, 81),
			new Circle(3, 31, 30),
			new Circle(10, -32, 32)],
			[new Circle(-6, -2, 76),
			new Circle(-6, 28, 32),
			new Circle(9, -32, 33)],
			[new Circle(3, -6, 80),
			new Circle(38, 16, 46)],
			[new Circle(3, -8, 77),
			new Circle(38, 14, 50)],
			[new Circle(0, -1, 84),
			new Circle(42, 9, 50)],
			[new Circle(3, -2, 81),
			new Circle(45, 5, 50)],
			[new Circle(-1, -3, 81),
			new Circle(41, 10, 50)],
			[new Circle(1, 3, 78),
			new Circle(35, 21, 39),
			new Circle(7, -27, 36)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(0, 0, 80),
			new Circle(16, -38, 20),
			new Circle(14, 38, 20)],
			[new Circle(-2, 0, 80),
			new Circle(9, -36, 22),
			new Circle(17, 40, 19)],
			[new Circle(0, 3, 81),
			new Circle(6, -31, 31),
			new Circle(20, 38, 21)],
			[new Circle(0, 0, 85),
			new Circle(17, -31, 35),
			new Circle(15, 38, 26)],
			[new Circle(-1, 0, 83),
			new Circle(27, -27, 36),
			new Circle(13, 38, 24)],
			[new Circle(-2, 0, 82),
			new Circle(25, -19, 50),
			new Circle(6, 36, 22)],
			[new Circle(-2, 0, 79),
			new Circle(27, -19, 45),
			new Circle(4, 35, 20)],
			[new Circle(-2, 0, 79),
			new Circle(27, -18, 46),
			new Circle(4, 34, 21)],
			[new Circle(-2, 0, 80),
			new Circle(27, -18, 46),
			new Circle(4, 34, 21)],
			[new Circle(-1, 0, 80),
			new Circle(26, -18, 47),
			new Circle(7, 33, 24)],
			[new Circle(0, 0, 81),
			new Circle(23, -19, 54),
			new Circle(7, 20, 50)],
			[new Circle(0, 0, 80),
			new Circle(24, -30, 38),
			new Circle(9, 26, 39)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(0, 0, 80),
			new Circle(14, -38, 27),
			new Circle(11, 38, 27)],
			[new Circle(-5, -3, 77),
			new Circle(21, -27, 38),
			new Circle(-4, 35, 28)],
			[new Circle(-5, -2, 77),
			new Circle(24, -26, 35),
			new Circle(-6, 34, 31)],
			[new Circle(-7, -2, 77),
			new Circle(22, -31, 37),
			new Circle(-6, 38, 29)],
			[new Circle(-9, -4, 78),
			new Circle(22, -31, 36),
			new Circle(-3, 35, 29)],
			[new Circle(-10, -1, 72),
			new Circle(21, -29, 32),
			new Circle(-4, 36, 27)],
			[new Circle(-10, -3, 75),
			new Circle(22, -16, 46),
			new Circle(-1, 36, 31)],
			[new Circle(-7, -2, 76),
			new Circle(22, 32, 33),
			new Circle(31, -1, 48)],
			[new Circle(-8, -2, 76),
			new Circle(28, 0, 51),
			new Circle(22, 32, 33)],
			[new Circle(-9, -3, 75),
			new Circle(28, 1, 50),
			new Circle(21, 32, 33)],
			[new Circle(-1, 0, 74),
			new Circle(31, 3, 48),
			new Circle(23, 30, 39)],
			[new Circle(-1, 0, 73),
			new Circle(31, 2, 46),
			new Circle(24, 32, 33)],
			[new Circle(2, 1, 75),
			new Circle(38, -7, 35),
			new Circle(19, 33, 33)],
			[new Circle(1, 3, 76),
			new Circle(24, -22, 39),
			new Circle(18, 37, 27)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(-2, -1, 76),
			new Circle(17, -32, 25),
			new Circle(7, 36, 20)],
			[new Circle(-9, -3, 77),
			new Circle(11, -30, 29),
			new Circle(1, 36, 26)],
			[new Circle(-9, -4, 77),
			new Circle(11, -30, 29),
			new Circle(-3, 36, 26)],
			[new Circle(-6, -4, 80),
			new Circle(24, -13, 37),
			new Circle(5, 33, 29)],
			[new Circle(-7, 1, 76),
			new Circle(11, 8, 64),
			new Circle(2, 35, 28)],
			[new Circle(-7, 1, 76),
			new Circle(9, 6, 69),
			new Circle(2, 35, 27)],
			[new Circle(-8, 1, 76),
			new Circle(7, 7, 73),
			new Circle(3, 35, 28)],
			[new Circle(-7, 1, 76),
			new Circle(6, 6, 76),
			new Circle(2, 35, 27)],
			[new Circle(-7, 1, 74),
			new Circle(4, 8, 75),
			new Circle(1, 36, 26)],
			[new Circle(0, 7, 83)],
			[new Circle(2, 9, 80)],
			[new Circle(-2, 5, 83),
			new Circle(19, -6, 50)],
			[new Circle(4, -8, 76),
			new Circle(-6, -44, 20),
			new Circle(36, 4, 25)],
			[new Circle(4, -5, 75),
			new Circle(1, -41, 24),
			new Circle(27, 21, 32)],
			[new Circle(4, -1, 76),
			new Circle(8, -32, 38),
			new Circle(18, 27, 39)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(-3, 0, 75),
			new Circle(10, -40, 20),
			new Circle(19, 33, 20)],
			[new Circle(-9, 3, 77),
			new Circle(0, -37, 25),
			new Circle(13, 30, 27)],
			[new Circle(-10, 3, 78),
			new Circle(-2, -36, 27),
			new Circle(12, 31, 28)],
			[new Circle(-7, 2, 81),
			new Circle(4, -34, 28),
			new Circle(24, 12, 37)],
			[new Circle(-6, 2, 80),
			new Circle(6, -14, 68),
			new Circle(13, 2, 53)],
			[new Circle(-6, 1, 80),
			new Circle(6, -14, 68),
			new Circle(16, 0, 50)],
			[new Circle(-7, 2, 79),
			new Circle(2, -11, 74),
			new Circle(14, 1, 50)],
			[new Circle(-7, 1, 79),
			new Circle(3, -14, 69),
			new Circle(31, 6, 27)],
			[new Circle(-7, 1, 78),
			new Circle(3, -12, 74),
			new Circle(28, 17, 24)],
			[new Circle(-7, 0, 79),
			new Circle(2, -8, 80)],
			[new Circle(3, -6, 81)],
			[new Circle(-2, -3, 77),
			new Circle(10, -27, 34),
			new Circle(25, 9, 39)],
			[new Circle(5, 7, 76),
			new Circle(32, -2, 32),
			new Circle(-4, 40, 28)],
			[new Circle(5, 5, 75),
			new Circle(26, -20, 34),
			new Circle(0, 41, 29)],
			[new Circle(4, 3, 76),
			new Circle(19, -28, 36),
			new Circle(5, 39, 29)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(1, 0, 82),
			new Circle(13, 37, 23),
			new Circle(12, -37, 22)],
			[new Circle(1, 0, 82),
			new Circle(23, 33, 31),
			new Circle(25, -31, 32)],
			[new Circle(1, 0, 81),
			new Circle(26, 24, 41),
			new Circle(26, -26, 37)],
			[new Circle(1, 0, 80),
			new Circle(27, 23, 42),
			new Circle(26, -24, 41)],
			[new Circle(0, 0, 82),
			new Circle(7, 47, 24),
			new Circle(9, -47, 27)],
			[new Circle(1, 2, 81),
			new Circle(7, 49, 20),
			new Circle(10, -46, 28)],
			[new Circle(1, 2, 80),
			new Circle(7, 48, 23),
			new Circle(9, -46, 29)],
			[new Circle(2, 1, 80),
			new Circle(7, 48, 23),
			new Circle(9, -46, 30)],
			[new Circle(1, 1, 80),
			new Circle(7, 48, 22),
			new Circle(9, -46, 29)],
			[new Circle(1, 0, 81),
			new Circle(7, 48, 22),
			new Circle(9, -47, 27)],
			[new Circle(2, 0, 82),
			new Circle(11, 45, 22),
			new Circle(16, -40, 27)],
			[new Circle(2, 3, 80),
			new Circle(18, 41, 20),
			new Circle(16, -38, 26)],
			[new Circle(1, 0, 84),
			new Circle(14, 34, 29),
			new Circle(13, -34, 29)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(0, 0, 86),
			new Circle(15, 38, 27),
			new Circle(15, -39, 24)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(19, -34, 28)],
			[new Circle(1, 0, 78),
			new Circle(8, 21, 50),
			new Circle(24, -26, 36)],
			[new Circle(0, 0, 79),
			new Circle(7, 22, 50),
			new Circle(27, -17, 50)],
			[new Circle(0, 0, 79),
			new Circle(6, 22, 50),
			new Circle(27, -15, 50)],
			[new Circle(2, 1, 75),
			new Circle(4, 20, 50),
			new Circle(34, -11, 42)],
			[new Circle(2, 0, 75),
			new Circle(6, 19, 50),
			new Circle(32, -12, 43)],
			[new Circle(4, 0, 72),
			new Circle(7, 19, 50),
			new Circle(36, -13, 39)],
			[new Circle(3, 0, 73),
			new Circle(5, 20, 50),
			new Circle(32, -16, 41)],
			[new Circle(2, 0, 76),
			new Circle(5, 20, 50),
			new Circle(30, -21, 35)],
			[new Circle(0, 0, 80),
			new Circle(4, 22, 50),
			new Circle(20, -27, 37)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(0, 0, 80),
			new Circle(4, 47, 26),
			new Circle(36, -24, 36)],
			[new Circle(0, 0, 85),
			new Circle(5, 43, 34),
			new Circle(30, -17, 50)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(19, -27, 38)],
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(24, -30, 33)],
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(27, -31, 33)],
			[new Circle(0, 0, 79),
			new Circle(9, 25, 44),
			new Circle(36, -34, 31)],
			[new Circle(-2, 1, 74),
			new Circle(6, 26, 50),
			new Circle(28, -30, 31)],
			[new Circle(-3, 2, 71),
			new Circle(7, 28, 48),
			new Circle(22, -26, 34)],
			[new Circle(-2, 2, 73),
			new Circle(9, 25, 50),
			new Circle(24, -32, 32)],
			[new Circle(-1, 3, 74),
			new Circle(10, 29, 39),
			new Circle(25, -30, 35)],
			[new Circle(1, 0, 77),
			new Circle(8, 22, 50),
			new Circle(31, -31, 36)],
			[new Circle(1, 0, 78),
			new Circle(6, 23, 50),
			new Circle(27, -30, 35)],
			[new Circle(1, 0, 78),
			new Circle(5, 25, 46),
			new Circle(20, -27, 36)],
			[new Circle(1, 0, 78),
			new Circle(6, 27, 41),
			new Circle(20, -28, 35)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(5, -1, 80),
			new Circle(-1, 44, 30),
			new Circle(25, -32, 22)]
		];

		this.headNoun = "󱤷";//moli
		this.name = currentLanguage === "tp" ? "󱤷󱦐󱤃󱥗󱤅󱤖󱦜󱤴󱦜󱦑" : "Asakami";//moli Asakami

		this.collideRadius = 37;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.asakamiSheet);
		this.sheetRotation = new Angle();

		this.states.DASH_ATTACK = State.copyState(State.DASH_ATTACK).removeTag("rotateable");

		this.movementSpeed = 1.5;
		this.forwardSpeedBoost = 1.5;

		this.turnSpeed = 0.02;

		this.nlTurnSpeedBoost = -0.01;

		this.puppet = new AsakamiPuppet();
		this.puppetStartDistance = 60;

		this.scythe = {
			x: 0,
			y: 0,
			offX: 0,
			offY: 0,
			dx: 0,
			dy: 0,
			dr: 0,
			dir: new Angle(),
			active: false,
			sheet: Spritesheet.copy(assetManager.spritesheets.iloMoliSheet)
		};

		this.scytheAnimations = {
			walk: [
				new ScytheFrame(-10, -50, -1 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.05 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.1 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.1 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.05 * PI / 3.7),
				new ScytheFrame(-10, -50, -1 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.95 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.95 * PI / 3.7)
			],
			neutral: [
				new ScytheFrame(-10, -50, -PI / 3.7)
			]
		}

		this.OOBBlockFrame = 8;

		this.dash.friction = 0.93;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.dash.startRotateFrame = this.dash.invFirstFrame;
		this.dash.endRotateFrame = max(this.dash.attackCancelFrame, this.dash.blockCancelFrame);
	}

	setAttacks() {
		this.DASH_ATTACK = AsakamiDashAttack;

		this.NL = AsakamiNL;
		this.SL = AsakamiSL;
		this.RL = AsakamiRL;
		this.LL = AsakamiLL;
		this.ML = AsakamiML;

		this.NS = AsakamiNS;
		this.SS = AsakamiSS;
		this.RS = AsakamiRS;
		this.LS = AsakamiLS;
		this.MS = AsakamiMS;

		this.NPL = AsakamiNPL;
		this.SPL = AsakamiSPL;
		this.RPL = AsakamiRPL;
		this.LPL = AsakamiLPL;
		this.MPL = AsakamiMPL;

		this.NPS = AsakamiNPS;
		this.SPS = AsakamiSPS;
		this.RPS = AsakamiRPS;
		this.LPS = AsakamiLPS;
		this.MPS = AsakamiMPS;

		this.NN = AsakamiNN;
		this.NNP = AsakamiPuppetNN;
		this.SN = AsakamiSN;
		this.RN = AsakamiRN;
		this.RNP = AsakamiPuppetRN;
		this.LN = AsakamiLN;
		this.LNP = AsakamiPuppetLN;
		this.MN = AsakamiMN;
		this.MNP = AsakamiPuppetMN;
	}

	/*startDashAttack() {
		let attack = this.controls.clicked("lili") || this.controls.clicked("suli") || this.controls.clicked("pokaLili") || this.controls.clicked("pokaSuli");

		if (attack && (this.currentState.name === "dash" || this.buffer.contains(this.states.DASH))) {

			let bufferInfo = {

			};

			this.buffer.bufferStateChange(this.states.DASH_ATTACK, this.states.DASH_ATTACK_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("dash attack");
				this.iFrames = 0;

				let attack = this.DASH_ATTACK.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);
			});
		}
	}//utala tawa
	dashAttackLogic() {
		if (this.currentState.name === "dash attack") {
			this.dx *= 0.93;
			this.dy *= 0.93;
			//this.turnSpeedModifier = 0;
			this.attackEndable();
		}
	}*/

	//lili attacks
	/*startNL() {
		if (this.controls.clicked("lili") && this.pressedNeutral()) {

			let bufferInfo = {

			};

			this.buffer.bufferStateChange(this.states.NL, this.states.NL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NL");

				let attack = this.NL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				this.NL.startAttack(this, attack, bufferInfo);
			});
		}
	}//luka lili
	NLLogic() {
		if (this.currentState.name === "NL") {
			this.attackEndable();
		}
	}*/

	/*startSL() {
		if (this.controls.clicked("lili") && this.pressedSinpin()) {

			let bufferInfo = this.SL.bufferInfo ? this.SL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SL, this.states.SL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SL");

				this.startMomentumMultiply(0);
				this.startMomentumMultiplyDash(1);

				let attack = this.SL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				this.SL.startAttack(this, attack, bufferInfo);
			});
		}
	}//luka tawa
	SLLogic() {
		if (this.currentState.name === "SL") {
			this.attackEndable();
		}
	}*/

	/*startRL() {
		if (this.controls.clicked("lili") && this.pressedRight()) {

			let bufferInfo = this.RL.bufferInfo ? this.RL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.RL, this.states.RL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RL");

				let attack = this.RL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				if (this.RL.startAttack)
					this.RL.startAttack(this, attack, bufferInfo);
			});
		}
	}
	RLLogic() {
		if (this.currentState.name === "RL") {
			this.attackEndable();
		}
	}*/

	/*startLL() {
		if (this.controls.clicked("lili") && this.pressedLeft()) {

			let bufferInfo = this.LL.bufferInfo ? this.LL.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.LL, this.states.LL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LL");

				let attack = this.LL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				if (this.LL.startAttack)
					this.LL.startAttack(this, attack, bufferInfo);
			});
		}
	}
	LLLogic() {
		if (this.currentState.name === "LL") {
			this.attackEndable();
		}
	}*/

	/*startML() {
		if (this.controls.clicked("lili") && this.pressedMonsi()) {

			let bufferInfo = this.ML.bufferInfo ? this.ML.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.ML, this.states.ML_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("ML");

				let attack = this.ML.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.ML.startAttack)
					this.ML.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}//len linja
	MLLogic() {
		if (this.currentState.name === "ML") {
			this.attackEndable();
		}
	}*/

	//suli attacks
	/*startNS() {
		if (this.controls.clicked("suli") && this.pressedNeutral()) {

			let bufferInfo = this.NS.bufferInfo ? this.NS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NS, this.states.NS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NS");

				let attack = this.NS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.NS.startAttack)
					this.NS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	NSLogic() {
		if (this.currentState.name === "NS") {
			this.attackEndable();
		}
	}*/

	/*startSS() {
		if (this.controls.clicked("suli") && this.pressedSinpin()) {

			let bufferInfo = this.SS.bufferInfo ? this.SS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SS, this.states.SS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SS");

				let attack = this.SS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SS.startAttack)
					this.SS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	SSLogic() {
		if (this.currentState.name === "SS") {
			this.attackEndable();
		}
	}*/

	/*startRS() {
		if (this.controls.clicked("suli") && this.pressedRight()) {

			let bufferInfo = this.RS.bufferInfo ? this.RS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.RS, this.states.RS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RS");

				let attack = this.RS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RS.startAttack)
					this.RS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	RSLogic() {
		if (this.currentState.name === "RS") {
			this.attackEndable();
		}
	}*/

	/*startLS() {
		if (this.controls.clicked("suli") && this.pressedLeft()) {

			let bufferInfo = this.LS.bufferInfo ? this.LS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.LS, this.states.LS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LS");

				let attack = this.LS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LS.startAttack)
					this.LS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	LSLogic() {
		if (this.currentState.name === "LS") {
			this.attackEndable();
		}
	}*/

	/*startMS() {
		if (this.controls.clicked("suli") && this.pressedMonsi()) {

			let bufferInfo = this.MS.bufferInfo ? this.MS.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MS, this.states.MS_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MS");

				let attack = this.MS.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MS.startAttack)
					this.MS.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}//tawa monsi seli
	MSLogic() {
		if (this.currentState.name === "MS") {
			this.attackEndable();
		}
	}*/

	//poka lili attacks
	startNPL() { }
	startSPL() { }
	startRPL() { }
	startLPL() { }
	startMPL() { }
	startNPS() { }
	startSPS() { }
	startRPS() { }
	startLPS() { }
	startMPS() { }

	//nasa attacks
	startNN() {
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {

			let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("NN");
				this.dx /= 1.5;
				this.dy /= 1.5;

				let attack = this.NN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				this.setActionLag(attack);

				if (this.NN.startAttack)
					this.NN.startAttack(this, attack, bufferInfo);
			});
		}
	}//lipu nasa
	NNLogic() {
		if (this.currentState.name === "NN") {
			this.attackEndable();
		}
	}

	startSN() {
		if (this.controls.clicked("nasa") && this.pressedSinpin()) {

			let bufferInfo = this.SN.bufferInfo ? this.SN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.SN, this.states.SN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("SN");

				let attack = this.SN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.SN.startAttack)
					this.SN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}//luka jo
	SNLogic() {
		if (this.currentState.name === "SN") {
			this.attackEndable();
		}
	}

	startRN() {
		if (this.controls.clicked("nasa") && this.pressedRight()) {

			let bufferInfo = this.RN.bufferInfo ? this.RN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.RN, this.states.RN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RN");

				let attack = this.RN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RN.startAttack)
					this.RN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	RNLogic() {
		if (this.currentState.name === "RN") {
			this.attackEndable();
		}
	}

	startLN() {
		if (this.controls.clicked("nasa") && this.pressedLeft()) {

			let bufferInfo = this.LN.bufferInfo ? this.LN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.LN, this.states.LN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LN");

				let attack = this.LN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LN.startAttack)
					this.LN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}
	LNLogic() {
		if (this.currentState.name === "LN") {
			this.attackEndable();
		}
	}

	startMN() {
		if (this.controls.clicked("nasa") && this.pressedMonsi()) {

			let bufferInfo = this.MN.bufferInfo ? this.MN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.MN, this.states.MN_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("MN");

				let attack = this.MN.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.MN.startAttack)
					this.MN.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}//sike ilo
	MNLogic() {
		if (this.currentState.name === "MN") {
			this.attackEndable();

			/*
			let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};
			if (this.NN.startAttack)
				this.NN.startAttack(this, attack, bufferInfo);
			*/
		}
	}

	/**
	 * 
	 * @param {ScytheFrame[]} arr
	 */
	animateScythe(arr) {
		let hurtboxStateFrame = Math.floor(this.hurtboxStateFrame / 4);
		if (arr[hurtboxStateFrame]) {
			arr[hurtboxStateFrame].setFrame(this.scythe);
		}
	}

	/**
	 * 
	 * @param {ScytheFrame[]} arr
	 */
	animateScytheLoop(arr) {
		let hurtboxStateFrame = Math.floor(this.hurtboxStateFrame / 4) % arr.length;
		if (arr[hurtboxStateFrame]) {
			arr[hurtboxStateFrame].setFrame(this.scythe);
		}
	}

	autoActiveScythe(attack) {
		if (attack.getStartupF() > 0 || attack.getActiveF() > 0) {
			this.scythe.active = true;
		} else {
			this.scythe.active = false;
		}
	}

	leaveScytheBehind() {
		this.scythe.dx = -this.dx;
		this.scythe.dy = -this.dy;
	}

	resetScythe() {
		this.animateScytheLoop(this.scytheAnimations.neutral);
	}

	generalLogic() {
		this.collidePuppet();
		if (this.targetPlayer)
			this.puppet.dir.value = new Angle().setFromPoint(this.targetPlayer.x - this.puppet.x, this.targetPlayer.y - this.puppet.y).value;

		this.scythe.x += this.scythe.dx;
		this.scythe.y += this.scythe.dy;
		this.scythe.dir.changeValue(this.scythe.dr);

		if (this.currentState.name === "walk") {
			this.animateScytheLoop(this.scytheAnimations.walk);
		}
		if (this.currentState.name === "neutral") {
			this.animateScytheLoop(this.scytheAnimations.neutral);
		}
	}

	generalLogicNoStun() {
		this.runPuppet();
		this.puppet.canMove = this.canMove;
		//this.puppet.canAttack = this.canAttack;
	}

	//Character specific attacks
	runPuppet() {
		this.puppet.runNoStun();
		if (this.puppet.stunFrames <= 10 && this.canAttack)
			this.startPuppetAttacks();

		if (this.puppet.stunFrames <= 0) {
			this.puppet.setAngleRefs(this.controls.inputAngleType);

			if (this.puppet.slowDownFrames % this.puppet.slowDownMod < this.puppet.slowDownMax) {
				this.puppet.run();
			} else {
				this.puppet.x += this.puppet.dx * this.puppet.slowDownMax / this.puppet.slowDownMod;
				this.puppet.y += this.puppet.dy * this.puppet.slowDownMax / this.puppet.slowDownMod;
			}
			if (this.puppet.slowDownFrames > 0)
				this.puppet.slowDownFrames--;

			if (this.puppet.health >= 0)
				this.world.collidePlayer(this.puppet, 0.4);
		} else {
			this.puppet.tickStunFrames();
		}
	}

	startPuppetAttacks() {
		if (this.controls.clicked("pokaLili") && this.pressedNeutralPuppet())
			this.puppet.startNPL();
		if (this.controls.clicked("pokaLili") && this.pressedSinpinPuppet())
			this.puppet.startSPL();
		if (this.controls.clicked("pokaLili") && this.pressedRightPuppet())
			this.puppet.startRPL();
		if (this.controls.clicked("pokaLili") && this.pressedLeftPuppet())
			this.puppet.startLPL();
		if (this.controls.clicked("pokaLili") && this.pressedMonsiPuppet())
			this.puppet.startMPL();

		if (this.controls.clicked("pokaSuli") && this.pressedNeutralPuppet())
			this.puppet.startNPS();
		if (this.controls.clicked("pokaSuli") && this.pressedSinpinPuppet())
			this.puppet.startSPS();
		if (this.controls.clicked("pokaSuli") && this.pressedRightPuppet())
			this.puppet.startRPS();
		if (this.controls.clicked("pokaSuli") && this.pressedLeftPuppet())
			this.puppet.startLPS();
		if (this.controls.clicked("pokaSuli") && this.pressedMonsiPuppet())
			this.puppet.startMPS();

		if (this.controls.clicked("nasa") && this.pressedNeutralPuppet())
			this.puppet.startNN();
		if (this.controls.clicked("nasa") && this.pressedRightPuppet())
			this.puppet.startRN();
		if (this.controls.clicked("nasa") && this.pressedLeftPuppet())
			this.puppet.startLN();
		if (this.controls.clicked("nasa") && this.pressedMonsiPuppet())
			this.puppet.startMN();
	}

	pressedNeutralPuppet() {
		return !this.controls.joystickPressed(0);
	}

	pressedSinpinPuppet() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.puppet.sinpin) <= PI / 4;
	}

	pressedLeftPuppet() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.puppet.left) <= PI / 4;
	}

	pressedRightPuppet() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.puppet.right) <= PI / 4;
	}

	pressedMonsiPuppet() {
		return this.controls.joystickPressed(0) && Angle.distance(this.controls.angle(0), this.puppet.monsi) <= PI / 4;
	}

	collidePuppet() {
		if (this.puppet.hitStun <= 0 && this.puppet.health > 0 && this.puppet.iFrames <= 0) {
			for (let i in this.world.attacks) {
				let a = this.world.attacks[i];
				if (a.player !== this && a.currentlyActive() && Hitcircle.collide(a, this.puppet)) {
					let p = this.puppet;

					if (!a.clashNegate) {
						p.health--;
						if (p.health <= 0) {
							this.endPuppetAttacks();
							p.forceChangeState(p.states.DEAD, p.states.DEAD_ACTIONS);
							p.sheet.setAnimation("Dead");
							p.deathCountdown = 60;
							p.iFrames = 61;
							p.invTo = ["attack", "grab"];
							p.actionLag = 60;
							a.setPlayerStunFrames(8);
						} else {
							let collided;
							if (Hitcircle.collideMain(a, p)) {
								loop1:
								for (let i in p.circles) {
									for (let u in a.circles) {
										if (p.circles[i].diameter > 0 && a.circles[u].diameter > 0 && Hitcircle.collideCircle(p, i, a, u)) {
											collided = a.circles[u].priority;
											break loop1;
										}
									}
								}
							}
							let property = a.properties[collided];

							if (property) {
								this.endPuppetAttacks();
								p.stunFrames = property.stunFrames;
								p.hitStun = Math.max(property.hitStun, 10);
								p.actionLag = p.hitStun;
								a.setPlayerStunFrames(Math.floor(property.stunFrames / 2));
								p.dx = constrain(property.launch * 3, 8, 18) * property.angle.getX();
								p.dy = constrain(property.launch * 3, 8, 18) * property.angle.getY();
								p.forceChangeState(p.states.HITSTUN, p.states.HITSTUN_ACTIONS);
								p.sheet.setAnimation("Hurt");
							}
						}
					}

					if (a.projectile && p.iFrames <= 0 && a.multi > 0)
						a.multi--;
					if (a.projectile && p.iFrames <= 0 && a.multi <= 0)
						a.endLife();
				}
			}
		}
	}

	endPuppetAttacks() {
		for (let i = this.world.attacks.length - 1; i >= 0; i--) {
			if (this.world.attacks[i].isPuppet && this.world.attacks[i].player === this) {
				this.world.removeAttack(i);
			}
		}
	}

	endPuppetAttacksLife() {
		for (let i = this.world.attacks.length - 1; i >= 0; i--) {
			if (this.world.attacks[i].isPuppet) {
				this.world.attacks[i].endLife();
			}
		}
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2 + this.sheetRotation.value);

		//g.image(assetManager.images.Asakami, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -188 + rumbleX, -188 + rumbleY, 376, 376);

		g.pop();

		if (this.puppet.health > 0 || this.puppet.deathCountdown > 0) {
			this.puppet.draw(g);
		}

		g.push();
		g.translate(this.scythe.x + this.x, this.scythe.y + this.y);
		g.rotate(this.dir.value + this.sheetRotation.value + this.scythe.dir.value);
		g.translate(this.scythe.offX, this.scythe.offY);

		rumbleX = 0;
		rumbleY = 0;
		if (this.puppet.stunFrames > 0 && this.puppet.hitStun > 0) {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.scythe.sheet.draw(g, -16 + rumbleX, -26 + rumbleY);

		g.pop();

		//this.drawArrow(g);

		if (debug.displayHurtboxes) {
			let red = 200;
			let green = 210;
			let blue = 220;
			if (this.iFrames > 0 && this.invTo.includes("attack")) {
				red = 40;
				green = 0
				blue = 255;
			}
			if (this.iFrames > 0 && this.invTo.includes("grab")) {
				red = 255;
				green = 200;
				blue = 0;
			}
			if (this.iFrames > 0 && this.invTo.includes("attack") && this.invTo.includes("grab")) {
				red = 0;
				green = 255;
				blue = 40;
			}

			this.debugDraw(g, red, green, blue);
		}
	}

	drawArrow(g, playerID) {
		super.drawArrow(g, playerID);
		if (this.puppet.health > 0 || this.puppet.deathCountdown > 0)
			this.puppet.drawArrow(g, playerID);
	}

	charSpecificReset() {
		this.setAngleRefs();
		this.puppet.reset();
		this.puppet.health = this.puppet.maxHealth;
		this.puppet.world = this.world;
		this.puppet.parentID = (this.world.players[0] === this ? 0 : 1);
		this.puppet.x = this.x + this.right.getX() * this.puppetStartDistance;
		this.puppet.y = this.y + this.right.getY() * this.puppetStartDistance;
		this.puppet.canMove = false;
		this.resetScythe();
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
			if (this.scythe.active) {
				this.scythe.sheet.requestAnimationChange("Active");
			} else {
				this.scythe.sheet.requestAnimationChange("Inactive");
			}
			this.scythe.sheet.run();
			this.scythe.active = false;
		}
	}

	static addAssets() {
		assetManager.addSpritesheet("resources/moli_Asakami.png", "asakamiSheet", "//");

		assetManager.addSpritesheet("resources/kon_Asakami.png", "asakamiGhostSheet", "//");

		assetManager.addSpritesheet("resources/ilo_moli.png", "iloMoliSheet", "//");

		//assetManager.addSound("resources/sfx/Fan.wav", "fanTP");
	}
}

class AsakamiPuppet extends Player {
	constructor(parentID) {
		super([new ICircle(0, 0, 60), new Circle(0, 0, 20)]);

		this.collideRadius = 60;

		this.arrowOffset = 0;
		this.arrowOffsetBack = 0;

		this.movementSpeed = 3;
		this.forwardSpeedBoost = 0.5;

		this.parentID = parentID;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.asakamiGhostSheet);

		this.controls = new Controls();

		this.maxHealth = 3;
		this.health = this.maxHealth;

		this.deathCountdown = 0;
	}

	setAttacks() {
		this.NPL = AsakamiNPL;
		this.SPL = AsakamiSPL;
		this.RPL = AsakamiRPL;
		this.LPL = AsakamiLPL;
		this.MPL = AsakamiMPL;

		this.NPS = AsakamiNPS;
		this.SPS = AsakamiSPS;
		this.RPS = AsakamiRPS;
		this.LPS = AsakamiLPS;
		this.MPS = AsakamiMPS;

		this.NN = AsakamiPuppetNN;
		//this.SN = AsakamiSN;//Puppet;
		this.RN = AsakamiPuppetRN;
		this.LN = AsakamiPuppetLN;
		this.MN = AsakamiPuppetMN;
	}

	generalLogic() {
		if (this.deathCountdown > 0)
			this.deathCountdown--;
	}

	startWalk() {
		if (this.getControls().joystickPressed(0) && this.currentState.name !== "walk") {
			this.changeState(this.states.WALK, this.states.WALK_ACTIONS);
			if (this.currentState.name === "walk")
				this.hurtboxStateFrame = 0;
		}
	}
	startStand() {
		if (!this.getControls().joystickPressed(0)) {
			this.changeState(this.states.NEUTRAL, this.states.NEUTRAL_ACTIONS);
		}
	}

	startPowerDash() { }

	startNL() { }
	startSL() { }
	startRL() { }
	startLL() { }
	startML() { }
	startNS() { }
	startSS() { }
	startRS() { }
	startLS() { }
	startMS() { }

	startNPL() {
		let bufferInfo = this.NPL.bufferInfo ? this.NPL.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.NPL, this.states.NPL_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("NPL");

			let attack = this.NPL.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.NPL.startAttack)
				this.NPL.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startSPL() {
		let bufferInfo = this.SPL.bufferInfo ? this.SPL.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.SPL, this.states.SPL_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("SPL");

			let attack = this.SPL.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.SPL.startAttack)
				this.SPL.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startRPL() {
		let bufferInfo = this.RPL.bufferInfo ? this.RPL.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.RPL, this.states.RPL_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("RPL");

			let attack = this.RPL.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.RPL.startAttack)
				this.RPL.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startLPL() {
		let bufferInfo = this.LPL.bufferInfo ? this.LPL.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.LPL, this.states.LPL_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("LPL");

			let attack = this.LPL.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.LPL.startAttack)
				this.LPL.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startMPL() {
		let bufferInfo = this.MPL.bufferInfo ? this.MPL.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.MPL, this.states.MPL_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("MPL");

			let attack = this.MPL.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.MPL.startAttack)
				this.MPL.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startNPS() {
		let bufferInfo = this.NPS.bufferInfo ? this.NPS.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.NPS, this.states.NPS_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("NPS");

			let attack = this.NPS.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.NPS.startAttack)
				this.NPS.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startSPS() {
		let bufferInfo = this.SPS.bufferInfo ? this.SPS.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.SPS, this.states.SPS_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("NPS");

			let attack = this.SPS.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.SPS.startAttack)
				this.SPS.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startRPS() {
		let bufferInfo = this.RPS.bufferInfo ? this.RPS.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.RPS, this.states.RPS_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("RPS");

			let attack = this.RPS.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.RPS.startAttack)
				this.RPS.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startLPS() {
		let bufferInfo = this.LPS.bufferInfo ? this.LPS.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.LPS, this.states.LPS_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("LPS");

			let attack = this.LPS.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.LPS.startAttack)
				this.LPS.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startMPS() {
		let bufferInfo = this.MPS.bufferInfo ? this.MPS.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.MPS, this.states.MPS_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("MPS");

			let attack = this.MPS.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.MPS.startAttack)
				this.MPS.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startNN() {
		let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("NN");

			let attack = this.NN.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.NN.startAttack)
				this.NN.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startRN() {
		let bufferInfo = this.RN.bufferInfo ? this.RN.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.RN, this.states.RN_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("RN");

			let attack = this.RN.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.RN.startAttack)
				this.RN.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startLN() {
		let bufferInfo = this.LN.bufferInfo ? this.LN.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.LN, this.states.LN_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("LN");

			let attack = this.LN.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.LN.startAttack)
				this.LN.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	startMN() {
		let bufferInfo = this.MN.bufferInfo ? this.MN.bufferInfo.bind(this)() : {};

		this.buffer.bufferStateChange(this.states.MN, this.states.MN_ACTIONS, bufferInfo, () => {
			this.sheet.setAnimation("MN");

			let attack = this.MN.createAttack(this);
			this.addCurrentAttack(attack);

			attack.rotateTo(this.dir);

			this.world.addAttack(attack);

			if (this.MN.startAttack)
				this.MN.startAttack(this, attack, bufferInfo);

			this.setActionLag(attack);
		});
	}

	walkMovement(mult = 1, set = false, bool = false) {
		let controls = this.getParent().controls;
		if (bool || controls.joystickPressed(0)) {
			let xBoost = cos(controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(controls.angle(0), this.dir) / PI);
			let yBoost = sin(controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(controls.angle(0), this.dir) / PI);

			if (set) {
				this.dx = this.slowWalk * (cos(controls.angle(0).value) * this.movementSpeed + xBoost) * mult;
				this.dy = this.slowWalk * (sin(controls.angle(0).value) * this.movementSpeed + yBoost) * mult;
			} else {
				this.x += this.slowWalk * (cos(controls.angle(0).value) * this.movementSpeed + xBoost) * mult;
				this.y += this.slowWalk * (sin(controls.angle(0).value) * this.movementSpeed + yBoost) * mult;
			}
		}
	}

	damageHealth(num) {
		if (abs(num) < 1)
			return 0;
		let damage = (num > 0 ? 1 : -1);
		this.health -= damage;
		return damage;
	}
	damageHealthAbs(num) {
		if (abs(num) < 1)
			return 0;
		let damage = (num > 0 ? 1 : -1);
		this.health -= damage;
		return damage;
	}

	getControls() {
		return this.getParent().controls;
	}
	getParent() {
		return this.world.players[this.parentID];
	}

	/**
	 * @Override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);

		//g.image(assetManager.images.Asakami, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -128 + rumbleX, -128 + rumbleY, 256, 256);

		g.pop();

		//this.drawArrow(g);

		if (debug.displayHurtboxes) {
			let red = 200;
			let green = 210;
			let blue = 220;
			/*if (this.iFrames > 0 && this.invTo.includes("attack")) {
				red = 40;
				green = 0
				blue = 255;
			}
			if (this.iFrames > 0 && this.invTo.includes("grab")) {
				red = 255;
				green = 200;
				blue = 0;
			}*/
			if (this.iFrames > 0) {
				red = 0;
				green = 255;
				blue = 40;
			}

			this.debugDraw(g, red, green, blue);
		}
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
		}
	}
}

class PuppetAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);

		this.isPuppet = true;
		this.followPuppet = true;

		this.puppetStunFrames = 0;

		this.puppetWallPushbackHit = 0;
		this.puppetWallPushbackBlock = 0;
	}

	applyWallPushback(hit = 0, block = 0) {
		if (this.player.targetPlayer && this.player.targetPlayer.atEdge()) {
			if (State.stateIs(this.player.targetPlayer, "block")) {
				this.player.puppet.dx -= this.player.puppet.dir.getX() * block;
				this.player.puppet.dy -= this.player.puppet.dir.getY() * block;
			} else {
				this.player.puppet.dx -= this.player.puppet.dir.getX() * hit;
				this.player.puppet.dy -= this.player.puppet.dir.getY() * hit;
			}
		}
	}

	notStun() {
		return this.player.puppet.stunFrames <= 0;
	}

	setPlayerStunFrames(val) {
		this.player.puppet.stunFrames = val;
	}

	puppetLogic() { }
	
	followingPuppet() {
		if (this.followPuppet) {
			this.x = this.player.puppet.x;
			this.y = this.player.puppet.y;
		}
	}

	applyModifiers() {
		if (this.player.targetPlayer?.currentState) {
			if (State.stateIs(this.player.targetPlayer.currentState, "block")) {
				this.player.targetPlayer.setBlockLeniencyModifier(PI);
			}
		}
	}

	logic() {
		this.followingPuppet();
		this.puppetLogic();
	}

	hitConfirmSetFrames() {
		this.player.puppet.stunFrames = this.puppetStunFrames;
		this.player.stunFrames = 0;

		this.applyWallPushback(this.puppetWallPushbackHit, this.puppetWallPushbackBlock);

		if (this.player.targetPlayer)
			this.player.targetPlayer.setBlockLeniencyModifier(PI);
	}
}

class AsakamiDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.AsakamiSeliNPL);
	}

	static createAttack(player) {
		let cancelOptions = ["dash"];
		let hitCancelOptions = ["NL", "SL", "ML", "RS", "LS", "NPL"];

		let sour1 = new PriorityCircle(0, 0, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(0, 0, 140, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(60).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(17, 9).setHitStun(20, 14).setStunFrames(13, 25).setWallPushback(5, 1).setWallLaunchMod(3);
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8).setHitStun(21, 14).setStunFrames(15, 25).setWallPushback(5, 1.6).setWallLaunchMod(10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(21).setActiveF(6).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.25);
	}

	draw(g) {
		if (this.currentlyActive()) {
			/*let x = cos(this.dir.value);
			let y = sin(this.dir.value);

			g.push();
			g.translate(this.x + 50 * x, this.y + 50 * y);
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -64, -64, 128, 128);
			if (this.player.stunFrames <= 0)
				this.sheet.run();

			g.pop();*/

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 10) {
			this.player.iFrames = 11;
			this.player.invTo = ["attack"];
		}
	}
}

class AsakamiNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4),
			new ScytheFrame(0, -40, -1.4 * PI / 4),
			new ScytheFrame(10, -20, -1.8 * PI / 4),
			new ScytheFrame(10, -5, -2.8 * PI / 4),
			new ScytheFrame(0, 0, -3 * PI / 4),
			new ScytheFrame(20, -50, PI / 16),
			new ScytheFrame(-10, 0, 3 * PI / 4),
			new ScytheFrame(-10, 0, 3 * PI / 4),
			new ScytheFrame(-15, 0, 2.4 * PI / 4),
			new ScytheFrame(-24, 0, 1.5 * PI / 4),
			new ScytheFrame(-38, -10, 0 * PI / 4),
			new ScytheFrame(-36, -20, -0.5 * PI / 4)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(40, 0, 160, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(70, 0, 135, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(100, 0, 100, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(0, -50, 100, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(0, 50, 100, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(0.5, 0.2).setAngleValue(player.dir.value).setLaunch(4.5, 3, 1.1).setHitStun(27, 17).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(22).setActiveF(4).setEndF(22).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
		this.player.turnSpeedModifier = this.player.nlTurnSpeedBoost;
	}

	hitConfirmSetFrames() {
		super.hitConfirmSetFrames();
		print(this.player.targetPlayer.hitStun);
		print(this.player.targetPlayer.currentState.name);
	}
}

class AsakamiSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";

		this.scytheAnimation = [
			new ScytheFrame(-10, -10, -1 * PI / 3),
			new ScytheFrame(-20, -20, -0.6 * PI / 3),
			new ScytheFrame(-30, -30, 0 * PI / 3),
			new ScytheFrame(-40, -40, 0.8 * PI / 3),
			new ScytheFrame(-45, -45, 1.0 * PI / 3),
			new ScytheFrame(-45, -45, 1.2 * PI / 3),
			new ScytheFrame(-30, -50, 2.5 * PI / 4),
			new ScytheFrame(40, -10, -PI / 16),
			new ScytheFrame(-10, 0, PI / 4),
			new ScytheFrame(-5, 5, PI / 3.2),
			new ScytheFrame(0, 10, PI / 2.8),
			new ScytheFrame(-3, 10, PI / 4.8),
			new ScytheFrame(-6, -6, PI / 8),
			new ScytheFrame(-8, -15, 0),
			new ScytheFrame(-10, -30, -PI / 5),
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(-125, 0, 90, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(-90, 0, 130, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(-50, -45, 80, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(-50, 45, 80, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(40).setProration(-0.1, 1.1).setAngleValue(player.dir.value + PI).setLaunch(1, -1).setHitStun(30, 15).setStunFrames(14);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(28).setActiveF(2).setEndF(28);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 5) {
			this.player.x += this.player.dir.getX() * 30;
			this.player.y += this.player.dir.getY() * 30;
		}
		if (this.getStartupF() === 1) {
			this.player.x += this.player.dir.getX() * 180;
			this.player.y += this.player.dir.getY() * 180;
			this.player.dir.changeValue(PI);
		}
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
	}
}

class AsakamiRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4 + PI / 6),
			new ScytheFrame(0, -40, -1.4 * PI / 4 + PI / 6),
			new ScytheFrame(10, -20, -1.8 * PI / 4 + PI / 6),
			new ScytheFrame(10, -5, -2.8 * PI / 4 + PI / 6),
			new ScytheFrame(0, 0, -3 * PI / 4 + PI / 6),
			new ScytheFrame(20, -50, PI / 16 + PI / 6),
			new ScytheFrame(-10, 0, 3 * PI / 4 + PI / 6),
			new ScytheFrame(-10, 0, 3 * PI / 4 + PI / 6),
			new ScytheFrame(-15, 0, 2.4 * PI / 4 + PI / 6),
			new ScytheFrame(-24, 0, 1.5 * PI / 4 + PI / 6),
			new ScytheFrame(-38, -10, 0 * PI / 4 + PI / 6),
			new ScytheFrame(-36, -20, -0.5 * PI / 4 + PI / 6)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(34, 20, 160, 0).setVelocity(0.08, 0.05);
		let sweet2 = new PriorityCircle(60, 35, 135, 0).setVelocity(0.08, 0.05);
		let sweet3 = new PriorityCircle(87, 50, 100, 0).setVelocity(0.08, 0.05);
		let sweet4 = new PriorityCircle(25, -43, 100, 0).setVelocity(0.08, 0.05);
		let sweet5 = new PriorityCircle(-25, 43, 100, 0).setVelocity(0.08, 0.05);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(-0.2, 0.9).setAngleValue(player.dir.value + PI / 4).setLaunch(3, 3, 1.1).setHitStun(27, 17).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(20).setActiveF(4).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
	}
}

class AsakamiLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4 - PI / 6),
			new ScytheFrame(0, -40, -1.4 * PI / 4 - PI / 6),
			new ScytheFrame(10, -20, -1.8 * PI / 4 - PI / 6),
			new ScytheFrame(10, -5, -2.8 * PI / 4 - PI / 6),
			new ScytheFrame(0, 0, -3 * PI / 4 - PI / 6),
			new ScytheFrame(20, -50, PI / 16 - PI / 6),
			new ScytheFrame(-10, 0, 3 * PI / 4 - PI / 6),
			new ScytheFrame(-10, 0, 3 * PI / 4 - PI / 6),
			new ScytheFrame(-15, 0, 2.4 * PI / 4 - PI / 6),
			new ScytheFrame(-24, 0, 1.5 * PI / 4 - PI / 6),
			new ScytheFrame(-38, -10, 0 * PI / 4 - PI / 6),
			new ScytheFrame(-36, -20, -0.5 * PI / 4 - PI / 6)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(34, -20, 160, 0).setVelocity(0.08, -0.05);
		let sweet2 = new PriorityCircle(60, -35, 135, 0).setVelocity(0.08, -0.05);
		let sweet3 = new PriorityCircle(87, -50, 100, 0).setVelocity(0.08, -0.05);
		let sweet4 = new PriorityCircle(25, 43, 100, 0).setVelocity(0.08, -0.05);
		let sweet5 = new PriorityCircle(-25, -43, 100, 0).setVelocity(0.08, -0.05);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(-0.2, 0.9).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 3, 1.1).setHitStun(27, 17).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(20).setActiveF(4).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
	}
}

class AsakamiML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";

		this.scytheAnimation = [
			new ScytheFrame(-10, 0, -1.0 * PI / 3),
			new ScytheFrame(-15, 20, -2.0 * PI / 3),
			new ScytheFrame(-30, 30, -2.7 * PI / 3),
			new ScytheFrame(-40, 30, -2.6 * PI / 3),
			new ScytheFrame(-40, 30, -0.5 * PI / 3),
			new ScytheFrame(-40, 30, 2 * PI / 3),
			new ScytheFrame(-40, 30, -1.5 * PI / 3),
			new ScytheFrame(-30, 20, -1.3 * PI / 3),
			new ScytheFrame(-20, -10, -1.1 * PI / 3),
			new ScytheFrame(-15, -40, -1.0 * PI / 3),
			new ScytheFrame(-12, -45, -0.9 * PI / 3)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(0, 0, 230, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(20).setProration(0, 0.5).setAngleValue(player.dir.value).setLaunch(3, 4).setHitStun(28, 10).setStunFrames(13).setWallPushback(2, 1).setAngleTypes("direct", "direct").setRotateVel(-3, -3, true);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(20).setActiveF(8).setEndF(14);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
	}
}

class AsakamiNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "LL", "ML", "LS", "RS", "MS", "SPL", "NPS", "NN", "MN"];

		let sweet1 = new PriorityCircle(30, 30, 40, 0).setVelocity(3, -0.5);
		let sweet2 = new PriorityCircle(45, 20, 30, 0).setVelocity(3, -0.5);
		let sweet3 = new PriorityCircle(35, 5, 30, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(35).setProration(0.4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3.5, 3, 1.1).setHitStun(20, 10).setStunFrames(11).setWallPushback(4, 1).setCancelWait(5).setNormalizeHitStun();
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(10).setActiveF(8).setEndF(12).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.autoActiveScythe(this);
		if (this.getFromStartupF() === 4) {
			let speed = 4;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.getFromStartupF() > 14) {
			this.player.dx *= 0.75;
			this.player.dy *= 0.75;
		}
	}
}

class AsakamiSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.konSike);
	}

	static createAttack(player) {
		let cancelOptions = ["ML", "SL", "NPL", "LPL", "RPL", "NN", "RN", "LN", "MN"];

		let sweet1 = new PriorityCircle(50, 0, 70, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(80, 0, 65, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(20, -3).setProration(-1).setChip(0.35).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 5, 0.5).setHitStun(28, 28).setStunFrames(6).setNormalizeHitStun().setCancelWait(5).setWallPushback(2, 4);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.fanTP);
		sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(23).setActiveF(12).setEndF(24).setMulti(4, 2, 1);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			//this.sheet.run();
		}
		if (this.getStartupF() < 5 && this.getStartupF() > 0) {
			this.player.dx = this.player.dir.getX() * 6;
			this.player.dy = this.player.dir.getY() * 6;
		} else {
			this.player.dx *= 0.94;
			this.player.dy *= 0.94;
		}
	}
}

class AsakamiRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.teloLonPokaLen);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];
		let hitCancelOptions = ["LS"];

		let sweet1 = new PriorityCircle(30, 75, 30, 0).setVelocity(1.5, -6);
		let sweet2 = new PriorityCircle(45, 75, 30, 0).setVelocity(1.5, -6);
		let sweet3 = new PriorityCircle(60, 75, 30, 0).setVelocity(1.5, -6);
		let sweet4 = new PriorityCircle(75, 75, 30, 0).setVelocity(1.5, -6);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(55).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 3).setLaunch(6).setHitStun(25, 25).setStunFrames(13).setRotateVel(7, 7, true).setRotateSlowDown(0.25, 60, true).setNormalizeHitStun();
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.teloLukaPakala);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(20).setActiveF(10).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() < 4 && this.getFromEndF() < 15) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.sheet.draw(g, -128, -128, 256, 256);

			g.pop();
		}
		//this.player.turnSpeedModifier = -0.02;
		if (this.currentlyActive()) {

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.turnSpeedModifier = -0.01;
		if (this.getStartupF() === 4) {
			this.properties[0].playSound(this.world, assetManager.sounds.teloLuka);
		}
		if (this.getFromStartupF() > 0 && this.getFromStartupF() < 12) {
			let angle = new Angle(this.player.dir.value + PI / 3.9);
			this.player.dx = angle.getX() * 7;
			this.player.dy = angle.getY() * 7;
		} else if (this.getFromStartupF() > 16 && this.getFromStartupF() < 30) {
			let angle = new Angle(this.player.dir.value - PI / 4);
			this.player.dx = angle.getX() * 5;
			this.player.dy = angle.getY() * 5;
		} else {
			this.player.dx *= 0.95;
			this.player.dy *= 0.95;
		}
		/*if (this.getFromActiveF() === 1) {
			this.player.iFrames = 8;
			this.player.invTo = ["attack"];
		}*/

		//if (this.getStartupF() < 4 && this.getFromEndF() < 15)
			//this.sheet.run();
	}
}

class AsakamiLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.teloLonPokaLen);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(30, -75, 30, 0).setVelocity(1.5, 6);
		let sweet2 = new PriorityCircle(45, -75, 30, 0).setVelocity(1.5, 6);
		let sweet3 = new PriorityCircle(60, -75, 30, 0).setVelocity(1.5, 6);
		let sweet4 = new PriorityCircle(75, -75, 30, 0).setVelocity(1.5, 6);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(50).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(7).setHitStun(35, 27).setStunFrames(13).setRotateVel(-7, -7, true).setRotateSlowDown(0.25, 60, true).setNormalizeHitStun();
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.teloLukaPakala);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(30).setActiveF(11).setEndF(22).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() < 4 && this.getFromEndF() < 14) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.scale(1, -1);

			//this.sheet.draw(g, -128, -128, 256, 256);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.turnSpeedModifier = -0.01;
		if (this.getStartupF() === 4) {
			this.properties[0].playSound(this.world, assetManager.sounds.teloLuka);
		}
		if (this.getFromStartupF() > 0 && this.getFromStartupF() < 12) {
			let angle = new Angle(this.player.dir.value - PI / 3.5);
			this.player.dx = angle.getX() * 8;
			this.player.dy = angle.getY() * 8;
		} else if (this.getFromStartupF() > 19 && this.getFromStartupF() < 33) {
			let angle = new Angle(this.player.dir.value + PI / 3.5);
			this.player.dx = angle.getX() * 7;
			this.player.dy = angle.getY() * 7;
		} else {
			this.player.dx *= 0.92;
			this.player.dy *= 0.92;
		}
		/*if (this.getFromActiveF() === 1) {
			this.player.iFrames = 8;
			this.player.invTo = ["attack"];
		}*/
		//if (this.getStartupF() < 4 && this.getFromEndF() < 14)
			//this.sheet.run();
	}
}

class AsakamiMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "SS", "SPL", "SPS", "NN"];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(20, 0, 80, 1).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(40, 0, 50, 0).setVelocity(1, 0);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(44, 14, 8).setProration(-0.25).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI).setLaunch(4, 2).setHitStun(21, 20).setStunFrames(14).setCancelWait(4);
		let sour = new AttackProperties().setDamage(38, 11, 8).setProration(-0.25).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI).setLaunch(5, 2).setHitStun(21, 20).setStunFrames(14).setCancelWait(4);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(14).setActiveF(5).setEndF(30).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() <= 4 && this.getFromEndF() < 7) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.translate(20, 0);

			//this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() < 10) {
			this.x = this.player.x + this.player.dir.getX() * 10;
			this.y = this.player.y + this.player.dir.getY() * 10;
		}
		if (this.getStartupF() <= 4 && this.getFromEndF() < 7) {
			//this.sheet.run();
		}
		if (this.getFromStartupF() === 6) {
			this.player.invTo = ["grab", "attack"];
			this.player.iFrames = 15;
		}
		if (this.getFromStartupF() === 10) {
			this.player.dx = this.player.dir.getX() * -10;
			this.player.dy = this.player.dir.getY() * -10;
		}
		if (this.getFromStartupF() === 18) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class AsakamiNPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";

		this.puppetStunFrames = 15;

		this.puppetWallPushbackHit = 6;
		this.puppetWallPushbackBlock = 12;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(30, 0, 60, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(50, 0, 65, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(30).setProration(1, 1).setAngleValue(player.dir.value).setLaunch(5).setHitStun(24, 24);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setStartupF(7).setActiveF(5).setEndF(10).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);

		attack.followingPuppet();
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.hitPlayerBool) {
			this.player.puppet.x += this.player.puppet.dir.getX() * 1.8;
			this.player.puppet.y += this.player.puppet.dir.getY() * 1.8;
		}
		//if (this.player.actionLag <= 1) {
			//this.player.puppet.dx = 0;
			//this.player.puppet.dy = 0;
		//}
	}
}

class AsakamiSPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(0, 0, 60, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(30, 0, 65, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(30).setProration(0.5, 0.6).setAngleValue(player.dir.value).setLaunch(7).setHitStun(28, 20);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setStartupF(12).setActiveF(8).setEndF(12).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);

		attack.followingPuppet();
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.getFromStartupF() === 9) {
			this.player.puppet.dx += this.player.puppet.dir.getX() * 12;
			this.player.puppet.dy += this.player.puppet.dir.getY() * 12;
		}
		if (this.getActiveF() <= 0 || this.hitPlayerBool) {
			this.player.puppet.dx *= 0.85;
			this.player.puppet.dy *= 0.85;
		}
		//if (this.player.actionLag <= 1) {
		//this.player.puppet.dx = 0;
		//this.player.puppet.dy = 0;
		//}
	}
}

class AsakamiRPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(70, 55, 80, 0).setVelocity(1, -1);
		let sweet1 = new PriorityCircle(70, 55, 50, 1).setVelocity(1, -1);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(50).setLaunch(3, 2, 0.9).setHitStun(25, 20).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "vel");
		let sour = new AttackProperties().setDamage(48).setLaunch(3, 2, 0.9).setHitStun(25, 20).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "vel");
		let prop = [sour, sweet];

		return new this(player.getParent(), [], []).setClashPriority(4).setStartupF(14).setActiveF(5).setEndF(18).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			/*g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.translate(70, 55);

			this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();*/
		}

		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			//this.sheet.run();
		}
	}
}

class AsakamiLPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(70, -55, 80, 0).setVelocity(1, 0.7);
		let sweet1 = new PriorityCircle(70, -55, 50, 1).setVelocity(1, 0.7);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(70).setLaunch(3, 4, 0.8).setHitStun(25, 16).setCancelWait(12).setStunFrames(15).setAngleTypes("direct", "vel");
		let sour = new AttackProperties().setDamage(68).setLaunch(3, 4, 0.8).setHitStun(25, 16).setCancelWait(12).setStunFrames(15).setAngleTypes("direct", "vel");
		let prop = [sour, sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(4).setStartupF(15).setActiveF(5).setEndF(19).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.translate(70, -55);

			//this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();
		}

		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			//this.sheet.run();
		}
	}
}

class AsakamiMPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.teloSike);
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(55, 55, 50, 0).setCircleVelocity(64, -1);
		let sour2 = new PriorityCircle(-55, -55, 50, 0).setCircleVelocity(64, -1);
		let sour3 = new PriorityCircle(-77, 0, 50, 0).setCircleVelocity(64, -1);
		let sour4 = new PriorityCircle(77, 0, 50, 0).setCircleVelocity(64, -1);
		let sour5 = new PriorityCircle(55, -55, 50, 0).setCircleVelocity(64, -1);
		let sour6 = new PriorityCircle(-55, 55, 50, 0).setCircleVelocity(64, -1);
		let sour7 = new PriorityCircle(0, 77, 50, 0).setCircleVelocity(64, -1);
		let sour8 = new PriorityCircle(0, -77, 50, 0).setCircleVelocity(64, -1);
		let circles = [sour1, sour2, sour3, sour4, sour5, sour6, sour7, sour8];

		let sour = new AttackProperties().setDamage(49).setAngleValue(player.dir.value - PI / 4).setLaunch(6, 0, 0.85).setHitStun(25, 18).setStunFrames(13).setAngleTypes("vel", "vel").setRotateVel(4, 3, true).setRotateSlowDown(0.25, 60, true).setCancelWait(0, 5);
		let prop = [sour];

		return new this(player.getParent(), circles, prop).setClashPriority(3).setClashPriority(4).setStartupF(12).setActiveF(6).setEndF(17).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 7) {
			g.push();
			g.translate(this.x, this.y);
			//g.rotate(this.dir.value);

			let size = 215;
			//this.sheet.draw(g, -size / 2, -size / 2, size, size);

			g.pop();
		}

		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue(-PI / 10);
		} else if (this.getFromEndF() < 4 && this.getFromEndF() > 0) {
			this.player.dir.changeValue(-PI / 18);
		}
		//if (this.player.stunFrames <= 0 && this.startupOver() && this.getFromEndF() < 7)
			//this.sheet.run();
	}
}

class AsakamiNPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(50, 0, 20, 0);
		let sour1 = new PriorityCircle(60, 0, 20, 1).setVelocity(6, 0);
		let sour2 = new PriorityCircle(60, 10, 20, 1).setVelocity(4.8, 1.8);
		let sour3 = new PriorityCircle(60, -10, 20, 1).setVelocity(4.8, -1.8);
		let circles = [sweet1, sour1, sour2, sour3];

		let sweet = new AttackProperties().setDamage(80).setProration(-0.125).setAngleValue(player.dir.value).setLaunch(4, 3.1).setHitStun(50, 14).setStunFrames(15);
		let sour = new AttackProperties().setDamage(73).setProration(-0.125).setAngleValue(player.dir.value).setLaunch(5, 3).setHitStun(48, 12).setStunFrames(13);
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setClashPriority(2).setStartupF(19).setActiveF(16).setEndF(10).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			let x = cos(this.dir.value);
			let y = sin(this.dir.value);

			g.push();
			g.translate(this.x + 50 * x, this.y + 50 * y);
			g.rotate(this.dir.value + PI / 2);

			//this.sheet.draw(g, -96, -96, 192, 192);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		//if (this.player.stunFrames <= 0 && this.currentlyActive())
			//this.sheet.run();

		if (this.getActiveF() <= 6) {
			this.circles[1].dx = 0;
			this.circles[1].dy = 0;

			this.circles[2].dx = 0;
			this.circles[2].dy = 0;

			this.circles[3].dx = 0;
			this.circles[3].dy = 0;
		}

		if (this.player.actionLag <= 1) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class AsakamiSPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.konNasa);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(60, 30, 50, 0).setVelocity(2, 1, -0.08);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(50).setProration(0.625).setAngleValue(player.dir.value).setLaunch(3).setHitStun(35, 25).setStunFrames(15).setAngleTypes("vel", "direct");
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setClashPriority(0).setStartupF(29).setActiveF(90).setEndF(23).setProjectile();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		/*if (this.player.actionLag <= 1) {
			this.player.dx = 0;
			this.player.dy = 0;
		}*/
		//if (this.player.stunFrames <= 0 && this.currentlyActive())
			//this.sheet.run();
		if (this.getFromStartupF() === 32) {
			this.player.addAction("block");
		}
		if (this.getStartupF() > 0) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
	}
}

class AsakamiRPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(20, 50, 40, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(60, 65, 40, 0).setVelocity(0.1, 0);
		let sweeter1 = new PriorityCircle(100, 80, 40, 1).setVelocity(0.1, 0);
		let sweeter2 = new PriorityCircle(140, 95, 40, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweeter1, sweeter2];

		let sweet = new AttackProperties().setDamage(45).setProration(-0.5).setAngleValue(player.dir.value - PI * 0.8).setLaunch(5, 0.5).setHitStun(43, 13).setStunFrames(15).setCancelWait(20);
		let sweeter = new AttackProperties().setDamage(45).setProration(-0.5).setAngleValue(player.dir.value - PI * 0.8).setLaunch(6, 0.5).setHitStun(43, 13).setStunFrames(15).setCancelWait(20);
		let prop = [sweet, sweeter];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setStartupF(18).setActiveF(6).setEndF(34).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getFromEndF() < 10 && this.startupOver()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);

			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + PI * 0.11);

			//this.sheet.draw(g, 10, 15, 180, 50);

			g.pop();
		}
	}

	puppetLogic() {
		//if (this.player.stunFrames <= 0 && this.getFromEndF() < 10 && this.startupOver())
			//this.sheet.run();
	}
}

class AsakamiLPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(35, -58, 40, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(65, -83, 40, 0).setVelocity(0.1, 0);
		let sweeter1 = new PriorityCircle(95, -108, 40, 1).setVelocity(0.1, 0);
		let sweeter2 = new PriorityCircle(125, -133, 40, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweeter1, sweeter2];

		let sweet = new AttackProperties().setDamage(30).setProration(-0.5).setAngleValue(player.dir.value + PI * 0.6).setLaunch(6, 2).setHitStun(39, 13).setStunFrames(15).setCancelWait(20);
		let sweeter = new AttackProperties().setDamage(30).setProration(-0.5).setAngleValue(player.dir.value + PI * 0.6).setLaunch(9, 2).setHitStun(39, 13).setStunFrames(15).setCancelWait(20);
		let prop = [sweet, sweeter];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setStartupF(19).setActiveF(6).setEndF(34).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getFromEndF() < 10 && this.startupOver()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);

			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI * 0.22);

			//this.sheet.draw(g, 30, -45, 180, 50);

			g.pop();
		}
	}

	puppetLogic() {
		//if (this.player.stunFrames <= 0 && this.getFromEndF() < 10 && this.startupOver())
			//this.sheet.run();
	}
}

class AsakamiMPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.kalamaSuli);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NN", "dash"];

		let sour1 = new PriorityCircle(0, 0, 250, 1);
		let sweet1 = new PriorityCircle(0, 0, 150, 0);
		let circles = [sweet1, sour1];

		let sour = new AttackProperties().setDamage(19, 19, 6).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(14, 0.1, 0.25).setHitStun(27, 7).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "direct");
		let sweet = new AttackProperties().setDamage(20, 19, 6).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(16, 0.1, 0.5).setHitStun(30, 7).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "direct");
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(0).setStartupF(17).setActiveF(4).setEndF(30).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
		player.invTo = ["grab"];
		player.iFrames = 20;
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 14) {
			g.push();
			g.translate(this.x, this.y);
			//g.rotate(this.dir.value);

			let size = 250;
			//this.sheet.draw(g, -size / 2, -size / 2, size, size);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		//if (this.player.stunFrames <= 0 && this.startupOver() && this.getFromEndF() < 14)
			//this.sheet.run();
	}
}

class AsakamiNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.revive = false;
		this.held = true;
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(8);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (player.puppet.health <= 0) {
			attack.setStartupF(60);
			player.actionLag = 60;
			attack.revive = true;
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.dx *= 0.95;
		this.dy *= 0.95;
		this.player.turnSpeedModifier = -1;

		if (!this.player.controls.pressed("nasa"))
			this.held = false;
		if (this.getStartupF() === 1) {
			if (this.revive) {
				this.player.puppet.health = this.player.puppet.maxHealth;
			}
			if (this.revive || this.held) {
				let angle = this.player.right;
				if (this.player.controls.joystickPressed(0) && !this.revive)
					angle = this.player.controls.angle(0);
				this.player.puppet.x = this.player.x + angle.getX() * this.player.puppetStartDistance;
				this.player.puppet.y = this.player.y + angle.getY() * this.player.puppetStartDistance;
				this.player.puppet.forceChangeState(this.player.puppet.states.NEUTRAL, this.player.puppet.states.NEUTRAL_ACTIONS);
				this.player.puppet.sheet.setAnimation("Idle");
				this.player.endPuppetAttacksLife();
			}
		}
	}
}

class AsakamiPuppetNN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NNP";

		this.revive = false;

		this.held = true;
	}

	static createAttack(player) {
		return new this(player.getParent(), [], []).setStartupF(20).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	puppetLogic() {
		if (this.getFromStartupF() <= 6) {
			this.held = this.held && this.player.controls.pressed("nasa");
		}
		if (!this.held) {
			if (this.getFromStartupF() <= 8) {
				if (this.moveAngle === undefined)
					this.moveAngle = this.player.puppet.dir.value;
				else if (this.player.controls.joystickPressed(0))
					this.moveAngle = this.player.controls.angle(0).value;
			}
			if (this.moveAngle !== undefined && this.getFromStartupF() >= 8 && this.getFromStartupF() < 16) {
				let speed = 20;
				this.player.puppet.dx = Math.cos(this.moveAngle) * speed;
				this.player.puppet.dy = Math.sin(this.moveAngle) * speed;

				this.player.puppet.iFrames = 2;
			}
		}

		this.player.puppet.dx *= 0.75;
		this.player.puppet.dy *= 0.75;

		if (this.getFromStartupF() === 7 && this.held) {
			this.endLife();
		}
	}
}

class AsakamiSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(40, -10, 30, 0);
		let sour2 = new PriorityCircle(35, -30, 30, 0);
		let sour3 = new PriorityCircle(35, 10, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(40).setGrab(55).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(5).setActiveF(6).setEndF(27).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.3) {
				this.player.dir.value -= 0.15;
			}
			if (compare > 0.3) {
				this.player.dir.value += 0.15;
			}
		}
	}
}

class AsakamiRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.AsakamiIlo);
		//this.trail = Spritesheet.copy(assetManager.spritesheets.janTPTawaIlo);

		this.held = true;

		this.power = 30;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(75, 0, 60, 0).setVelocity(1, -0.6);
		let sweet2 = new PriorityCircle(60, 40, 60, 0).setVelocity(1, -0.6);
		let sweet3 = new PriorityCircle(60, -40, 60, 0).setVelocity(1, -0.6);
		let sweet4 = new PriorityCircle(30, 65, 60, 0).setVelocity(1, -0.6);
		let sweet5 = new PriorityCircle(30, -65, 60, 0).setVelocity(1, -0.6);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(65).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 3, 1.1).setHitStun(30, 20).setStunFrames(14).setNormalizeHitStun();
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(20).setActiveF(6).setEndF(22).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.45);
	}

	draw(g) {
		if (this.getStartupF() > 0) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + PI * 0.45);
			g.translate(80, 0);

			//this.sheet.draw(g, -40, -40, 80, 80);

			g.pop();
		} else if (this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI * 0.55);
			g.translate(80, 0);

			//this.sheet.draw(g, -40, -40, 80, 80);

			g.pop();
		}
		if (this.getFromActiveF() < 8 && this.getStartupF() <= 0) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.trail.draw(g, -10, -112, 144, 224);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		//if (this.getFromActiveF() < 8 && this.getStartupF() <= 0)
			//this.trail.run();
		if (!this.player.controls.held("nasa"))
			this.held = false;
		if (this.getStartupF() === 5 && this.held && this.power < 60) {
			this.setStartupF(this.getStartupF() + 1);
			this.player.actionLag++;
			this.power += 2;
			this.properties[0].setDamage(this.properties[0].damage + 1);
		}
		if (this.getStartupF() === 4) {
			this.player.sheet.setAnimation("RNF");//This is the animation for the actual swing
			this.player.sheet.currentSubFrames += this.player.sheet.frameRate;
			let angle = this.player.dir;
			if (this.player.controls.joystickHeld(0))
				angle = this.player.controls.angle(0);
			this.player.dx += angle.getX() * (this.power + 6) / 3.5;
			this.player.dy += angle.getY() * (this.power + 6) / 3.5;
		}
		if (this.activeOver()) {
			this.player.dx *= 0.86;
			this.player.dy *= 0.86;
		}
	}
}

class AsakamiPuppetRN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RNP";

		this.revive = false;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(75, 0, 60, 0).setVelocity(1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(15).setAngleValue(player.dir.value).setLaunch(7, 3, 1.1).setHitStun(30, 20).setStunFrames(14);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(1).setStartupF(20).setActiveF(4).setEndF(20).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		
	}
}

class AsakamiLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.konNasaLanpan);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(55, -50, 70, 0).setVelocity(0.1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(10, 0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0.5, 0).setHitStun(23, 15).setStunFrames(0).setNormalizeHitStun().setRotateSlowDown(0.25, 420).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(17).setActiveF(8).setEndF(30).setFollow(false).setProjectile();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getStartupF() <= 8 && this.getFromEndF() <= 11) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.sheet.draw(g, 0, -115, 120, 120);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 8 && this.getFromEndF() <= 11) {
			//this.sheet.run();
		}
	}
}

class AsakamiPuppetLN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LNP";

		this.revive = false;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(75, 0, 60, 0).setVelocity(1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(15).setAngleValue(player.dir.value).setLaunch(7, 3, 1.1).setHitStun(30, 20).setStunFrames(14);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(1).setStartupF(20).setActiveF(4).setEndF(20).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {

	}
}

class AsakamiMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPIlo);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 60, 40, 0).setVelocity(0.01, 0);/*.setCircleVelocity(16, -1)*/;//20, 60
		let sweet1 = new PriorityCircle(20, 95, 40, 1).setVelocity(0.01, 0);/*.setCircleVelocity(16, -1)*/;//20, 95
		let sweet2 = new PriorityCircle(-20, 95, 40, 1).setVelocity(0.01, 0);/*.setCircleVelocity(16, -1)*/;//-20, 95
		let circles = [sour1, sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(80).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 6, -PI / 8).setLaunch(18).setHitStun(33, 5).setStunFrames(15, 19);
		let sour = new AttackProperties().setDamage(70).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 6, -PI / 8).setLaunch(17).setHitStun(32, 5).setStunFrames(15, 20);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(15).setActiveF(17).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;
	}

	draw(g) {
		if (this.currentlyActive() || this.getStartupF() > 0) {
			let x = cos(this.dir.value + PI / 2);
			let y = sin(this.dir.value + PI / 2);

			g.push();
			g.translate(this.x + 90 * x, this.y + 90 * y);
			g.rotate(this.dir.value + PI / 2);

			//this.sheet.draw(g, -40, -40, 80, 80);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		if (this.currentlyActive()) {
			//if (this.player.stunFrames <= 0)
				//this.sheet.run();
			if (this.getActiveF() > 0)
				this.dir.value -= PI / 8;
		}
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 12;
		}
	}
}

class AsakamiPuppetMN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MNP";

		this.revive = false;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(75, 0, 60, 0).setVelocity(1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(15).setAngleValue(player.dir.value).setLaunch(7, 3, 1.1).setHitStun(30, 20).setStunFrames(14);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(1).setStartupF(20).setActiveF(4).setEndF(20).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {

	}
}

class ScytheFrame {
	constructor(x, y, dirValue) {
		this.x = x;
		this.y = y;
		this.dirValue = dirValue;
	}

	setFrame(scythe) {
		scythe.offX = this.x;
		scythe.offY = this.y;
		scythe.dir.value = this.dirValue;
		scythe.dx = 0;
		scythe.dy = 0;
		scythe.dr = 0;
	}
}

characters.push(Asakami);