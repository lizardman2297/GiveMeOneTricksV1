function validate(list, action) {
    let score = parseInt(document.getElementById("yourScore").innerHTML)
    updateScore(action, score)
    score = parseInt(document.getElementById("yourScore").innerHTML)
    switchColor(score)

    url = new URL(window.location)
    sport = getSport(url)
    difficulty = getDifficulty(url)

    tricksList = JSON.parse(list)
    
    trick = getRandomTricks(tricksList[`${sport}`], difficulty)

    if (sport == "parkour") {
        tricksName = trick.name
    }else {
        if (document.getElementById("rota").checked == true) {
            if (trick.type == "rotation" || trick.type == "teck") {
                tricksName = trick.name
            } else if (trick.type == "fly") {
                rotation = getRotation();
                tricksName = rotation + trick.name
            }
        } else {
            tricksName = trick.name
        }
    }

    tricksDifficulty = trick.difficulty

    document.getElementById("tricks").innerHTML = tricksName
    document.getElementById("difficulty").innerHTML = tricksDifficulty
}

function getRandomTricks(tricksList, dif = 0) {
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

/**
 * @function switchColor
 * @description Description
 *
 * @param {type} score Description
 *
 * @return {type} Description
 */
function switchColor(score) {
    if (score < 0) {
        document.getElementById("yourScore").style.color = 'red'
    } else if (score > 0) {
        document.getElementById("yourScore").style.color = 'green'
    } else if (score == 0) {
        document.getElementById("yourScore").style.color = 'blue'
    }
}

/**
 * @function getRotation
 * @description Description
 *
 * @return {type} Description
 */
function getRotation() {
    const random = Math.random();
    if(random.toFixed(2) <= 0.33) {
        return ""
    } else if(random.toFixed(2) >= 0.34 && random.toFixed(2) <= 0.66) {
        return "180 "
    } else if (random.toFixed(2) >= 0.67 && random.toFixed(2) <= 1) {
        return "360 "
    }
}

function reset() {
    document.getElementById("yourScore").innerHTML = 0
    switchColor(0)
}

function updateScore(action, score) {
    switch (action) {
        case "success":
            score = score + parseInt(document.getElementById("difficulty").innerHTML)
            document.getElementById("yourScore").innerHTML = score
            break;
        case "fail":
            score = score - parseInt(document.getElementById("difficulty").innerHTML)
            document.getElementById("yourScore").innerHTML = score
            break;
        case "skip":
            score = score
            document.getElementById("yourScore").innerHTML = score
            break;
    }
}

function getSport(url) {
    return url.pathname.split("/")[2]
}

function getDifficulty(url) {
    return url.pathname.split("/")[3]
}