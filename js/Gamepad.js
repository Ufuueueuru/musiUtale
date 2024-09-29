let gamepads = navigator.getGamepads();

window.addEventListener("gamepaddisconnected", (e) => {
    print("disconnected");
    for (let i in controls) {
        if (controls[i] === controlsManager.gamepadControls[e.gamepad.index]) {
            controls.splice(i, 1);
            break;
        }
    }
    controlsManager.gamepadControls.splice(e.gamepad.index, 1);
});

window.addEventListener("gamepadconnected", (e) => {
    if (e.gamepad.axes?.length > 1 && e.gamepad.buttons?.length > 9) {
        let tempControls = new Controls("gamepad", e.gamepad.index, controlsManager.defaultGamepadControls.keys, controlsManager.defaultGamepadControls.arrows, controlsManager.defaultGamepadControls.deadzones);
        controlsManager.controls.push(tempControls);
        controlsManager.gamepadControls.push(tempControls);
    }
});

/*function gamepadHandler(event, connecting) {
  const gamepad = event.gamepad;
  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener("gamepadconnected", (e) => { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", (e) => { gamepadHandler(e, false); }, false);*/