import keyboardKeys from "./keyboardKeys/keyboardKeys";

/**
 *
 * @param value
 * @returns {*}
 */
export function checkConstsInMap(value) {
    if (keyboardKeys.setObjects().has(`${value}`)) {
        return keyboardKeys.setObjects().get(`${value}`)
    }
}
