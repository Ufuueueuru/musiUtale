let debug = {
    //Debug Displays
    displayFrameAdvantage: false,
    displayScalingPercent: false,
    displayHurtboxes: false,
    displayHitboxes: false,
    displayFrameRate: true,
    displayRollbackFrames: true,//Should always be true
    displayNetplayPauses: true,
    displayLostFrames: false,
    displayWalls: false,
    displayBlocking: false,

    negateDraw: false,
    throttleRun: 1,//This is the number of times per frame that the game tries to simulate while not drawing
    skipWinScreen: false,

    //Framerate Control
    frameRates: [],
    effectiveFrameRates: [],
    noSkipFrames: false,
    noSkipDraw: true,
    controlFrameRateMouse: false,
    manualFrameAdvance: false,

    //Debug Gameplay Settings
    negateHurtboxShifting: false,
    noNeutralBlock: false,

    //Other
    loadingBackDoor: false,
    noUpdateControls: false,
    escapeKeyExit: false,
    hitboxEditScreen: false
};