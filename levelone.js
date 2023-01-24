//global functions
let playerHealth = 100
let enemyHealth = 25
let playerChoice
let enemyChoice
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

const randomChoice = () => {
    if(Math.floor(Math.random()*10) <= 3){
        enemyChoice = "slash"
    }
    else if (Math.floor(Math.random()*10) > 3 && Math.floor(Math.random()*10) <= 6){
        enemyChoice = "shoot"
    }
    else{
        enemyChoice = "punch"
    }
}

const updateHealth = () => {
    if(playerChoice === enemyChoice){
        enemyHealth -= 5
        playerHealth -= 5
    }
    else if(playerChoice === "slash" && enemyChoice === "shoot"){
        enemyHealth -= 10
    }
    else if(playerChoice === "slash" && enemyChoice === "punch"){
        playerHealth -= 10
    }
}

const chooseSlash = () => {
    playerChoice = "slash"
    randomChoice()
    console.log(enemyChoice, playerChoice)

}




//event listeners

slashButton.addEventListener('click', () => {
    console.log(slashButton)
    chooseSlash()
})

shootButton.addEventListener('click', () => {
    console.log(slashButton)
})

punchButton.addEventListener('click', () => {
    console.log(slashButton)
})
