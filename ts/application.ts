/// <reference path="./game.d.ts" />
import {KeyboardInputManager} from "./keyboard_input_manager"
import {HTMLActuator} from "./html_actuator"
import {LocalStorageManager} from "./local_storage_manager"
import {GameManager} from "./game_manager"

///
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(() => {
	new GameManager(4, new KeyboardInputManager, new HTMLActuator, new LocalStorageManager);
});
