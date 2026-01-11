class JanTI extends Player {
	constructor() {
		super([
			new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)
		]);

		this.hurtboxes["grab"] = [
			[new Circle(0, 0, 80),
			new Circle(9, -36, 24),
			new ICircle(26, 22, 49)]
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
			new Circle(8, -40, 20)],
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
			new Circle(12, -40, 20)]
		];

		this.hurtboxes["dash attack"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(0, 0, 80),
			new ICircle(24, -32, 30),
			new Circle(10, 38, 20)],
			[new Circle(1, 1, 80),
			new ICircle(42, -20, 32),
			new Circle(10, 38, 20)],
			[new Circle(10, -3, 85),
			new ICircle(63, -14, 32),
			new Circle(13, 36, 20)],
			[new Circle(10, -3, 86),
			new ICircle(63, -15, 32),
			new Circle(13, 36, 20)],
			[new Circle(10, -4, 84),
			new ICircle(57, -22, 30),
			new Circle(15, 36, 20)],
			[new Circle(4, 0, 80),
			new ICircle(44, -22, 36),
			new Circle(13, 37, 20)],
			[new Circle(3, 0, 81),
			new ICircle(34, -27, 30),
			new Circle(11, 37, 21)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(-1, 0, 84),
			new Circle(10, 34, 26),
			new Circle(10, -40, 20)],
			[new Circle(-2, 1, 83),
			new Circle(14, 34, 26),
			new Circle(0, -33, 25)],
			[new Circle(-3, 3, 82),
			new Circle(15, 33, 27),
			new Circle(-4, -32, 24)],
			[new Circle(7, -2, 85),
			new ICircle(41, -27, 25),
			new Circle(16, 35, 26)],
			[new Circle(10, -4, 85),
			new ICircle(65, -15, 30),
			new Circle(12, 34, 24)],
			[new Circle(10, -3, 85),
			new ICircle(65, -16, 30),
			new Circle(15, 35, 24)],
			[new Circle(11, -4, 83),
			new Circle(64, -8, 30),
			new Circle(9, 31, 24)],
			[new Circle(11, -3, 81),
			new Circle(63, -2, 30),
			new Circle(9, 31, 24)],
			[new Circle(11, -3, 80),
			new Circle(63, -2, 30),
			new Circle(9, 31, 23)],
			[new Circle(12, -2, 81),
			new Circle(60, -19, 28),
			new Circle(12, 37, 20)],
			[new Circle(11, 0, 83),
			new Circle(50, -26, 27),
			new Circle(9, 36, 22)],
			[new Circle(5, 1, 81),
			new Circle(13, 36, 22),
			new Circle(37, -32, 28)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(-4, -3, 83),
			new Circle(13, -29, 34),
			new ICircle(4, 33, 32)],
			[new Circle(-1, -7, 79),
			new Circle(20, -30, 31),
			new ICircle(4, 28, 35)],
			[new Circle(0, 3, 85),
			new Circle(14, -27, 32),
			new ICircle(30, 36, 32)],
			[new Circle(6, 6, 86),
			new Circle(28, 26, 50),
			new ICircle(51, 40, 29)],
			[new Circle(10, 10, 85),
			new Circle(35, 33, 39),
			new ICircle(55, 38, 29)],
			[new Circle(8, 8, 84),
			new ICircle(43, 36, 29)],
			[new Circle(6, 7, 79),
			new Circle(19, -18, 37),
			new ICircle(38, 34, 30)],
			[new Circle(4, 7, 80),
			new Circle(18, -22, 34),
			new ICircle(34, 37, 31)],
			[new Circle(2, 4, 78),
			new Circle(15, -25, 33),
			new ICircle(28, 30, 37)],
			[new Circle(0, 3, 80),
			new Circle(12, -25, 33),
			new ICircle(21, 35, 32)],
			[new Circle(1, 1, 75),
			new Circle(12, -30, 29),
			new Circle(5, 33, 29)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, 2, 80),
			new ICircle(26, -27, 36),
			new Circle(10, 32, 33)],
			[new Circle(2, 0, 79),
			new ICircle(40, -18, 39),
			new Circle(11, 33, 26)],
			[new Circle(8, 3, 84),
			new Circle(37, -11, 48),
			new ICircle(68, -14, 30)],
			[new Circle(9, 3, 79),
			new Circle(40, -13, 45),
			new ICircle(66, -15, 30)],
			[new Circle(7, 2, 84),
			new Circle(37, -17, 40),
			new ICircle(59, -23, 31)],
			[new Circle(4, 5, 79),
			new Circle(26, -18, 41),
			new ICircle(48, -24, 31)],
			[new Circle(2, 5, 81),
			new Circle(27, -23, 34),
			new ICircle(45, -25, 25)],
			[new Circle(4, 0, 79),
			new ICircle(34, -27, 33),
			new Circle(12, 29, 37)],
			[new Circle(2, 0, 80),
			new Circle(30, -27, 34),
			new Circle(12, 29, 37)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 85),
			new Circle(15, -35, 27),
			new Circle(14, 35, 30)],
			[new Circle(-1, 1, 82),
			new ICircle(38, 25, 74),
			new Circle(15, -36, 25)],
			[new Circle(-1, 1, 83),
			new Circle(24, 31, 32),
			new ICircle(35, -19, 103)],
			[new Circle(-2, 0, 84),
			new Circle(24, 28, 34),
			new ICircle(32, -25, 86)],
			[new Circle(-1, 1, 84),
			new Circle(14, -33, 31),
			new Circle(24, 30, 31)],
			[new Circle(-1, 1, 83),
			new Circle(11, -33, 32),
			new Circle(16, 29, 36)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 30),
			new Circle(10, -40, 20)],
			[new Circle(0, 0, 80),
			new ICircle(30, -30, 30),
			new Circle(10, 40, 20)],
			[new Circle(5, -5, 85),
			new ICircle(45, -20, 30),
			new Circle(10, 40, 20)],
			[new Circle(10, -10, 90),
			new ICircle(65, -20, 30),
			new Circle(10, 40, 20)],
			[new Circle(10, -10, 90),
			new ICircle(65, -20, 30),
			new Circle(10, 40, 20)],
			[new Circle(10, -10, 90),
			new ICircle(55, -20, 30),
			new Circle(10, 40, 20)],
			[new Circle(0, 0, 80),
			new ICircle(45, -30, 30),
			new Circle(10, 40, 20)],
		];

		this.hurtboxes["SS"] = [
			[new Circle(0, 0, 80),
			new Circle(21, -31, 30),
			new Circle(14, 31, 36)],
			[new Circle(3, 0, 79),
			new Circle(27, -26, 37),
			new Circle(15, 34, 35)],
			[new Circle(6, 2, 80),
			new Circle(34, -22, 38),
			new Circle(18, 33, 38)],
			[new Circle(5, 1, 79),
			new Circle(31, -24, 39),
			new Circle(23, 32, 36)],
			[new Circle(5, 2, 82),
			new Circle(36, -24, 36),
			new Circle(34, 28, 39)],
			[new Circle(3, 1, 82),
			new Circle(33, -23, 40),
			new Circle(31, 30, 39)],
			[new Circle(4, 1, 83),
			new Circle(36, -22, 40),
			new Circle(33, 29, 40)],
			[new Circle(4, 1, 81),
			new Circle(30, -23, 42),
			new Circle(29, 30, 38)],
			[new Circle(7, 3, 83),
			new Circle(35, -26, 34),
			new Circle(33, 30, 35)],
			[new Circle(6, 2, 81),
			new Circle(31, -25, 37),
			new Circle(31, 30, 39)],
			[new Circle(7, 1, 83),
			new Circle(35, -24, 35),
			new Circle(36, 30, 35)],
			[new Circle(5, 1, 81),
			new Circle(33, -27, 35),
			new Circle(31, 27, 40)],
			[new Circle(8, 2, 82),
			new Circle(36, -25, 34),
			new Circle(35, 24, 40)],
			[new Circle(6, 2, 80),
			new Circle(33, -26, 35),
			new Circle(31, 28, 36)],
			[new Circle(5, 2, 77),
			new Circle(28, -25, 40),
			new Circle(24, 28, 36)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(3, 5, 84),
			new Circle(9, -37, 20),
			new Circle(18, 37, 20)],
			[new Circle(7, 5, 85),
			new Circle(7, -37, 20),
			new Circle(26, 37, 20)],
			[new Circle(7, 3, 85),
			new Circle(7, -36, 20),
			new Circle(26, 36, 20)],
			[new Circle(6, 4, 82),
			new Circle(8, -33, 25),
			new Circle(21, 33, 26)],
			[new Circle(4, 0, 79),
			new Circle(14, -33, 25),
			new Circle(15, 34, 31)],
			[new Circle(4, -4, 81),
			new Circle(20, -35, 26),
			new Circle(9, 31, 30)],
			[new Circle(6, -1, 83),
			new Circle(21, -30, 38),
			new Circle(9, 21, 50)],
			[new Circle(6, 1, 82),
			new Circle(19, -25, 39),
			new Circle(16, 37, 31)],
			[new Circle(7, 1, 84),
			new Circle(16, -28, 39),
			new Circle(24, 34, 33)],
			[new Circle(7, 2, 82),
			new Circle(14, -27, 36),
			new Circle(34, 33, 36)],
			[new Circle(12, 5, 84),
			new Circle(7, -30, 28),
			new Circle(46, 28, 28)],
			[new Circle(14, 5, 82),
			new Circle(4, -33, 26),
			new Circle(45, 28, 28)],
			[new Circle(13, 3, 82),
			new Circle(4, -31, 27),
			new Circle(46, 31, 21)],
			[new Circle(8, 1, 77),
			new Circle(7, -34, 27),
			new Circle(27, 29, 33)],
			[new Circle(8, -1, 78),
			new Circle(9, -34, 31),
			new Circle(17, 30, 31)],
			[new Circle(2, -2, 75),
			new Circle(9, -33, 31),
			new Circle(11, 28, 36)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(2, 0, 80),
			new Circle(21, -37, 23),
			new Circle(10, 38, 21)],
			[new Circle(4, -1, 82),
			new Circle(22, -31, 32),
			new Circle(10, 21, 50)],
			[new Circle(4, 0, 81),
			new Circle(17, -29, 33),
			new Circle(12, 31, 29)],
			[new Circle(5, 2, 80),
			new Circle(9, -33, 29),
			new Circle(18, 30, 35)],
			[new Circle(7, 3, 82),
			new Circle(9, -31, 32),
			new Circle(25, 32, 31)],
			[new Circle(8, 2, 81),
			new Circle(15, -35, 33),
			new Circle(21, 33, 29)],
			[new Circle(6, 0, 85),
			new Circle(24, -33, 35),
			new Circle(11, 23, 50)],
			[new Circle(6, -4, 85),
			new Circle(31, -37, 34),
			new Circle(10, 33, 27)],
			[new Circle(12, -3, 81),
			new Circle(45, -28, 30),
			new Circle(9, 24, 41)],
			[new Circle(13, -2, 79),
			new Circle(45, -29, 29),
			new Circle(8, 21, 47)],
			[new Circle(13, -2, 79),
			new Circle(42, -29, 28),
			new Circle(8, 21, 47)],
			[new Circle(7, 0, 79),
			new Circle(26, -32, 29),
			new Circle(7, 33, 28)],
			[new Circle(3, 1, 76),
			new Circle(12, -33, 29),
			new Circle(8, 34, 31)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(0, 0, 80),
			new Circle(14, -38, 27),
			new Circle(14, 41, 26)],
			[new Circle(0, 0, 79),
			new Circle(8, -39, 30),
			new Circle(9, 40, 30)],
			[new Circle(0, 0, 79),
			new Circle(6, -40, 23),
			new Circle(9, 42, 28)],
			[new Circle(0, 0, 78),
			new Circle(27, 18, 45),
			new Circle(27, -18, 45)],
			[new Circle(0, 0, 78),
			new Circle(26, -17, 47),
			new Circle(25, 19, 44)],
			[new Circle(0, 0, 78),
			new Circle(28, -18, 47),
			new Circle(26, 18, 46)],
			[new Circle(0, 0, 77),
			new Circle(29, -17, 46),
			new Circle(27, 18, 46)],
			[new Circle(0, 0, 77),
			new Circle(28, -22, 41),
			new Circle(27, 19, 43)],
			[new Circle(0, 0, 76),
			new Circle(25, -27, 36),
			new Circle(27, 24, 40)],
			[new Circle(0, 0, 75),
			new Circle(22, -30, 33),
			new Circle(23, 27, 34)],
			[new Circle(0, 0, 75),
			new Circle(23, -29, 37),
			new Circle(23, 28, 37)],
			[new Circle(2, 0, 76),
			new Circle(17, -30, 37),
			new Circle(20, 30, 39)],
			[new Circle(2, 0, 75),
			new Circle(17, -30, 39),
			new Circle(17, 30, 40)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(0, 0, 80),
			new Circle(9, -36, 24),
			new ICircle(26, 22, 49)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(0, 0, 80),
			new Circle(21, -37, 24),
			new Circle(21, 35, 30)],
			[new Circle(0, 0, 80),
			new Circle(25, -34, 30),
			new Circle(17, 21, 51)],
			[new Circle(0, -1, 80),
			new Circle(24, -28, 36),
			new Circle(19, 19, 50)],
			[new Circle(0, -2, 80),
			new Circle(29, -29, 32),
			new Circle(20, 16, 50)],
			[new Circle(0, 0, 71),
			new Circle(13, -41, 35),
			new Circle(25, 38, 38)],
			[new Circle(0, 0, 72),
			new Circle(12, -44, 32),
			new Circle(24, 37, 44)],
			[new Circle(0, 0, 73),
			new Circle(14, -41, 35),
			new Circle(26, 39, 39)],
			[new Circle(0, 0, 70),
			new Circle(14, -45, 32),
			new Circle(24, 40, 39)],
			[new Circle(0, 0, 73),
			new Circle(16, -44, 32),
			new Circle(26, 40, 37)],
			[new Circle(0, 0, 75),
			new Circle(15, -34, 35),
			new Circle(21, 33, 35)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(20, 29, 33)],
			[new Circle(-1, 3, 81),
			new Circle(7, -22, 47),
			new Circle(26, 29, 37)],
			[new Circle(-1, 1, 80),
			new Circle(7, -21, 50),
			new Circle(33, 33, 36)],
			[new Circle(0, 3, 79),
			new Circle(8, -21, 50),
			new Circle(33, 33, 37)],
			[new Circle(1, 3, 79),
			new Circle(8, -22, 50),
			new Circle(32, 34, 36)],
			[new Circle(1, 3, 78),
			new Circle(8, -22, 50),
			new Circle(33, 32, 38)],
			[new Circle(2, 4, 77),
			new Circle(8, -22, 50),
			new Circle(33, 33, 36)],
			[new Circle(0, 2, 79),
			new Circle(8, -22, 50),
			new Circle(32, 33, 38)],
			[new Circle(1, 1, 79),
			new Circle(8, -25, 45),
			new Circle(26, 29, 38)],
			[new Circle(1, 0, 78),
			new Circle(8, -26, 44),
			new Circle(18, 25, 41)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(0, 0, 80),
			new Circle(23, -33, 25),
			new Circle(10, 40, 20)],
			[new Circle(0, -6, 80),
			new Circle(30, -34, 24),
			new Circle(9, 19, 50)],
			[new Circle(3, -5, 77),
			new Circle(35, -36, 28),
			new Circle(8, 20, 50)],
			[new Circle(1, -1, 77),
			new Circle(31, -29, 32),
			new Circle(9, 19, 50)],
			[new Circle(0, 10, 72),
			new Circle(17, -16, 50),
			new Circle(38, -33, 22)],
			[new Circle(2, 10, 70),
			new Circle(13, -14, 56),
			new Circle(38, -35, 22)],
			[new Circle(2, 11, 67),
			new Circle(14, -16, 54),
			new Circle(36, -36, 22)],
			[new Circle(3, 11, 66),
			new Circle(14, -15, 53),
			new Circle(36, -37, 21)],
			[new Circle(4, 10, 68),
			new Circle(11, -18, 53),
			new Circle(32, -35, 22)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)],
			[new Circle(-3, 2, 81),
			new Circle(3, -31, 30),
			new Circle(10, 32, 32)],
			[new Circle(-6, 2, 76),
			new Circle(-6, -28, 32),
			new Circle(9, 32, 33)],
			[new Circle(3, 6, 80),
			new Circle(38, -16, 46)],
			[new Circle(3, 8, 77),
			new Circle(38, -14, 50)],
			[new Circle(0, 1, 84),
			new Circle(42, -9, 50)],
			[new Circle(3, 2, 81),
			new Circle(45, -5, 50)],
			[new Circle(-1, 3, 81),
			new Circle(41, -10, 50)],
			[new Circle(1, -3, 78),
			new Circle(35, -21, 39),
			new Circle(7, 27, 36)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(0, 0, 80),
			new Circle(16, 38, 20),
			new Circle(14, -38, 20)],
			[new Circle(-2, 0, 80),
			new Circle(9, 36, 22),
			new Circle(17, -40, 19)],
			[new Circle(0, -3, 81),
			new Circle(6, 31, 31),
			new Circle(20, -38, 21)],
			[new Circle(0, 0, 85),
			new Circle(17, 31, 35),
			new Circle(15, -38, 26)],
			[new Circle(-1, 0, 83),
			new Circle(27, 27, 36),
			new Circle(13, -38, 24)],
			[new Circle(-2, 0, 82),
			new Circle(25, 19, 50),
			new Circle(6, -36, 22)],
			[new Circle(-2, 0, 79),
			new Circle(27, 19, 45),
			new Circle(4, -35, 20)],
			[new Circle(-2, 0, 79),
			new Circle(27, 18, 46),
			new Circle(4, -34, 21)],
			[new Circle(-2, 0, 80),
			new Circle(27, 18, 46),
			new Circle(4, -34, 21)],
			[new Circle(-1, 0, 80),
			new Circle(26, 18, 47),
			new Circle(7, -33, 24)],
			[new Circle(0, 0, 81),
			new Circle(23, 19, 54),
			new Circle(7, -20, 50)],
			[new Circle(0, 0, 80),
			new Circle(24, 30, 38),
			new Circle(9, -26, 39)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(0, 0, 80),
			new Circle(14, 38, 27),
			new Circle(11, -38, 27)],
			[new Circle(-5, 3, 77),
			new Circle(21, 27, 38),
			new Circle(-4, -35, 28)],
			[new Circle(-5, 2, 77),
			new Circle(24, 26, 35),
			new Circle(-6, -34, 31)],
			[new Circle(-7, 2, 77),
			new Circle(22, 31, 37),
			new Circle(-6, -38, 29)],
			[new Circle(-9, 4, 78),
			new Circle(22, 31, 36),
			new Circle(-3, -35, 29)],
			[new Circle(-10, 1, 72),
			new Circle(21, 29, 32),
			new Circle(-4, -36, 27)],
			[new Circle(-10, 3, 75),
			new Circle(22, 16, 46),
			new Circle(-1, -36, 31)],
			[new Circle(-7, 2, 76),
			new Circle(22, -32, 33),
			new Circle(31, 1, 48)],
			[new Circle(-8, 2, 76),
			new Circle(28, 0, 51),
			new Circle(22, -32, 33)],
			[new Circle(-9, 3, 75),
			new Circle(28, -1, 50),
			new Circle(21, -32, 33)],
			[new Circle(-1, 0, 74),
			new Circle(31, -3, 48),
			new Circle(23, -30, 39)],
			[new Circle(-1, 0, 73),
			new Circle(31, -2, 46),
			new Circle(24, -32, 33)],
			[new Circle(2, -1, 75),
			new Circle(38, 7, 35),
			new Circle(19, -33, 33)],
			[new Circle(1, -3, 76),
			new Circle(24, 22, 39),
			new Circle(18, -37, 27)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(-3, 0, 75),
			new Circle(10, 40, 20),
			new Circle(19, -33, 20)],
			[new Circle(-9, -3, 77),
			new Circle(0, 37, 25),
			new Circle(13, -30, 27)],
			[new Circle(-10, -3, 78),
			new Circle(-2, 36, 27),
			new Circle(12, -31, 28)],
			[new Circle(-7, -2, 81),
			new Circle(4, 34, 28),
			new Circle(24, -12, 37)],
			[new Circle(-6, -2, 80),
			new Circle(6, 14, 68),
			new Circle(13, -2, 53)],
			[new Circle(-6, -1, 80),
			new Circle(6, 14, 68),
			new Circle(16, 0, 50)],
			[new Circle(-7, -2, 79),
			new Circle(2, 11, 74),
			new Circle(14, -1, 50)],
			[new Circle(-7, -1, 79),
			new Circle(3, 14, 69),
			new Circle(31, -6, 27)],
			[new Circle(-7, -1, 78),
			new Circle(3, 12, 74),
			new Circle(28, -17, 24)],
			[new Circle(-7, 0, 79),
			new Circle(2, 8, 80)],
			[new Circle(3, 6, 81)],
			[new Circle(-2, 3, 77),
			new Circle(10, 27, 34),
			new Circle(25, -9, 39)],
			[new Circle(5, -7, 76),
			new Circle(32, 2, 32),
			new Circle(-4, -40, 28)],
			[new Circle(5, -5, 75),
			new Circle(26, 20, 34),
			new Circle(0, -41, 29)],
			[new Circle(4, -3, 76),
			new Circle(19, 28, 36),
			new Circle(5, -39, 29)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(-2, 1, 76),
			new Circle(17, 32, 25),
			new Circle(7, -36, 20)],
			[new Circle(-9, 3, 77),
			new Circle(11, 30, 29),
			new Circle(1, -36, 26)],
			[new Circle(-9, 4, 77),
			new Circle(11, 30, 29),
			new Circle(-3, -36, 26)],
			[new Circle(-6, 4, 80),
			new Circle(24, 13, 37),
			new Circle(5, -33, 29)],
			[new Circle(-7, -1, 76),
			new Circle(11, -8, 64),
			new Circle(2, -35, 28)],
			[new Circle(-7, -1, 76),
			new Circle(9, -6, 69),
			new Circle(2, -35, 27)],
			[new Circle(-8, -1, 76),
			new Circle(7, -7, 73),
			new Circle(3, -35, 28)],
			[new Circle(-7, -1, 76),
			new Circle(6, -6, 76),
			new Circle(2, -35, 27)],
			[new Circle(-7, -1, 74),
			new Circle(4, -8, 75),
			new Circle(1, -36, 26)],
			[new Circle(0, -7, 83)],
			[new Circle(2, -9, 80)],
			[new Circle(-2, -5, 83),
			new Circle(19, 6, 50)],
			[new Circle(4, 8, 76),
			new Circle(-6, 44, 20),
			new Circle(36, -4, 25)],
			[new Circle(4, 5, 75),
			new Circle(1, 41, 24),
			new Circle(27, -21, 32)],
			[new Circle(4, 1, 76),
			new Circle(8, 32, 38),
			new Circle(18, -27, 39)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(1, 0, 82),
			new Circle(13, -37, 23),
			new Circle(12, 37, 22)],
			[new Circle(1, 0, 82),
			new Circle(23, -33, 31),
			new Circle(25, 31, 32)],
			[new Circle(1, 0, 81),
			new Circle(26, -24, 41),
			new Circle(26, 26, 37)],
			[new Circle(1, 0, 80),
			new Circle(27, -23, 42),
			new Circle(26, 24, 41)],
			[new Circle(0, 0, 82),
			new Circle(7, -47, 24),
			new Circle(9, 47, 27)],
			[new Circle(1, -2, 81),
			new Circle(7, -49, 20),
			new Circle(10, 46, 28)],
			[new Circle(1, -2, 80),
			new Circle(7, -48, 23),
			new Circle(9, 46, 29)],
			[new Circle(2, -1, 80),
			new Circle(7, -48, 23),
			new Circle(9, 46, 30)],
			[new Circle(1, -1, 80),
			new Circle(7, -48, 22),
			new Circle(9, 46, 29)],
			[new Circle(1, 0, 81),
			new Circle(7, -48, 22),
			new Circle(9, 47, 27)],
			[new Circle(2, 0, 82),
			new Circle(11, -45, 22),
			new Circle(16, 40, 27)],
			[new Circle(2, -3, 80),
			new Circle(18, -41, 20),
			new Circle(16, 38, 26)],
			[new Circle(1, 0, 84),
			new Circle(14, -34, 29),
			new Circle(13, 34, 29)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(0, 0, 86),
			new Circle(15, -38, 27),
			new Circle(15, 39, 24)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(19, 34, 28)],
			[new Circle(1, 0, 78),
			new Circle(8, -21, 50),
			new Circle(24, 26, 36)],
			[new Circle(0, 0, 79),
			new Circle(7, -22, 50),
			new Circle(27, 17, 50)],
			[new Circle(0, 0, 79),
			new Circle(6, -22, 50),
			new Circle(27, 15, 50)],
			[new Circle(2, -1, 75),
			new Circle(4, -20, 50),
			new Circle(34, 11, 42)],
			[new Circle(2, 0, 75),
			new Circle(6, -19, 50),
			new Circle(32, 12, 43)],
			[new Circle(4, 0, 72),
			new Circle(7, -19, 50),
			new Circle(36, 13, 39)],
			[new Circle(3, 0, 73),
			new Circle(5, -20, 50),
			new Circle(32, 16, 41)],
			[new Circle(2, 0, 76),
			new Circle(5, -20, 50),
			new Circle(30, 21, 35)],
			[new Circle(0, 0, 80),
			new Circle(4, -22, 50),
			new Circle(20, 27, 37)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(19, 27, 38)],
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(24, 30, 33)],
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(27, 31, 33)],
			[new Circle(0, 0, 79),
			new Circle(9, -25, 44),
			new Circle(36, 34, 31)],
			[new Circle(-2, -1, 74),
			new Circle(6, -26, 50),
			new Circle(28, 30, 31)],
			[new Circle(-3, -2, 71),
			new Circle(7, -28, 48),
			new Circle(22, 26, 34)],
			[new Circle(-2, -2, 73),
			new Circle(9, -25, 50),
			new Circle(24, 32, 32)],
			[new Circle(-1, -3, 74),
			new Circle(10, -29, 39),
			new Circle(25, 30, 35)],
			[new Circle(1, 0, 77),
			new Circle(8, -22, 50),
			new Circle(31, 31, 36)],
			[new Circle(1, 0, 78),
			new Circle(6, -23, 50),
			new Circle(27, 30, 35)],
			[new Circle(1, 0, 78),
			new Circle(5, -25, 46),
			new Circle(20, 27, 36)],
			[new Circle(1, 0, 78),
			new Circle(6, -27, 41),
			new Circle(20, 28, 35)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(0, 0, 80),
			new Circle(4, -47, 26),
			new Circle(36, 24, 36)],
			[new Circle(0, 0, 85),
			new Circle(5, -43, 34),
			new Circle(30, 17, 50)]
		];
		this.hurtboxes["LNF"] = [
			[new Circle(0, 0, 80),
			new Circle(4, -47, 26),
			new Circle(33, 29, 38)],
			[new Circle(0, 4, 74),
			new Circle(0, 41, 34),
			new Circle(-23, 10, 50)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(5, 1, 80),
			new Circle(24, -28, 30),
			new Circle(-1, 49, 22)]
		];

		this.hurtboxes["kepeken"] = [
			[new Circle(0, 0, 81),
			new Circle(36, -35, 25),
			new Circle(36, 35, 29)]
		];

		this.headNoun = "󱤑";//jan
		this.name = currentLanguage === "tp" ? "󱤑󱥍󱦗󿨰" : "jan pi toki ike";//jan pi toki ike

		this.collideRadius = 42;

		this.health = 640;
		this.maxHealth = 640;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTISheet);
		this.sheetRotation = new Angle();

		this.states.DASH_ATTACK = State.copyState(State.DASH_ATTACK).removeTag("rotateable");
		this.states.SL = State.copyState(State.SL).addTag("rotateable");
		this.states.SS = State.copyState(State.SS).addTag("rotateable");
		this.states.RS = State.copyState(State.RS).addTag("rotateable");
		this.states.LS = State.copyState(State.LS).addTag("rotateable");
		this.states.RN = State.copyState(State.RN).addTag("rotateable");
		this.states.NN = State.copyState(State.NN).addTag("rotateable");
		this.states.LNF = State.copyState(State.LN).setName("LNF");

		this.states.KEPEKEN = new State("kepeken");
		this.states.KEPEKEN_ACTIONS = ["power dash"];

		this.sikeWawaGainMult = 0.8;

		this.counterHitBuff = 8;

		this.movementSpeed = 1.9;
		this.forwardSpeedBoost = 1.7;

		this.turnSpeed = 0.028;

		this.nlTurnSpeedBoost = 0.02;

		this.book = new Hitcircle(0, 0, [new Circle(0, 0, 50)]);
		this.book.duration = 0;
		this.book.maxDuration = 900;
		this.book.sheet = Spritesheet.copy(assetManager.spritesheets.lipuNasaIke);
		this.book.dx = 0;//These two are used SPECIFICALLY for when the book is hit by an attack, DO NOT MESS WITH THEM
		this.book.dy = 0;
		this.book.attackDuration = 0;

		this.OOBBlockFrame = 5;

		this.dash.speed = 16;
		this.dash.friction = 0.83;
		this.dash.regularFrictionFrame = this.dash.frames - 16;
		this.dash.backPenalty = 5;

		this.dash.bookCancelFrame = this.dash.frames - 20;

		this.dash.startRotateFrame = this.dash.invFirstFrame;
		this.dash.endRotateFrame = max(this.dash.attackCancelFrame, this.dash.blockCancelFrame);
	}

	setAttacks() {
		this.DASH_ATTACK = JanTIDashAttack;

		this.NL = JanTINL;
		this.SL = JanTISL;
		this.RL = JanTIRL;
		this.LL = JanTILL;
		this.ML = JanTIML;

		this.NS = JanTINS;
		this.SS = JanTISS;
		this.RS = JanTIRS;
		this.LS = JanTILS;
		this.MS = JanTIMS;

		this.NPL = JanTINPL;
		this.SPL = JanTISPL;
		this.RPL = JanTIRPL;
		this.LPL = JanTILPL;
		this.MPL = JanTIMPL;

		this.NPS = JanTINPS;
		this.SPS = JanTISPS;
		this.RPS = JanTIRPS;
		this.LPS = JanTILPS;
		this.MPS = JanTIMPS;

		this.NN = JanTINN;
		this.SN = JanTISN;
		this.RN = JanTIRN;
		this.LN = JanTILN;
		this.MN = JanTIMN;

		this.BOOK = JanTIBook;
		this.BOOK_MOVE = JanTIBookMove;
	}

	dashLogic() {
		super.dashLogic();
		if (this.currentState.name === "dash") {
			if (this.actionLag === this.dash.bookCancelFrame) {
				this.addAction("NN");
			}
		}
		/*if (this.currentState.name === "dash" && this.actionLag > this.dash.endRotateFrame && this.actionLag < this.dash.startRotateFrame) {
			this.sheetRotation.value += PI / 4.5;
			this.sheetRotation.normalize();

		} else {
			this.sheetRotation.value = 0;
		}*/
	}

	//nasa attacks
	startNN() {
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {

			let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo.bind(this)() : {};

			this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
				if (this.book.duration <= 0) {
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
				} else {//TODO I probably don't want this to be here
					this.sheet.setAnimation("NNM");

					let move = JanTIBookMove.createAttack(this);
					this.addCurrentAttack(move);
					this.world.addAttack(move);

					this.setActionLag(move);

					if (JanTIBookMove.startAttack)
						JanTIBookMove.startAttack(this, move, bufferInfo);
				}
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

	generalLogic() {
		if (this.currentState.name === "LNF") {
			this.attackEndable();
		}
		this.bookNN();

		if (this.currentState.name === "hitstun") {
			this.defense *= 0.99;
		} else {
			this.defense = 1;
		}

		let count = 0;
		if (this.controls.pressed("lili"))
			count++;
		if (this.controls.pressed("suli"))
			count++;
		if (this.controls.pressed("pokaLili"))
			count++;
		if (this.controls.pressed("pokaSuli"))
			count++;
		if (this.currentState.name === "MN" && count >= 3) {
			this.sheet.setAnimation("Kepeken");
			this.forceChangeState(this.states.KEPEKEN, this.states.KEPEKEN_ACTIONS);
			this.actionLag = 111;
			this.playSound(assetManager.sounds.miKepekenEIlo);
		}
		if (this.currentState.name === "kepeken")
			this.attackEndable();
	}

	//Character specific attacks
	startBook() {
		if (this.book.duration > 0 && this.book.attackDuration <= 0) {//Book attack
			let bookAttack = JanTIBook.createAttack(this);
			//this.addCurrentAttack(bookAttack);

			this.book.attackDuration = bookAttack.duration;

			this.world.addAttack(bookAttack);

			this.book.duration -= 60;
		}
	}
	bookNN() {
		if (this.book.duration > 0) {
			for (let i in this.world.attacks) {//Colliding attacks with the book
				let attack = this.world.attacks[i];
				if (attack.player !== this && this.book.dx === 0 && this.book.dy === 0 && attack.currentlyActive()) {
					if (Hitcircle.collide(attack, this.book)) {
						if (attack.player.stunFrames < 10)
							attack.player.stunFrames = 10;
						this.book.dx = attack.dir.getX() * 15;
						this.book.dy = attack.dir.getY() * 15;
						this.book.duration -= 120;
					}
				}
			}
			this.book.x += this.book.dx;
			this.book.y += this.book.dy;
			this.book.dx *= 0.92;
			this.book.dy *= 0.92;
			if (abs(this.book.dx) < 0.1)
				this.book.dx = 0;
			if (abs(this.book.dy) < 0.1)
				this.book.dy = 0;

			let angle = new Angle().setFromPoint(this.x - this.book.x, this.y - this.book.y);
			let distance = dist(this.x, this.y, this.book.x, this.book.y);
			if (distance === 0)
				distance = 0.1;
			if (distance > 71) {
				this.book.x += angle.getX() * distance / 80;
				this.book.y += angle.getY() * distance / 80;
			}
			if (distance < 69) {
				this.book.x -= angle.getX() / distance * 100;
				this.book.y -= angle.getY() / distance * 10;
			}
			if (this.targetPlayer !== null) {
				distance = dist(this.targetPlayer.x, this.targetPlayer.y, this.book.x, this.book.y);
				if (distance < 69) {
					angle = new Angle().setFromPoint(this.targetPlayer.x - this.book.x, this.targetPlayer.y - this.book.y);

					this.book.x -= angle.getX() / distance * 120;
					this.book.y -= angle.getY() / distance * 120;
				}
			}

			if (this.currentState.name === "dash" || this.currentState.name === "dash cancel") {
				this.book.x += this.dx * 0.7;
				this.book.y += this.dy * 0.7;
			}

			if (this.book.attackDuration <= 0) {
				this.book.x += 0.9 * this.dir.getX();
				this.book.y += 0.9 * this.dir.getY();
			}

			this.book.duration--;
		}
	}//wawa lipu

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2 + this.sheetRotation.value);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -80 + rumbleX, -80 + rumbleY, 160, 160);

		g.pop();

		if (this.book.duration > 0) {
			let x = this.book.x - 38 + 5 * cos(this.world.frameCount * PI / 32);
			let y = this.book.y - 38 + 5 * sin(this.world.frameCount * PI / 32);
			this.book.sheet.draw(g, x, y, 75, 75);
			g.stroke(83, 85, 216);
			g.strokeWeight(2);
			g.fill(196, 19, 41);
			g.rect(x + 20, y + 68, 35 * this.book.duration / this.book.maxDuration, 7, 15);
			if (debug.displayHitboxes)
				this.book.debugDraw(g);
		}

		//this.drawArrow(g);

		this.debugDrawDefault(g);
		/*if (debug.displayHurtboxes) {
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
		}*/
	}

	charSpecificReset() {
		this.book.duration = 0;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
		}

		if (this.book.duration > 0)
			this.book.sheet.run();
	}

	copyAssets() {
		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTISheet);
		this.book.sheet = Spritesheet.copy(assetManager.spritesheets.lipuNasaIke);
	}

	getShouldLoadSpritesheets() {
		return ["janTISheet", "janTPSeliNPL", "janTPIlo", "lipuNasaIke", "janTPUtalaLipu", "konNasa", "teloSike", "kalamaSuli", "sikeSeli", "wawaPalisa", "konNasaLanpan", "konSike", "teloLonPokaLen", "janTPTawaIlo"];
	}
	getShouldLoadSounds() {
		return ["fanTP", "fireBad", "teloLuka", "teloLukaPakala", "miKepekenEIlo"];
	}

	static getMenuImage() {
		return assetManager.images.janTIMenuImage;
	}

	static addAssets() {
		assetManager.addImage("resources/jan_pi_toki_ikeAWEN.png", "janTIMenuImage", true);

		assetManager.addSpritesheet("resources/jan_pi_toki_ike.png", "janTISheet", "//");

		assetManager.addSpritesheet("resources/LipuNasaIke.png", "lipuNasaIke", "//");

		assetManager.addSound("resources/sfx/miKepekenEIlo.wav", "miKepekenEIlo", {
			volume: 0.8
		});
	}
}

class JanTIDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPSeliNPL);
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "SL", "ML", "RS", "LS", "NPL", "dash"];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 0, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(0, 0, 140, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(40, 20, 5).setProration(3.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(12, 9).setHitStun(20, 10).setStunFrames(13, 25).setWallPushback(5, 1).setWallLaunchMod(3);
		let sweet = new AttackProperties().setDamage(45, 20, 5).setProration(3.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(6, 8).setHitStun(21, 10).setStunFrames(15, 25).setWallPushback(5, 1.6).setWallLaunchMod(10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(6).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.25);

		player.startBook();
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 10) {
			this.player.iFrames = 11;
			this.player.invTo = ["attack"];
		}
		if (this.player.targetPlayer && this.player.targetPlayer.combo > 3) {
			this.player.timerPunishHealth++;
		}
	}
}

class JanTINL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "RL", "LL", "ML", "NS", "SPL", "NN"];

		let sweet1 = new PriorityCircle(30, -30, 40, 0).setVelocity(5, 1);
		let sweet2 = new PriorityCircle(45, -20, 30, 0).setVelocity(5, 1);
		let sweet3 = new PriorityCircle(35, -5, 20, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(30).setProration(0.3, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 2, 1.1).setHitStun(17, 17).setStunFrames(11).setWallPushback(4, 2).setCancelWait(4);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(7).setActiveF(4).setEndF(13).setRotateable();
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
		this.player.turnSpeedModifier = this.player.nlTurnSpeedBoost;
	}
}

