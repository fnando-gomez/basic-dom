
const playingField = document.getElementById("playing-field")
console.log(playingField)

const down = document.getElementById("down")
console.log(down)

down.innerHTML =  "Down"

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
    left += 150
    block.style.left =left +"px"
    return ("You're doing great")
}
