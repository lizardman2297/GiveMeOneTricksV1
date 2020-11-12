function switchDrop() {
    if (document.getElementById("drop").style.visibility == "visible") {
        document.getElementById("drop").style.visibility = "hidden"
    }else if (document.getElementById("drop").style.visibility == "hidden" || document.getElementById("drop").style.visibility == "") {
        document.getElementById("drop").style.visibility = "visible"
    }
}