class JanTISL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "RL", "ML", "SPL", "RPL", "NN", "MN"];

		let sweet1 = new PriorityCircle(30, -50, 40, 0).setVelocity(4, 4);
		let sweet2 = new PriorityCircle(45, -40, 30, 0).setVelocity(4, 4);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(33).setProration(0.125, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 1).setHitStun(21, 10).setStunFrames(14).setWallPushback(15, 4).setCancelWait(0, 4);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(15).setActiveF(9).setEndF(21).setRotateable();
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
		if (this.getStartupF() === 1) {
			let speed = 12;
			this.player.dx += speed * this.player.dir.getX();
			this.player.dy += speed * this.player.dir.getY();
		} else if (this.currentlyActive()) {
			let speed = dist(0, 0, this.player.dx, this.player.dy);
			this.player.dx = speed * this.player.dir.getX();
			this.player.dy = speed * this.player.dir.getY();
		}
		if (this.getFromEndF() > 5) {
			this.player.dx *= 0.75;
			this.player.dy *= 0.75;
		}
		if (this.getStartupF() > 0) {
			this.player.turnSpeedModifier = -0.1;
			this.player.dir.changeValue(-PI / 7 / 15);
		} else {
			this.player.turnSpeedModifier = 0.05;
		}
	}
}

class JanTIRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "LL", "ML", "MS", "RPL", "LN"];
		let hitCancelOptions = ["RPL"];

		let sweet1 = new PriorityCircle(25, 20, 40, 0).setVelocity(5, 0);
		let sweet2 = new PriorityCircle(40, 30, 30, 0).setVelocity(5, 0);
		let sour1 = new PriorityCircle(20, 0, 30, 1).setVelocity(5, 0);
		let circles = [sweet1, sweet2, sour1];

		let sweet = new AttackProperties().setDamage(44).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(3, 3, 1.1).setHitStun(29, 15).setStunFrames(11).setWallPushback(4, 1).setCancelWait(3).setRotateVel(2, 2, true).setCancelWait(9);
		let sour = new AttackProperties().setDamage(35).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(3, 3, 1.1).setHitStun(29, 15).setStunFrames(11).setWallPushback(4, 1).setCancelWait(3).setRotateVel(2, 2, true).setCancelWait(9);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(14).setActiveF(4).setEndF(27);
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
		if (this.getStartupF() === 7) {
			let angle = new Angle(this.player.dir.value + PI / 3.5);
			let speed = 9;
			this.player.dx = angle.getX() * speed;
			this.player.dy = angle.getY() * speed;
		}
		if (this.getStartupF() === 6) {
			this.player.iFrames = 5;
			this.player.invTo = ["attack"];
		}
		if (this.getStartupF() === 1) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class JanTILL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "ML", "NS", "MS", "LPL", "NN", "MN"];

		let sweet1 = new PriorityCircle(30, -30, 40, 0).setVelocity(5, 1);
		let sweet2 = new PriorityCircle(45, -20, 30, 0).setVelocity(5, 1);
		let sour1 = new PriorityCircle(20, 0, 30, 1).setVelocity(5, 1);
		let circles = [sweet1, sweet2, sour1];

		let sweet = new AttackProperties().setDamage(34).setProration(0, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 3, 1.1).setHitStun(30, 20).setStunFrames(13).setWallPushback(4, 1).setCancelWait(7);
		let sour = new AttackProperties().setDamage(29).setProration(0, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 16).setLaunch(2, 3, 1.1).setHitStun(30, 20).setStunFrames(13).setWallPushback(4, 1).setCancelWait(7);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(10).setActiveF(4).setEndF(24);
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
		if (this.getStartupF() === 7) {
			let angle = new Angle(this.player.dir.value - PI / 6);
			let speed = 7;
			this.player.dx = angle.getX() * speed;
			this.player.dy = angle.getY() * speed;
		}
		if (this.getStartupF() === 8) {
			this.player.iFrames = 7;
			this.player.invTo = ["attack"];
		}
		if (this.getStartupF() === 1) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class JanTIML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "ML", "NPL", "SPL", "MPL", "NN", "MN", "dash"];

		let sour1 = new PriorityCircle(26, -61, 40, 0).setCircleVelocity(13, 1, -10);
		let sweet1 = new PriorityCircle(10, -36, 45, 1).setCircleVelocity(13, 1, -10);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(36).setProration(1, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2.5).setLaunch(3, 1, 0.95).setHitStun(23, 10).setCancelWait(6).setStunFrames(11).setWallPushback(2, 1);
		let sour = new AttackProperties().setDamage(28).setProration(1, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(4, 1, 0.95).setHitStun(22, 10).setCancelWait(6).setStunFrames(10).setWallPushback(2, 1);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(9).setActiveF(4).setEndF(13);
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
		if (this.currentlyActive()) {
			this.player.dir.changeValue(0.1);
		}
	}
}

