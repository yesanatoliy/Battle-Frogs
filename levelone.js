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
const battleLog = document.getElementById("battleLog")
console.log(battleLog)

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
    enemyHealthDisplay.innerText = enemyHealth
    playerHealthDisplay.innerText = playerHealth
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
    if(playerHealth > 0 && enemyHealth <= 0){
        let winScreen = document.getElementById('win-screen')
        winScreen.id = null
        winScreen.classList.toggle("win-screen")
    }
    else if (playerHealth <= 0 && enemyHealth > 0){
        //display defeat screen
    }
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
