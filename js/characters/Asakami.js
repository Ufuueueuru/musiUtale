class Asakami extends Player {
	constructor() {
		super([
			new Circle(0, 0, 80),
			new ICircle(19, 52, 29),
			new ICircle(-3, -67, 31)
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
			[new Circle(1, -1, 81),
			new ICircle(16, 54, 30),
			new ICircle(-7, -67, 30)],
			[new Circle(0, -1, 81),
			new ICircle(18, 52, 31),
			new ICircle(-11, -66, 30)],
			[new Circle(0, -1, 80),
			new ICircle(24, 51, 30),
			new ICircle(-11, -65, 31)],
			[new Circle(0, -1, 81),
			new ICircle(25, 51, 29),
			new ICircle(-7, -66, 31)],
			[new Circle(1, -1, 81),
			new ICircle(16, 54, 30),
			new ICircle(-4, -66, 31)],
			[new Circle(0, 0, 80),
			new ICircle(10, 60, 32),
			new ICircle(0, -69, 30)],
			[new Circle(0, 0, 80),
			new ICircle(-1, 62, 30),
			new ICircle(5, -70, 30)],
			[new Circle(0, 0, 80),
			new ICircle(0, 61, 32),
			new ICircle(5, -69, 30)],
			[new Circle(0, 0, 80),
			new ICircle(10, 61, 32),
			new ICircle(0, -67, 32)],
			[new Circle(0, 0, 80),
			new ICircle(13, 59, 31),
			new ICircle(-4, -66, 31)]
		];

		this.hurtboxes["dash attack"] = [
			[new Circle(0, 0, 80),
			new Circle(10, 40, 20),
			new Circle(10, -40, 20)]
		];

		this.hurtboxes["NL"] = [
			[new Circle(1, -1, 82),
			new ICircle(15, 54, 31),
			new ICircle(-7, -64, 33)],
			[new Circle(5, 6, 83),
			new ICircle(23, 56, 31),
			new ICircle(-10, -63, 33)],
			[new Circle(10, 14, 83),
			new ICircle(36, 63, 32),
			new ICircle(-10, -53, 33)],
			[new Circle(11, 18, 83),
			new ICircle(44, 70, 32),
			new ICircle(-27, -42, 34),
			new ICircle(-13, -21, 29)],
			[new Circle(11, 18, 82),
			new ICircle(44, 70, 31),
			new ICircle(-31, -39, 31),
			new ICircle(-16, -19, 30)],
			[new Circle(-19, -1, 82),
			new ICircle(-33, 55, 32),
			new ICircle(31, -39, 31),
			new ICircle(13, -34, 34)],
			[new Circle(-54, -25, 82),
			new ICircle(-114, -15, 35),
			new ICircle(-27, 30, 37)],
			[new Circle(-55, -24, 82),
			new ICircle(-115, -16, 35),
			new ICircle(-26, 29, 37)],
			[new Circle(-51, -18, 80),
			new ICircle(-112, -3, 31),
			new ICircle(-6, 27, 36)],
			[new Circle(-39, -12, 81),
			new ICircle(-86, 28, 33),
			new ICircle(21, 3, 34)],
			[new Circle(-29, -11, 82),
			new ICircle(28, -36, 32),
			new ICircle(-33, 50, 33)],
			[new Circle(-14, -5, 81),
			new ICircle(19, -62, 30),
			new ICircle(-6, 52, 34)]
		];

		this.hurtboxes["SL"] = [
			[new Circle(-5, 8, 78),
			new ICircle(11, 61, 28),
			new ICircle(17, -43, 28)],
			[new Circle(-16, 10, 78),
			new ICircle(-4, 60, 28),
			new ICircle(14, -32, 28)],
			[new Circle(-23, 2, 77),
			new ICircle(-34, 52, 28),
			new ICircle(16, -29, 28)],
			[new Circle(-18, -13, 76),
			new ICircle(-65, -25, 28),
			new ICircle(30, -13, 28)],
			[new Circle(-9, -16, 76),
			new ICircle(-59, -34, 30),
			new ICircle(32, -10, 28)],
			[new Circle(-5, -17, 78),
			new ICircle(-43, -48, 31),
			new ICircle(33, -10, 28)],
			[new Circle(-15, -13, 75),
			new ICircle(-41, -61, 30),
			new ICircle(33, -4, 28)],
			[new Circle(-18, -7, 77),
			new ICircle(26, -23, 30),
			new ICircle(-52, 34, 28)],
			[new Circle(-26, 11, 77),
			new ICircle(-59, -23, 30),
			new ICircle(-12, 66, 28)],
			[new Circle(-40, 11, 77),
			new ICircle(-90, -14, 30),
			new ICircle(-12, 67, 28)],
			[new Circle(-48, 8, 77),
			new ICircle(-97, 7, 30),
			new ICircle(-13, 67, 29)],
			[new Circle(-40, 10, 77),
			new ICircle(-81, 37, 30),
			new ICircle(13, 52, 31)],
			[new Circle(-24, 14, 79),
			new ICircle(-51, 56, 30),
			new ICircle(34, 18, 31)],
			[new Circle(-14, 11, 79),
			new ICircle(-27, 63, 30),
			new ICircle(29, -15, 31)],
			[new Circle(-4, 5, 77),
			new ICircle(28, 49, 30),
			new ICircle(24, -53, 31)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 0, 78),
			new ICircle(-13, 52, 29),
			new ICircle(25, -58, 28)],
			[new Circle(0, 8, 78),
			new ICircle(-8, 57, 29),
			new ICircle(22, -57, 28)],
			[new Circle(1, 17, 78),
			new ICircle(0, 69, 29),
			new ICircle(16, -50, 28)],
			[new Circle(-1, 21, 78),
			new ICircle(2, 79, 29),
			new ICircle(-4, -48, 29)],
			[new Circle(-1, 21, 77),
			new ICircle(2, 79, 29),
			new ICircle(-7, -47, 28)],
			[new Circle(-17, -10, 77),
			new ICircle(-53, 32, 29),
			new ICircle(24, -20, 28)],
			[new Circle(-34, -44, 76),
			new ICircle(-85, -67, 29),
			new ICircle(-38, 14, 28)],
			[new Circle(-34, -44, 76),
			new ICircle(-85, -67, 29),
			new ICircle(-38, 14, 28)],
			[new Circle(-34, -38, 74),
			new ICircle(-88, -56, 29),
			new ICircle(-19, 23, 28)],
			[new Circle(-27, -29, 74),
			new ICircle(-84, -17, 29),
			new ICircle(15, 14, 28)],
			[new Circle(-20, -23, 75),
			new ICircle(-52, 26, 29),
			new ICircle(40, -15, 28)],
			[new Circle(0, 0, 76),
			new ICircle(-14, 51, 29),
			new ICircle(25, -58, 28)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 0, 80),
			new Circle(10, -40, 20),
			new Circle(10, 40, 20)],
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

		this.hurtboxes["ML"] = [
			[new Circle(0, 10, 77),
			new ICircle(9, 64, 25),
			new ICircle(27, -48, 27)],
			[new Circle(-9, 11, 75),
			new ICircle(11, 61, 24),
			new ICircle(-12, -52, 28)],
			[new Circle(-15, 16, 78),
			new ICircle(4, 66, 26),
			new ICircle(-39, -45, 28)],
			[new Circle(-19, 20, 76),
			new ICircle(-21, 75, 25),
			new ICircle(-12, -39, 30)],
			[new Circle(-14, 7, 76),
			new ICircle(-65, 0, 25),
			new ICircle(45, 11, 30)],
			[new Circle(10, 17, 78),
			new ICircle(61, 25, 25),
			new ICircle(-52, 10, 27)],
			[new Circle(-14, -7, 74),
			new ICircle(-66, 4, 26),
			new ICircle(38, -24, 29)],
			[new Circle(-16, 4, 76),
			new ICircle(-22, 54, 26),
			new ICircle(33, -26, 29)],
			[new Circle(-27, 11, 76),
			new ICircle(-18, 63, 26),
			new ICircle(8, -36, 28)],
			[new Circle(-27, 5, 77),
			new ICircle(-9, 59, 26),
			new ICircle(-15, -57, 28)],
			[new Circle(-17, 3, 76),
			new ICircle(7, 54, 26),
			new ICircle(-8, -60, 28)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(1, 5, 80),
			new ICircle(11, 52, 30),
			new ICircle(28, -49, 30)],
			[new Circle(6, 8, 80),
			new ICircle(20, 57, 30),
			new ICircle(5, -52, 30)],
			[new Circle(2, 11, 77),
			new ICircle(19, 61, 30),
			new ICircle(-8, -50, 30)],
			[new Circle(0, 13, 78),
			new ICircle(13, 63, 28),
			new ICircle(-18, -41, 31)],
			[new Circle(0, 24, 77),
			new ICircle(19, 74, 27),
			new ICircle(-32, -29, 30)],
			[new Circle(1, 24, 78),
			new ICircle(19, 75, 28),
			new ICircle(-32, -29, 29)],
			[new Circle(1, 25, 78),
			new ICircle(17, 74, 28),
			new ICircle(-32, -28, 28)],
			[new Circle(1, 25, 78),
			new ICircle(17, 74, 28),
			new ICircle(-32, -28, 28)],
			[new Circle(1, 25, 78),
			new ICircle(17, 74, 28),
			new ICircle(-32, -28, 28)],
			[new Circle(1, 25, 78),
			new ICircle(17, 74, 28),
			new ICircle(-32, -28, 28)],
			[new Circle(-11, 23, 77),
			new ICircle(3, 74, 27),
			new ICircle(-19, -37, 28)],
			[new Circle(-3, -1, 78),
			new ICircle(-40, 38, 27),
			new ICircle(49, -28, 28)],
			[new Circle(-3, -2, 77),
			new ICircle(-40, 38, 27),
			new ICircle(49, -28, 28)],
			[new Circle(-3, -2, 77),
			new ICircle(-40, 38, 27),
			new ICircle(49, -28, 28)],
			[new Circle(-3, -1, 77),
			new ICircle(-40, 38, 27),
			new ICircle(49, -28, 28)],
			[new Circle(-3, -1, 77),
			new ICircle(-39, 40, 27),
			new ICircle(49, -26, 29)],
			[new Circle(-3, -1, 77),
			new ICircle(-40, 41, 28),
			new ICircle(49, -28, 29)],
			[new Circle(-3, -1, 77),
			new ICircle(-39, 40, 28),
			new ICircle(48, -28, 28)],
			[new Circle(-3, -1, 77),
			new ICircle(-39, 40, 28),
			new ICircle(49, -27, 28)],
			[new Circle(-3, -1, 77),
			new ICircle(-39, 40, 28),
			new ICircle(49, -27, 28)],
			[new Circle(0, 0, 78),
			new ICircle(-37, 45, 28),
			new ICircle(49, -29, 28)],
			[new Circle(0, 0, 78),
			new ICircle(-37, 45, 28),
			new ICircle(49, -29, 28)],
			[new Circle(0, 0, 78),
			new ICircle(-35, 44, 28),
			new ICircle(49, -29, 28)],
			[new Circle(0, 2, 78),
			new ICircle(3, 58, 26),
			new ICircle(29, -50, 28)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(-1, 0, 78),
			new ICircle(23, 49, 28),
			new ICircle(-15, -62, 29)],
			[new Circle(-1, 4, 77),
			new ICircle(28, 48, 28),
			new ICircle(-15, -60, 29)],
			[new Circle(1, 7, 77),
			new ICircle(35, 47, 26),
			new ICircle(-14, -54, 28)],
			[new Circle(-4, 17, 78),
			new ICircle(21, 63, 26),
			new ICircle(-33, -40, 28)],
			[new Circle(-6, 12, 77),
			new ICircle(17, 59, 26),
			new ICircle(-25, -47, 28)],
			[new Circle(1, -1, 77),
			new ICircle(16, 52, 26),
			new ICircle(-4, -64, 28)],
			[new Circle(1, -1, 77),
			new ICircle(16, 52, 26),
			new ICircle(-4, -64, 28)],
			[new Circle(4, 2, 77),
			new ICircle(14, 51, 26),
			new ICircle(9, -60, 28)],
			[new Circle(-1, 5, 77),
			new ICircle(-52, 16, 26),
			new ICircle(58, 6, 28)],
			[new Circle(-10, -4, 77),
			new ICircle(-20, 57, 27),
			new ICircle(-14, -52, 28)],
			[new Circle(-3, -2, 77),
			new ICircle(-58, -28, 27),
			new ICircle(41, 3, 37)],
			[new Circle(8, 0, 77),
			new ICircle(40, -51, 27),
			new ICircle(-4, 47, 27)],
			[new Circle(9, 4, 76),
			new ICircle(70, -6, 27),
			new ICircle(-32, 36, 27)],
			[new Circle(9, 4, 76),
			new ICircle(70, -6, 27),
			new ICircle(-40, 19, 27)],
			[new Circle(-2, 4, 77),
			new ICircle(-63, 11, 27),
			new ICircle(37, -31, 27)],
			[new Circle(-2, 10, 77),
			new ICircle(-41, 58, 27),
			new ICircle(2, -40, 27)],
			[new Circle(-3, 9, 77),
			new ICircle(49, 43, 27),
			new ICircle(-55, 4, 26)],
			[new Circle(5, -1, 77),
			new ICircle(50, -41, 27),
			new ICircle(-6, 49, 26)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(-3, -2, 78),
			new ICircle(26, 43, 23),
			new ICircle(-14, -66, 27)],
			[new Circle(-4, 1, 76),
			new ICircle(27, 47, 23),
			new ICircle(-14, -63, 27)],
			[new Circle(-2, 9, 77),
			new ICircle(30, 44, 25),
			new ICircle(-16, -52, 27)],
			[new Circle(6, 13, 78),
			new ICircle(43, 30, 25),
			new ICircle(-32, -38, 29)],
			[new Circle(8, 12, 78),
			new ICircle(46, 28, 25),
			new ICircle(-32, -37, 29)],
			[new Circle(8, 12, 78),
			new ICircle(48, 27, 25),
			new ICircle(-32, -37, 29)],
			[new Circle(-11, 5, 78),
			new ICircle(-59, 15, 25),
			new ICircle(37, 2, 29)],
			[new Circle(8, -17, 78),
			new ICircle(33, -65, 25),
			new ICircle(-42, 8, 29)],
			[new Circle(8, -17, 78),
			new ICircle(35, -64, 25),
			new ICircle(-42, 0, 29)],
			[new Circle(15, -12, 78),
			new ICircle(68, -2, 25),
			new ICircle(-39, -33, 29)],
			[new Circle(10, -3, 78),
			new ICircle(44, 38, 25),
			new ICircle(-27, -53, 29)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(-4, 0, 76),
			new ICircle(22, 49, 24),
			new ICircle(-12, -65, 29)],
			[new Circle(4, 5, 76),
			new ICircle(39, 21, 24),
			new ICircle(-52, -26, 26)],
			[new Circle(12, 12, 77),
			new ICircle(49, 10, 24),
			new ICircle(-45, 13, 26)],
			[new Circle(13, 7, 76),
			new ICircle(49, 6, 24),
			new ICircle(-45, 7, 26)],
			[new Circle(13, 4, 76),
			new ICircle(49, 9, 24),
			new ICircle(-44, -1, 26)],
			[new Circle(14, 6, 76),
			new ICircle(49, 12, 24),
			new ICircle(-41, -6, 26)],
			[new Circle(14, 6, 76),
			new ICircle(49, 12, 24),
			new ICircle(-41, -6, 26)],
			[new Circle(-18, 9, 76),
			new ICircle(-36, 58, 24),
			new ICircle(18, -15, 26)],
			[new Circle(-23, 2, 76),
			new ICircle(-48, 51, 24),
			new ICircle(32, -16, 26)],
			[new Circle(-14, 3, 77),
			new ICircle(-34, 53, 24),
			new ICircle(35, -33, 26)],
			[new Circle(-7, 1, 77),
			new ICircle(-9, 55, 24),
			new ICircle(23, -54, 26)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(-2, 2, 77),
			new ICircle(23, 50, 27),
			new ICircle(-14, -66, 26)],
			[new Circle(-4, 4, 77),
			new ICircle(26, 47, 27),
			new ICircle(-14, -61, 26)],
			[new Circle(-12, 10, 77),
			new ICircle(24, 51, 27),
			new ICircle(-16, -55, 26)],
			[new Circle(-29, 19, 77),
			new ICircle(3, 49, 27),
			new ICircle(-26, -40, 26)],
			[new Circle(-29, 19, 77),
			new ICircle(1, 60, 27),
			new ICircle(-29, -41, 26)],
			[new Circle(-29, 19, 77),
			new ICircle(1, 61, 27),
			new ICircle(-29, -41, 26)],
			[new Circle(-29, 19, 77),
			new ICircle(2, 62, 27),
			new ICircle(-29, -41, 26)],
			[new Circle(-19, 5, 77),
			new ICircle(4, 54, 27),
			new ICircle(-21, -53, 26)],
			[new Circle(-15, -26, 77),
			new ICircle(-32, 24, 27),
			new ICircle(41, -34, 26)],
			[new Circle(28, -19, 77),
			new ICircle(-13, -47, 27),
			new ICircle(19, 37, 26)],
			[new Circle(18, 31, 77),
			new ICircle(45, -13, 27),
			new ICircle(-27, 1, 26)],
			[new Circle(-40, 11, 77),
			new ICircle(-18, 53, 27),
			new ICircle(2, -48, 26)],
			[new Circle(-4, -14, 77),
			new ICircle(-28, 35, 27),
			new ICircle(35, -42, 26)],
			[new Circle(3, 5, 77),
			new ICircle(1, 62, 27),
			new ICircle(50, -23, 26)],
			[new Circle(-2, -6, 77),
			new ICircle(32, 32, 27),
			new ICircle(-16, -57, 26)],
			[new Circle(-12, 3, 77),
			new ICircle(26, 43, 27),
			new ICircle(-17, -58, 26)],
			[new Circle(-35, -20, 77),
			new ICircle(-36, 32, 27),
			new ICircle(10, -19, 26)],
			[new Circle(-7, -7, 77),
			new ICircle(-28, -41, 50),
			new ICircle(-31, 23, 48)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(0, 0, 86),
			new Circle(15, 38, 27),
			new Circle(15, -39, 24)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(-3, 1, 78),
			new ICircle(6, 56, 26),
			new ICircle(-3, -62, 28)],
			[new Circle(-1, 1, 77),
			new ICircle(7, 56, 26),
			new ICircle(-3, -62, 28)],
			[new Circle(0, 0, 76),
			new ICircle(25, 54, 24),
			new ICircle(-3, -63, 28)],
			[new Circle(0, 0, 79),
			new ICircle(44, 21, 51),
			new ICircle(47, -3, 50),
			new ICircle(-4, -63, 28)],
			[new Circle(9, -6, 75),
			new ICircle(54, -21, 38),
			new ICircle(-11, -59, 28)],
			[new Circle(9, -7, 75),
			new ICircle(58, -26, 27),
			new ICircle(-17, -57, 29)],
			[new Circle(3, -18, 78),
			new ICircle(40, -66, 25),
			new ICircle(-48, -23, 29)],
			[new Circle(-8, -18, 76),
			new ICircle(-34, 14, 37),
			new ICircle(-22, -75, 24)],
			[new Circle(-8, -10, 76),
			new ICircle(-64, 2, 24),
			new ICircle(34, 24, 28)],
			[new Circle(2, 2, 76),
			new ICircle(-17, 51, 26),
			new ICircle(48, -33, 28)]
		];

		this.hurtboxes["RN"] = [
			[new Circle(0, 2, 77),
			new ICircle(7, 59, 27),
			new ICircle(-1, -65, 26)],
			[new Circle(-2, 5, 77),
			new ICircle(-6, 62, 27),
			new ICircle(-4, -63, 25)],
			[new Circle(-2, 5, 77),
			new ICircle(3, 56, 42),
			new ICircle(32, 41, 52),
			new ICircle(-11, -59, 27)],
			[new Circle(1, -8, 77),
			new ICircle(41, 34, 50),
			new ICircle(53, 5, 52),
			new ICircle(-27, -57, 28)],
			[new Circle(1, -8, 77),
			new ICircle(47, -27, 35),
			new ICircle(-27, -54, 28)],
			[new Circle(1, -8, 77),
			new ICircle(47, -27, 35),
			new ICircle(-27, -54, 28)],
			[new Circle(1, -4, 77),
			new ICircle(56, 1, 27),
			new ICircle(-19, -60, 28)],
			[new Circle(2, -3, 77),
			new ICircle(42, 35, 27),
			new ICircle(-8, -61, 29)]
		];

		this.hurtboxes["LN"] = [
			[new Circle(0, 2, 77),
			new ICircle(7, 59, 27),
			new ICircle(-1, -65, 26)],
			[new Circle(-2, 5, 77),
			new ICircle(-6, 62, 27),
			new ICircle(-4, -63, 25)],
			[new Circle(-2, 5, 77),
			new ICircle(3, 56, 42),
			new ICircle(32, 41, 52),
			new ICircle(-11, -59, 27)],
			[new Circle(1, -8, 77),
			new ICircle(41, 34, 50),
			new ICircle(53, 5, 52),
			new ICircle(-27, -57, 28)],
			[new Circle(1, -8, 77),
			new ICircle(47, -27, 35),
			new ICircle(-27, -54, 28)],
			[new Circle(1, -8, 77),
			new ICircle(47, -27, 35),
			new ICircle(-27, -54, 28)],
			[new Circle(1, -4, 77),
			new ICircle(56, 1, 27),
			new ICircle(-19, -60, 28)],
			[new Circle(2, -3, 77),
			new ICircle(42, 35, 27),
			new ICircle(-8, -61, 29)]
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
		this.states.SS = State.copyState(State.SS).addTag("rotateable");

		this.sikeWawaGainMult = 0.5;

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
			dirOff: new Angle(),
			active: false,
			held: true,
			tracking: false,
			trackHitstun: 0,
			sheet: Spritesheet.copy(assetManager.spritesheets.iloMoliSheet)
		};

		this.scytheAnimations = {
			walk: [
				new ScytheFrame(-10, -50, -1.05 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.1 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.1 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.05 * PI / 3.7),
				new ScytheFrame(-10, -50, -1 * PI / 3.7),
				new ScytheFrame(-8, -50, -0.95 * PI / 3.7),
				new ScytheFrame(-5, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-5, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-8, -50, -0.95 * PI / 3.7),
				new ScytheFrame(-10, -50, -1 * PI / 3.7)
			],
			neutral: [
				new ScytheFrame(-10, -50, -PI / 3.7)
			],
			dash: [
				new ScytheFrame(0, -35, -1.8 * PI / 4)
			],
			powerDash: [
				new ScytheFrame(0, -35, -1.8 * PI / 4),
				new ScytheFrame(0, -35, -2 * PI / 4)
			],
			grab: [
				new ScytheFrame(-10, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.9 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.2 * PI / 3.7),
				new ScytheFrame(-10, -50, -1.1 * PI / 3.7),
				new ScytheFrame(-10, -50, 1.0 * PI / 3.7),
				new ScytheFrame(-10, -50, 0.4 * PI / 3.7),
				new ScytheFrame(-10, -50, -0.5 * PI / 3.7)
			]
		}

		this.OOBBlockFrame = 10;

		this.dash.friction = 0.93;
		this.dash.regularFrictionFrame = this.dash.frames - 16;

		this.dash.startRotateFrame = this.dash.invFirstFrame;
		this.dash.endRotateFrame = max(this.dash.attackCancelFrame, this.dash.blockCancelFrame);

		this.powerDash.addHitstunFrames = 30;
	}

	setAttacks() {
		this.DASH_ATTACK = AsakamiDashAttack;
		this.DASH_ATTACKP = AsakamiPuppetDashAttack;

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
		this.SNP = AsakamiPuppetSN;
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
		if (this.targetPlayer && State.stateIsTag(this.puppet.currentState, "rotateable"))
			this.puppet.dir.value = new Angle().setFromPoint(this.targetPlayer.x - this.puppet.x, this.targetPlayer.y - this.puppet.y).value;

		this.scythe.x += this.scythe.dx;
		this.scythe.y += this.scythe.dy;
		this.scythe.dir.changeValue(this.scythe.dr);
		this.sheetRotation.value = 0;

		if (this.scythe.held) {
			if (this.currentState.name === "hitstun") {
				//let speed = dist(0, 0, this.dx, this.dy);
				//this.scythe.x -= Math.cos(atan2(this.dy, this.dx) - this.scythe.dir.value) * speed;
				//this.scythe.y -= Math.sin(atan2(this.dy, this.dx) - this.scythe.dir.value) * speed;
				this.scythe.x -= this.dx;
				this.scythe.y -= this.dy;
				this.scythe.x *= max(0.7, (this.hitStun * 30 + 10) / (this.hitStun * 30 + 20));
				this.scythe.y *= max(0.7, (this.hitStun * 30 + 10) / (this.hitStun * 30 + 20));
				if (!this.scythe.tracking) {
					this.scythe.trackHitstun = this.hitStun;
					this.scythe.trackHitstunSmall = this.hitStun;
					this.scythe.tracking = true;
				}
				if (this.hitStun < 10) {
					this.scythe.dirOff.value += (((Angle.compare(this.scythe.dirOff, new Angle(-PI / 3.7))) + 2 * PI) % (2 * PI)) * 0.3;
				} else {
					if (this.scythe.trackHitstun >= 20)
						this.scythe.dirOff.value += 2 * PI * (2 * this.scythe.trackHitstunSmall - 1) / this.scythe.trackHitstun / this.scythe.trackHitstun;
				}
				this.scythe.offX = (this.scythe.offX - 10 * 9) / 10;
				this.scythe.offY = (this.scythe.offY - 50 * 9) / 10;

				if (this.scythe.trackHitstunSmall > 0)
					this.scythe.trackHitstunSmall--;
				//this.scythe.offX *= (this.hitStun + 19) / (this.hitStun + 20);
				//this.scythe.offY *= (this.hitStun + 19) / (this.hitStun + 20);
				//this.scythe.dir.changeValue(this.dr);
			} else {
				this.scythe.tracking = false;
				this.scythe.x = 0;
				this.scythe.y = 0;
				this.scythe.dir.value = 0;
				//this.scythe.dir.value = -PI / 3.7;
				//this.scythe.x = 0;
				//this.scythe.y = 0;
				//this.scythe.dir.value = 0;
			}

			if (this.currentState.name === "walk") {
				this.animateScytheLoop(this.scytheAnimations.walk);
			}
			if (this.currentState.name === "neutral") {
				this.animateScytheLoop(this.scytheAnimations.neutral);
			}
			if (this.currentState.name === "dash" || this.currentState.name === "dash cancel") {
				this.animateScytheLoop(this.scytheAnimations.dash);
			}
			if (this.currentState.name === "power dash") {
				this.animateScytheLoop(this.scytheAnimations.powerDash);
			}
			if (this.currentState.name === "grab") {
				this.animateScytheLoop(this.scytheAnimations.grab);
			}
		}
	}

	generalLogicNoStun() {
		this.runPuppet();
		this.puppet.canMove = this.canMove;
		//this.puppet.canAttack = this.canAttack;
	}

	canGrabPuppet() {
		let angle = new Angle(this.dir.value + PI / 4);
		return this.puppet.health > 0 && dist(this.x + angle.getX() * 60, this.y + angle.getY() * 60, this.puppet.x, this.puppet.y) <= 100;
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

			if (this.puppet.health > 0)
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
		if (this.controls.clicked("nasa") && !this.pressedNeutralPuppet())
			this.puppet.startSN();
		/*if (this.controls.clicked("nasa") && this.pressedRightPuppet())
			this.puppet.startSN();
		if (this.controls.clicked("nasa") && this.pressedLeftPuppet())
			this.puppet.startSN();
		if (this.controls.clicked("nasa") && this.pressedMonsiPuppet())
			this.puppet.startSN();*/
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

	finishPuppet(a) {
		let p = this.puppet;
		p.forceChangeState(p.states.DEAD, p.states.DEAD_ACTIONS);
		p.sheet.setAnimation("Dead");
		p.deathCountdown = 60;
		p.iFrames = 61;
		p.invTo = ["attack", "grab"];
		p.actionLag = 60;
		if (a)
			a.setPlayerStunFrames(8);
	}

	collidePuppet() {
		if (this.puppet.hitStun <= 0 && this.puppet.health > 0 && this.puppet.iFrames <= 0) {
			for (let i in this.world.attacks) {
				let a = this.world.attacks[i];
				if (a.player !== this && a.currentlyActive() && Hitcircle.collide(a, this.puppet)) {
					let p = this.puppet;

					if (!a.clashNegate) {
						p.health--;
						a.playHitSoundDefault(this.world);
						a.whiffSoundPlayed = true;
						let projectileCheck = a.projectile && p.iFrames <= 0;
						if (p.health <= 0) {
							this.endPuppetAttacks();
							this.finishPuppet(a);

							this.world.camera.shake = 1.5;
							this.world.camera.shakeTime = 15;

							this.world.cameraZoomTime = 15;
							this.world.cameraSpeed = 5;
							this.world.cameraZoomSpeed = 0.3;
							this.world.camera.options = "close";
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

								this.world.camera.shake = property.screenShake;
								this.world.camera.shakeTime = Math.ceil(property.screenShakeTime / 2);

								this.world.cameraZoomTime = Math.ceil(property.zoomTime / 2);
								this.world.cameraSpeed = property.camSpeed;
								this.world.cameraZoomSpeed = property.zoomSpeed;
								this.world.camera.options = property.zoomOptions;
							}
						}

						if (projectileCheck && a.multi > 0)
							a.multi--;
						if (projectileCheck && a.multi <= 0)
							a.endLife();
					}

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
		if (this.canGrabPuppet() && this.canChangeState(this.states.RN)) {//Draw the connection line when the puppet can be thrown
			g.strokeWeight(10 + 5 * Math.sin(frameCount / 8));
			g.stroke(172, 50, 50, 100);
			g.noFill();
			g.line(this.x, this.y, this.puppet.x, this.puppet.y);
			g.strokeWeight(1);
		}

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

		this.sheet.draw(g, -122 + rumbleX, -122 + rumbleY, 244, 244);

		g.pop();

		if (this.puppet.health > 0 || this.puppet.deathCountdown > 0) {
			this.puppet.draw(g);
		}

		g.push();
		g.translate(this.scythe.x, this.scythe.y);
		if (this.scythe.held)
			g.translate(this.x, this.y);
		g.rotate(this.scythe.dir.value + this.scythe.dirOff.value);
		if (this.scythe.held)
			g.rotate(this.dir.value + this.sheetRotation.value);
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

	drawGrabReversalPrompt(g, rand) {
		let dx = this.dir.getX() * 120;
		let dy = this.dir.getY() * 120;

		g.stroke(32, 192, 40, 180);
		g.fill(43, 115, 61, 90);
		g.strokeWeight(4);
		g.rect(this.x + dx * 0.9 - 50 + random(-1, 1), this.y + dy * 0.9 - 25 + random(-1, 1), 100, 50, 10);

		//drawHologram(g, this.arrowSheet, this.x + dx, this.y + dy, this.monsi.value, 40, 40);
		drawHologramFunc(g, () => {
			if (rand % 2 === 0) {
				drawGameKeyImage(g/*, this.targetPlayer.controls*/, "dash", -45, -20, 40, 40);
				drawGameKeyImage(g/*, this.targetPlayer.controls*/, "lili", 5, -20, 40, 40);
			} else {
				drawControlsKeyImage(g, this.controls, "dash", -45, -20, 40, 40);
				drawControlsKeyImage(g, this.controls, "lili", 5, -20, 40, 40);
			}
		}, this.x + dx * 0.9, this.y + dy * 0.9);
	}

	drawExtraHUD(g, i, x, y) {
		let leftX = 512 * 0.12 + 512 * 0.81 * i - 35 + (this.puppet.reviveChargeMax - 3) * 0.035;

		g.push();
		g.translate(x, y);

		g.noStroke();
		g.fill(80, 0, 15, 130);
		let displayValue = this.puppet.reviveCharges;
		if (this.puppet.health > 0) {
			displayValue = this.puppet.health;
			g.fill(90 + 20 * this.puppet.health, 0, 210 - 65 * this.puppet.health);
		}
		for (let u = 0; u < displayValue; u++) {
			g.rect(leftX + 15 * u - u * i * 30 + 30 * i, 67 + this.puppet.health * Math.sin(this.world.frameCount / 10 + u / 2 + i) * 2 / 3, 15, 15, 10);
		}
		g.stroke(0, 0, 15);
		g.strokeWeight(1);
		g.noFill();
		g.rect(leftX, 65, 45, 19, 8);

		g.pop();
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
		this.puppet.reviveCharges = 0;
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

	copyAssets() {
		this.sheet = Spritesheet.copy(assetManager.spritesheets.asakamiSheet);
		this.puppet.sheet = Spritesheet.copy(assetManager.spritesheets.asakamiGhostSheet);
		this.scythe.sheet = Spritesheet.copy(assetManager.spritesheets.iloMoliSheet);
	}

	getShouldLoadSpritesheets() {
		return ["asakamiSheet", "asakamiGhostSheet", "iloMoliSheet", "scytheTrail", "konSeli"];
	}

	static getMenuImage() {
		return assetManager.images.asakamiMenuImage;
	}

	static addAssets() {
		assetManager.addImage("resources/moli_AsakamiAWEN.png", "asakamiMenuImage", true);

		assetManager.addSpritesheet("resources/moli_Asakami.png", "asakamiSheet", "//");

		assetManager.addSpritesheet("resources/kon_Asakami.png", "asakamiGhostSheet", "//");

		assetManager.addSpritesheet("resources/ilo_moli.png", "iloMoliSheet", "//");

		assetManager.addSpritesheet("resources/scytheTrail.png", "scytheTrail", "//");

		assetManager.addSpritesheet("resources/konSeli.png", "konSeli", "//");

		//assetManager.addSound("resources/sfx/Fan.wav", "fanTP");

		/*assetManager.addFunc(() => {//Only for unfinished characters - moli Asakami is FINISHED YAYYYY
			let tempG = createGraphics(assetManager.images.asakamiMenuImage.width, assetManager.images.asakamiMenuImage.height);
			tempG.image(assetManager.images.asakamiMenuImage, 0, 0);
			tempG.fill(255, 0, 0);
			tempG.stroke(0, 0, 14);
			tempG.strokeWeight(8);
			tempG.textSize(80);
			tempG.textAlign(CENTER, CENTER);
			tempG.textFont(assetManager.fonts.asuki);
			tempG.text("󱥐󱤂/\nUnfinished", assetManager.images.asakamiMenuImage.width / 2, assetManager.images.asakamiMenuImage.height / 2);

			assetManager.images.asakamiMenuImage = tempG.get();

			tempG.remove();
		});*/
	}
}

class AsakamiPuppet extends Player {
	constructor(parentID) {
		super([new ICircle(0, 0, 60), new Circle(0, 0, 20)]);

		this.hurtboxes["NPL"] = [
			[new ICircle(-5, 0, 60),
			new Circle(-5, 0, 20)],
			[new ICircle(60, 0, 70),
			new Circle(40, 0, 20)],
			[new ICircle(60, 0, 70),
			new Circle(40, 0, 20)],
			[new ICircle(52, 0, 40),
			new Circle(32, 0, 20)],
			[new ICircle(40, 0, 50),
			new Circle(20, 0, 20)],
			[new ICircle(20, 0, 60),
			new Circle(10, 0, 20)]
		];

		this.hurtboxes["SPL"] = [
			[new ICircle(-20, 0, 58),
			new Circle(-19, 0, 20)],
			[new ICircle(-20, 0, 58),
			new Circle(-19, 0, 20)],
			[new ICircle(-9, 0, 58),
			new Circle(-8, 0, 20)],
			[new ICircle(27, 1, 72),
			new Circle(-2, 0, 20)],
			[new ICircle(26, -4, 70),
			new Circle(1, 0, 20)],
			[new ICircle(20, -5, 64),
			new Circle(9, 0, 20),
			new ICircle(58, -17, 26)],
			[new ICircle(15, 12, 45),
			new Circle(9, 0, 20),
			new ICircle(14, -12, 40),
			new ICircle(28, -37, 28)],
			[new ICircle(14, 9, 50),
			new Circle(0, 0, 20),
			new ICircle(-6, -18, 36)],
			[new ICircle(6, 1, 56),
			new Circle(-4, 0, 20)]
		];

		this.hurtboxes["RPL"] = [
			[new ICircle(2, -3, 60),
			new Circle(0, 0, 20),
			new ICircle(-12, -25, 50)],
			[new ICircle(6, -3, 53),
			new Circle(0, 0, 20),
			new ICircle(11, -38, 32),
			new ICircle(46, -37, 25)],
			[new ICircle(9, -3, 50),
			new Circle(0, 0, 20),
			new ICircle(70, 2, 86),
			new ICircle(30, 22, 96)],
			[new ICircle(4, -1, 49),
			new Circle(0, 0, 20),
			new ICircle(0, 24, 75),
			new ICircle(64, 21, 52)],
			[new ICircle(2, -1, 50),
			new Circle(0, 0, 20),
			new ICircle(-19, 18, 59)],
			[new ICircle(1, -1, 53),
			new Circle(0, 0, 20),
			new ICircle(-22, 15, 51)],
			[new ICircle(0, 0, 57),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["LPL"] = [
			[new ICircle(2, 3, 60),
			new Circle(0, 0, 20),
			new ICircle(-12, 25, 50)],
			[new ICircle(6, 3, 53),
			new Circle(0, 0, 20),
			new ICircle(11, 38, 32),
			new ICircle(46, 37, 25)],
			[new ICircle(9, 3, 50),
			new Circle(0, 0, 20),
			new ICircle(70, -2, 86),
			new ICircle(30, -22, 96)],
			[new ICircle(4, 1, 49),
			new Circle(0, 0, 20),
			new ICircle(0, -24, 75),
			new ICircle(64, -21, 52)],
			[new ICircle(2, 1, 50),
			new Circle(0, 0, 20),
			new ICircle(-19, -18, 59)],
			[new ICircle(1, 1, 53),
			new Circle(0, 0, 20),
			new ICircle(-22, -15, 51)],
			[new ICircle(0, 0, 57),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["MPL"] = [
			[new ICircle(-1, 0, 55),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 55),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 62),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 153),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 128),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 143),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 134),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 104),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 71),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 60),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["NPS"] = [
			[new ICircle(7, 0, 43),
			new Circle(0, 0, 20),
			new ICircle(-20, 1, 38),
			new ICircle(-47, 0, 21)],
			[new ICircle(-2, -21, 35),
			new Circle(0, 0, 20),
			new ICircle(-2, 22, 28),
			new ICircle(-3, -5, 40)],
			[new ICircle(1, -4, 36),
			new Circle(0, 0, 20),
			new ICircle(0, 28, 34),
			new ICircle(-4, 54, 31),
			new ICircle(-1, -36, 33),
			new ICircle(-1, -61, 31)],
			[new ICircle(0, 0, 34),
			new Circle(0, 0, 20),
			new ICircle(-1, 25, 34),
			new ICircle(-3, 47, 31),
			new ICircle(-2, 65, 37),
			new ICircle(-4, 89, 31),
			new ICircle(-4, 109, 37),
			new ICircle(-2, -27, 30),
			new ICircle(-1, -62, 36),
			new ICircle(-2, -89, 32),
			new ICircle(-2, -112, 34)],
			[new ICircle(-4, 0, 29),
			new Circle(0, 0, 20),
			new ICircle(-2, 26, 34),
			new ICircle(-2, 43, 40),
			new ICircle(-5, 68, 33),
			new ICircle(-2, 99, 39),
			new ICircle(-1, -30, 34),
			new ICircle(-2, -61, 35),
			new ICircle(-3, -90, 30),
			new ICircle(-2, -107, 31)],
			[new ICircle(-1, 0, 26),
			new Circle(0, 0, 20),
			new ICircle(-4, 29, 26),
			new ICircle(-3, 59, 33),
			new ICircle(0, 82, 32),
			new ICircle(1, 106, 31),
			new ICircle(1, -19, 30),
			new ICircle(4, -46, 37),
			new ICircle(5, -75, 36),
			new ICircle(5, -104, 39)],
			[new ICircle(3, -1, 28),
			new Circle(0, 0, 20),
			new ICircle(3, 29, 28),
			new ICircle(4, 57, 31),
			new ICircle(6, 85, 35),
			new ICircle(4, 108, 30),
			new ICircle(22, 114, 17),
			new ICircle(7, -17, 33),
			new ICircle(10, -47, 40),
			new ICircle(12, -74, 46),
			new ICircle(14, -104, 48)],
			[new ICircle(35, 0, 60),
			new Circle(0, 0, 20),
			new ICircle(77, 1, 90),
			new ICircle(109, -37, 29),
			new ICircle(108, 36, 29)],
			[new ICircle(35, 0, 60),
			new Circle(0, 0, 20),
			new ICircle(77, 1, 90),
			new ICircle(109, -37, 29),
			new ICircle(108, 36, 29)],
			[new ICircle(26, -2, 49),
			new Circle(-1, -2, 20),
			new ICircle(54, 0, 65),
			new ICircle(93, -14, 62),
			new ICircle(96, 18, 55)],
			[new ICircle(-19, 0, 21),
			new Circle(0, 0, 20),
			new ICircle(21, -3, 27),
			new ICircle(43, -3, 35),
			new ICircle(66, -1, 45),
			new ICircle(107, -18, 37),
			new ICircle(95, 0, 57),
			new ICircle(111, 23, 25)],
			[new ICircle(38, -1, 44),
			new Circle(0, 0, 20),
			new ICircle(9, -2, 32),
			new ICircle(-13, 0, 28),
			new ICircle(-35, 1, 17),
			new ICircle(-51, 1, 15)],
			[new ICircle(-19, -12, 44),
			new Circle(-6, 0, 20),
			new ICircle(-16, 14, 42),
			new ICircle(-43, 3, 25)],
			[new ICircle(-22, -16, 41),
			new Circle(-11, 0, 20),
			new ICircle(-21, 17, 40),
			new ICircle(-45, -1, 24)],
			[new ICircle(-10, -8, 48),
			new Circle(0, 0, 20),
			new ICircle(-10, 11, 44),
			new ICircle(-41, -1, 26)],
			[new ICircle(-9, 0, 56),
			new Circle(0, 0, 20),
			new ICircle(-45, 0, 19)]
		];

		this.hurtboxes["SPS"] = [
			[new ICircle(2, 13, 39),
			new Circle(0, 0, 20),
			new ICircle(1, -18, 42),
			new ICircle(-22, -2, 40)],
			[new ICircle(1, -30, 30),
			new Circle(-17, 0, 20),
			new ICircle(-17, -19, 29),
			new ICircle(-23, 5, 24),
			new ICircle(-15, 21, 29),
			new ICircle(2, 27, 29)],
			[new ICircle(1, 5, 67),
			new Circle(-7, 0, 20),
			new ICircle(7, -21, 47)],
			[new ICircle(0, 9, 65),
			new Circle(0, 0, 20),
			new ICircle(3, -9, 63)],
			[new ICircle(1, 5, 65),
			new Circle(0, 0, 20),
			new ICircle(2, -6, 67)],
			[new ICircle(1, 3, 68),
			new Circle(0, 0, 20),
			new ICircle(-7, -14, 45),
			new ICircle(14, -21, 38)],
			[new ICircle(0, 0, 71),
			new Circle(0, 0, 20),
			new ICircle(14, -18, 41)],
			[new ICircle(1, -2, 67),
			new Circle(0, 0, 20)],
			[new ICircle(3, -3, 61),
			new Circle(0, 0, 20),
			new ICircle(-22, 0, 31)],
			[new ICircle(-1, -1, 58),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["RPS"] = [
			[new ICircle(-3, 5, 60),
			new Circle(0, 0, 20),
			new ICircle(-37, 13, 28)],
			[new ICircle(-2, 8, 58),
			new Circle(0, 0, 20),
			new ICircle(-32, 25, 27)],
			[new ICircle(-19, 44, 60),
			new Circle(0, 19, 20),
			new ICircle(5, 36, 50),
			new ICircle(-33, 103, 50),
			new ICircle(13, 100, 50),
			new ICircle(-11, 72, 80)],
			[new ICircle(-19, 44, 60),
			new Circle(0, 19, 20),
			new ICircle(5, 36, 50),
			new ICircle(6, 63, 50),
			new ICircle(-24, 64, 50)],
			[new ICircle(-19, 44, 66),
			new Circle(0, 19, 20),
			new ICircle(5, 36, 56)],
			[new ICircle(5, 17, 54),
			new Circle(0, 6, 20),
			new ICircle(-24, 16, 27)],
			[new ICircle(4, 8, 50),
			new Circle(0, 1, 20),
			new ICircle(-19, 6, 27)]
		];

		this.hurtboxes["LPS"] = [
			[new ICircle(-3, -5, 60),
			new Circle(0, 0, -20),
			new ICircle(-37, -13, 28)],
			[new ICircle(-2, -8, 58),
			new Circle(0, -0, 20),
			new ICircle(-32, -25, 27)],
			[new ICircle(-19, -44, 60),
			new Circle(0, -19, 20),
			new ICircle(5, -36, 50),
			new ICircle(-33, -103, 50),
			new ICircle(13, -100, 50),
			new ICircle(-11, -72, 80)],
			[new ICircle(-19, -44, 60),
			new Circle(0, -19, 20),
			new ICircle(5, -36, 50),
			new ICircle(6, -63, 50),
			new ICircle(-24, -64, 50)],
			[new ICircle(-19, -44, 66),
			new Circle(0, -19, 20),
			new ICircle(5, -36, 56)],
			[new ICircle(5, -17, 54),
			new Circle(0, -6, 20),
			new ICircle(-24, -16, 27)],
			[new ICircle(4, -8, 50),
			new Circle(0, -1, 20),
			new ICircle(-19, -6, 27)]
		];

		this.hurtboxes["MPS"] = [
			[new ICircle(-16, 9, 60),
			new Circle(0, 0, 20)],
			[new ICircle(-20, -9, 73),
			new Circle(0, 0, 20)],
			[new ICircle(-1, -20, 67),
			new Circle(0, 0, 20)],
			[new ICircle(20, -2, 54),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 198),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 198),
			new Circle(0, 0, 20)],
			[new ICircle(-9, 3, 149),
			new Circle(0, 0, 20),
			new ICircle(12, -12, 133)],
			[new ICircle(-1, 0, 153),
			new Circle(0, 0, 20),
			new ICircle(-19, -21, 113)],
			[new ICircle(-7, -9, 129),
			new Circle(0, 0, 20)],
			[new ICircle(-2, -1, 98),
			new Circle(0, 0, 20)],
			[new ICircle(1, 3, 72),
			new Circle(0, 0, 20)],
			[new ICircle(3, 2, 59),
			new Circle(0, 0, 20)],
			[new ICircle(2, 4, 57),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["NN"] = [
			[new ICircle(0, 0, 22),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 35),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 65),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 66),
			new Circle(0, 0, 20)],
			[new ICircle(0, 0, 60),
			new Circle(0, 0, 20)]
		];

		this.hurtboxes["RN"] = [
			[new ICircle(0, 0, 53),
			new Circle(0, 0, 20)],
			[new ICircle(-6, 0, 56),
			new Circle(0, 0, 20)],
			[new ICircle(-9, -1, 57),
			new Circle(0, 0, 20)],
			[new ICircle(8, 0, 51),
			new Circle(0, 0, 20),
			new ICircle(-25, 1, 26)],
			[new ICircle(9, 0, 52),
			new Circle(0, 0, 20),
			new ICircle(-25, 1, 26)],
			[new ICircle(9, 0, 52),
			new Circle(0, 0, 20),
			new ICircle(-25, 1, 26)],
			[new ICircle(9, 0, 52),
			new Circle(0, 0, 20),
			new ICircle(-25, 1, 26)],
			[new ICircle(10, -1, 46),
			new Circle(0, 0, 20),
			new ICircle(-23, -1, 26)],
			[new ICircle(12, -2, 44),
			new Circle(0, 0, 20),
			new ICircle(-23, -1, 26)],
			[new ICircle(-9, -2, 37),
			new Circle(0, 0, 20),
			new ICircle(-34, -1, 26),
			new ICircle(15, -3, 31)],
			[new ICircle(-18, -1, 51),
			new Circle(-4, 0, 20),
			new ICircle(-37, -1, 26)],
			[new ICircle(-17, -1, 51),
			new Circle(-3, 0, 20),
			new ICircle(-35, -1, 26)],
			[new ICircle(-10, -1, 51),
			new Circle(-2, 0, 20),
			new ICircle(-34, 0, 26)]
		];

		this.hurtboxes["SN"] = [
			[new ICircle(-4, 0, 61),
			new Circle(0, 0, 20)],
			[new ICircle(4, 0, 46),
			new Circle(0, 0, 20),
			new ICircle(-13, 0, 47),
			new ICircle(-42, 0, 27),
			new ICircle(-62, 0, 14)],
			[new ICircle(18, 0, 38),
			new Circle(0, 0, 20),
			new ICircle(-14, 2, 35),
			new ICircle(-48, 2, 27),
			new ICircle(-76, 0, 14)],
			[new ICircle(28, 0, 29),
			new Circle(0, 0, 20),
			new ICircle(-29, 1, 25),
			new ICircle(-56, 1, 22),
			new ICircle(-87, 1, 14),
			new ICircle(1, 0, 28)],
			[new ICircle(18, 0, 49),
			new Circle(0, 0, 20),
			new ICircle(-3, 1, 51),
			new ICircle(-29, 1, 36),
			new ICircle(-51, 1, 16)],
			[new ICircle(13, 0, 45),
			new Circle(0, 0, 20),
			new ICircle(50, 0, 29),
			new ICircle(76, 0, 24),
			new ICircle(98, 1, 13)],
			[new ICircle(13, 0, 46),
			new Circle(0, 0, 20),
			new ICircle(43, 2, 24),
			new ICircle(64, 2, 21),
			new ICircle(82, 1, 13)],
			[new ICircle(15, 0, 50),
			new Circle(0, 0, 20)],
			[new ICircle(-4, 0, 46),
			new Circle(0, 0, 20),
			new ICircle(-16, 10, 47),
			new ICircle(-46, 5, 19)],
			[new ICircle(-8, 1, 48),
			new Circle(0, 0, 20),
			new ICircle(-31, 12, 43),
			new ICircle(-56, 3, 19)],
			[new ICircle(0, 3, 41),
			new Circle(0, 0, 20),
			new ICircle(-26, 8, 34)]
		];

		this.collideRadius = 60;

		this.arrowOffset = 0;
		this.arrowOffsetBack = 0;

		this.movementSpeed = 3;
		this.forwardSpeedBoost = 0.5;

		this.parentID = parentID;

		this.sheet = Spritesheet.copy(assetManager.spritesheets.asakamiGhostSheet);

		this.states.NN = State.copyState(State.NN).addTag("rotateable");
		this.states.REVIVE = new State("revive", "BASE", "rotateable");
		this.states.REVIVE_ACTIONS = [];

		this.controls = new Controls();

		this.maxHealth = 3;
		this.health = this.maxHealth;

		this.reviveCharges = 0;
		this.reviveChargeMax = 3;

		this.deathCountdown = 0;
	}

	setAttacks() {
		this.DASH_ATTACK = AsakamiPuppetDashAttack;

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
		this.SN = AsakamiPuppetSN;
		this.RN = AsakamiPuppetRN;
		this.LN = AsakamiPuppetLN;//Nothing
		this.MN = AsakamiPuppetMN;//Nothing
	}

	generalLogic() {
		if (State.stateIs(this.getParent().currentState, "dead")) {
			this.health = 0;
		}
		if (this.currentState.name === "revive")
			this.attackEndable();
		if (this.deathCountdown > 0)
			this.deathCountdown--;
	}

	updateBlockAngleVisual() {}

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

	startDashAttack() {
		this.forceChangeState(this.states.DASH_ATTACK, this.states.DASH_ATTACK_ACTIONS);
		this.sheet.setAnimation("PDA");
		this.iFrames = 0;

		let attack = this.DASH_ATTACK.createAttack(this);
		this.addCurrentAttack(attack);

		attack.rotateTo(this.dir);

		this.world.addAttack(attack);

		this.setActionLag(attack);

		if (this.DASH_ATTACK.startAttack)
			this.DASH_ATTACK.startAttack(this, attack);
	}

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
			this.sheet.setAnimation("SPS");

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

	startSN() {
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
			return true;
		}
		return false;
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
		if (this.player.puppet.stunFrames <= 0)
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

		this.active = false;
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(30);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.5);
		player.iFrames = 20;
		player.invTo = ["grab"];
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (!this.active) {
			this.player.timerPunishHealth += 1;
			if (this.getStartupF() < 10) {
				this.dx *= 0.89;
				this.dy *= 0.89;
			} else if (Hitcircle.collide(this.player, this.player.puppet) && this.player.puppet.health > 0) {
				this.player.x = (this.player.puppet.x + this.player.x) / 2;
				this.player.y = (this.player.puppet.y + this.player.y) / 2;
				this.player.dx = 0;
				this.player.dy = 0;
				this.player.puppet.dx = 0;
				this.player.puppet.dy = 0;

				this.player.endPuppetAttacksLife();
				this.player.puppet.startDashAttack();
				this.player.sheet.setAnimation("PDA");
				this.setStartupF(this.player.puppet.actionLag);
				this.player.actionLag = this.player.puppet.actionLag;
				this.player.iFrames = 18;
				this.player.invTo = ["attack", "grab"];
				this.player.puppet.iFrames = this.player.puppet.actionLag;
				this.active = true;
			}
		} else {
			this.player.puppet.x = this.player.x;
			this.player.puppet.y = this.player.y;
			this.player.puppet.dx = 0;
			this.player.puppet.dy = 0;
			this.player.dx = 0;
			this.player.dy = 0;
		}
	}
}

