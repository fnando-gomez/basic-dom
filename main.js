
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

block.style.backgroundColor = "blue"

const moveRight = function(){

  document.getElementById("block").style.left += parseInt(document.getElementById("block").style.left + "px" )

  
const distance = (document.getElementById("block").style.left)
console.log(distance)
console.log(parseInt(distance)+150)

  document.getElementById("block").style.left += parseInt(distance + "px" )
}
  
