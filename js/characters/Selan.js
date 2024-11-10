class Selan extends Player {
	constructor() {
		super([
			new Circle(0, 0, 90),
			new Circle(10, 40, 40),
			new Circle(10, -40, 40)
		]);

		this.hurtboxes["block"] = [
			[new Circle(0, 0, 85),
			new Circle(35, 20, 40),
			new Circle(35, -20, 40)]
		];

		this.hurtboxes["hitstun"] = [
			[new Circle(1, 0, 89),
			new Circle(-10, 40, 40),
			new Circle(8, -30, 40)],
			[new Circle(-2, 1, 92),
			new Circle(0, 50, 40),
			new Circle(0, -50, 40)],
			[new Circle(3, 0, 87),
			new Circle(10, 40, 40),
			new Circle(-10, -40, 40)],
			[new Circle(-3, -2, 93),
			new Circle(0, 50, 40),
			new Circle(0, -50, 40)]
		];

		this.hurtboxes["clash"] = [
			[new Circle(1, 0, 89),
			new Circle(-10, 40, 40),
			new Circle(8, -30, 40)],
			[new Circle(-2, 1, 92),
			new Circle(0, 50, 40),
			new Circle(0, -50, 40)],
			[new Circle(3, 0, 87),
			new Circle(10, 40, 40),
			new Circle(-10, -40, 40)],
			[new Circle(-3, -2, 93),
			new Circle(0, 50, 40),
			new Circle(0, -50, 40)]
		];

		this.hurtboxes["lipuLili"] = [
			[new Circle(0, 0, 60),
			new Circle(0, 40, 50),
			new Circle(0, -40, 50)],
			[new Circle(10, -8, 60),
			new Circle(-7, 34, 50),
			new Circle(10, -34, 50)],
			[new Circle(9, -6, 60),
			new Circle(-10, 37, 50),
			new Circle(9, -48, 50)],
			[new Circle(1, -10, 60),
			new Circle(7, 50, 50),
			new Circle(-5, -45, 50)],
		];

		this.hurtboxes["lipuSuli"] = [
			[new Circle(0, 0, 60),
			new Circle(0, 40, 50),
			new Circle(0, -40, 50)],
			[new Circle(20, -16, 60),
			new Circle(-14, 38, 50),
			new Circle(20, -38, 50)],
			[new Circle(18, -12, 60),
			new Circle(-20, 44, 50),
			new Circle(18, -56, 50)],
			[new Circle(2, -20, 60),
			new Circle(14, 60, 50),
			new Circle(-10, -50, 50)]
		];

		this.hurtboxes["rightRoll"] = [
			[new Circle(-2, -6, 65),
			new Circle(-10, 60, 53),
			new Circle(14, -51, 60)],
			[new Circle(-7, -23, 60),
			new Circle(-8, 40, 50),
			new Circle(25, -25, 73)],
			[new Circle(7, 0, 65),
			new Circle(-11, 27, 62),
			new Circle(2, -35, 52)],
			[new Circle(-5, 8, 78),
			new Circle(14, 14, 43),
			new Circle(4, -40, 43)],
			[new Circle(-3, 1, 78),
			new Circle(-9, -41, 42),
			new Circle(16, 26, 41)],
			[new Circle(0, 0, 87),
			new Circle(12, 36, 41),
			new Circle(3, -42, 43)]
		];

		this.hurtboxes["neutralRoll"] = [
			[new Circle(0, 0, 65),
			new Circle(-10, 60, 53),
			new Circle(-10, -60, 53)],
			[new Circle(0, 0, 70),
			new Circle(-8, 55, 50),
			new Circle(-8, -55, 50)],
			[new Circle(0, 0, 75),
			new Circle(-2, 50, 46),
			new Circle(-2, -50, 46)],
			[new Circle(0, 0, 82),
			new Circle(4, 45, 43),
			new Circle(4, -45, 43)]
		];

		this.hurtboxes["leftRoll"] = [
			[new Circle(-2, 6, 65),
			new Circle(-10, -60, 53),
			new Circle(14, 51, 60)],
			[new Circle(-7, 23, 60),
			new Circle(-8, -40, 50),
			new Circle(25, 25, 73)],
			[new Circle(7, 0, 65),
			new Circle(-11, -27, 62),
			new Circle(2, 35, 52)],
			[new Circle(-5, -8, 78),
			new Circle(14, -14, 43),
			new Circle(4, 40, 43)],
			[new Circle(-3, -1, 78),
			new Circle(-9, 41, 42),
			new Circle(16, -26, 41)],
			[new Circle(0, 0, 87),
			new Circle(12, -36, 41),
			new Circle(3, 42, 43)]
		];

		this.hurtboxes["dead"] = [
			[new Circle(-8, -5, 87),
			new Circle(8, 40, 49),
			new Circle(16, -36, 52),
			new Circle(16, 5, 75)],
			[new Circle(-22, -23, 64),
			new Circle(-13, 35, 62),
			new Circle(27, -25, 60),
			new Circle(30, 26, 60)],
			[new Circle(4, -30, 62),
			new Circle(-28, 19, 60),
			new Circle(14, 39, 55),
			new Circle(37, 6, 53)],
			[new Circle(20, -15, 50),
			new Circle(-35, -16, 48),
			new Circle(22, 29, 46),
			new Circle(-22, 34, 47)],
			[new Circle(-15, -30, 41),
			new Circle(24, 3, 40),
			new Circle(-2, 36, 37),
			new Circle(-33, 8, 40)],
			[new Circle(1, -22, 27),
			new Circle(15, 13, 27),
			new Circle(-10, 29, 29),
			new Circle(-22, -3, 26)],
			[new Circle(11, -11, 21),
			new Circle(8, 11, 23),
			new Circle(-14, 12, 22),
			new Circle(-14, -6, 24)],
			[new Circle(5, -5, 10),
			new Circle(4, 6, 11),
			new Circle(-7, 6, 11),
			new Circle(-7, -3, 9)],
			[]
		];

		this.hurtboxes["grab"] = [
			[new Circle(0, 0, 91),
			new Circle(35, 30, 39),
			new Circle(35, -30, 41)],
			[new Circle(0, 0, 92),
			new Circle(35, 30, 41),
			new Circle(35, -30, 39)],
			[new Circle(0, 0, 89),
			new Circle(35, 30, 40),
			new Circle(35, -30, 40)]
		];

		this.hurtboxes["grabbed"] = [
			[new Circle(0, 0, 91),
			new Circle(7, 43, 39),
			new Circle(11, -42, 41)],
			[new Circle(0, 0, 92),
			new Circle(9, 38, 41),
			new Circle(6, -38, 39)],
			[new Circle(0, 0, 89),
			new Circle(13, 37, 40),
			new Circle(10, -44, 40)]
		];
		this.hurtboxes["neutral"] = [
			[new Circle(0, 0, 91),
			new Circle(10, 40, 39),
			new Circle(10, -40, 41)],
			[new Circle(0, 0, 92),
			new Circle(10, 40, 41),
			new Circle(10, -40, 39)],
			[new Circle(0, 0, 89),
			new Circle(10, 40, 40),
			new Circle(10, -40, 40)]
		];

		this.hurtboxes["walk"] = [
			[new Circle(-1, 0, 91),
			new Circle(10, 40, 39),
			new Circle(10, -40, 41)],
			[new Circle(-2, 0, 92),
			new Circle(11, 41, 38),
			new Circle(9, -41, 42)],
			[new Circle(-3, 0, 93),
			new Circle(12, 42, 37),
			new Circle(8, -42, 43)],
			[new Circle(-3, 0, 94),
			new Circle(12, 42, 36),
			new Circle(7, -43, 44)],
			[new Circle(-1, 0, 92),
			new Circle(11, 41, 37),
			new Circle(9, -41, 43)],
			[new Circle(1, 0, 89),
			new Circle(10, 40, 38),
			new Circle(10, -40, 41)],
			[new Circle(2, 0, 87),
			new Circle(9, 41, 41),
			new Circle(11, -41, 39)],
			[new Circle(4, 0, 86),
			new Circle(8, 42, 42),
			new Circle(12, -42, 39)],
			[new Circle(2, 0, 89),
			new Circle(9, 41, 41),
			new Circle(13, -43, 39)],
			[new Circle(0, 0, 90),
			new Circle(10, 40, 40),
			new Circle(11, -41, 40)]
		];

		this.hurtboxes["dash"] = [
			[new Circle(7, 0, 50),
			new Circle(22, 12, 34),
			new Circle(31, -8, 30)],
			[new Circle(-10, -3, 38),
			new Circle(11, 9, 41),
			new Circle(31, -10, 37)],
			[new Circle(0, 2, 51),
			new Circle(17, -14, 36),
			new Circle(32, 8, 36)],
			[new Circle(1, -4, 59),
			new Circle(14, 16, 39),
			new Circle(22, -24, 38)],
			[new Circle(5, -1, 56),
			new Circle(-4, 19, 42),
			new Circle(26, -11, 39)],
			[new Circle(6, -8, 51),
			new Circle(-21, 1, 46),
			new Circle(27, 5, 42)],
			[new Circle(-3, -14, 43),
			new Circle(-17, 3, 48),
			new Circle(11, 16, 37)],
			[new Circle(-5, 0, 56),
			new Circle(4, -21, 38),
			new Circle(9, 18, 36)],
			[new Circle(0, 0, 67),
			new Circle(9, 28, 36),
			new Circle(9, -30, 39)]
		];

		this.hurtboxes["dash cancel"] = [
			[new Circle(7, 0, 49),
			new Circle(22, 13, 39),
			new Circle(30, -12, 35)],
			[new Circle(-17, 0, 59),
			new Circle(10, 9, 50),
			new Circle(41, -7, 47)],
			[new Circle(-6, 0, 68),
			new Circle(19, 8, 49),
			new Circle(40, -2, 48)],
			[new Circle(-10, 0, 79),
			new Circle(11, 11, 46),
			new Circle(30, -11, 43)],
			[new Circle(0, 0, 83),
			new Circle(17, 28, 38),
			new Circle(18, -26, 39)]
		];

		this.hurtboxes["power dash"] = [
			[new Circle(-23, 7, 67),
			new Circle(25, 28, 62),
			new Circle(19, -31, 61)],
			[new Circle(1, 25, 66),
			new Circle(-7, -26, 63),
			new Circle(37, 5, 69)],
			[new Circle(17, 22, 62),
			new Circle(-29, -7, 68),
			new Circle(29, -27, 60)],
			[new Circle(-13, -3, 76),
			new Circle(14, 23, 53),
			new Circle(23, -35, 56)],
			[new Circle(-8, 0, 89),
			new Circle(12, 36, 41),
			new Circle(17, -45, 41)]
		];

		this.hurtboxes["dash attack"] = [
			[new Circle(0, 0, 70),
			new Circle(6, 31, 35),
			new Circle(9, -36, 31)],
			[new Circle(0, 0, 108)],
			[new Circle(0, 0, 109)],
			[new Circle(0, 0, 100),
			new Circle(-1, 41, 27),
			new Circle(1, -44, 30)],
			[new Circle(-1, 2, 84),
			new Circle(11, 35, 31),
			new Circle(6, -34, 32)],
			[new Circle(0, 0, 49),
			new Circle(7, 32, 46),
			new Circle(5, -31, 46)],
			[new Circle(0, 0, 61),
			new Circle(9, 33, 42),
			new Circle(8, -27, 44)],
			[new Circle(0, 0, 79),
			new Circle(9, 34, 42),
			new Circle(13, -34, 43)],
			[new Circle(0, 0, 83),
			new Circle(10, 37, 42),
			new Circle(13, -38, 43)],
			[new Circle(0, 0, 96),
			new Circle(12, 43, 43),
			new Circle(15, -45, 41)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(4, 0, 83),
			new Circle(5, 41, 36),
			new Circle(18, -38, 47)],
			[new Circle(4, 0, 81),
			new Circle(-2, 35, 33),
			new Circle(28, -33, 53)],
			[new Circle(7, 0, 78),
			new Circle(-3, 34, 36),
			new Circle(44, -25, 61)],
			[new Circle(13, 3, 75),
			new Circle(-4, 32, 32),
			new Circle(49, -2, 49)],
			[new Circle(11, -1, 79),
			new Circle(-3, 33, 35),
			new Circle(43, -7, 46)],
			[new Circle(9, 0, 84),
			new Circle(6, 35, 38),
			new Circle(35, -28, 47)],
			[new Circle(5, 0, 89),
			new Circle(10, 36, 40),
			new Circle(26, -33, 45)],
			[new Circle(2, 0, 91),
			new Circle(16, 36, 39),
			new Circle(17, -38, 38)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(0, 0, 76),
			new Circle(20, 28, 40),
			new Circle(22, -29, 40)],
			[new Circle(0, 0, 58),
			new Circle(31, 8, 47),
			new Circle(55, -7, 49)],
			[new Circle(3, 0, 50),
			new Circle(48, 0, 62),
			new Circle(82, 0, 60)],
			[new Circle(3, 0, 52),
			new Circle(48, 2, 58),
			new Circle(82, -3, 58)],
			[new Circle(2, 0, 57),
			new Circle(47, -3, 56),
			new Circle(82, 1, 60)],
			[new Circle(1, 0, 64),
			new Circle(34, -11, 50),
			new Circle(67, 7, 48)],
			[new Circle(0, 0, 70),
			new Circle(20, -25, 46),
			new Circle(32, 22, 48)],
			[new Circle(0, 0, 79),
			new Circle(4, -35, 44),
			new Circle(2, 37, 46)],
			[new Circle(0, 0, 87),
			new Circle(7, 34, 41),
			new Circle(9, -35, 40)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 0, 76),
			new Circle(15, 36, 40),
			new Circle(30, -13, 40)],
			[new Circle(0, 0, 58),
			new Circle(40, 50, 47),
			new Circle(45, 17, 49)],
			[new Circle(9, 6, 52),
			new Circle(47, 46, 62),
			new Circle(89, 89, 60)],
			[new Circle(9, 6, 53),
			new Circle(47, 46, 58),
			new Circle(87, 88, 58)],
			[new Circle(2, 0, 57),
			new Circle(49, 16, 56),
			new Circle(68, 67, 60)],
			[new Circle(1, 0, 64),
			new Circle(34, -11, 50),
			new Circle(48, 50, 48)],
			[new Circle(0, 0, 70),
			new Circle(20, -25, 46),
			new Circle(29, 32, 48)],
			[new Circle(0, 0, 79),
			new Circle(4, -35, 44),
			new Circle(2, 37, 46)],
			[new Circle(0, 0, 87),
			new Circle(7, 34, 41),
			new Circle(9, -35, 40)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 0, 76),
			new Circle(15, -36, 40),
			new Circle(30, 13, 40)],
			[new Circle(0, 0, 58),
			new Circle(40, -50, 47),
			new Circle(45, -17, 49)],
			[new Circle(9, -6, 52),
			new Circle(49, -46, 62),
			new Circle(96, -89, 60)],
			[new Circle(9, -6, 53),
			new Circle(47, -46, 58),
			new Circle(92, -88, 58)],
			[new Circle(2, 0, 57),
			new Circle(49, -16, 56),
			new Circle(68, -67, 60)],
			[new Circle(1, 0, 64),
			new Circle(34, 11, 50),
			new Circle(48, -50, 48)],
			[new Circle(0, 0, 70),
			new Circle(20, 25, 46),
			new Circle(29, -32, 48)],
			[new Circle(0, 0, 79),
			new Circle(4, 35, 44),
			new Circle(2, -37, 46)],
			[new Circle(0, 0, 87),
			new Circle(7, -34, 41),
			new Circle(9, 35, 40)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(-5, 0, 78),
			new Circle(10, 60, 55),
			new Circle(13, -61, 54)],
			[new Circle(-6, -1, 69),
			new Circle(9, 68, 59),
			new Circle(13, -67, 58)],
			[new Circle(4, 0, 130),
			new Circle(14, 51, 42),
			new Circle(10, -50, 43)],
			[new Circle(4, -2, 106),
			new Circle(1, 41, 38),
			new Circle(-3, -46, 37)],
			[new Circle(7, 2, 97),
			new Circle(-9, 40, 36),
			new Circle(-1, -46, 37)],
			[new Circle(2, 10, 86),
			new Circle(-8, 38, 34),
			new Circle(8, -38, 37)],
			[new Circle(-5, 10, 79),
			new Circle(3, 43, 37),
			new Circle(17, -27, 39)],
			[new Circle(-7, 3, 74),
			new Circle(12, 40, 36),
			new Circle(21, -21, 38)],
			[new Circle(-9, -4, 68),
			new Circle(15, 30, 36),
			new Circle(21, -15, 38)],
			[new Circle(-4, -4, 80),
			new Circle(21, 24, 37),
			new Circle(26, -22, 39)],
			[new Circle(-4, 2, 87),
			new Circle(20, 33, 37),
			new Circle(25, -30, 41)],
			[new Circle(0, 0, 92),
			new Circle(19, 40, 40),
			new Circle(21, -36, 40)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(0, 0, 76),
			new Circle(25, 28, 34),
			new Circle(44, -13, 35)],
			[new Circle(-7, 0, 50),
			new Circle(34, -16, 34),
			new Circle(24, 12, 34)],
			[new Circle(-3, 0, 60),
			new Circle(39, -8, 36),
			new Circle(32, 17, 32)],
			[new Circle(-4, 2, 43),
			new Circle(16, -9, 29),
			new Circle(14, 16, 27)],
			[new Circle(0, 3, 56),
			new Circle(13, -15, 30),
			new Circle(13, 19, 30)],
			[new Circle(0, 0, 58),
			new Circle(13, 18, 34),
			new Circle(15, -17, 35)],
			[new Circle(0, 0, 65),
			new Circle(13, 20, 37),
			new Circle(16, -21, 36)],
			[new Circle(0, 0, 77),
			new Circle(15, 29, 40),
			new Circle(16, -26, 38)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(0, 0, 103),
			new Circle(8, 48, 50),
			new Circle(8, -50, 51)],
			[new Circle(0, 0, 107),
			new Circle(6, 49, 51),
			new Circle(6, -50, 54)],
			[new Circle(0, 0, 44),
			new Circle(3, 33, 31),
			new Circle(1, -36, 28)],
			[new Circle(0, -1, 18),
			new Circle(16, -2, 17),
			new Circle(31, -1, 18)],
			[new Circle(8, -2, 19),
			new Circle(22, -1, 17),
			new Circle(40, -2, 19),
			new Circle(56, 0, 17)],
			[new Circle(33, -1, 19),
			new Circle(50, -1, 16),
			new Circle(68, -1, 19),
			new Circle(88, 0, 18),
			new Circle(105, 1, 16)],
			[new Circle(78, 1, 16),
			new Circle(96, 1, 17),
			new Circle(112, 0, 15),
			new Circle(128, 1, 17)],
			[new Circle(148, -1, 33),
			new Circle(148, 11, 16),
			new Circle(148, -16, 18)],
			[new Circle(150, 0, 57),
			new Circle(150, 40, 58),
			new Circle(150, -40, 57)],
			[new Circle(150, 0, 37),
			new Circle(151, 42, 37),
			new Circle(150, -41, 37)],
			[new Circle(150, 0, 50),
			new Circle(150, 42, 51),
			new Circle(149, -39, 51)],
			[new Circle(150, 20, 34),
			new Circle(148, -18, 35),
			new Circle(148, 49, 41),
			new Circle(143, -50, 42)],
			[new Circle(131, 53, 32),
			new Circle(129, -44, 32),
			new Circle(102, 70, 43),
			new Circle(100, -70, 46)],
			[new Circle(56, 64, 47),
			new Circle(54, -67, 45),
			new Circle(96, 67, 35),
			new Circle(94, -67, 35)],
			[new Circle(20, 47, 50),
			new Circle(21, -49, 48),
			new Circle(57, 66, 34),
			new Circle(55, -69, 33)],
			[new Circle(-2, 15, 50),
			new Circle(-2, -21, 48),
			new Circle(19, 49, 33),
			new Circle(21, -50, 34)],
			[new Circle(0, 0, 90),
			new Circle(12, 43, 30),
			new Circle(13, -41, 27)],
			[new Circle(0, 0, 96),
			new Circle(6, 36, 44),
			new Circle(6, -31, 44)],
			[new Circle(0, 0, 93),
			new Circle(8, 35, 34),
			new Circle(10, -35, 33)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(0, -9, 79),
			new Circle(7, 34, 40),
			new Circle(5, -46, 35)],
			[new Circle(0, 15, 64),
			new Circle(21, 25, 35),
			new Circle(5, -34, 35)],
			[new Circle(0, 51, 75),
			new Circle(32, 52, 33),
			new Circle(2, -3, 38)],
			[new Circle(0, 53, 75),
			new Circle(34, 72, 34),
			new Circle(14, 14, 43)],
			[new Circle(-1, 49, 64),
			new Circle(21, 82, 34),
			new Circle(24, 24, 32)],
			[new Circle(-1, 40, 59),
			new Circle(11, 74, 34),
			new Circle(32, 34, 33)],
			[new Circle(-2, 34, 70),
			new Circle(2, 71, 33),
			new Circle(33, 18, 33)],
			[new Circle(-1, 25, 73),
			new Circle(8, 67, 35),
			new Circle(30, 3, 34)],
			[new Circle(-1, 13, 75),
			new Circle(16, 48, 38),
			new Circle(29, -20, 34)],
			[new Circle(1, 7, 82),
			new Circle(21, 41, 38),
			new Circle(24, -30, 36)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(0, 9, 79),
			new Circle(7, -34, 40),
			new Circle(5, 46, 35)],
			[new Circle(0, -15, 64),
			new Circle(21, -25, 35),
			new Circle(5, 34, 35)],
			[new Circle(0, -51, 75),
			new Circle(32, -52, 33),
			new Circle(2, 3, 38)],
			[new Circle(0, -53, 75),
			new Circle(34, -72, 34),
			new Circle(14, -14, 43)],
			[new Circle(-1, -49, 64),
			new Circle(21, -82, 34),
			new Circle(24, -24, 32)],
			[new Circle(-1, -40, 59),
			new Circle(11, -74, 34),
			new Circle(32, -34, 33)],
			[new Circle(-2, -34, 70),
			new Circle(2, -71, 33),
			new Circle(33, -18, 33)],
			[new Circle(-1, -25, 73),
			new Circle(8, -67, 35),
			new Circle(30, -3, 34)],
			[new Circle(-1, -13, 75),
			new Circle(16, -48, 38),
			new Circle(29, 20, 34)],
			[new Circle(1, -7, 82),
			new Circle(21, -41, 38),
			new Circle(24, 30, 36)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(-1, 0, 86),
			new Circle(5, 32, 38),
			new Circle(6, -31, 37)],
			[new Circle(1, 0, 59),
			new Circle(1, 19, 29),
			new Circle(3, -21, 29)],
			[new Circle(1, 0, 38)],
			[new Circle(1, 0, 21)],
			[new Circle(165, 0, 40),
			new Circle(0, 0, 50)],
			[new Circle(0, 0, 50),
			new Circle(165, 0, 54),
			new Circle(150, 1, 45)],
			[new Circle(0, 0, 38),
			new Circle(166, 1, 59),
			new Circle(115, 1, 64),
			new Circle(66, 3, 63)],
			[new Circle(0, 0, 37),
			new Circle(166, 0, 56),
			new Circle(54, -1, 56),
			new Circle(109, 1, 56)],
			[new Circle(0, 0, 55),
			new Circle(166, 0, 45),
			new Circle(125, 0, 50),
			new Circle(89, -1, 53)],
			[new Circle(0, 0, 86),
			new Circle(3, 32, 37),
			new Circle(3, -35, 39),
			new Circle(166, 1, 39),
			new Circle(118, -1, 60)],
			[new Circle(0, 0, 98),
			new Circle(9, 40, 39),
			new Circle(8, -40, 41),
			new Circle(165, 1, 28),
			new Circle(137, 1, 45)],
			[new Circle(0, 0, 114),
			new Circle(16, 43, 47),
			new Circle(14, -46, 46),
			new Circle(161, 1, 26)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(0, 0, 66),
			new Circle(10, 40, 55),
			new Circle(12, -43, 47),
			new Circle(24, 59, 46),
			new Circle(21, -58, 38)],
			[new Circle(0, 0, 48),
			new Circle(10, 40, 49),
			new Circle(11, -43, 48),
			new Circle(36, 66, 44),
			new Circle(26, -66, 40),
			new Circle(48, 76, 32),
			new Circle(45, -75, 29)],
			[new Circle(0, 0, 42),
			new Circle(12, 41, 39),
			new Circle(10, -43, 43),
			new Circle(41, 62, 38),
			new Circle(32, -63, 38),
			new Circle(71, 60, 36),
			new Circle(64, -73, 35)],
			[new Circle(0, 0, 43),
			new Circle(15, 42, 40),
			new Circle(14, -41, 40),
			new Circle(46, 61, 35),
			new Circle(37, -61, 33),
			new Circle(77, 62, 35),
			new Circle(67, -71, 30),
			new Circle(104, 51, 28),
			new Circle(90, -65, 28)],
			[new Circle(-179, 0, 47),
			new Circle(-159, 38, 41),
			new Circle(-163, -38, 40),
			new Circle(-129, 59, 38),
			new Circle(-139, -65, 36),
			new Circle(-95, 62, 36),
			new Circle(-109, -73, 32),
			new Circle(-64, 47, 35),
			new Circle(-81, -67, 31),
			new Circle(-36, 36, 33),
			new Circle(-55, -54, 32)],
			[new Circle(-177, 11, 35),
			new Circle(-157, 39, 33),
			new Circle(-161, -42, 33),
			new Circle(-126, 58, 32),
			new Circle(-133, -66, 35),
			new Circle(-83, 58, 40),
			new Circle(-95, -66, 37),
			new Circle(-46, 45, 45),
			new Circle(-60, -56, 38),
			new Circle(-22, 16, 48),
			new Circle(-26, -33, 40)],
			[new Circle(-162, 30, 30),
			new Circle(-139, 49, 30),
			new Circle(-149, -52, 28),
			new Circle(-107, 58, 37),
			new Circle(-126, -64, 36),
			new Circle(-71, 56, 46),
			new Circle(-85, -65, 45),
			new Circle(-33, 40, 57),
			new Circle(-52, -49, 52),
			new Circle(0, 1, 67),
			new Circle(-20, -27, 58)],
			[new Circle(-138, -61, 32),
			new Circle(-119, 49, 57),
			new Circle(-96, -65, 52),
			new Circle(-50, 42, 79),
			new Circle(-41, -42, 76),
			new Circle(3, 0, 78)],
			[new Circle(-78, -67, 44),
			new Circle(-81, 53, 41),
			new Circle(-43, -47, 66),
			new Circle(-43, 35, 71),
			new Circle(0, -1, 85)],
			[new Circle(-1, 0, 91),
			new Circle(-58, 42, 61),
			new Circle(-51, -51, 73)],
			[new Circle(2, 0, 95),
			new Circle(-35, -41, 56),
			new Circle(-39, 38, 54)],
			[new Circle(-3, -1, 93),
			new Circle(39, 42, 50),
			new Circle(41, -43, 50)],
			[new Circle(-4, -1, 95),
			new Circle(20, 39, 50),
			new Circle(20, -41, 50)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(-14, 0, 84),
			new Circle(-17, 50, 41),
			new Circle(-14, -41, 43)],
			[new Circle(-24, -8, 60),
			new Circle(-40, 43, 44),
			new Circle(-40, -38, 41),
			new Circle(-20, 22, 50)],
			[new Circle(-6, 31, 49),
			new Circle(-39, 24, 50),
			new Circle(-43, -20, 43),
			new Circle(-8, -27, 51)],
			[new Circle(15, -12, 51),
			new Circle(10, 16, 55),
			new Circle(-30, 40, 43),
			new Circle(-26, -31, 42)],
			[new Circle(11, -13, 59),
			new Circle(13, 12, 55),
			new Circle(-40, -18, 43),
			new Circle(-36, 24, 44)],
			[new Circle(12, -10, 56),
			new Circle(10, 13, 55),
			new Circle(-39, -13, 41),
			new Circle(-38, 17, 41)],
			[new Circle(11, -33, 46),
			new Circle(3, 38, 48),
			new Circle(-35, -19, 40),
			new Circle(-38, 23, 39)],
			[new Circle(-1, -39, 43),
			new Circle(5, 55, 48),
			new Circle(-15, -5, 46),
			new Circle(-18, 15, 47)],
			[new Circle(-9, -5, 57),
			new Circle(-9, 6, 56),
			new Circle(-6, -38, 45),
			new Circle(0, 55, 48)],
			[new Circle(-6, 2, 69),
			new Circle(2, 43, 40),
			new Circle(4, -35, 40)],
			[new Circle(-7, 0, 84),
			new Circle(6, 45, 39),
			new Circle(6, -39, 38)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(1, 19, 40),
			new Circle(3, 60, 30),
			new Circle(4, -20, 24)],
			[new Circle(1, 19, 36),
			new Circle(1, 54, 25),
			new Circle(3, -12, 26)],
			[new Circle(0, 3, 41),
			new Circle(0, 37, 27),
			new Circle(-1, -29, 27)],
			[new Circle(0, -15, 31),
			new Circle(-3, 2, 20),
			new Circle(2, -32, 18)],
			[new Circle(-16, 0, 67),
			new Circle(8, 15, 65),
			new Circle(8, -11, 71)],
			[new Circle(-31, 1, 53),
			new Circle(20, -25, 55),
			new Circle(16, 34, 56)],
			[new Circle(-34, -18, 55),
			new Circle(38, -20, 57),
			new Circle(-4, 41, 53)],
			[new Circle(-13, -29, 48),
			new Circle(-13, 26, 58),
			new Circle(39, -1, 50)],
			[new Circle(-7, 11, 63),
			new Circle(-6, -26, 40),
			new Circle(28, 21, 39)],
			[new Circle(-4, 6, 73),
			new Circle(2, -24, 36),
			new Circle(12, 33, 40)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(1, -19, 40),
			new Circle(3, -60, 30),
			new Circle(4, 20, 24)],
			[new Circle(1, -19, 36),
			new Circle(1, -54, 25),
			new Circle(3, 12, 26)],
			[new Circle(0, -3, 41),
			new Circle(0, -37, 27),
			new Circle(-1, 29, 27)],
			[new Circle(0, 15, 31),
			new Circle(-3, -2, 20),
			new Circle(2, 32, 18)],
			[new Circle(-16, 0, 67),
			new Circle(8, -15, 65),
			new Circle(8, 11, 71)],
			[new Circle(-31, -1, 53),
			new Circle(20, 25, 55),
			new Circle(16, -34, 56)],
			[new Circle(-34, 18, 55),
			new Circle(38, 20, 57),
			new Circle(-4, -41, 53)],
			[new Circle(-13, 29, 48),
			new Circle(-13, -26, 58),
			new Circle(39, 1, 50)],
			[new Circle(-7, -11, 63),
			new Circle(-6, 26, 40),
			new Circle(28, -21, 39)],
			[new Circle(-4, -6, 73),
			new Circle(2, 24, 36),
			new Circle(12, -33, 40)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(-50, 1, 62),
			new Circle(-11, 20, 48),
			new Circle(4, -16, 34)],
			[new Circle(-33, -1, 47),
			new Circle(3, 10, 43),
			new Circle(40, -1, 20)],
			[new Circle(0, 2, 42),
			new Circle(34, 1, 41),
			new Circle(80, -1, 17)],
			[new Circle(12, 3, 50),
			new Circle(33, -10, 41),
			new Circle(120, 0, 8)],
			[new Circle(0, 0, 56),
			new Circle(27, -22, 38),
			new Circle(160, 0, 78)],
			[new Circle(0, 0, 63),
			new Circle(24, -27, 38),
			new Circle(145, 2, 57)],
			[new Circle(0, 0, 62),
			new Circle(23, -27, 39),
			new Circle(108, 1, 50)],
			[new Circle(-1, 3, 61),
			new Circle(19, -21, 37),
			new Circle(76, 1, 45)],
			[new Circle(0, -2, 63),
			new Circle(15, -25, 36),
			new Circle(41, 9, 42)],
			[new Circle(-1, 1, 74),
			new Circle(13, -23, 37),
			new Circle(20, 22, 34)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(-39, 1, 63),
			new Circle(6, 44, 40),
			new Circle(-2, -44, 40),
			new Circle(48, -6, 30)],
			[new Circle(-70, -23, 50),
			new Circle(-20, 77, 46),
			new Circle(76, 26, 48),
			new Circle(35, -68, 45)],
			[new Circle(-46, -63, 48),
			new Circle(-53, 47, 50),
			new Circle(64, -33, 47),
			new Circle(50, 61, 45)],
			[new Circle(-3, -70, 52),
			new Circle(-68, 3, 49),
			new Circle(11, 68, 55),
			new Circle(69, 6, 50)],
			[new Circle(39, -54, 47),
			new Circle(53, 41, 47),
			new Circle(-62, -42, 50),
			new Circle(-42, 60, 47)],
			[new Circle(61, -13, 49),
			new Circle(12, 61, 50),
			new Circle(-68, 18, 50),
			new Circle(-25, -75, 53)],
			[new Circle(51, 28, 47),
			new Circle(-39, 38, 49),
			new Circle(-68, -34, 48),
			new Circle(24, -59, 50)],
			[new Circle(30, 50, 49),
			new Circle(-56, 33, 49),
			new Circle(-59, -54, 53),
			new Circle(51, -37, 50)],
			[new Circle(9, 42, 46),
			new Circle(-51, 6, 44),
			new Circle(-36, -60, 45),
			new Circle(45, -21, 45)],
			[new Circle(-21, 7, 55),
			new Circle(-3, 27, 39),
			new Circle(-14, -45, 41),
			new Circle(25, -5, 41)],
			[new Circle(-3, -3, 76),
			new Circle(16, 15, 40),
			new Circle(2, -36, 40)],//End of whiff animation
			[new Circle(81, -33, 49),//Start of hit animation
			new Circle(32, 81, 50),
			new Circle(-88, 38, 50),
			new Circle(-45, -95, 53),
			new Circle(-5, 95, 22),
			new Circle(-111, 8, 20),
			new Circle(-2, -86, 23),
			new Circle(88, 9, 20)],
			[new Circle(98, -50, 77),
			new Circle(43, 105, 77),
			new Circle(-104, 54, 77),
			new Circle(-56, -129, 77),
			new Circle(33, -128, 64),
			new Circle(119, 32, 65),
			new Circle(-37, 117, 61),
			new Circle(-134, -42, 61)],
			[new Circle(121, -70, 58),
			new Circle(54, 129, 63),
			new Circle(-132, 72, 66),
			new Circle(-66, -171, 58),
			new Circle(48, -164, 92),
			new Circle(145, 67, 105),
			new Circle(-45, 154, 92),
			new Circle(-155, -85, 84)],
			[new Circle(129, -78, 81),
			new Circle(63, 141, 88),
			new Circle(-146, 65, 89),
			new Circle(-80, -153, 84),
			new Circle(47, -161, 85),
			new Circle(142, 52, 92),
			new Circle(-51, 149, 88),
			new Circle(-159, -67, 89)],
			[new Circle(126, -107, 84),
			new Circle(90, 126, 89),
			new Circle(-132, 86, 92),
			new Circle(-102, -142, 95),
			new Circle(19, -166, 93),
			new Circle(144, 21, 91),
			new Circle(-29, 151, 87),
			new Circle(-166, -36, 97)],
			[new Circle(108, -122, 96),
			new Circle(105, 107, 97),
			new Circle(-110, 101, 96),
			new Circle(-118, -125, 98),
			new Circle(144, -10, 97),
			new Circle(1, 148, 98),
			new Circle(-165, 1, 96),
			new Circle(-14, -170, 93)],
			[new Circle(142, -39, 93),
			new Circle(31, 137, 97),
			new Circle(-152, 35, 100),
			new Circle(-39, -162, 93),
			new Circle(-127, 75, 93),
			new Circle(-88, -141, 103),
			new Circle(123, -86, 102),
			new Circle(79, 118, 95)],
			[new Circle(157, -74, 174),
			new Circle(61, 140, 162),
			new Circle(-159, 63, 162),
			new Circle(-77, -170, 168)],
			[new Circle(156, -96, 233),
			new Circle(53, 171, 230),
			new Circle(-195, 78, 246),
			new Circle(-84, -202, 249)],
			[new Circle(152, -143, 163),
			new Circle(82, 146, 259),
			new Circle(-196, 63, 258),
			new Circle(-135, -166, 187)],
			[new Circle(159, -147, 239),
			new Circle(105, 154, 256),
			new Circle(-170, 105, 220),
			new Circle(-117, -188, 259)],
			[new Circle(166, -151, 264),
			new Circle(108, 154, 263),
			new Circle(-172, 107, 228),
			new Circle(-117, -188, 266)],
			[new Circle(171, -145, 263),
			new Circle(115, 157, 276),
			new Circle(-178, 106, 247),
			new Circle(-121, -178, 260)],
			[new Circle(114, -74, 163),
			new Circle(77, 119, 178),
			new Circle(-134, 86, 171),
			new Circle(-75, -102, 190)],
			[new Circle(0, 0, 394)],
			[new Circle(-4, -1, 395)],
			[new Circle(2, -3, 213),
			new Circle(12, 81, 82),
			new Circle(5, -95, 88)],
			[new Circle(1, -2, 143),
			new Circle(12, 51, 72),
			new Circle(5, -65, 78)],
			[new Circle(-1, -2, 113),
			new Circle(10, 45, 45),
			new Circle(8, -50, 48)],
			[new Circle(-2, 0, 99),
			new Circle(10, 25, 43),
			new Circle(8, -30, 44)],
		];

		this.hurtboxes["SPS"] = [
			[new Circle(0, 0, 65),
			new Circle(-10, 60, 53),
			new Circle(-10, -60, 53)],
			[new Circle(-14, 1, 66),
			new Circle(6, 55, 50),
			new Circle(0, -57, 49)],
			[new Circle(-35, -1, 71),
			new Circle(3, 63, 46),
			new Circle(-3, -64, 45)],
			[new Circle(-46, -1, 77),
			new Circle(1, 66, 49),
			new Circle(-1, -67, 47)],
			[new Circle(-44, 0, 79),
			new Circle(16, 70, 49),
			new Circle(18, -78, 53)],
			[new Circle(-43, -1, 78),
			new Circle(33, 72, 52),
			new Circle(36, -76, 54)],
			[new Circle(-44, 0, 77),
			new Circle(58, 59, 50),
			new Circle(55, -65, 49)],
			[new Circle(63, -1, 94),
			new Circle(53, 58, 51),
			new Circle(51, -68, 52)],
			[new Circle(64, -1, 95),
			new Circle(15, -50, 50),
			new Circle(12, 39, 51)],
			[new Circle(53, -2, 97),
			new Circle(26, 33, 50),
			new Circle(28, -40, 49)],
			[new Circle(40, -1, 102),
			new Circle(42, 30, 45),
			new Circle(37, -35, 39)],
			[new Circle(18, 1, 109),
			new Circle(18, 29, 44),
			new Circle(13, -31, 42)],
			[new Circle(-14, 1, 107),
			new Circle(12, 37, 46),
			new Circle(6, -34, 42)],
			[new Circle(-49, 3, 110),
			new Circle(-4, 42, 41),
			new Circle(-7, -39, 43)],
			[new Circle(-46, -1, 110),
			new Circle(-13, 48, 44),
			new Circle(-15, -49, 47)],
			[new Circle(-36, -3, 102),
			new Circle(-11, 37, 45),
			new Circle(-11, -44, 46)],
			[new Circle(-25, -3, 103),
			new Circle(-6, 34, 47),
			new Circle(-4, -42, 45)],
			[new Circle(-18, 0, 100),
			new Circle(4, 40, 46),
			new Circle(5, -42, 46)],
			[new Circle(-9, 0, 100),
			new Circle(11, 39, 47),
			new Circle(10, -39, 45)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(2, 7, 64),
			new Circle(5, 53, 41),
			new Circle(36, -18, 41)],
			[new Circle(3, 8, 61),
			new Circle(5, 53, 45),
			new Circle(38, -17, 48)],
			[new Circle(3, 8, 64),
			new Circle(6, 53, 49),
			new Circle(39, -16, 50)],
			[new Circle(4, 9, 61),
			new Circle(7, 52, 53),
			new Circle(39, -14, 55)],
			[new Circle(2, 4, 76),
			new Circle(6, 47, 45),
			new Circle(26, -29, 50)],
			[new Circle(1, 3, 87),
			new Circle(7, 44, 42),
			new Circle(15, -37, 45)],
			[new Circle(0, 0, 90),
			new Circle(10, 40, 40),
			new Circle(10, -40, 40)],
			[new Circle(74, 100, 61),
			new Circle(6, 130, 58),
			new Circle(101, 32, 59),
			new Circle(14, 70, 44),
			new Circle(43, 35, 37),
			new Circle(-2, 6, 48)],
			[new Circle(78, 102, 62),
			new Circle(11, 128, 59),
			new Circle(103, 32, 58),
			new Circle(14, 67, 45),
			new Circle(45, 33, 38),
			new Circle(0, 4, 49)],
			[new Circle(84, 102, 63),
			new Circle(13, 129, 56),
			new Circle(106, 34, 58),
			new Circle(15, 67, 43),
			new Circle(50, 37, 41),
			new Circle(0, 3, 50)],
			[new Circle(76, 25, 40),
			new Circle(6, 98, 33),
			new Circle(57, 75, 35),
			new Circle(2, 50, 37),
			new Circle(35, 26, 38),
			new Circle(0, 0, 54)],
			[new Circle(0, 0, 77),
			new Circle(3, 67, 43),
			new Circle(50, 36, 46)],
			[new Circle(-1, -1, 80),
			new Circle(-16, 44, 43),
			new Circle(26, 29, 43)],
			[new Circle(-1, 0, 85),
			new Circle(-41, 15, 42),
			new Circle(20, 34, 42)],
			[new Circle(1, 0, 57),
			new Circle(14, 23, 34),
			new Circle(-31, -14, 30)],
			[new Circle(-1, 0, 72),
			new Circle(3, 30, 31),
			new Circle(-24, -35, 34)],
			[new Circle(1, 0, 85),
			new Circle(6, 39, 39),
			new Circle(-5, -44, 40)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(2, -7, 64),
			new Circle(5, -53, 41),
			new Circle(36, 18, 41)],
			[new Circle(3, -8, 61),
			new Circle(5, -53, 45),
			new Circle(38, 17, 48)],
			[new Circle(3, -8, 64),
			new Circle(6, -53, 49),
			new Circle(39, 16, 50)],
			[new Circle(4, -9, 61),
			new Circle(7, -52, 53),
			new Circle(39, 14, 55)],
			[new Circle(2, -4, 76),
			new Circle(6, -47, 45),
			new Circle(26, 29, 50)],
			[new Circle(1, -3, 87),
			new Circle(7, -44, 42),
			new Circle(15, 37, 45)],
			[new Circle(0, 0, 90),
			new Circle(10, -40, 40),
			new Circle(10, 40, 40)],
			[new Circle(74, -100, 61),
			new Circle(6, -130, 58),
			new Circle(101, -32, 59),
			new Circle(14, -70, 44),
			new Circle(43, -35, 37),
			new Circle(-2, -6, 48)],
			[new Circle(78, -102, 62),
			new Circle(11, -128, 59),
			new Circle(103, -32, 58),
			new Circle(14, -67, 45),
			new Circle(45, -33, 38),
			new Circle(0, -4, 49)],
			[new Circle(84, -102, 63),
			new Circle(13, -129, 56),
			new Circle(106, -34, 58),
			new Circle(15, -67, 43),
			new Circle(50, -37, 41),
			new Circle(0, -3, 50)],
			[new Circle(76, -25, 40),
			new Circle(6, -98, 33),
			new Circle(57, -75, 35),
			new Circle(2, -50, 37),
			new Circle(35, -26, 38),
			new Circle(0, 0, 54)],
			[new Circle(0, 0, 77),
			new Circle(3, -67, 43),
			new Circle(50, -36, 46)],
			[new Circle(-1, 1, 80),
			new Circle(-16, -44, 43),
			new Circle(26, -29, 43)],
			[new Circle(-1, 0, 85),
			new Circle(-41, -15, 42),
			new Circle(20, -34, 42)],
			[new Circle(1, 0, 57),
			new Circle(14, -23, 34),
			new Circle(-31, 14, 30)],
			[new Circle(-1, 0, 72),
			new Circle(3, -30, 31),
			new Circle(-24, 35, 34)],
			[new Circle(1, 0, 85),
			new Circle(6, -39, 39),
			new Circle(-5, 44, 40)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(0, 0, 67),
			new Circle(3, 53, 60),
			new Circle(-2, -58, 56)],
			[new Circle(-6, 0, 62),
			new Circle(-8, 52, 50),
			new Circle(-8, -51, 50),
			new Circle(-6, 103, 50),
			new Circle(-9, -104, 50)],
			[new Circle(-9, 0, 52),
			new Circle(-9, 56, 49),
			new Circle(-10, -58, 51),
			new Circle(-9, 109, 52),
			new Circle(-13, -111, 48),
			new Circle(-9, 163, 51),
			new Circle(-12, -162, 47)],
			[new Circle(-7, -1, 57),
			new Circle(-5, 57, 58),
			new Circle(-8, -55, 56),
			new Circle(-8, 119, 56),
			new Circle(-10, -116, 55),
			new Circle(-9, 171, 51),
			new Circle(-11, -169, 48)],
			[new Circle(-5, -1, 57),
			new Circle(-6, 59, 59),
			new Circle(-6, -56, 54),
			new Circle(-6, 114, 55),
			new Circle(-7, -109, 54),
			new Circle(-4, 169, 53),
			new Circle(-10, -163, 51)],
			[new Circle(-7, -2, 56),
			new Circle(-7, 59, 59),
			new Circle(-9, -59, 55),
			new Circle(-8, 110, 58),
			new Circle(-12, -115, 58),
			new Circle(-11, 164, 56),
			new Circle(-15, -165, 50)],
			[new Circle(-6, -1, 66),
			new Circle(-6, 57, 61),
			new Circle(-9, -58, 59),
			new Circle(-5, 109, 54),
			new Circle(-10, -112, 53),
			new Circle(-9, 153, 50),
			new Circle(-11, -152, 45)],
			[new Circle(-6, -3, 67),
			new Circle(-7, 55, 57),
			new Circle(-6, -59, 57),
			new Circle(-8, 104, 56),
			new Circle(-8, -109, 53),
			new Circle(-10, 139, 44),
			new Circle(-9, -144, 37)],
			[new Circle(-5, -4, 69),
			new Circle(-8, 47, 58),
			new Circle(-9, -56, 61),
			new Circle(-6, 99, 58),
			new Circle(-9, -107, 53),
			new Circle(-6, 125, 39),
			new Circle(-8, -131, 34)],
			[new Circle(-6, 0, 73),
			new Circle(-5, 42, 59),
			new Circle(-5, -52, 58),
			new Circle(-7, 87, 56),
			new Circle(-7, -99, 56),
			new Circle(-6, 117, 31),
			new Circle(-6, -121, 30)],
			[new Circle(-6, -1, 73),
			new Circle(-7, 39, 56),
			new Circle(-4, -48, 55),
			new Circle(-7, 84, 70),
			new Circle(-7, -96, 71)],
			[new Circle(-5, 0, 73),
			new Circle(-7, 34, 60),
			new Circle(-5, -41, 56),
			new Circle(-7, 72, 65),
			new Circle(-6, -83, 64)],
			[new Circle(-4, 2, 74),
			new Circle(-7, 26, 56),
			new Circle(-4, -34, 53),
			new Circle(-8, 55, 60),
			new Circle(-6, -72, 60)],
			[new Circle(-3, 1, 77),
			new Circle(-8, 24, 51),
			new Circle(-3, -30, 44),
			new Circle(-7, 44, 55),
			new Circle(-5, -57, 56)],
			[new Circle(-3, 2, 81),
			new Circle(-6, 34, 64),
			new Circle(-4, -38, 68)],
			[new Circle(-2, 2, 93),
			new Circle(-1, 38, 56),
			new Circle(2, -37, 58)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(-33, -10, 55),
			new Circle(3, 54, 40),
			new Circle(10, -40, 40),
			new Circle(0, 0, 81),
			new Circle(34, 21, 50)],
			[new Circle(0, 0, 58),
			new Circle(-22, 41, 45),
			new Circle(-32, -28, 53),
			new Circle(30, -35, 40),
			new Circle(30, 44, 52)],
			[new Circle(25, 1, 50),
			new Circle(5, -47, 46),
			new Circle(4, 45, 39),
			new Circle(-35, 24, 35),
			new Circle(-18, -8, 54)],
			[new Circle(21, 30, 46),
			new Circle(6, -3, 55),
			new Circle(-18, -41, 37),
			new Circle(-30, 11, 51),
			new Circle(-14, 41, 44)],
			[new Circle(26, -19, 61),
			new Circle(12, 38, 44),
			new Circle(-26, -25, 53),
			new Circle(-35, 19, 43),
			new Circle(-7, 17, 50)],
			[new Circle(7, -38, 47),
			new Circle(-12, 44, 41),
			new Circle(-8, 5, 52),
			new Circle(-38, -11, 37),
			new Circle(38, 17, 57)],
			[new Circle(-23, -25, 46),
			new Circle(25, 37, 44),
			new Circle(17, -8, 61),
			new Circle(-29, 35, 45),
			new Circle(-7, 8, 37)],
			[new Circle(25, -34, 54),
			new Circle(-7, 43, 45),
			new Circle(35, 21, 55),
			new Circle(-41, -14, 42),
			new Circle(-21, 11, 50)],
			[new Circle(-17, -37, 48),
			new Circle(16, 41, 42),
			new Circle(16, -3, 57),
			new Circle(-29, 34, 43),
			new Circle(-30, -1, 43)],
			[new Circle(14, -24, 60),
			new Circle(-20, 1, 33),
			new Circle(-21, 21, 30),
			new Circle(-26, -31, 53),
			new Circle(1, 44, 50)],
			[new Circle(0, -19, 68),
			new Circle(-27, 9, 46),
			new Circle(-1, 36, 36),
			new Circle(6, 16, 50)],
			[new Circle(9, -19, 50),
			new Circle(-25, -6, 63),
			new Circle(-7, 34, 59)],
			[new Circle(-26, 30, 60),
			new Circle(-14, -25, 59),
			new Circle(12, 20, 50)],
			[new Circle(-10, 22, 72),
			new Circle(-18, -27, 52),
			new Circle(19, 11, 54)],
			[new Circle(-9, 17, 86),
			new Circle(-13, -27, 53),
			new Circle(20, 15, 49)],
			[new Circle(-9, 8, 92),
			new Circle(-2, -29, 52),
			new Circle(25, 31, 49)],
			[new Circle(-3, 3, 100),
			new Circle(5, -41, 50),
			new Circle(22, 38, 50)],
			[new Circle(-3, -1, 101),
			new Circle(16, -49, 47),
			new Circle(30, 38, 47)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(-1, 0, 89),
			new Circle(18, 36, 43),
			new Circle(19, -35, 40)],
			[new Circle(-9, 0, 86),
			new Circle(21, 32, 50),
			new Circle(19, -33, 50)],
			[new Circle(-9, 12, 83),
			new Circle(-11, -5, 77),
			new Circle(22, 25, 49),
			new Circle(23, -28, 50)],
			[new Circle(-8, -32, 68),
			new Circle(-6, 31, 69),
			new Circle(29, -9, 51),
			new Circle(27, 15, 52)],
			[new Circle(20, 2, 74),
			new Circle(-4, -33, 57),
			new Circle(7, 29, 65)],
			[new Circle(13, -6, 73),
			new Circle(19, 30, 58),
			new Circle(10, -38, 56)],
			[new Circle(5, 6, 76),
			new Circle(26, 31, 45),
			new Circle(21, -34, 49)],
			[new Circle(-1, -8, 81),
			new Circle(21, 26, 42),
			new Circle(22, -35, 42)],
			[new Circle(-3, 3, 83),
			new Circle(10, -41, 43),
			new Circle(27, 21, 38)],
			[new Circle(-1, 1, 85),
			new Circle(11, -32, 41),
			new Circle(16, 35, 38)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(0, 0, 85),
			new Circle(-2, 43, 40),
			new Circle(-23, -38, 40)],
			[new Circle(-2, 2, 69),
			new Circle(-16, 42, 41),
			new Circle(-36, -6, 39),
			new Circle(-23, 55, 29)],
			[new Circle(-2, 5, 59),
			new Circle(-15, 41, 41),
			new Circle(-35, 19, 37),
			new Circle(-23, 66, 39)],
			[new Circle(-1, 8, 57),
			new Circle(-18, 53, 36),
			new Circle(-22, 34, 37),
			new Circle(-27, 81, 37),
			new Circle(-33, 98, 21)],
			[new Circle(0, 10, 57),
			new Circle(-16, 51, 39),
			new Circle(-33, 87, 39),
			new Circle(-52, 115, 37),
			new Circle(-74, 140, 46)],
			[new Circle(-1, 10, 56),
			new Circle(-20, 56, 40),
			new Circle(-38, 92, 38),
			new Circle(-58, 120, 36),
			new Circle(-88, 143, 27)],
			[new Circle(-1, 17, 50),
			new Circle(0, 59, 42),
			new Circle(-21, 98, 37),
			new Circle(-48, 134, 38),
			new Circle(-96, 161, 76)],
			[new Circle(10, 14, 50),
			new Circle(35, 47, 42),
			new Circle(45, 87, 40),
			new Circle(55, 131, 39),
			new Circle(50, 185, 76),
			new Circle(16, 108, 20),
			new Circle(-5, 185, 25),
			new Circle(-41, 176, 26)],
			[new Circle(5, -2, 64),
			new Circle(55, 11, 45),
			new Circle(100, 21, 43),
			new Circle(141, 35, 44),
			new Circle(187, 52, 77),
			new Circle(69, 64, 23),
			new Circle(48, 81, 19),
			new Circle(136, 105, 30),
			new Circle(94, 136, 26)],
			[new Circle(5, -6, 63),
			new Circle(54, -1, 46),
			new Circle(97, 2, 43),
			new Circle(142, 1, 46),
			new Circle(185, -16, 82)],
			[new Circle(18, -5, 65),
			new Circle(54, 2, 43),
			new Circle(89, 10, 44),
			new Circle(125, -2, 45),
			new Circle(165, -27, 83)],
			[new Circle(25, -1, 66),
			new Circle(46, 10, 44),
			new Circle(72, 16, 44),
			new Circle(105, 13, 41),
			new Circle(142, -18, 78)],
			[new Circle(23, 0, 66),
			new Circle(31, 24, 39),
			new Circle(57, 25, 37),
			new Circle(83, 17, 38),
			new Circle(120, -8, 75)],
			[new Circle(12, 7, 75),
			new Circle(3, 40, 35),
			new Circle(37, 36, 38),
			new Circle(61, 13, 35),
			new Circle(97, -6, 65)],
			[new Circle(5, 5, 80),
			new Circle(-22, 21, 32),
			new Circle(15, 36, 36),
			new Circle(45, 22, 34),
			new Circle(52, -21, 59)],
			[new Circle(2, 2, 82),
			new Circle(-8, 34, 46),
			new Circle(37, -30, 58)],
			[new Circle(0, 0, 87),
			new Circle(-1, 36, 40),
			new Circle(27, -34, 54)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(-3, 0, 87),
			new Circle(3, 39, 39),
			new Circle(11, -34, 45)],
			[new Circle(-8, -7, 85),
			new Circle(-4, 35, 41),
			new Circle(12, -31, 53)],
			[new Circle(-16, -13, 84),
			new Circle(-12, 30, 39),
			new Circle(9, -28, 37),
			new Circle(36, -12, 25),
			new Circle(22, -54, 25),
			new Circle(36, -36, 23)],
			[new Circle(-34, -12, 84),
			new Circle(-13, 29, 37),
			new Circle(30, -32, 32),
			new Circle(70, -22, 18),
			new Circle(56, -39, 20),
			new Circle(65, -59, 19),
			new Circle(87, -28, 15),
			new Circle(83, -63, 13)],
			[new Circle(-25, -9, 85),
			new Circle(-23, 31, 38),
			new Circle(44, -36, 32),
			new Circle(74, -40, 22),
			new Circle(100, -29, 18),
			new Circle(91, -58, 18),
			new Circle(122, -34, 16),
			new Circle(111, -69, 18)],
			[new Circle(-25, -9, 89),
			new Circle(-14, 30, 36),
			new Circle(25, -31, 37),
			new Circle(61, -36, 48),
			new Circle(91, -28, 24),
			new Circle(82, -56, 28)],
			[new Circle(-25, -8, 89),
			new Circle(-5, 28, 37),
			new Circle(32, -30, 53),
			new Circle(51, -54, 14),
			new Circle(62, -18, 12)],
			[new Circle(-32, -4, 87),
			new Circle(11, 0, 39),
			new Circle(-22, -51, 38)],
			[new Circle(-27, 8, 87),
			new Circle(3, -27, 38),
			new Circle(-76, -6, 37)],
			[new Circle(-15, 22, 86),
			new Circle(-45, 57, 40),
			new Circle(-16, -17, 39)],
			[new Circle(-9, 12, 92),
			new Circle(-8, 60, 41),
			new Circle(-4, -29, 43)],
			[new Circle(-7, 6, 92),
			new Circle(4, 53, 41),
			new Circle(4, -35, 43)],//End of whiff
			[new Circle(-24, -6, 89),
			new Circle(-10, 33, 36),
			new Circle(24, -36, 37),
			new Circle(59, -34, 48),
			new Circle(98, -25, 24),
			new Circle(97, -54, 28)],
			[new Circle(-23, -12, 89),
			new Circle(-17, 29, 36),
			new Circle(26, -30, 37),
			new Circle(59, -39, 48),
			new Circle(100, -27, 24),
			new Circle(102, -52, 28)],
			[new Circle(-20, -15, 90),
			new Circle(-19, 26, 37),
			new Circle(27, -28, 38),
			new Circle(56, -35, 47),
			new Circle(98, -29, 22),
			new Circle(106, -53, 29)],
			[new Circle(-22, -8, 89),
			new Circle(-11, 33, 36),
			new Circle(24, -33, 37),
			new Circle(66, -32, 48),
			new Circle(99, -26, 24),
			new Circle(100, -57, 28)],
			[new Circle(-28, -9, 89),
			new Circle(-17, 30, 36),
			new Circle(20, -31, 37),
			new Circle(64, -36, 48),
			new Circle(98, -28, 24),
			new Circle(97, -57, 28)],
			[new Circle(-25, -8, 89),
			new Circle(-5, 28, 37),
			new Circle(23, -31, 38),
			new Circle(98, -57, 26),
			new Circle(102, -27, 27),
			new Circle(65, -36, 47)],
			[new Circle(-26, -8, 89),
			new Circle(-5, 28, 37),
			new Circle(26, -30, 40),
			new Circle(79, -56, 14),
			new Circle(82, -27, 12),
			new Circle(57, -37, 43)],
			[new Circle(-32, -4, 87),
			new Circle(11, 0, 39),
			new Circle(-16, -45, 38),
			new Circle(13, -50, 29)],
			[new Circle(-27, 8, 87),
			new Circle(3, -27, 38),
			new Circle(-66, -23, 37)],
			[new Circle(-20, 27, 86),
			new Circle(-61, 25, 40),
			new Circle(-16, -17, 39)],
			[new Circle(-2, 36, 92),
			new Circle(-51, 66, 41),
			new Circle(-38, -4, 43)],
			[new Circle(9, 30, 92),
			new Circle(-6, 77, 41),
			new Circle(-30, 10, 43)],
			[new Circle(17, 20, 90),
			new Circle(20, 70, 41),
			new Circle(-5, 2, 43)],
			[new Circle(15, 9, 94),
			new Circle(33, 59, 40),
			new Circle(15, -17, 41)],
			[new Circle(6, 5, 97),
			new Circle(24, 46, 40),
			new Circle(17, -36, 40)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(-35, -6, 84),
			new Circle(-24, 53, 60),
			new Circle(-18, -59, 56)],
			[new Circle(-45, -20, 70),
			new Circle(-34, 33, 59),
			new Circle(-31, -51, 58),
			new Circle(2, 61, 49),
			new Circle(9, -64, 52)],
			[new Circle(-58, -33, 60),
			new Circle(-54, 16, 49),
			new Circle(-32, -64, 50),
			new Circle(10, -71, 47),
			new Circle(-25, 50, 48),
			new Circle(10, 64, 39),
			new Circle(41, -62, 37)],
			[new Circle(-44, -51, 53),
			new Circle(-64, -9, 47),
			new Circle(-6, -67, 49),
			new Circle(-56, 35, 44),
			new Circle(31, -65, 44),
			new Circle(-24, 61, 45),
			new Circle(54, -39, 44)],
			[new Circle(-28, -72, 45),
			new Circle(-68, -40, 43),
			new Circle(22, -73, 47),
			new Circle(-75, 13, 46),
			new Circle(63, -43, 45),
			new Circle(-44, 60, 49),
			new Circle(78, 7, 44),
			new Circle(11, 74, 46),
			new Circle(57, 52, 46),
			new ICircle(0, 0, 103)],
			[new Circle(-50, -59, 47),
			new Circle(-76, -4, 47),
			new Circle(-2, -76, 48),
			new Circle(-59, 47, 49),
			new Circle(45, -58, 51),
			new Circle(-14, 74, 47),
			new Circle(74, -15, 48),
			new Circle(34, 67, 48),
			new Circle(70, 33, 46),
			new ICircle(0, 0, 103)],
			[new Circle(-29, -70, 47),
			new Circle(-70, -26, 49),
			new Circle(19, -72, 49),
			new Circle(-72, 26, 48),
			new Circle(60, -42, 51),
			new Circle(-39, 64, 48),
			new Circle(76, 7, 49),
			new Circle(9, 75, 48),
			new Circle(54, 52, 49),
			new ICircle(0, 0, 102)],
			[new Circle(-10, -73, 52),
			new Circle(-59, -47, 49),
			new Circle(40, -62, 49),
			new Circle(-76, 6, 46),
			new Circle(71, -20, 51),
			new Circle(-55, 50, 48),
			new Circle(67, 32, 50),
			new Circle(-12, 73, 50),
			new Circle(34, 67, 48),
			new ICircle(0, 0, 99)],
			[new Circle(12, -73, 48),
			new Circle(-41, -62, 50),
			new Circle(58, -48, 53),
			new Circle(-74, -18, 49),
			new Circle(76, 0, 49),
			new Circle(-68, 34, 48),
			new Circle(58, 47, 52),
			new Circle(-32, 70, 47),
			new Circle(16, 75, 47),
			new ICircle(0, 0, 102)],
			[new Circle(36, -65, 49),
			new Circle(-22, -72, 49),
			new Circle(71, -29, 47),
			new Circle(-63, -37, 51),
			new Circle(72, 20, 49),
			new Circle(-74, 12, 51),
			new Circle(46, 59, 47),
			new Circle(-47, 57, 52),
			new Circle(2, 76, 47),
			new ICircle(0, 0, 102)],
			[new Circle(2, -74, 49),
			new Circle(-52, -54, 50),
			new Circle(52, -50, 54),
			new Circle(-76, -8, 48),
			new Circle(75, -3, 49),
			new Circle(-61, 41, 51),
			new Circle(58, 46, 49),
			new Circle(-23, 74, 47),
			new Circle(19, 72, 50),
			new ICircle(0, 0, 103)],
			[new Circle(-34, -68, 49),
			new Circle(-70, -27, 51),
			new Circle(20, -71, 49),
			new Circle(-70, 25, 51),
			new Circle(61, -40, 52),
			new Circle(-38, 63, 49),
			new Circle(75, 15, 48),
			new Circle(11, 74, 50),
			new Circle(53, 56, 47),
			new ICircle(0, 0, 102)],
			[new Circle(-39, -37, 48),
			new Circle(-48, 6, 47),
			new Circle(14, -55, 48),
			new Circle(46, -37, 48),
			new Circle(-22, 52, 46),
			new Circle(9, 62, 50),
			new Circle(46, 38, 52),
			new Circle(60, 14, 48),
			new Circle(-13, -56, 41),
			new ICircle(0, 0, 87)],
			[new Circle(-25, -7, 58),
			new Circle(-6, 45, 53),
			new Circle(18, -40, 53),
			new Circle(39, 24, 57)],
			[new Circle(-9, 15, 70),
			new Circle(-4, -21, 59),
			new Circle(24, 23, 50)],
			[new Circle(-7, 4, 80),
			new Circle(3, -22, 52),
			new Circle(17, 21, 47)],
			[new Circle(-6, 1, 88),
			new Circle(10, 30, 47),
			new Circle(7, -32, 45)]
		];

		this.headNoun = "󱤎󱥈";//ilo pakala
		this.name = currentLanguage === "tp" ? "󱤎󱥈4891" : "Error: 4891";//ilo pakala 4891

		this.selectScreenSizeOffset = 0;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloPakalaSheet);

		this.states.BLOCK = State.copyState(State.BLOCK).removeTag("BASE").addTag("loop hurtbox");
		this.states.HITSTUN = State.copyState(State.HITSTUN).removeTag("BASE").addTag("loop hurtbox");
		this.states.CLASH = State.copyState(State.CLASH).removeTag("BASE").addTag("loop hurtbox");
		this.states.NEUTRAL = State.copyState(State.NEUTRAL).removeTag("BASE").addTag("loop hurtbox");
		this.states.DASH = State.copyState(State.DASH).removeTag("BASE");
		this.states.DASH_CANCEL = State.copyState(State.DASH_CANCEL).removeTag("BASE").removeTag("rotateable");
		this.states.POWER_DASH = State.copyState(State.POWER_DASH).removeTag("BASE").addTag("loop hurtbox");
		this.states.RPL = State.copyState(State.RPL).addTag("no collide").addTag("rotateable");
		this.states.LPL = State.copyState(State.LPL).addTag("no collide").addTag("rotateable");
		this.states.MPL = State.copyState(State.MPL).addTag("no collide");
		this.states.NPS = State.copyState(State.NPS).addTag("no collide");
		this.states.NPS_ACTIONS = [];
		this.states.SPS = State.copyState(State.SPS).addTag("no collide");
		this.states.NN = State.copyState(State.NN).addTag("rotateable");
		this.states.RN_ACTIONS = ["power dash", "block"];

		this.collideRadius = 50;

		this.movementSpeed = 1;
		this.forwardSpeedBoost = 4;

		this.OOBBlockFrame = 4;

		this.dash.speed = 10;
		this.dash.frames = 35;
		this.dash.invFirstFrame = this.dash.frames - 5;
		this.dash.turnSpeedBoost = -0.035;
		this.dash.turnFrame = this.dash.frames - 6;
		this.dash.neutralBoost = 0;//How much your speed increases from pressing dash while not pressing a direction
		this.dash.backPenalty = 4;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 1.4;
		this.dash.friction = 0.9;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.dash.iFrames = 16;
		this.dash.invTo = ["attack"];
		this.dash.dashAttackStartDelay = 1;
		this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 18;
		this.dash.grabCancelFrame = this.dash.frames - 25;
		this.dash.blockCancelFrame = this.dash.frames - 25;

		this.dash.comboDashFrame = this.dash.frames - 10;
		this.dash.combos = 0;
		this.dash.maxCombos = 2;

		//All values for the dash cancel (aka sidestep or tawa lili)
		this.dash.cancelIFrames = 14;
		this.dash.cancelSpeed = 19;
		this.dash.cancelFrames = 16;
		this.dash.cancelDecay = 0.75;//Speed decay
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 2;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 14;

		this.powerDash.frames = 28;
		this.powerDash.speed = 4;
		this.powerDash.iFrames = 26;
		this.powerDash.addHitstunFrames = 8;
		this.powerDash.proration = 3;

		this.turnSpeed = 0.05;

		this.weight = 1.6;

		this.health = 950;
		this.maxHealth = 950;

		this.arrowOffset = 0;

		this.powerupGrabFrames = 0;

		this.greenDisplay = 0;
	}

	setAttacks() {
		this.DASH_ATTACK = SelanDashAttack;

		this.NL = SelanNL;
		this.SL = SelanSL;
		this.RL = SelanRL;
		this.LL = SelanLL;
		this.ML = SelanML;

		this.NS = SelanNS;
		this.SS = SelanSS;
		this.LS = SelanLS;
		this.RS = SelanRS;
		this.MS = SelanMS;

		this.NPL = SelanNPL;
		this.SPL = SelanSPL;
		this.RPL = SelanRPL;
		this.LPL = SelanLPL;
		this.MPL = SelanMPL;

		this.NPS = SelanNPS;
		this.SPS = SelanSPS;
		this.RPS = SelanRPS;
		this.LPS = SelanLPS;
		this.MPS = SelanMPS;

		this.NN = SelanNN;
		this.SN = SelanSN;
		this.RN = SelanRN;
		this.LN = SelanLN;
		this.MN = SelanMN;
	}

	generalLogic() {
		if (this.currentState.name === "walk" || this.currentState.name === "neutral")
			this.greenDisplay = 0;

		this.defense = 1;
		if (this.greenDisplay)
			this.defense = 1.5;

		this.dash.speed = 10;
		this.dash.cancelSpeed = 19;
		/*if (this.powerupGrabFrames) {
			this.dash.speed = 11;
			this.dash.cancelSpeed = 21;
		}*/
		if (this.currentState.name === "power dash" && this.actionLag === 9) {
			this.addAction("block");
		}
	}

	walkLogic() {
		super.walkLogic();
		if (this.currentState.name === "walk")
			this.turnSpeedModifier = -0.04;
	}

	grabLogic() {
		if (this.currentState.name === "grab") {
			this.attackEndable();

			this.turnSpeedModifier = 0.5;

			if (this.actionLag === 39) {
				this.addAction("dash", "lili", "suli", "poka lili", "poka suli", "block");
			}

			if (this.actionLag === 10) {
				this.actions = [];
			}

			this.powerupGrabFrames = 660;
		}
		if (this.powerupGrabFrames > 0)
			this.powerupGrabFrames--;
	}

	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		//g.rotate(this.dir.value);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		//this.sheet.draw(g, -156 + rumbleX, -156 + rumbleY, 312, 312);
		for (let i = 0; i < this.circles.length; i++) {
			if (!this.circles[i].intangible) {
				let realSize = this.circles[i].diameter / 2;
				let size = floor(realSize / 7) * 7;
				g.push();
				g.translate(this.circles[i].x + rumbleX, this.circles[i].y + rumbleY);
				g.rotate(this.dir.value);
				for (let x = -size; x <= realSize; x += max(1, abs(cos(asin(x / realSize))) * 7)) {
					g.strokeWeight(0.5 + 3 * noise(frameCount / 30 + i * 47 + x * 51));
					g.stroke(40 + 34 * (this.powerupGrabFrames ** 0.334), 240 - abs(x) * 180 / realSize, 50 + this.greenDisplay);
					g.line(x, -realSize * cos(asin(x / realSize)), x, realSize * cos(asin(x / realSize)));
					g.line(-realSize * cos(asin(x / realSize)), x, realSize * cos(asin(x / realSize)), x);
				}
				g.pop();
			}
		}

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

	charSpecificReset() {
		this.powerupGrabFrames = 0;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			//this.sheet.run();
		}
	}

	static addAssets() {
		assetManager.addSpritesheet("resources/ilo_pakala_4891.png", "iloPakalaSheet", "//");

		assetManager.addSound("resources/sfx/nullPointerException.wav", "nullPointerException");

		assetManager.addSound("resources/sfx/PAKALA.wav", "pakalaSelan");
    }
}

class SelanDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 110, 0).setVelocity(0.1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 25 : 15).setProration(4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0.6, 0.5, 0.5).setHitStun(10, 28).setStunFrames(18).setNormalizeHitStun().setAngleTypes("direct", "direct");
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 2 : 3).setStartupF(4).setActiveF(8).setEndF(25);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.4);
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

class SelanNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "RL", "LL", "SS", "MS"];

		let sweet1 = new PriorityCircle(50, -25, 70, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(40, -30, 70, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 35 : 30).setProration(player.powerupGrabFrames ? 0 : 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0.6, 2, 3.5).setHitStun(20, 20).setStunFrames(12).setBlockBreak(!!player.powerupGrabFrames, true);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 0 : 4).setStartupF(7).setActiveF(4).setEndF(17);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
		if (player.powerupGrabFrames)
			player.powerupGrabFrames = max(0, player.powerupGrabFrames - 50);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			//this.sheet.run();
		}
	}
}

class SelanSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["SS"];

		let sweet1 = new PriorityCircle(40, 0, 70, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(60, 0, 70, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(80, 0, 70, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 30 : 25).setProration(player.powerupGrabFrames ? 0 : 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 2, 1.5).setHitStun(player.powerupGrabFrames ? 35 : 30, 20).setStunFrames(12);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 2 : 3).setStartupF(10).setActiveF(2).setEndF(21);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			//this.sheet.run();
		}
	}
}

class SelanRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["SS"];

		let sweet1 = new PriorityCircle(30, 30, 70, 0).setVelocity(0.02, 0);
		let sweet2 = new PriorityCircle(60, 60, 70, 0).setVelocity(0.02, 0);
		let sweet3 = new PriorityCircle(90, 90, 70, 0).setVelocity(0.02, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 30 : 25).setProration(player.powerupGrabFrames ? 0 : 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 2, 1.5).setHitStun(player.powerupGrabFrames ? 35 : 30, 30).setStunFrames(12);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 2 : 3).setStartupF(10).setActiveF(2).setEndF(21);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			//this.sheet.run();
		}
	}
}

class SelanLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["SS"];

		let sweet1 = new PriorityCircle(30, -30, 70, 0).setVelocity(0.03, -0.1);
		let sweet2 = new PriorityCircle(65, -60, 70, 0).setVelocity(0.03, -0.1);
		let sweet3 = new PriorityCircle(100, -90, 70, 0).setVelocity(0.03, -0.1);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 30 : 25).setProration(player.powerupGrabFrames ? 0 : 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 12).setLaunch(4, 2, 1.5).setHitStun(player.powerupGrabFrames ? 35 : 30, 30).setStunFrames(12);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 2 : 3).setStartupF(9).setActiveF(3).setEndF(21);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			//this.sheet.run();
		}
	}
}