class AsakamiPuppetDashAttack extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "DASH_ATTACKP";
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(0, 0, 220, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(100, 50, 100).setProration(5, 2).setAngleValue(player.dir.value).setLaunch(20).setHitStun(34, 10).setAngleTypes("direct", "direct");
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(0).setStartupF(5).setActiveF(8).setEndF(30).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.dx = 0;
		player.dy = 0;

		attack.followingPuppet();
		player.playSound(assetManager.sounds.explosion2);
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.getEndF() === 1) {
			this.player.puppet.health--;
			if (this.player.puppet.health <= 0)
				this.player.finishPuppet();
			this.player.puppet.x -= this.player.dir.getX() * 25;
			this.player.puppet.y -= this.player.dir.getY() * 25;
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
			new ScytheFrame(10, 0, -2.8 * PI / 4),
			new ScytheFrame(0, 5, -3 * PI / 4),
			new ScytheFrame(20, -50, PI / 16),
			new ScytheFrame(-10, 0, 3 * PI / 4),
			new ScytheFrame(-10, 0, 3 * PI / 4),
			new ScytheFrame(-15, 0, 2.4 * PI / 4),
			new ScytheFrame(-24, -15, 1.2 * PI / 4),
			new ScytheFrame(-10, -40, 0 * PI / 4),
			new ScytheFrame(-8, -40, -0.8 * PI / 4)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(40, 0, 160, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(70, 0, 135, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(100, 0, 100, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(0, -50, 100, 0).setVelocity(0.1, 0);
		let sweet5 = new PriorityCircle(0, 50, 100, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(-0.9, -0.5).setAngleValue(player.dir.value).setLaunch(6.5, 3, 2).setHitStun(27, 20).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(10, 3, 1.5);
		}
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds["8BitHit"]);
		//sweet.setBlockSound(assetManager.sounds["8BitHit"]);

		return new this(player, circles, prop).setClashPriority(3).setStartupF(22).setActiveF(4).setEndF(21).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (!this.currentlyStartup() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -188, -188, 376, 376);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
		this.player.turnSpeedModifier = this.player.nlTurnSpeedBoost;

		if (!this.currentlyStartup() && this.getFromEndF() < 4)
			this.sheet.run();
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
			new ScytheFrame(-20, 70, PI / 4),
			new ScytheFrame(0, 60, PI / 3.2),
			new ScytheFrame(0, 47, PI / 2.8),
			new ScytheFrame(-5, 30, PI / 4.8),
			new ScytheFrame(-6, 6, PI / 8),
			new ScytheFrame(-8, -15, 0),
			new ScytheFrame(-10, -30, -PI / 5),
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
		this.sheet.setAnimation("SL");
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(-125, 0, 90, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(-90, 0, 130, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(-50, -45, 80, 0).setVelocity(0.1, 0);
		let sweet4 = new PriorityCircle(-50, 45, 80, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sweet4];

		let sweet = new AttackProperties().setDamage(40).setProration(-1.3, 1.1).setAngleValue(player.dir.value + PI).setLaunch(1, -1).setHitStun(30, 15).setStunFrames(14);
		if (player.puppet.health <= 0) {
			sweet.setCancelOptions(["ML"], ["ML"]);
		}
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(3).setStartupF(28).setActiveF(2).setEndF(28);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (!this.currentlyStartup() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -188, -188, 376, 376);

			g.pop();
		}
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

		if (!this.currentlyStartup() && this.getFromEndF() < 4)
			this.sheet.run();
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

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(34, 20, 160, 0).setVelocity(0.08, 0.05);
		let sweet2 = new PriorityCircle(60, 35, 135, 0).setVelocity(0.08, 0.05);
		let sweet3 = new PriorityCircle(87, 50, 100, 0).setVelocity(0.08, 0.05);
		let sweet4 = new PriorityCircle(25, -43, 100, 0).setVelocity(0.08, 0.05);
		let sweet5 = new PriorityCircle(-25, 43, 100, 0).setVelocity(0.08, 0.05);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(-1.4, 0.9).setAngleValue(player.dir.value + PI / 4).setLaunch(5, 3, 2).setHitStun(27, 17).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(9, 3, 1.5);
		}
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
		if (!this.currentlyStartup() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value + PI / 6);

			this.sheet.draw(g, -188, -188, 376, 376);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		if (!this.currentlyStartup() && this.getFromEndF() < 4)
			this.sheet.run();
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

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(34, -20, 160, 0).setVelocity(0.08, -0.05);
		let sweet2 = new PriorityCircle(60, -35, 135, 0).setVelocity(0.08, -0.05);
		let sweet3 = new PriorityCircle(87, -50, 100, 0).setVelocity(0.08, -0.05);
		let sweet4 = new PriorityCircle(25, 43, 100, 0).setVelocity(0.08, -0.05);
		let sweet5 = new PriorityCircle(-25, -43, 100, 0).setVelocity(0.08, -0.05);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5];

		let sweet = new AttackProperties().setDamage(20).setProration(-1.4, 0.9).setAngleValue(player.dir.value - PI / 4).setLaunch(5, 3, 2).setHitStun(27, 17).setStunFrames(13).setWallPushback(1.2, 1).setBlockLeniency(17);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(9, 3, 1.5);
		}
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
		if (!this.currentlyStartup() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value - PI / 6);

			this.sheet.draw(g, -188, -188, 376, 376);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		if (!this.currentlyStartup() && this.getFromEndF() < 4)
			this.sheet.run();
	}
}

