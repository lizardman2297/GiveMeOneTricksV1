let getRandomTricks = function getRandomTricks(tricksList) {
    let randomNumber;
    let tricks;

    return tricks = tricksList[getRandomInt(tricksList.length)];
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.getRandomTricks = getRandomTricks;