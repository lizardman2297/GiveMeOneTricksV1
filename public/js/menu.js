function switchDrop() {
    if (document.getElementById("drop").classList.contains("dropDisp")) {
        document.getElementById("drop").classList.add("dropHide")
        document.getElementById("drop").classList.remove("dropDisp")
        document.getElementsByClassName("menu")[0].style.zIndex = 0
    }else if (document.getElementById("drop").classList.contains("dropHide")) {
        document.getElementById("drop").classList.remove("dropHide")
        document.getElementById("drop").classList.add("dropDisp")
        document.getElementsByClassName("menu")[0].style.zIndex = 10
    }
}