class AsakamiML extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "ML";

		this.scytheAnimation = [
			new ScytheFrame(-10, 0, -1.0 * PI / 3),
			new ScytheFrame(-15, 20, -2.0 * PI / 3),
			new ScytheFrame(-20, 30, -2.7 * PI / 3),
			new ScytheFrame(-40, 30, -2.6 * PI / 3),
			new ScytheFrame(-40, 30, -0.5 * PI / 3),
			new ScytheFrame(-40, 30, 2.1 * PI / 3),
			new ScytheFrame(-40, 30, -1.4 * PI / 3),
			new ScytheFrame(-30, 20, -1.2 * PI / 3),
			new ScytheFrame(-20, -10, -1.1 * PI / 3),
			new ScytheFrame(-15, -40, -1.0 * PI / 3),
			new ScytheFrame(-12, -45, -0.9 * PI / 3)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(0, 0, 230, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(20).setProration(-1.2, 0.5).setAngleValue(player.dir.value).setLaunch(3, 4).setHitStun(28, 10).setStunFrames(13).setWallPushback(2, 1).setAngleTypes("direct", "direct").setRotateVel(-4, -4, true);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(10, 5);
		}
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

		this.scytheAnimation = [
			new ScytheFrame(-10, 0, -1.0 * PI / 3),
			new ScytheFrame(-12, 10, -1.5 * PI / 3),
			new ScytheFrame(-15, 20, -2.0 * PI / 3),
			new ScytheFrame(-22, 25, -2.3 * PI / 3),
			new ScytheFrame(-30, 30, -2.7 * PI / 3),
			new ScytheFrame(-30, 30, -2.8 * PI / 3),
			new ScytheFrame(-30, 30, -2.8 * PI / 3),
			new ScytheFrame(-30, 30, -2.7 * PI / 3),
			new ScytheFrame(-30, 30, -2.7 * PI / 3),
			new ScytheFrame(-30, 30, -2.7 * PI / 3),
			new ScytheFrame(-40, 30, -2.6 * PI / 3),
			new ScytheFrame(-45, -20, -1 * PI / 3),
			new ScytheFrame(-45, -20, 1 * PI / 3),
			new ScytheFrame(-45, -20, -3 * PI / 3),
			new ScytheFrame(-45, -20, -1 * PI / 3),
			new ScytheFrame(-45, -20, 1 * PI / 3),
			new ScytheFrame(-45, -20, -3 * PI / 3),
			new ScytheFrame(-45, -20, -1 * PI / 3),
			new ScytheFrame(-45, -20, 1 * PI / 3),
			new ScytheFrame(-10, -20, 1.9 * PI / 3),
			new ScytheFrame(-10, -20, 2.7 * PI / 3),
			new ScytheFrame(-11, -21, -2.6 * PI / 3),
			new ScytheFrame(-11, -40, -1.6 * PI / 3),
			new ScytheFrame(-12, -45, -1.5 * PI / 3)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
		this.sheet.setAnimation("NS");
		this.sheet.run();

		this.walkFrames = 0;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(1, 0, 150, 0).setVelocity(74, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(35).setProration(-1.7, 2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(14, 0, 1.2).setLaunchDampening(0, 30, 0, 30).setHitStun(25, 15).setStunFrames(4).setWallLaunchMod(-14, -14).setIgnoreWeight();
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(45).setActiveF(30).setEndF(18).setRotateable().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
		player.scythe.held = false;
		player.scythe.x = player.x;
		player.scythe.y = player.y;
		player.scythe.dir.value = player.dir.value;
		attack.multiConst = 3;
	}

	draw(g) {
		if (!this.currentlyStartup() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.circleX(0), this.circleY(0));
			g.rotate(this.dir.value);

			this.sheet.draw(g, -115, -115, 230, 230);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.player.targetPlayer && dist(0, 0, this.circles[0].x, this.circles[0].y) > dist(this.player.x, this.player.y, this.player.targetPlayer.x, this.player.targetPlayer.y) + 70) {
			this.circles[0].x -= this.player.dir.getX() * 10;
			this.circles[0].y -= this.player.dir.getY() * 10;
		}
		if (this.getFromActiveF() === 1) {
			this.properties[0].launch = 1;
		}
		if (this.getFromActiveF() % 11 === 10 && this.currentlyActive()) {
			this.resetHits();
			this.properties[0].launch = 1;
			this.properties[0].setWallLaunchMod(0, 0);
		}

		if (this.currentlyActive()) {
			this.circles[0].dx *= 0.7;
			this.circles[0].dy *= 0.7;
		}
		if (this.currentlyStartup()) {
			this.player.scythe.x = this.player.x;
			this.player.scythe.y = this.player.y;
		}
		if (this.getActiveF() > 0 && this.getStartupF() < 3) {
			this.player.scythe.x = this.circleX(0) + this.circles[0].dx;
			this.player.scythe.y = this.circleY(0) + this.circles[0].dy;
		}
		if (this.getStartupF() <= 0) {
			this.setRotateable(false);
			let walked = this.player.walkMovement(0.75);
			if (walked)
				this.walkFrames++;
			else
				this.walkFrames = 0;
			this.player.sheetRotation.value = Math.sin(-this.walkFrames / 5) * 0.08;
			this.player.dir.value = new Angle().setFromPoint(this.player.scythe.x - this.player.x, this.player.scythe.y - this.player.y).value;
		}
		if (this.getFromEndF() > 0) {
			this.player.scythe.x = (this.player.scythe.x - this.player.x) * Math.min(1, sqrt(this.getEndF() / 64 + 0.75)) + this.player.x;
			this.player.scythe.y = (this.player.scythe.y - this.player.y) * Math.min(1, sqrt(this.getEndF() / 64 + 0.75)) + this.player.y;
		}

		if (!this.currentlyStartup() && this.getFromEndF() < 4)
			this.sheet.run();

		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
	}

	hitConfirmSetFrames() {
		this.circles[0].dx *= 0.6;
		this.circles[0].dy *= 0.6;
	}

	cleanup() {
		this.player.scythe.held = true;
		this.player.scythe.x = 0;
		this.player.scythe.y = 0;
		this.player.scythe.dir.value = PI / 8;
		this.player.scythe.offX = 10;
		this.player.scythe.offY = 15;
	}
}

class AsakamiSS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SS";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4),
			new ScytheFrame(-10, -40, -1.4 * PI / 4),
			new ScytheFrame(-10, -20, -1.8 * PI / 4),
			new ScytheFrame(-10, 0, -2.8 * PI / 4),
			new ScytheFrame(-10, 20, -3 * PI / 4),
			new ScytheFrame(-10, 40, -3 * PI / 4),
			new ScytheFrame(-10, 40, -3 * PI / 4),
			new ScytheFrame(-10, 40, -2.7 * PI / 4),
			new ScytheFrame(-10, 40, -0.8 * PI / 4),
			new ScytheFrame(-10, 40, 1.5 * PI / 4),
			new ScytheFrame(-10, 40, 3.7 * PI / 4),
			new ScytheFrame(-10, 40, -2 * PI / 4),
			new ScytheFrame(220, -85, PI / 16),
			new ScytheFrame(220, -85, PI / 16),
			new ScytheFrame(10, 40, 3 * PI / 4),
			new ScytheFrame(20, 20, 2.4 * PI / 4),
			new ScytheFrame(34, -15, 1.2 * PI / 4),
			new ScytheFrame(15, -40, 0 * PI / 4),
			new ScytheFrame(-10, -40, -0.8 * PI / 4)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(260, 0, 96, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(290, 0, 80, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(330, 0, 55, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(50, 0, 110, 1).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(110, 0, 110, 1).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(165, 0, 108, 1).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(215, 0, 104, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sour1, sour2, sour3, sour4];

		let sweet = new AttackProperties().setDamage(100, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(16, 5, 0.2).setHitStun(48, 12).setStunFrames(15).setLaunchDampening(0.1);
		let sour = new AttackProperties().setDamage(100, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI).setLaunch(10, 5, 0.2).setHitStun(48, 12).setStunFrames(15).setLaunchDampening(0.1);
		if (player.puppet.health <= 0) {
			sweet.setHitStun(60, 30);
			sour.setHitStun(60, 30);
		}
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(48).setActiveF(3).setEndF(20).setRotateable();
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			this.sheet.draw(g, -290, -120, 720, 240);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		if (this.startupOver() && this.getFromEndF() < 4) {
			this.sheet.run();
		}

		this.player.turnSpeedModifier = -0.005;
		if (this.activeOver()) {
			this.player.turnSpeedModifier = -1;
		}
	}
}

class AsakamiRS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RS";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4),
			new ScytheFrame(-10, -40, -1.4 * PI / 4),
			new ScytheFrame(-10, -20, -1.8 * PI / 4),
			new ScytheFrame(-10, 0, -2.8 * PI / 4),
			new ScytheFrame(-10, 5, -3 * PI / 4),
			new ScytheFrame(-10, 5, -3 * PI / 4),
			new ScytheFrame(-10, 5, 0 * PI / 4),
			new ScytheFrame(-10, 5, 3.5 * PI / 4),
			new ScytheFrame(-10, -12, -3.7 * PI / 4),
			new ScytheFrame(-10, -25, -2.5 * PI / 4),
			new ScytheFrame(-10, -39, -1.8 * PI / 4)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(0, 60, 140, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(-65, 45, 100, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(65, 45, 100, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(55).setProration(-1).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(10, 1, 1).setHitStun(25, 25).setStunFrames(13).setRotateVel(-7, -7, true).setRotateSlowDown(0.25, 60, true);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(15, 1, 1);
		}
		let prop = [sweet];

		sweet.setHitSound(assetManager.sounds.teloLukaPakala);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(29).setActiveF(3).setEndF(10);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.sheet.draw(g, -290, -120, 720, 240);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		if (this.startupOver() && this.getFromEndF() < 4) {
			this.sheet.run();
		}
	}
}

class AsakamiLS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LS";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4),
			new ScytheFrame(-10, -40, -2.4 * PI / 4),
			new ScytheFrame(-10, -20, -3.8 * PI / 4),
			new ScytheFrame(-10, 0, -4.2 * PI / 4),
			new ScytheFrame(-10, 5, -4.2 * PI / 4),
			new ScytheFrame(-10, 5, -4 * PI / 4),
			new ScytheFrame(-10, 5, -3.9 * PI / 4),
			new ScytheFrame(-10, 5, -0.7 * PI / 4),
			new ScytheFrame(-20, -6-20, 0.3 * PI / 4),
			new ScytheFrame(-15, -28-10, 0.2 * PI / 4),
			new ScytheFrame(-10, -41, -0.5 * PI / 4)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = [];

		let sweet1 = new PriorityCircle(0, -60, 140, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(-65, -45, 100, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(65, -45, 100, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(85, 10, 80, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sour1];

		let sweet = new AttackProperties().setDamage(55).setProration(-1, -3).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value - PI / 6).setLaunch(10, 1, 1).setHitStun(25, 25).setStunFrames(13).setRotateVel(-7, -7, true).setRotateSlowDown(0.25, 60, true);
		let sour = new AttackProperties().setDamage(55).setProration(-1, 0).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(10, 1, 1).setHitStun(25, 25).setStunFrames(13).setRotateVel(-5, -5, true).setRotateSlowDown(0.25, 60, true);
		if (player.puppet.health <= 0) {
			sweet.setLaunch(15, 1, 1);
			sour.setLaunch(15, 1, 1);
		}
		let prop = [sweet, sour];

		sweet.setHitSound(assetManager.sounds.teloLukaPakala);

		return new this(player, circles, prop).setClashPriority(1).setStartupF(29).setActiveF(3).setEndF(10);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			g.rotate(this.dir.value);

			//this.sheet.draw(g, -290, -120, 720, 240);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		if (this.startupOver() && this.getFromEndF() < 4) {
			this.sheet.run();
		}
	}
}

class AsakamiMS extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MS";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1.2 * PI / 4),
			new ScytheFrame(-10, -40, -1.4 * PI / 4),
			new ScytheFrame(-10, -20, -1.8 * PI / 4),
			new ScytheFrame(-10, 0, -2.8 * PI / 4),
			new ScytheFrame(-10, 5, -3 * PI / 4),
			new ScytheFrame(-10, 5, -3 * PI / 4),
			new ScytheFrame(-10, 5, -3 * PI / 4),
			new ScytheFrame(-10, 5, -2.7 * PI / 4),
			new ScytheFrame(-10, 5, -0.8 * PI / 4),
			new ScytheFrame(-10, 5, 1.5 * PI / 4),
			new ScytheFrame(-10, 5, 3.7 * PI / 4),
			new ScytheFrame(-10, 5, -2 * PI / 4),
			new ScytheFrame(220, -85, -0.5 * PI / 4),
			new ScytheFrame(220, -85, -0.5 * PI / 4),
			new ScytheFrame(-25, 45, -1 * PI / 4),
			new ScytheFrame(-15, 0, 2.4 * PI / 4),
			new ScytheFrame(-24, -15, -3.4 * PI / 4),
			new ScytheFrame(-18, -40, -2.0 * PI / 4),
			new ScytheFrame(-12, -45, -1.4 * PI / 4)
		];

		this.sheet = Spritesheet.copy(assetManager.spritesheets.scytheTrail);

		this.second = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(213, -149, 96, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(238, -166, 80, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(270, -189, 55, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(41, -29, 110, 1).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(90, -63, 110, 1).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(135, -95, 108, 1).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(176, -123, 104, 1).setVelocity(0.1, 0);

		let sweet6 = new PriorityCircle(213, 149, 0, 2).setVelocity(0.1, 0);
		let sweet7 = new PriorityCircle(238, 166, 0, 2).setVelocity(0.1, 0);
		let sweet8 = new PriorityCircle(270, 189, 0, 2).setVelocity(0.1, 0);
		let sour5 = new PriorityCircle(41, 29, 0, 3).setVelocity(0.1, 0);
		let sour6 = new PriorityCircle(90, 63, 0, 3).setVelocity(0.1, 0);
		let sour7 = new PriorityCircle(135, 95, 0, 3).setVelocity(0.1, 0);
		let sour8 = new PriorityCircle(176, 123, 0, 3).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sour1, sour2, sour3, sour4, sweet6, sweet7, sweet8, sour5, sour6, sour7, sour8];

		let sweet = new AttackProperties().setDamage(80, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI - PI / 5.5).setLaunch(16, 5, 0.2).setHitStun(46, 23).setStunFrames(15).setLaunchDampening(0.1);
		let sour = new AttackProperties().setDamage(80, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI - PI / 5.5).setLaunch(10, 5, 0.2).setHitStun(46, 23).setStunFrames(15).setLaunchDampening(0.1);
		let sweetP2 = new AttackProperties().setDamage(80, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI + PI / 5.5).setLaunch(16, 5, 0.2).setHitStun(46, 23).setStunFrames(15).setLaunchDampening(0.1);
		let sourP2 = new AttackProperties().setDamage(80, undefined, 100).setProration(-1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI + PI / 5.5).setLaunch(10, 5, 0.2).setHitStun(46, 23).setStunFrames(15).setLaunchDampening(0.1);
		if (player.puppet.health <= 0) {
			sweet.setHitStun(75, 30);
			sour.setHitStun(75, 30);
			sweetP2.setHitStun(75, 30);
			sourP2.setHitStun(75, 30);
		}
		let prop = [sweet, sour, sweetP2, sourP2];

		return new this(player, circles, prop).setClashPriority(1).setStartupF(48).setActiveF(3).setEndF(20);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 4) {
			g.push();
			g.translate(this.x, this.y);
			let rot = this.second ? 7 * PI / 36 : -7 * PI / 36;
			g.rotate(this.dir.value + rot);

			this.sheet.draw(g, -290, -120, 720, 240);

			g.pop();
		}
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.startupOver() && this.getFromEndF() < 4) {
			this.sheet.run();
		}

		if (this.getFromEndF() === 4 && !this.hitPlayerBool && !this.second) {
			this.second = true;
			this.setActiveF(3);
			this.setEndF(this.getEndF() - 3);
			this.sheet.setAnimation("Main");

			this.scytheAnimation = [
				new ScytheFrame(-10, -50, -1.2 * PI / 4),
				new ScytheFrame(-10, -40, -1.4 * PI / 4),
				new ScytheFrame(-10, -20, -1.8 * PI / 4),
				new ScytheFrame(-10, 0, -2.8 * PI / 4),
				new ScytheFrame(-10, 5, -3 * PI / 4),
				new ScytheFrame(-10, 5, -3 * PI / 4),
				new ScytheFrame(-10, 5, -3 * PI / 4),
				new ScytheFrame(-10, 5, -2.7 * PI / 4),
				new ScytheFrame(-10, 5, -0.8 * PI / 4),
				new ScytheFrame(-10, 5, 1.5 * PI / 4),
				new ScytheFrame(-10, 5, 3.7 * PI / 4),
				new ScytheFrame(-10, 5, -2 * PI / 4),
				undefined,
				undefined,
				new ScytheFrame(225, -75, 1.0 * PI / 4),
				new ScytheFrame(225, -75, 1.0 * PI / 4),
				new ScytheFrame(-10, 0, 3 * PI / 4),
				new ScytheFrame(-15, -50, -2 * PI / 4)
			];

			this.circles[7].diameter = this.circles[0].diameter;
			this.circles[8].diameter = this.circles[1].diameter;
			this.circles[9].diameter = this.circles[2].diameter;
			this.circles[10].diameter = this.circles[3].diameter;
			this.circles[11].diameter = this.circles[4].diameter;
			this.circles[12].diameter = this.circles[5].diameter;
			this.circles[13].diameter = this.circles[6].diameter;
			this.circles[0].diameter = 0;
			this.circles[1].diameter = 0;
			this.circles[2].diameter = 0;
			this.circles[3].diameter = 0;
			this.circles[4].diameter = 0;
			this.circles[5].diameter = 0;
			this.circles[6].diameter = 0;
		}

		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);
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

		let sweet = new AttackProperties().setDamage(15).setProration(0, 1).setAngleValue(player.dir.value).setLaunch(5).setHitStun(24, 15);
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

		let sweet = new AttackProperties().setDamage(20).setProration(-0.5, 0.6).setAngleValue(player.dir.value).setLaunch(7).setHitStun(28, 11);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setStartupF(12).setActiveF(8).setEndF(14).setFollow(false);
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

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(70, 0, 80, 0).setVelocity(0.1, 0.02);
		let sweet2 = new PriorityCircle(30, 30, 80, 0).setVelocity(0.1, 0.02);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(25).setProration(-0.2, 0).setLaunch(7).setHitStun(33, 10).setAngleValue(player.dir.value + PI / 2.1);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(4).setStartupF(8).setActiveF(3).setEndF(15).setFollow(false);
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
			this.player.puppet.x -= this.properties[0].angle.getX() * 4.5;
			this.player.puppet.y -= this.properties[0].angle.getY() * 4.5;
		}
	}
}

class AsakamiLPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPL";

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(70, 0, 80, 0).setVelocity(0.1, -0.02);
		let sweet2 = new PriorityCircle(30, -30, 80, 0).setVelocity(0.1, -0.02);
		let circles = [sweet1, sweet2];

		let sweet = new AttackProperties().setDamage(25).setProration(-0.2, 0).setLaunch(7).setHitStun(33, 10).setAngleValue(player.dir.value - PI / 2.1);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(4).setStartupF(8).setActiveF(3).setEndF(15).setFollow(false);
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
			this.player.puppet.x -= this.properties[0].angle.getX() * 4.5;
			this.player.puppet.y -= this.properties[0].angle.getY() * 4.5;
		}
	}
}

class AsakamiMPL extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let sour1 = new PriorityCircle(0, 0, 150, 0);
		let circles = [sour1];

		let sour = new AttackProperties().setDamage(10, -30).setProration(-2).setAngleValue(player.dir.value).setLaunch(6, 0, 0.85).setHitStun(26, 15).setAngleTypes("direct", "direct");
		let prop = [sour];

		return new this(player.getParent(), circles, prop).setClashPriority(3).setClashPriority(4).setStartupF(12).setActiveF(4).setEndF(18).setFollow(false);
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
		
	}
}

class AsakamiNPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NPS";

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(70, 0, 100, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(75, -45, 90, 1).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(75, 45, 90, 1).setVelocity(0.1, 0);
		let sour3 = new PriorityCircle(30, -80, 80, 1).setVelocity(0.1, 0);
		let sour4 = new PriorityCircle(30, 80, 80, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sour1, sour2, sour3, sour4];

		let sweet = new AttackProperties().setDamage(80, undefined, 15).setProration(-1.2).setAngleValue(player.dir.value).setLaunch(5).setHitStun(35, 29);
		let sour = new AttackProperties().setDamage(70, undefined, 15).setProration(-1.2).setAngleValue(player.dir.value).setLaunch(5).setHitStun(35, 28);
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setStartupF(30).setActiveF(4).setEndF(29).setFollow(false);
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
		this.rotateTo(this.player.puppet.dir);
		this.properties[0].setAngleValue(this.player.puppet.dir.value);
		this.properties[1].setAngleValue(this.player.puppet.dir.value);
	}
}

class AsakamiSPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SPS";

		this.sheet = Spritesheet.copy(assetManager.spritesheets.konSeli);
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(0, 0, 60, 0).setVelocity(0.2, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(40).setProration(-0.5).setAngleValue(player.dir.value).setLaunch(3).setHitStun(20, 5).setStunFrames(15).setAngleTypes("vel", "direct");
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setClashPriority(0).setStartupF(28).setActiveF(60).setEndF(10).setProjectile().setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.currentlyActive()) {
			g.push();
			g.translate(this.circleX(0), this.circleY(0));
			g.rotate(this.player.puppet.dir.value - PI / 2);

			this.sheet.draw(g, -35, -35, 70, 70);

			g.pop();

			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		if (this.currentlyActive() && this.getActiveF() % 2 === 0) {
			this.properties[0].hitStun++;
		}

		this.sheet.run();

		if (!this.hitPlayerBool) {
			this.player.puppet.dx *= 0.5;
			this.player.puppet.dy *= 0.5;
			this.player.puppet.dx += (this.circleX(0) - this.player.puppet.x);
			this.player.puppet.dy += (this.circleY(0) - this.player.puppet.y);
		}
	}

	hitConfirmSetFrames() {
		super.hitConfirmSetFrames();

		this.player.puppet.dx = 0;
		this.player.puppet.dy = 0;
	}
}

class AsakamiRPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
		this.puppetStunFrames = 30;
	}

	static createAttack(player) {
		let sweet2 = new PriorityCircle(-30, 40, 50, 0).setVelocity(0, 0.1);
		let sweet3 = new PriorityCircle(-40, 75, 50, 0).setVelocity(0, 0.1);
		let sweet4 = new PriorityCircle(-12, 75, 50, 0).setVelocity(0, 0.1);
		let sweet5 = new PriorityCircle(15, 75, 50, 0).setVelocity(0, 0.1);

		let sweet6 = new PriorityCircle(-40, 105, 60, 0).setVelocity(0, 0.1);
		let sweet7 = new PriorityCircle(-12, 105, 60, 0).setVelocity(0, 0.1);
		let sweet8 = new PriorityCircle(15, 105, 60, 0).setVelocity(0, 0.1);

		let sour1 = new PriorityCircle(7, 32, 50, 1).setVelocity(0, 0.1);
		let circles = [sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8, sour1];

		let sweet = new AttackProperties().setDamage(45).setProration(-1).setAngleValue(player.dir.value + PI / 2).setLaunch(4, 0.1, 0.1).setHitStun(23, 9).setStunFrames(30);
		let sour = new AttackProperties().setDamage(15).setProration(-1).setAngleValue(player.dir.value + PI / 2).setLaunch(4, 0.1, 0.1).setHitStun(23, 9).setStunFrames(30);
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setStartupF(8).setActiveF(7).setEndF(12).setFollow(false);
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
		this.rotateTo(this.player.puppet.dir);

		if (this.getFromActiveF() === 4) {
			this.circles[4].diameter = 0;
			this.circles[5].diameter = 0;
			this.circles[6].diameter = 0;
		}
	}
}

class AsakamiLPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LPS";

		//this.sheet = Spritesheet.copy(assetManager.spritesheets.wawaPalisa);
		this.puppetStunFrames = 30;
	}

	static createAttack(player) {
		let sweet2 = new PriorityCircle(-30, -40, 50, 0).setVelocity(0, 0.1);
		let sweet3 = new PriorityCircle(-40, -75, 50, 0).setVelocity(0, 0.1);
		let sweet4 = new PriorityCircle(-12, -75, 50, 0).setVelocity(0, 0.1);
		let sweet5 = new PriorityCircle(15, -75, 50, 0).setVelocity(0, 0.1);

		let sweet6 = new PriorityCircle(-40, -105, 60, 0).setVelocity(0, 0.1);
		let sweet7 = new PriorityCircle(-12, -105, 60, 0).setVelocity(0, 0.1);
		let sweet8 = new PriorityCircle(15, -105, 60, 0).setVelocity(0, 0.1);

		let sour1 = new PriorityCircle(7, -32, 50, 1).setVelocity(0, 0.1);
		let circles = [sweet2, sweet3, sweet4, sweet5, sweet6, sweet7, sweet8, sour1];

		let sweet = new AttackProperties().setDamage(45).setProration(-1).setAngleValue(player.dir.value - PI / 2).setLaunch(4, 0.1, 0.1).setHitStun(23, 9).setStunFrames(30);
		let sour = new AttackProperties().setDamage(15).setProration(-1).setAngleValue(player.dir.value - PI / 2).setLaunch(4, 0.1, 0.1).setHitStun(23, 9).setStunFrames(30);
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(5).setStartupF(8).setActiveF(7).setEndF(12).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);
	}

	draw(g) {
		if (this.getFromEndF() < 10 && this.startupOver()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		this.rotateTo(this.player.puppet.dir);

		if (this.getFromActiveF() === 4) {
			this.circles[4].diameter = 0;
			this.circles[5].diameter = 0;
			this.circles[6].diameter = 0;
		}
	}
}

class AsakamiMPS extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPS";

		this.puppetStunFrames = 15;
	}

	static createAttack(player) {
		let cancelOptions = [];
		let hitCancelOptions = ["NN", "dash"];

		let sour1 = new PriorityCircle(0, 0, 200, 0);
		let circles = [sour1];

		let sour = new AttackProperties().setDamage(20, 22).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(12, 0.1, 0.5).setHitStun(30, 3).setAngleTypes("direct", "direct");
		let prop = [sour];

		return new this(player.getParent(), circles, prop).setClashPriority(false).setStartupF(18).setActiveF(4).setEndF(29).setFollow(false);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0);
		player.iFrames = 24;
	}

	draw(g) {
		if (this.startupOver() && this.getFromEndF() < 14) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	puppetLogic() {
		this.rotateTo(this.player.puppet.dir);
	}
}