class SelanML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let back1 = new PriorityCircle(-40, -30, 50, 0).setVelocity(-1, 0);
		let back2 = new PriorityCircle(-40, 30, 50, 0).setVelocity(-1, 0);
		let back3 = new PriorityCircle(-40, 0, 50, 0).setVelocity(-1, 0);
		let front1 = new PriorityCircle(10, 0, 130, 1);
		let circles = [back1, back2, back3, front1];

		let front = new AttackProperties().setDamage(player.powerupGrabFrames ? 30 : 25).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0.1, 0, 1.5).setHitStun(40, 31).setStunFrames(12).setNormalizeHitStun().setAngleTypes("direct", "direct");
		let back = new AttackProperties().setDamage(player.powerupGrabFrames ? 20 : 15).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(7, 0, 1.1).setHitStun(40, 28).setStunFrames(12).setNormalizeHitStun();
		let prop = [back, front];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(8).setActiveF(2).setEndF(34);
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
		if (this.hitPlayerBool && this.currentlyEnd() && this.player.targetPlayer) {
			let angle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);
			this.player.x += angle.getX() * 2;
			this.player.y += angle.getY() * 2;
			this.player.dx *= 0.85;
			this.player.dy *= 0.85;
		}
	}
}

class SelanNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = [];
		if (player.powerupGrabFrames) {
			cancelOptions = ["lili", "suli", "pokaLili", "pokaSuli", "nasa"];
		}

		let sweet1 = new PriorityCircle(0, 0, 70, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(25, 0, 70, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 25 : 15).setProration(player.powerupGrabFrames ? -2 : -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 2, 3.5).setHitStun(player.powerupGrabFrames ? 34 : 30, 21).setStunFrames(12).setCancelWait(15);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 2 : 3).setStartupF(8).setActiveF(4).setEndF(18);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 0 && this.getFromStartupF() % 4 === 3) {
			let speed = 35;
			this.player.x += this.player.dir.getX() * speed;
			this.player.y += this.player.dir.getY() * speed;
		}
	}
}

class SelanSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];
		if (player.powerupGrabFrames) {
			cancelOptions = ["dash"];
		} else {
			hitCancelOptions = ["dash"];
		}

		let sweet1 = new PriorityCircle(150, 0, 60, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(150, 40, 60, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(150, -40, 60, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 50 : 40, 40, player.powerupGrabFrames ? 10 : 8).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(16, 0.1, 0.5).setHitStun(25, 10).setCancelWait(5).setStunFrames(13);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(32).setActiveF(4).setEndF(36);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.7);
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

class SelanRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";
	}

	static createAttack(player) {
		let cancelOptions = ["RPS"];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(0, 50, 90, 0).setVelocity(0, 1);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 60 : 55).setProration(-2.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(7, 1, 0.3).setHitStun(38, 30).setStunFrames(12);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(10).setActiveF(4).setEndF(23);
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
		if (this.getFromStartupF() === 6) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 20;
		}
	}
}

class SelanLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";
	}

	static createAttack(player) {
		let cancelOptions = ["LPS"];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(0, -50, 90, 0).setVelocity(0, -1);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 65 : 60).setProration(-2.5).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(7, 1, 0.3).setHitStun(38, 30).setStunFrames(12);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(9).setActiveF(4).setEndF(23);
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
		if (this.getFromStartupF() === 5) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 20;
		}
	}
}

class SelanMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(150, 0, 80, 0).setVelocity(-0.1, 0);
		let sweet2 = new PriorityCircle(110, 0, 80, 0).setVelocity(-0.1, 0);
		let sweet3 = new PriorityCircle(70, 0, 80, 0).setVelocity(-0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 45 : 40).setProration(player.powerupGrabFrames ? -1 : 0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(3, 2, 1.5).setHitStun(34, 22).setStunFrames(15);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 3 : 4).setStartupF(26).setActiveF(2).setEndF(19);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.2);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 10) {
			this.player.invTo = ["attack", "grab"];
			this.player.iFrames = 19;
		}
	}
}

class SelanNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(70, 0, 80, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 90 : 70).setProration(player.powerupGrabFrames ? -0.5 : 0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.1).setHitStun(30).setStunFrames(22).setCommandGrab().setRotateSlowDown(0.5, player.powerupGrabFrames ? 360 : 300);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(12).setActiveF(1).setEndF(37);
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

	applyModifiers() {
		if (this.getEndF() === 8) {
			this.player.dir.changeValue(PI);
		}
	}

	logic() {
		this.player.greenDisplay = 150;
		if (this.getStartupF() === 1 && this.player.targetPlayer?.currentState.name === "block" && this.player.targetPlayer?.actionLag > 1) {
			this.properties[0].setNoKill();
		}
		if (this.getFromEndF() === 2) {
			this.player.iFrames = 8;
			this.player.invTo = ["attack", "grab"];
			this.player.x += this.player.dir.getX() * 180;
			this.player.y += this.player.dir.getY() * 180;
		}
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * 70;
			this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * 70;
		}
	}
}

class SelanSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 90, 0).setVelocity(0.1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 70 : 50).setProration(player.powerupGrabFrames ? 0 : 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 2, 0.9).setHitStun(23, 23).setStunFrames(13).setNormalizeHitStun();
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(14).setActiveF(8).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(player.powerupGrabFrames ? 0.5 : 1);
		player.dx += player.dir.getX() * 4;
		player.dy += player.dir.getY() * 4;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 3) {
			this.player.addAction("RS", "LS", "SN", "LN", "RPS", "LPS");
		}
		if (this.getFromStartupF() === 6) {
			this.player.removeAction("RS", "LS", "SN", "LN", "RPS", "LPS");
		}
		if (this.getFromStartupF() === 7) {
			this.player.iFrames = 17;
			this.player.invTo = ["attack"];
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class SelanRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 100, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 35 : 30).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0.1, 3.5).setHitStun(34, 20).setStunFrames(12);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(16).setActiveF(4).setEndF(20);
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
		if (this.getStartupF() > 0) {
			this.player.timerPunishHealth += 0.5;
			this.player.turnSpeedModifier = 0.01;
			if (this.getFromStartupF() % 4 === 3) {
				let angle = new Angle(this.player.dir.value + PI / 2.2);
				let speed = this.player.powerupGrabFrames ? 45 : 30;
				this.player.x += angle.getX() * speed;
				this.player.y += angle.getY() * speed;
			}
		} else {
			this.player.turnSpeedModifier = -0.1;
		}
	}
}

class SelanLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 100, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 40 : 35).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0.1, 3.5).setHitStun(34, 20).setStunFrames(12);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(16).setActiveF(4).setEndF(20);
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
		if (this.getStartupF() > 0) {
			this.player.timerPunishHealth += 0.5;
			this.player.turnSpeedModifier = 0.01;
			if (this.getFromStartupF() % 4 === 3) {
				let angle = new Angle(this.player.dir.value - PI / 2.2);
				let speed = this.player.powerupGrabFrames ? 45 : 30;
				this.player.x += angle.getX() * speed;
				this.player.y += angle.getY() * speed;
			}
		} else {
			this.player.turnSpeedModifier = -0.1;
		}
	}
}

class SelanMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(160, 0, 80, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 35 : 30).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(10, 0.1, 0.5).setHitStun(34, 25).setStunFrames(12);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(16).setActiveF(4).setEndF(20);
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
		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack", "grab"];
			this.player.iFrames = 12;
		}
		if (this.getStartupF() > 0) {
			this.player.timerPunishHealth += 1.5;
			if (this.getFromStartupF() % 4 === 3) {
				this.player.x -= this.player.dir.getX() * 40;
				this.player.y -= this.player.dir.getY() * 40;
			}
		}
	}
}

class SelanNPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

		this.weak = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 0, 50, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0, 0.1).setHitStun(30).setStunFrames(70).setCommandGrab().setNoComboCounter();
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.nullPointerException);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(5).setStartupF(6).setActiveF(1).setEndF(34);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
	}

	draw(g) {
		/*if (this.getStartupF() < 16 && this.getFromEndF() < 8) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, 20, -90, 130, 180);

			g.pop();
		}*/
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		this.player.greenDisplay = 150;
		if (this.getStartupF() === 1 && this.player.targetPlayer?.currentState.name === "block" && this.player.targetPlayer?.actionLag > 1) {
			this.weak = true;
		}
		if (this.player.powerupGrabFrames > 0) {
			this.player.powerupGrabFrames++;
		}
		if (!this.hitPlayerBool && this.getActiveF() === 0 || this.hitPlayerBool && this.getEndF() === 1) {
			this.player.powerupGrabFrames = 0;
		}
		if (this.hitPlayerBool && this.getEndF() === 10) {
			let cancelOptions = [];

			let sweet1 = new PriorityCircle(0, 0, 300, 0);
			let circles = [sweet1];

			let sweet = new AttackProperties().setDamage((this.player.powerupGrabFrames ? 275 : 225) * (this.weak ? 0.4 : 1), 30, 2).setProration(this.player.powerupGrabFrames ? 0 : 1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value).setLaunch(16, 0.1).setHitStun(26).setStunFrames(15).setNoKill(this.weak);
			let prop = [sweet];

			//sweet.setHitSound(assetManager.sounds.fanTP);
			//sweet.setBlockSound(assetManager.sounds.fanTP);

			let attack = new Attack(this.player, circles, prop).setClashPriority(false).setStartupF(0).setActiveF(1).setEndF(23);

			this.player.addCurrentAttack(attack);
			attack.rotateTo(this.player.dir);
			this.world.addAttack(attack);

			this.player.setActionLag(attack);
		}
	}

	hitConfirmSetFrames() {
		this.player.dx = 0;
		this.player.dy = 0;
		this.player.actionLag = 72;
		this.setEndF(72);
		this.player.hurtboxStateFrame = 40;
		this.player.iFrames = 72;
		this.player.invTo = ["attack", "grab"];
	}
}

class SelanSPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";
	}

	static createAttack(player) {
		let cancelOptions = ["attack", "dash"];

		let sweet1 = new PriorityCircle(50, 0, 80, 0).setVelocity(0.1, 0);
		let other1 = new PriorityCircle(80, 0, 80, 1).setVelocity(0.1, 0);
		let circles = [sweet1, other1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 45 : 40).setProration(player.powerupGrabFrames ? -0.5 : 0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(14, 1, 2.7).setHitStun(40, 15).setStunFrames(13).setNormalizeHitStun().setCancelWait(4);
		let other = new AttackProperties().setDamage(player.powerupGrabFrames ? 45 : 40).setProration(player.powerupGrabFrames ? -0.5 : 0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 1, 2.5).setHitStun(40, 15).setStunFrames(13).setNormalizeHitStun().setCancelWait(4);
		let prop = [sweet, other];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(28).setActiveF(4).setEndF(40);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 24) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 16;
		}

		if (this.getStartupF() < 4 && this.getFromEndF() < 2) {
			this.player.dx += this.player.dir.getX() * 15;
			this.player.dy += this.player.dir.getY() * 15;
		}
		this.player.dx *= 0.6;
		this.player.dy *= 0.6;
	}
}

class SelanRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";
	}

	static createAttack(player) {
		let cancelOptions = ["SS", "SPL", "RPL", "LPL", "RPS", "LPS"];
		let hitCancelOptions = ["dash"];

		let sour1 = new PriorityCircle(24, 48, 80, 0).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(108, 36, 80, 1).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(79, 103, 75, 1).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(12, 132, 75, 1).setVelocity(1, 0);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(player.powerupGrabFrames ? 50 : 45, 30).setProration(2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 3).setLaunch(7.9, 4, 0.4).setHitStun(47, 39).setStunFrames(13).setCancelWait(4).setWallPushback(3, 18);
		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 50 : 45, 30).setProration(2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 3).setLaunch(3.7, 4, 0.4).setHitStun(47, 39).setStunFrames(13).setCancelWait(4).setWallPushback(3, 18);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(28).setActiveF(12).setEndF(25);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		//player.playSound(assetManager.sounds.pakalaSelan);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.hitPlayerBool && this.getEndF() === 12) {
			this.player.addAction("dash");
		}
		this.player.dx *= 0.85;
		this.player.dy *= 0.85;
	}
}

class SelanLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";
	}

	static createAttack(player) {
		let cancelOptions = ["SS", "SPL", "RPL", "LPL", "RPS", "LPS"];
		let hitCancelOptions = ["dash"];

		let sour1 = new PriorityCircle(24, -48, 80, 0).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(108, -36, 80, 1).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(79, -103, 75, 1).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(12, -132, 75, 1).setVelocity(1, 0);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(player.powerupGrabFrames ? 50 : 45, 30).setProration(2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 3).setLaunch(7.9, 4, 0.4).setHitStun(47, 39).setStunFrames(13).setCancelWait(4).setWallPushback(3, 18);
		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 50 : 45, 30).setProration(2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 3).setLaunch(3.7, 4, 0.4).setHitStun(47, 39).setStunFrames(13).setCancelWait(4).setWallPushback(3, 18);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(28).setActiveF(12).setEndF(25);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		//player.playSound(assetManager.sounds.pakalaSelan);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.hitPlayerBool && this.getEndF() === 12) {
			this.player.addAction("dash");
		}
		this.player.dx *= 0.85;
		this.player.dy *= 0.85;
	}
}

class SelanMPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(0, 40, 80, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(0, -40, 80, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(0, 80, 80, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(0, -80, 80, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(0, 120, 80, 0).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(0, -120, 80, 0).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(0, 160, 80, 0).setVelocity(0.1, 0);
		let sweet8 = new PriorityCircle(0, -160, 80, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8];

		let sweet = new AttackProperties().setDamage(20, player.powerupGrabFrames ? 10 : 3).setProration(player.powerupGrabFrames ? 0 : 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(21, 0.1, 0.5).setHitStun(48, 28).setStunFrames(4).setNormalizeHitStun();
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(9).setActiveF(12).setEndF(40).setMulti(8, 1, -1);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.1);

		player.invTo = ["grab"];
		player.iFrames = 40;
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

class SelanNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.currentAngle = new Angle(player.dir.value);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NL", "SL", "RL", "LL"];

		let sour1 = new PriorityCircle(0, 0, 70, 0);
		let sweet1 = new PriorityCircle(0, 0, 130, 1);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(30).setProration(-2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(1, 5, 1).setHitStun(35, 10).setStunFrames(15).setAngleTypes("direct", "direct").setCancelWait(10);
		let sour = new AttackProperties().setDamage(20).setProration(-2).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(1, 5, 1).setHitStun(35, 10).setStunFrames(15).setAngleTypes("direct", "direct").setCancelWait(10);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? 3 : 4).setStartupF(15).setActiveF(20).setEndF(33).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
        }
	}

	logic() {
		this.player.turnSpeedModifier = 0.5;
		if (this.getStartupF() >= 10 && this.player.controls.joystickPressed(0))
				this.currentAngle = this.player.controls.angle(0);
		if (this.getStartupF() < 10 && this.getActiveF() > 0) {
			if (this.player.controls.joystickPressed(0)) {
				let diff = Angle.compare(this.currentAngle, this.player.controls.angle(0));
				this.currentAngle.changeValue(diff / 20);
			}
			let speed = 8;
			if (this.getStartupF() > 0)
				speed = 12;
			if (this.getActiveF() < 10)
				speed = 6;
			this.player.dx = this.currentAngle.getX() * speed;
			this.player.dy = this.currentAngle.getY() * speed;
			this.player.timerPunishHealth += 1;
		} else {
			this.player.dx *= 0.86;
			this.player.dy *= 0.86;
		}
	}

	hitConfirmSetFrames() {
		this.player.actionLag -= this.getActiveF();
		this.setActiveF(0);
		this.player.hurtboxStateFrame = 35;
	}
}

class SelanSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(40, 0, 40, 0);
		let sour2 = new PriorityCircle(35, -25, 40, 0);
		let sour3 = new PriorityCircle(35, 25, 40, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(40).setGrab(20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
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
		if (this.getStartupF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.5) {
				this.player.dir.value -= 0.15;
			}
			if (compare > 0.5) {
				this.player.dir.value += 0.15;
			}
		}
	}
}

class SelanRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sour1 = new PriorityCircle(0, 22, 40, 0).setCircleVelocity(32, -1);
		let sour2 = new PriorityCircle(-10, 57, 40, 0).setCircleVelocity(30, -1);
		let sour3 = new PriorityCircle(-40, 90, 40, 0).setCircleVelocity(28, -1);
		let sour4 = new PriorityCircle(-80, 120, 40, 0).setCircleVelocity(26, -1);
		let sweet1 = new PriorityCircle(-130, 141, 60, 1).setCircleVelocity(24, -1);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sweet = new AttackProperties().setDamage(player.powerupGrabFrames ? 70 : 60).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 16).setLaunch(5, 5, 1).setHitStun(43, 40).setStunFrames(13).setWallPushback(2);
		let sour = new AttackProperties().setDamage(player.powerupGrabFrames ? 60 : 50).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 16).setLaunch(5, 5, 1).setHitStun(42, 40).setStunFrames(13).setWallPushback(2);
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(false).setStartupF(28).setActiveF(8).setEndF(30);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(Angle.distance(new Angle().setFromPoint(player.dx, player.dy), player.right) / 3);
	}
}

class SelanLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.weak = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(-5, -27, 55, 0).setVelocity(18, -4);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage((player.powerupGrabFrames ? 6.5 : 5) * (this.weak ? 0.5 : 1)).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + 0.1).setLaunch(4, 1).setHitStun(34).setStunFrames(30).setCommandGrab().setCancelWait(3).setNoKill(this.weak);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(5).setStartupF(12).setActiveF(8).setEndF(28).setMulti(15, 2, 0.1);
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

	applyModifiers() {
		this.player.counterHittable = true;
	}

	logic() {
		if (this.getStartupF() === 1 && this.player.targetPlayer?.currentState.name === "block" && this.player.targetPlayer?.actionLag > 1) {
			this.weak = true;
		}
		if (this.getStartupF() > 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
		this.player.greenDisplay = 150;
		if (this.getActiveF() === this.rehitRate + 1) {
			this.setActiveF(0);
			this.player.actionLag = this.duration;
			/*if (this.multi > 0) {//Debug
				this.hitConfirmSetFrames();
				this.multi--;
			}*/
		}
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.slowWalkFrames = 400;
			this.player.targetPlayer.slowWalk = 0.6;
			let angle = new Angle(this.player.dir.value - 0.35);
			this.player.targetPlayer.x = this.player.x + angle.getX() * (90 + this.player.targetPlayer.collideRadius / 2);
			this.player.targetPlayer.y = this.player.y + angle.getY() * (90 + this.player.targetPlayer.collideRadius / 2);
		}
		if (this.properties[0].stunFrames > 5) {
			this.player.stunFrames = this.properties[0].stunFrames;
			this.player.hurtboxStateFrame = 49;
		} else {
			this.player.stunFrames = 0;
		}
		this.properties[0].setStunFrames(4);
		this.circles[0].dx = 0;
		this.circles[0].dy = 0;
		this.circles[0].diameter = 120;
		this.setActiveF(5);
		this.player.actionLag = this.duration;
	}
}

class SelanMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NL"];

		let sour1 = new PriorityCircle(0, 0, 100, 0);
		let sweet1 = new PriorityCircle(0, 0, 190, 1);
		let circles = [sour1, sweet1];

		let sweet = new AttackProperties().setDamage(60).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(20, 0, player.powerupGrabFrames ? 0.8 : 0.3).setHitStun(43, 20).setStunFrames(15, 16).setAngleTypes("direct", "direct");
		let sour = new AttackProperties().setDamage(50).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(20, 0, player.powerupGrabFrames ? 0.8 : 0.3).setHitStun(42, 20).setStunFrames(15, 16).setAngleTypes("direct", "direct");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(player.powerupGrabFrames ? false : 1).setStartupF(15).setActiveF(30).setEndF(20).setRotateable().setMulti(4, 15, 15);
	}

	static startAttack(player, attack, bufferInfo) {
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
		if (this.getFromActiveF() === 5) {
			this.setClashPriority(5);
			this.circles[1].diameter = 150;
		}
		if (this.getFromStartupF() === 6) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 16;
		}
	}
}

characters.push(Selan);