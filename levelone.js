//global functions
let playerHealth = 100
let enemyHealth = 50
let playerChoice
let enemyChoice
const slashButton = document.querySelector("#slash")
const shootButton = document.querySelector("#shoot")
const punchButton = document.querySelector("#punch")
const playerHealthDisplay = document.getElementById("playerHealthDisplay")
playerHealthDisplay.innerText = `HP: ${playerHealth}`
const enemyHealthDisplay = document.getElementById("enemyHealthDisplay")
enemyHealthDisplay.innerText = `HP: ${enemyHealth}`
const gameScreen = document.querySelector("#game-screen")
const battleLog = document.getElementById("battleLog")


//functions

const showIntro = () => {
    let intro = document.createElement('p')
    intro.classList.add('dialogue')
    intro.innerText = `Tree Frog: "Hey, what're you doing in my part of the swamp, punk?" (click to continue) --->`
    gameScreen.prepend(intro)
    battleLog.classList.toggle('invisible')
    slashButton.classList.toggle('invisible')
    shootButton.classList.toggle('invisible')
    punchButton.classList.toggle('invisible')
    enemyHealthDisplay.classList.toggle('invisible')
    playerHealthDisplay.classList.toggle('invisible')
}
showIntro()

const showBattleLog = () => {
    if(battleLog.classList.value === 'invisible'){
        battleLog.classList.toggle('invisible')
    }
}

// const continueDialogue = () => {
//     document.getElementById('game-screen').children[0].remove()
//     let intro2 = document.createElement('p')
//     intro2.classList.add('dialogue')
//     intro2.innerText = `You: ribbit`
//     gameScreen.prepend(intro2)
// }

const startBattle = () => {
    slashButton.classList.toggle('invisible')
    shootButton.classList.toggle('invisible')
    punchButton.classList.toggle('invisible')
    enemyHealthDisplay.classList.toggle('invisible')
    playerHealthDisplay.classList.toggle('invisible')
}

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
        battleLog.innerText = `It's a tie! You both chose ${playerChoice} and both took 5 damage.`
    }
    else if(playerChoice === "slash" && enemyChoice === "shoot"){
        enemyHealth -= 10
        battleLog.innerText = `You ${playerChoice} through! The enemy chose ${enemyChoice} and takes 10 damage.`
    }
    else if(playerChoice === "slash" && enemyChoice === "punch"){
        playerHealth -= 10
        battleLog.innerText = `They stop you in your tracks! The enemy chose ${enemyChoice} and you take 10 damage.`
    }
    else if(playerChoice === "shoot" && enemyChoice === "slash"){
        playerHealth -= 10
        battleLog.innerText = `They stop you in your tracks! The enemy chose ${enemyChoice} and you take 10 damage.`
    }
    else if (playerChoice === "shoot" && enemyChoice === "punch"){
        enemyHealth -= 10
        battleLog.innerText = `You ${playerChoice} through! The enemy chose ${enemyChoice} and takes 10 damage.`
    }
    else if (playerChoice === "punch" && enemyChoice === "shoot"){
        playerHealth -= 10
        battleLog.innerText = `They stop you in your tracks! The enemy chose ${enemyChoice} and you take 10 damage.`
    }
    else if (playerChoice === "punch" && enemyChoice === "slash"){
        enemyHealth -= 10
        battleLog.innerText = `You ${playerChoice} through! The enemy chose ${enemyChoice} and takes 10 damage.`
    }
    enemyHealthDisplay.innerText = `HP: ${enemyHealth}`
    playerHealthDisplay.innerText = `HP: ${playerHealth}`
}

const chooseSlash = () => {
    playerChoice = "slash"
    randomChoice()
    updateHealth()
}

const chooseShoot = () => {
    playerChoice = "shoot"
    randomChoice()
    updateHealth()
}

const choosePunch = () => {
    playerChoice = "punch"
    randomChoice()
    updateHealth()
}

const checkWinner = () => {
    showBattleLog()
    if(playerHealth > 0 && enemyHealth <= 0){
        let winScreen = document.getElementById('win-screen')
        winScreen.id = null
        winScreen.classList.toggle("win-screen")
    }
    else if (playerHealth <= 0 && enemyHealth > 0){
        let loseScreen = document.getElementById('lose-screen')
        loseScreen.id = null
        loseScreen.classList.toggle("lose-screen")
    }
    else if (playerHealth <= 0 && enemyHealth <= 0){
        let loseScreen = document.getElementById('lose-screen')
        loseScreen.id = null
        loseScreen.classList.toggle("lose-screen")
    }
}

const restartGame = () => {
        let loseScreen = document.querySelector('.lose-screen')
        console.log(loseScreen)
        playerHealth = 100
        enemyHealth = 25
        enemyHealthDisplay.innerText = `HP: ${enemyHealth}`
        playerHealthDisplay.innerText = `HP: ${playerHealth}`
        loseScreen.classList.toggle("lose-screen")
        loseScreen.id = "lose-screen"
}



//event listeners

slashButton.addEventListener('click', () => {
    if(playerHealth > 0 && enemyHealth > 0){
        chooseSlash()
        checkWinner()
    }
    else{
        return
    }
})

shootButton.addEventListener('click', () => {
    if(playerHealth > 0 && enemyHealth > 0){
        chooseShoot()
        checkWinner()
    }
    else{
        return
    }
})

punchButton.addEventListener('click', () => {
    if(playerHealth > 0 && enemyHealth > 0){
        choosePunch()
        checkWinner()
    }
    else{
        return
    }
})

document.getElementById('retry-button').addEventListener('click', restartGame)

document.getElementById('game-screen').children[0].addEventListener('click', () => {
    startBattle()
    document.getElementById('game-screen').children[0].remove()
})