class JanTINS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "LL", "ML", "LS", "RS", "MS", "SPL", "NPS", "NN", "MN"];

		let sweet1 = new PriorityCircle(30, -30, 40, 0).setVelocity(3, 0.5);
		let sweet2 = new PriorityCircle(45, -20, 30, 0).setVelocity(3, 0.5);
		let sweet3 = new PriorityCircle(35, -5, 30, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(35).setProration(0.4, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3.5, 3, 1.1).setHitStun(25, 10).setStunFrames(11).setWallPushback(4, 1).setCancelWait(5, 8).setNormalizeHitStun();
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(11).setActiveF(8).setEndF(11).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.6);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 4) {
			let speed = 7;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.getFromStartupF() > 14) {
			this.player.dx *= 0.65;
			this.player.dy *= 0.65;
		}
	}
}

class JanTISS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.konSike);
	}

	static createAttack(player) {
		let cancelOptions = ["ML", "SL", "NPL", "LPL", "RPL", "NN", "RN", "LN", "MN"];

		let sweet1 = new PriorityCircle(50, 0, 70, 0).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(80, 0, 65, 0).setVelocity(1, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(18, -3).setProration(-0.5, 1).setChip(0.15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 5, 0.5).setHitStun(32, 20).setStunFrames(6).setNormalizeHitStun().setWallPushback(2, 4);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.fanTP);
		sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(23).setActiveF(12).setEndF(24).setMulti(4, 2, 1).setRotateable();
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

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.counterHittable = true;
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			this.sheet.run();
		}
		if (this.getStartupF() < 5 && this.getStartupF() > 0) {
			this.player.dx = this.player.dir.getX() * 5;
			this.player.dy = this.player.dir.getY() * 5;
		} else {
			this.player.dx *= 0.94;
			this.player.dy *= 0.94;
		}
	}
}

class JanTIRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.teloLonPokaLen);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];
		let hitCancelOptions = ["NPL"];

		let sweet1 = new PriorityCircle(30, 75, 30, 0).setVelocity(1.5, -6);
		let sweet2 = new PriorityCircle(45, 75, 30, 0).setVelocity(1.5, -6);
		let sweet3 = new PriorityCircle(60, 75, 30, 0).setVelocity(1.5, -6);
		let sweet4 = new PriorityCircle(75, 75, 30, 0).setVelocity(1.5, -6);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(50).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(7).setHitStun(35, 27).setStunFrames(13).setRotateVel(7, 7, true).setRotateSlowDown(0.25, 60, true).setNormalizeHitStun();
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

			this.sheet.draw(g, -128, -128, 256, 256);

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
			let angle = new Angle(this.player.dir.value + PI / 3.5);
			this.player.dx = angle.getX() * 8;
			this.player.dy = angle.getY() * 8;
		} else if (this.getFromStartupF() > 19 && this.getFromStartupF() < 33) {
			let angle = new Angle(this.player.dir.value - PI / 3.5);
			this.player.dx = angle.getX() * 7;
			this.player.dy = angle.getY() * 7;
		} else {
			this.player.dx *= 0.92;
			this.player.dy *= 0.92;
		}
		//if (this.getFromActiveF() === 1) {
		//	this.player.iFrames = 8;
		//	this.player.invTo = ["attack"];
		//}
		if (this.getStartupF() < 4 && this.getFromEndF() < 14)
			this.sheet.run();
	}
}

