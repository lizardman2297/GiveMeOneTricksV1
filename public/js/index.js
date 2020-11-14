function selectSport(sport) {
    window.location.assign(`/sport/${sport}`)
}

function selectDifficulty(sport, difficulty) {
    console.log(difficulty)
    sessionStorage.setItem("score", 0)
    window.location.assign(`/sport/${sport}/${difficulty}`)
}