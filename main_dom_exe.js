
//Spot Check 6 
const list = document.getElementById("myList")
const addItem = function() {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new Item!"
    list. appendChild(newItem)
}