class AsakamiNN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "NN";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1 * PI / 3.7),
			new ScytheFrame(-10, -50, -1 * PI / 3.7),
			new ScytheFrame(0, -40, -1.3 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(5, -35, -1.4 * PI / 3.7),
			new ScytheFrame(-3, -45, -1.2 * PI / 3.7),
		];

		this.revive = false;
		this.held = true;
	}

	static createAttack(player) {
		return new this(player, [], []).setStartupF(7);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(1);

		if (player.puppet.health <= 0) {
			attack.setStartupF(57);
			player.actionLag = 57;
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
		if (this.getStartupF() === (this.revive ? 15 : 1)) {
			let revived = false;
			if (this.revive) {
				this.player.puppet.reviveCharges++;
				if (this.player.puppet.reviveCharges >= this.player.puppet.reviveChargeMax) {
					this.player.puppet.health = this.player.puppet.maxHealth;
					this.player.puppet.reviveCharges = 0;
					revived = true;
				}
			}
			if (this.player.puppet.health > 0 && (this.revive || this.held)) {
				let angle = new Angle(this.player.dir.value + PI / 2);
				if (this.player.controls.joystickPressed(0))
					angle.value = this.player.controls.angle(0).value;
				if (revived)
					angle.value = this.player.dir.value + PI;
				this.player.puppet.x = this.player.x + angle.getX() * this.player.puppetStartDistance;
				this.player.puppet.y = this.player.y + angle.getY() * this.player.puppetStartDistance;
				this.player.puppet.dx = 0;
				this.player.puppet.dy = 0;
				this.player.puppet.forceChangeState(this.player.puppet.states.REVIVE, this.player.puppet.states.REVIVE_ACTIONS);
				this.player.puppet.sheet.setAnimation("Revive");
				this.player.endPuppetAttacksLife();
				this.player.puppet.actionLag = 15;
			}
		}

		this.player.animateScythe(this.scytheAnimation);
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
			this.player.puppet.iFrames = 22;
			this.endLife();
		}
	}
}

class AsakamiSN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SN";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -1 * PI / 4),
			new ScytheFrame(-8, -45, -1.1 * PI / 4),
			new ScytheFrame(-4, -37, -1.2 * PI / 4),
			new ScytheFrame(0, -30, -1.4 * PI / 4),
			new ScytheFrame(0, -30, -1.5 * PI / 4),
			new ScytheFrame(0, -30, -1.7 * PI / 4),
			new ScytheFrame(0, -30, -2.5 * PI / 4),
			new ScytheFrame(0, -30, -3.4 * PI / 4),
			new ScytheFrame(0, -30, 2.3 * PI / 4),
			new ScytheFrame(-5, -30, 0.0 * PI / 4)
		];
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sour1 = new PriorityCircle(55, 10, 30, 0);
		let sour2 = new PriorityCircle(50, 30, 30, 0);
		let sour3 = new PriorityCircle(55, -10, 30, 0);
		let circles = [sour1, sour2, sour3];

		let sour = new AttackProperties().setDamage(40).setGrab(10).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(8, 0.1).setHitStun(31).setStunFrames(4).setWallPushback(300);
		let prop = [sour];

		return new this(player, circles, prop).setClashPriority(6).setStartupF(12).setActiveF(1).setEndF(26).setRotateable();
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

		this.player.animateScythe(this.scytheAnimation);
	}
}

class AsakamiPuppetSN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "SNP";

		this.puppetStunFrames = 10;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(25, 0, 40, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(46, 0, 40, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(67, 0, 30, 0).setVelocity(0.1, 0);
		let sour1 = new PriorityCircle(88, 0, 20, 1).setVelocity(0.1, 0);
		let sour2 = new PriorityCircle(110, 0, 10, 1).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3, sour1, sour2];

		let sweet = new AttackProperties().setDamage(15, 10).setAngleValue(player.dir.value).setLaunch(5, 1).setHitStun(5);
		let sour = new AttackProperties().setDamage(10, 10).setAngleValue(player.dir.value).setLaunch(3, 1).setHitStun(5);
		let prop = [sweet, sour];

		return new this(player.getParent(), circles, prop).setClashPriority(false).setStartupF(21).setActiveF(3).setEndF(19).setFollow(false);
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

class AsakamiRN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RN";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -PI / 3.7),
			new ScytheFrame(-10, -50, -PI / 3.7),
			new ScytheFrame(-15, -50, 1.1 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-10, -50, 1.2 * -PI / 3.7),
			new ScytheFrame(-10, -50, 1.1 * -PI / 3.7)
		];

		this.throw = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(-15, 60, 45, 0).setVelocity(0.1, 0).setSubVelocity(20, 0.5, -2);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 10).setLaunch(5, 1, 0.3).setHitStun(22, 16).setStunFrames(8);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(10).setActiveF(5).setEndF(14);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);

		if (player.puppet.currentState.name !== "RN" && player.canGrabPuppet()) {
			attack.throw = true;
			player.puppet.forceChangeState(player.puppet.states.NEUTRAL, player.puppet.states.NEUTRAL_ACTIONS);
			player.puppet.startRN();
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.throw && this.currentlyStartup()) {
			let angle = new Angle(this.player.dir.value + PI / 2);
			let targetX = this.player.x + angle.getX() * 60;
			let targetY = this.player.y + angle.getY() * 60;
			this.player.puppet.x = (this.player.puppet.x * 7 + targetX) / 8;
			this.player.puppet.y = (this.player.puppet.y * 7 + targetY) / 8;
		}
		if (this.throw && this.currentlyActive()) {
			this.player.puppet.x = (this.player.puppet.x + this.circleX(0) + 2 * this.circles[0].dx) / 2;
			this.player.puppet.y = (this.player.puppet.y + this.circleY(0) + 2 * this.circles[0].dy) / 2;
		}
		if (this.throw && this.getFromEndF() === 1) {
			let throwAngle = new Angle(this.player.dir.value + PI / 8);
			this.player.puppet.dx = throwAngle.getX() * 13;
			this.player.puppet.dy = throwAngle.getY() * 13;
		}

		this.player.animateScythe(this.scytheAnimation);
	}
}

class AsakamiPuppetRN extends PuppetAttack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RNP";

		this.revive = false;

		this.puppetStunFrames = 6;
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(55, 0, 80, 0).setVelocity(0.1, 0);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(10, 10).setProration(-2.5, 4).setAngleValue(player.dir.value).setLaunch(4, 0).setHitStun(5, 5);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(2).setStartupF(13).setActiveF(18).setEndF(20).setFollow(false).setMulti(4, 4, 2);
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
		this.rotateTo(this.player.puppet.dir);

		this.player.puppet.dx *= 0.98;
		this.player.puppet.dy *= 0.98;
	}

	hitConfirmSetFrames() {
		super.hitConfirmSetFrames();

		this.player.puppet.dx *= 0.2;
		this.player.puppet.dy *= 0.2;

		if (this.multi === 1) {
			this.properties[0].setHitStun(10, 5);
		}
	}
}

class AsakamiLN extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "LN";

		this.scytheAnimation = [
			new ScytheFrame(-10, -50, -PI / 3.7),
			new ScytheFrame(-10, -50, -PI / 3.7),
			new ScytheFrame(-15, -50, 1.1 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-15, -50, 1.4 * -PI / 3.7),
			new ScytheFrame(-10, -50, 1.2 * -PI / 3.7),
			new ScytheFrame(-10, -50, 1.1 * -PI / 3.7)
		];

		this.throw = false;
	}

	static createAttack(player) {
		let cancelOptions = [];

		let sweet1 = new PriorityCircle(-15, 60, 45, 0).setVelocity(0.1, 0).setSubVelocity(20, 0.5, -2);
		let circles = [sweet1];

		let sweet = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 10).setLaunch(5, 1, 0.3).setHitStun(22, 16).setStunFrames(8);
		let prop = [sweet];

		return new this(player, circles, prop).setClashPriority(5).setStartupF(10).setActiveF(5).setEndF(14);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.3);

		if (player.puppet.currentState.name !== "RN" && player.canGrabPuppet()) {
			attack.throw = true;
			player.puppet.forceChangeState(player.puppet.states.NEUTRAL, player.puppet.states.NEUTRAL_ACTIONS);
			player.puppet.startRN();
		}
	}

	draw(g) {
		if (this.currentlyActive()) {
			if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	logic() {
		if (this.throw && this.currentlyStartup()) {
			let angle = new Angle(this.player.dir.value + PI / 2);
			let targetX = this.player.x + angle.getX() * 60;
			let targetY = this.player.y + angle.getY() * 60;
			this.player.puppet.x = (this.player.puppet.x * 7 + targetX) / 8;
			this.player.puppet.y = (this.player.puppet.y * 7 + targetY) / 8;
		}
		if (this.throw && this.currentlyActive()) {
			this.player.puppet.x = this.circleX(0);
			this.player.puppet.y = this.circleY(0);
		}
		if (this.throw && this.getFromEndF() === 1) {
			let throwAngle = new Angle(this.player.dir.value - PI / 8);
			this.player.puppet.dx = throwAngle.getX() * 13;
			this.player.puppet.dy = throwAngle.getY() * 13;
		}

		this.player.animateScythe(this.scytheAnimation);
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

		let sweet = new AttackProperties().setDamage(100).setAngleValue(player.dir.value).setLaunch(7, 3, 1.1).setHitStun(30, 20).setStunFrames(14);
		let prop = [sweet];

		return new this(player.getParent(), circles, prop).setClashPriority(1).setStartupF(21).setActiveF(4).setEndF(20).setFollow(false);
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

		this.scytheAnimation = [
			new ScytheFrame(-3, -40, -1.24 * PI / 4),
			new ScytheFrame(-3, -40, -1.24 * PI / 4),
			new ScytheFrame(10, -20, -1.3 * PI / 4),
			new ScytheFrame(23, -15, -1.38 * PI / 4),
			new ScytheFrame(20, -10, -1.8 * PI / 4),
			new ScytheFrame(10, 35, 1.2 * PI / 4),
			new ScytheFrame(10, 35, 1.2 * PI / 4),
			new ScytheFrame(10, 20, 1.3 * PI / 4),
			new ScytheFrame(8, 5, 0.8 * PI / 4),
			new ScytheFrame(0, -10, 0.2 * PI / 4),
			new ScytheFrame(-5, -30, -0.8 * PI / 4),
			new ScytheFrame(-10, -50, -1.2 * PI / 4)
		];
	}

	static createAttack(player) {
		let sweet1 = new PriorityCircle(58, 0, 119, 0);
		let sweet2 = new PriorityCircle(52, 39, 121, 0);
		let sweet3 = new PriorityCircle(53, 80, 76, 0);
		let sweet4 = new PriorityCircle(57, -48, 102, 0);
		let sweet5 = new PriorityCircle(45, -111, 50, 0);
		let sour1 = new PriorityCircle(20, 122, 39, 1);
		let sour2 = new PriorityCircle(-24, 139, 39, 1);
		let circles = [sweet1, sweet2, sweet3, sweet4, sweet5, sour1, sour2];

		let sweet = new AttackProperties().setDamage(30, 30, 10).setAngleValue(player.dir.value).setLaunch(16).setHitStun(24, 4).setStunFrames(15, 19);
		let sour = new AttackProperties().setDamage(25, 30, 10).setAngleValue(player.dir.value).setLaunch(12).setHitStun(18, 4).setStunFrames(15, 19);
		let prop = [sweet, sour];

		return new this(player, circles, prop).setClashPriority(0).setStartupF(20).setActiveF(4).setEndF(23);
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
		if (this.getStartupF() > 10) {
			this.player.dir.changeValue(2 * PI * this.getStartupF() / 155);
		}

		this.player.animateScythe(this.scytheAnimation);
		this.player.autoActiveScythe(this);

		this.player.dx *= 0.85;
		this.player.dy *= 0.85;
		if (this.getStartupF() < 8 && this.getStartupF() > 0) {
			this.player.dx = this.player.dir.getX() * 7;
			this.player.dy = this.player.dir.getY() * 7;
		}
		if (this.hitPlayerBool) {
			this.player.dx *= 0.7;
			this.player.dy *= 0.7;
		}
		if (this.getFromStartupF() === 10) {
			this.player.invTo = ["attack"];
			this.player.iFrames = 14;
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

		return new this(player.getParent(), circles, prop).setClashPriority(1).setStartupF(21).setActiveF(4).setEndF(20).setFollow(false);
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
		scythe.dirOff.value = this.dirValue;
		scythe.dx = 0;
		scythe.dy = 0;
		scythe.dr = 0;
	}
}

Asakami.setupHitboxEdit = () => {
	debug.displayHurtboxes = true;
	currentScreen.players[0] = currentScreen.players[0].puppet;
};

characters.push(Asakami);