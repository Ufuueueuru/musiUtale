class Luke extends Player {
	constructor() {
		super([
			new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)
		]);

		this.hurtboxes["hitstun"] = [
			[new Circle(0, 0, 65),
			new ICircle(10, 48, 27),
			new ICircle(10, -48, 27)]
		];

		this.hurtboxes["grab"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["grabbed"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["lipuLili"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["lipuSuli"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["rightRoll"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["neutralRoll"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["leftRoll"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -35, 25)]
		];

		this.hurtboxes["walk"] = [
			[new Circle(1, 1, 65),
			new ICircle(36, 33, 25),
			new ICircle(19, -39, 25)],
			[new Circle(0, 1, 63),
			new ICircle(42, 29, 25),
			new ICircle(13, -39, 25)],
			[new Circle(1, 2, 63),
			new ICircle(42, 28, 25),
			new ICircle(12, -39, 25)],
			[new Circle(3, 0, 65),
			new ICircle(39, 31, 25),
			new ICircle(16, -38, 25)],
			[new Circle(4, 1, 65),
			new ICircle(28, 39, 25),
			new ICircle(25, -37, 25)],
			[new Circle(2, 0, 64),
			new ICircle(24, 41, 25),
			new ICircle(34, -37, 25)],
			[new Circle(0, 0, 64),
			new ICircle(20, 44, 25),
			new ICircle(40, -33, 25)],
			[new Circle(0, 0, 64),
			new ICircle(19, 45, 25),
			new ICircle(43, -30, 25)],
			[new Circle(0, 0, 64),
			new ICircle(23, 41, 25),
			new ICircle(38, -33, 25)],
			[new Circle(2, 1, 66),
			new ICircle(30, 38, 25),
			new ICircle(30, -37, 25)]
		];

		this.hurtboxes["dash attack"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(27, -45, 25)],
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(15, -52, 25)],
			[new Circle(2, 0, 65),
			new ICircle(-30, 30, 25),
			new ICircle(44, 0, 25)],
			[new Circle(9, 0, 65),
			new ICircle(-3, 40, 25),
			new ICircle(-3, -40, 25)],
			[new Circle(6, 6, 65),
			new ICircle(-37, -16, 25),
			new ICircle(43, -25, 25)],
			[new Circle(-4, 7, 65),
			new ICircle(-29, -35, 25),
			new ICircle(46, -10, 25)],
			[new Circle(-3, 6, 65),
			new ICircle(-11, -44, 25),
			new ICircle(46, 0, 25)],
			[new Circle(-3, 3, 65),
			new ICircle(9, -44, 25),
			new ICircle(46, 9, 25)],
			[new Circle(-3, 0, 65),
			new ICircle(22, -42, 25),
			new ICircle(42, 19, 25)],
			[new Circle(-2, 0, 66),
			new ICircle(35, -31, 25),
			new ICircle(38, 29, 25)],
			[new Circle(0, 0, 66),
			new ICircle(34, -32, 25),
			new ICircle(28, 40, 25)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(0, 0, 65),
			new ICircle(29, 41, 25),
			new ICircle(21, -39, 25),
			new ICircle(42, -34, 25)],
			[new Circle(0, 0, 68),
			new ICircle(29, 41, 25),
			new ICircle(55, -20, 22),
			new ICircle(75, -13, 20)],
			[new Circle(5, 0, 70),
			new ICircle(29, 41, 25),
			new ICircle(55, -19, 21),
			new ICircle(75, -11, 20)],
			[new Circle(5, 0, 69),
			new ICircle(29, 41, 25),
			new ICircle(52, -20, 22),
			new ICircle(71, -13, 19)],
			[new Circle(3, 1, 68),
			new ICircle(29, 41, 25),
			new ICircle(48, -25, 22),
			new ICircle(65, -17, 17)],
			[new Circle(3, 1, 66),
			new ICircle(29, 41, 25),
			new ICircle(41, -30, 21),
			new ICircle(58, -24, 17)],
			[new Circle(2, 0, 65),
			new ICircle(29, 41, 25),
			new ICircle(35, -34, 21),
			new ICircle(55, -30, 17)],
			[new Circle(1, 0, 63),
			new ICircle(29, 41, 25),
			new ICircle(18, -39, 20),
			new ICircle(39, -35, 20)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(0, 0, 65),
			new ICircle(26, 41, 25),
			new ICircle(19, -38, 25)],
			[new Circle(0, 0, 65),
			new ICircle(15, 45, 25),
			new ICircle(19, -38, 25)],
			[new Circle(3, 0, 65),
			new ICircle(30, 42, 25),
			new ICircle(28, -36, 25),
			new ICircle(52, -23, 21),
			new ICircle(73, -13, 22)],
			[new Circle(8, 1, 65),
			new ICircle(38, 43, 25),
			new ICircle(53, -20, 25),
			new ICircle(58, 30, 29),
			new ICircle(78, 16, 25)],
			[new Circle(8, 0, 65),
			new ICircle(55, 21, 25),
			new ICircle(51, -21, 25)],
			[new Circle(6, 3, 65),
			new ICircle(51, 24, 25),
			new ICircle(46, -27, 25)],
			[new Circle(5, 2, 65),
			new ICircle(47, 31, 25),
			new ICircle(41, -30, 25)],
			[new Circle(3, 1, 65),
			new ICircle(44, 32, 25),
			new ICircle(32, -34, 25)],
			[new Circle(2, 1, 65),
			new ICircle(39, 36, 25),
			new ICircle(30, -35, 25)],
			[new Circle(2, 2, 65),
			new ICircle(32, 38, 25),
			new ICircle(29, -36, 25)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 0, 65),
			new ICircle(38, 42, 25),
			new ICircle(27, -39, 25)],
			[new Circle(0, 0, 65),
			new ICircle(46, 39, 25),
			new ICircle(20, -41, 25)],
			[new Circle(6, 3, 65),
			new ICircle(53, 26, 36),
			new ICircle(-33, -7, 25),
			new ICircle(60, -9, 35),
			new ICircle(52, -42, 35)],
			[new Circle(4, 3, 65),
			new ICircle(49, 24, 25),
			new ICircle(-22, -42, 25)],
			[new Circle(3, 2, 65),
			new ICircle(45, 28, 25),
			new ICircle(-3, -46, 25)],
			[new Circle(3, 2, 65),
			new ICircle(41, 31, 25),
			new ICircle(11, -46, 25)],
			[new Circle(2, 1, 65),
			new ICircle(34, 36, 25),
			new ICircle(22, -42, 25)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(1, -2, 65),
			new ICircle(28, 39, 25),
			new ICircle(37, -41, 25)],
			[new Circle(1, -2, 65),
			new ICircle(20, 40, 25),
			new ICircle(45, -39, 25)],
			[new Circle(7, -4, 65),
			new ICircle(-32, 7, 25),
			new ICircle(58, -27, 37),
			new ICircle(59, 9, 37),
			new ICircle(52, 43, 32)],
			[new Circle(5, -3, 65),
			new ICircle(-22, 41, 25),
			new ICircle(42, -29, 25)],
			[new Circle(4, -2, 65),
			new ICircle(-1, 47, 25),
			new ICircle(38, -35, 25)],
			[new Circle(3, -1, 65),
			new ICircle(11, 47, 25),
			new ICircle(33, -39, 25)],
			[new Circle(1, -1, 65),
			new ICircle(22, 42, 25),
			new ICircle(31, -39, 25)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(5, 4, 67),
			new ICircle(38, -28, 25),
			new ICircle(-20, -34, 25)],
			[new Circle(2, -1, 63),
			new ICircle(30, 36, 25),
			new ICircle(44, -25, 25)],
			[new Circle(4, -1, 64),
			new ICircle(21, 45, 25),
			new ICircle(52, -15, 25)],
			[new Circle(4, -1, 64),
			new ICircle(21, 45, 25),
			new ICircle(52, -15, 25)],
			[new Circle(4, -1, 64),
			new ICircle(21, 45, 25),
			new ICircle(50, -18, 25)],
			[new Circle(4, -1, 64),
			new ICircle(21, 45, 25),
			new ICircle(41, -28, 25)],
			[new Circle(4, -1, 64),
			new ICircle(31, 39, 25),
			new ICircle(43, -27, 25)],
			[new Circle(4, -1, 64),
			new ICircle(33, 37, 25),
			new ICircle(48, -21, 25)],
			[new Circle(4, -1, 64),
			new ICircle(35, 35, 25),
			new ICircle(32, -31, 25)],
			[new Circle(4, -1, 64),
			new ICircle(35, 35, 25),
			new ICircle(20, -44, 25)],
			[new Circle(2, -1, 64),
			new ICircle(32, 37, 25),
			new ICircle(26, -41, 25)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(1, -3, 65),
			new ICircle(30, 35, 25),
			new ICircle(24, -38, 25)],
			[new Circle(-1, -4, 65),
			new ICircle(39, 30, 25),
			new ICircle(17, -43, 25)],
			[new Circle(8, 2, 65),
			new ICircle(30, 36, 25),
			new ICircle(53, 32, 25)],
			[new Circle(8, 2, 65),
			new ICircle(26, 44, 25),
			new ICircle(53, 32, 25)],
			[new Circle(8, 1, 65),
			new ICircle(23, 46, 25),
			new ICircle(53, 32, 25)],
			[new Circle(5, 1, 65),
			new ICircle(22, 40, 25),
			new ICircle(54, 19, 25)],
			[new Circle(4, 0, 65),
			new ICircle(27, 37, 25),
			new ICircle(49, -15, 25)],
			[new Circle(1, -1, 65),
			new ICircle(30, 35, 25),
			new ICircle(37, -30, 25)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(-1, 0, 65),
			new ICircle(25, 39, 25),
			new ICircle(27, -38, 25)],
			[new Circle(-4, -1, 64),
			new ICircle(13, 47, 25),
			new ICircle(13, -46, 25)],
			[new Circle(-4, 0, 65),
			new ICircle(13, 47, 25),
			new ICircle(13, -46, 25)],
			[new Circle(2, 0, 65),
			new ICircle(41, 32, 25),
			new ICircle(36, -40, 25)],
			[new Circle(5, -2, 65),
			new ICircle(49, 21, 25),
			new ICircle(47, -27, 25)],
			[new Circle(5, -1, 65),
			new ICircle(51, 19, 25),
			new ICircle(51, -22, 25)],
			[new Circle(6, 0, 65),
			new ICircle(52, 12, 25),
			new ICircle(51, -19, 25)],
			[new Circle(6, 0, 65),
			new ICircle(52, 12, 25),
			new ICircle(51, -19, 25)],
			[new Circle(6, 0, 65),
			new ICircle(57, 21, 25),
			new ICircle(55, -26, 25)],
			[new Circle(5, -1, 65),
			new ICircle(56, 30, 25),
			new ICircle(51, -33, 25)],
			[new Circle(6, 0, 65),
			new ICircle(48, 44, 25),
			new ICircle(48, -38, 25)],
			[new Circle(4, 0, 65),
			new ICircle(41, 43, 25),
			new ICircle(44, -42, 25)],
			[new Circle(3, -1, 65),
			new ICircle(37, 42, 25),
			new ICircle(39, -44, 25)],
			[new Circle(0, 0, 65),
			new ICircle(34, 40, 25),
			new ICircle(33, -42, 25)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(2, -1, 65),
			new ICircle(23, 40, 25),
			new ICircle(35, -33, 25)],
			[new Circle(2, -1, 65),
			new ICircle(23, 43, 25),
			new ICircle(34, -33, 25)],
			[new Circle(0, 0, 65),
			new ICircle(23, 42, 25),
			new ICircle(34, -33, 25)],
			[new Circle(1, 0, 65),
			new ICircle(23, 42, 25),
			new ICircle(34, -32, 25)],
			[new Circle(0, 0, 65),
			new ICircle(23, 42, 25),
			new ICircle(33, -36, 25)],
			[new Circle(0, 0, 65),
			new ICircle(26, 40, 25),
			new ICircle(29, -40, 25)],
			[new Circle(1, -1, 65),
			new ICircle(30, 35, 25),
			new ICircle(23, -45, 25)],
			[new Circle(0, 0, 65),
			new ICircle(40, 51, 42),
			new ICircle(8, -53, 25),
			new ICircle(58, 19, 43),
			new ICircle(56, -18, 47)],
			[new Circle(1, -1, 65),
			new ICircle(49, -32, 25),
			new ICircle(7, -55, 25)],
			[new Circle(0, 0, 65),
			new ICircle(48, -30, 25),
			new ICircle(8, -54, 25)],
			[new Circle(0, 0, 65),
			new ICircle(48, -30, 25),
			new ICircle(8, -54, 25)],
			[new Circle(0, 0, 65),
			new ICircle(48, -30, 25),
			new ICircle(8, -54, 25)],
			[new Circle(0, 0, 65),
			new ICircle(48, -30, 25),
			new ICircle(8, -54, 25)],
			[new Circle(1, 0, 65),
			new ICircle(48, -30, 25),
			new ICircle(8, -54, 25)],
			[new Circle(0, 0, 65),
			new ICircle(51, 9, 25),
			new ICircle(21, -42, 25)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(2, 0, 65),
			new ICircle(34, 31, 25),
			new ICircle(23, -41, 25)],
			[new Circle(1, 0, 65),
			new ICircle(35, 33, 25),
			new ICircle(23, -41, 25)],
			[new Circle(0, 0, 65),
			new ICircle(35, 33, 25),
			new ICircle(23, -41, 25)],
			[new Circle(1, 0, 65),
			new ICircle(35, 33, 25),
			new ICircle(23, -41, 25)],
			[new Circle(0, 0, 65),
			new ICircle(33, 37, 25),
			new ICircle(23, -41, 25)],
			[new Circle(0, 0, 65),
			new ICircle(30, 40, 25),
			new ICircle(26, -40, 25)],
			[new Circle(0, 0, 65),
			new ICircle(23, 45, 25),
			new ICircle(31, -36, 25)],
			[new Circle(0, 0, 65),
			new ICircle(9, 52, 25),
			new ICircle(37, -50, 43),
			new ICircle(54, -20, 48),
			new ICircle(55, 15, 48)],
			[new Circle(1, 1, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(1, 1, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(0, 0, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(0, 0, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(0, 1, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(1, 0, 65),
			new ICircle(9, 52, 25),
			new ICircle(47, 28, 25)],
			[new Circle(0, 0, 65),
			new ICircle(19, 47, 25),
			new ICircle(49, -3, 25)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(-12, -1, 65),
			new ICircle(42, 24, 25),
			new ICircle(43, -28, 25)],
			[new Circle(-11, 0, 65),
			new ICircle(31, 27, 25),
			new ICircle(30, -31, 25)],
			[new Circle(-8, 0, 65),
			new ICircle(19, 39, 25),
			new ICircle(21, -36, 25)],
			[new Circle(0, 0, 65),
			new ICircle(18, 44, 25),
			new ICircle(20, -41, 25)],
			[new Circle(4, 0, 65),
			new ICircle(22, 47, 25),
			new ICircle(23, -43, 25)],
			[new Circle(3, -1, 65),
			new ICircle(28, 48, 25),
			new ICircle(30, -44, 25)],
			[new Circle(2, 0, 65),
			new ICircle(31, 42, 25),
			new ICircle(30, -41, 25)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 35),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 34),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -7, 34),
			new ICircle(21, -35, 25)],
			[new Circle(-3, -1, 62),
			new ICircle(36, -11, 25),
			new ICircle(19, -35, 25)],
			[new Circle(-5, 0, 63),
			new ICircle(33, -12, 25),
			new ICircle(18, -35, 25)],
			[new Circle(-8, 0, 64),
			new ICircle(31, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-7, 0, 63),
			new ICircle(30, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-5, 0, 64),
			new ICircle(34, -4, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-4, 0, 65),
			new ICircle(34, 14, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-1, -2, 64),
			new ICircle(32, 31, 25),
			new ICircle(20, -35, 25)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(2, -1, 64),
			new ICircle(55, -6, 38),
			new ICircle(22, -35, 25)],
			[new Circle(1, -1, 64),
			new ICircle(55, -6, 37),
			new ICircle(22, -35, 25)],
			[new Circle(0, 0, 65),
			new ICircle(55, -6, 37),
			new ICircle(22, -35, 25)],
			[new Circle(1, 0, 64),
			new ICircle(55, -6, 37),
			new ICircle(22, -35, 25)],
			[new Circle(1, -1, 64),
			new ICircle(55, -6, 37),
			new ICircle(23, -34, 25)],
			[new Circle(2, 0, 64),
			new ICircle(55, -6, 37),
			new ICircle(22, -35, 25)],
			[new Circle(2, -1, 65),
			new ICircle(55, -6, 37),
			new ICircle(22, -35, 25)],
			[new Circle(-7, -2, 59),
			new ICircle(36, -12, 25),
			new ICircle(16, -37, 25)],
			[new Circle(-6, -1, 63),
			new ICircle(35, 14, 25),
			new ICircle(16, -37, 25)],
			[new Circle(-3, -1, 63),
			new ICircle(32, 27, 25),
			new ICircle(21, -43, 25)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 35),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 34),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -7, 34),
			new ICircle(21, -35, 25)],
			[new Circle(-3, -1, 62),
			new ICircle(36, -11, 25),
			new ICircle(19, -35, 25)],
			[new Circle(-5, 0, 63),
			new ICircle(33, -12, 25),
			new ICircle(18, -35, 25)],
			[new Circle(-8, 0, 64),
			new ICircle(31, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-7, 0, 63),
			new ICircle(30, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-5, 0, 64),
			new ICircle(34, -4, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-4, 0, 65),
			new ICircle(34, 14, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-1, -2, 64),
			new ICircle(32, 31, 25),
			new ICircle(20, -35, 25)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 35),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -6, 34),
			new ICircle(21, -35, 25)],
			[new Circle(1, 0, 65),
			new ICircle(53, -7, 34),
			new ICircle(21, -35, 25)],
			[new Circle(-3, -1, 62),
			new ICircle(36, -11, 25),
			new ICircle(19, -35, 25)],
			[new Circle(-5, 0, 63),
			new ICircle(33, -12, 25),
			new ICircle(18, -35, 25)],
			[new Circle(-8, 0, 64),
			new ICircle(31, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-7, 0, 63),
			new ICircle(30, -12, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-5, 0, 64),
			new ICircle(34, -4, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-4, 0, 65),
			new ICircle(34, 14, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-1, -2, 64),
			new ICircle(32, 31, 25),
			new ICircle(20, -35, 25)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(1, 0, 65),
			new ICircle(49, -14, 25),
			new ICircle(19, -34, 25)],
			[new Circle(1, 0, 65),
			new ICircle(49, -13, 25),
			new ICircle(19, -34, 25)],
			[new Circle(-3, -1, 61),
			new ICircle(35, -12, 25),
			new ICircle(19, -34, 25)],
			[new Circle(-6, 0, 62),
			new ICircle(31, -13, 25),
			new ICircle(17, -34, 25)],
			[new Circle(-7, 0, 63),
			new ICircle(31, -13, 25),
			new ICircle(19, -35, 25)],
			[new Circle(-7, 0, 63),
			new ICircle(31, -13, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-5, -1, 65),
			new ICircle(34, 9, 25),
			new ICircle(20, -35, 25)],
			[new Circle(-4, 0, 64),
			new ICircle(29, 35, 25),
			new ICircle(20, -35, 25)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(1, -1, 65),
			new ICircle(48, 15, 25),
			new ICircle(23, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(48, -2, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(49, -11, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(48, -7, 25),
			new ICircle(20, -36, 25)],
			[new Circle(1, -1, 65),
			new ICircle(41, 9, 25),
			new ICircle(20, -36, 25)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(1, -1, 65),
			new ICircle(39, 23, 25),
			new ICircle(35, -39, 25)],
			[new Circle(2, -2, 65),
			new ICircle(47, 9, 25),
			new ICircle(43, -37, 25)],
			[new Circle(3, -6, 65),
			new ICircle(50, -9, 25),
			new ICircle(44, -37, 25)],
			[new Circle(3, -6, 64),
			new ICircle(51, -12, 25),
			new ICircle(45, -35, 25)],
			[new Circle(-5, -8, 62),
			new ICircle(37, -16, 25),
			new ICircle(31, -37, 25)],
			[new Circle(-3, -7, 65),
			new ICircle(50, -15, 25),
			new ICircle(28, -41, 25)],
			[new Circle(6, -5, 65),
			new ICircle(50, -15, 25),
			new ICircle(28, -54, 25)],
			[new Circle(-7, -5, 62),
			new ICircle(36, -15, 25),
			new ICircle(27, -46, 25)],
			[new Circle(-2, -4, 63),
			new ICircle(34, 13, 25),
			new ICircle(23, -44, 25)],
			[new Circle(0, -3, 63),
			new ICircle(33, 24, 25),
			new ICircle(26, -41, 25)],
			[new Circle(1, -1, 65),
			new ICircle(39, 23, 25),
			new ICircle(35, -39, 25)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(0, 0, 65),
			new ICircle(42, 21, 25),
			new ICircle(41, -24, 25)],
			[new Circle(7, 0, 65),
			new ICircle(55, 20, 25),
			new ICircle(58, -9, 25)],
			[new Circle(10, 1, 65),
			new ICircle(56, 23, 25),
			new ICircle(58, -9, 25)],
			[new Circle(10, 2, 64),
			new ICircle(58, 25, 25),
			new ICircle(52, -18, 25)],
			[new Circle(10, 2, 65),
			new ICircle(58, 22, 25),
			new ICircle(49, -36, 25)],
			[new Circle(10, 2, 64),
			new ICircle(57, 17, 25),
			new ICircle(48, -37, 25)],
			[new Circle(7, 1, 62),
			new ICircle(52, 18, 25),
			new ICircle(54, -34, 25)],
			[new Circle(4, -1, 62),
			new ICircle(59, 26, 25),
			new ICircle(47, -30, 25)],
			[new Circle(2, -1, 62),
			new ICircle(64, 36, 25),
			new ICircle(44, -36, 25)],
			[new Circle(3, -1, 63),
			new ICircle(64, 49, 25),
			new ICircle(47, -41, 25)],
			[new Circle(2, -1, 62),
			new ICircle(45, 63, 25),
			new ICircle(48, -40, 25)],
			[new Circle(2, -1, 62),
			new ICircle(33, 46, 25),
			new ICircle(41, -39, 25)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(1, -1, 65),
			new ICircle(43, 22, 25),
			new ICircle(40, -24, 25)],
			[new Circle(7, -3, 67),
			new ICircle(58, -2, 25),
			new ICircle(46, -29, 25)],
			[new Circle(12, -2, 66),
			new ICircle(58, -4, 25),
			new ICircle(47, -28, 25)],
			[new Circle(12, -3, 65),
			new ICircle(60, -4, 25),
			new ICircle(43, -41, 25)],
			[new Circle(12, -3, 64),
			new ICircle(52, 2, 25),
			new ICircle(43, -46, 25)],
			[new Circle(12, -3, 64),
			new ICircle(50, 6, 25),
			new ICircle(38, -53, 25)],
			[new Circle(11, -4, 61),
			new ICircle(54, -8, 25),
			new ICircle(40, -47, 25)],
			[new Circle(9, -4, 61),
			new ICircle(58, -7, 25),
			new ICircle(35, -38, 25)],
			[new Circle(7, -3, 61),
			new ICircle(62, 1, 25),
			new ICircle(27, -45, 25)],
			[new Circle(4, 0, 60),
			new ICircle(63, 28, 25),
			new ICircle(36, -53, 25)],
			[new Circle(3, -1, 60),
			new ICircle(49, 50, 25),
			new ICircle(48, -47, 25)],
			[new Circle(4, -1, 61),
			new ICircle(33, 46, 25),
			new ICircle(42, -39, 25)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(1, -1, 65),
			new ICircle(43, 32, 25),
			new ICircle(3, -44, 25)],
			[new Circle(1, -1, 65),
			new ICircle(60, 33, 25),
			new ICircle(-20, -50, 25)],
			[new Circle(2, 0, 62),
			new ICircle(73, 33, 25),
			new ICircle(-52, -50, 25)],
			[new Circle(2, 0, 62),
			new ICircle(-41, 42, 25),
			new ICircle(87, -60, 25),
			new ICircle(56, 49, 50),
			new ICircle(-32, -67, 50),
			new ICircle(-3, 64, 47),
			new ICircle(34, -78, 56)],
			[new Circle(2, 0, 64),
			new ICircle(-46, 44, 25),
			new ICircle(90, -53, 25)],
			[new Circle(3, 0, 64),
			new ICircle(-45, 45, 25),
			new ICircle(89, -52, 25)],
			[new Circle(2, 0, 61),
			new ICircle(-21, 57, 25),
			new ICircle(78, -47, 25)],
			[new Circle(2, 0, 61),
			new ICircle(1, 61, 25),
			new ICircle(62, -43, 25)],
			[new Circle(2, -1, 65),
			new ICircle(18, 50, 25),
			new ICircle(47, -38, 25)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(0, 0, 65),
			new ICircle(50, 18, 25),
			new ICircle(23, -35, 25)],
			[new Circle(0, 0, 65),
			new ICircle(18, -36, 25),
			new ICircle(49, -3, 25)],
			[new Circle(0, 0, 66),
			new ICircle(50, -12, 25),
			new ICircle(19, -36, 25)],
			[new Circle(0, 0, 66),
			new ICircle(19, -37, 24),
			new ICircle(50, -12, 25)]
		];
		this.hurtboxes["NNF"] = [
			[new Circle(-1, 0, 60),
			new ICircle(48, 11, 25),
			new ICircle(17, -36, 25)],
			[new Circle(-1, 0, 60),
			new ICircle(43, 7, 25),
			new ICircle(16, -38, 25)],
			[new Circle(-3, 0, 63),
			new ICircle(15, -40, 23),
			new ICircle(42, 12, 24)],
			[new Circle(-3, 0, 63),
			new ICircle(15, -40, 23),
			new ICircle(38, 19, 24)],
			[new Circle(-1, 0, 64),
			new ICircle(22, -40, 22),
			new ICircle(36, 28, 24)],
			[new Circle(1, 0, 64),
			new ICircle(26, -38, 21),
			new ICircle(33, 35, 24)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(0, 0, 65),
			new ICircle(30, 35, 25),
			new ICircle(30, -37, 25)],
			[new Circle(-1, -1, 65),
			new ICircle(31, 41, 25),
			new ICircle(30, -45, 25)],
			[new Circle(0, -1, 65),
			new ICircle(38, 21, 50),
			new ICircle(36, -15, 53)],
			[new Circle(1, -1, 65),
			new ICircle(41, 16, 25),
			new ICircle(43, -15, 25)],
			[new Circle(3, -1, 65),
			new ICircle(41, 16, 25),
			new ICircle(43, -15, 25)],
			[new Circle(3, -1, 63),
			new ICircle(41, 21, 25),
			new ICircle(41, -22, 25)],
			[new Circle(3, -1, 61),
			new ICircle(38, 25, 25),
			new ICircle(39, -26, 25)],
			[new Circle(2, -2, 62),
			new ICircle(36, 29, 25),
			new ICircle(37, -28, 25)],
			[new Circle(2, -2, 62),
			new ICircle(34, 32, 25),
			new ICircle(36, -30, 25)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(0, 0, 65),
			new ICircle(33, 34, 25),
			new ICircle(41, -19, 25)],
			[new Circle(1, 0, 65),
			new ICircle(33, 34, 25),
			new ICircle(45, -31, 25)],
			[new Circle(1, 0, 65),
			new ICircle(31, 37, 25),
			new ICircle(41, -40, 25)],
			[new Circle(1, -1, 65),
			new ICircle(33, 38, 25),
			new ICircle(37, -45, 25)],
			[new Circle(1, -1, 65),
			new ICircle(33, 38, 25),
			new ICircle(30, -46, 25)],
			[new Circle(1, -1, 65),
			new ICircle(28, 35, 25),
			new ICircle(26, -46, 25)],
			[new Circle(1, -1, 65),
			new ICircle(28, 35, 25),
			new ICircle(26, -44, 25)],
			[new Circle(1, -1, 65),
			new ICircle(31, 36, 25),
			new ICircle(26, -43, 25)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(0, 0, 65),
			new ICircle(44, 19, 35),
			new ICircle(30, -36, 25)],
			[new Circle(0, 0, 65),
			new ICircle(46, 14, 45),
			new ICircle(30, -36, 25)],
			[new Circle(0, 0, 65),
			new ICircle(50, 6, 51),
			new ICircle(29, -37, 25),
			new ICircle(33, 40, 25)],
			[new Circle(1, -1, 65),
			new ICircle(50, 5, 57),
			new ICircle(29, -37, 25),
			new ICircle(38, 38, 25)],
			[new Circle(1, -1, 65),
			new ICircle(50, 5, 57),
			new ICircle(28, -36, 30),
			new ICircle(33, 36, 35)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(1, -2, 64),
			new ICircle(5, 50, 22),
			new ICircle(6, -49, 22)],
			[new Circle(-1, -1, 64),
			new ICircle(2, 52, 22),
			new ICircle(0, -51, 22)],
			[new Circle(-8, -1, 64),
			new ICircle(-5, 52, 22),
			new ICircle(-8, -52, 22)],
			[new Circle(-9, -1, 63),
			new ICircle(-7, 52, 24),
			new ICircle(-9, -52, 24)],
			[new Circle(-9, -1, 63),
			new ICircle(-10, 52, 24),
			new ICircle(-11, -51, 24)],
			[new Circle(-9, -1, 63),
			new ICircle(-13, 49, 24),
			new ICircle(-15, -51, 24)],
			[new Circle(-6, -1, 64),
			new ICircle(-13, 50, 24),
			new ICircle(-14, -50, 24)],
			[new Circle(-4, -1, 64),
			new ICircle(-7, 52, 24),
			new ICircle(-8, -51, 24)],
			[new Circle(1, -1, 64),
			new ICircle(0, 53, 25),
			new ICircle(-1, -51, 25)],
			[new Circle(2, -1, 63),
			new ICircle(9, 49, 25),
			new ICircle(8, -49, 25)]
		];

		this.headNoun = "󱤑";//jan
		this.name = currentLanguage === "tp" ? "󱤑󱦐󱦗󱦅󱥱󱤘󱤋󱦑" : "Lukeh";//jan Luke

		this.collideRadius = 42;

		this.timerPunishMult = 1.2;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janLukeSheet);
		this.auraSheets = [];
		this.auraSheets.push(Spritesheet.copy(assetManager.spritesheets.konLuke0));
		this.auraSheets.push(Spritesheet.copy(assetManager.spritesheets.konLuke1));
		this.auraSheets.push(Spritesheet.copy(assetManager.spritesheets.konLuke2));
		this.auraSheets.push(Spritesheet.copy(assetManager.spritesheets.konLuke3));
		this.auraSheets.push(Spritesheet.copy(assetManager.spritesheets.konLuke4));

		this.states.HITSTUN = State.copyState(State.HITSTUN).removeTag("BASE");

		this.states.ML = State.copyState(State.ML).addTag("no collide");
		this.states.RS = State.copyState(State.RS).addTag("rotateable");
		this.states.SPL = State.copyState(State.SPL).addTag("rotateable");
		this.states.SPS = State.copyState(State.SPS).addTag("rotateable");
		this.states.NN = State.copyState(State.NN).addTag("rotateable");
		this.states.NN_ACTIONS = ["NL", "dash", "power dash"];
		this.states.LN_ACTIONS = [];
		this.states.NNF = State.copyState(State.NN).setName("NNF");

		this.states.MISFIRE = new State("misfire");
		this.states.MISFIRE_ACTIONS = ["power dash"];

		this.selectScreenSizeOffset = 25;

		this.movementSpeed = 1.5;
		this.forwardSpeedBoost = 2.5;

		this.turnSpeed = 0.007;

		this.OOBBlockFrame = 4;

		this.dash.turnSpeedBoost = 0.01;
		this.dash.backPenalty = 4;
		this.dash.cancelBackPenaltyMult = 2;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.maxBullets = 6;
		this.bullets = this.maxBullets;

		this.auraFrames = 0;
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks

		this.DASH_ATTACK = JanLukeDashAttack;

		this.NL = JanLukeNL;
		this.SL = JanLukeSL;
		this.RL = JanLukeRL;
		this.LL = JanLukeLL;
		this.ML = JanLukeML;

		this.NS = JanLukeNS;
		this.SS = JanLukeSS;
		this.RS = JanLukeRS;
		this.LS = JanLukeLS;
		this.MS = JanLukeMS;

		this.NPL = JanLukeNPL;
		this.SPL = JanLukeSPL;
		this.RPL = JanLukeRPL;
		this.LPL = JanLukeLPL;
		this.MPL = JanLukeMPL;

		this.NPS = JanLukeNPS;
		this.SPS = JanLukeSPS;
		this.RPS = JanLukeRPS;
		this.LPS = JanLukeLPS;
		this.MPS = JanLukeMPS;

		this.NN = JanLukeNN;
		this.SN = JanLukeSN;
		this.RN = JanLukeRN;
		this.LN = JanLukeLN;
		this.MN = JanLukeMN;
	}

	generalLogic() {
		if (((this.bullets <= 1 && this.currentState.name === "SPS") || (this.bullets <= 0 && (State.stateIsTag(this.currentState, "poka lili") || this.currentState.name === "NN"))) && this.frameDataRef.getFromStartupF() === 1) {
			this.forceChangeState(this.states.MISFIRE, this.states.MISFIRE_ACTIONS);
			this.sheet.setAnimation("Misfire");
			this.playSound(assetManager.sounds.e);
			this.actionLag = 15;
		}
		if (this.currentState.name === "misfire") {
			this.attackEndable();
		}
		if (this.currentState.name === "NNF") {
			this.attackEndable();
		}
		if (this.auraFrames > 0)
			this.auraFrames--;
	}

	getInfluence() {
		return this.world.sikeWawa.getTotalInfluence(this);
	}

	getInfluenceLevel() {
		let influence = this.world.sikeWawa.getTotalInfluence(this);
		if (influence >= 65)
			return 4;
		if (influence >= 50)
			return 3;
		if (influence >= 35)
			return 2;
		if (influence >= 20)
			return 1;
		return 0;
	}

	getDamageMult() {
		return sqrt(this.getInfluenceLevel() * 0.38 + 0.25);
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -110 + rumbleX, -80 + rumbleY, 220, 220);

		if (this.auraFrames > 0)
			this.auraSheets[this.getInfluenceLevel()].draw(g, -69 + rumbleX, -25 + rumbleY, 138, 138);

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

	drawExtraHUD(g, i, x, y) {
		let leftX = 512 * 0.12 + 512 * 0.76 * i - 34;
		let leftX2 = 256 + 60 * i - 30;

		g.push();
		g.translate(x, y);
		
		for (let i = 0; i < this.maxBullets; i++) {
			let offsetX = 0;
			let offsetY = 0;
			if (this.bullets <= 0) {
				offsetX = random(-1, 1);
				offsetY = random(-1, 1);
			}

			if (this.bullets > i) {
				g.image(assetManager.images.bulletFull, leftX + 11 * i + offsetX, 65 + offsetY, 12, 12);
			} else {
				g.image(assetManager.images.bulletEmpty, leftX + 11 * i + offsetX, 65 + offsetY, 12, 12);
			}
		}

		assetManager.spritesheets.sitelenKonLuke.drawFrame(g, this.getInfluenceLevel(), leftX2 - 10, 83, 20, 20);

		g.pop();
	}

	charSpecificReset() {
		this.bullets = this.maxBullets;
		this.vortex = false;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
			for (let i in this.auraSheets) {
				this.auraSheets[i].run();
			}
		}
	}

    static addAssets() {
		assetManager.addSpritesheet("resources/jan_Luke.png", "janLukeSheet", "//");

		assetManager.addSpritesheet("resources/sitelenKonLuke.png", "sitelenKonLuke", "//");

		assetManager.addSpritesheet("resources/konLuke0.png", "konLuke0", "//");
		assetManager.addSpritesheet("resources/konLuke1.png", "konLuke1", "//");
		assetManager.addSpritesheet("resources/konLuke2.png", "konLuke2", "//");
		assetManager.addSpritesheet("resources/konLuke3.png", "konLuke3", "//");
		assetManager.addSpritesheet("resources/konLuke4.png", "konLuke4", "//");

		assetManager.addSpritesheet("resources/GunEffect.png", "gunEffect", "//");
		assetManager.addSpritesheet("resources/GunEffectLili.png", "gunEffectLili", "//");

		assetManager.addSpritesheet("resources/konPiTawaSike.png", "konPiTawaSike", "//");

		assetManager.addSpritesheet("resources/LinjaLuka.png", "linjaLuka", "//");

		assetManager.addSpritesheet("resources/sike_pakala.png", "sikePakala", "//");

		assetManager.addImage("resources/bulletEmpty.png", "bulletEmpty");

		assetManager.addImage("resources/bulletFull.png", "bulletFull");

		assetManager.addSound("resources/sfx/sina_seme.wav", "sinaSeme", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/e.wav", "e", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/reload.wav", "reload", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/Revolver Gun Shot.wav", "gunShot", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/Revolver Release Hammer.wav", "gunCock", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/linjaLuka.wav", "linjaLuka");

		assetManager.addSound("resources/sfx/kalamaLinja.wav", "kalamaLinja");
    }
}

class JanLukeDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(20, -65, 40, 0).setCircleVelocity(15);
		let sour1 = new PriorityCircle(30, 50, 40, 1).setCircleVelocity(11);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(40).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(16, 4, 0.2).setHitStun(33, 15).setStunFrames(12).setNormalizeHitStun();
		let sour = new AttackProperties().setDamage(30).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(16, 4, 0.2).setHitStun(33, 15).setStunFrames(12).setNormalizeHitStun();
		let prop = [sweet, sour];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(5).setStartupF(10).setActiveF(5).setEndF(27);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.3);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		
	}
}

class JanLukeNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["lili", "suli", "poka lili", "SPS", "RPS", "LPS", "MPS", "dash"];

		let sweet1 = new PriorityCircle(30, -35, 40, 0).setVelocity(1, 0.4);
		let sweet2 = new PriorityCircle(50, -25, 30, 0).setVelocity(1, 0.4);
		let sweet3 = new PriorityCircle(70, -15, 30, 0).setVelocity(1, 0.4);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(20).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 4, 1.1).setLaunchDampening(1.2, 7).setHitStun(20, 20).setStunFrames(12).setWallPushback(3, 2);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(6).setActiveF(2).setEndF(20).setRotateable();
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
		this.player.turnSpeedModifier = 0.05;
	}
}

class JanLukeSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "NPL", "RPL", "LPL", "MN"];

		let sourHitCancelOptions = [];

		let sweet1 = new PriorityCircle(30, -35, 40, 0).setVelocity(1, 0.5);
		let sweet2 = new PriorityCircle(50, -25, 30, 0).setVelocity(1, 0.5);
		let sweet3 = new PriorityCircle(70, -15, 30, 0).setVelocity(1, 0.5);
		let sour1 = new PriorityCircle(30, 35, 0, 1).setVelocity(1, -0.5);
		let sour2 = new PriorityCircle(50, 30, 0, 1).setVelocity(1, -0.5);
		let sour3 = new PriorityCircle(70, 15, 0, 1).setVelocity(1, -0.5);
		let circles = [sweet1, sweet2, sweet3, sour1, sour2, sour3];

		let sweet = new AttackProperties().setDamage(25).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 0.7).setHitStun(28, 20).setStunFrames(12, 12).setWallPushback(3, 3);
		let sour = new AttackProperties().setDamage(20).setProration(-0.1, 1.0).setCancelOptions(cancelOptions, sourHitCancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 0.7).setHitStun(20, 20).setStunFrames(12, 12).setWallPushback(3, 3);
		let prop = [sweet, sour];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(8).setEndF(20).setMulti(2, 4, 3);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.8);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 4) {
			this.player.dx += this.dir.getX() * 4;
			this.player.dy += this.dir.getY() * 4;
		}
		if (this.getFromEndF() === 1) {
			this.player.dx /= 2;
			this.player.dy /= 2;
		}
		if (this.getActiveF() === 5) {
			for (let i = 0; i < this.circles.length; i++) {
				if (i < 3) {
					this.circles[i].diameter = 0;
				} else {
					this.circles[i].diameter = 40;
				}
			}
			this.resetMain();
		}
	}
}

class JanLukeRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "SL", "NPL", "LPL", "MN"];

		let sweet1 = new PriorityCircle(40, 50, 40, 0).setVelocity(1, 1);
		let sweet2 = new PriorityCircle(0, 60, 40, 0).setVelocity(1, 1);
		let sweet3 = new PriorityCircle(-40, 45, 40, 0).setVelocity(1, 1);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(15).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 3).setLaunch(2, 4, 1.1).setHitStun(18, 15).setStunFrames(12).setCancelWait(5);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(2).setEndF(17);
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
			this.player.dir.changeValue(PI / 2);
		}
	}
}

class JanLukeLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "SL", "NPL", "RPL", "MN"];

		let sweet1 = new PriorityCircle(40, -50, 40, 0).setVelocity(1, -1);
		let sweet2 = new PriorityCircle(0, -60, 40, 0).setVelocity(1, -1);
		let sweet3 = new PriorityCircle(-40, -45, 40, 0).setVelocity(1, -1);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(20).setProration(0.3).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 3).setLaunch(2, 4, 1.1).setHitStun(20, 15).setStunFrames(12).setCancelWait(5);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(2).setEndF(17);
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
			this.player.dir.changeValue(-PI / 2);
		}
	}
}

class JanLukeML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["ML", "SS", "MN"];

		let sweet1 = new PriorityCircle(-80, 0, 65, 0).setSubVelocity(-3.5, 0);
		let sour1 = new PriorityCircle(-40, 20, 35, 1).setSubVelocity(-3.5, 0);
		let circles = [sweet1, sour1];

		let sweet = new AttackProperties().setDamage(30).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(6, 0.1, 0.8).setHitStun(45, 40).setStunFrames(12).setAngleTypes("direct", "direct");
		let sour = new AttackProperties().setDamage(25).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(6, 0.1, 0.8).setHitStun(45, 40).setStunFrames(12).setAngleTypes("direct", "direct");
		let prop = [sweet, sour];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(9).setActiveF(6).setEndF(26);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.5);

		player.dx += player.dir.getX() * 16;
		player.dy += player.dir.getY() * 16;

		player.dir.changeValue(-PI);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.dx *= 0.9;
		this.player.dy *= 0.9;
	}
}

class JanLukeNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "RS", "LS", "SS", "NPL", "MN"];

		let sour1 = new PriorityCircle(30, -40, 30, 0).setVelocity(1, 0.6);
		let sweet1 = new PriorityCircle(57, -35, 40, 1).setVelocity(1, 0.6);
		let sweet2 = new PriorityCircle(71, 0, 40, 1).setVelocity(1, 0.6);
		let sweet3 = new PriorityCircle(70, 29, 40, 1).setVelocity(1, 0.6);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(30).setProration(0.6, -1.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(4, 2, 1.5).setHitStun(25, 22).setStunFrames(12);
		let sweet = new AttackProperties().setDamage(30).setProration(0.6, -1.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 1.5).setHitStun(25, 22).setStunFrames(12);
		let prop = [sour, sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(8).setActiveF(3).setEndF(20);
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
		
	}
}

class JanLukeSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(45, 0, 65, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(110, -35, 60, 1).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(110, 35, 60, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1, sweet2];

		let sour = new AttackProperties().setDamage(30, 35).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(16, 2, 0.5).setHitStun(36, 12).setStunFrames(12);
		let sweet = new AttackProperties().setDamage(45, 35, 6).setProration(0.3).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(16, 2, 0.5).setHitStun(44, 12).setStunFrames(12);
		let prop = [sour, sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(19).setActiveF(7).setEndF(28);
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

	}
}

class JanLukeRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";

		this.moveAngle = new Angle(player.dir.value);
		this.secondAttack = false;
	}

	static createAttack(player) {
		let cancelOptions = ["MN"];

		let sweet1 = new PriorityCircle(60, 40, 35, 0).setVelocity(0.1, -0.1);
		let sweet2 = new PriorityCircle(30, 40, 40, 0).setVelocity(0.1, -0.1);
		let sweet3 = new PriorityCircle(70, 0, 40, 0).setVelocity(0.1, -0.1);
		let sweet4 = new PriorityCircle(40, 0, 40, 0).setVelocity(0.1, -0.1);
		let sweet5 = new PriorityCircle(70, -25, 35, 0).setVelocity(0.1, -0.1);
		let sweet6 = new PriorityCircle(40, -25, 40, 0).setVelocity(0.1, -0.1);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6];

		let sweet = new AttackProperties().setDamage(40).setProration(-0.4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1, 0.8).setHitStun(43, 11).setStunFrames(12);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(28).setActiveF(3).setEndF(26);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		attack.moveAngle.changeValue(PI / 2.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.turnSpeedModifier = -1;
		this.player.dx *= 0.9;
		this.player.dy *= 0.9;
		if (this.getStartupF() > 11 && this.getFromStartupF() > 4 && this.player.controls.clicked("suli")) {
			this.secondAttack = true;
		}
		if (this.getStartupF() === 11 && !this.secondAttack) {
			this.setActiveF(0);
			this.setStartupF(0);
			this.setEndF(7);
			this.player.actionLag = 7;
		}
		if (this.currentlyEnd() && !this.secondAttack) {
			this.player.turnSpeedModifier = 0.21;
		}
		if (this.getStartupF() === 10) {
			this.moveAngle.changeValue(-PI / 1.8);
		}
		if (this.getStartupF() > 10) {
			let speed = (sqrt(this.getStartupF() * 3) - 5) * 2.7;
			this.player.dx = this.moveAngle.getX() * speed;
			this.player.dy = this.moveAngle.getY() * speed;
			this.moveAngle.changeValue(-PI / 100 * this.getFromStartupF() / 10);
			this.player.dir.changeValue(-PI / 10 * (3 + this.getStartupF() - 10) / 12);
		} else if (this.getStartupF() > 0 && this.secondAttack) {
			let speed = (sqrt(this.getStartupF() * 6)) * 2;
			this.player.dx = this.moveAngle.getX() * speed;
			this.player.dy = this.moveAngle.getY() * speed;
			this.player.dir.changeValue(-PI / 50);
		}
	}
}

class JanLukeLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";

		this.moveAngle = new Angle(player.dir.value);
	}

	static createAttack(player) {
		let cancelOptions = ["MN"];

		let sweet1 = new PriorityCircle(60, -40, 35, 0).setVelocity(0, 0.1);
		let sweet2 = new PriorityCircle(30, -40, 40, 0).setVelocity(0, 0.1);
		let sweet3 = new PriorityCircle(70, 0, 40, 0).setVelocity(0, 0.1);
		let sweet4 = new PriorityCircle(40, 0, 40, 0).setVelocity(0, 0.1);
		let sweet5 = new PriorityCircle(70, 25, 35, 0).setVelocity(0, 0.1);
		let sweet6 = new PriorityCircle(40, 25, 40, 0).setVelocity(0, 0.1);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6];

		let sweet = new AttackProperties().setDamage(50).setProration(-0.6).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1, 0.8).setHitStun(51, 11).setStunFrames(12);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(28).setActiveF(3).setEndF(26);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		attack.moveAngle.changeValue(-PI / 2.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.dx *= 0.9;
		this.player.dy *= 0.9;
		if (this.getStartupF() === 10) {
			this.moveAngle.changeValue(PI / 1.8);
		}
		if (this.getStartupF() > 10) {
			let speed = (sqrt(this.getStartupF() * 3) - 5) * 2.7;
			this.player.dx = this.moveAngle.getX() * speed;
			this.player.dy = this.moveAngle.getY() * speed;
			this.moveAngle.changeValue(PI / 100 * this.getFromStartupF() / 10);
			this.player.dir.changeValue(PI / 10 * (3 + this.getStartupF() - 10) / 18);
		} else if (this.getStartupF() > 0) {
			let speed = (sqrt(this.getStartupF() * 6)) * 2;
			this.player.dx = this.moveAngle.getX() * speed;
			this.player.dy = this.moveAngle.getY() * speed;
			this.player.dir.changeValue(PI / 13);
		}
	}
}

class JanLukeMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";

		this.vortex = false;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.konPiTawaSike);
	}

	static createAttack(player) {
		let circles = [];

		let prop = [];

		return new this(player, circles, prop).setStartupF(26).setActiveF(220).setFollow(false).setProjectile();
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;

		if (!player.vortex) {
			attack.vortex = true;
			player.vortex = true;
			player.world.sikeWawa.addMeter(-5.5, -2.2, player);
		} else {
			attack.setActiveF(0);
		}
	}

	draw(g) {
		if (this.vortex && this.getFromStartupF() > 2 && this.getActiveF() > 0) {
			let size = min(200, this.getActiveF() * 5);
			if (!this.startupOver()) {
				size = min(200, 200 - this.getStartupF() * 8);
			}
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -size / 2, -size / 2, size, size);

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
		this.sheet.run();

		if (this.getStartupF() > 23 && this.getActiveF() > 10) {
			this.player.dx = -this.dir.getX() * 16;
			this.player.dy = -this.dir.getY() * 16;
		} else if (this.getStartupF() > 0) {
			this.player.dx *= 0.82;
			this.player.dy *= 0.82;
		}

		if (this.player.targetPlayer && this.vortex && this.startupOver()) {
			let distance = dist(this.player.targetPlayer.x, this.player.targetPlayer.y, this.x, this.y);
			let angle = new Angle().setFromPoint(this.player.targetPlayer.x - this.x, this.player.targetPlayer.y - this.y);
			let speed = 11500 * max(distance, 50) ** -2;
			if (distance < 40)
				speed = 5 / speed;
			if (this.getActiveF() < 40)
				speed *= 0.95 ** (40 - this.getActiveF());
			if (distance < this.player.targetPlayer.collideRadius + 100) {
				if (this.player.targetPlayer.currentState.name === "hitstun") {
					this.player.targetPlayer.damageHealthAbs(0.3, 0, true);
					speed *= 1.2;
				} else {
					this.player.targetPlayer.damageHealthAbs(0.1, 0, true);
				}
			}
			this.player.targetPlayer.x -= angle.getX() * speed;
			this.player.targetPlayer.y -= angle.getY() * speed;
		}
	}

	cleanup() {
		if (this.vortex)
			this.player.vortex = false;
	}
}

class JanLukeNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = ["SPL", "NPS", "MN", "NN"];

		let sweet1 = new PriorityCircle(30, 0, 20, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(50, 0, 20, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(70, 0, 20, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(90, 0, 20, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(110, 0, 20, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(130, 0, 20, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(150, 0, 20, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 35).setProration(0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1, 1.1).setHitStun(30, 12).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(11).setActiveF(2).setEndF(26).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -10.5, 90, 21);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
			this.player.dx -= this.dir.getX() * 4;
			this.player.dy -= this.dir.getY() * 4;
			this.player.bullets--;
		}
		this.player.dx *= 0.94;
		this.player.dy *= 0.94;
	}
}

class JanLukeSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];

		let sweet1 = new PriorityCircle(30, 0, 25, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(60, 0, 25, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(90, 0, 25, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(120, 0, 25, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(150, 0, 25, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(180, 0, 25, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(210, 0, 25, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 40).setProration(0.7).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1, 2).setHitStun(28, 12).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(27).setActiveF(2).setEndF(7).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -20, 150, 40);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
			this.player.dx -= this.dir.getX() * 5;
			this.player.dy -= this.dir.getY() * 5;
			this.player.bullets--;
		}
		this.player.dx *= 0.94;
		this.player.dy *= 0.94;
	}
}

class JanLukeRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = ["NPS", "MN"];

		let sweet1 = new PriorityCircle(30, 0, 20, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(50, 0, 20, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(70, 0, 20, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(90, 0, 20, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(110, 0, 20, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(130, 0, 20, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(150, 0, 25, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 25).setProration(0.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1, 1.1).setHitStun(28, 10).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(14).setActiveF(2).setEndF(27).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -10.5, 90, 21);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
			this.player.dx -= this.dir.getX() * 3;
			this.player.dy -= this.dir.getY() * 3;
			this.properties[0].setAngleValue(this.player.dir.value);
			this.player.bullets--;
		}
		this.player.dx *= 0.94;
		this.player.dy *= 0.94;

		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			//if (compare < -0.2) {
				//this.player.dir.value -= 0.11;
			//}
			if (compare > 0.05) {
				this.player.dir.value += 0.11;
			}
		}
	}
}

class JanLukeLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = ["NPS", "MN"];

		let sweet1 = new PriorityCircle(30, 0, 20, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(50, 0, 20, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(70, 0, 20, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(90, 0, 20, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(110, 0, 20, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(130, 0, 20, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(150, 0, 25, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 35).setProration(0.6).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1, 1.1).setHitStun(28, 10).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(17).setActiveF(2).setEndF(27).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -10.5, 90, 21);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
			this.player.dx -= this.dir.getX() * 3;
			this.player.dy -= this.dir.getY() * 3;
			this.properties[0].setAngleValue(this.player.dir.value);
			this.player.bullets--;
		}
		this.player.dx *= 0.94;
		this.player.dy *= 0.94;

		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.05) {
				this.player.dir.value -= 0.093;
			}
			//if (compare > 0.2) {
				//this.player.dir.value += 0.093;
			//}
		}
	}
}

class JanLukeMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = ["SPL", "NPS", "MN", "NN"];

		let sweet1 = new PriorityCircle(30, 0, 20, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(50, 0, 20, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(70, 0, 20, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(90, 0, 20, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(110, 0, 20, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(130, 0, 20, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(150, 0, 20, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 35).setProration(-0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(9, 0.1, 1.1).setHitStun(28, 12).setStunFrames(13);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(7).setActiveF(2).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -10.5, 90, 21);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() > 1 && this.player.bullets > 0) {
			this.player.dir.changeValue(PI / 6);
		}
		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
			this.player.dx -= this.dir.getX() * 3;
			this.player.dy -= this.dir.getY() * 3;
			this.player.bullets--;
		}
		this.player.dx *= 0.94;
		this.player.dy *= 0.94;
	}
}

class JanLukeNPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.linjaLuka);
		this.targetAngle = new Angle();

		this.combo = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(50, 0, 10, 0).setVelocity(18, 0);
		let sweet2 = new PriorityCircle(40, 0, 10, 0).setVelocity(18, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0, 0.1).setHitStun(30).setStunFrames(24).setCommandGrab().setNoComboCounter();
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.linjaLuka);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(6).setStartupF(32).setActiveF(24).setEndF(24).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		player.world.sikeWawa.addMeter(-5.5, -2.2, player);

		if (player.targetPlayer) {
			let futureFrames = constrain(dist(player.x, player.y, player.targetPlayer.x, player.targetPlayer.y) / 2, 13, 36);
			if (player.targetPlayer.hitStun > 0)
				futureFrames = max(10, futureFrames - 15);
			let vel = dist(0, 0, player.targetPlayer.dx, player.targetPlayer.dy);
			let velMult = (vel > 0 ? min(vel, 5) / vel : 0);
			attack.targetAngle.setFromPoint(player.targetPlayer.x - player.x + player.targetPlayer.dx * futureFrames * velMult, player.targetPlayer.y - player.y + player.targetPlayer.dy * futureFrames * velMult);
			if (player.targetPlayer.hitStun >= 24) {
				attack.combo = true;
			}
		}
	}

	draw(g) {
		if (this.getEndF() > 3) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 78, -12, 426, 24);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.auraFrames = 5;

		if (this.getStartupF() <= 0 && (!this.hitPlayerBool || this.getEndF() > 4))
			this.sheet.run();

		if (this.getStartupF() > 0) {
			if (Angle.compare(this.player.dir, this.targetAngle) > 0.05) {
				this.player.dir.changeValue(0.08);
			}
			if (Angle.compare(this.player.dir, this.targetAngle) < -0.05) {
				this.player.dir.changeValue(-0.08);
			}
		}
		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.kamalaLinja, 2);
			//assetManager.sounds.kalamaLinja.play();
		}
		if (this.getActiveF() === 1) {
			this.sheet.setAnimation("Finish");
			this.properties[0].playSound(this.world, assetManager.sounds.kamalaLinja, 2);
			//assetManager.sounds.kalamaLinja.play();
		}

		if (!this.hitPlayerBool && this.getActiveF() === 16) {
			this.player.sheet.setFrameRelative(5);
		}
		if (this.player.targetPlayer && this.player.targetPlayer.hitStun <= 0) {
			this.combo = false;
		}

		if (this.hitPlayerBool) {
			if (this.player.targetPlayer) {
				this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * (this.getEndF() * 18 + 30 + this.player.targetPlayer.collideRadius);
				this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * (this.getEndF() * 18 + 30 + this.player.targetPlayer.collideRadius);
			}
			if (this.getEndF() === 1) {
				let cancelOptions = [];

				let sweet1 = new PriorityCircle(50, 0, 100, 0);
				let circles = [sweet1];

				let sweet = new AttackProperties().setDamage(this.player.getDamageMult() * (this.combo ? 45 : 55), 30).setProration(2).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value).setLaunch(this.combo ? 0.5 : 5, this.combo ? 0.5 : 6).setHitStun(this.combo ? 32 : 25).setStunFrames(15);
				let prop = [sweet];

				//sweet.setHitSound(assetManager.sounds.fanTP);
				//sweet.setBlockSound(assetManager.sounds.fanTP);

				let attack = new Attack(this.player, circles, prop).setClashPriority(false).setStartupF(0).setActiveF(1).setEndF(22);

				this.player.addCurrentAttack(attack);
				attack.rotateTo(this.player.dir);
				this.world.addAttack(attack);

				this.player.setActionLag(attack);

				this.player.sheet.setFrameRelative(11);
			}
		}
	}

	hitConfirmSetFrames() {
		let frames = max(2, 27 - this.getActiveF());
		this.player.actionLag = frames;
		this.setEndF(frames);
		this.setActiveF(0);
		let currentFrame = this.sheet.currentFrame;
		this.sheet.setAnimation("Finish");
		this.sheet.currentFrame = 15 - currentFrame;
		//this.player.hurtboxStateFrame = 40;
		this.player.sheet.setFrameRelative(6);
		this.player.iFrames = frames;
		this.player.invTo = ["attack", "grab"];
	}
}

class JanLukeSPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";

		this.second = false;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffectLili);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(30, 0, 25, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(60, 0, 25, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(90, 0, 25, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(120, 0, 25, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(150, 0, 25, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(180, 0, 25, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(210, 0, 25, 0).setVelocity(0.1, 0);
		let sweet8 = new PriorityCircle(240, 0, 25, 0).setVelocity(0.1, 0);
		//let sweet9 = new PriorityCircle(270, 0, 25, 0).setVelocity(0.1, 0);
		//let sweet10 = new PriorityCircle(300, 0, 25, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8];

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 30).setProration(0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1, 2).setHitStun(28, 12).setStunFrames(5);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(17).setActiveF(2).setEndF(19).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -20, 190, 40);

			g.pop();
		}

		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 6)
			this.sheet.run();

		this.player.auraFrames = 5;

		if (this.getStartupF() > 0) {
			this.player.turnSpeedModifier = 0.06;
		}

		if (this.getStartupF() === 1) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot, 2);
			this.player.dx -= this.dir.getX() * 3;
			this.player.dy -= this.dir.getY() * 3;
			this.player.bullets--;
		}

		if (this.getFromEndF() === 8 && !this.second) {
			this.setStartupF(2);
			this.setActiveF(2);
			this.player.actionLag = this.duration;
			this.second = true;
			this.resetHits();
			this.sheet.setAnimation("Main");
		}
	}
}

class JanLukeRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";

		this.timer = -1;

		this.held = true;

		this.wait = 6;
		this.activationDuration = 2;
		this.explosionDiameter = 140;
		this.detectionRadius = 60;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.sikePakala);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(50, 0, 0, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(25).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(6, 0, 2).setHitStun(41, 5).setStunFrames(5).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(25).setActiveF(400).setEndF(10).setProjectile().setFollow(false).setVelocity(13, 15);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.world.sikeWawa.addMeter(-5.5, -2.2, player);
	}

	draw(g) {
		if (debug.displayHitboxes)
			this.debugDraw(g);
		g.noStroke();
		let size = this.explosionDiameter * 1.25 - 10;
		if (this.getStartupF() > 0)
			size *= Math.max(this.getFromStartupF() / 25, 0.25);
		this.sheet.draw(g, this.circleX(0) - size / 2, this.circleY(0) - size / 2, size, size);
		//g.fill(0, 0, 15, 150);
		//g.ellipse(this.circleX(0), this.circleY(0), 35, 35);
		if (this.currentlyActive()) {
			g.fill(240, 0, 15, 15);
			g.ellipse(this.circleX(0), this.circleY(0), this.detectionRadius * 2, this.detectionRadius * 2);
		}
	}

	logic() {
		this.sheet.run();

		if (!this.player.controls.held("pokaSuli")) {
			this.held = false;
		}

		if (this.getStartupF() === 19) {
			if (this.held) {
				this.wait = 10;
				this.activationDuration = 6;
				this.explosionDiameter = 190;
				this.detectionRadius = 80;
				this.dx /= 4;
				this.dy /= 4;
				this.setEndF(20);
				this.player.actionLag = this.getEndF() + this.getStartupF();
			} else {
				this.dx *= 0.7;
				this.dy *= 0.7;
				this.dx += this.dir.getX() * 8;
				this.dy += this.dir.getY() * 8;
			}
		}
		if (this.getStartupF() === 1) {
			this.dx = 0;
			this.dy = 0;
		}
		if (this.timer > 0)
			this.timer--;
		if (this.player.targetPlayer) {
			if (this.timer === -1 && this.currentlyActive() && dist(this.circleX(0), this.circleY(0), this.player.targetPlayer.x, this.player.targetPlayer.y) < this.player.targetPlayer.collideRadius + this.detectionRadius) {
				this.timer = this.wait;
				this.setEndF(0);
				this.sheet.setAnimation("Explode");
				if (this.explosionDiameter > 170)
					this.sheet.setAnimation("ExplodeBig");
			}
		}
		if (this.timer === 0) {
			this.properties[0].playSound(this.world, assetManager.sounds.explosion);
			this.circles[0].diameter = this.explosionDiameter;
			this.resetMain();
			this.setActiveF(this.activationDuration);
			this.timer = -2;
		}
		if (!this.currentlyActive()) {
			this.x += this.dx;
			this.y += this.dy;
		}
		if (this.getActiveF() === 1) {
			this.sheet.setAnimation("End");
		}
		this.dx *= 0.9;
		this.dy *= 0.9;
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.slowWalkFrames = 300;
			this.player.targetPlayer.slowWalk = 0.7;
		}
	}
}

class JanLukeLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";

		this.timer = -1;

		this.held = true;

		this.wait = 6;
		this.activationDuration = 2;
		this.explosionDiameter = 140;
		this.detectionRadius = 60;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.sikePakala);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(50, 0, 0, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(25).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(6, 0, 2).setHitStun(41, 5).setStunFrames(5).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(25).setActiveF(400).setEndF(10).setProjectile().setFollow(false).setVelocity(13, -15);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.world.sikeWawa.addMeter(-5.5, -2.2, player);
	}

	draw(g) {
		if (debug.displayHitboxes)
			this.debugDraw(g);
		g.noStroke();
		let size = this.explosionDiameter * 1.25 - 10;
		if (this.getStartupF() > 0)
			size *= Math.max(this.getFromStartupF() / 25, 0.25);
		this.sheet.draw(g, this.circleX(0) - size / 2, this.circleY(0) - size / 2, size, size);
		//g.fill(0, 0, 15, 150);
		//g.ellipse(this.circleX(0), this.circleY(0), 35, 35);
		if (this.currentlyActive()) {
			g.fill(240, 0, 15, 15);
			g.ellipse(this.circleX(0), this.circleY(0), this.detectionRadius * 2, this.detectionRadius * 2);
		}
	}

	logic() {
		this.sheet.run();

		if (!this.player.controls.held("pokaSuli")) {
			this.held = false;
		}

		if (this.getStartupF() === 19) {
			if (this.held) {
				this.wait = 10;
				this.activationDuration = 6;
				this.explosionDiameter = 190;
				this.detectionRadius = 80;
				this.dx /= 4;
				this.dy /= 4;
				this.setEndF(20);
				this.player.actionLag = this.getEndF() + this.getStartupF();
			} else {
				this.dx *= 0.7;
				this.dy *= 0.7;
				this.dx += this.dir.getX() * 8;
				this.dy += this.dir.getY() * 8;
			}
		}
		if (this.getStartupF() === 1) {
			this.dx = 0;
			this.dy = 0;
		}
		if (this.timer > 0)
			this.timer--;
		if (this.player.targetPlayer) {
			if (this.timer === -1 && this.currentlyActive() && dist(this.circleX(0), this.circleY(0), this.player.targetPlayer.x, this.player.targetPlayer.y) < this.player.targetPlayer.collideRadius + this.detectionRadius) {
				this.timer = this.wait;
				this.setEndF(0);
				this.sheet.setAnimation("Explode");
				if (this.explosionDiameter > 170)
					this.sheet.setAnimation("ExplodeBig");
			}
		}
		if (this.timer === 0) {
			this.properties[0].playSound(this.world, assetManager.sounds.explosion);
			this.circles[0].diameter = this.explosionDiameter;
			this.resetMain();
			this.setActiveF(this.activationDuration);
			this.timer = -2;
		}
		if (!this.currentlyActive()) {
			this.x += this.dx;
			this.y += this.dy;
		}
		if (this.getActiveF() === 1) {
			this.sheet.setAnimation("End");
		}
		this.dx *= 0.9;
		this.dy *= 0.9;
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.slowWalkFrames = 300;
			this.player.targetPlayer.slowWalk = 0.7;
		}
	}
}

class JanLukeMPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NN", "dash"];

		let sweet1 = new PriorityCircle(50, -55, 80, 0).setVelocity(0.1, 0.05);
		let sweet2 = new PriorityCircle(5, -52, 80, 0).setVelocity(0.1, 0.05);
		let sweet3 = new PriorityCircle(-40, -45, 80, 0).setVelocity(0.1, 0.05);
		let sour1 = new PriorityCircle(50, 45, 70, 1).setVelocity(-0.1, -0.05);
		let sour2 = new PriorityCircle(5, 43, 70, 1).setVelocity(-0.1, -0.05);
		let sour3 = new PriorityCircle(-40, 40, 70, 1).setVelocity(-0.1, -0.05);
		let circles = [sweet1, sweet2, sweet3, sour1, sour2, sour3];

		let sweet = new AttackProperties().setDamage(30).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(14, -3, 0.1).setHitStun(30, 3).setStunFrames(15);
		let sour = new AttackProperties().setDamage(30).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI).setLaunch(10, 3, -0.1).setHitStun(27, 3).setStunFrames(15).setCancelWait(3);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(14).setActiveF(6).setEndF(15);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
		player.invTo = ["grab"];
		player.iFrames = 20;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		
	}
}

class JanLukeNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.held = true;

		this.voiceLine = true;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.gunEffect);
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];

		let circles = [];
		for (let x = 40; x <= 525; x += 25) {
			circles.push(new PriorityCircle(x, 0, 30, 0).setVelocity(1, 0));
		}

		let sweet = new AttackProperties().setDamage(player.getDamageMult() * 125).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0).setHitStun(40).setStunFrames(15).setBlockBreak();
		let prop = [sweet];

		sweet.setHitSound(undefined);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(60).setActiveF(1).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.4);
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 7) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 70, -16, 512, 32);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.auraFrames = 5;
		if (this.getStartupF() === 1) {
			this.player.bullets--;
		}
		if (this.getFromStartupF() === 1 && this.voiceLine) {
			this.voiceLine = false;
			this.properties[0].playSound(this.world, assetManager.sounds.sinaSeme, 1);
			//assetManager.sounds.sinaSeme.play();
		}

		if (this.getFromStartupF() === 16)
			this.player.addAction("NPS");
		if (this.getStartupF() === 16) {
			this.player.removeAction("NL");
			this.player.removeAction("NPS");
			this.player.removeAction("dash");
		}
		if (this.getStartupF() <= 0 && this.getFromEndF() < 7)
			this.sheet.run();
		this.properties[0].setAngleValue(this.player.dir.value);
		if (!this.player.controls.pressed("nasa"))
			this.held = false;
		if (this.getStartupF() === 16) {
			this.properties[0].playSound(this.world, assetManager.sounds.gunCock);
		}
		if (this.getStartupF() === 2 && this.held) {
			this.setStartupF(14);
			this.player.setActionLag(this);
			this.held = false;
		}
		if (this.getStartupF() === 1) {
			this.player.sheet.setAnimation("NNF");//This is the animation for the actual swing
			//this.player.sheet.currentSubFrames += this.player.sheet.frameRate;
			this.player.setStateIgnore(this.player.states.NNF);
			this.player.dx -= this.player.dir.getX() * 5;
			this.player.dy -= this.player.dir.getY() * 5;
			this.properties[0].playSound(this.world, assetManager.sounds.gunShot);
		}
		if (this.getStartupF() <= 0) {
			this.player.dx *= 0.92;
			this.player.dy *= 0.92;
		}

		this.player.turnSpeedModifier = min(this.getFromStartupF() / 400 * 3, 0.3);
	}
}

class JanLukeSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(50, 0, 30, 0);
		let sour2 = new PriorityCircle(45, -30, 30, 0);
		let sour3 = new PriorityCircle(45, 30, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(35).setGrab(50).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
		let prop = [sour];

		sour.setHitSound(assetManager.sounds.gunShot);

		return new this(player, circles, prop).setClashPriority(6).setStartupF(6).setActiveF(6).setEndF(22).setRotateable();
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

class JanLukeRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";
	}

	static createAttack(player) {
		let circles = [];

		let prop = [];

		return new this(player, circles, prop).setStartupF(30);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;
		player.playSound(assetManager.sounds.reload);
	}

	draw(g) { }

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (this.getStartupF() === 9) {
			this.player.bullets = this.player.maxBullets;
		}
	}
}

class JanLukeLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.held = true;
	}

	static createAttack(player) {
		let circles = [];

		let prop = [];

		return new this(player, circles, prop).setStartupF(35);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;
	}

	draw(g) { }

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.auraFrames = 5;
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (!this.player.controls.pressed("nasa"))
			this.held = false;
		if (this.getStartupF() === 26) {
			this.player.sheet.setAnimation("LNS");
		}
		if (this.getStartupF() === 11) {
			this.player.sheet.setAnimation("LNF");
		}
		if (this.getStartupF() < 26 && this.getStartupF() > 5) {
			this.world.sikeWawa.addMeter(0.12, 0.09, this.player);
		}
		if (this.held && this.getStartupF() === 20) {
			this.player.actionLag++;
			this.setStartupF(this.getStartupF() + 1);
		}
	}
}

class JanLukeMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";

		this.cancelledFrame = 6;
	}

	static createAttack(player) {
		let circles = [];

		let prop = [];

		return new this(player, circles, prop).setStartupF(39);
	}

	static startAttack(player, attack, bufferInfo) {
		if (player.currentState.name === "block") {
			attack.cancelledFrame = 4;
			player.sheet.setAnimation("MNF");
		}

		player.dx = 0;
		player.dy = 0;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.dx *= 0.5;
		this.player.dy *= 0.5;
		if (this.getFromStartupF() === this.cancelledFrame) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 18;
		}
		if (this.getFromStartupF() === this.cancelledFrame + 13) {
			this.player.addAction("dash", "MPS");
		}
	}
}

characters.push(Luke);