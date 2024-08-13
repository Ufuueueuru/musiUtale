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
			new ICircle(48, 5, 15),
			new ICircle(49, 18, 15)],
			[new Circle(-1, 6, 49),
			new Circle(12, -4, 46),
			new Circle(24, -13, 25),
			new Circle(-19, 25, 27),
			new ICircle(42, -5, 15),
			new ICircle(48, 5, 15),
			new ICircle(49, 18, 15)],
			[new Circle(-1, 6, 49),
			new Circle(14, -3, 46),
			new Circle(26, -9, 25),
			new Circle(-22, 22, 27),
			new ICircle(42, -5, 15),
			new ICircle(48, 5, 15),
			new ICircle(49, 18, 15)],
			[new Circle(-1, 6, 49),
			new Circle(14, -3, 46),
			new Circle(26, -9, 25),
			new Circle(-22, 22, 27),
			new ICircle(42, -5, 15),
			new ICircle(48, 5, 15),
			new ICircle(49, 18, 15)],
			[new Circle(1, 10, 49),
			new Circle(10, -10, 46),
			new ICircle(-36, 51, 16),
			new Circle(-4, 32, 27),
			new ICircle(29, -29, 15),
			new ICircle(-18, 43, 15),
			new ICircle(47, -13, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-17, -38, 15),
			new ICircle(35, 36, 15),
			new ICircle(-31, -60, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-17, -38, 15),
			new ICircle(35, 36, 15),
			new ICircle(-31, -60, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(20, 26, 27),
			new ICircle(-17, -38, 15),
			new ICircle(35, 36, 15),
			new ICircle(-31, -60, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(51, 48, 16),
			new Circle(16, 28, 27),
			new ICircle(-17, -38, 15),
			new ICircle(35, 36, 15),
			new ICircle(-31, -60, 15)],
			[new Circle(6, 9, 49),
			new Circle(-5, -12, 46),
			new ICircle(39, 56, 16),
			new Circle(10, 31, 27),
			new ICircle(-17, -38, 15),
			new ICircle(20, 48, 15),
			new ICircle(-31, -60, 15)],
			[new Circle(3, 9, 49),
			new Circle(6, -15, 46),
			new ICircle(31, 62, 16),
			new Circle(4, 31, 27),
			new ICircle(6, -44, 15),
			new ICircle(12, 50, 15),
			new ICircle(22, -62, 15)],
			[new Circle(2, 9, 49),
			new Circle(10, -11, 46),
			new ICircle(17, 64, 16),
			new Circle(-7, 32, 27),
			new ICircle(25, -34, 15),
			new ICircle(-5, 53, 15),
			new ICircle(51, -40, 15)],
			[new Circle(-2, 6, 49),
			new Circle(13, -8, 45),
			new ICircle(-24, 61, 16),
			new Circle(-19, 25, 27),
			new ICircle(42, -20, 15),
			new ICircle(-34, 39, 15),
			new ICircle(64, -2, 15)],
			[new Circle(-2, 6, 49),
			new Circle(13, -8, 45),
			new ICircle(-43, 54, 16),
			new Circle(-19, 25, 27),
			new ICircle(42, -5, 15),
			new ICircle(-31, 41, 15),
			new ICircle(48, 19, 15)]
		];

		this.hurtboxes["RL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["LL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["ML"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["NS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["SS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["RS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["LS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["MS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["NPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["SPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["RPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["LPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["MPL"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["NPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["SPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["RPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["LPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["MPS"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["NN"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.hurtboxes["SN"] = [
			[new Circle(0, 5, 50),
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
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
			new Circle(15, -9, 40),
			new Circle(25, -15, 25),
			new Circle(-20, 25, 25),
			new ICircle(42, -5, 15),
			new ICircle(47, 5, 15),
			new ICircle(52, 15, 15)]
		];

		this.headNoun = "󱤑";//jan
		this.name = currentLanguage === "tp" ? "󱤑󱦐󱦗󱤮󱤏󱥔󱤈󱦑" : "Lipa";//jan Lipa

		this.selectScreenSizeOffset = 60;

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
		this.states.LN_ACTIONS = [];
		this.states.LNF = State.copyState(State.LN).setName("LNF");

        this.collideRadius = 55;

		this.movementSpeed = 1.9;
		this.forwardSpeedBoost = 0.7;

		this.OOBBlockFrame = 6;

        this.turnSpeed = 0.015;

        this.dash.speed = 9;
        this.dash.frames = 20;
        this.dash.invFirstFrame = this.dash.frames - 4;
        this.dash.turnSpeedBoost = 0.1;
		this.dash.neutralBoost = 0;
		this.dash.backPenalty = 1;//How much your speed decreases from dashing backwards
		this.dash.cancelBackPenaltyMult = 2;

        this.dash.iFrames = 13;
        this.dash.invTo = ["attack"];
        this.dash.dashAttackLastFrame = this.dash.frames - 8;
		this.dash.attackCancelFrame = this.dash.frames - 13;
		this.dash.grabCancelFrame = this.dash.frames - 25;
		this.dash.blockCancelFrame = this.dash.frames - 17;

		this.dash.comboDashFrame = this.dash.frames - 25;
		this.dash.combos = 0;
		this.dash.maxCombos = 4;

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
		this.dashCancelRegenFull = 160;
		this.dashCancelsMax = 5;
		this.dashCancels = this.dashCancelsMax;
		this.dashDisplays = [];
		for (let i = 0; i < this.dashCancelsMax; i++) {
			this.dashDisplays.push(Spritesheet.copy(assetManager.spritesheets.tawaEnKama));
			this.dashDisplays[i].currentFrame = i;
		}

		this.rightHanded = true;

		this.chargeNN = 0;
		this.chargeNNMax = 55;

		this.rnEndLag = 20;
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
			if (this.dashCancelRegen >= this.dashCancelRegenFull + (this.dashCancels <= 0 ? this.dashCancelRegenFull * 2 : 0)) {
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
		let leftX = 512 * 0.12 + 512 * 0.76 * i - 35;

		g.push();
		g.translate(x, y);

		for (let i in this.dashDisplays) {
			this.dashDisplays[i].draw(g, leftX + 15 * i, 65, 15, 15);
		}
		if (this.dashCancels === 0) {
			g.stroke(196, 19, 41, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + 75 * (this.dashCancelRegenFull * 3 - this.dashCancelRegen) / this.dashCancelRegenFull / 3, 85);
		} else if (this.chargeNN > 0) {
			g.stroke(210, 210, 210, (this.dashCancelRegenFull - this.dashCancelRegen / 3) + 100);
			g.noFill();
			g.strokeWeight(3);
			g.line(leftX, 85, leftX + 75 * this.chargeNN / this.chargeNNMax, 85);
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

	copyHurtbox(target) {
		for (let i in target) {
			this.circles.push(new Circle(target[i].x, target[i].y, target[i].diameter));
			if (target[i].intangible)
				this.circles[i].intangible = target[i].intangible;
			if (!this.rightHanded)
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

    static addAssets() {
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
		let cancelOptions = ["NN", "dash"];

		let sour1 = new PriorityCircle(0, 10, 160, 0).setVelocity(0.1, 0.02);
		let sweet1 = new PriorityCircle(0, 10, 210, 1).setVelocity(0.1, 0.02);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(40, -20, 8).setProration(-2, 2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 9, 0.5).setHitStun(25, 18).setStunFrames(15).setWallPushback(5, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1).setAngleTypes("vel", "direct");
		let sweet = new AttackProperties().setDamage(45, -22, 8).setProration(-2, 2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 8, 0.5).setHitStun(26, 18).setStunFrames(15).setWallPushback(5, 1).setWallLaunchMod(10).setNormalizeHitStun().setChip(0.1).setAngleTypes("vel", "direct");
		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(13).setActiveF(6).setEndF(20).reflectHitboxes(player.rightHanded);
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiplyDash(1.5);
	}

	draw(g) {
		if (this.getFromStartupF() === 10) {
			this.player.iFrames = 9;
			this.player.invTo = ["attack"];
		}
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
		if (this.getStartupF() === 1) {
			this.player.rightHanded = !this.player.rightHanded;
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

		let ultraSour = new AttackProperties().setDamage(12).setProration(0.5, 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(13).setProration(-0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1).setLaunchDampening(0.5).setHitStun(30, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(16).setProration(-0.8, 1.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(32, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

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
		
		let ultraSour = new AttackProperties().setDamage(28).setProration(1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 1).setHitStun(29, 8).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(1.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, 0.5).setHitStun(31, 9).setStunFrames(14).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(33).setProration(0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(2, 0.1).setHitStun(34, 12).setStunFrames(14).setWallPushback(6, 4).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
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
		let cancelOptions = ["NL", "NN", "MN"];

		let ultraSour1 = new PriorityCircle(20, 22, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour2 = new PriorityCircle(0, 38, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let ultraSour3 = new PriorityCircle(-20, 45, 20, 0).setCircleVelocity(40, 1, -10, 40);
		let sour1 = new PriorityCircle(40, 15, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour2 = new PriorityCircle(56, 5, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sour3 = new PriorityCircle(74, 0, 30, 1).setCircleVelocity(40, 1, -10, 40);
		let sweet1 = new PriorityCircle(91, -5, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let sweet2 = new PriorityCircle(91, -15, 20, 2).setCircleVelocity(40, 1, -10, 40);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(29, 10).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(16).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(31, 10).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(18).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, 0.1).setHitStun(34, 11).setStunFrames(14).setWallPushback(15, 4).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
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
			let speed = 5;
			this.player.dx += angle.getX() * speed;
			this.player.dy += angle.getY() * speed;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.85;
			this.player.dy *= 0.85;
		}
		if (this.getStartupF() > 4) {
			this.player.dir.value += (this.player.rightHanded ? -1 : 1) * 0.2;
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

		let ultraSour = new AttackProperties().setDamage(20).setProration(0, 0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 19).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(21).setProration(-0.3, 0.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1).setLaunchDampening(0.5).setHitStun(30, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(25).setProration(-0.6, 1.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(6, 0.1).setLaunchDampening(0.2).setHitStun(32, 23).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

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

		let sweet1 = new PriorityCircle(30, 25, 50, 0).setVelocity(0.1, 0);
		let sweet2 = new PriorityCircle(30, -25, 50, 0).setVelocity(0.1, 0);
		let sweet3 = new PriorityCircle(40, 0, 60, 0).setVelocity(0.1, 0);
		let circles = [sweet1, sweet2, sweet3];

		let sweet = new AttackProperties().setDamage(25).setProration(-0.5, 2.3).setCancelOptions(cancelOptions, hitCancelOptions).setAngleValue(player.dir.value).setLaunch(3, 2, 0.2).setHitStun(24, 20).setStunFrames(13).setWallPushback(15, 10).setNormalizeHitStun();
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

		let ultraSour = new AttackProperties().setDamage(35).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(29, 9).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(38).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(31, 10).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(40).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 2).setLaunch(6, 0.1, 0.1).setHitStun(34, 11).setStunFrames(14, 18).setWallPushback(15, 4).setNormalizeHitStun().setChip(0.5).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
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
		let cancelOptions = ["RN", "SPS", "NN", "dash"];

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

		let ultraSour = new AttackProperties().setDamage(33).setProration(1, -1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(5, -5).setHitStun(29, 12).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(36).setProration(1, -1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(4, -7).setHitStun(31, 12).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(36).setProration(1, -1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, -8).setHitStun(34, 13).setStunFrames(14).setNormalizeHitStun().setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
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

		let ultraSour = new AttackProperties().setDamage(15).setProration(0.1, 0.9).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7, 0.1).setLaunchDampening(1).setHitStun(26, 14).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(16).setProration(-0.5, 1.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7, 0.1).setLaunchDampening(0.5).setHitStun(30, 15).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(21).setProration(-0.8, 1.8).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(2, 0.1).setLaunchDampening(0.2).setHitStun(32, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

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
		let cancelOptions = ["NS", "NPL", "RPL", "NPS", "SPS", "RPS", "NN", "dash"];

		let ultraSour1 = new PriorityCircle(0, 17, 20, 0).setVelocity(7, 2);
		let ultraSour2 = new PriorityCircle(-20, 10, 20, 0).setVelocity(7, 2);
		let ultraSour3 = new PriorityCircle(-40, 5, 20, 0).setVelocity(7, 2);
		let sour1 = new PriorityCircle(20, 20, 30, 1).setVelocity(7, 3);
		let sour2 = new PriorityCircle(36, 30, 30, 1).setVelocity(7.5, 3);
		let sour3 = new PriorityCircle(54, 48, 30, 1).setVelocity(8, 4);
		let sweet1 = new PriorityCircle(68, 53, 20, 2).setVelocity(10, 5);
		let sweet2 = new PriorityCircle(71, 51, 20, 2).setVelocity(10, 5);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sour3, sweet1, sweet2];

		let ultraSour = new AttackProperties().setDamage(27).setProration(0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 6).setLaunch(2, 0.1).setLaunchDampening(1).setHitStun(26, 24).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(33).setProration(-0.1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(3, 0.1).setLaunchDampening(0.5).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(38).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(1, 0.1).setLaunchDampening(0.2).setHitStun(30, 27).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(14).setActiveF(8).setEndF(16).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
				this.debugDraw(g);
		}
	}

	static startAttack(player, attack, bufferInfo) {
		player.startMomentumMultiply(0);
		player.startMomentumMultiplyDash(0.25);
	}

	logic() {
		if (this.getFromStartupF() === 5) {
			let angle = new Angle(this.dir.value).changeValue(PI / 5 * this.rightHanded ? -1: 1);
			this.player.dx += angle.getX() * 5;
			this.player.dy += angle.getY() * 5;
		}
		if (this.getActiveF() <= 0) {
			this.player.dx *= 0.9;
			this.player.dy *= 0.9;
		}
	}
}

class LipaRPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "RPL";
	}

	static createAttack(player) {
		let cancelOptions = ["SL", "NL", "NS", "NPL", "NPS", "SPS", "NN", "MN"];

		let sour1 = new PriorityCircle(40, 40, 70, 0).setVelocity(0.1, 0);
		let sweet1 = new PriorityCircle(40, 40, 160, 1).setVelocity(0.1, 0);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(15).setProration(-1.1, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(7.5, 3.5).setLaunchDampening(0.5).setHitStun(26, 17).setStunFrames(13).setWallPushback(6).setChip(0.1);
		let sweet = new AttackProperties().setDamage(20).setProration(-1.5, 1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 16).setLaunch(6.5, 2.5).setLaunchDampening(0.2).setHitStun(26, 18).setStunFrames(13).setWallPushback(5).setChip(0.1);

		let prop = [sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(18).setActiveF(12).setEndF(29).setRotateable().reflectHitboxes(!player.rightHanded);
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

		let sweet = new AttackProperties().setDamage(45, 15, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(20, 20).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(5);
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
			this.player.dir.changeValue((0.7 * this.getActiveF() / 6) ** 2 * (this.player.rightHanded ? -1 : 1));
		}
	}
}

class LipaMPL extends Attack {
	constructor(player, circles = [], props = []) {
		super(player, circles, props);
		this.name = "MPL";
	}

	static createAttack(player) {
		let cancelOptions = ["SPL", "SPS", "NN", "dash"];

		let ultraSour3 = new PriorityCircle(-40, 40, 20, 0).setVelocity(7, 7);
		let ultraSour2 = new PriorityCircle(-21, 44, 20, 0).setVelocity(7, 7.2);
		let ultraSour1 = new PriorityCircle(-2, 49, 20, 0).setVelocity(7, 7.4);
		let sour1 = new PriorityCircle(12, 50, 30, 1).setVelocity(7, 8);
		let sour2 = new PriorityCircle(31, 57, 30, 1).setVelocity(7.5, 8.9);
		let sweet1 = new PriorityCircle(74, 60, 40, 2).setVelocity(11, 11);
		let circles = [ultraSour1, ultraSour2, ultraSour3, sour1, sour2, sweet1];

		let ultraSour = new AttackProperties().setDamage(34).setProration(1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(4, 0.1).setLaunchDampening(1).setHitStun(23, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(35).setProration(-0.4).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(4, 0.1).setLaunchDampening(0.5).setHitStun(26, 22).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(40).setProration(-0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value + PI / 4).setLaunch(3.5, 0.1).setLaunchDampening(0.2).setHitStun(28, 25).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

		let prop = [ultraSour, sour, sweet];

		return new this(player, circles, prop).setClashPriority(2).setStartupF(16).setActiveF(4).setEndF(17).setRotateable().reflectHitboxes(!player.rightHanded);
	}

	draw(g) {
		if (this.currentlyActive()) {
			//if (debug.displayHitboxes)
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

		let ultraSour = new AttackProperties().setDamage(17).setProration(-0.5, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1).setHitStun(28, 14).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sour = new AttackProperties().setDamage(18).setProration(-0.5, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(7, 0.1).setHitStun(30, 15).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);
		let sweet = new AttackProperties().setDamage(22).setProration(-0.6, 0.2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 0.1).setHitStun(32, 20).setStunFrames(13).setWallPushback(3).setChip(0.25).setHitSound(assetManager.sounds.spearHit).setBlockSound(assetManager.sounds.spearBlock);

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
		let cancelOptions = ["SL", "NL", "NS", "NPL", "NPS", "SPS", "NN", "MN"];

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

		let sweet = new AttackProperties().setDamage(60, 16, 10).setProration(2).setCancelOptions(cancelOptions).setAngleValue(player.dir.value - PI / 4).setLaunch(3, 2).setHitStun(28, 20).setStunFrames(13, 8).setWallPushback(5, 4).setCancelWait(5, 5);
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

		let sour1 = new PriorityCircle(0, 10, 140, 0).setVelocity(0.1, 0.02);
		let sweet1 = new PriorityCircle(0, 10, 180, 1).setVelocity(0.1, 0.02);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(10).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 2, -0.3).setHitStun(25, 6).setStunFrames(15).setWallPushback(0.5, 2).setNormalizeHitStun().setAngleTypes("vel", "direct");
		let sweet = new AttackProperties().setDamage(15).setCancelOptions(cancelOptions).setAngleValue(player.dir.value).setLaunch(10, 2, -0.3).setHitStun(26, 7).setStunFrames(15).setWallPushback(0.5, 2).setNormalizeHitStun().setAngleTypes("vel", "direct");
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

		return new this(player, circles, prop).setClashPriority(6).setStartupF(10).setActiveF(6).setEndF(27).setRotateable().reflectHitboxes(!player.rightHanded);
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
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 6).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 6).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

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
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 9).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value + PI / 9).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

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
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 9).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 9).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

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
		let sour = new AttackProperties().setDamage(25, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 6).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);
		let sweet = new AttackProperties().setDamage(29, 10, 10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value - PI / 6).setLaunch(launch, 0.5).setHitStun(30, 8).setLaunchDampening(1.2, 12).setWallPushback(3).setStunFrames(4);

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

			let sweet = new AttackProperties().setDamage(10).setProration(-1).setCancelOptions(cancelOptions).setAngleValue(this.player.dir.value).setLaunch(3, 0.1).setHitStun(50).setStunFrames(15);
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
		let cancelOptions = ["lili", "suli", "poka lili", "poka suli", "nasa", "dash"];

		let sour1 = new PriorityCircle(100, -50, 30, 0).setCircleVelocity(12);
		let sweet1 = new PriorityCircle(50, -20, 25, 1).setCircleVelocity(12);
		let circles = [sour1, sweet1];

		let sour = new AttackProperties().setDamage(61).setProration(1, -1).setCancelOptions(cancelOptions).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(5, 0.1).setHitStun(45, 3).setCancelWait(5, 8);
		let sweet = new AttackProperties().setDamage(65).setProration(-0.5, -0.5).setCancelOptions(cancelOptions).setAngleValue(player.dir.value, 2 * PI / 17).setLaunch(5, 0.1).setHitStun(45, 3).setCancelWait(5, 8);

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
	}
}

characters.push(Lipa);