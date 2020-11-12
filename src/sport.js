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


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.getRandomTricks = getRandomTricks;