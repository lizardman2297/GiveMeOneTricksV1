function reset() {
    document.getElementById("yourScore").innerHTML = 0
}

function test(list, action) {
    let score = parseInt(document.getElementById("yourScore").innerHTML)
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
    switchColor(score)



    url = new URL(window.location)
    sport = url.pathname.split("/")[2]
    difficulty = url.pathname.split("/")[3]

    tricksList = JSON.parse(list)
    trick = getRandomTricks(tricksList[`${sport}`], difficulty)
    tricksName = trick.name
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

function switchColor(score) {
    if (score < 0) {
        document.getElementById("yourScore").style.color = 'red'
        
    } else if (score > 0) {
        //TODO green
        document.getElementById("yourScore").style.color = 'green'

    } else if (score = 0) {
        //TODO blue
        document.getElementById("yourScore").style.color = 'blue'

    }
    console.log("okkk")
}