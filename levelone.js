//global functions
let playerHealth = 100
let enemyHealth = 25
const slashButton = document.querySelector("#slash")
const shootButton = document.querySelector("#shoot")
const punchButton = document.querySelector("#punch")
const playerHealthDisplay = document.getElementById("playerHealthDisplay")
playerHealthDisplay.innerText = playerHealth
const enemyHealthDisplay = document.getElementById("enemyHealthDisplay")
enemyHealthDisplay.innerText = enemyHealth
const gameScreen = document.querySelector("#game-screen")

console.log(slashButton, shootButton, punchButton)
//functions

const showIntro = () => {
    let intro = document.createElement('p')
    intro.innerText = `Enemy: "Hey, what're you doing here??"`
    gameScreen.prepend(intro)
}
showIntro()



//event listeners

slashButton.addEventListener('click', () => {
    console.log(slashButton)
})

shootButton.addEventListener('click', () => {
    console.log(slashButton)
})

punchButton.addEventListener('click', () => {
    console.log(slashButton)
})
