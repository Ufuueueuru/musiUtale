let gamepads = navigator.getGamepads();

window.addEventListener("gamepaddisconnected", (e) => {
    print("disconnected", e.gamepad.index);
    for (let i = controls.length - 1; i >= 0; i--) {
        if (controls[i].layout === "gamepad") {
            /*if (controls[i].getKeyspad() > e.gamepad.index) {
                controls[i].setKeyspad(controls[i].getKeyspad() - 1);
                continue;
            }*/
            if (controls[i].getKeyspad() === e.gamepad.index) {
                controls.splice(i, 1);
                continue;
            }
        }
    }
    for (let i = controlsManager.gamepadControls.length - 1; i >= 0; i--) {
        /*if (controlsManager.gamepadControls[i].getKeyspad() > e.gamepad.index) {
            controlsManager.gamepadControls[i].setKeyspad(controlsManager.gamepadControls[i].getKeyspad() - 1);
            continue;
        }*/
        if (controlsManager.gamepadControls[i].getKeyspad() === e.gamepad.index) {
            controlsManager.gamepadControls.splice(i, 1);
            continue;
        }
    }
});

window.addEventListener("gamepadconnected", (e) => {
    if (e.gamepad.axes?.length > 1 && e.gamepad.buttons?.length >= 15 && e.gamepad.mapping === "standard") {
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