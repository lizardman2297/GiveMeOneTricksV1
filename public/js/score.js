if (sessionStorage.getItem("score") == null) {
    sessionStorage.setItem("score", 0);
    document.getElementById("yourScore").innerHTML = sessionStorage.getItem("score");
} else {
    document.getElementById("yourScore").innerHTML = sessionStorage.getItem("score");
    if (parseInt(sessionStorage.getItem("score")) === 0){
        document.getElementById("yourScore").style.color = "blue";
    } else if (parseInt(sessionStorage.getItem("score")) > 0){
        document.getElementById("yourScore").style.color = "#3A9B00";
    } else if (parseInt(sessionStorage.getItem("score")) < 0){
        document.getElementById("yourScore").style.color = "BB0000";
    }
}



function score(value) {
    if (value === "plus") {
        sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score")) + parseInt(document.getElementById("difficulty").innerHTML));
        document.getElementById("yourScore").innerHTML = sessionStorage.getItem("score");
        document.location.reload();
    } else if (value === "moins") {
        sessionStorage.setItem("score", parseInt(sessionStorage.getItem("score")) - parseInt(document.getElementById("difficulty").innerHTML));
        document.getElementById("yourScore").innerHTML = sessionStorage.getItem("score");
        document.location.reload();
    } else if (value === "zero") {
        document.location.reload();
    } else if (value === "reset") {
        sessionStorage.setItem("score", 0);
        document.getElementById("yourScore").innerHTML = sessionStorage.getItem("score");
        document.location.reload();
    }
}