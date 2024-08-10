class Ka extends Player {
	constructor() {
		super([
			new Circle(5, 0, 60),
			new Circle(-36, 0, 30),
		]);

		this.hurtboxes["dash attack"] = [
			[new Circle(3, 7, 66),
			new Circle(-35, -13, 38)],
			[new Circle(2, 7, 63),
			new Circle(-32, -12, 39)],
			[new Circle(5, -1, 63),
			new Circle(-36, -1, 33)],
			[new Circle(4, 4, 67),
			new Circle(-30, 10, 38)],
			[new Circle(4, 0, 64),
			new Circle(-29, 18, 43)],
			[new Circle(-2, -9, 78),
			new Circle(-33, 8, 41)],
			[new Circle(-1, -1, 73),
			new Circle(-34, 0, 41)],
			[new Circle(6, -1, 61),
			new Circle(-31, 0, 41)],
			[new Circle(1, -1, 57),
			new Circle(-31, -4, 41)],
			[new Circle(-1, 0, 57),
			new Circle(-31, -9, 41)],
			[new Circle(6, 4, 61),
			new Circle(-33, -14, 36)],
			[new Circle(7, 4, 61),
			new Circle(-32, -12, 36)],
			[new Circle(7, 4, 62),
			new Circle(-32, -10, 39)],
			[new Circle(5, -2, 64),
			new Circle(-26, -2, 43)],
			[new Circle(4, -1, 64),
			new Circle(-34, -4, 35)],
			[new Circle(3, 3, 64),
			new Circle(-34, -3, 31)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(5, 0, 60),
			new Circle(-37, -6, 30)],
			[new Circle(41, -1, 50),
			new Circle(-1, -1, 34),
			new Circle(67, -15, 15),
			new Circle(67, 14, 12)],
			[new Circle(39, 0, 51),
			new Circle(1, -1, 30),
			new Circle(67, -13, 16),
			new Circle(68, 13, 13)],
			[new Circle(38, 0, 60),
			new Circle(-2, 6, 45)],
			[new Circle(32, -1, 60),
			new Circle(-5, 7, 44)],
			[new Circle(20, -2, 53),
			new Circle(-18, 3, 41)],
			[new Circle(1, -1, 64),
			new Circle(-34, -6, 35)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(4, 0, 69),
			new Circle(-40, -3, 28)],
			[new Circle(3, 0, 69),
			new Circle(-38, -5, 30)],
			[new Circle(83, -2, 69),
			new Circle(30, 0, 30)],
			[new Circle(82, 1, 69),
			new Circle(33, 0, 30)],
			[new Circle(79, 1, 76),
			new Circle(30, 7, 42)],
			[new Circle(54, -1, 65),
			new Circle(18, 7, 45)],
			[new Circle(34, -1, 60),
			new Circle(-4, 8, 40)],
			[new Circle(4, -2, 64),
			new Circle(-36, -3, 35)],
			[new Circle(0, 0, 62),
			new Circle(-36, -3, 35)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(5, 0, 60),
			new Circle(-37, 5, 30)],
			[new Circle(5, 0, 60),
			new Circle(-38, 6, 30)],
			[new Circle(41, -1, 50),
			new Circle(-1, -1, 34),
			new Circle(67, -15, 15),
			new Circle(67, 14, 12)],
			[new Circle(39, 0, 51),
			new Circle(1, -1, 30),
			new Circle(67, -13, 16),
			new Circle(68, 13, 13)],
			[new Circle(38, 0, 60),
			new Circle(-1, -6, 45)],
			[new Circle(32, -1, 60),
			new Circle(-5, -7, 44)],
			[new Circle(20, -2, 53),
			new Circle(-18, -4, 41)],
			[new Circle(1, -1, 64),
			new Circle(-34, 5, 35)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(5, 0, 60),
			new Circle(-37, -6, 30)],
			[new Circle(5, 0, 60),
			new Circle(-37, -6, 30)],
			[new Circle(41, -1, 50),
			new Circle(-1, -1, 34),
			new Circle(67, -15, 15),
			new Circle(67, 14, 12)],
			[new Circle(39, 0, 51),
			new Circle(1, -1, 30),
			new Circle(67, -13, 16),
			new Circle(68, 13, 13)],
			[new Circle(38, 0, 60),
			new Circle(-2, 6, 45)],
			[new Circle(32, -1, 60),
			new Circle(-5, 7, 44)],
			[new Circle(20, -2, 53),
			new Circle(-18, 3, 41)],
			[new Circle(1, -1, 64),
			new Circle(-34, -6, 35)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(-8, 1, 64),
			new Circle(-6, 32, 50)],
			[new Circle(-13, 10, 62),
			new Circle(20, 3, 50)],
			[new Circle(3, -8, 57),
			new Circle(-34, -12, 50),
			new Circle(-13, 11, 70)],
			[new Circle(-2, 14, 61),
			new Circle(21, -14, 51),
			new Circle(-12, -13, 76)],
			[new Circle(-11, 9, 63),
			new Circle(20, 1, 51)],
			[new Circle(-28, 1, 65),
			new Circle(0, 21, 52)],
			[new Circle(-19, -9, 63),
			new Circle(-19, 27, 52)],
			[new Circle(-5, -12, 65),
			new Circle(-30, 24, 38)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(-1, 0, 62),
			new Circle(-34, -8, 40)],
			[new Circle(10, -2, 69),
			new Circle(-32, -12, 34)],
			[new ICircle(41, -2, 82),
			new Circle(-16, -1, 30),
			new ICircle(17, 35, 50),
			new ICircle(16, -35, 50),
			new Circle(34, 0, 50)],
			[new ICircle(43, -1, 79),
			new Circle(0, -6, 47),
			new Circle(32, 1, 50)],
			[new Circle(32, 4, 57),
			new Circle(-4, -20, 39),
			new ICircle(28, 36, 17),
			new ICircle(61, -13, 17)],
			[new Circle(25, 17, 57),
			new Circle(-3, -9, 48),
			new ICircle(33, 42, 18),
			new ICircle(48, -8, 18)],
			[new Circle(20, 28, 57),
			new Circle(-12, 17, 45),
			new ICircle(36, 48, 18),
			new ICircle(32, -3, 15)],
			[new Circle(19, 25, 58),
			new Circle(-25, 32, 37),
			new ICircle(37, 50, 16),
			new ICircle(21, -9, 15)],
			[new Circle(14, 20, 58),
			new Circle(-28, 46, 37),
			new ICircle(34, 46, 14),
			new ICircle(17, -13, 15)],
			[new Circle(6, 7, 63),
			new Circle(-34, 34, 39)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(4, 0, 62),
			new Circle(-39, 1, 36),
			new Circle(15, -42, 17),
			new Circle(12, 42, 17)],
			[new Circle(10, 2, 76),
			new Circle(-47, 5, 53),
			new Circle(20, -49, 20),
			new Circle(16, 53, 21)],
			[new Circle(4, -1, 62),
			new Circle(-44, 5, 37),
			new Circle(17, -40, 16),
			new Circle(14, 37, 16)],
			[new Circle(9, 1, 68),
			new Circle(-44, 0, 45),
			new ICircle(33, -29, 20),
			new ICircle(23, 34, 21)],
			[new Circle(8, 1, 68),
			new Circle(-44, 1, 38),
			new ICircle(52, -12, 20),
			new ICircle(30, 30, 21)],
			[new Circle(8, 1, 68),
			new Circle(-44, 6, 38),
			new ICircle(40, -10, 29),
			new ICircle(29, 27, 21)],
			[new Circle(7, 2, 69),
			new Circle(-44, 15, 38),
			new ICircle(31, -18, 29),
			new ICircle(29, 27, 21)],
			[new Circle(4, 0, 63),
			new Circle(-46, 3, 38),
			new ICircle(26, -25, 19),
			new ICircle(24, 25, 15)],
			[new Circle(9, -3, 78),
			new Circle(-54, -13, 36),
			new ICircle(38, -39, 19),
			new ICircle(34, 37, 20)],
			[new Circle(5, -1, 61),
			new Circle(-34, -16, 42),
			new ICircle(26, -29, 17),
			new ICircle(22, 29, 16)],
			[new Circle(4, -1, 58),
			new Circle(-37, -6, 30),
			new ICircle(20, -25, 14),
			new ICircle(19, 28, 16)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(-2, -2, 54),
			new Circle(17, -18, 18),
			new Circle(7, 25, 19),
			new Circle(-40, 5, 32)],
			[new Circle(0, -2, 54),
			new Circle(-3, 27, 16),
			new Circle(4, 24, 10),
			new Circle(-33, 0, 43)],
			[new Circle(-3, 0, 49),
			new Circle(23, -9, 16),
			new Circle(-14, 22, 28),
			new Circle(-26, -5, 47)],
			[new Circle(26, -7, 55),
			new Circle(25, -33, 12),
			new Circle(46, 21, 28),
			new Circle(-14, -2, 29),
			new ICircle(40, 37, 60)],
			[new Circle(26, -8, 55),
			new Circle(27, -37, 12),
			new Circle(49, 15, 27),
			new Circle(-13, 1, 29),
			new ICircle(42, 35, 60)],
			[new Circle(26, -14, 54),
			new Circle(27, -42, 12),
			new Circle(52, 2, 18),
			new Circle(-8, 14, 29)],
			[new Circle(24, -18, 54),
			new Circle(24, -48, 12),
			new Circle(57, -21, 18),
			new Circle(-3, 17, 31)],
			[new Circle(22, -19, 52),
			new Circle(17, -42, 19),
			new Circle(30, 9, 18),
			new Circle(1, 8, 42)],
			[new Circle(18, -13, 54),
			new Circle(14, -40, 19),
			new Circle(29, 12, 17),
			new Circle(-1, 9, 52)],
			[new Circle(13, -8, 54),
			new Circle(16, -36, 16),
			new Circle(25, 16, 15),
			new Circle(-13, 12, 46)],
			[new Circle(9, -3, 56),
			new Circle(15, -31, 16),
			new Circle(21, 21, 13),
			new Circle(-26, 16, 38)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(-2, 2, 54),
			new Circle(17, 18, 18),
			new Circle(7, -25, 19),
			new Circle(-40, -5, 32)],
			[new Circle(0, 2, 54),
			new Circle(-3, -27, 16),
			new Circle(4, -24, 10),
			new Circle(-33, 0, 43)],
			[new Circle(-3, 0, 49),
			new Circle(23, 9, 16),
			new Circle(-14, -22, 28),
			new Circle(-26, 5, 47)],
			[new Circle(26, 7, 55),
			new Circle(25, 33, 12),
			new Circle(46, -21, 28),
			new Circle(-14, 2, 29),
			new ICircle(40, -37, 60)],
			[new Circle(26, 8, 55),
			new Circle(27, 37, 12),
			new Circle(49, -15, 27),
			new Circle(-13, -1, 29),
			new ICircle(42, -35, 60)],
			[new Circle(26, 14, 54),
			new Circle(27, 42, 12),
			new Circle(52, -2, 18),
			new Circle(-8, -14, 29)],
			[new Circle(24, 18, 54),
			new Circle(24, 48, 12),
			new Circle(57, 21, 18),
			new Circle(-3, -17, 31)],
			[new Circle(22, 19, 52),
			new Circle(17, 42, 19),
			new Circle(30, -9, 18),
			new Circle(1, -8, 42)],
			[new Circle(18, 13, 54),
			new Circle(14, 40, 19),
			new Circle(29, -12, 17),
			new Circle(-1, -9, 52)],
			[new Circle(13, 8, 54),
			new Circle(16, 36, 16),
			new Circle(25, -16, 15),
			new Circle(-13, -12, 46)],
			[new Circle(9, 3, 56),
			new Circle(15, 31, 16),
			new Circle(21, -21, 13),
			new Circle(-26, -16, 38)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(11, -10, 60),
			new Circle(-30, -2, 31),
			new Circle(27, -35, 22),
			new Circle(21, 15, 17)],
			[new Circle(11, -10, 60),
			new Circle(-31, 7, 31),
			new Circle(30, -36, 20),
			new Circle(21, 16, 17)],
			[new Circle(11, -6, 60),
			new Circle(-32, 11, 31),
			new Circle(29, -33, 20),
			new Circle(21, 16, 17)],
			[new Circle(5, -1, 56),
			new Circle(-31, 7, 44),
			new ICircle(48, -33, 62),
			new Circle(14, 21, 17)],
			[new Circle(4, 0, 55),
			new Circle(-27, 6, 44),
			new ICircle(48, -33, 62),
			new Circle(14, 21, 17)],
			[new Circle(3, 1, 57),
			new Circle(-30, 9, 45),
			new ICircle(48, -33, 62),
			new Circle(14, 21, 17)],
			[new Circle(4, -1, 58),
			new Circle(-29, 8, 42),
			new ICircle(48, -33, 62),
			new Circle(15, 20, 17)],
			[new Circle(1, 5, 52),
			new Circle(-29, 2, 43),
			new Circle(33, 0, 14),
			new Circle(6, 31, 17)],
			[new Circle(-1, 12, 57),
			new Circle(-30, -1, 43),
			new Circle(26, 8, 14),
			new Circle(-2, 38, 17)],
			[new Circle(-6, 15, 57),
			new Circle(-33, -8, 43),
			new Circle(23, 11, 14),
			new Circle(-7, 42, 14)],
			[new Circle(-6, 14, 55),
			new Circle(-37, -15, 36),
			new Circle(23, 8, 14),
			new Circle(-2, 41, 18)],
			[new Circle(-6, 14, 55),
			new Circle(-37, -15, 36),
			new Circle(22, 8, 14),
			new Circle(-2, 41, 18)],
			[new Circle(-6, 11, 52),
			new Circle(-31, -10, 36),
			new Circle(18, -7, 14),
			new Circle(7, 31, 18)],
			[new Circle(-2, 1, 52),
			new Circle(-37, -13, 33),
			new Circle(19, -17, 14),
			new Circle(5, 27, 18)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(9, -5, 57),
			new Circle(-33, 0, 30)],
			[new Circle(23, -14, 46),
			new Circle(4, 2, 44),
			new Circle(-31, 5, 28)],
			[new Circle(26, -15, 48),
			new Circle(6, 3, 44),
			new Circle(-31, 19, 28)],
			[new Circle(28, -14, 48),
			new Circle(6, 3, 44),
			new Circle(-29, 23, 28)],
			[new Circle(17, -27, 48),
			new Circle(2, -14, 44),
			new Circle(-27, 15, 28)],
			[new Circle(5, -37, 54),
			new Circle(-24, -23, 27),
			new Circle(-27, -1, 28)],
			[new Circle(5, -39, 56),
			new Circle(-27, -30, 27),
			new Circle(-33, -6, 28)],
			[new Circle(6, -47, 59),
			new Circle(-26, -42, 32),
			new Circle(-32, -18, 27)],
			[new Circle(7, -46, 58),
			new Circle(-28, -47, 34),
			new Circle(-41, -26, 27)],
			[new Circle(11, -33, 53),
			new Circle(-21, -34, 30),
			new Circle(-45, -28, 34)],
			[new Circle(7, -19, 59),
			new Circle(-26, -24, 30),
			new Circle(-38, -45, 32)],
			[new Circle(7, -12, 58),
			new Circle(-27, -23, 30),
			new Circle(-35, -43, 31)],
			[new Circle(6, -5, 60),
			new Circle(-39, -22, 34)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(16, 0, 58),
			new Circle(-27, 5, 29)],
			[new Circle(36, 0, 46),
			new Circle(-16, 18, 27),
			new Circle(20, 14, 43)],
			[new Circle(56, 12, 46),
			new Circle(-1, 43, 27),
			new Circle(37, 27, 43)],
			[new Circle(56, 12, 46),
			new Circle(1, 46, 27),
			new Circle(39, 25, 44)],
			[new Circle(31, -26, 44),
			new Circle(-11, 19, 27),
			new Circle(18, -13, 44)],
			[new Circle(7, -47, 44),
			new Circle(-25, -14, 34),
			new Circle(-2, -40, 44)],
			[new Circle(8, -47, 44),
			new Circle(-32, -17, 34),
			new Circle(-4, -43, 44)],
			[new Circle(12, -47, 44),
			new Circle(-27, -29, 46),
			new Circle(-4, -45, 48)],
			[new Circle(12, -47, 44),
			new Circle(-31, -36, 46),
			new Circle(-1, -46, 48)],
			[new Circle(14, -34, 44),
			new Circle(-36, -29, 46),
			new Circle(1, -34, 48)],
			[new Circle(14, -21, 44),
			new Circle(-37, -42, 38),
			new Circle(-2, -20, 48)],
			[new Circle(14, -12, 44),
			new Circle(-33, -37, 38),
			new Circle(-2, -15, 50)],
			[new Circle(13, -5, 44),
			new Circle(-36, -20, 38),
			new Circle(-2, -7, 50)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(8, 14, 60),
			new Circle(-30, -8, 38)],
			[new Circle(11, 24, 60),
			new Circle(-19, -5, 46)],
			[new Circle(8, 33, 58),
			new Circle(-6, -1, 52)],
			[new Circle(8, 33, 58),
			new Circle(-3, -18, 43)],
			[new Circle(-14, 29, 58),
			new Circle(-32, -3, 59)],
			[new Circle(-33, 16, 59),
			new Circle(-53, -8, 53)],
			[new Circle(-44, 11, 59),
			new Circle(-64, -3, 53)],
			[new Circle(-49, 11, 51),
			new Circle(-85, -7, 43)],
			[new Circle(-23, 7, 51),
			new Circle(-42, 9, 50),
			new Circle(-85, 5, 31)],
			[new Circle(-10, 6, 51),
			new Circle(-26, 8, 50),
			new Circle(-75, 7, 31)],
			[new Circle(9, 0, 51),
			new Circle(-7, 1, 50),
			new Circle(-54, 4, 31)],
			[new Circle(12, 1, 56),
			new Circle(-27, 2, 43)],
			[new Circle(7, 1, 56),
			new Circle(-34, 4, 44)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(8, -14, 60),
			new Circle(-30, 8, 38)],
			[new Circle(11, -24, 60),
			new Circle(-19, 5, 46)],
			[new Circle(8, -33, 58),
			new Circle(-6, 1, 52)],
			[new Circle(8, -33, 58),
			new Circle(-3, 18, 43)],
			[new Circle(-14, -29, 58),
			new Circle(-32, 3, 59)],
			[new Circle(-33, -16, 59),
			new Circle(-53, 8, 53)],
			[new Circle(-44, -11, 59),
			new Circle(-64, 3, 53)],
			[new Circle(-49, -11, 51),
			new Circle(-85, 7, 43)],
			[new Circle(-23, -7, 51),
			new Circle(-42, -9, 50),
			new Circle(-85, -5, 31)],
			[new Circle(-10, -6, 51),
			new Circle(-26, -8, 50),
			new Circle(-75, -7, 31)],
			[new Circle(9, 0, 51),
			new Circle(-7, -1, 50),
			new Circle(-54, -4, 31)],
			[new Circle(12, -1, 56),
			new Circle(-27, -2, 43)],
			[new Circle(7, -1, 56),
			new Circle(-34, -4, 44)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(1, 0, 52),
			new Circle(11, 21, 19),
			new Circle(17, -23, 18),
			new Circle(-40, -3, 44)],
			[new Circle(-6, 0, 52),
			new Circle(4, 22, 19),
			new Circle(7, -24, 18),
			new Circle(-43, 4, 44)],
			[new Circle(-12, -2, 52),
			new Circle(-2, 24, 19),
			new Circle(1, -27, 18),
			new Circle(-57, 25, 36),
			new Circle(-44, -2, 44)],
			[new Circle(-17, -6, 52),
			new Circle(-14, 23, 19),
			new Circle(0, -30, 18),
			new Circle(-64, 12, 27),
			new Circle(-52, -12, 44)],
			[new Circle(-15, -13, 52),
			new Circle(-24, 17, 19),
			new Circle(0, -39, 18),
			new Circle(-61, 7, 27),
			new Circle(-46, -17, 44)],
			[new Circle(13, 11, 50),
			new Circle(-4, -7, 48),
			new Circle(-23, -24, 32),
			new Circle(-44, -32, 30)],
			[new Circle(17, -9, 55),
			new Circle(-2, 3, 51),
			new Circle(-29, 11, 37),
			new Circle(-46, -11, 30)],
			[new Circle(0, 0, 55),
			new Circle(-16, -21, 24),
			new Circle(26, -4, 21),
			new Circle(-16, 23, 39),
			new Circle(-43, 13, 30)],
			[new Circle(-7, -1, 55),
			new Circle(-31, -10, 23),
			new Circle(18, -11, 21),
			new Circle(-8, 30, 39),
			new Circle(-26, 40, 30)],
			[new Circle(-9, 3, 55),
			new Circle(-25, 22, 23),
			new Circle(-10, -22, 21),
			new Circle(9, 21, 45),
			new Circle(3, 39, 49)],
			[new Circle(-8, 9, 55),
			new Circle(-29, -7, 23),
			new Circle(-5, 38, 21),
			new Circle(15, -1, 50),
			new Circle(20, 22, 49)],
			[new Circle(-3, 9, 55),
			new Circle(-23, 27, 18),
			new Circle(26, 19, 18),
			new Circle(5, -22, 39),
			new Circle(25, -23, 37)],
			[new Circle(2, 8, 55),
			new Circle(-12, 33, 18),
			new Circle(30, 11, 18),
			new Circle(-13, -21, 39),
			new Circle(10, -36, 33)],
			[new Circle(7, 5, 55),
			new Circle(7, 36, 16),
			new Circle(27, -12, 16),
			new Circle(-20, -15, 39),
			new Circle(-21, -42, 33)],
			[new Circle(-1, 1, 55),
			new Circle(12, 23, 16),
			new Circle(19, -21, 16),
			new Circle(-37, 5, 30),
			new Circle(-49, -6, 29)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(5, 3, 50),
			new Circle(16, 27, 13),
			new Circle(16, -24, 12),
			new Circle(-27, -3, 29),
			new Circle(-33, -21, 26)],
			[new Circle(6, 0, 50),
			new Circle(10, 27, 18),
			new Circle(29, -3, 20),
			new Circle(-15, -23, 29),
			new Circle(-35, -23, 30)],
			[new Circle(1, 4, 50),
			new Circle(-17, 25, 18),
			new Circle(22, 5, 20),
			new Circle(-6, -29, 29),
			new Circle(-27, -30, 28)],
			[new Circle(-5, 0, 50),
			new Circle(-36, -5, 22),
			new Circle(1, 33, 22),
			new Circle(15, -25, 29),
			new Circle(8, -43, 32)],
			[new Circle(-5, 0, 50),
			new Circle(-25, -18, 22),
			new Circle(-22, 27, 22),
			new Circle(23, -8, 29),
			new Circle(25, -29, 32)],
			[new Circle(-5, 0, 50),
			new Circle(-2, -27, 22),
			new Circle(-38, 3, 22),
			new Circle(9, 23, 29),
			new Circle(23, 12, 32)],
			[new Circle(-5, 0, 50),
			new Circle(14, -13, 22),
			new Circle(-23, -20, 22),
			new Circle(-5, 26, 29),
			new Circle(12, 27, 32)],
			[new Circle(-5, 0, 50),
			new Circle(20, -5, 22),
			new Circle(-12, -26, 22),
			new Circle(-16, 25, 29),
			new Circle(3, 32, 34)],
			[new Circle(0, -3, 50),
			new Circle(19, 10, 19),
			new Circle(-4, -28, 25),
			new Circle(-19, 19, 29),
			new Circle(-15, 33, 34)],
			[new Circle(0, -1, 50),
			new Circle(16, 16, 16),
			new Circle(11, -24, 21),
			new Circle(-26, 13, 29),
			new Circle(-30, 28, 27)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(4, 0, 54),
			new Circle(17, 24, 16),
			new Circle(17, -23, 17),
			new Circle(-31, -11, 38)],
			[new Circle(4, 6, 53),
			new Circle(17, 29, 16),
			new Circle(16, -19, 17),
			new Circle(-19, -8, 48)],
			[new Circle(4, 6, 53),
			new Circle(17, 29, 16),
			new Circle(17, -18, 17),
			new Circle(-34, -3, 38)],
			[new Circle(4, 0, 53),
			new Circle(16, 24, 16),
			new Circle(18, -21, 17),
			new Circle(-42, 10, 38)],
			[new Circle(6, -4, 50),
			new Circle(16, 19, 16),
			new Circle(17, -22, 17),
			new Circle(-34, 20, 38),
			new Circle(-25, 1, 29)],
			[new Circle(-10, -5, 47),
			new Circle(6, 10, 14),
			new Circle(6, -21, 14),
			new Circle(-34, 15, 29),
			new Circle(-28, -2, 29)],
			[new Circle(-9, -5, 47),
			new Circle(1, 16, 14),
			new Circle(5, -27, 14),
			new Circle(-43, 11, 29),
			new Circle(-25, -6, 29)],
			[new Circle(-9, -10, 47),
			new Circle(2, 13, 14),
			new Circle(13, -25, 15),
			new Circle(-40, 10, 27),
			new Circle(-26, -16, 29)],
			[new Circle(19, -5, 30),
			new Circle(3, 8, 14),
			new Circle(23, -29, 16),
			new Circle(0, -20, 35),
			new Circle(-18, -17, 42)],
			[new Circle(18, -9, 33),
			new Circle(34, -16, 14),
			new Circle(-3, -11, 16),
			new Circle(4, 3, 39),
			new Circle(-18, 4, 35),
			new Circle(-24, -22, 26)],
			[new Circle(16, 1, 32),
			new Circle(22, 18, 17),
			new Circle(17, -16, 16),
			new Circle(-4, 4, 39),
			new Circle(-23, 0, 35),
			new Circle(-30, -20, 26)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(10, 0, 50),
			new Circle(-14, 9, 39),
			new Circle(-12, -6, 43)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31),
			new Circle(43, -1, 18)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, 13, 32),
			new Circle(-11, -15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 9, 42),
			new Circle(-11, 18, 33),
			new Circle(-10, -13, 31),
			new Circle(38, 19, 20)],
			[new Circle(10, -8, 45),
			new Circle(-9, 10, 33),
			new Circle(-11, -19, 31),
			new Circle(37, -18, 20)],
			[new Circle(12, -11, 54),
			new Circle(-4, 7, 41),
			new Circle(-9, -26, 31),
			new Circle(35, -19, 32)],
			[new Circle(20, -12, 62),
			new Circle(-8, 16, 39),
			new Circle(-9, -30, 31),
			new Circle(31, -28, 32)],
			[new Circle(20, -12, 62),
			new Circle(2, 7, 53),
			new Circle(-7, -37, 29),
			new Circle(32, -35, 32)],
			[new Circle(18, -11, 50),
			new Circle(-13, 1, 43),
			new Circle(-1, -41, 25),
			new Circle(8, 22, 27),
			new Circle(38, 10, 16),
			new Circle(35, -34, 15)],
			[new Circle(19, 7, 45),
			new Circle(-17, 1, 47),
			new Circle(24, -25, 29),
			new Circle(5, -33, 22)],
			[new Circle(17, 5, 45),
			new Circle(-4, 0, 47),
			new Circle(-32, 2, 23),
			new Circle(18, -19, 34)],
			[new Circle(18, 8, 41),
			new Circle(-4, 0, 48),
			new Circle(-36, 2, 23),
			new Circle(16, -18, 26)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(10, 0, 50),
			new Circle(-14, -9, 39),
			new Circle(-12, 6, 43)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31),
			new Circle(43, 1, 18)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, 0, 44),
			new Circle(-11, -13, 32),
			new Circle(-11, 15, 31),
			new Circle(44, 0, 17)],
			[new Circle(16, -9, 42),
			new Circle(-11, -18, 33),
			new Circle(-10, 13, 31),
			new Circle(38, -19, 20)],
			[new Circle(10, 8, 45),
			new Circle(-9, -10, 33),
			new Circle(-11, 19, 31),
			new Circle(37, 18, 20)],
			[new Circle(12, 11, 54),
			new Circle(-4, -7, 41),
			new Circle(-9, 26, 31),
			new Circle(35, 19, 32)],
			[new Circle(20, 12, 62),
			new Circle(-8, -16, 39),
			new Circle(-9, 30, 31),
			new Circle(31, 28, 32)],
			[new Circle(20, 12, 62),
			new Circle(2, -7, 53),
			new Circle(-7, 37, 29),
			new Circle(32, 35, 32)],
			[new Circle(18, 11, 50),
			new Circle(-13, -1, 43),
			new Circle(-1, 41, 25),
			new Circle(8, -22, 27),
			new Circle(38, -10, 16),
			new Circle(35, 34, 15)],
			[new Circle(19, -7, 45),
			new Circle(-17, -1, 47),
			new Circle(24, 25, 29),
			new Circle(5, 33, 22)],
			[new Circle(17, -5, 45),
			new Circle(-4, 0, 47),
			new Circle(-32, -2, 23),
			new Circle(18, 19, 34)],
			[new Circle(18, -8, 41),
			new Circle(-4, 0, 48),
			new Circle(-36, -2, 23),
			new Circle(16, 18, 26)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(0, 0, 53),
			new Circle(8, 24, 16),
			new Circle(11, -26, 14),
			new Circle(-38, -2, 36)],
			[new Circle(-7, 0, 49),
			new Circle(0, 25, 16),
			new Circle(3, -24, 16),
			new Circle(-41, 4, 32)],
			[new Circle(-7, 0, 49),
			new Circle(-3, 25, 16),
			new Circle(0, -25, 17),
			new Circle(-41, 1, 31)],
			[new Circle(3, 4, 54),
			new Circle(21, 22, 19),
			new Circle(21, -16, 18),
			new Circle(-38, 2, 31)],
			[new Circle(8, 4, 54),
			new Circle(21, 26, 19),
			new Circle(32, -5, 18),
			new Circle(-35, -2, 31)],
			[new Circle(8, -5, 54),
			new Circle(29, 5, 17),
			new Circle(24, -27, 19),
			new Circle(-32, 8, 31)],
			[new Circle(8, -5, 54),
			new Circle(32, -1, 17),
			new Circle(27, -26, 19),
			new Circle(-32, 18, 31)],
			[new Circle(9, -2, 52),
			new Circle(32, 9, 17),
			new Circle(16, -28, 19),
			new Circle(-33, 18, 31)],
			[new Circle(9, -2, 52),
			new Circle(30, 0, 25),
			new Circle(6, -32, 18),
			new Circle(-23, 15, 41)],
			[new Circle(3, -6, 52),
			new Circle(26, -17, 17),
			new Circle(-11, -29, 21),
			new Circle(-15, 13, 45)],
			[new Circle(3, -6, 52),
			new Circle(28, -12, 17),
			new Circle(-8, -32, 21),
			new Circle(-10, 28, 45)],
			[new Circle(6, -8, 52),
			new Circle(31, -1, 17),
			new Circle(6, -33, 16),
			new Circle(-18, 31, 38)],
			[new Circle(6, -3, 52),
			new Circle(33, 5, 17),
			new Circle(15, -32, 16),
			new Circle(-12, 20, 43)],
			[new Circle(5, -4, 52),
			new Circle(22, 16, 17),
			new Circle(18, -30, 16),
			new Circle(-26, 7, 31),
			new Circle(-35, 31, 29)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(10, 0, 47),
			new Circle(-18, -9, 37),
			new Circle(-18, 10, 37)],
			[new Circle(10, 0, 47),
			new Circle(-22, -14, 33),
			new Circle(-22, 13, 33)],
			[new Circle(20, -1, 23),
			new Circle(-28, -15, 31),
			new Circle(-30, 13, 30),
			new Circle(-7, 0, 39),
			new Circle(-5, -4, 36)],
			[new Circle(20, 0, 23),
			new Circle(-28, -14, 33),
			new Circle(-28, 13, 33),
			new Circle(-4, 1, 36),
			new Circle(-3, -6, 32)],
			[new Circle(20, -1, 22),
			new Circle(-28, -14, 33),
			new Circle(-28, 13, 33),
			new Circle(-4, 1, 35),
			new Circle(-5, -3, 35)],
			[new Circle(16, 0, 28),
			new Circle(-18, -14, 33),
			new Circle(-19, 13, 33),
			new Circle(8, 14, 26),
			new Circle(6, -11, 29)],
			[new Circle(10, 0, 47),
			new Circle(-18, -14, 33),
			new Circle(-19, 13, 33)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(-9, 0, 50),
			new Circle(0, -28, 25),
			new Circle(0, 27, 24),
			new Circle(14, -1, 22),
			new Circle(-42, 0, 26)],
			[new Circle(3, 1, 50),
			new ICircle(30, -17, 23),
			new ICircle(30, 18, 20),
			new ICircle(26, -1, 22),
			new Circle(-34, -1, 29)],
			[new Circle(11, 1, 50),
			new ICircle(33, -12, 25),
			new ICircle(34, 9, 25),
			new Circle(-16, -3, 29)],
			[new Circle(11, 1, 50),
			new ICircle(33, -12, 25),
			new ICircle(34, 9, 25),
			new Circle(-12, -2, 29)],
			[new Circle(4, 1, 54),
			new ICircle(26, -15, 25),
			new ICircle(29, 17, 20),
			new Circle(-21, -8, 34)],
			[new Circle(0, 0, 52),
			new ICircle(18, -19, 15),
			new ICircle(17, 21, 13),
			new Circle(-23, -5, 37)],
			[new Circle(0, 0, 52),
			new ICircle(20, -19, 15),
			new ICircle(20, 18, 13),
			new Circle(-28, -7, 38)],
			[new Circle(5, 0, 52),
			new ICircle(20, -20, 15),
			new ICircle(22, 20, 13),
			new Circle(-33, -5, 33)],
			[new Circle(5, 1, 52),
			new Circle(21, -24, 15),
			new Circle(22, 23, 13),
			new Circle(-32, -3, 31)],
			[new Circle(7, 1, 55),
			new Circle(18, -25, 15),
			new Circle(19, 25, 13),
			new Circle(-33, -2, 31)],
			[new Circle(-5, 0, 56),
			new Circle(1, -33, 15),
			new Circle(0, 32, 13),
			new Circle(-40, 0, 30)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(-1, 1, 54),
			new Circle(22, -3, 41),
			new Circle(19, 18, 31),
			new Circle(-28, -13, 29),
			new Circle(-49, -14, 30)],
			[new Circle(-1, 1, 54),
			new Circle(21, 3, 41),
			new Circle(17, 23, 31),
			new Circle(-25, -17, 30),
			new Circle(-46, -15, 30)],
			[new Circle(-1, 0, 53),
			new Circle(30, 3, 27),
			new Circle(6, 30, 29),
			new Circle(-22, -21, 30),
			new Circle(-42, -21, 29)],
			[new Circle(2, 3, 56),
			new Circle(29, -1, 27),
			new Circle(-1, 31, 26),
			new Circle(-19, -23, 30),
			new Circle(-32, -40, 30)],
			[new Circle(2, 3, 56),
			new Circle(30, -5, 25),
			new Circle(4, 34, 24),
			new Circle(-25, -18, 30),
			new Circle(-31, -37, 30)],
			[new Circle(2, 2, 56),
			new Circle(30, -10, 25),
			new Circle(10, 32, 24),
			new Circle(-30, -9, 30),
			new Circle(-34, -32, 30)],
			[new Circle(3, 1, 56),
			new Circle(25, -13, 29),
			new Circle(14, 32, 24),
			new Circle(-32, -2, 30),
			new Circle(-36, -22, 30)],
			[new Circle(3, -2, 56),
			new Circle(18, -23, 29),
			new Circle(22, 25, 24),
			new Circle(-30, 9, 30),
			new Circle(-40, -6, 30)],
			[new Circle(3, -2, 56),
			new Circle(9, -26, 29),
			new Circle(25, 19, 24),
			new Circle(-25, 18, 30),
			new Circle(-39, 10, 25)],
			[new Circle(3, -2, 56),
			new Circle(10, -30, 29),
			new Circle(27, 16, 29),
			new Circle(-24, 17, 30),
			new Circle(-44, 20, 28)],
			[new Circle(3, -2, 56),
			new Circle(14, -29, 25),
			new Circle(25, 20, 25),
			new Circle(-29, 14, 29),
			new Circle(-44, 30, 28)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(16, -7, 65),
			new Circle(-2, 10, 50)],
			[new Circle(-3, -22, 56),
			new Circle(6, -5, 50)],
			[new Circle(-27, -22, 56),
			new Circle(-3, -21, 52)],
			[new Circle(-25, -14, 48),
			new Circle(-15, -27, 44)],
			[new Circle(-10, 2, 54),
			new Circle(-15, -23, 50)],
			[new Circle(18, -8, 62),
			new Circle(-4, 13, 50)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(5, 0, 50),
			new Circle(21, -15, 22),
			new Circle(22, 19, 19),
			new Circle(-18, -8, 42)]
		];

		this.headNoun = "󱦀";//kijetesantakalu
		this.name = currentLanguage === "tp" ? "󱦀󱦐󱦗󱤘󱤃󱦑" : "Ka";//kijetesantakalu Ka

		this.selectScreenSizeOffset = 75;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.kiKaSheet);

		this.states.SL = State.copyState(State.SL).addTag("rotateable");
		this.states.SS_ACTIONS = [];
		this.states.SSF = State.copyState(State.SS).setName("SSF");
		this.states.NPL = State.copyState(State.NPL).addTag("rotateable");
		this.states.RPL = State.copyState(State.RPL).addTag("rotateable");
		this.states.LPL = State.copyState(State.LPL).addTag("rotateable");
		this.states.NPS = State.copyState(State.NPS).addTag("rotateable");
		this.states.RPS = State.copyState(State.RPS).addTag("rotateable");
		this.states.LPS = State.copyState(State.LPS).addTag("rotateable");
		this.states.RN = State.copyState(State.RN).addTag("rotateable");
		this.states.MN_ACTIONS = ["block", "power dash"];

		this.collideRadius = 36;

		this.movementSpeed = 3;
		this.forwardSpeedBoost = 2;

		this.OOBBlockFrames = 0;

		this.dash.speed = 16;
		this.dash.frames = 25;
		this.dash.invFirstFrame = this.dash.frames - 8;
		this.dash.turnSpeedBoost = 0.6;
		this.dash.turnFrame = this.dash.frames - 6;
		this.dash.neutralBoost = 0;//How much your speed increases from pressing dash while not pressing a direction
		this.dash.backPenalty = 8;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 1.4;
		this.dash.friction = 0.9;

		this.dash.iFrames = 10;
		this.dash.invTo = ["attack"];
		this.dash.dashAttackStartDelay = 1;
		this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 18;
		this.dash.grabCancelFrame = this.dash.frames - 25;
		this.dash.blockCancelFrame = this.dash.frames - 25;

		this.dash.comboDashFrame = this.dash.frames - 10;
		this.dash.combos = 0;
		this.dash.maxCombos = 0;

		//All values for the dash cancel (aka sidestep or tawa lili)
		this.dash.cancelIFrames = 7;
		this.dash.cancelSpeed = 26;
		this.dash.cancelFrames = 14;
		this.dash.cancelDecay = 0.78;//Speed decay
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 2;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 14;

		this.powerDash.proration = 0;

		this.turnSpeed = 0.035;

		this.weight = 0.8;

		this.health = 700;
		this.maxHealth = 700;
		this.timerPunishMult = 0.7;

		this.arrowOffset = -15;

		this.pastX = this.x;
		this.pastY = this.y;
		this.pastCounter = 0;

		this.tethered = 0;//How many frames Ka is tethered to the rope
		this.noTether = 0;//How many frames the tether does not affect Ka (even though it is visible)
		this.tetherX = 0;//Where the tether point is
		this.tetherY = 0;//Where the tether point is
		this.canStickTether = 0;//Can the tether stick to the opponent or not
		this.parryTetherStickFrames = 60;//How many frames canStickTether is set to when a parry occurs
		this.tetherStuck = false;

		this.airRotValue = 0;//This is used for displaying the paper airplane attack

		this.risk = 0;//Getting your attacks blocked means you will take more damage from attacks

		this.holdingNPS = false;
		this.NPSCharge = 0;
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks

		this.DASH_ATTACK = KaDashAttack;

		this.NL = KaNL;
		this.SL = KaSL;
		this.RL = KaRL;
		this.LL = KaLL;
		this.ML = KaML;

		this.NS = KaNS;
		this.SS = KaSS;
		this.RS = KaRS;
		this.LS = KaLS;
		this.MS = KaMS;

		this.NPL = KaNPL;
		this.SPL = KaSPL;
		this.RPL = KaRPL;
		this.LPL = KaLPL;
		this.MPL = KaMPL;

		this.NPS = KaNPS;
		this.SPS = KaSPS;
		this.RPS = KaRPS;
		this.LPS = KaLPS;
		this.MPS = KaMPS;

		this.NN = KaNN;
		this.SN = KaSN;
		this.RN = KaRN;
		this.LN = KaLN;
		this.MN = KaMN;
	}

	startNPS() {
		if (this.holdingNPS === false && this.controls.heldFrames("pokaSuli") > 0 && this.controls.heldFrames("pokaSuli") < 5 && this.pressedNeutral()) {
			this.holdingNPS = true;
			this.NPSCharge = 0;
		}
		if (this.holdingNPS) {
			if (this.slowWalkFrames > 0) {
				this.slowWalkFrames = max(this.slowWalkFrames, 5);
				this.slowWalk = min(this.slowWalk, 0.7);
			} else {
				this.slowWalkFrames = 5;
				this.slowWalk = 0.7;
			}
			this.NPSCharge++;
		}
		if (!this.controls.pressed("pokaSuli")) {
			if (this.holdingNPS) {
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
			this.holdingNPS = false;
		}

	}

	generalLogic() {
		this.hitStunModifier = 3;
		if (this.currentState.name === "hitstun")
			this.risk--;
		if (this.targetPlayer && this.targetPlayer.currentState.name === "block" && this.targetPlayer.hitStun % 3 > 0)
			this.risk++;
		this.risk = constrain(this.risk, 0, 600);
		this.defense = constrain(1 + this.risk / 1200, 1, 1.4);

		if (this.targetPlayer) {
			this.pastX = (this.pastX * 498 + this.x + this.targetPlayer.x) / 500;
			this.pastY = (this.pastY * 498 + this.y + this.targetPlayer.y) / 500;
		}
		if (this.pastCounter > 0) {
			this.pastCounter--;
		}

		if (this.currentState.name === "grab" || this.currentState.name === "grabbed" || this.currentState.name === "SSF") {
			this.noTether = 5;
		}

		if (this.tethered > 0 && this.noTether <= 0) {
			this.tethered--;
			let dampening = (this.tetherStuck ? 140 : 60);
			let radius = (!this.tetherStuck ? 10 : (this.targetPlayer ? this.targetPlayer.collideRadius : 0) + this.collideRadius);
			if (dist(this.x, this.y, this.tetherX, this.tetherY) >= radius) {
				this.dx += constrain(this.tetherX - this.x, -80, 80) / dampening;
				this.dy += constrain(this.tetherY - this.y, -80, 80) / dampening;
			}
		}
		if (this.targetPlayer) {
			if (!this.tetherStuck && this.canStickTether > 0 && dist(this.tetherX, this.tetherY, this.targetPlayer.x, this.targetPlayer.y) <= this.targetPlayer.collideRadius + 20) {
				this.tetherStuck = true;
				this.canStickTether = 0;
				this.targetPlayer.comboProration += 1;
				this.world.sikeWawa.addMeter(4, 3, this.targetPlayer);
			}
			if (this.tetherStuck) {
				this.tetherX = this.targetPlayer.x;
				this.tetherY = this.targetPlayer.y;
				if (this.targetPlayer.currentState.name === "power dash")
					this.tetherStuck = false;
			}
		}
		if (this.canStickTether > 0)
			this.canStickTether--;
		if (this.noTether > 0)
			this.noTether--;

		if (this.currentState.name === "SSF") {
			this.dx *= 0.9;
			this.dy *= 0.9;
			this.attackEndable();
		}
	}

	walkLogic() {
		if (this.currentState.name === "walk") {
			let xBoost = cos(this.controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(this.controls.angle(0), this.dir) / PI);
			let yBoost = sin(this.controls.angle(0).value) * this.forwardSpeedBoost * (1 - Angle.distance(this.controls.angle(0), this.dir) / PI);

			if (this.tethered <= 0) {
				this.dx = this.slowWalk * (cos(this.controls.angle(0).value) * this.movementSpeed + xBoost);
				this.dy = this.slowWalk * (sin(this.controls.angle(0).value) * this.movementSpeed + yBoost);
			} else {
				this.dx += this.slowWalk * (cos(this.controls.angle(0).value) * this.movementSpeed + xBoost) / 20;
				this.dy += this.slowWalk * (sin(this.controls.angle(0).value) * this.movementSpeed + yBoost) / 20;
			}

			this.dash.combos = this.dash.maxCombos;

			this.sheet.requestAnimationChange("Walk");
		}
	}

	standLogic() {
		if (this.currentState.name === "neutral") {
			if (this.tethered <= 0) {
				this.dx = 0;
				this.dy = 0;
			}
			this.dash.combos = this.dash.maxCombos;

			this.sheet.requestAnimationChange("Idle");
		}
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		if (this.tethered > 0) {
			g.noFill();
			g.stroke(250, 252, 255);
			g.strokeWeight(8);
			g.line(this.x + random(-2, 2), this.y + random(-2, 2), this.tetherX + random(-2, 2), this.tetherY + random(-2, 2));
			g.stroke(20, 14, 70);
			g.strokeWeight(4);
			g.line(this.x + random(-1, 1), this.y + random(-1, 1), this.tetherX + random(-1, 1), this.tetherY + random(-1, 1));
		}

		if (this.pastCounter > 0) {
			let count = 7 * max(0, 20 - this.pastCounter);
			g.noStroke();
			g.fill(250, 252, 255, 180 - count);
			g.ellipse(this.pastX, this.pastY, 50 + 5 * noise(frameCount / 3), 50 + 5 * noise(frameCount / 2));
			let red = 20 + (this.world.players[0] === this ? 90 : 0);
			g.fill(red, 14, 70, 180 - count);
			g.ellipse(this.pastX, this.pastY, 40 + 5 * noise(frameCount / 3 + 20), 40 + 5 * noise(frameCount / 2 + 30));
		}

		g.push();
		g.translate(this.x, this.y);
		let rotation = this.sheet.currentAnimation === "NN" ? this.airRotValue : this.dir.value;
		g.rotate(rotation - PI / 2);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -156 + rumbleX, -156 + rumbleY, 312, 312);

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

			this.debugDraw(g, red, green, blue);
		}
	}

	drawExtraHUD(g, i, x, y) {
		let other = 1 - i;
		let side = i * 2 - 1;
		let left = 256 + 100 * side;
		let danger = ceil(this.risk / 200 + 0.1);

		g.noStroke();
		g.fill(250, 222, 225, 180);
		g.rect(left - other * 50 + random(-danger, danger), 64, 50, 6, 20);
		if (this.risk > 20) {
			g.fill(this.risk * 256 / 600, 24, 36, 150);
			g.rect(left - other * 50 + 1 + random(-danger, danger), 64 + 1, 50 * this.risk / 600 - 2, 4, 20);
		}
	}

	charSpecificReset() {
		this.tethered = 0;
		this.noTether = 0;
		this.pastCounter = 0;
		this.risk = 0;
		this.holdingNPS = false;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
		}
	}

	static addAssets() {
		assetManager.addSpritesheet("resources/kijetesantakalu_Ka.png", "kiKaSheet", "//");

		assetManager.addSpritesheet("resources/iloSitelen.png", "iloSitelenSheet", "//");

		assetManager.addSpritesheet("resources/Shield.png", "shieldSheet", "//");
	}
}

class KaDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(-10, 0, 90, 0).setVelocity(1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(36).setProration(-0.7).setCancelOptions([], cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 5, 0.3).setHitStun(35, 28).setStunFrames(14).setCancelWait(3).setAngleTypes("direct", "direct");
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(21).setActiveF(7).setEndF(34);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);

		let angle = new Angle(player.dir.value + PI / 2 + PI / 8);
		let compare = Angle.distance(new Angle().setFromPoint(player.dx, player.dy), angle);

		player.dx /= max(1, 1.2 * (PI / 1.5 - compare));
		player.dy /= max(1, 1.2 * (PI / 1.5 - compare));
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getActiveF() > 0) {
			let perpAngle = new Angle(this.player.dir.value + PI / 2 + PI / 8);
			let frames = max(0, this.getFromStartupF()) + max(0, this.getFromActiveF());
			this.player.dx += perpAngle.getX() * (frames / 2 + 50) * cos(frames / 12 * PI) / 18;
			this.player.dy += perpAngle.getY() * (frames / 2 + 50) * cos(frames / 12 * PI) / 18;
		}
		if (this.getFromStartupF() === 6) {
			this.player.addAction("attack");
			let dot = this.player.dir.getX() * this.player.dx + this.player.dir.getY() * this.player.dy;
			this.player.dx -= this.player.dir.getX() * dot * 0.7;
			this.player.dy -= this.player.dir.getY() * dot * 0.7;
		}
		if (this.getFromStartupF() === 7) {
			this.player.removeAction("attack");
			let dot = this.player.dir.getX() * this.player.dx + this.player.dir.getY() * this.player.dy;
			this.player.dx += this.player.dir.getX() * dot * 0.7;
			this.player.dy += this.player.dir.getY() * dot * 0.7;
		}
		if (this.getActiveF() <= 1) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class KaNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 0, 60, 0).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(50, 0, 50, 1).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(70, -20, 10, 1).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(70, 20, 10, 1).setVelocity(1, 0);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(15).setProration(-0.15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 4.5, 1).setHitStun(22, 19).setStunFrames(11).setCancelWait(2);
		let sweet = new AttackProperties().setDamage(16).setProration(-0.15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 3.5, 1).setHitStun(22, 19).setStunFrames(11).setCancelWait(2);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(5).setActiveF(5).setEndF(14).setRotateable();
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
		if (this.getFromStartupF() === 1) {
			this.player.dx += this.player.dir.getX() * 0.5;
			this.player.dy += this.player.dir.getY() * 0.5;
		}
		if (this.getStartupF() <= 1) {
			this.player.dx *= 0.99;
			this.player.dy *= 0.99;
		}
		this.player.turnSpeedModifier = 0.005;
	}
}

class KaSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(80, 0, 80, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(30, 0, 40, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(14, 15).setProration(0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 0.5).setHitStun(24, 17).setStunFrames(11).setCancelWait(4).setWallPushback(2);
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(5).setStartupF(9).setActiveF(6).setEndF(19).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (player.currentState.name === "SL")
			attack.properties[0].setHitStun(10, 9);
	}

	hitConfirmSetFrames() {
		this.player.dx *= 0.8;
		this.player.dy *= 0.8;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() === 3) {
			this.player.dx += this.player.dir.getX() * 7;
			this.player.dy += this.player.dir.getY() * 7;
		}
		if (this.getActiveF() <= 1 || this.hitPlayerBool) {
			this.player.dx *= 0.86;
			this.player.dy *= 0.86;
		}
		this.player.turnSpeedModifier = -0.01;
	}
}

class KaRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 0, 60, 0).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(50, 0, 50, 1).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(70, -20, 10, 1).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(70, 20, 10, 1).setVelocity(1, 0);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(19).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 4.5, 1).setHitStun(19, 19).setStunFrames(11).setCancelWait(2);
		let sweet = new AttackProperties().setDamage(20).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 3.5, 1).setHitStun(19, 19).setStunFrames(11).setCancelWait(2);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(3).setEndF(17).setRotateable();
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
		if (this.getFromStartupF() === 3) {
			this.player.dx += this.player.dir.getX() * 1.7;
			this.player.dy += this.player.dir.getY() * 1.7;
		}
		if (this.getStartupF() <= 1) {
			this.player.dx *= 0.98;
			this.player.dy *= 0.98;
		} else {
			this.player.dir.changeValue(0.15);
		}
	}
}

class KaLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 0, 60, 0).setVelocity(1, 0);
		let sweet1 = new PriorityCircle(50, 0, 50, 1).setVelocity(1, 0);
		let sweet2 = new PriorityCircle(70, -20, 10, 1).setVelocity(1, 0);
		let sweet3 = new PriorityCircle(70, 20, 10, 1).setVelocity(1, 0);
		let circles = [sour1, sweet1, sweet2, sweet3];

		let sour = new AttackProperties().setDamage(17).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 4.5, 1).setHitStun(19, 19).setStunFrames(11).setCancelWait(2);
		let sweet = new AttackProperties().setDamage(18).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 3.5, 1).setHitStun(19, 19).setStunFrames(11).setCancelWait(2);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(4).setStartupF(8).setActiveF(3).setEndF(17).setRotateable();
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
		if (this.getFromStartupF() === 3) {
			this.player.dx += this.player.dir.getX() * 1.7;
			this.player.dy += this.player.dir.getY() * 1.7;
		}
		if (this.getStartupF() <= 1) {
			this.player.dx *= 0.98;
			this.player.dy *= 0.98;
		} else {
			this.player.dir.changeValue(-0.15);
		}
	}
}

class KaML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(-10, 0, 45, 0);
		let sweet1 = new PriorityCircle(-10, 0, 125, 1);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(15, -20).setProration(-0.175).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 1, 1).setHitStun(28, 11).setStunFrames(12).setCancelWait(5).setAngleTypes("direct", "direct");
		let sweet = new AttackProperties().setDamage(16, -20).setProration(-0.175).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 1, 1).setHitStun(28, 11).setStunFrames(12).setCancelWait(5).setAngleTypes("direct", "direct");
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(10).setActiveF(4).setEndF(16);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
		if (player.currentState.name === "NN" && dist(0, 0, player.dx, player.dy) < 10) {
			player.dx *= 1.5;
			player.dy *= 1.5;
		}
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

class KaSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";

		this.dist = 60 + (this.player.targetPlayer ? this.player.targetPlayer.collideRadius : 40);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(30, 0, 70, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(10).setProration(-4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(0, 0.1).setHitStun(25).setStunFrames(36).setCommandGrab().setNoComboCounter();
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(20).setActiveF(1).setEndF(21);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;

		if (State.stateIsTag(player.currentState, "attack")) {
			player.slowDownFrames = 15;
			player.slowDownMax = 3;
			player.slowDownMod = 5;
			attack.setStartupF(26);
			attack.setEndF(15);
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.targetPlayer && this.hitPlayerBool && this.getEndF() > 20) {
			this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * this.dist;
			this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * this.dist;
		}

		if (this.hitPlayerBool && this.getEndF() === 24) {
			let cancelOptions = [];

			let sweet1 = new PriorityCircle(60, 0, 200, 0);
			let circles = [sweet1];

			let sweet = new AttackProperties().setDamage(80).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value).setLaunch(13, 0.1).setHitStun(28).setStunFrames(15);
			let prop = [sweet];

			//sweet.setHitSound(assetManager.sounds.fanTP);
			//sweet.setBlockSound(assetManager.sounds.fanTP);

			let attack = new Attack(this.player, circles, prop).setClashPriority(false).setStartupF(0).setActiveF(2).setEndF(24);

			this.player.addCurrentAttack(attack);
			attack.rotateTo(this.player.dir);
			this.world.addAttack(attack);

			this.player.setActionLag(attack);
		}

		if (this.hitPlayerBool && this.getEndF() === 23) {
			this.player.addAction("power dash");
		}
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * this.dist;
			this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * this.dist;
			this.player.targetPlayer.dir.value = this.player.dir.value + PI;
		}
		this.player.actionLag = 40;
		this.setEndF(40);
		this.player.iFrames = 40;
		this.player.invTo = ["attack", "grab"];
		this.player.sheet.setAnimation("SSF");
		this.player.sheet.currentSubFrames += this.player.sheet.frameRate;
		this.player.setStateIgnore(this.player.states.SSF);
	}
}

class KaNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";

		this.duplicate = false;
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(20, -40, 40, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(20, 40, 40, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(50, 0, 70, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sweet1];

		let sour = new AttackProperties().setDamage(28).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 7, 1).setHitStun(38, 13).setStunFrames(13).setCancelWait(4).setWallPushback(8);
		let sweet = new AttackProperties().setDamage(32).setProration(0).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 5, 1).setHitStun(38, 13).setStunFrames(13).setCancelWait(4).setWallPushback(11);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(2).setStartupF(11).setActiveF(2).setEndF(25).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (player.currentState.name === "NS")
			attack.duplicate = true;
	}

	hitConfirmSetFrames() {
		this.player.dx *= 0.9;
		this.player.dy *= 0.9;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.counterHittable = true;
	}

	logic() {
		if (this.getStartupF() > 5 && this.player.targetPlayer) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.2) {
				this.player.dir.value -= 0.1;
			}
			if (compare > 0.2) {
				this.player.dir.value += 0.1;
			}
		}
		if (this.getStartupF() === 5 && !this.duplicate) {
			this.player.dx += this.player.dir.getX() * 4.5;
			this.player.dy += this.player.dir.getY() * 4.5;
		}
		if (this.getStartupF() <= 1) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
		this.player.turnSpeedModifier = 0.005;
	}
}

class KaRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(-40, 40, 50, 0).setVelocity(0.1, -0.08);
		let sweet2 = new PriorityCircle(0, 45, 50, 0).setVelocity(0.1, -0.08);
		let sweet3 = new PriorityCircle(40, 40, 60, 0).setVelocity(0.1, -0.08);
		let sour1 = new PriorityCircle(60, 30, 50, 1).setVelocity(0.1, -0.08);
		let circles = [sweet1, sweet2, sweet3, sour1];

		let sweet = new AttackProperties().setDamage(40).setProration(-0.125).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 16).setLaunch(4, 1, 0.3).setHitStun(38, 11).setStunFrames(12).setCancelWait(5, 10);
		let sour = new AttackProperties().setDamage(30).setProration(-0.625).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 16).setLaunch(0.5, 0.5, 0.3).setHitStun(38, 11).setStunFrames(12).setCancelWait(5, 10);
		let prop = [sweet, sour];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(12).setActiveF(8).setEndF(22).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.dx *= 0.9;
		player.dy *= 0.9;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 0 && this.getStartupF() < 6) {
			this.player.dir.changeValue(PI / 32);
		}
		if (this.getFromActiveF() > 0 && this.getFromActiveF() < 6) {
			this.player.dir.changeValue(-PI / 15);
		}
	}
}

class KaLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(-40, -40, 50, 0).setVelocity(0.1, 0.08);
		let sweet2 = new PriorityCircle(0, -45, 50, 0).setVelocity(0.1, 0.08);
		let sweet3 = new PriorityCircle(40, -40, 60, 0).setVelocity(0.1, 0.08);
		let sour1 = new PriorityCircle(60, -30, 50, 1).setVelocity(0.1, 0.08);
		let circles = [sweet1, sweet2, sweet3, sour1];

		let sweet = new AttackProperties().setDamage(40).setProration(-0.125).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(4, 1, 0.3).setHitStun(38, 11).setStunFrames(12).setCancelWait(5, 10);
		let sour = new AttackProperties().setDamage(30).setProration(-0.625).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(0.5, 0.5, 0.3).setHitStun(38, 11).setStunFrames(12).setCancelWait(5, 10);
		let prop = [sweet, sour];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(12).setActiveF(8).setEndF(22).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.dx *= 0.9;
		player.dy *= 0.9;
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 0 && this.getStartupF() < 6) {
			this.player.dir.changeValue(-PI / 32);
		}
		if (this.getFromActiveF() > 0 && this.getFromActiveF() < 6) {
			this.player.dir.changeValue(PI / 15);
		}
	}
}

class KaMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sweet1 = new PriorityCircle(40, -40, 60, 0).setVelocity(0.1, 0.1);
		let sweet2 = new PriorityCircle(60, -30, 50, 0).setVelocity(0.1, 0.1);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(35, -30, 6).setProration(0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 5).setLaunch(2, 1, 0.3).setHitStun(28, 11).setStunFrames(12).setCancelWait(5, 10);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(13).setActiveF(12).setEndF(28).setRotateable();
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
		if (this.currentlyActive() && !this.hitPlayerBool) {
			this.player.dir.changeValue(PI / 6);
		}
	}
}

class KaNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 30, 25, 0).setVelocity(8, -4);
		let sour2 = new PriorityCircle(30, 23, 25, 0).setVelocity(8, -4);
		let sour3 = new PriorityCircle(45, 15, 25, 0).setVelocity(8, -4);
		let sour4 = new PriorityCircle(53, 12, 25, 0).setVelocity(8, -4);
		let sweet1 = new PriorityCircle(75, 0, 25, 1).setVelocity(8, -4);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sour = new AttackProperties().setDamage(45).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 7).setLaunch(2, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(6);
		let sweet = new AttackProperties().setDamage(50).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 7).setLaunch(1, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(6);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(2).setStartupF(14).setActiveF(4).setEndF(32).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.7);
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI / 7);

			this.sheet.draw(g, 4 + 9 * this.getFromActiveF(), 26, 84, 16);
			
			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();

		this.player.turnSpeedModifier = 0.06;
	}
}

class KaSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";

		this.fromAttack = false;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 30, 25, 0).setVelocity(8, -4);
		let sour2 = new PriorityCircle(30, 23, 25, 0).setVelocity(8, -4);
		let sour3 = new PriorityCircle(45, 15, 25, 0).setVelocity(8, -4);
		let sour4 = new PriorityCircle(53, 12, 25, 0).setVelocity(8, -4);
		let sweet1 = new PriorityCircle(75, 0, 25, 1).setVelocity(8, -4);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sour = new AttackProperties().setDamage(35).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 7).setLaunch(2, 11, 1).setHitStun(36, 27).setStunFrames(13).setCancelWait(6);
		let sweet = new AttackProperties().setDamage(40).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 7).setLaunch(1, 11, 1).setHitStun(36, 27).setStunFrames(13).setCancelWait(6);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(2).setStartupF(18).setActiveF(4).setEndF(28).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		if (State.stateIsTag(player.currentState, "attack")) {
			player.dx *= 0.5;
			player.dy *= 0.5;
			attack.fromAttack = true;
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI / 7);

			this.sheet.draw(g, 4 + 9 * this.getFromActiveF(), 26, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();

		if (this.getFromStartupF() === 4) {
			let angle = new Angle(this.player.dir.value + PI / 4);
			let speed = 8;
			if (this.fromAttack) {
				angle.changeValue(PI / 8);
				speed = 12;
				this.player.dx += angle.getX() * speed;
				this.player.dy += angle.getY() * speed;
			} else {
				this.player.dx = angle.getX() * speed;
				this.player.dy = angle.getY() * speed;
			}
		}

		if (this.getFromStartupF() < 17) {
			this.player.dir.changeValue(-PI / 4 / 24);
		}
		if (this.getFromStartupF() === 17) {
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class KaRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(-35, 70, 25, 0).setVelocity(12, 1, -0.6);
		let sour2 = new PriorityCircle(-19, 71, 25, 0).setVelocity(12, 0.5, -0.6);
		let sour3 = new PriorityCircle(-3, 72, 25, 0).setVelocity(12, 0, -0.6);
		let sour4 = new PriorityCircle(11, 73, 25, 0).setVelocity(12, -0.5, -0.6);
		let sweet1 = new PriorityCircle(39, 74, 25, 1).setVelocity(12, -1, -0.6);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sour = new AttackProperties().setDamage(45).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(3, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(7);
		let sweet = new AttackProperties().setDamage(50).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(7);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(6).setEndF(28).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.7);
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + 0.023 * PI - this.getFromActiveF() * 0.048);

			this.sheet.draw(g, -24 + 9 * this.getFromActiveF(), 60 - this.getFromActiveF() / 2, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();

		if (this.getActiveF() > 0 && !this.hitPlayerBool) {
			let mag = dist(0, 0, this.player.dx, this.player.dy);
			let angle = new Angle().setFromPoint(this.player.dx, this.player.dy).changeValue(0.13);
			this.player.dx = mag * angle.getX();
			this.player.dy = mag * angle.getY();
		}

		this.player.turnSpeedModifier = -0.025;
	}
}

class KaLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(-35, -70, 25, 0).setVelocity(12, -1, 0.6);
		let sour2 = new PriorityCircle(-19, -71, 25, 0).setVelocity(12, -0.5, 0.6);
		let sour3 = new PriorityCircle(-3, -72, 25, 0).setVelocity(12, 0, 0.6);
		let sour4 = new PriorityCircle(11, -73, 25, 0).setVelocity(12, 0.5, 0.6);
		let sweet1 = new PriorityCircle(39, -74, 25, 1).setVelocity(12, 1, 0.6);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sour = new AttackProperties().setDamage(45).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(3, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(7);
		let sweet = new AttackProperties().setDamage(50).setProration(-0.45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(2, 11, 1).setHitStun(40, 36).setStunFrames(13).setCancelWait(7);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(6).setEndF(28).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.7);
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - 0.023 * PI + this.getFromActiveF() * 0.048);

			this.sheet.draw(g, -24 + 9 * this.getFromActiveF(), -76 + this.getFromActiveF() / 2, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();

		if (this.getActiveF() > 0 && !this.hitPlayerBool) {
			let mag = dist(0, 0, this.player.dx, this.player.dy);
			let angle = new Angle().setFromPoint(this.player.dx, this.player.dy).changeValue(-0.13);
			this.player.dx = mag * angle.getX();
			this.player.dy = mag * angle.getY();
		}

		this.player.turnSpeedModifier = -0.025;
	}
}

class KaMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(15, 26, 25, 0).setVelocity(5, -6, -1.1);
		let sour2 = new PriorityCircle(23, 39, 25, 0).setVelocity(7, -8.5, -1.1);
		let sour3 = new PriorityCircle(30, 52, 25, 0).setVelocity(10, -11, -1.1);
		let sour4 = new PriorityCircle(38, 65, 25, 0).setVelocity(12, -14, -1.1);
		let sweet1 = new PriorityCircle(55, 95, 25, 1).setVelocity(17, -20, -1.1);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let sour = new AttackProperties().setDamage(30).setProration(-0.625).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(4, 9, 1).setHitStun(40, 26).setStunFrames(13).setCancelWait(7);
		let sweet = new AttackProperties().setDamage(35).setProration(-0.625).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(1, 9, 1).setHitStun(40, 26).setStunFrames(13).setCancelWait(7);
		let prop = [sour, sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(20).setActiveF(6).setEndF(32).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.7);
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI / 4 + PI / 12 * this.getActiveF());

			this.sheet.draw(g, 30, -8, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();
	}
}

class KaNPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

		this.charge = 0;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack", "dash"];

		let sour1 = new PriorityCircle(0, 0, 160, 0);
		let circles = [sour1];

		let sweet = new AttackProperties().setProration(-0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setHitStun(35, 10).setStunFrames(13).setCancelWait(9).setAngleTypes("direct", "direct");
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(12).setActiveF(8).setEndF(19).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		let charge = min(10, floor(bufferInfo.charge / 60 / 2));
		attack.charge = charge;
		let launchCharge = min(charge, 4);
		attack.properties[0].setDamage(15 + charge * 25, 35, 8).setLaunch(2 + launchCharge * 2.5, 1, 0.1);
		player.dx += player.dir.getX() * launchCharge * 3.2;
		player.dy += player.dir.getY() * launchCharge * 3.2;
	}

	static bufferInfo() {
		return { charge: this.NPSCharge };
	}

	draw(g) {
		if (this.getStartupF() <= 0 && this.getFromEndF() < 3) {
			let rotation = this.getFromActiveF();
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			for (let i = 0; i < 4; i++) {
				g.push();
				g.rotate(rotation * (1 + this.charge / 20) / 5.5 + i * PI / 2);

				this.sheet.draw(g, 30, -4, 48, 8);

				g.pop();
			}

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.85;
			this.player.dy *= 0.85;
		}
		if (this.getFromStartupF() < 5) {
			this.player.turnSpeedModifier = 0.5;
		} else {
			this.player.turnSpeedModifier = -0.3;
		}
	}
}

class KaSPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(-40, 0, 25, 0).setVelocity(0.001, 0);
		let sour2 = new PriorityCircle(-20, 0, 25, 0).setVelocity(0.001, 0);
		let sour3 = new PriorityCircle(2, 0, 25, 0).setVelocity(0.001, 0);
		let sour4 = new PriorityCircle(24, 0, 25, 0).setVelocity(0.001, 0);
		let circles = [sour1, sour2, sour3, sour4];

		let sweet = new AttackProperties().setDamage(30).setProration(-1).setAngleValue(player.dir.value).setCancelOptions(cancelOptions).setHitStun(20, 15).setStunFrames(6).setLaunch(1);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(20).setActiveF(260).setEndF(23).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		if (player.pastCounter > 0) {
			attack.x = player.pastX;
			attack.y = player.pastY;
			if (player.currentAttackReferences.length > 1)
				attack.setActiveF(80);
		} else {
			attack.setActiveF(20);
		}
		if (player.targetPlayer) {
			let angle = new Angle().setFromPoint(player.targetPlayer.x - attack.x, player.targetPlayer.y - attack.y);
			attack.rotateTo(angle, attack.x, attack.y);
			attack.dir.value = angle.value;
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -50, -8, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();
		if (this.player.targetPlayer) {
			this.dx = this.dir.getX() * 1.5;
			this.dy = this.dir.getY() * 1.5;
		}
	}
}

class KaRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(50, 0, 60, 0).setVelocity(0.1, 0);
		let circles = [sour1];

		let sweet = new AttackProperties().setDamage(55, 35, 10).setProration(-0.7).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 2).setLaunch(10, 4, 0.3).setHitStun(30, 17).setStunFrames(13).setCancelWait(9);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(27).setActiveF(7).setEndF(29).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.dir.changeValue(PI / 2.4);
	}

	draw(g) {
		if (this.getStartupF() > 0) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();
		}
		if (this.getStartupF() <= 0 && this.getFromEndF() < 3) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value - ((PI / 8 + this.getEndF() / 16 - 1.95) * this.getFromActiveF() + PI * 1 / 8) / 2);

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() > 4 && this.getActiveF() > 0) {
			let speed = (this.getStartupF() > 11 || this.getStartupF() <= 1) ? 15 : 3;
			this.player.dx = this.player.dir.getX() * speed;
			this.player.dy = this.player.dir.getY() * speed;
		}
		if (this.getStartupF() < 5 && this.getActiveF() > 0) {
			this.player.turnSpeedModifier = 0.1;
			this.player.dir.changeValue(-PI / 20);
		}
		if (this.getActiveF() <= 1) {
			this.player.turnSpeedModifier = -0.1;
			this.player.dx *= 0.8;
			this.player.dy *= 0.8;
		}
		this.sheet.run();
	}
}

class KaLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(50, 0, 60, 0).setVelocity(0.1, 0);
		let circles = [sour1];

		let sweet = new AttackProperties().setDamage(55, 35, 10).setProration(-0.7).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 4, 0.3).setHitStun(30, 17).setStunFrames(13).setCancelWait(9);
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(27).setActiveF(7).setEndF(29).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.dir.changeValue(-PI / 2.4);
	}

	draw(g) {
		if (this.getStartupF() > 0) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();
		}
		if (this.getStartupF() <= 0 && this.getFromEndF() < 3) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value + ((PI / 8 + this.getEndF() / 16 - 1.95) * this.getFromActiveF() - PI * 1 / 8) / 2);

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() > 4 && this.getActiveF() > 0) {
			let speed = (this.getStartupF() > 11 || this.getStartupF() <= 1) ? 15 : 3;
			this.player.dx = this.player.dir.getX() * speed;
			this.player.dy = this.player.dir.getY() * speed;
		}
		if (this.getStartupF() < 5 && this.getActiveF() > 0) {
			this.player.turnSpeedModifier = 0.1;
			this.player.dir.changeValue(PI / 20);
		}
		if (this.getActiveF() <= 1) {
			this.player.turnSpeedModifier = -0.1;
			this.player.dx *= 0.8;
			this.player.dy *= 0.8;
		}
		this.sheet.run();
	}
}

class KaMPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		let cancelOptions = ["attack"];

		let sour1 = new PriorityCircle(30, 0, 100, 0);
		let circles = [sour1];

		let sweet = new AttackProperties().setDamage(70, 35, 10).setProration(2).setCancelOptions([], cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 1, 0.3).setHitStun(40, 12).setStunFrames(13).setCancelWait(9).setAngleTypes("direct", "direct");
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(16).setActiveF(7).setEndF(30);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		player.invTo = ["grab"];
		player.iFrames = 20;
	}

	draw(g) {
		if (this.getStartupF() > 0) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value + this.getStartupF() * PI / 16 - PI / 3);

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();
		}
		if (this.getStartupF() <= 0 && this.getFromEndF() < 3) {
			g.push();
			g.translate(this.x, this.y);
			g.translate(this.player.dir.getX() * 30, this.player.dir.getY() * 30);
			g.rotate(this.dir.value + (PI / 4 + this.getEndF() / 16 - 1.85) * this.getFromActiveF());

			this.sheet.draw(g, -35, -8, 84, 16);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.sheet.run();
	}
}

class KaNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.startAngle = new Angle();
		this.magnitude = 0;
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(24);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx *= 1.3;
		player.dy *= 1.3;

		attack.startAngle.setFromPoint(-player.dx, -player.dy);
		attack.magnitude = min(10, dist(0, 0, player.dx, player.dy));

		if (attack.magnitude > 0.125) {
			player.airRotValue = attack.startAngle.value;
		} else {
			player.airRotValue = player.dir.value;
		}
	}

	applyModifiers() {
		this.counterHittable = true;
	}

	logic() {
		if (this.getStartupF() > 4) {
			let frames = this.getStartupF() + 20;
			this.player.dx += this.startAngle.getX() * this.magnitude * frames / 300;
			this.player.dy += this.startAngle.getY() * this.magnitude * frames / 300;
		}

		if (this.getStartupF() === 3) {
			this.player.dx *= 0.8;
			this.player.dy *= 0.8;
			this.player.addAction("attack");
		}
	}
}

class KaSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(35, -10, 30, 0);
		let sour2 = new PriorityCircle(40, 0, 30, 0);
		let sour3 = new PriorityCircle(35, 10, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(40).setGrab(30).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(7).setActiveF(6).setEndF(28).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		if (player.currentState.name === "dash attack") {
			player.dx *= 0.3;
			player.dy *= 0.3;
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	applyModifiers() {
		this.counterHittable = true;
	}

	logic() {
		if (this.player.targetPlayer && this.getStartupF() > 0) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.3) {
				this.player.dir.value -= 0.2;
			}
			if (compare > 0.3) {
				this.player.dir.value += 0.2;
			}
		}
	}
}

class KaRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.iloSitelenSheet);
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(43);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		player.tethered = 70;
		player.noTether = 15;
		if (player.canStickTether <= 0)
			player.canStickTether = 15;
		player.tetherX = player.x;
		player.tetherY = player.y;
		player.tetherStuck = false;
	}

	draw(g) {
		g.push();
		g.translate(this.player.tetherX, this.player.tetherY);
		g.rotate(sin(this.getStartupF() / 3) * PI / 8 + PI / 2);

		this.sheet.draw(g, -76, -8, 84, 16);

		g.pop();
	}

	logic() {
		this.sheet.run();

		let angle = new Angle(this.player.dir.value + PI / 12);
		this.player.tetherX += angle.getX() * (this.getStartupF() + 10) / 6;
		this.player.tetherY += angle.getY() * (this.getStartupF() + 10) / 6;
		if (this.getFromStartupF() === 10) {
			this.player.addAction("dash");
		}
		if (this.getFromStartupF() === 15) {
			this.player.addAction("walk", "attack");
		}
	}
}

class KaLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.teleport = false;
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(22);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);

		if (player.pastCounter > 0)
			attack.teleport = true;
	}

	logic() {
		if (this.getFromStartupF() === 8 && this.teleport) {
			this.player.iFrames = 16;
			this.player.invTo = ["grab", "attack"];
		}
		if (this.getStartupF() === 1) {
			if (this.teleport) {
				this.player.x = this.player.pastX;
				this.player.y = this.player.pastY;
				this.player.pastCounter = 0;
				this.player.timerPunishHealth += 20;
			} else {
				this.player.pastX = this.player.x;
				this.player.pastY = this.player.y;
				this.player.pastCounter = 600;
			}
		}
	}
}

class KaMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";

		this.notUsed = true;

		this.active = true;

		this.held = true;

		this.heldFrames = 0;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.shieldSheet);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let circles = [];

		let prop = [new AttackProperties()];

		return new this(player, circles, prop).setClashPriority(false).setEndF(21);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.5);

		player.iFrames = 0;
		attack.sheet.setAnimation("MN");
	}

	draw(g) {
		if (this.active) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.player.dir.value - PI / 2);

			this.sheet.draw(g, -78, -78, 156, 156);

			g.pop();
		}
	}

	applyModifiers() {
		this.player.counterHittable = true;
		if (this.getEndF() >= 20 && this.held) {
			this.player.hitStunModifier = -10;
			this.player.blockLeniencyFrames = 2;
		}
	}

	logic() {
		this.sheet.run();
		if (!this.player.controls.held("nasa"))
			this.held = false;
		if (this.active) {
			if (this.held && this.getEndF() === 20) {
				this.heldFrames++;
				this.setStartupF(this.getStartupF() + 1);
				this.player.setActionLag(this);
				if (this.player.health > this.player.deathChanceThreshold + 4.125) {
					this.player.damageHealthAbs(min(floor(this.heldFrames / 10) / 8, 4));
				}
			}
			if (this.getEndF() === 19 && this.notUsed) {
				this.player.removeAction("block");
				this.player.sheet.setAnimation("MNF");
			}
		}
		if (this.getEndF() <= 19 && this.sheet.currentAnimation !== "MNF") {
			if (!this.active) {
				this.setEndF(0);
			} else {
				this.sheet.setAnimation("MNF");
			}
		}
	}

	endLife() {
		if (this.duration > 0 && this.active && this.notUsed) {
			this.active = this.player.currentState.name !== "hitstun" && this.player.currentState.name !== "dead" && this.player.currentState.name !== "grabbed";
			if (this.active) {
				this.properties[0].playSound(this.world, assetManager.sounds.parry);
				this.player.canStickTether = this.player.parryTetherStickFrames;
			}
			this.setEndF(min(this.player.hitStun, 20));
			this.held = false;
			this.notUsed = false;
		}
	}
}

characters.push(Ka);