var getRandomTricks = function getRandomTricks(listeTricks) {
    let alreadyTaken = [];
    let randomNumber;
    let tricks;

    randomNumber = getRandomInt(listeTricks.length);
    tricks = listeTricks[randomNumber];
    return tricks;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.getRandomTricks = getRandomTricks;

