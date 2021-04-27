
const moveRight = function(){
    let param = parseInt(document.getElementById("block").style.left) || 0
    param += 15
    param += "px"
    document.getElementById("block").style.left = param
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Some Text for H2"
document.body.appendChild(subHeader)

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#5b4tff"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const onClick = function () {
    box.style.backgroundColor = "#8e44ad"
    box.innerHTML = "click"
}

const Box2 = document.getElementById("box2")
Box2.onclick = function () {
    Box2.innerHTML = "clicked2"
}
const addElement = function () {
    const newElement = document.createElement("li")
    newElement.innerHTML = " new Item !"
    document.getElementById("addTx").appendChild(newElement)
}
