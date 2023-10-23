//CHANGES TITLE
const title = document.getElementById("title")
const games = document.getElementsByClassName("game")
const gamesByTag = document.getElementsByTagName("li")
const gamesList= document.getElementById("game-list")

console.log(title)
title.innerText = 'Capcom Games'

//MODIFY AND ACCESS LIST ELEMENTS
games[0].innerHTML = "<h3>" + games[0].innerText + "</h3>"

for(let a = 0; a < games.length; a++){
    console.log(games[a].getAttribute("id"));
    games[a].style = "color: blue;"
}

games[0].removeAttribute("style")

//GET ELEMENTS BY TAG
console.log(gamesByTag)


//GET ELEMENTS BY ID


//const mhw = document.getElementById("mhw")
//mhw.parentNode.removeChild(mhw)

//CREATE NEW ELEMENT/TEXT
const newElement = document.createElement("h1")

newElement.innerText="Hello!"
document.getElementsByTagName('body')[0].appendChild(newElement)


//REMOVE GAME FUNCTION
// const removeButton = document.getElementById("remove-game")

const removeGame = () => {
    //alert('Removing one game')
    gamesList.removeChild(games[0]);
}

// removeButton.addEventListener("click", removeGame)
//removeButton.removeEventListener("click", removeGame)

//ADD GAME FUNCTION
const addGame = () => {
    // alert("Adding new game")
    const newGame = document.createElement("li");
    newGame.className = "game"
    const newText = document.createTextNode("Marvel Vs Capcom")
    newGame.appendChild(newText)
    gamesList.appendChild(newGame)
}