class JanTILS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.teloLonPokaLen);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];
		let hitCancelOptions = ["NPL", "RS"];

		let sweet1 = new PriorityCircle(30, -75, 30, 0).setVelocity(1.5, 6);
		let sweet2 = new PriorityCircle(45, -75, 30, 0).setVelocity(1.5, 6);
		let sweet3 = new PriorityCircle(60, -75, 30, 0).setVelocity(1.5, 6);
		let sweet4 = new PriorityCircle(75, -75, 30, 0).setVelocity(1.5, 6);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(55).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 3).setLaunch(6).setHitStun(25, 25).setStunFrames(13).setRotateVel(-7, -7, true).setRotateSlowDown(0.25, 60, true).setNormalizeHitStun();
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
			g.scale(1, -1);

			this.sheet.draw(g, -128, -128, 256, 256);

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
			let angle = new Angle(this.player.dir.value - PI / 3.9);
			this.player.dx = angle.getX() * 7;
			this.player.dy = angle.getY() * 7;
		} else if (this.getFromStartupF() > 16 && this.getFromStartupF() < 30) {
			let angle = new Angle(this.player.dir.value + PI / 4);
			this.player.dx = angle.getX() * 5;
			this.player.dy = angle.getY() * 5;
		} else {
			this.player.dx *= 0.95;
			this.player.dy *= 0.95;
		}
		//if (this.getFromActiveF() === 1) {
		//	this.player.iFrames = 8;
		//	this.player.invTo = ["attack"];
		//}

		if (this.getStartupF() < 4 && this.getFromEndF() < 15)
			this.sheet.run();
	}
}

class JanTIMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "SS", "SPL", "SPS", "NN"];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(20, 0, 80, 1).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(40, 0, 50, 0).setVelocity(1, 0);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(40, 14, 8).setProration(-0.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI).setLaunch(4, 2).setHitStun(21, 20).setStunFrames(14).setCancelWait(4);
		let sour = new AttackProperties().setDamage(34, 11, 8).setProration(-0.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI).setLaunch(5, 2).setHitStun(21, 20).setStunFrames(14).setCancelWait(4);
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

			this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 4 && this.getFromEndF() < 7) {
			this.sheet.run();
		}
		if (this.getFromStartupF() === 7) {
			this.player.invTo = ["grab", "attack"];
			this.player.iFrames = 14;
		}
		if (this.getFromStartupF() === 10) {
			this.player.dx = this.player.dir.getX() * -12;
			this.player.dy = this.player.dir.getY() * -12;
		}
		if (this.getFromStartupF() === 18) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class JanTINPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPSeliNPL);
		this.sheet.frameRate *= 1.5;
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "RL", "LL", "ML", "SS", "RS", "LS", "NPL", "SPL", "RPL", "MPL", "NN", "LN", "NPS", "SPS", "dash"];
		let hitCancelOptions = ["suli", "poka lili", "poka suli", "nasa"];

		let sweet1 = new PriorityCircle(55, 0, 10, 0);
		let sour1 = new PriorityCircle(65, 0, 10, 1).setVelocity(7.5, 0);
		let sour2 = new PriorityCircle(65, 10, 10, 1).setVelocity(6.4, 2.6);
		let sour3 = new PriorityCircle(65, -10, 10, 1).setVelocity(6.4, -2.6);
		let circles = [sweet1, sour1, sour2, sour3];

		let sweet = new AttackProperties().setDamage(30).setProration(-0.1, 1).setCancelOptions(cancelOptions, hitCancelOptions).setCancelWait(3).setAngleValue(player.dir.value).setLaunch(4, 3).setHitStun(28, 16).setStunFrames(15).setWallPushback(2);
		let sour = new AttackProperties().setDamage(23).setProration(-0.1, 1).setCancelOptions(cancelOptions, hitCancelOptions).setCancelWait(3).setAngleValue(player.dir.value).setLaunch(5, 3.5).setHitStun(26, 15).setStunFrames(14).setWallPushback(2.1);
		let prop = [sweet, sour];

		sweet.playSound(player.world, assetManager.sounds.fireBad);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(12).setActiveF(8).setEndF(15);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.startBook();
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() <= 3) {
			let x = cos(this.dir.value);
			let y = sin(this.dir.value);

			g.push();
			g.translate(this.x + 55 * x, this.y + 55 * y);
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -64, -64, 128, 128);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 8) {
			this.player.dx -= this.player.dir.getX() * 1;
			this.player.dy -= this.player.dir.getY() * 1;
		}

		if (this.player.stunFrames <= 0 && this.getStartupF() <= 0 && this.getFromEndF() <= 3) {
			this.sheet.run();
			//this.sheet.run();
		}

		if (this.getActiveF() <= 3) {
			this.circles[1].dx = 0;
			this.circles[1].dy = 0;

			this.circles[2].dx = 0;
			this.circles[2].dy = 0;

			this.circles[3].dx = 0;
			this.circles[3].dy = 0;
		}

		this.player.dx *= 0.96;
		this.player.dy *= 0.96;
	}
}

class JanTISPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";

		this.tracking = true;
		this.sheet = Spritesheet.copy(assetManager.spritesheets.konNasa);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(50, -20, 35, 0).setVelocity(4.5, -4);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(35, undefined, 10).setProration(0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2).setHitStun(21, 5).setStunFrames(10).setAngleTypes("vel", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(15).setActiveF(60).setEndF(25).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (player.currentAttackReferences.length <= 1)
			player.startBook();
	}

	draw(g) {
		if (this.currentlyActive()) {

			g.push();
			g.translate(this.circleX(0), this.circleY(0));
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -75, -75, 150, 150);


			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.circles[0].dx *= 0.99;
		this.circles[0].dy *= 0.99;
		if (this.player.currentState.name === "block" || this.player.currentState.name === "hitstun")
			this.tracking = false;
		if (this.player.targetPlayer && this.tracking) {
			let angle = new Angle().setFromPoint(this.player.targetPlayer.x - this.circleX(0), this.player.targetPlayer.y - this.circleY(0));
			this.circles[0].dx += angle.getX() / 3 * (this.getFromActiveF() / 35 + 0.1);
			this.circles[0].dy += angle.getY() / 3 * (this.getFromActiveF() / 35 + 0.1);
			if (dist(0, 0, this.circles[0].dx, this.circles[0].dy) > 7) {
				this.circles[0].dx *= 0.9;
				this.circles[0].dy *= 0.9;
			}
		}
		if (this.getStartupF() > 0) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
		if (this.player.stunFrames <= 0 && this.currentlyActive())
			this.sheet.run();
		if (this.getFromStartupF() < 10) {
			this.player.book.x += this.dir.getX() * 6;
			this.player.book.y += this.dir.getY() * 6;
		} else if (this.getFromStartupF() < 30) {
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		}
	}
}

class JanTIRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let cancelOptions = ["RN", "NN"];
		let hitCancelOptions = ["attack", "dash"];

		let sour1 = new PriorityCircle(70, 60, 80, 0).setVelocity(1, -0.7);
		let sweet1 = new PriorityCircle(70, 60, 50, 1).setVelocity(1, -0.7);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(70).setProration(0.3, 1).setCancelOptions(cancelOptions, hitCancelOptions).setLaunch(3, 4, 0.8).setHitStun(25, 16).setCancelWait(12).setStunFrames(15).setAngleTypes("direct", "vel");
		let sour = new AttackProperties().setDamage(68).setProration(0.3, 1).setCancelOptions(cancelOptions, hitCancelOptions).setLaunch(3, 4, 0.8).setHitStun(25, 16).setCancelWait(12).setStunFrames(15).setAngleTypes("direct", "vel");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setStartupF(15).setActiveF(5).setEndF(19).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.translate(70, 60);

			this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 4) {
			let angle = new Angle(this.player.dir.value - PI / 1.8);
			this.player.dx += angle.getX() * 4;
			this.player.dy += angle.getY() * 4;
		}

		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			this.sheet.run();
		}
		let left = new Angle().setValue(this.dir.value + PI / 2);
		if (this.getFromStartupF() < 8) {
			this.player.book.x += left.getX() * 6;
			this.player.book.y += left.getY() * 6;
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		} else if (this.getFromStartupF() < 30) {
			this.player.book.x += left.getX() * 2;
			this.player.book.y += left.getY() * 2;
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		}

		this.player.dx *= 0.95;
		this.player.dy *= 0.95;
	}
}

class JanTILPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.sikeSeli);
	}

	static createAttack(player) {
		let cancelOptions = ["RPL", "NN"];
		let hitCancelOptions = ["NL", "ML", "NPL", "SPL", "MPL", "LPS", "MN", "dash"];

		let sour1 = new PriorityCircle(70, -60, 80, 0).setVelocity(1, 1);
		let sweet1 = new PriorityCircle(70, -60, 50, 1).setVelocity(1, 1);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(50).setProration(0.1, 1).setCancelOptions(cancelOptions, hitCancelOptions).setLaunch(3, 2, 0.9).setHitStun(25, 20).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "vel");
		let sour = new AttackProperties().setDamage(48).setProration(0.1, 1).setCancelOptions(cancelOptions, hitCancelOptions).setLaunch(3, 2, 0.9).setHitStun(25, 20).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "vel");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(14).setActiveF(5).setEndF(18).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);
			g.translate(70, -60);

			this.sheet.draw(g, -45, -45, 90, 90);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 4) {
			let angle = new Angle(this.player.dir.value + PI / 1.8);
			this.player.dx += angle.getX() * 4;
			this.player.dy += angle.getY() * 4;
		}

		if (this.getStartupF() <= 4 && this.getFromEndF() <= 7) {
			this.sheet.run();
		}
		let right = new Angle().setValue(this.dir.value - PI / 2);
		if (this.getFromStartupF() < 8) {
			this.player.book.x += right.getX() * 6;
			this.player.book.y += right.getY() * 6;
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		} else if (this.getFromStartupF() < 30) {
			this.player.book.x += right.getX() * 2;
			this.player.book.y += right.getY() * 2;
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		}

		this.player.dx *= 0.95;
		this.player.dy *= 0.95;
	}
}

class JanTIMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.teloSike);
	}

	static createAttack(player) {
		let cancelOptions = ["ML", "NPL", "RPL", "MPS", "NN"];
		let hitCancelOptions = ["dash"];

		let sour1 = new PriorityCircle(55, 55, 50, 0).setCircleVelocity(64, 1);
		let sour2 = new PriorityCircle(-55, -55, 50, 0).setCircleVelocity(64, 1);
		let sour3 = new PriorityCircle(-77, 0, 50, 0).setCircleVelocity(64, 1);
		let sour4 = new PriorityCircle(77, 0, 50, 0).setCircleVelocity(64, 1);
		let sour5 = new PriorityCircle(55, -55, 50, 0).setCircleVelocity(64, 1);
		let sour6 = new PriorityCircle(-55, 55, 50, 0).setCircleVelocity(64, 1);
		let sour7 = new PriorityCircle(0, 77, 50, 0).setCircleVelocity(64, 1);
		let sour8 = new PriorityCircle(0, -77, 50, 0).setCircleVelocity(64, 1);
		let circles = [sour1, sour2, sour3, sour4, sour5, sour6, sour7, sour8];

		let sour = new AttackProperties().setDamage(49).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(6, 0, 0.85).setHitStun(25, 18).setStunFrames(13).setAngleTypes("vel", "vel").setRotateVel(-4, -3, true).setRotateSlowDown(0.25, 60, true).setCancelWait(0, 5);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(4).setStartupF(12).setActiveF(6).setEndF(17);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.startBook();
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 7) {
			g.push();
			g.translate(this.x, this.y);
			//g.rotate(this.dir.value);
			g.scale(1, -1);

			let size = 215;
			this.sheet.draw(g, -size / 2, -size / 2, size, size);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue(PI / 10);
		} else if (this.getFromEndF() < 4 && this.getFromEndF() > 0) {
			this.player.dir.changeValue(PI / 15);
		}
		if (this.player.stunFrames <= 0 && this.startupOver() && this.getFromEndF() < 7)
			this.sheet.run();
	}
}

class JanTINPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPSeliNPL);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(50, 0, 20, 0);
		let sour1 = new PriorityCircle(60, 0, 20, 1).setVelocity(6, 0);
		let sour2 = new PriorityCircle(60, 10, 20, 1).setVelocity(4.8, 1.8);
		let sour3 = new PriorityCircle(60, -10, 20, 1).setVelocity(4.8, -1.8);
		let circles = [sweet1, sour1, sour2, sour3];

		let sweet = new AttackProperties().setDamage(80).setProration(-0.725, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 3.1).setHitStun(50, 14).setStunFrames(15);
		let sour = new AttackProperties().setDamage(73).setProration(-0.725, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 3).setHitStun(48, 12).setStunFrames(13);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(19).setActiveF(16).setEndF(10);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.currentlyActive()) {
			let x = cos(this.dir.value);
			let y = sin(this.dir.value);

			g.push();
			g.translate(this.x + 50 * x, this.y + 50 * y);
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -96, -96, 192, 192);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 8) {
			this.player.dx -= this.player.dir.getX() * 5;
			this.player.dy -= this.player.dir.getY() * 5;
		}
		
		if (this.player.stunFrames <= 0 && this.currentlyActive())
			this.sheet.run();

		if (this.getActiveF() <= 6) {
			this.circles[1].dx = 0;
			this.circles[1].dy = 0;

			this.circles[2].dx = 0;
			this.circles[2].dy = 0;

			this.circles[3].dx = 0;
			this.circles[3].dy = 0;
		}

		this.player.dx *= 0.96;
		this.player.dy *= 0.96;
	}
}

class JanTISPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";

		this.tracking = true;
		this.sheet = Spritesheet.copy(assetManager.spritesheets.konNasa);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(60, -30, 50, 0).setVelocity(2, -2);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(55).setProration(0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3).setHitStun(36, 5).setStunFrames(15).setAngleTypes("vel", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(29).setActiveF(90).setEndF(23).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.currentlyActive()) {

			g.push();
			g.translate(this.circleX(0), this.circleY(0));
			g.rotate(this.dir.value + PI / 2);

			this.sheet.draw(g, -106, -106, 213, 213);


			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.circles[0].dx *= 0.99;
		this.circles[0].dy *= 0.99;
		if (this.player.currentState.name === "block" || this.player.currentState.name === "hitstun")
			this.tracking = false;
		if (this.player.targetPlayer && this.tracking) {
			let angle = new Angle().setFromPoint(this.player.targetPlayer.x - this.circleX(0), this.player.targetPlayer.y - this.circleY(0));
			this.circles[0].dx += angle.getX() / 6 * (this.getFromActiveF() / 50 + 0.1);
			this.circles[0].dy += angle.getY() / 6 * (this.getFromActiveF() / 50 + 0.1);
			if (dist(0, 0, this.circles[0].dx, this.circles[0].dy) > 3) {
				this.circles[0].dx *= 0.9;
				this.circles[0].dy *= 0.9;
			}
		}
		if (this.getStartupF() > 0) {
			this.x = this.player.x;
			this.y = this.player.y;
		}
		if (this.player.stunFrames <= 0 && this.currentlyActive())
			this.sheet.run();
		if (this.getFromStartupF() < 10) {
			this.player.book.x += this.dir.getX() * 8;
			this.player.book.y += this.dir.getY() * 8;
		} else if (this.getFromStartupF() < 40) {
			this.player.book.x += this.dir.getX() * 2;
			this.player.book.y += this.dir.getY() * 2;
		}
	}
}

class JanTIRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "NPL", "LPL", "MPL", "MS", "NN", "MN"];

		let sweet1 = new PriorityCircle(35, 58, 40, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(65, 83, 40, 0).setVelocity(0.1, 0);
		let sweeter1 = new PriorityCircle(95, 108, 40, 1).setVelocity(0.1, 0);
		let sweeter2 = new PriorityCircle(125, 133, 40, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweeter1, sweeter2];

		let sweet = new AttackProperties().setDamage(30).setProration(-0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI * 0.6).setLaunch(6, 2).setHitStun(39, 13).setStunFrames(15).setCancelWait(20);
		let sweeter = new AttackProperties().setDamage(30).setProration(-0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI * 0.6).setLaunch(9, 2).setHitStun(39, 13).setStunFrames(15).setCancelWait(20);
		let prop = [sweet, sweeter];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(19).setActiveF(6).setEndF(34);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.getFromEndF() < 10 && this.startupOver()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);

			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + PI * 0.22);

			this.sheet.draw(g, 30, -5, 180, 50);

			g.pop();
		}
	}

	logic() {
		if (this.player.stunFrames <= 0 && this.getFromEndF() < 10 && this.startupOver())
			this.sheet.run();
	}
}

class JanTILPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "NPL", "RPL", "MPL", "MS", "NN", "MN"];

		let sweet1 = new PriorityCircle(20, -50, 40, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(60, -65, 40, 0).setVelocity(0.1, 0);
		let sweeter1 = new PriorityCircle(100, -80, 40, 1).setVelocity(0.1, 0);
		let sweeter2 = new PriorityCircle(140, -95, 40, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweeter1, sweeter2];

		let sweet = new AttackProperties().setDamage(45).setProration(-0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI * 0.8).setLaunch(5, 0.5).setHitStun(43, 13).setStunFrames(15).setCancelWait(20);
		let sweeter = new AttackProperties().setDamage(45).setProration(-0.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI * 0.8).setLaunch(6, 0.5).setHitStun(43, 13).setStunFrames(15).setCancelWait(20);
		let prop = [sweet, sweeter];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(18).setActiveF(6).setEndF(34);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.getFromEndF() < 10 && this.startupOver()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);

			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI * 0.11);

			this.sheet.draw(g, 10, -65, 180, 50);

			g.pop();
		}
	}

	logic() {
		if (this.player.stunFrames <= 0 && this.getFromEndF() < 10 && this.startupOver())
			this.sheet.run();
	}
}

class JanTIMPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.kalamaSuli);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NN", "dash"];

		let sour1 = new PriorityCircle(0, 0, 250, 1);
		let sweet1 = new PriorityCircle(0, 0, 150, 0);
		let circles = [sweet1, sour1];

		let sour = new AttackProperties().setDamage(19, 19, 6).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(13, 0.1, 0.25).setHitStun(29, 7).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "direct");
		let sweet = new AttackProperties().setDamage(20, 19, 6).setProration(0, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(15, 0.1, 0.5).setHitStun(32, 7).setCancelWait(5).setStunFrames(15).setAngleTypes("direct", "direct");
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(17).setActiveF(4).setEndF(30);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
		player.invTo = ["grab"];
		player.iFrames = 20;

		player.startBook();
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 14) {
			g.push();
			g.translate(this.x, this.y);
			//g.rotate(this.dir.value);

			let size = 250;
			this.sheet.draw(g, -size / 2, -size / 2, size, size);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.stunFrames <= 0 && this.startupOver() && this.getFromEndF() < 14)
			this.sheet.run();
	}
}

