/**
 * return one random element of array
 * @param  tricksList list of tricks
 * @param difficulty Use for select one of trick difficulty in tricks List
 * @author Loris
 */
let getRandomTricks = function getRandomTricks(tricksList, dif = 0) {

    if (dif == 1 || dif == 2 || dif == 3) {
        do {
            trick = tricksList[getRandomInt(tricksList.length)]
        } while (trick["difficulty"] != dif)
    } else {
        trick = tricksList[getRandomInt(tricksList.length)]
    }
    return trick
}

/**
 * return random number (0 to @param max)
 * @param max
 * @author Loris
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.getRandomTricks = getRandomTricks;