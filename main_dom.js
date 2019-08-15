
const playingField = document.getElementById("playing-field")
console.log(playingField)

const down = document.getElementById("down")
console.log(down)

const up = document.getElementById("up")
console.log(up)

down.innerHTML =  "Down"
up.innerHTML = "Up"

console.log(down.innerHTML)

console.log(playingField.innerHTML)

//playingField.style.backgroundColor = "blue"

console.log(playingField.style.backgroundColor)

const block = document.getElementById("block")
console.log(block)

block.style.backgroundColor = "green"

const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left =left +"px"
    return ("You're doing great")
}

// Create & add elements

const header = document.createElement("h1") // Se crea una variable en que representa un elemento "html" dinámico
header.innerHTML = "The Best Game Ever"

header.style.color = "#0065af"
header.style.fontFamily = "Comic"
//header.setAttribute("class", "arrow")
// Se puede utilizar para incluir todos los atributos de una clase ya declarada al nuevo elemento dinámico

document.body.appendChild(header) //Se inserta en la página por medio del "document", en este caso en el "body"

const subHeader = document.createElement("h2")
subHeader.innerHTML = "There's not free lunch"

subHeader.setAttribute("class", "sub-header")

document.body.appendChild(subHeader)

// Events

const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#8e44ad"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const test = document.getElementsByClassName("arrow")

console.log(test)