class JanTINN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(34);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.4);
	}

	logic() {
		this.player.counterHittable = true;
		this.dx *= 0.95;
		this.dy *= 0.95;
		if (this.getStartupF() === 1) {
			this.player.book.duration = this.player.book.maxDuration;
			let rand = this.player.dir.value + PI;
			this.player.book.x = this.player.x + 50 * cos(rand);
			this.player.book.y = this.player.y + 50 * sin(rand);
			this.player.book.dx = 0;
			this.player.book.dy = 0;
		}
		this.player.turnSpeedModifier = -1;
	}
}

class JanTISN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(40, 10, 30, 0);
		let sour2 = new PriorityCircle(35, 30, 30, 0);
		let sour3 = new PriorityCircle(35, -10, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(50).setGrab(65).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
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

class JanTIRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.konNasaLanpan);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(55, 50, 70, 0).setVelocity(0.1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(10, 0).setProration(-5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0.5, 0).setHitStun(23, 15).setStunFrames(0).setNormalizeHitStun().setRotateSlowDown(0.25, 420).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(17).setActiveF(8).setEndF(30).setFollow(false).setProjectile();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.startBook();
	}

	draw(g) {
		if (this.getStartupF() <= 8 && this.getFromEndF() <= 11) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 0, -15, 120, 120);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 8 && this.getFromEndF() <= 11) {
			this.sheet.run();

			let sideAngle = atan2(50, 95);
			let attackX = this.x + cos(this.dir.value + sideAngle) * 87;
			let attackY = this.y + sin(this.dir.value + sideAngle) * 87;
			let distance = dist(attackX, attackY, this.player.book.x, this.player.book.y);

			if (distance < 55) {
				if (this.player.book.duration > 0 && this.player.book.duration < this.player.book.maxDuration)
					this.player.book.duration += 4;
				if (this.player.targetPlayer && this.player.book.duration > 0) {
					let angle = new Angle().setFromPoint(this.player.targetPlayer.x - this.x, this.player.targetPlayer.y - this.y);
					let speed = this.getActiveF() + 2;
					this.x += angle.getX() * speed;
					this.y += angle.getY() * speed;
				}
			}
			if (distance > 10) {
				let dir = new Angle().setFromPoint(attackX - this.player.book.x, attackY - this.player.book.y);
				//dir.changeValue(-PI * 0.15);
				let speed = 5;
				if (distance < 30)
					speed = 2.5;
				this.player.book.x += dir.getX() * speed;
				this.player.book.y += dir.getY() * speed;
			}
		}
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.slowWalkFrames = 420;
			this.player.targetPlayer.slowWalk = 0.8;
		}
	}
}

class JanTILN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPIlo);
		this.trail = Spritesheet.copy(assetManager.spritesheets.janTPTawaIlo);

		this.held = true;

		this.power = 30;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(75, 0, 60, 0).setVelocity(1, 0.6);
		let sweet2 = new PriorityCircle(60, 40, 60, 0).setVelocity(1, 0.6);
		let sweet3 = new PriorityCircle(60, -40, 60, 0).setVelocity(1, 0.6);
		let sweet4 = new PriorityCircle(30, 65, 60, 0).setVelocity(1, 0.6);
		let sweet5 = new PriorityCircle(30, -65, 60, 0).setVelocity(1, 0.6);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(45).setProration(0, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 6, 1.1).setHitStun(30, 9).setStunFrames(14).setNormalizeHitStun();
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
			g.rotate(this.dir.value - PI * 0.45);
			g.translate(80, 0);

			this.sheet.draw(g, -40, -40, 80, 80);

			g.pop();
		} else if (this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + PI * 0.55);
			g.translate(80, 0);

			this.sheet.draw(g, -40, -40, 80, 80);

			g.pop();
		}
		if (this.getFromActiveF() < 8 && this.getStartupF() <= 0) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.trail.draw(g, -10, -112, 144, 224);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromActiveF() < 8 && this.getStartupF() <= 0)
			this.trail.run();
		if (!this.player.controls.held("nasa"))
			this.held = false;
		if (this.getStartupF() === 5 && this.held && this.power < 60) {
			this.setStartupF(this.getStartupF() + 1);
			this.player.actionLag++;
			this.power += 2;
			this.properties[0].setDamage(this.properties[0].damage + 3);
		}
		if (this.getStartupF() === 4) {
			this.player.sheet.setAnimation("LNF");//This is the animation for the actual swing
			this.player.sheet.currentSubFrames += this.player.sheet.frameRate;
			this.player.setStateIgnore(this.player.states.LNF);
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

class JanTIMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPIlo);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];
		if (player.book.duration > 0)
			hitCancelOptions.push("NN");

		let sour1 = new PriorityCircle(0, -50, 40, 0).setVelocity(0.01, 0);//.setCircleVelocity(16, -1);//20, 60
		let sweet1 = new PriorityCircle(20, -85, 40, 1).setVelocity(0.01, 0);//.setCircleVelocity(16, -1);//20, 95
		let sweet2 = new PriorityCircle(-20, -85, 40, 1).setVelocity(0.01, 0);//.setCircleVelocity(16, -1);//-20, 95
		let circles = [sour1, sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(60).setProration(0.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 6, PI / 6).setLaunch(15).setHitStun(33, 5).setStunFrames(15, 17).setStaggerFrames(0, 10);
		let sour = new AttackProperties().setDamage(50).setProration(0.5, 1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 6, PI / 6).setLaunch(14).setHitStun(32, 5).setStunFrames(15, 18).setStaggerFrames(0, 10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(15).setActiveF(12).setEndF(25).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);
	}

	draw(g) {
		if (this.currentlyActive() || this.getStartupF() > 0) {
			let x = cos(this.dir.value - PI / 2);
			let y = sin(this.dir.value - PI / 2);

			g.push();
			g.translate(this.x + 85 * x, this.y + 85 * y);
			g.rotate(this.dir.value - PI / 2);

			this.sheet.draw(g, -35, -35, 70, 70);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.counterHittable = true;
		if (this.currentlyActive()) {
			if (this.player.stunFrames <= 0)
				this.sheet.run();
		} else if (this.getStartupF() <= 0 && this.getFromEndF() < 8) {
			this.dir.value += PI / 10;
		}
		if (this.getStartupF() <= 0 && this.getFromEndF() < 8) {
			this.dir.value += (8 - this.getFromEndF()) / 13;
		}
		if (this.hitPlayerBool) {
			this.player.dx *= 0.92;
			this.player.dy *= 0.92;
		}
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 12;
		}
	}
}

class JanTIBook extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "BOOK";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janTPUtalaLipu);
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(0, 0, 40, 0);
		let sour2 = new PriorityCircle(20, 15, 35, 0);
		let sour3 = new PriorityCircle(50, -5, 25, 0);
		let sweet1 = new PriorityCircle(70, 0, 10, 1);
		let circles = [sour1, sour2, sour3, sweet1];

		let sour = new AttackProperties().setDamage(54, 0, 8).setProration(-1.9375, 1).setAngleValue(player.dir.value).setLaunch(0, 0).setHitStun(29, 23).setStunFrames(5);
		let sweet = new AttackProperties().setDamage(59, 0, 8).setProration(-1.9375, 1).setAngleValue(player.dir.value).setLaunch(0, 0).setHitStun(31, 25).setStunFrames(7);
		let prop = [sour, sweet];

		let output = new this(player, circles, prop).setVelocity(0.1, 0).setClashPriority(6).setFollow(false).setStartupF(30).setActiveF(5).setEndF(5);

		let angleDifference = 0;
		if (player.targetPlayer) {
			let directAngle = new Angle().setFromPoint(player.targetPlayer.x - player.book.x, player.targetPlayer.y - player.book.y);
			angleDifference = Angle.compare(player.dir, directAngle);
		}
		let outputAngle = new Angle(player.dir.value + angleDifference / 2);

		output.rotateTo(outputAngle);
		output.dir = outputAngle;
		output.x = player.book.x;
		output.y = player.book.y;

		return output;
	}

	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value);

		let size = 170;
		this.sheet.draw(g, -size / 2, -size / 2, size, size);

		g.pop();

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.stunFrames <= 0 && this.getStartupF() <= 15)
			this.sheet.run();

		if (this.player.book.attackDuration > 0)
			this.player.book.attackDuration--;
		this.x = this.player.book.x;
		this.y = this.player.book.y;
	}

	cleanup() {
		this.player.book.attackDuration = 0;
	}
}

class JanTIBookMove extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "BOOK_MOVE";
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(12).setActiveF(90).setEndF(4).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		if (player.targetPlayer && player.targetPlayer.hitStun > 0) {
			player.targetPlayer.stunFrames = max(player.targetPlayer.stunFrames, 15);
		}
	}

	logic() {
		if (this.currentlyActive() && this.player.book.duration > 0 && this.player.targetPlayer !== null) {
			let dir = new Angle().setFromPoint((this.player.book.x + this.player.x) / 2 - this.player.x, (this.player.book.y + this.player.y) / 2 - this.player.y);
			dir.value -= PI / 2.8;
			let speed = 4 * constrain(dist(this.player.book.x, this.player.book.y, this.player.x, this.player.y) / 50, 0.5, 2);
			this.player.x += dir.getX() * speed + this.player.dir.getX() * 2;
			this.player.y += dir.getY() * speed + this.player.dir.getY() * 2;

			this.player.book.x -= dir.getX() * speed * 2.2 - this.player.dir.getX() * 2;
			this.player.book.y -= dir.getY() * speed * 2.2 - this.player.dir.getY() * 2;
			this.player.book.duration -= 3;
		}
		if (this.getStartupF() > 0) {
			this.player.turnSpeedModifier = 0.1;
		}
	}
}

characters.push(JanTI);