class Lipa extends Player {
	constructor() {
		super([
			new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)
		]);

		this.hurtboxes["walk"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -7, 40),
			new Circle(24, -13, 25),
			new Circle(-19, 24, 28),
			new ICircle(43, -7, 15),
			new ICircle(50, 2, 15),
			new ICircle(53, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -8, 40),
			new Circle(26, -13, 25),
			new Circle(-18, 23, 28),
			new ICircle(43, -7, 15),
			new ICircle(51, 4, 15),
			new ICircle(54, 17, 15)],
			[new Circle(0, 4, 51),
			new Circle(20, -8, 40),
			new Circle(31, -13, 25),
			new Circle(-14, 18, 34),
			new ICircle(43, -7, 15),
			new ICircle(51, 6, 15),
			new ICircle(54, 20, 15)],
			[new Circle(0, 5, 51),
			new Circle(19, -8, 42),
			new Circle(30, -13, 25),
			new Circle(-15, 18, 32),
			new ICircle(43, -5, 15),
			new ICircle(51, 6, 15),
			new ICircle(55, 20, 15)],
			[new Circle(0, 4, 50),
			new Circle(16, -8, 40),
			new Circle(26, -13, 25),
			new Circle(-18, 21, 28),
			new ICircle(43, -3, 15),
			new ICircle(51, 8, 15),
			new ICircle(55, 20, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -7, 40),
			new Circle(24, -13, 26),
			new Circle(-17, 22, 33),
			new ICircle(42, -5, 15),
			new ICircle(50, 5, 15),
			new ICircle(55, 18, 15)],
			[new Circle(-1, 7, 52),
			new Circle(12, -4, 40),
			new Circle(22, -10, 25),
			new Circle(-18, 27, 32),
			new ICircle(41, -5, 15),
			new ICircle(48, 5, 15),
			new ICircle(54, 18, 15)],
			[new Circle(0, 6, 52),
			new Circle(10, -4, 40),
			new Circle(19, -12, 25),
			new Circle(-15, 29, 35),
			new ICircle(37, -4, 15),
			new ICircle(47, 6, 15),
			new ICircle(54, 17, 15)],
			[new Circle(-1, 7, 50),
			new Circle(11, -4, 40),
			new Circle(19, -12, 25),
			new Circle(-15, 30, 33),
			new ICircle(38, -4, 15),
			new ICircle(47, 6, 15),
			new ICircle(54, 17, 15)],
			[new Circle(-1, 7, 51),
			new Circle(12, -5, 40),
			new Circle(21, -12, 25),
			new Circle(-17, 28, 31),
			new ICircle(40, -5, 15),
			new ICircle(49, 5, 15),
			new ICircle(54, 17, 15)]
		];

		this.hurtboxes["grab"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["grabbed"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["lipuLili"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["lipuSuli"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["rightRoll"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["neutralRoll"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["leftRoll"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["hitstun"] = [
			[new Circle(10, 0, 80),
			new Circle(18, -21, 38),
			new Circle(18, 19, 38),
			new ICircle(1, 49, 28),
			new ICircle(-1, -50, 27)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -6, 40),
			new ICircle(-23, 44, 25),
			new Circle(-18, 27, 25),
			new ICircle(42, -6, 15),
			new ICircle(58, 6, 15),
			new ICircle(70, 18, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -6, 40),
			new ICircle(-23, 44, 25),
			new Circle(-18, 27, 25),
			new ICircle(42, -6, 15),
			new ICircle(58, 6, 15),
			new ICircle(70, 18, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 40),
			new ICircle(-23, 44, 25),
			new Circle(-18, 27, 25),
			new ICircle(42, -6, 15),
			new ICircle(57, 2, 15),
			new ICircle(67, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 40),
			new ICircle(-26, 43, 25),
			new Circle(-18, 27, 25),
			new ICircle(42, -6, 15),
			new ICircle(56, 1, 15),
			new ICircle(63, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 40),
			new ICircle(-26, 43, 25),
			new Circle(-18, 27, 25),
			new ICircle(42, -4, 15),
			new ICircle(52, 2, 15),
			new ICircle(61, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 41),
			new ICircle(-30, 46, 25),
			new Circle(-18, 24, 28),
			new ICircle(40, -4, 15),
			new ICircle(50, 5, 15),
			new ICircle(58, 15, 15)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(-1, 6, 49),
			new Circle(12, -4, 46),
			new Circle(24, -13, 25),
			new Circle(-19, 25, 27),
			new ICircle(42, -5, 15),
			new ICircle(48, 5, 15),
			new ICircle(49, 18, 15)],
			[new Circle(-1, 6, 49),
			new Circle(12, -4, 46),
			new Circle(24, -13, 25),
			new Circle(-19, 25, 27),
			new ICircle(42, -5, 15),
			new ICircle(49, 3, 15),
			new ICircle(54, 13, 15)],
			[new Circle(-1, 6, 49),
			new Circle(12, -4, 46),
			new Circle(24, -13, 25),
			new Circle(-19, 25, 27),
			new ICircle(42, -5, 15),
			new ICircle(51, 4, 15),
			new ICircle(55, 17, 15)],
			[new Circle(-1, 6, 49),
			new Circle(14, -3, 46),
			new Circle(26, -9, 25),
			new Circle(-21, 21, 29),
			new ICircle(42, -5, 15),
			new ICircle(49, 5, 15),
			new ICircle(53, 15, 15)],
			[new Circle(-1, 6, 49),
			new Circle(14, -3, 46),
			new Circle(26, -9, 25),
			new Circle(-22, 22, 27),
			new ICircle(43, -2, 15),
			new ICircle(50, 4, 15),
			new ICircle(56, 14, 15)],
			[new Circle(1, 10, 49),
			new Circle(10, -10, 46),
			new ICircle(-36, 51, 16),
			new Circle(-4, 32, 27),
			new ICircle(33, -29, 15),
			new ICircle(-18, 43, 15),
			new ICircle(48, -13, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-21, -42, 15),
			new ICircle(35, 36, 15),
			new ICircle(-4, -46, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-22, -42, 15),
			new ICircle(35, 36, 15),
			new ICircle(-5, -46, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-21, -42, 15),
			new ICircle(35, 36, 15),
			new ICircle(-4, -46, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(16, 28, 27),
			new ICircle(-13, -46, 15),
			new ICircle(33, 41, 15),
			new ICircle(4, -52, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(40, 54, 16),
			new Circle(10, 31, 27),
			new ICircle(-5, -50, 15),
			new ICircle(23, 47, 15),
			new ICircle(13, -57, 15)],
			[new Circle(3, 9, 49),
			new Circle(6, -15, 46),
			new ICircle(27, 61, 16),
			new Circle(4, 31, 27),
			new ICircle(12, -50, 15),
			new ICircle(11, 53, 15),
			new ICircle(29, -57, 15)],
			[new Circle(2, 9, 49),
			new Circle(10, -11, 46),
			new ICircle(-30, 59, 16),
			new Circle(-7, 32, 27),
			new ICircle(30, -36, 15),
			new ICircle(-17, 50, 15),
			new ICircle(49, -39, 15)],
			[new Circle(-2, 6, 49),
			new Circle(13, -8, 45),
			new ICircle(-43, 54, 16),
			new Circle(-18, 25, 28),
			new ICircle(43, -17, 15),
			new ICircle(-32, 42, 15),
			new ICircle(58, -5, 15)],
			[new Circle(-2, 6, 49),
			new Circle(13, -8, 45),
			new ICircle(-43, 54, 16),
			new Circle(-19, 25, 27),
			new ICircle(45, -2, 15),
			new ICircle(-31, 41, 15),
			new ICircle(49, 18, 15)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 5, 50),
			new Circle(14, -4, 46),
			new Circle(25, -12, 27),
			new Circle(-18, 23, 29),
			new ICircle(43, -6, 15),
			new ICircle(50, 4, 15),
			new ICircle(54, 15, 15)],
			[new Circle(1, 4, 50),
			new Circle(16, -5, 46),
			new Circle(28, -12, 27),
			new Circle(-19, 24, 29),
			new ICircle(44, -4, 15),
			new ICircle(51, 5, 15),
			new ICircle(57, 16, 15)],
			[new Circle(3, 11, 56),
			new Circle(26, 9, 40),
			new ICircle(-39, 35, 27),
			new Circle(-21, 25, 29),
			new ICircle(49, 13, 15),
			new ICircle(59, 19, 15),
			new ICircle(69, 25, 15)],
			[new Circle(3, 11, 56),
			new Circle(26, 18, 41),
			new ICircle(-28, 41, 31),
			new Circle(-20, 23, 29),
			new ICircle(42, 36, 15),
			new ICircle(44, 49, 15),
			new ICircle(44, 62, 15)],
			[new Circle(4, 13, 55),
			new Circle(27, 21, 39),
			new ICircle(-6, 46, 37),
			new Circle(-20, 28, 33),
			new ICircle(32, 39, 28),
			new ICircle(24, 51, 38),
			new ICircle(0, 58, 25)],
			[new Circle(4, 13, 56),
			new Circle(27, 21, 39),
			new ICircle(-6, 46, 37),
			new Circle(-20, 25, 33),
			new ICircle(31, 39, 28),
			new ICircle(22, 49, 38),
			new ICircle(-1, 57, 25)],
			[new Circle(4, 13, 56),
			new Circle(26, 16, 39),
			new ICircle(-7, 40, 37),
			new Circle(-19, 22, 34),
			new ICircle(29, 37, 28),
			new ICircle(18, 46, 42),
			new ICircle(-1, 50, 25)],
			[new Circle(5, 9, 54),
			new Circle(25, 10, 39),
			new ICircle(-11, 40, 37),
			new Circle(-19, 20, 34),
			new ICircle(28, 28, 34),
			new ICircle(19, 33, 42),
			new ICircle(-11, 53, 25)],
			[new Circle(3, 6, 55),
			new Circle(24, 5, 39),
			new ICircle(-22, 40, 24),
			new Circle(-19, 20, 34),
			new ICircle(29, 20, 36),
			new ICircle(21, 25, 42),
			new ICircle(-23, 58, 23)],
			[new Circle(-2, -1, 58),
			new Circle(18, -6, 39),
			new ICircle(-26, 38, 20),
			new Circle(-17, 21, 34),
			new ICircle(28, 3, 36),
			new ICircle(25, 16, 42),
			new ICircle(-38, 52, 21)],
			[new Circle(-2, -1, 58),
			new Circle(16, -12, 39),
			new ICircle(-27, 39, 19),
			new Circle(-17, 21, 34),
			new ICircle(39, -13, 24),
			new ICircle(51, -2, 23),
			new ICircle(-40, 52, 20)],
			[new Circle(-2, -1, 58),
			new Circle(16, -12, 39),
			new ICircle(-27, 39, 19),
			new Circle(-17, 21, 34),
			new ICircle(39, -9, 24),
			new ICircle(50, 6, 23),
			new ICircle(-40, 52, 20)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -6, 43),
			new Circle(25, -13, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -6, 43),
			new Circle(25, -13, 25),
			new Circle(-19, 24, 30),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 19, 15)],
			[new Circle(0, 4, 50),
			new Circle(13, -7, 44),
			new Circle(-6, 23, 25),
			new Circle(-18, 26, 30),
			new ICircle(40, -38, 44),
			new ICircle(53, -19, 42),
			new ICircle(56, -5, 35)],
			[new Circle(0, 4, 50),
			new Circle(13, -7, 44),
			new Circle(-6, 23, 25),
			new Circle(-18, 26, 30),
			new ICircle(40, -38, 44),
			new ICircle(53, -19, 42),
			new ICircle(56, -5, 35)],
			[new Circle(0, 4, 50),
			new Circle(14, -8, 44),
			new ICircle(27, -30, 17),
			new Circle(-17, 26, 31),
			new ICircle(35, -44, 32)],
			[new Circle(0, 4, 50),
			new Circle(14, -8, 44),
			new ICircle(30, -35, 17),
			new Circle(-17, 26, 31),
			new ICircle(34, -53, 19)],
			[new Circle(0, 4, 50),
			new Circle(14, -8, 44),
			new ICircle(38, -26, 17),
			new Circle(-17, 25, 31),
			new ICircle(52, -38, 18)],
			[new Circle(0, 5, 50),
			new Circle(15, -7, 43),
			new Circle(25, -14, 25),
			new Circle(-16, 23, 32),
			new ICircle(39, -16, 15),
			new ICircle(50, -16, 15),
			new ICircle(62, -12, 15)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 28),
			new ICircle(41, -7, 15),
			new ICircle(47, 4, 15),
			new ICircle(48, 16, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 28),
			new ICircle(43, -12, 15),
			new ICircle(52, -6, 15),
			new ICircle(59, 5, 15)],
			[new Circle(2, 8, 52),
			new Circle(20, -1, 40),
			new Circle(31, -4, 25),
			new Circle(-20, 25, 28),
			new ICircle(47, 8, 15),
			new ICircle(51, 20, 15),
			new ICircle(51, 33, 15)],
			[new Circle(7, 16, 54),
			new Circle(27, 16, 41),
			new Circle(38, 16, 25),
			new Circle(-18, 25, 28),
			new ICircle(51, 33, 15),
			new ICircle(50, 48, 15),
			new ICircle(47, 59, 15)],
			[new Circle(8, 19, 55),
			new Circle(28, 23, 41),
			new Circle(39, 25, 25),
			new Circle(-17, 23, 30),
			new ICircle(41, 46, 15),
			new ICircle(35, 60, 15),
			new ICircle(27, 73, 15)],
			[new Circle(9, 28, 56),
			new Circle(22, 42, 41),
			new Circle(31, 49, 25),
			new Circle(-17, 20, 30),
			new ICircle(23, 70, 15),
			new ICircle(9, 79, 15),
			new ICircle(-8, 84, 15)],
			[new Circle(8, 28, 56),
			new Circle(18, 41, 41),
			new Circle(26, 52, 25),
			new Circle(-17, 20, 30),
			new ICircle(18, 70, 15),
			new ICircle(4, 77, 15),
			new ICircle(-14, 80, 15)],
			[new Circle(0, -6, 54),
			new Circle(18, -7, 42),
			new Circle(31, -6, 25),
			new Circle(-23, 2, 32),
			new ICircle(41, 9, 15),
			new ICircle(41, 19, 15),
			new ICircle(40, 29, 15)],
			[new Circle(0, -2, 54),
			new Circle(17, -5, 42),
			new Circle(29, -6, 25),
			new Circle(-23, 12, 32),
			new ICircle(43, 6, 15),
			new ICircle(45, 18, 15),
			new ICircle(43, 28, 15)],
			[new Circle(-1, 3, 54),
			new Circle(15, -5, 42),
			new Circle(27, -9, 25),
			new Circle(-19, 21, 32),
			new ICircle(43, 3, 15),
			new ICircle(47, 12, 15),
			new ICircle(48, 22, 15)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(0, 2, 50),
			new Circle(15, -9, 40),
			new Circle(24, -12, 25),
			new Circle(-23, 20, 28),
			new ICircle(43, -6, 15),
			new ICircle(51, 5, 15),
			new ICircle(53, 16, 15)],
			[new Circle(-6, 1, 50),
			new Circle(11, -8, 40),
			new Circle(18, -10, 25),
			new Circle(-30, 17, 28),
			new ICircle(38, -7, 15),
			new ICircle(46, 4, 15),
			new ICircle(49, 15, 15)],
			[new Circle(-7, 1, 50),
			new Circle(5, -3, 43),
			new Circle(16, -7, 25),
			new Circle(-35, 16, 28),
			new ICircle(33, -5, 15),
			new ICircle(41, 5, 15),
			new ICircle(44, 16, 15)],
			[new Circle(-13, 0, 50),
			new Circle(3, -3, 43),
			new Circle(14, -6, 25),
			new Circle(-40, 13, 28),
			new ICircle(33, -5, 15),
			new ICircle(44, 3, 15),
			new ICircle(52, 15, 15)],
			[new Circle(6, 1, 50),
			new Circle(30, -12, 41),
			new ICircle(-7, 38, 28),
			new Circle(-7, 20, 28),
			new ICircle(55, -9, 15),
			new ICircle(64, 2, 15),
			new ICircle(69, 13, 15)],
			[new Circle(6, 1, 50),
			new Circle(30, -12, 41),
			new ICircle(-7, 38, 28),
			new Circle(-7, 20, 28),
			new ICircle(55, -9, 15),
			new ICircle(64, 2, 15),
			new ICircle(69, 13, 15)],
			[new Circle(3, 2, 50),
			new Circle(17, -3, 42),
			new Circle(25, -7, 27),
			new Circle(-22, 21, 28),
			new ICircle(44, -5, 15),
			new ICircle(54, 5, 15),
			new ICircle(60, 17, 15)],
			[new Circle(3, 2, 50),
			new Circle(17, -5, 42),
			new Circle(26, -7, 27),
			new Circle(-21, 21, 30),
			new ICircle(44, -4, 15),
			new ICircle(49, 8, 15),
			new ICircle(50, 21, 15)],
			[new Circle(3, 2, 50),
			new Circle(17, -6, 42),
			new Circle(26, -7, 27),
			new Circle(-19, 23, 30),
			new ICircle(41, -1, 15),
			new ICircle(43, 11, 15),
			new ICircle(41, 24, 15)],
			[new Circle(1, 0, 50),
			new Circle(15, -6, 42),
			new Circle(25, -8, 27),
			new Circle(-18, 16, 30),
			new ICircle(41, -8, 15),
			new ICircle(47, 1, 15),
			new ICircle(47, 16, 15)],
			[new Circle(2, 1, 50),
			new Circle(14, -7, 42),
			new Circle(24, -9, 27),
			new Circle(-20, 13, 36),
			new ICircle(40, -9, 15),
			new ICircle(46, -2, 15),
			new ICircle(43, 11, 15)],
			[new Circle(3, 2, 50),
			new Circle(15, -6, 42),
			new Circle(24, -10, 27),
			new Circle(-15, 13, 38),
			new ICircle(40, -9, 15),
			new ICircle(46, -2, 15),
			new ICircle(46, 13, 15)],
			[new Circle(3, 2, 50),
			new Circle(16, -7, 42),
			new Circle(25, -11, 27),
			new Circle(-16, 15, 38),
			new ICircle(40, -9, 15),
			new ICircle(47, 0, 15),
			new ICircle(49, 14, 15)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(0, 5, 50),
			new Circle(16, -4, 42),
			new Circle(25, -9, 25),
			new Circle(-21, 21, 30),
			new ICircle(42, -6, 15),
			new ICircle(48, 4, 15),
			new ICircle(48, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(17, 5, 44),
			new Circle(29, 3, 25),
			new Circle(-25, 10, 31),
			new ICircle(44, 9, 15),
			new ICircle(47, 24, 15),
			new ICircle(43, 36, 16)],
			[new Circle(5, 4, 50),
			new Circle(19, 3, 44),
			new Circle(31, 3, 25),
			new Circle(-22, 1, 34),
			new ICircle(45, 8, 15),
			new ICircle(50, 24, 15),
			new ICircle(46, 36, 16)],
			[new Circle(1, 4, 50),
			new Circle(18, 2, 44),
			new Circle(30, 1, 25),
			new Circle(-22, 3, 34),
			new ICircle(47, 7, 15),
			new ICircle(52, 21, 15),
			new ICircle(51, 37, 16)],
			[new Circle(2, 4, 50),
			new Circle(20, 3, 44),
			new Circle(32, 2, 25),
			new Circle(-21, 8, 34),
			new ICircle(48, 5, 15),
			new ICircle(53, 19, 15),
			new ICircle(52, 36, 15)],
			[new Circle(7, 3, 49),
			new Circle(27, 1, 44),
			new Circle(39, -1, 25),
			new Circle(-14, 8, 34),
			new ICircle(59, 6, 15),
			new ICircle(57, 18, 15),
			new ICircle(52, 27, 15)],
			[new Circle(7, 3, 49),
			new Circle(27, 1, 44),
			new Circle(39, -1, 25),
			new Circle(-14, 8, 34),
			new ICircle(59, 6, 15),
			new ICircle(57, 18, 15),
			new ICircle(52, 27, 15)],
			[new Circle(9, 3, 50),
			new Circle(28, 1, 44),
			new Circle(39, 2, 25),
			new Circle(-13, 8, 34),
			new ICircle(59, 6, 15),
			new ICircle(57, 18, 15),
			new ICircle(51, 26, 16)],
			[new Circle(11, 2, 50),
			new Circle(27, 1, 44),
			new Circle(42, 0, 25),
			new Circle(-15, 9, 31),
			new ICircle(59, 7, 15),
			new ICircle(57, 18, 15),
			new ICircle(52, 27, 16)],
			[new Circle(3, 3, 50),
			new Circle(21, 1, 43),
			new Circle(33, 0, 25),
			new Circle(-23, 9, 30),
			new ICircle(50, 3, 15),
			new ICircle(51, 14, 15),
			new ICircle(44, 26, 15)],
			[new Circle(1, 4, 50),
			new Circle(21, -3, 43),
			new Circle(31, -5, 25),
			new Circle(-20, 11, 32),
			new ICircle(46, 7, 15),
			new ICircle(43, 20, 15),
			new ICircle(35, 33, 15)],
			[new Circle(1, 4, 50),
			new Circle(18, -5, 43),
			new Circle(30, -6, 25),
			new Circle(-16, 16, 34),
			new ICircle(44, 2, 15),
			new ICircle(41, 16, 15),
			new ICircle(31, 29, 15)],
			[new Circle(1, 4, 50),
			new Circle(16, -7, 43),
			new Circle(30, -6, 25),
			new Circle(-17, 22, 34),
			new ICircle(45, -3, 15),
			new ICircle(48, 9, 15),
			new ICircle(48, 18, 15)],
			[new Circle(1, 4, 50),
			new Circle(16, -4, 43),
			new Circle(30, -6, 25),
			new Circle(-20, 19, 34),
			new ICircle(45, -3, 15),
			new ICircle(49, 7, 15),
			new ICircle(49, 19, 15)],
			[new Circle(1, 4, 50),
			new Circle(16, -4, 43),
			new Circle(30, -6, 25),
			new Circle(-20, 19, 34),
			new ICircle(45, -3, 15),
			new ICircle(49, 7, 15),
			new ICircle(49, 19, 15)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(-3, 0, 50),
			new Circle(11, -14, 42),
			new Circle(21, -17, 25),
			new Circle(-18, 23, 28),
			new ICircle(40, -14, 15),
			new ICircle(48, -2, 15),
			new ICircle(50, 11, 15)],
			[new Circle(-3, 0, 50),
			new Circle(8, -14, 42),
			new Circle(18, -19, 26),
			new Circle(-18, 23, 28),
			new ICircle(39, -16, 15),
			new ICircle(46, -4, 15),
			new ICircle(50, 11, 15)],
			[new Circle(-3, 0, 50),
			new Circle(13, -10, 42),
			new Circle(24, -15, 26),
			new Circle(-21, 18, 29),
			new ICircle(45, -9, 15),
			new ICircle(56, 3, 15),
			new ICircle(68, 18, 15)],
			[new Circle(-1, -6, 50),
			new Circle(17, -8, 43),
			new Circle(27, -9, 26),
			new Circle(-25, 7, 29),
			new ICircle(46, -2, 17),
			new ICircle(58, 10, 17),
			new ICircle(68, 25, 17)],
			[new Circle(18, -7, 50),
			new Circle(35, -4, 43),
			new Circle(45, -2, 26),
			new Circle(-10, -5, 29),
			new ICircle(55, 11, 17),
			new ICircle(53, 25, 17),
			new ICircle(46, 36, 17)],
			[new Circle(41, -2, 50),
			new Circle(52, 11, 43),
			new Circle(57, 21, 26),
			new Circle(20, -21, 30),
			new ICircle(52, 37, 17),
			new ICircle(36, 41, 17),
			new ICircle(21, 40, 17)],
			[new Circle(41, 2, 50),
			new Circle(48, 15, 43),
			new Circle(51, 26, 26),
			new Circle(23, -21, 31),
			new ICircle(44, 39, 17),
			new ICircle(29, 41, 17),
			new ICircle(16, 33, 17)],
			[new Circle(39, 2, 50),
			new Circle(44, 17, 43),
			new Circle(49, 26, 26),
			new Circle(25, -23, 31),
			new ICircle(37, 39, 17),
			new ICircle(26, 40, 17),
			new ICircle(12, 32, 17)],
			[new Circle(36, 2, 50),
			new Circle(34, 19, 44),
			new Circle(32, 32, 26),
			new Circle(33, -23, 32),
			new ICircle(29, 45, 17),
			new ICircle(17, 46, 17),
			new ICircle(10, 33, 17)],
			[new Circle(22, 10, 50),
			new Circle(9, 26, 44),
			new Circle(21, 29, 26),
			new Circle(33, -12, 32),
			new ICircle(-1, 38, 17),
			new ICircle(-4, 25, 17),
			new ICircle(5, 13, 17)],
			[new Circle(16, 10, 50),
			new Circle(1, 19, 44),
			new Circle(-13, 24, 26),
			new Circle(31, -3, 37),
			new ICircle(-13, 5, 17),
			new ICircle(-5, -6, 17),
			new ICircle(3, -17, 17)],
			[new Circle(2, 6, 50),
			new Circle(-14, 0, 44),
			new Circle(-25, -6, 26),
			new Circle(26, 9, 37),
			new ICircle(17, 23, 17),
			new ICircle(20, -7, 17),
			new ICircle(24, -4, 17)],
			[new Circle(0, 2, 50),
			new Circle(-5, -14, 44),
			new Circle(7, 19, 34),
			new Circle(14, 22, 37),
			new ICircle(-15, -63, 17),
			new ICircle(-15, -44, 17),
			new ICircle(52, 38, 17)],
			[new Circle(-1, 2, 50),
			new Circle(6, -12, 45),
			new Circle(11, -20, 34),
			new Circle(-8, 24, 37),
			new ICircle(-10, 69, 17),
			new ICircle(37, -31, 17),
			new ICircle(51, -17, 17)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(0, 5, 50),
			new Circle(16, -7, 41),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 28),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 41),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 28),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -7, 41),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 28),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(41, -39, 42),
			new ICircle(51, -23, 42),
			new ICircle(56, -6, 38)],
			[new Circle(0, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(41, -39, 42),
			new ICircle(51, -23, 42),
			new ICircle(56, -6, 38)],
			[new Circle(0, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(34, -55, 14),
			new ICircle(31, -42, 15),
			new ICircle(29, -30, 14)],
			[new Circle(0, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(34, -55, 14),
			new ICircle(31, -42, 15),
			new ICircle(29, -30, 14)],
			[new Circle(0, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(34, -55, 14),
			new ICircle(31, -42, 15),
			new ICircle(29, -30, 14)],
			[new Circle(-1, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(44, -33, 14),
			new ICircle(52, -39, 15),
			new ICircle(35, -25, 14)],
			[new Circle(-1, 5, 50),
			new Circle(14, -8, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 26, 29),
			new ICircle(50, -14, 14),
			new ICircle(63, -12, 15),
			new ICircle(39, -16, 14)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(1, 4, 50),
			new Circle(18, -6, 42),
			new Circle(27, -12, 25),
			new Circle(-18, 23, 27),
			new ICircle(43, -4, 15),
			new ICircle(50, 7, 15),
			new ICircle(53, 20, 15)],
			[new Circle(1, 4, 50),
			new Circle(19, -7, 43),
			new Circle(30, -12, 25),
			new Circle(-16, 22, 30),
			new ICircle(49, -6, 15),
			new ICircle(60, 2, 15),
			new ICircle(68, 14, 15)],
			[new Circle(5, 4, 51),
			new Circle(23, -6, 44),
			new Circle(34, -10, 25),
			new Circle(-11, 25, 30),
			new ICircle(52, -6, 15),
			new ICircle(63, 0, 15),
			new ICircle(72, 11, 15)],
			[new Circle(3, 4, 50),
			new Circle(23, -6, 44),
			new Circle(34, -10, 25),
			new Circle(-9, 24, 34),
			new ICircle(52, -9, 15),
			new ICircle(66, -3, 15),
			new ICircle(76, 9, 15)],
			[new Circle(3, 4, 50),
			new Circle(23, -6, 44),
			new Circle(34, -10, 25),
			new Circle(-9, 24, 34),
			new ICircle(52, -8, 16),
			new ICircle(65, -1, 16),
			new ICircle(75, 9, 16)],
			[new Circle(3, 4, 50),
			new Circle(23, -6, 44),
			new Circle(34, -10, 25),
			new Circle(-9, 24, 34),
			new ICircle(52, -8, 16),
			new ICircle(65, 0, 17),
			new ICircle(74, 9, 16)],
			[new Circle(-10, -2, 53),
			new Circle(0, -17, 44),
			new Circle(8, -29, 25),
			new Circle(-17, 19, 34),
			new ICircle(22, -33, 16),
			new ICircle(32, -27, 15),
			new ICircle(42, -16, 16)],
			[new Circle(-8, -3, 51),
			new Circle(8, -14, 44),
			new Circle(20, -20, 25),
			new Circle(-23, 13, 34),
			new ICircle(34, -13, 16),
			new ICircle(38, -1, 15),
			new ICircle(38, 13, 16)],
			[new Circle(-6, -3, 51),
			new Circle(8, -16, 44),
			new Circle(19, -20, 25),
			new Circle(-19, 18, 34),
			new ICircle(33, -16, 16),
			new ICircle(39, -5, 15),
			new ICircle(41, 9, 16)],
			[new Circle(-5, 0, 51),
			new Circle(8, -13, 44),
			new Circle(17, -20, 25),
			new Circle(-17, 21, 34),
			new ICircle(35, -16, 16),
			new ICircle(44, -5, 15),
			new ICircle(46, 7, 16)],
			[new Circle(-3, 7, 55),
			new Circle(17, -2, 44),
			new Circle(28, -9, 25),
			new Circle(-17, 22, 34),
			new ICircle(42, -12, 16),
			new ICircle(52, -5, 15),
			new ICircle(52, 7, 16)],
			[new Circle(1, 5, 49),
			new Circle(16, -4, 44),
			new Circle(27, -9, 25),
			new Circle(-17, 22, 34),
			new ICircle(42, -9, 16),
			new ICircle(49, -1, 15),
			new ICircle(52, 12, 16)],
			[new Circle(1, 5, 49),
			new Circle(15, -6, 44),
			new Circle(27, -9, 25),
			new Circle(-17, 22, 34),
			new ICircle(42, -9, 16),
			new ICircle(49, 0, 15),
			new ICircle(52, 15, 16)],
			[new Circle(1, 5, 49),
			new Circle(17, -6, 44),
			new Circle(28, -10, 25),
			new Circle(-16, 20, 34),
			new ICircle(43, -3, 16),
			new ICircle(50, 6, 15),
			new ICircle(53, 20, 16)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(1, 7, 53),
			new Circle(19, 1, 41),
			new Circle(29, -3, 25),
			new Circle(-19, 26, 29),
			new ICircle(44, 5, 15),
			new ICircle(51, 16, 15),
			new ICircle(52, 29, 15)],
			[new Circle(1, 8, 54),
			new Circle(18, -1, 41),
			new Circle(29, -5, 25),
			new Circle(-17, 26, 29),
			new ICircle(44, 5, 15),
			new ICircle(49, 15, 15),
			new ICircle(48, 29, 15)],
			[new Circle(1, 6, 52),
			new Circle(18, -3, 41),
			new Circle(28, -5, 25),
			new Circle(-16, 25, 30),
			new ICircle(45, 3, 15),
			new ICircle(51, 15, 15),
			new ICircle(52, 28, 15)],
			[new Circle(3, 6, 53),
			new Circle(21, -2, 41),
			new Circle(29, -8, 25),
			new Circle(-13, 25, 30),
			new ICircle(48, 5, 15),
			new ICircle(63, 16, 15),
			new ICircle(76, 28, 15)],
			[new Circle(3, 6, 53),
			new Circle(21, -2, 41),
			new Circle(29, -8, 25),
			new Circle(-13, 25, 30),
			new ICircle(48, 5, 15),
			new ICircle(63, 16, 15),
			new ICircle(76, 28, 15)],
			[new Circle(2, 5, 53),
			new Circle(17, -3, 41),
			new Circle(27, -6, 25),
			new Circle(-15, 25, 31),
			new ICircle(45, 2, 15),
			new ICircle(58, 12, 16),
			new ICircle(65, 28, 16)],
			[new Circle(2, 5, 53),
			new Circle(17, -2, 42),
			new Circle(27, -2, 25),
			new Circle(-14, 24, 33),
			new ICircle(45, 5, 15),
			new ICircle(54, 15, 16),
			new ICircle(58, 27, 16)],
			[new Circle(2, 5, 53),
			new Circle(17, -3, 43),
			new Circle(27, -2, 25),
			new Circle(-13, 22, 34),
			new ICircle(44, 5, 15),
			new ICircle(52, 15, 16),
			new ICircle(54, 30, 15)],
			[new Circle(2, 5, 53),
			new Circle(18, -3, 43),
			new Circle(29, -3, 25),
			new Circle(-14, 22, 35),
			new ICircle(44, 3, 15),
			new ICircle(50, 15, 16),
			new ICircle(54, 30, 15)],
			[new Circle(2, 5, 53),
			new Circle(17, -1, 43),
			new Circle(28, -2, 25),
			new Circle(-14, 22, 36),
			new ICircle(43, 4, 15),
			new ICircle(49, 16, 16),
			new ICircle(53, 27, 15)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(0, 5, 50),
			new Circle(17, -7, 41),
			new Circle(25, -11, 25),
			new Circle(-20, 25, 26),
			new ICircle(43, -6, 15),
			new ICircle(51, 5, 15),
			new ICircle(55, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(17, -4, 42),
			new Circle(26, -8, 25),
			new Circle(-21, 21, 29),
			new ICircle(42, -1, 15),
			new ICircle(46, 14, 16),
			new ICircle(45, 29, 15)],
			[new Circle(0, 4, 50),
			new Circle(18, -1, 43),
			new Circle(28, -3, 25),
			new Circle(-24, 14, 30),
			new ICircle(43, 8, 15),
			new ICircle(44, 22, 16),
			new ICircle(39, 40, 15)],
			[new Circle(0, 5, 50),
			new Circle(12, -7, 44),
			new Circle(20, -16, 25),
			new Circle(-21, 24, 30),
			new ICircle(38, -10, 15),
			new ICircle(44, 1, 16),
			new ICircle(48, 13, 15)],
			[new Circle(3, 7, 51),
			new Circle(2, -7, 44),
			new Circle(17, 40, 25),
			new Circle(10, 25, 42),
			new ICircle(-14, -55, 15),
			new ICircle(34, 56, 16),
			new ICircle(49, 53, 16)],
			[new Circle(3, 7, 51),
			new Circle(4, -7, 44),
			new Circle(17, 40, 25),
			new Circle(10, 25, 42),
			new ICircle(10, -57, 16),
			new ICircle(24, 65, 16),
			new ICircle(41, 52, 16)],
			[new Circle(3, 6, 56),
			new Circle(8, -7, 44),
			new Circle(9, 40, 25),
			new Circle(6, 25, 42),
			new ICircle(17, -52, 19),
			new ICircle(15, 64, 16),
			new ICircle(39, 52, 16)],
			[new Circle(2, 5, 54),
			new Circle(14, -6, 44),
			new Circle(-12, 34, 25),
			new Circle(-6, 21, 42),
			new ICircle(46, -41, 18),
			new ICircle(32, -32, 16),
			new ICircle(-39, 50, 16)],
			[new Circle(1, 4, 50),
			new Circle(14, -7, 43),
			new Circle(23, -13, 25),
			new Circle(-14, 22, 36),
			new ICircle(51, -18, 18),
			new ICircle(38, -18, 16),
			new ICircle(64, -14, 16)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(-8, 1, 50),
			new Circle(5, -14, 42),
			new Circle(17, -17, 25),
			new Circle(-22, 24, 29),
			new ICircle(33, -12, 15),
			new ICircle(37, 0, 15),
			new ICircle(39, 11, 15)],
			[new Circle(-13, -2, 50),
			new Circle(0, -17, 42),
			new Circle(9, -24, 25),
			new Circle(-25, 22, 32),
			new ICircle(26, -19, 15),
			new ICircle(34, -9, 15),
			new ICircle(38, 4, 15)],
			[new Circle(-13, -2, 50),
			new Circle(0, -17, 42),
			new Circle(9, -24, 25),
			new Circle(-25, 22, 32),
			new ICircle(26, -19, 15),
			new ICircle(34, -9, 15),
			new ICircle(38, 4, 15)],
			[new Circle(-2, 5, 50),
			new Circle(16, -7, 42),
			new Circle(26, -10, 25),
			new Circle(-18, 22, 33),
			new ICircle(41, -4, 15),
			new ICircle(45, 10, 16),
			new ICircle(44, 25, 15)],
			[new Circle(8, 10, 52),
			new Circle(27, 6, 43),
			new Circle(38, 3, 25),
			new Circle(-12, 23, 34),
			new ICircle(51, 14, 15),
			new ICircle(53, 29, 16),
			new ICircle(50, 43, 15)],
			[new Circle(8, 10, 52),
			new Circle(27, 6, 43),
			new Circle(38, 3, 25),
			new Circle(-12, 23, 34),
			new ICircle(-41, 52, 15),
			new ICircle(52, 24, 16),
			new ICircle(50, 43, 15)],
			[new Circle(8, 11, 52),
			new Circle(26, 7, 43),
			new Circle(38, 4, 25),
			new Circle(-12, 21, 35),
			new ICircle(-41, 52, 15),
			new ICircle(51, 24, 16),
			new ICircle(47, 43, 15)],
			[new Circle(8, 11, 52),
			new Circle(26, 7, 43),
			new Circle(38, 4, 25),
			new Circle(-12, 21, 35),
			new ICircle(-41, 52, 15),
			new ICircle(51, 24, 16),
			new ICircle(47, 43, 15)],
			[new Circle(8, 11, 52),
			new Circle(26, 7, 43),
			new Circle(38, 4, 25),
			new Circle(-12, 21, 35),
			new ICircle(-41, 52, 15),
			new ICircle(51, 24, 16),
			new ICircle(47, 43, 15)],
			[new Circle(10, 12, 53),
			new Circle(27, 6, 43),
			new Circle(37, 1, 27),
			new Circle(-7, 29, 35),
			new ICircle(51, 11, 15),
			new ICircle(55, 22, 16),
			new ICircle(55, 34, 15)],
			[new Circle(11, 15, 56),
			new Circle(28, 7, 44),
			new Circle(37, 1, 27),
			new Circle(-3, 34, 34),
			new ICircle(53, 4, 15),
			new ICircle(57, 16, 16),
			new ICircle(57, 31, 16)],
			[new Circle(10, 14, 56),
			new Circle(26, 5, 43),
			new Circle(35, 0, 27),
			new Circle(-3, 35, 34),
			new ICircle(52, 4, 15),
			new ICircle(57, 16, 16),
			new ICircle(57, 31, 16)],
			[new Circle(6, 11, 53),
			new Circle(22, 0, 43),
			new Circle(31, -6, 27),
			new Circle(-8, 29, 34),
			new ICircle(46, -1, 15),
			new ICircle(52, 12, 16),
			new ICircle(53, 23, 16)],
			[new Circle(5, 7, 50),
			new Circle(19, -3, 43),
			new Circle(29, -7, 27),
			new Circle(-12, 26, 34),
			new ICircle(45, -3, 15),
			new ICircle(52, 8, 16),
			new ICircle(54, 18, 16)],
			[new Circle(3, 5, 49),
			new Circle(16, -4, 44),
			new Circle(26, -9, 27),
			new Circle(-16, 23, 34),
			new ICircle(44, -5, 15),
			new ICircle(50, 4, 16),
			new ICircle(54, 16, 16)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(0, 5, 50),
			new Circle(16, -7, 42),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 29),
			new ICircle(43, -7, 15),
			new ICircle(49, 4, 15),
			new ICircle(51, 15, 15)],
			[new Circle(-4, 3, 50),
			new Circle(10, -12, 42),
			new Circle(17, -20, 25),
			new Circle(-15, 23, 34),
			new ICircle(34, -21, 15),
			new ICircle(42, -11, 15),
			new ICircle(47, -1, 15)],
			[new Circle(-9, -1, 51),
			new Circle(-2, -19, 42),
			new Circle(7, -13, 25),
			new Circle(-3, 20, 38),
			new ICircle(25, -24, 16),
			new ICircle(34, -5, 15),
			new ICircle(28, 29, 20)],
			[new Circle(-9, -1, 51),
			new Circle(0, -19, 42),
			new Circle(6, -10, 25),
			new Circle(0, 18, 38),
			new ICircle(27, -24, 16),
			new ICircle(37, -9, 15),
			new ICircle(19, 10, 36)],
			[new Circle(-9, -3, 51),
			new Circle(-3, -22, 42),
			new Circle(7, 5, 25),
			new Circle(5, 14, 38),
			new ICircle(21, -26, 26),
			new ICircle(27, -14, 32),
			new ICircle(19, 7, 36)],
			[new Circle(1, 4, 51),
			new Circle(15, -7, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 21, 35),
			new ICircle(46, -10, 17),
			new ICircle(60, 6, 15),
			new ICircle(-42, 50, 17)],
			[new Circle(1, 4, 50),
			new Circle(15, -7, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 21, 35),
			new ICircle(46, -10, 17),
			new ICircle(60, 6, 15),
			new ICircle(-45, 48, 17)],
			[new Circle(1, 4, 50),
			new Circle(16, -7, 42),
			new Circle(25, -12, 25),
			new Circle(-17, 21, 35),
			new ICircle(48, -6, 17),
			new ICircle(57, 11, 15),
			new ICircle(-45, 48, 17)],
			[new Circle(1, 4, 50),
			new Circle(16, -7, 42),
			new Circle(25, -12, 25),
			new Circle(-16, 21, 35),
			new ICircle(42, -9, 15),
			new ICircle(48, 1, 15),
			new ICircle(51, 15, 15)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(-4, 1, 50),
			new Circle(11, -14, 41),
			new Circle(19, -20, 25),
			new Circle(-17, 22, 29),
			new ICircle(37, -20, 15),
			new ICircle(47, -11, 15),
			new ICircle(53, -1, 15)],
			[new Circle(-4, 0, 49),
			new Circle(10, -16, 41),
			new Circle(18, -22, 25),
			new Circle(-18, 20, 30),
			new ICircle(31, -26, 15),
			new ICircle(40, -20, 15),
			new ICircle(47, -10, 15)],
			[new Circle(-4, -1, 49),
			new Circle(10, -16, 41),
			new Circle(18, -22, 25),
			new Circle(-18, 20, 30),
			new ICircle(33, -27, 15),
			new ICircle(43, -22, 15),
			new ICircle(51, -13, 15)],
			[new Circle(-2, 1, 50),
			new Circle(14, -9, 43),
			new Circle(24, -15, 25),
			new Circle(-19, 20, 30),
			new ICircle(41, -20, 15),
			new ICircle(52, -19, 15),
			new ICircle(62, -18, 15)],
			[new Circle(9, -2, 54),
			new Circle(26, 9, 43),
			new Circle(35, 21, 25),
			new Circle(-18, -3, 32),
			new ICircle(-50, 13, 15),
			new ICircle(37, 47, 27),
			new ICircle(-39, 4, 15)],
			[new Circle(9, -2, 54),
			new Circle(20, 11, 42),
			new Circle(-11, -1, 25),
			new Circle(-16, -15, 32),
			new ICircle(29, 33, 15),
			new ICircle(13, 32, 35),
			new ICircle(29, 27, 15)],
			[new Circle(9, -2, 54),
			new Circle(21, 10, 41),
			new Circle(-13, -1, 25),
			new Circle(-18, -13, 32),
			new ICircle(26, 35, 15),
			new ICircle(18, 42, 14),
			new ICircle(8, 47, 15)],
			[new Circle(9, -2, 54),
			new Circle(22, -5, 41),
			new Circle(32, -5, 25),
			new Circle(-18, 4, 34),
			new ICircle(41, 10, 15),
			new ICircle(38, 23, 14),
			new ICircle(32, 33, 15)],
			[new Circle(0, -6, 56),
			new Circle(16, -8, 41),
			new Circle(27, -10, 25),
			new Circle(-18, 11, 34),
			new ICircle(40, 1, 15),
			new ICircle(43, 14, 14),
			new ICircle(40, 26, 15)],
			[new Circle(-4, 0, 52),
			new Circle(16, -9, 41),
			new Circle(25, -10, 25),
			new Circle(-21, 16, 34),
			new ICircle(39, -2, 15),
			new ICircle(40, 12, 15),
			new ICircle(37, 26, 15)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(0, 5, 50),
			new Circle(17, -7, 40),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 29),
			new ICircle(42, -5, 15),
			new ICircle(47, 8, 15),
			new ICircle(48, 22, 15)],
			[new Circle(2, 5, 50),
			new Circle(19, -5, 40),
			new Circle(27, -10, 25),
			new Circle(-17, 23, 30),
			new ICircle(42, 0, 15),
			new ICircle(45, 14, 15),
			new ICircle(42, 27, 15)],
			[new Circle(3, 5, 50),
			new Circle(19, -3, 42),
			new Circle(28, -8, 25),
			new Circle(-17, 22, 32),
			new ICircle(45, 4, 15),
			new ICircle(46, 19, 15),
			new ICircle(44, 32, 15)],
			[new Circle(3, 5, 50),
			new Circle(19, -2, 42),
			new Circle(28, -5, 25),
			new Circle(-16, 21, 32),
			new ICircle(45, 8, 15),
			new ICircle(49, 23, 15),
			new ICircle(45, 39, 15)],
			[new Circle(18, 10, 51),
			new Circle(36, 6, 43),
			new Circle(47, 3, 25),
			new Circle(-3, 21, 32),
			new ICircle(64, 17, 15),
			new ICircle(69, 36, 15),
			new ICircle(70, 52, 15)],
			[new Circle(18, 10, 51),
			new Circle(36, 6, 43),
			new Circle(47, 3, 25),
			new Circle(-3, 21, 32),
			new ICircle(64, 17, 15),
			new ICircle(69, 36, 15),
			new ICircle(70, 52, 15)],
			[new Circle(9, 8, 52),
			new Circle(29, 1, 44),
			new Circle(40, -3, 25),
			new Circle(-8, 22, 32),
			new ICircle(58, 14, 15),
			new ICircle(63, 32, 15),
			new ICircle(64, 51, 15)],
			[new Circle(1, 6, 51),
			new Circle(18, -4, 44),
			new Circle(28, -11, 25),
			new Circle(-14, 23, 32),
			new ICircle(48, -7, 16),
			new ICircle(63, -5, 15),
			new ICircle(76, 0, 15)],
			[new Circle(-4, 4, 51),
			new Circle(9, -9, 44),
			new Circle(18, -17, 25),
			new Circle(-17, 24, 33),
			new ICircle(36, -22, 16),
			new ICircle(49, -26, 15),
			new ICircle(62, -32, 15)],
			[new Circle(-3, 5, 51),
			new Circle(13, -8, 44),
			new Circle(22, -16, 25),
			new Circle(-17, 22, 33),
			new ICircle(38, -14, 16),
			new ICircle(49, -14, 15),
			new ICircle(59, -11, 15)],
			[new Circle(0, 4, 50),
			new Circle(14, -5, 44),
			new Circle(24, -13, 25),
			new Circle(-17, 22, 33),
			new ICircle(42, -10, 16),
			new ICircle(54, -5, 15),
			new ICircle(61, 4, 15)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(-1, 5, 50),
			new Circle(16, -7, 41),
			new Circle(25, -12, 25),
			new Circle(-19, 24, 29),
			new ICircle(42, -5, 15),
			new ICircle(46, 5, 15),
			new ICircle(46, 18, 15)],
			[new Circle(-5, 0, 50),
			new Circle(14, -9, 43),
			new Circle(24, -15, 25),
			new Circle(-23, 14, 30),
			new ICircle(41, -7, 15),
			new ICircle(45, 3, 15),
			new ICircle(45, 15, 15)],
			[new Circle(-6, -3, 49),
			new Circle(13, -10, 43),
			new Circle(24, -13, 25),
			new Circle(-25, 5, 34),
			new ICircle(40, -6, 15),
			new ICircle(40, 7, 15),
			new ICircle(36, 20, 15)],
			[new Circle(-9, -6, 49),
			new Circle(10, -11, 43),
			new Circle(21, -13, 25),
			new Circle(-29, 4, 34),
			new ICircle(37, -6, 15),
			new ICircle(38, 7, 15),
			new ICircle(35, 20, 15)],
			[new Circle(-12, -7, 50),
			new Circle(8, -11, 43),
			new Circle(20, -13, 25),
			new Circle(-30, 3, 34),
			new ICircle(35, -6, 15),
			new ICircle(35, 7, 15),
			new ICircle(31, 20, 15)],
			[new Circle(-12, -8, 50),
			new Circle(8, -11, 44),
			new Circle(20, -14, 25),
			new Circle(-31, 0, 34),
			new ICircle(32, -6, 15),
			new ICircle(31, 8, 15),
			new ICircle(25, 21, 15)],
			[new Circle(13, 10, 50),
			new Circle(22, -9, 39),
			new Circle(-1, 5, 37),
			new Circle(15, 32, 37),
			new ICircle(37, -7, 34),
			new ICircle(39, 10, 37),
			new ICircle(47, 31, 37)],
			[new Circle(12, 10, 51),
			new Circle(22, -7, 39),
			new Circle(-1, 5, 37),
			new Circle(15, 30, 39),
			new ICircle(39, -1, 34),
			new ICircle(43, 14, 37),
			new ICircle(49, 33, 33)],
			[new Circle(12, 10, 51),
			new Circle(24, -5, 39),
			new Circle(-1, 5, 37),
			new Circle(15, 30, 39),
			new ICircle(40, 2, 34),
			new ICircle(43, 15, 37),
			new ICircle(46, 35, 33)],
			[new Circle(12, 10, 51),
			new Circle(25, -6, 39),
			new Circle(-1, 5, 37),
			new Circle(11, 26, 40),
			new ICircle(40, 2, 34),
			new ICircle(41, 15, 37),
			new ICircle(43, 29, 33)],
			[new Circle(11, 9, 52),
			new Circle(22, -13, 40),
			new Circle(-1, 5, 37),
			new Circle(9, 27, 38),
			new ICircle(34, 55, 20),
			new ICircle(48, -21, 14),
			new ICircle(54, -5, 15)],
			[new Circle(11, 9, 52),
			new Circle(21, -17, 40),
			new Circle(1, 2, 37),
			new Circle(17, 25, 38),
			new ICircle(52, 41, 16),
			new ICircle(49, -33, 15),
			new ICircle(63, -26, 15)],
			[new Circle(7, -2, 52),
			new Circle(22, -18, 41),
			new Circle(21, -9, 37),
			new Circle(-1, 17, 38),
			new ICircle(39, -38, 15),
			new ICircle(47, -44, 15),
			new ICircle(56, -49, 15)],
			[new Circle(-3, -9, 54),
			new Circle(13, -23, 42),
			new Circle(8, -18, 46),
			new Circle(-13, 12, 33),
			new ICircle(26, -46, 15),
			new ICircle(31, -55, 15),
			new ICircle(39, -62, 15)],
			[new Circle(-3, -10, 53),
			new Circle(13, -24, 42),
			new Circle(9, -20, 46),
			new Circle(-13, 9, 35),
			new ICircle(26, -46, 15),
			new ICircle(36, -52, 15),
			new ICircle(49, -55, 15)],
			[new Circle(-2, -7, 50),
			new Circle(14, -17, 45),
			new Circle(21, -20, 37),
			new Circle(-16, 7, 35),
			new ICircle(44, -19, 15),
			new ICircle(50, -6, 15),
			new ICircle(51, 9, 15)],
			[new Circle(-2, -1, 50),
			new Circle(18, -9, 45),
			new Circle(25, -11, 37),
			new Circle(-16, 10, 35),
			new ICircle(46, -4, 15),
			new ICircle(48, 13, 15),
			new ICircle(46, 30, 15)],
			[new Circle(-1, 2, 50),
			new Circle(16, -7, 43),
			new Circle(22, -10, 36),
			new Circle(-17, 17, 34),
			new ICircle(43, -3, 15),
			new ICircle(46, 10, 15),
			new ICircle(47, 23, 15)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(-8, 2, 49),
			new Circle(6, -14, 41),
			new Circle(13, -20, 25),
			new Circle(-22, 23, 30),
			new ICircle(29, -15, 15),
			new ICircle(37, -3, 15),
			new ICircle(39, 10, 15)],
			[new Circle(-14, 0, 49),
			new Circle(0, -17, 41),
			new Circle(9, -24, 25),
			new Circle(-25, 23, 31),
			new ICircle(25, -19, 15),
			new ICircle(34, -10, 15),
			new ICircle(38, 4, 15)],
			[new Circle(-13, 1, 51),
			new Circle(0, -16, 41),
			new Circle(8, -24, 25),
			new Circle(-22, 25, 32),
			new ICircle(24, -21, 16),
			new ICircle(32, -15, 17),
			new ICircle(33, 3, 15)],
			[new Circle(-15, 2, 50),
			new Circle(-3, -15, 41),
			new Circle(5, -24, 25),
			new Circle(-22, 25, 33),
			new ICircle(21, -25, 14),
			new ICircle(30, -24, 17),
			new ICircle(26, -7, 15)],
			[new Circle(-21, 9, 53),
			new Circle(-16, -10, 40),
			new Circle(-13, -20, 25),
			new Circle(-16, 35, 34),
			new ICircle(9, -28, 14),
			new ICircle(14, -5, 17),
			new ICircle(18, 60, 17)],
			[new Circle(-23, 20, 54),
			new Circle(-21, -4, 40),
			new Circle(-20, -15, 25),
			new Circle(-14, 41, 34),
			new ICircle(2, -25, 14),
			new ICircle(5, -4, 17),
			new ICircle(8, 51, 29)],
			[new Circle(-13, 1, 53),
			new Circle(6, -13, 40),
			new Circle(15, -19, 25),
			new Circle(-24, 21, 34),
			new ICircle(25, -15, 29),
			new ICircle(24, 0, 31),
			new ICircle(21, 10, 28)],
			[new Circle(4, 11, 54),
			new Circle(31, 7, 40),
			new Circle(24, 18, 25),
			new Circle(-12, 21, 34),
			new ICircle(43, 20, 29),
			new ICircle(42, 34, 31),
			new ICircle(-41, 50, 17)],
			[new Circle(5, 10, 54),
			new Circle(30, 6, 40),
			new Circle(24, 18, 25),
			new Circle(-12, 21, 34),
			new ICircle(44, 21, 29),
			new ICircle(43, 34, 32),
			new ICircle(-41, 50, 17)],
			[new Circle(8, 12, 55),
			new Circle(29, 4, 40),
			new Circle(38, 1, 25),
			new Circle(-7, 29, 34),
			new ICircle(46, 17, 29),
			new ICircle(49, 27, 29),
			new ICircle(-25, 63, 17)],
			[new Circle(12, 14, 57),
			new Circle(31, 6, 40),
			new Circle(39, 1, 25),
			new Circle(-4, 34, 33),
			new ICircle(47, 8, 29),
			new ICircle(55, 19, 23),
			new ICircle(56, 31, 17)],
			[new Circle(10, 15, 54),
			new Circle(27, 3, 40),
			new Circle(37, 0, 25),
			new Circle(-3, 35, 33),
			new ICircle(46, 9, 29),
			new ICircle(54, 19, 23),
			new ICircle(56, 31, 16)],
			[new Circle(6, 11, 52),
			new Circle(23, -1, 41),
			new Circle(31, -7, 25),
			new Circle(-9, 30, 32),
			new ICircle(41, -1, 24),
			new ICircle(50, 10, 19),
			new ICircle(52, 24, 16)],
			[new Circle(3, 8, 52),
			new Circle(21, -4, 41),
			new Circle(30, -6, 25),
			new Circle(-13, 27, 32),
			new ICircle(43, -1, 20),
			new ICircle(51, 7, 17),
			new ICircle(55, 18, 16)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(-2, 5, 50),
			new Circle(16, -5, 42),
			new Circle(25, -10, 25),
			new Circle(-21, 21, 31),
			new ICircle(42, -5, 15),
			new ICircle(47, 6, 15),
			new ICircle(48, 17, 15)],
			[new Circle(-3, 4, 49),
			new Circle(14, -3, 42),
			new Circle(23, -8, 25),
			new Circle(-24, 17, 34),
			new ICircle(38, 0, 15),
			new ICircle(42, 12, 15),
			new ICircle(42, 26, 15)],
			[new Circle(-5, 2, 49),
			new Circle(7, -7, 42),
			new Circle(16, -12, 25),
			new Circle(-23, 23, 36),
			new ICircle(29, -3, 18),
			new ICircle(35, 12, 15),
			new ICircle(35, 24, 15)],
			[new Circle(-5, 4, 49),
			new Circle(10, -6, 43),
			new Circle(-20, 6, 31),
			new Circle(-22, 21, 37),
			new ICircle(24, 0, 27),
			new ICircle(23, 13, 34),
			new ICircle(1, 20, 50)],
			[new Circle(-5, 4, 49),
			new Circle(11, -7, 43),
			new Circle(-17, 6, 31),
			new Circle(-18, 22, 38),
			new ICircle(25, -2, 27),
			new ICircle(24, 12, 34),
			new ICircle(1, 17, 54)],
			[new Circle(-4, 5, 51),
			new Circle(10, -10, 43),
			new Circle(20, -14, 31),
			new Circle(-12, 24, 38),
			new ICircle(26, -6, 27),
			new ICircle(24, 8, 34),
			new ICircle(11, 18, 54)],
			[new Circle(3, 3, 53),
			new Circle(6, -12, 43),
			new Circle(6, -21, 31),
			new Circle(8, 27, 39),
			new ICircle(25, -19, 27),
			new ICircle(35, -7, 34),
			new ICircle(17, 9, 57)],
			[new Circle(3, 3, 53),
			new Circle(6, -12, 43),
			new Circle(6, -21, 31),
			new Circle(8, 27, 39),
			new ICircle(25, -19, 27),
			new ICircle(35, -7, 34),
			new ICircle(17, 9, 57)],
			[new Circle(3, 3, 53),
			new Circle(6, -12, 43),
			new Circle(6, -21, 31),
			new Circle(8, 27, 39),
			new ICircle(25, -19, 27),
			new ICircle(35, -7, 34),
			new ICircle(17, 9, 57)],
			[new Circle(-3, 3, 53),
			new Circle(-5, -12, 43),
			new Circle(-9, -19, 31),
			new Circle(12, 23, 39),
			new ICircle(12, -23, 44),
			new ICircle(28, -26, 23),
			new ICircle(42, 4, 22)],
			[new Circle(-1, 5, 53),
			new Circle(8, -11, 43),
			new Circle(12, -19, 31),
			new Circle(-4, 28, 36),
			new ICircle(18, -35, 15),
			new ICircle(32, -32, 15),
			new ICircle(42, -22, 13)],
			[new Circle(-1, 4, 52),
			new Circle(12, -9, 43),
			new Circle(18, -15, 31),
			new Circle(-13, 24, 35),
			new ICircle(36, -19, 15),
			new ICircle(44, -7, 15),
			new ICircle(45, 7, 13)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -7, 40),
			new Circle(25, -13, 25),
			new Circle(-19, 26, 25),
			new ICircle(39, -4, 15),
			new ICircle(40, 8, 15),
			new ICircle(33, 21, 15)],
			[new Circle(0, 5, 50),
			new Circle(12, -9, 41),
			new Circle(21, -16, 26),
			new Circle(-16, 26, 30),
			new ICircle(25, -11, 29),
			new ICircle(36, -1, 15),
			new ICircle(34, 9, 15)],
			[new Circle(0, 5, 50),
			new Circle(11, -10, 41),
			new Circle(19, -17, 26),
			new Circle(-14, 26, 32),
			new ICircle(-23, 14, 15),
			new ICircle(-6, -16, 15),
			new ICircle(19, 19, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(-23, 3, 15),
			new ICircle(-8, 25, 15),
			new ICircle(20, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(-23, 3, 15),
			new ICircle(-8, 25, 15),
			new ICircle(20, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(-23, 3, 15),
			new ICircle(-8, 25, 15),
			new ICircle(20, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(-23, 3, 15),
			new ICircle(-8, 25, 15),
			new ICircle(20, 13, 15)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(37, -17, 14),
			new ICircle(50, -15, 15),
			new ICircle(-30, 39, 14)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(33, 24, 14),
			new ICircle(40, 13, 15),
			new ICircle(39, 2, 14)],
			[new Circle(0, 5, 50),
			new Circle(16, -3, 42),
			new Circle(28, -5, 26),
			new Circle(-21, 19, 32),
			new ICircle(39, 7, 14),
			new ICircle(38, 21, 15),
			new ICircle(33, 35, 14)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(-1, 4, 48),
			new Circle(17, -2, 42),
			new Circle(27, -6, 25),
			new Circle(-23, 15, 33),
			new ICircle(42, -5, 15),
			new ICircle(50, 2, 15),
			new ICircle(53, 15, 15)],
			[new Circle(-1, 4, 48),
			new Circle(17, -2, 42),
			new Circle(27, -6, 25),
			new Circle(-23, 15, 33),
			new ICircle(42, -5, 15),
			new ICircle(50, 2, 15),
			new ICircle(53, 15, 15)],
			[new Circle(-1, 4, 48),
			new Circle(17, -2, 42),
			new Circle(27, -6, 25),
			new Circle(-23, 15, 33),
			new ICircle(44, -7, 15),
			new ICircle(53, 0, 15),
			new ICircle(60, 13, 15)],
			[new Circle(-1, 4, 48),
			new Circle(17, -2, 42),
			new Circle(27, -6, 25),
			new Circle(-23, 15, 33),
			new ICircle(44, -7, 15),
			new ICircle(53, 0, 15),
			new ICircle(60, 13, 15)],
			[new Circle(13, 2, 48),
			new Circle(30, -4, 44),
			new Circle(41, -7, 25),
			new Circle(-8, 13, 34),
			new ICircle(52, -11, 15),
			new ICircle(58, 0, 15),
			new ICircle(55, 15, 15)],
			[new Circle(15, 0, 48),
			new Circle(32, -5, 44),
			new Circle(44, -10, 25),
			new Circle(-6, 8, 34),
			new ICircle(55, -16, 15),
			new ICircle(61, 0, 16),
			new ICircle(57, 14, 15)],
			[new Circle(16, 0, 48),
			new Circle(33, -3, 44),
			new Circle(44, -4, 26),
			new Circle(-7, 6, 34),
			new ICircle(57, -14, 15),
			new ICircle(63, -2, 16),
			new ICircle(56, 12, 17)],
			[new Circle(14, 1, 49),
			new Circle(30, -3, 44),
			new Circle(42, -6, 26),
			new Circle(-8, 10, 34),
			new ICircle(57, -14, 15),
			new ICircle(63, -2, 16),
			new ICircle(56, 12, 17)],
			[new Circle(10, 1, 49),
			new Circle(27, -3, 45),
			new Circle(38, -5, 26),
			new Circle(-11, 10, 34),
			new ICircle(50, -12, 15),
			new ICircle(58, -2, 16),
			new ICircle(55, 12, 17)],
			[new Circle(5, 2, 50),
			new Circle(18, -1, 45),
			new Circle(31, -4, 26),
			new Circle(-18, 13, 35),
			new ICircle(44, -9, 15),
			new ICircle(51, 1, 16),
			new ICircle(52, 14, 17)],
			[new Circle(3, 3, 49),
			new Circle(14, -1, 45),
			new Circle(27, -5, 26),
			new Circle(-21, 14, 36),
			new ICircle(42, -7, 15),
			new ICircle(50, 2, 16),
			new ICircle(52, 15, 16)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -7, 43),
			new Circle(-19, 24, 29),
			new ICircle(39, -16, 15),
			new ICircle(47, -20, 15),
			new ICircle(57, -21, 15)],
			[new Circle(0, 5, 50),
			new Circle(15, -7, 43),
			new Circle(-19, 24, 29),
			new ICircle(37, -22, 15),
			new ICircle(46, -29, 15),
			new ICircle(56, -36, 15)],
			[new Circle(8, 5, 50),
			new Circle(24, -7, 43),
			new Circle(-11, 23, 29),
			new ICircle(47, -6, 15),
			new ICircle(55, 2, 15),
			new ICircle(59, 13, 15)],
			[new Circle(8, 5, 50),
			new Circle(24, -7, 43),
			new Circle(-11, 23, 29),
			new ICircle(47, -6, 15),
			new ICircle(55, 2, 15),
			new ICircle(59, 13, 15)],
			[new Circle(8, 5, 50),
			new Circle(24, -7, 43),
			new Circle(-11, 23, 29),
			new ICircle(47, -6, 15),
			new ICircle(55, 2, 15),
			new ICircle(59, 13, 15)],
			[new Circle(5, 4, 50),
			new Circle(22, -8, 42),
			new Circle(-14, 22, 29),
			new ICircle(47, -6, 15),
			new ICircle(55, -1, 15),
			new ICircle(60, 8, 15)],
			[new Circle(3, 4, 50),
			new Circle(19, -7, 42),
			new Circle(-17, 23, 29),
			new ICircle(43, -5, 15),
			new ICircle(51, -1, 15),
			new ICircle(57, 8, 15)],
			[new Circle(3, 4, 50),
			new Circle(18, -7, 42),
			new Circle(-17, 24, 29),
			new ICircle(40, -5, 15),
			new ICircle(47, 1, 15),
			new ICircle(53, 11, 15)],
			[new Circle(2, 4, 50),
			new Circle(17, -7, 42),
			new Circle(-19, 24, 29),
			new ICircle(39, -6, 15),
			new ICircle(46, 0, 15),
			new ICircle(50, 11, 15)],
			[new Circle(2, 4, 50),
			new Circle(17, -7, 42),
			new Circle(-19, 24, 29),
			new ICircle(40, -7, 15),
			new ICircle(48, 1, 15),
			new ICircle(52, 13, 15)],
			[new Circle(2, 4, 50),
			new Circle(17, -7, 42),
			new Circle(-19, 24, 29),
			new ICircle(41, -8, 15),
			new ICircle(50, 2, 15),
			new ICircle(53, 16, 15)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(-2, 6, 50),
			new Circle(12, -4, 45),
			new Circle(24, -13, 25),
			new Circle(-19, 25, 27),
			new ICircle(37, -5, 15),
			new ICircle(39, 8, 15),
			new ICircle(35, 20, 15)]
		];

		this.hurtboxes["RNPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["RNL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(39, -4, 15),
			new ICircle(39, 8, 15),
			new ICircle(34, 22, 15)]
		];

		this.hurtboxes["RNS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["RNPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new ICircle(-5, 60, 16),
			new Circle(-20, 25, 25),
			new ICircle(-13, 44, 15),
			new ICircle(46, -10, 15),
			new ICircle(63, -6, 15)],
			[new Circle(1, 6, 50),
			new Circle(17, -9, 40),
			new ICircle(5, 55, 16),
			new Circle(-15, 28, 25),
			new ICircle(-4, 44, 15),
			new ICircle(35, -27, 15),
			new ICircle(48, -33, 15)],
			[new Circle(4, 8, 50),
			new Circle(16, -14, 40),
			new ICircle(1, 66, 16),
			new Circle(-3, 33, 25),
			new ICircle(-2, 50, 15),
			new ICircle(16, -41, 15),
			new ICircle(27, -55, 15)],
			[new Circle(3, 7, 50),
			new Circle(16, -14, 40),
			new ICircle(-15, 69, 16),
			new Circle(-8, 30, 25),
			new ICircle(-10, 50, 15),
			new ICircle(18, -41, 15),
			new ICircle(31, -57, 15)],
			[new Circle(3, 4, 50),
			new Circle(15, -14, 40),
			new ICircle(-11, 65, 16),
			new Circle(-7, 30, 25),
			new ICircle(-9, 50, 15),
			new ICircle(25, -39, 15),
			new ICircle(36, -48, 15)],
			[new Circle(0, 4, 50),
			new Circle(3, -16, 40),
			new ICircle(-3, 67, 16),
			new Circle(0, 32, 29),
			new ICircle(-1, 51, 15),
			new ICircle(5, -43, 15),
			new ICircle(16, -53, 15)],
			[new Circle(4, 2, 50),
			new Circle(-10, -8, 40),
			new ICircle(67, 13, 16),
			new Circle(31, 15, 29),
			new ICircle(51, 13, 15),
			new ICircle(-11, -37, 15),
			new ICircle(4, -46, 15)],
			[new Circle(4, 2, 50),
			new Circle(-10, -8, 40),
			new ICircle(67, 13, 16),
			new Circle(31, 15, 29),
			new ICircle(51, 13, 15),
			new ICircle(-23, -35, 15),
			new ICircle(-20, -51, 15)],
			[new Circle(4, 2, 50),
			new Circle(-4, -16, 40),
			new ICircle(59, 13, 16),
			new Circle(18, 24, 29),
			new ICircle(44, 20, 15),
			new ICircle(3, -44, 15),
			new ICircle(20, -48, 15)],
			[new Circle(13, 3, 50),
			new Circle(20, -15, 40),
			new ICircle(42, 30, 16),
			new Circle(8, 31, 29),
			new ICircle(28, 35, 15),
			new ICircle(38, -28, 15),
			new ICircle(52, -22, 15)],
			[new Circle(7, 6, 50),
			new Circle(17, -12, 40),
			new ICircle(39, 33, 16),
			new Circle(-2, 30, 29),
			new ICircle(20, 43, 15),
			new ICircle(39, -23, 15),
			new ICircle(53, -16, 15)],
			[new Circle(2, 6, 50),
			new Circle(17, -10, 40),
			new ICircle(-7, 55, 16),
			new Circle(-12, 28, 29),
			new ICircle(-9, 45, 15),
			new ICircle(42, -7, 15),
			new ICircle(51, 8, 15)]
		];

		this.hurtboxes["MN"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -6, 43),
			new Circle(25, -13, 25),
			new Circle(-19, 24, 28),
			new ICircle(44, -8, 15),
			new ICircle(52, 5, 15),
			new ICircle(53, 15, 15)],
			[new Circle(0, 5, 50),
			new Circle(12, -11, 40),
			new Circle(21, -21, 25),
			new Circle(-6, 28, 35),
			new ICircle(40, -16, 15),
			new ICircle(49, -4, 15),
			new ICircle(52, 10, 15)],
			[new Circle(0, 6, 50),
			new Circle(1, -8, 45),
			new Circle(2, -22, 25),
			new Circle(2, 29, 37),
			new ICircle(14, -34, 15),
			new ICircle(30, -36, 15),
			new ICircle(45, -31, 15)],
			[new Circle(-1, 4, 49),
			new Circle(14, -5, 45),
			new Circle(25, -13, 25),
			new Circle(-17, 15, 38),
			new ICircle(40, -10, 15),
			new ICircle(38, 9, 28),
			new ICircle(-34, 38, 15)],
			[new Circle(0, 5, 51),
			new Circle(14, -7, 46),
			new Circle(24, -15, 25),
			new Circle(-12, 24, 36),
			new ICircle(27, -38, 15),
			new ICircle(40, -42, 15),
			new ICircle(-39, 56, 15)],
			[new Circle(0, 5, 51),
			new Circle(5, -14, 44),
			new Circle(7, -26, 25),
			new Circle(0, 27, 36),
			new ICircle(38, -22, 15),
			new ICircle(49, -7, 15),
			new ICircle(-17, 61, 15)],
			[new Circle(0, 6, 50),
			new Circle(1, -14, 44),
			new Circle(4, -30, 29),
			new Circle(1, 20, 38),
			new ICircle(29, -55, 15),
			new ICircle(45, -80, 15),
			new ICircle(56, -82, 15)],
			[new Circle(0, 5, 51),
			new Circle(4, -12, 44),
			new Circle(15, -6, 29),
			new Circle(-4, 27, 38),
			new ICircle(-2, -43, 15),
			new ICircle(-11, -55, 15),
			new ICircle(29, 48, 15)],
			[new Circle(0, 5, 51),
			new Circle(13, -9, 45),
			new Circle(18, -17, 32),
			new Circle(-12, 24, 37),
			new ICircle(11, 53, 15),
			new ICircle(9, -40, 15),
			new ICircle(-2, -54, 15)],
			[new Circle(0, 5, 51),
			new Circle(15, -7, 45),
			new Circle(22, -12, 32),
			new Circle(-16, 20, 38),
			new ICircle(44, -10, 15),
			new ICircle(50, -3, 15),
			new ICircle(54, 7, 15)],
			[new Circle(1, 3, 51),
			new Circle(16, -7, 45),
			new Circle(-18, 22, 32),
			new ICircle(42, -7, 15),
			new ICircle(46, 6, 15),
			new ICircle(43, 18, 15)],
			[new Circle(0, 5, 51),
			new Circle(15, -6, 44),
			new Circle(22, -11, 32),
			new Circle(-16, 20, 37),
			new ICircle(41, -8, 15),
			new ICircle(46, 6, 15),
			new ICircle(43, 19, 15)],
			[new Circle(0, 5, 51),
			new Circle(14, -6, 45),
			new Circle(22, -11, 32),
			new Circle(-17, 21, 36),
			new ICircle(42, -6, 15),
			new ICircle(47, 5, 15),
			new ICircle(47, 17, 15)]
		];

		this.headNoun = "󱤑";//jan
		this.name = currentLanguage === "tp" ? "󱤑󱦐󱦗󱤮󱤏󱥔󱤈󱦑" : "Lipa";//jan Lipa

		this.selectScreenSizeOffset = 90;
		this.selectScreenRotation = -PI / 32;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.janLipaSheet);

		this.states.DASH_FAIL = new State("dash fail", "neutral action", "BASE");
		this.states.DASH_FAIL_ACTIONS = [];

		this.states.RN_ACTIONS = ["power dash", "NN"];

		this.states.RNL = new State("RNL", "RN", "attack");
		this.states.RNL_ACTIONS = ["power dash"];
		this.states.RNS = new State("RNS", "RN", "attack");
		this.states.RNS_ACTIONS = ["power dash"];
		this.states.RNPL = new State("RNPL", "RN", "attack");
		this.states.RNPL_ACTIONS = ["power dash"];
		this.states.RNPS = new State("RNPS", "RN", "attack");
		this.states.RNPS_ACTIONS = ["power dash"];

		this.states.HITSTUN = State.copyState(State.HITSTUN).removeTag("BASE");

		this.states.DASH_CANCEL = State.copyState(State.DASH_CANCEL).removeTag("rotateable");
		this.states.SL = State.copyState(State.SL).addTag("rotateable");
		this.states.LL = State.copyState(State.LL).addTag("rotateable");
		this.states.SS = State.copyState(State.SS).addTag("rotateable");
		this.states.LS = State.copyState(State.LS).addTag("rotateable");
		this.states.NPL = State.copyState(State.NPL).addTag("rotateable");
		this.states.SPL = State.copyState(State.SPL).addTag("rotateable");
		this.states.LN_ACTIONS = [];
		this.states.LNF = State.copyState(State.LN).setName("LNF").addTag("BASE");

        this.collideRadius = 55;

		this.movementSpeed = 1.9;
		this.forwardSpeedBoost = 0.7;

		this.OOBBlockFrame = 6;

        this.turnSpeed = 0.015;

        this.dash.speed = 13;
        this.dash.frames = 20;
        this.dash.invFirstFrame = this.dash.frames - 4;
        this.dash.turnSpeedBoost = 0.1;
		this.dash.neutralBoost = 0;
		this.dash.backPenalty = 1;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 2;
		this.dash.frictionFrame
		this.dash.regularFriction = 0.86;
		this.dash.regularFrictionFrame = this.dash.frames - 10;

        this.dash.iFrames = 13;
        this.dash.invTo = ["attack"];
        this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 13;
		this.dash.grabCancelFrame = this.dash.frames - 18;
		this.dash.blockCancelFrame = this.dash.frames - 17;

		this.dash.comboDashFrame = this.dash.frames - 8;
		this.dash.combos = 0;
		this.dash.maxCombos = 5;

		this.dash.cancelIFrames = 6;
		this.dash.cancelSpeed = 18;
		this.dash.cancelFrames = 20;
		this.dash.cancelDecay = 0.8;
		this.dash.cancelFrame = this.dash.frames - 3;
		this.dash.cancelLastFrame = this.dash.frames - 5;
		this.dash.cancelComboDashFrame = this.dash.cancelFrames - 1;
		this.dash.cancelAttackCancelFrame = this.dash.cancelFrames - 9;

		this.weight = 1.2;

		this.health = 750;
		this.maxHealth = 750;

		this.arrowOffset = 45;
		this.arrowOffsetBack = -25;

		this.dashFailFrames = 32;
		this.dashFailIFrames = 18;
		this.dashFailIFrameStart = this.dashFailFrames - 6;

		this.dashCancelRegen = 0;
		this.dashCancelRegenFull = 130;
		this.dashPunishModifier = 2.2;
		this.dashCancelsMax = 6;
		this.dashCancels = this.dashCancelsMax;
		this.dashDisplays = [];
		for (let i = 0; i < this.dashCancelsMax; i++) {
			this.dashDisplays.push(Spritesheet.copy(assetManager.spritesheets.tawaEnKama));
			this.dashDisplays[i].currentFrame = i % 6;
		}

		this.rightHanded = true;

		this.chargeNN = 0;
		this.chargeNNMax = 55;

		this.rnEndLag = 14;
		this.rnMaxAttacks = 5;
		this.rnAttacksLeft = this.rnMaxAttacks;
	}

	setAttacks() {
		super.setAttacks();//Keep this if you don't define every one of the attacks
		this.DASH_ATTACK = LipaDashAttack;

		this.NL = LipaNL;
		this.SL = LipaSL;
		this.RL = LipaRL;
		this.LL = LipaLL;
		this.ML = LipaML;

		this.NS = LipaNS;
		this.SS = LipaSS;
		this.RS = LipaRS;
		this.LS = LipaLS;
		this.MS = LipaMS;

		this.NPL = LipaNPL;
		this.SPL = LipaSPL;
		this.RPL = LipaRPL;
		this.LPL = LipaLPL;
		this.MPL = LipaMPL;

		this.NPS = LipaNPS;
		this.SPS = LipaSPS;
		this.RPS = LipaRPS;
		this.LPS = LipaLPS;
		this.MPS = LipaMPS;

		this.NN = LipaNN;
		this.SN = LipaSN;
		this.RN = LipaRN;
		this.LN = LipaLN;
		this.MN = LipaMN;
	}

	generalLogic() {
		if (State.stateIsTag(this.currentState, "rotateable")) {
			this.dir.changeValue((this.rightHanded ? -1 : 1) * PI / 1024);
		}
		if (this.currentState.name === "dash fail") {
			if (this.actionLag === this.dashFailIFrameStart) {
				this.iFrames = this.dashFailIFrames;
				this.invTo = ["attack", "grab"];
			}
			this.attackEndable();
		}
		if (this.dashCancels < this.dashCancelsMax) {
			if (this.actionLag <= 0)
				this.dashCancelRegen++;
			if (this.dashCancelRegen >= this.dashCancelRegenFull * (this.dashCancels <= 0 ? this.dashPunishModifier : 1)) {
				this.dashCancelRegen = 0;
				if (this.dashCancels <= 0)
					this.dashCancels += this.dashCancelsMax - 1;
				this.dashCancels++;
			}
		} else {
			this.dashCancelRegen = 0;
		}
		if (this.actionLag <= 0 && State.stateIsTag(this.currentState, "RN") && this.currentState.name !== "RN") {
			this.setStateIgnore(this.states.RN, this.states.RN_ACTIONS);
			this.actionLag = this.rnEndLag;
			this.sheet.setAnimation("RN");
		}
		if (this.currentState.name === "LNF") {
			this.dx *= 0.9;
			this.dy *= 0.9;
			this.attackEndable();
		}
	}

	/**
	 * @override
	 * @param {Graphics} g
	 */
	draw(g) {
		g.push();
		g.translate(this.x, this.y);
		g.rotate(this.dir.value - PI / 2);
		g.scale(this.rightHanded?1:-1, 1);

		//g.image(assetManager.images.janTP, -80, -80, 160, 160);

		//this.sheet.draw(g, round(frameCount / 4) % 15, -80, -80, 160, 160);

		let rumbleX = 0;
		let rumbleY = 0;
		if (this.stunFrames > 0 && this.hitStun > 0 && this.currentState.name !== "block") {
			rumbleX = random(-3, 3);
			rumbleY = random(-3, 3);
		}

		this.sheet.draw(g, -160 + rumbleX, -120 + rumbleY, 320, 320);

		g.pop();

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

	drawExtraHUD(g, i, x, y) {
		let leftX = 512 * 0.12 + 512 * 0.72 * i - 35 + (this.dashCancelsMax - 6) * 0.035;

		g.push();
		g.translate(x, y);

		for (let u in this.dashDisplays) {
			this.dashDisplays[u].draw(g, leftX + 15 * u + (this.dashCancelsMax - 6) * 15, 65, 15, 15);
		}
		if (this.dashCancels === 0) {
			g.stroke(196, 19, 41, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + this.dashCancelsMax * 15 * (this.dashCancelRegenFull * this.dashPunishModifier - this.dashCancelRegen) / this.dashCancelRegenFull / this.dashPunishModifier, 85);
		} else if (this.chargeNN > 0) {
			g.stroke(210, 210, 210, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + this.dashCancelsMax * 15 * this.chargeNN / this.chargeNNMax, 85);
		}

		if (State.stateIsTag(this.currentState, "RN") || this.currentState.name === "RN") {
			g.textFont(assetManager.fonts.asuki);
			let numberText = ["󱤂", "󱥳", "󱥮", "󱥮󱥳", "󱥮󱥮", "󱤭"];
			g.stroke(0, 0, 14);
			g.strokeWeight(2);
			g.fill(210, 210, 210);
			if (this.rnAttacksLeft <= 0) {
				g.stroke(50, 0, 14);
				g.fill(210, 50, 50);
			}
			g.textSize(30);
			g.text(numberText[this.rnAttacksLeft], leftX + 90 - 125 * i, 85);
		}

		g.pop();
	}

	startDash() {
		if (!this.chargingNN) {
			if ((this.controls.dashCancelHold && !this.controls.pressed("dash") && this.currentState.name === "dash" && this.actionLag >= this.dash.cancelFrame) || (!this.controls.dashCancelHold && this.controls.clicked("dash"))) {
				if (this.buffer.contains(this.states.DASH) || this.currentState.name === "dash") {
					//let currentAngle = new Angle().setFromPoint(this.dx, this.dy);
					//let angleDist = Angle.distance(this.sinpin, currentAngle);

					//if(angleDist > 3 * PI / 8)//This would prevent sidestepping forwards
					this.startDashCancel();
				}
			}
			if (this.controls.clicked("dash") && this.dashCancels > 0) {
				let tempAngle = this.dir.value;
				let run = true;
				let boost = this.dash.neutralBoost;
				let angleDif = Angle.distance(this.dir, this.controls.angle(0));
				let penalty = max(0, angleDif - PI / 2) * 2 / PI * this.dash.backPenalty;
				this.dash.currentPenalty = 0;
				if (this.controls.joystickPressed(0)) {
					tempAngle = this.controls.angle(0).value;
					run = false;
					boost = 0;
					this.dash.currentPenalty = penalty;
				}

				let bufferInfo = {//Create the buffer.info in order to send with the buffered input
					angle: tempAngle,//The angle to dash towards
					run: run,//Whether to run or not
					boost: boost,
					penalty: this.dash.currentPenalty
				};

				this.buffer.bufferStateChange(this.states.DASH, this.states.DASH_ACTIONS, bufferInfo, () => {
					this.actionLag = this.dash.frames;
					this.dx = cos(this.buffer.info.angle) * (this.dash.speed + this.buffer.info.boost - this.buffer.info.penalty);
					this.dy = sin(this.buffer.info.angle) * (this.dash.speed + this.buffer.info.boost - this.buffer.info.penalty);

					this.sheet.setAnimation("Dash");

					this.iFrames = 0;

					this.dashCancels--;
					if (this.dashCancels <= 0) {
						this.dashCancelRegen = 0;
					}
				});
			} else if (this.controls.clicked("dash")) {
				this.buffer.bufferStateChange(this.states.DASH_FAIL, this.states.DASH_FAIL_ACTIONS, {}, () => {
					this.actionLag = this.dashFailFrames;
					this.dx = 0;
					this.dy = 0;

					this.sheet.setAnimation("Dash Fail");
				});
			}
		}
	}

	startRL() {
		if ((this.controls.clicked("lili") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("lili") && this.pressedLeft() && !this.rightHanded)) {
			
			let bufferInfo = this.RL.bufferInfo ? this.RL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RL, this.states.RL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("RL");

				let attack = this.RL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.RL.startAttack)
					this.RL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startLL() {
		if ((this.controls.clicked("lili") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("lili") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LL.bufferInfo ? this.LL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.LL, this.states.LL_ACTIONS, bufferInfo, () => {
				this.sheet.setAnimation("LL");

				let attack = this.LL.createAttack(this);
				this.addCurrentAttack(attack);

				attack.rotateTo(this.dir);

				this.world.addAttack(attack);

				if (this.LL.startAttack)
					this.LL.startAttack(this, attack, bufferInfo);

				this.setActionLag(attack);
			});
		}
	}

	startRS() {
		if ((this.controls.clicked("suli") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("suli") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RS.bufferInfo ? this.RS.bufferInfo() : {};

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

	startLS() {
		if ((this.controls.clicked("suli") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("suli") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LS.bufferInfo ? this.LS.bufferInfo() : {};

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

	startRPL() {
		if ((this.controls.clicked("pokaLili") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("pokaLili") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RPL.bufferInfo ? this.RPL.bufferInfo() : {};

			this.buffer.bufferStateChange(this.states.RPL, this.states.RL_ACTIONS, bufferInfo, () => {
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
	}

	startLPL() {
		if ((this.controls.clicked("pokaLili") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("pokaLili") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LPL.bufferInfo ? this.LPL.bufferInfo() : {};

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
	}

	startRPS() {
		if ((this.controls.clicked("pokaSuli") && this.pressedRight() && this.rightHanded) || (this.controls.clicked("pokaSuli") && this.pressedLeft() && !this.rightHanded)) {

			let bufferInfo = this.RPS.bufferInfo ? this.RPS.bufferInfo() : {};

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
	}

	startLPS() {
		if ((this.controls.clicked("pokaSuli") && this.pressedLeft() && this.rightHanded) || (this.controls.clicked("pokaSuli") && this.pressedRight() && !this.rightHanded)) {

			let bufferInfo = this.LPS.bufferInfo ? this.LPS.bufferInfo() : {};

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
	}

	startNN() {
		if (!this.controls.pressed("nasa"))
			this.chargingNN = false;
		if (this.controls.clicked("nasa") && this.pressedNeutral()) {
			this.chargingNN = true;
			if (this.canChangeState(this.states.NN))
				this.chargeNN = 0;
		}
		if (this.dashCancels === 0)
			this.chargingNN = false;
		if (this.chargingNN/* && this.canChangeState(this.states.NN)*/)
			this.chargeNN++;
		if (this.chargeNN >= this.chargeNNMax) {
			if (this.controls.pressed("nasa")) {
				this.chargeNN = this.chargeNNMax;
			} else {
				this.chargeNN--;

				let bufferInfo = this.NN.bufferInfo ? this.NN.bufferInfo() : {};

				this.buffer.bufferStateChange(this.states.NN, this.states.NN_ACTIONS, bufferInfo, () => {
					this.sheet.setAnimation("NN");
					this.chargeNN = 0;

					let attack = this.NN.createAttack(this);
					this.addCurrentAttack(attack);

					attack.rotateTo(this.dir);

					this.world.addAttack(attack);

					this.setActionLag(attack);

					if (this.NN.startAttack)
						this.NN.startAttack(this, attack, bufferInfo);
				});
			}
		}
	}

	startRN() {
		if (this.controls.clicked("nasa") && (this.pressedRight() && this.rightHanded || this.pressedLeft() && !this.rightHanded)) {

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

	startLN() {
		if (this.controls.clicked("nasa") && (this.pressedLeft() && this.rightHanded || this.pressedRight() && !this.rightHanded)) {

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

	copyHurtbox(target, rollbacking) {
		for (let i in target) {
			this.circles.push(new Circle(target[i].x, target[i].y, target[i].diameter));
			if (target[i].intangible)
				this.circles[i].intangible = target[i].intangible;
			if (!this.rightHanded && !rollbacking)
				this.circles[i].y *= -1;
		}
	}

	charSpecificReset() {
		this.dashCancels = this.dashCancelsMax;
		this.dashCancelRegen = 0;
		this.chargeNN = 0;
		this.charging = false;
	}

	charSpecificFullReset() {
		this.rightHanded = true;
	}

	runSheets() {
		if (this.stunFrames <= 0) {
			this.sheet.run();
		}

		for (let i = 0; i < this.dashDisplays.length; i++) {
			if (this.dashDisplays[i].currentAnimation === "Full" && this.dashCancels <= i) {
				this.dashDisplays[i].currentFrame += 6;
				this.dashDisplays[i].currentAnimation = "Empty";
			}
			if (this.dashDisplays[i].currentAnimation === "Empty" && this.dashCancels > i) {
				this.dashDisplays[i].currentFrame -= 6;
				this.dashDisplays[i].currentAnimation = "Full";
			}
			if (this.dashCancels <= 0 && this.dashDisplays[i].currentAnimation !== "Ike") {
				if (this.dashDisplays[i].currentAnimation === "Full")
					this.dashDisplays[i].currentFrame += 12;
				if (this.dashDisplays[i].currentAnimation === "Empty")
					this.dashDisplays[i].currentFrame += 6;
				this.dashDisplays[i].currentAnimation = "Ike";
			}
			if (this.dashCancels > 0 && this.dashDisplays[i].currentAnimation === "Ike") {
				this.dashDisplays[i].currentFrame -= 6;
				this.dashDisplays[i].currentAnimation = "Empty";
			}

			this.dashDisplays[i].run();
		}
	}

	copyAssets() {
		this.sheet = Spritesheet.copy(assetManager.spritesheets.janLipaSheet);
		this.dashDisplays = [];
		for (let i = 0; i < this.dashCancelsMax; i++) {
			this.dashDisplays.push(Spritesheet.copy(assetManager.spritesheets.tawaEnKama));
			this.dashDisplays[i].currentFrame = i % 6;
		}
	}

	getShouldLoadSpritesheets() {
		return ["janLipaSheet", "tawaEnKama"];
	}
	getShouldLoadSounds() {
		return ["spearHit", "spearBlock"];
	}

	static getMenuImage() {
		return assetManager.images.janLipaMenuImage;
	}

	static addAssets() {
		assetManager.addImage("resources/jan_LipaAWEN.png", "janLipaMenuImage", true);

		assetManager.addSpritesheet("resources/jan_Lipa.png", "janLipaSheet", "//");

		assetManager.addSpritesheet("resources/TawaEnKama.png", "tawaEnKama", "//");

		assetManager.addSound("resources/sfx/spearHit.wav", "spearHit", {
			volume: 0.8
		});

		assetManager.addSound("resources/sfx/spearBlock.wav", "spearBlock", {
			volume: 0.8
		});
	}

	serialize() {
		let copy = (({
			hurtboxes,
			headNoun,
			name,
			selectScreenSizeOffset,
			selectScreenYOffset,
			selectScreenRotation,
			world,
			collideRadius,
			deathChanceThreshold,
			OOBBlockFrame,
			//dash,
			powerDash,
			states,
			currentState,
			ifthen,
			ifelse,
			cancelActions,
			actions,
			parryLeniency,
			controls,
			currentAttackReferences,
			mostRecentAttackReference,
			targetPlayer,
			arrowOffset,
			arrowOffsetBack,
			lipuDamage,
			lipuHeavyDamage,
			lipuTickRate,
			lipuSuliFrames,
			lipuLiliFrames,
			edgeCalculationLeniency,
			DASH_ATTACK,
			NL,
			SL,
			RL,
			LL,
			ML,
			NS,
			SS,
			RS,
			LS,
			MS,
			NPL,
			SPL,
			RPL,
			LPL,
			MPL,
			NPS,
			SPS,
			RPS,
			LPS,
			MPS,
			NN,
			SN,
			RN,
			LN,
			MN,
			currentlyPlaying,
			dashDisplays,
			...o
		}) => defaultSerialize(o))(this);

		this.serializeCopyHelp(copy);

		return copy;
	}

	deserialize(obj) {
		defaultCopyValues(this, obj, ["currentState", "actions", "cancelActions", "controls", "currentAttackReferences", "mostRecentAttackReference", "frameDataRef", "dashDisplays"]);
		
		this.deserializeHelp(obj);
	}
}

class LipaDashAttack extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "dash attack";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "NN", "dash"];

		let sour1 = new PriorityCircle(0, 10, 160, 0).setVelocity(0.1, 0.02);
		let sweet1 = new PriorityCircle(0, 10, 210, 1).setVelocity(0.1, 0.02);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(40, -20, 8).setProration(-1.5, 2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 1, 0.5).setHitStun(25, 18).setStunFrames(15).setWallPushback(1, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1).setAngleTypes("vel", "direct");
		let sweet = new AttackProperties().setDamage(45, -22, 8).setProration(-1.5, 2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 1, 0.5).setHitStun(26, 18).setStunFrames(15).setWallPushback(1, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1).setAngleTypes("vel", "direct");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(13).setActiveF(6).setEndF(20).reflectHitboxes(player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 10) {
			this.player.iFrames = 9;
			this.player.invTo = ["attack"];
		}
		if (this.getStartupF() === 1) {
			this.player.rightHanded = !this.player.rightHanded;
		}
	}

	hitConfirmSetFrames() {
		this.player.dx *= 0.2;
		this.player.dy *= 0.2;
		if (this.targetPlayer) {
			this.player.dx += this.targetPlayer.dx * 0.8;
			this.player.dy += this.targetPlayer.dy * 0.8;
		}
	}
}

class LipaNL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "NPL", "NPS", "SPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(0, 32, 20, 0).setVelocity(7, -2);
		let ultraSour2 = new PriorityCircle(-20, 38, 20, 0).setVelocity(7, -2);
		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(7, -2);
		let sour1 = new PriorityCircle(20, 25, 30, 1).setVelocity(7, -2);
		let sour2 = new PriorityCircle(36, 20, 30, 1).setVelocity(7.5, -2);
		let sour3 = new PriorityCircle(54, 15, 30, 1).setVelocity(8, -1);
		//let sour4 = new PriorityCircle(71, 10, 25, 1).setVelocity(8, 0);
		let sweet1 = new PriorityCircle(71, 15, 20, 2).setVelocity(11, 0);
		let sweet2 = new PriorityCircle(71, 5, 20, 2).setVelocity(11, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(12).setProration(-0.5, 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 20).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(13).setProration(-0.8, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(5, 0.1).setLaunchDampening(0.5).setHitStun(30, 22).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(16).setProration(-0.9, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(32, 25).setStunFrames(13).setWallPushback(5).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(9).setActiveF(4).setEndF(19).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	logic() {
		this.player.turnSpeedModifier = 0.05;
		this.player.dir.changeValue((this.player.rightHanded ? -1 : 1) * PI / 256);
	}
}

class LipaSL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SL";
	}

	static createAttack(player) {
		let cancelOptions = ["NL", "NS", "NPL", "NPS", "SPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(20, 45, 20, 0).setVelocity(0.1, 0.05);
		let ultraSour2 = new PriorityCircle(30, 45, 20, 0).setVelocity(0.1, 0.05);
		let ultraSour3 = new PriorityCircle(40, 45, 20, 0).setVelocity(0.1, 0.05);
		let sour1 = new PriorityCircle(60, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour2 = new PriorityCircle(85, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour3 = new PriorityCircle(110, 45, 30, 1).setVelocity(0.1, 0.05);
		let sour4 = new PriorityCircle(125, 45, 25, 1).setVelocity(0.1, 0.05);
		let sweet1 = new PriorityCircle(160, 50, 30, 2).setVelocity(0.1, 0.05);
		let sweet2 = new PriorityCircle(160, 40, 30, 2).setVelocity(0.1, 0.05);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sour4, sweet1, sweet2];
		
		let ultraSour = new AttackProperties().setDamage(28).setProration(1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 1).setHitStun(29, 8).setStunFrames(14).setWallPushback(15, 8).setCancelWait(0, 8).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.5).setHitStun(31, 9).setStunFrames(14).setWallPushback(15, 8).setCancelWait(0, 8).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(33).setProration(0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setHitStun(34, 10).setStunFrames(14).setWallPushback(6, 4).setCancelWait(0, 8).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(24).setActiveF(12).setEndF(24).setRotateable().reflectHitboxes(!player.rightHanded);
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
		if (this.getStartupF() > 0) {
			this.player.dir.changeValue(this.player.rightHanded?-0.005:0.005);
		}
		if (this.getStartupF() === 5) {
			let speed = 5;
			this.player.dx += speed * this.player.dir.getX();
			this.player.dy += speed * this.player.dir.getY();
		} else if (this.getActiveF() > 0 && this.startupOver()) {
			let speed = dist(0, 0, this.player.dx, this.player.dy);
			this.player.dx = speed * this.player.dir.getX();
			this.player.dy = speed * this.player.dir.getY();
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class LipaRL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RL";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(45).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1, 0.1).setHitStun(29, 12).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(48).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1, 0.1).setHitStun(31, 13).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(50).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(10, 0.1, 0.1).setHitStun(34, 14).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(13).setActiveF(6).setEndF(28).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);
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

class LipaLL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LL";
	}

	static createAttack(player) {
		let cancelOptions = ["LL", "dash"];

		let sweet1 = new PriorityCircle(50, -5, 50, 0).setVelocity(1, -0.5);
		let sweet2 = new PriorityCircle(35, -38, 50, 0).setVelocity(1, -0.5);
		let sweet3 = new PriorityCircle(46, -17, 60, 0).setVelocity(1, -0.5);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(15).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(0.3, 0.1, 2).setHitStun(27, 20).setStunFrames(10).setWallPushback(10, 4).setLaunchDampening(8, 7);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(8).setActiveF(3).setEndF(17).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.5);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.hitPlayerBool && this.getEndF() < 10) {
			this.player.dir.changeValue(this.player.rightHanded ? -0.05 : 0.05);
		}
	}
}

class LipaML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "RN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(4, 0.1).setHitStun(29, 10).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(16).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(4, 0.1).setHitStun(31, 10).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(18).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(4, 0.1).setHitStun(34, 11).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(10).setActiveF(12).setEndF(16).setRotateable().reflectHitboxes(!player.rightHanded);
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
		if (this.getFromStartupF() === 4) {
			let angle = new Angle(this.player.dir.value + PI);
			let speed = 4;
			this.player.dx += angle.getX() * speed;
			this.player.dy += angle.getY() * speed;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.85;
			this.player.dy *= 0.85;
		}
		if (this.getStartupF() > 4) {
			this.player.dir.value += (this.player.rightHanded ? -1 : 1) * 0.1;
		}
	}
}

class LipaNS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NS";
	}

	static createAttack(player) {
		let cancelOptions = ["RL", "MS", "NPS", "SPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(20, 32, 20, 0).setVelocity(11, -2);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setVelocity(11, -2);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setVelocity(11, -2);
		let sour1 = new PriorityCircle(40, 25, 30, 1).setVelocity(11, -2);
		let sour2 = new PriorityCircle(56, 20, 30, 1).setVelocity(11.5, -2);
		let sour3 = new PriorityCircle(74, 15, 30, 1).setVelocity(12, -1);
		//let sour4 = new PriorityCircle(91, 10, 25, 1).setVelocity(12, 0);
		let sweet1 = new PriorityCircle(91, 15, 20, 2).setVelocity(15, 0);
		let sweet2 = new PriorityCircle(91, 5, 20, 2).setVelocity(15, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(20).setProration(-0.6, 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 19).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(21).setProration(-0.8, 0.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(6, 0.1).setLaunchDampening(0.5).setHitStun(30, 20).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(25).setProration(-0.9, 0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(4, 0.1).setLaunchDampening(0.2).setHitStun(32, 23).setStunFrames(13).setWallPushback(5).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];
		let hitCancelOptions = ["lili", "NS", "RS", "LS", "MS", "poka lili", "poka suli", "NN", "RN", "LN", "MN"];

		let sweet1 = new PriorityCircle(35, 25, 50, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(35, -25, 50, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(45, 0, 60, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(25).setProration(-0.5, 2.3).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 0.2).setHitStun(24, 12).setStunFrames(13).setWallPushback(15, 10).setNormalizeHitStun();
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(22).setActiveF(12).setEndF(19).setRotateable().reflectHitboxes(!player.rightHanded);
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
		if (this.getStartupF() > 0) {
			this.player.turnSpeedModifier = 0.05;
		} else {
			this.player.turnSpeedModifier = -0.3;
		}
		if (this.getStartupF() === 1) {
			let speed = 15;
			this.player.dx *= 0.4;
			this.player.dy *= 0.4;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.hitPlayerBool || this.getActiveF() <= 0) {
			this.player.dx *= 0.5;
			this.player.dy *= 0.5;
		}
	}
}

class LipaRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(20, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(20, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(20, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(65).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(29, 29).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock).setRotateSlowDown(0.5, 300).setRotateVel(-5, -5, true);
		let sour = new AttackProperties().setDamage(68).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(31, 31).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock).setRotateSlowDown(0.5, 300).setRotateVel(-5, -5, true);
		let sweet = new AttackProperties().setDamage(70).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(34, 34).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock).setRotateSlowDown(0.5, 300).setRotateVel(-5, -5, true);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(18).setActiveF(6).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getFromStartupF() === 3) {
			let angle = this.player.dir.value + (PI / 1.7) * (this.player.rightHanded ? -1 : 1);
			this.player.dx += cos(angle) * 3;
			this.player.dy += sin(angle) * 3;
		}
		if (this.getFromStartupF() < 6) {
			this.player.dir.changeValue(0.05 * sqrt(6 - this.getFromStartupF()) * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";
	}

	static createAttack(player) {
		let cancelOptions = ["LS", "NN", "dash"];

		let sweet1 = new PriorityCircle(50, -5, 50, 0).setVelocity(1, -0.5);
		let sweet2 = new PriorityCircle(35, -38, 50, 0).setVelocity(1, -0.5);
		let sweet3 = new PriorityCircle(46, -17, 60, 0).setVelocity(1, -0.5);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(25).setProration(1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(1, 2, 2).setHitStun(27, 18).setStunFrames(10).setWallPushback(15, 10).setLaunchDampening(10, 13);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(15).setActiveF(3).setEndF(20).setRotateable().reflectHitboxes(!player.rightHanded);
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
		if (this.getFromStartupF() === 4) {
			let speed = 5;
			this.player.dx += this.player.dir.getX() * speed;
			this.player.dy += this.player.dir.getY() * speed;
		}
		if (this.getFromStartupF() > 8) {
			this.player.dx *= 0.75;
			this.player.dy *= 0.75;
		}
	}
}

class LipaMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";
	}

	static createAttack(player) {
		let cancelOptions = ["SPS", "RPS", "NN", "RN", "dash"];

		let ultraSour1 = new PriorityCircle(60, 22, 30, 0).setVelocity(0.1, 0);
		let ultraSour2 = new PriorityCircle(30, 28, 30, 0).setVelocity(0.1, 0);
		let ultraSour3 = new PriorityCircle(0, 35, 30, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(85, 21, 40, 1).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(100, 20, 40, 1).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(120, 15, 40, 1).setVelocity(0.1, 0);
		//let sour4 = new PriorityCircle(91, 10, 25, 1).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(151, 20, 30, 2).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(151, 10, 30, 2).setVelocity(0.1, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(33).setProration(1, -2.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, -5).setHitStun(29, 12).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(36).setProration(1, -2.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, -7).setHitStun(31, 12).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(36).setProration(1, -2.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, -8).setHitStun(34, 13).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(24).setActiveF(4).setEndF(24).reflectHitboxes(!player.rightHanded);
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

	}
}

class LipaNPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "RPL", "LPL", "NPS", "SPS", "LPS", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(7, 0);
		let ultraSour2 = new PriorityCircle(-21, 43, 20, 0).setVelocity(7, 0);
		let ultraSour1 = new PriorityCircle(-2, 41, 20, 0).setVelocity(7, 0);
		let sour1 = new PriorityCircle(17, 39, 30, 1).setVelocity(7, 0);
		let sour2 = new PriorityCircle(36, 36, 30, 1).setVelocity(7.5, 0);
		let sour3 = new PriorityCircle(55, 33, 30, 1).setVelocity(8, 0);
		//let sour4 = new PriorityCircle(70, 30, 25, 1).setVelocity(8, 0);
		let sweet1 = new PriorityCircle(74, 35, 20, 2).setVelocity(11, 0);
		let sweet2 = new PriorityCircle(74, 25, 20, 2).setVelocity(11, 0);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(15).setProration(-0.5, 1.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 14).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(16).setProration(-0.8, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(5, 0.1).setLaunchDampening(0.5).setHitStun(30, 15).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(21).setProration(-0.9, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(32, 20).setStunFrames(13).setWallPushback(5).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(11).setActiveF(4).setEndF(21).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}

	logic() {
		this.player.walkMovement(0.5);
	}
}

class LipaSPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPL";
	}

	static createAttack(player) {
		let cancelOptions = ["NS", "NPL", "RPL", "NPS", "SPS", "RPS", "NN", "MN", "dash"];

		let ultraSour1 = new PriorityCircle(-48, 36, 25, 0).setVelocity(0.1, 0.03);
		let ultraSour2 = new PriorityCircle(-20, 42, 25, 0).setVelocity(0.1, 0.03);
		let ultraSour3 = new PriorityCircle(7, 46, 25, 0).setVelocity(0.1, 0.03);
		let sour1 = new PriorityCircle(35, 52, 35, 1).setVelocity(0.1, 0.03);
		let sour2 = new PriorityCircle(63, 58, 35, 1).setVelocity(0.1, 0.03);
		let sour3 = new PriorityCircle(90, 65, 35, 1).setVelocity(0.1, 0.03);
		let sweet1 = new PriorityCircle(125, 70, 38, 2).setVelocity(0.1, 0.03);

		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1];

		let ultraSour = new AttackProperties().setDamage(27).setProration(-0.5, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(1).setHitStun(26, 24).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(-0.6, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 8).setLaunch(3, 0.1).setLaunchDampening(0.5).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(38).setProration(-0.7, 1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 8).setLaunch(1, 0.1).setLaunchDampening(0.2).setHitStun(30, 27).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(3).setEndF(14).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.25);
	}

	logic() {
		this.player.turnSpeedModifier = -1;
		if (this.getFromStartupF() === 13) {
			let angle = new Angle(this.dir.value).changeValue(PI / 5 * this.player.rightHanded ? 1: -1);
			this.player.dx += angle.getX() * 8;
			this.player.dy += angle.getY() * 8;
		}
		if (this.getFromStartupF() === 5) {
			let angle = new Angle(this.dir.value).changeValue(PI / 5 * this.player.rightHanded ? 1: -1);
			this.player.dx += angle.getX() * 8;
			this.player.dy += angle.getY() * 8;
		}
		if (this.getFromStartupF() > 5 && this.currentlyStartup()) {
			this.player.dx *= 0.8;
			this.player.dy *= 0.8;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
			this.player.turnSpeedModifier = 0.2;
			this.player.dir.changeValue((this.player.rightHanded ? -1 : 1) * PI / 32);
		}
	}

	hitConfirmSetFrames() {
		this.player.dx *= 0.3;
		this.player.dy *= 0.3;
	}
}

class LipaRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "NL", "NS", "NPL", "LPL", "NPS", "SPS", "LPS", "NN", "MN"];

		let sour1 = new PriorityCircle(40, 40, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(40, 40, 160, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(15).setProration(-1.1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7.5, 3.5).setLaunchDampening(0.5).setHitStun(26, 17).setStunFrames(13).setWallPushback(6).setChip(0.1);
		let sweet = new AttackProperties().setDamage(20).setProration(-1.5, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(6.5, 2.5).setLaunchDampening(0.2).setHitStun(26, 18).setStunFrames(13).setWallPushback(5).setChip(0.1);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(18).setActiveF(12).setEndF(28).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaLPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";
	}

	static createAttack(player) {
		let cancelOptions = ["LPS", "NN", "dash"];

		let sweet1 = new PriorityCircle(90, -10, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet2 = new PriorityCircle(85, 0, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet3 = new PriorityCircle(60, 5, 20, 0).setVelocity(0.1, -0.2);
		let sweet4 = new PriorityCircle(80, 40, 40, 0).setVelocity(0.1, -0.2);
		
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(45, 15, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(20, 20).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(4);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(20).setActiveF(6).setEndF(6).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue((0.8 * this.getActiveF() / 6) ** 2 * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";
	}

	static createAttack(player) {
		let cancelOptions = ["NPL", "SPL", "RPL", "NPS", "SPS", "NN", "dash"];

		let sour1 = new PriorityCircle(67, 15, 60, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(10, 68, 59, 0).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(48, 48, 81, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(-47, 81, 36, 1).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(58, 58, 107, 1).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(5, 87, 80, 1).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(86, 10, 81, 1).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(-27, 90, 50, 1).setVelocity(0.1, 0);
		let sweet6 = new PriorityCircle(39, 86, 83, 1).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(81, 39, 88, 1).setVelocity(0.1, 0);
		let sweet8 = new PriorityCircle(94, -35, 32, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sour3, sweet1, sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8];

		let sour = new AttackProperties().setDamage(30).setProration(-0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + 4.5 * PI / 8).setLaunch(9, 1, 1.5).setHitStun(27, 25).setStunFrames(10).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(35).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + 4.5 * PI / 8).setLaunch(9, 1, 1.5).setHitStun(28, 25).setStunFrames(10).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(18).reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaNPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";
	}

	static createAttack(player) {
		let cancelOptions = ["RPL", "SPS", "RPS", "LPS", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 45, 20, 0).setVelocity(16, 1);
		let ultraSour2 = new PriorityCircle(-21, 43, 20, 0).setVelocity(16, 2);
		let ultraSour1 = new PriorityCircle(-2, 41, 20, 0).setVelocity(16, 3);
		let sour1 = new PriorityCircle(17, 39, 30, 1).setVelocity(16, 4);
		let sour2 = new PriorityCircle(36, 36, 30, 1).setVelocity(16.5, 5);
		let sour3 = new PriorityCircle(55, 33, 30, 1).setVelocity(17, 6);
		//let sour4 = new PriorityCircle(70, 30, 25, 1).setVelocity(17, 6);
		let sweet1 = new PriorityCircle(74, 40, 20, 2).setVelocity(20, 7);
		let sweet2 = new PriorityCircle(74, 30, 20, 2).setVelocity(20, 7);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(20).setProration(-0.5, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 12).setLaunch(7, 0.1).setHitStun(28, 12).setStunFrames(13).setWallPushback(20).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(21).setProration(-0.8, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 12).setLaunch(6, 0.1).setHitStun(30, 13).setStunFrames(13).setWallPushback(13).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(25).setProration(-0.9, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 12).setLaunch(5, 0.1).setHitStun(32, 18).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(21).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}

	logic() {
		this.player.walkMovement(0.3);
	}
}

class LipaSPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];

		let sweet1 = new PriorityCircle(130, 50, 45, 0).setVelocity(0.1, 0).setSubVelocity(7, 2, 1.0);
		let sweet2 = new PriorityCircle(105, 41, 45, 0).setVelocity(0.1, 0).setSubVelocity(4.5, 1.8, 1.0);
		let sweet3 = new PriorityCircle(85, 34, 45, 0).setVelocity(0.1, 0).setSubVelocity(3, 1.6, 1.0);
		let sweet4 = new PriorityCircle(65, 26, 45, 0).setVelocity(0.1, 0).setSubVelocity(2, 1.4, 1.2);
		let sweet5 = new PriorityCircle(40, 18, 45, 0).setVelocity(0.1, 0).setSubVelocity(1, 1.2, 1.6);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(40, 30, 15).setProration(0, -2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(16, 5, 0.05).setHitStun(50, 20).setStunFrames(15).setWallPushback(1.5, 0.4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(24).setActiveF(16).setEndF(31).reflectHitboxes(!player.rightHanded);
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

	}
}

class LipaRPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "NL", "NS", "NPL", "LPL", "NPS", "SPS", "LPS", "NN", "MN"];

		let sour1 = new PriorityCircle(40, 40, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(40, 40, 160, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(15).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(6.5, 3.5).setLaunchDampening(0.5).setHitStun(26, 24).setStunFrames(13).setWallPushback(6).setChip(0.1);
		let sweet = new AttackProperties().setDamage(20).setProration(-1.2, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(5.5, 2.5).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(5).setChip(0.1);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(28).setActiveF(12).setEndF(14).setMulti(3, 4, 0.1).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.75);
	}
}

class LipaLPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN", "dash"];

		let sweet1 = new PriorityCircle(90, -10, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet2 = new PriorityCircle(85, 0, 30, 0).setVelocity(0.1, -0.2);//.setCircleVelocity(24, -1);
		let sweet3 = new PriorityCircle(60, 5, 20, 0).setVelocity(0.1, -0.2);
		let sweet4 = new PriorityCircle(80, 30, 40, 0).setVelocity(0.1, -0.2);
		let sweet5 = new PriorityCircle(75, 55, 30, 0).setVelocity(0.1, -0.2);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(60, 16, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(28, 25).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(5, 5);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(24).setActiveF(12).setEndF(9).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1.2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.currentlyActive()) {
			this.player.dir.changeValue((this.getActiveF() / 12 + 0.11) ** 2 * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaMPS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";
	}

	static createAttack(player) {
		let cancelOptions = ["NN"];

		let sour1 = new PriorityCircle(0, 10, 140, 0);
		let sweet1 = new PriorityCircle(0, 10, 185, 1);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(10).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 2, -0.3).setHitStun(25, 6).setStunFrames(15).setWallPushback(0.5, 2).setNormalizeHitStun().setAngleTypes("direct", "direct");
		let sweet = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 2, -0.3).setHitStun(26, 7).setStunFrames(15).setWallPushback(0.5, 2).setNormalizeHitStun().setAngleTypes("direct", "direct");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(14).setActiveF(5).setEndF(20).reflectHitboxes(player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.2);
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
		if (this.getStartupF() === 1) {
			this.player.rightHanded = !this.player.rightHanded;
		}
	}
}

class LipaSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(70, -10, 20, 0);
		let sour2 = new PriorityCircle(65, -30, 20, 0);
		let sour3 = new PriorityCircle(65, 10, 20, 0);
		let sour4 = new PriorityCircle(20, 0, 40, 0);
		let circles = [sour1, sour2, sour3, sour4];

		let sour = new AttackProperties().setDamage(55).setGrab(20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(100);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(10).setActiveF(6).setEndF(26).setRotateable().reflectHitboxes(!player.rightHanded);
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
		if (this.getStartupF() > 0 && this.player.targetPlayer) {
			let playersAngle = new Angle().setFromPoint(this.player.targetPlayer.x - this.player.x, this.player.targetPlayer.y - this.player.y);

			let compare = Angle.compare(this.player.dir, playersAngle);
			if (compare < -0.1 && this.rightHanded) {
				this.player.dir.value -= 0.15;
			}
			if (compare > 0.1 && !this.rightHanded) {
				this.player.dir.value += 0.15;
			}
		}
	}
}

class LipaNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.held = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let ultraSour1 = new PriorityCircle(0, 40, 20, 0);
		let ultraSour2 = new PriorityCircle(20, 35, 20, 0);
		let ultraSour3 = new PriorityCircle(40, 30, 20, 0);
		let sour1 = new PriorityCircle(60, 25, 30, 1);
		let sour2 = new PriorityCircle(75, 20, 30, 1);
		let sour3 = new PriorityCircle(10, 0, 75, 1);
		let sweet3 = new PriorityCircle(110, 10, 25, 2);
		let sweet1 = new PriorityCircle(125, 5, 20, 2);
		let sweet2 = new PriorityCircle(125, -5, 20, 2);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(50, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(13, 4, 0.5).setHitStun(36, 32).setStunFrames(13).setWallPushback(3).setChip(0.25);
		let sour = new AttackProperties().setDamage(58, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(13, 4, 0.5).setHitStun(37, 34).setStunFrames(13).setWallPushback(3).setChip(0.25);
		let sweet = new AttackProperties().setDamage(60, 10, 20).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(13, 4, 0.5).setHitStun(38, 35).setStunFrames(13).setWallPushback(3).setChip(0.25);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(8).setActiveF(4).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.getStartupF() > 4 && this.player.controls.joystickPressed(0)) {
			let angleDif = Angle.compare(this.player.dir, this.player.controls.angle(0));
			if (angleDif > 0)
				this.player.dir.changeValue(0.8 * min(abs(angleDif), 1));
			if (angleDif < 0)
				this.player.dir.changeValue(-0.8 * min(abs(angleDif), 1));
			for (let i in this.properties) {
				this.properties[i].setAngleValue(this.player.dir.value);
			}
		}
		if (this.getStartupF() === 4) {
			this.player.dx *= 0.2;
			this.player.dy *= 0.2;
			this.player.dx += this.player.dir.getX() * 20;
			this.player.dy += this.player.dir.getY() * 20;
		}
		if (this.getActiveF() <= 0) {
			if (!this.held || this.getEndF() < 11) {
				this.player.dx *= 0.6;
				this.player.dy *= 0.6;
			} else {
				this.player.dx *= 0.95;
				this.player.dy *= 0.95;
			}
		} else {
			this.held = this.player.controls.pressed("nasa");
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(1);
		player.startMomentumMultiplyDash(1.2);
	}
}

class LipaRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";

		this.held = 5;

		this.lastAttack = "";
		this.resetLastCounterMax = 30;
		this.resetLastCounter = 0;
	}

	static createAttack(player) {
		return new this(player).setStartupF(10).setEndF(player.rnEndLag);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;

		player.rnAttacksLeft = player.rnMaxAttacks;
	}

	draw(g) {
		g.push();
		g.translate(this.player.x, this.player.y);
		g.rotate(this.player.dir.value);
		if (!this.player.rightHanded)
			g.scale(1, -1);

		g.noStroke();
		g.fill(0, 0, 14, 120);
		if (this.player.rnAttacksLeft <= 0)
			g.fill(100, 0, 14, 120);
		let size = 35;
		if (this.getStartupF() > 1)
			size = this.getFromStartupF() * 3;
		if (this.getStartupF() <= 0)
			size = this.getEndF() * 30 / this.player.rnEndLag;

		if (this.lastAttack !== "pokaSuli")
			g.ellipse(145, 113, size, size);

		if (this.player.rnAttacksLeft > 0)
			g.fill(145, 190, 170, 120);
		if (this.lastAttack !== "suli")
			g.ellipse(175, 33, size, size);

		if (this.player.rnAttacksLeft > 0)
			g.fill(194, 195, 124, 120);
		if (this.lastAttack !== "lili")
			g.ellipse(175, -40, size, size);

		if (this.player.rnAttacksLeft > 0)
			g.fill(50, 50, 64, 120);
		if (this.lastAttack !== "pokaLili")
			g.ellipse(160, -105, size, size);

		g.pop();
	}

	logic() {
		if (this.player.currentState.name === "RN")
			this.player.walkMovement(0.2);
		if (this.lastAttack !== "" && this.resetLastCounter > 0)
			this.resetLastCounter--;
		if (this.held > 0 && !this.player.controls.held("nasa") && this.player.currentState.name === "RN")
			this.held--;
		if (this.held > 0 && this.player.controls.held("nasa"))
			this.held = 5;
		if (this.held > 0 && this.getStartupF() === 1) {
			this.setStartupF(2);
			if (this.resetLastCounter <= 0)
				this.lastAttack = "";
			if (this.player.currentState.name === "RN") {
				this.player.actionLag++;
				if (this.player.rnAttacksLeft > 0) {
					if (this.player.controls.pressed("lili") && this.lastAttack !== "lili") {
						this.createLili();
						this.lastAttack = "lili";
						this.resetLastCounter = this.resetLastCounterMax;
						this.player.rnAttacksLeft--;
					} else if (this.player.controls.pressed("pokaLili") && this.lastAttack !== "pokaLili") {
						this.createPokaLili();
						this.lastAttack = "pokaLili";
						this.resetLastCounter = this.resetLastCounterMax;
						this.player.rnAttacksLeft--;
					} else if (this.player.controls.pressed("suli") && this.lastAttack !== "suli") {
						this.createSuli();
						this.lastAttack = "suli";
						this.resetLastCounter = this.resetLastCounterMax;
						this.player.rnAttacksLeft--;
					} else if (this.player.controls.pressed("pokaSuli") && this.lastAttack !== "pokaSuli") {
						this.createPokaSuli();
						this.lastAttack = "pokaSuli";
						this.resetLastCounter = this.resetLastCounterMax;
						this.player.rnAttacksLeft--;
					}
				}
			}
		}
	}

	createPokaLili() {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(60, -30, 45, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(80, -48, 45, 0).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(100, -65, 45, 0).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(120, -83, 45, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(160, -105, 55, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let launch = this.player.rnAttacksLeft > 1 ? 1 : 8.5;
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 6).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 6).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

		let prop = [sour, sweet];

		let attack = new Attack(this.player, circles, prop).setClashPriority(0).setStartupF(4).setActiveF(4).setEndF(3).reflectHitboxes(!this.player.rightHanded);

		this.player.addCurrentAttack(attack);
		this.player.sheet.setAnimation("RNPL");

		attack.rotateTo(this.player.dir);

		this.world.addAttack(attack);

		//startAttack

		this.player.setActionLag(attack);

		this.player.setStateIgnore(this.player.states.RNPL, this.player.states.RNPL_ACTIONS);
	}

	createLili() {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(60, 5, 45, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(85, -5, 45, 0).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(110, -15, 45, 0).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(135, -25, 45, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(175, -40, 55, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let launch = this.player.rnAttacksLeft > 1 ? 1 : 8.5;
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 9).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 9).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

		let prop = [sour, sweet];

		let attack = new Attack(this.player, circles, prop).setClashPriority(0).setStartupF(4).setActiveF(4).setEndF(3).reflectHitboxes(!this.player.rightHanded);

		this.player.addCurrentAttack(attack);
		this.player.sheet.setAnimation("RNL");

		attack.rotateTo(this.player.dir);

		this.world.addAttack(attack);

		//startAttack

		this.player.setActionLag(attack);

		this.player.setStateIgnore(this.player.states.RNL, this.player.states.RNL_ACTIONS);
	}

	createSuli() {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(40, 35, 45, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(70, 35, 45, 0).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(100, 34, 45, 0).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(130, 34, 45, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(175, 33, 55, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let launch = this.player.rnAttacksLeft > 1 ? 1 : 8.5;
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 9).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 9).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

		let prop = [sour, sweet];

		let attack = new Attack(this.player, circles, prop).setClashPriority(0).setStartupF(4).setActiveF(4).setEndF(3).reflectHitboxes(!this.player.rightHanded);

		this.player.addCurrentAttack(attack);
		this.player.sheet.setAnimation("RNS");

		attack.rotateTo(this.player.dir);

		this.world.addAttack(attack);

		//startAttack

		this.player.setActionLag(attack);

		this.player.setStateIgnore(this.player.states.RNS, this.player.states.RNS_ACTIONS);
	}

	createPokaSuli() {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(30, 55, 45, 0).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(55, 65, 45, 0).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(80, 75, 45, 0).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(105, 85, 45, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(145, 113, 55, 1).setVelocity(0.1, 0);
		let circles = [sour1, sour2, sour3, sour4, sweet1];

		let launch = this.player.rnAttacksLeft > 1 ? 1 : 8.5;
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 6).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 6).setLaunch(launch, 0.5).setHitStun(38, 36).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

		let prop = [sour, sweet];

		let attack = new Attack(this.player, circles, prop).setClashPriority(0).setStartupF(4).setActiveF(4).setEndF(3).reflectHitboxes(!this.player.rightHanded);

		this.player.addCurrentAttack(attack);
		this.player.sheet.setAnimation("RNPS");

		attack.rotateTo(this.player.dir);

		this.world.addAttack(attack);

		//startAttack

		this.player.setActionLag(attack);

		this.player.setStateIgnore(this.player.states.RNPS, this.player.states.RNPS_ACTIONS);
	}
}

class LipaLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.dist = 60 + (this.player.targetPlayer ? this.player.targetPlayer.collideRadius : 40);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(48, 12, 30, 0);
		let sweet2 = new PriorityCircle(65, 12, 30, 0);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(0).setProration(-4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(0, 0.1).setHitStun(25).setStunFrames(36).setCommandGrab().setNoComboCounter();
		let prop = [sweet];

		//sweet.setHitSound(assetManager.sounds.fanTP);
		//sweet.setBlockSound(assetManager.sounds.fanTP);

		return new this(player, circles, prop).setClashPriority(false).setStartupF(24).setActiveF(1).setEndF(21).reflectHitboxes(!player.rightHanded);
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

	logic() {
		if (this.player.targetPlayer && this.hitPlayerBool && this.getEndF() > 20) {
			this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * this.dist;
			this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * this.dist;

			if (this.player.targetPlayer.nanpaLipu > 0) {
				this.player.health = min(this.player.maxHealth, this.player.health + 3);
				this.player.targetPlayer.damageHealthAbs(3);
			}
			this.player.targetPlayer.nanpaLipu = max(0, this.player.targetPlayer.nanpaLipu - 5);
		}

		if (this.hitPlayerBool && this.getEndF() === 12) {
			let cancelOptions = [];

			let sweet1 = new PriorityCircle(60, 0, 200, 0);
			let circles = [sweet1];

			let sweet = new AttackProperties().setDamage(10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value).setLaunch(3, 0.1).setHitStun(50).setStunFrames(15).setWallPushback(50);
			let prop = [sweet];

			//sweet.setHitSound(assetManager.sounds.fanTP);
			//sweet.setBlockSound(assetManager.sounds.fanTP);

			let attack = new Attack(this.player, circles, prop).setClashPriority(false).setStartupF(0).setActiveF(2).setEndF(this.getEndF()).reflectHitboxes(!this.player.rightHanded);

			this.player.addCurrentAttack(attack);
			attack.rotateTo(this.player.dir);
			this.world.addAttack(attack);

			this.player.setActionLag(attack);
		}

		if (this.hitPlayerBool && this.getEndF() === 11) {
			this.player.addAction("power dash");
		}
	}

	hitConfirmSetFrames() {
		if (this.player.targetPlayer) {
			this.player.targetPlayer.x = this.player.x + this.player.dir.getX() * this.dist;
			this.player.targetPlayer.y = this.player.y + this.player.dir.getY() * this.dist;
			this.player.targetPlayer.dir.value = this.player.dir.value + PI;
		}
		this.player.actionLag = 39;
		this.setEndF(39);
		this.player.iFrames = 39;
		this.player.invTo = ["attack", "grab"];
		this.player.sheet.setAnimation("LNF");
		this.player.sheet.currentSubFrames += this.player.sheet.frameRate;
		this.player.setStateIgnore(this.player.states.LNF);
	}
}

class LipaMN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MN";
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(100, -50, 30, 0).setCircleVelocity(12);
		let sweet1 = new PriorityCircle(50, -20, 25, 1).setCircleVelocity(12);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(61).setProration(1, -1).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(5, 0.1).setHitStun(45, 3).setStunFrames(15, 15).setWallPushback(40, 2);
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5, -0.5).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(5, 0.1).setHitStun(45, 3).setStunFrames(15, 15).setWallPushback(40, 2);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(13).setActiveF(11).setEndF(26).reflectHitboxes(!player.rightHanded);
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
		if (this.getActiveF() === 1) {
			this.player.rightHanded = !this.player.rightHanded;
		}
		if (this.getFromEndF() === 1 && this.hitPlayerBool) {
			this.player.addAction("lili", "suli", "poka lili", "poka suli", "nasa", "dash");
		}

		if (this.getFromStartupF() === 8) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 16;
		}
	}
}

characters.push(Lipa);