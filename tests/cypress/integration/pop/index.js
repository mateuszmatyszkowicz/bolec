import homepage from "./homepage/homepage";

/**
 *
 * @param value
 * @returns {*}
 */
export function checkObjectsInMap(value) {

    if (homepage.setObjects().has(`${value}`)) {
        return homepage.setObjects().get(`${value}`)
    }
}
