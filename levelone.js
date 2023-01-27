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
let buttonCounter = 0

const showIntro = () => {
    let intro = document.createElement('p')
    intro.classList.add('dialogue')
    intro.innerText = `Hungry Frog: "Hey, what're you doing in my part of the swamp, punk?" (click to continue) --->`
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
    if (battleLog.classList.value === 'invisible') {
        battleLog.classList.toggle('invisible')
        battleLog.innerText = `You encounter Hungerton! What will you do?`
    }
}

const startBattle = () => {
    showBattleLog()
    slashButton.classList.toggle('invisible')
    shootButton.classList.toggle('invisible')
    punchButton.classList.toggle('invisible')
    enemyHealthDisplay.classList.toggle('invisible')
    playerHealthDisplay.classList.toggle('invisible')
}

const randomChoice = () => {
    if (Math.floor(Math.random() * 10) <= 3) {
        enemyChoice = "slash"
    }
    else if (Math.floor(Math.random() * 10) > 3 && Math.floor(Math.random() * 10) <= 6) {
        enemyChoice = "shoot"
    }
    else {
        enemyChoice = "punch"
    }
}

const updateText = () => {
    let moveScreen = document.getElementsByClassName('move-screen')[0]
    moveScreen.classList.toggle('invisible')
    battleLog.innerText = `You ${playerChoice} at hungerton! -->`
    let battleLogClicks = 0
    battleLog.addEventListener('click', () => {
        battleLogClicks += 1
        if (battleLogClicks === 2){
            moveScreen.classList.toggle('invisible')
            battleLog.innerText = "What will you do next?"
            battleLog.removeEventListener('click')
        }
        else if (battleLogClicks === 1){
        if (playerChoice === enemyChoice) {
            enemyHealth -= 5
            playerHealth -= 5
            battleLog.innerText = `It's a tie! You both chose ${playerChoice} and both took 5 damage. -->`
        }
        else if (
            playerChoice === "slash" && enemyChoice === "shoot" ||
            playerChoice === "punch" && enemyChoice === "slash" ||
            playerChoice === "shoot" && enemyChoice === "punch"
            ) {
            enemyHealth -= 10
            battleLog.innerText = `You ${playerChoice} through! The enemy chose ${enemyChoice} and takes 10 damage. -->`
        }
        else if (
            playerChoice === "slash" && enemyChoice === "punch" ||
            playerChoice === "shoot" && enemyChoice === "slash" ||
            playerChoice === "punch" && enemyChoice === "shoot"
        ) {
            playerHealth -= 10
            battleLog.innerText = `They stop you in your tracks! The enemy chose ${enemyChoice} and you take 10 damage. -->`
        }
}})


    enemyHealthDisplay.innerText = `HP: ${enemyHealth}`
    playerHealthDisplay.innerText = `HP: ${playerHealth}`
}

const chooseSlash = () => {
    playerChoice = "slash"
    randomChoice()
    updateText()
}

const chooseShoot = () => {
    playerChoice = "shoot"
    randomChoice()
    updateText()
}

const choosePunch = () => {
    playerChoice = "punch"
    randomChoice()
    updateText()
}

const checkWinner = () => {
    if (playerHealth > 0 && enemyHealth <= 0) {
        let winScreen = document.getElementById('win-screen')
        winScreen.id = null
        winScreen.classList.toggle("win-screen")
    }
    else if (playerHealth <= 0 && enemyHealth > 0) {
        let loseScreen = document.getElementById('lose-screen')
        loseScreen.id = null
        loseScreen.classList.toggle("lose-screen")
    }
    else if (playerHealth <= 0 && enemyHealth <= 0) {
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

slashButton.addEventListener('click', () => {
    if (playerHealth > 0 && enemyHealth > 0) {
        chooseSlash()
        checkWinner()
    }
    else {
        return
    }
    let swordSound = new Audio('swordsound.mp3')
    swordSound.volume = 0.2
    swordSound.play()
})

shootButton.addEventListener('click', () => {
    if (playerHealth > 0 && enemyHealth > 0) {
        chooseShoot()
        checkWinner()
    }
    else {
        return
    }
    let bowSound = new Audio('bowsound.mp3')
    bowSound.volume = 0.2
    bowSound.play()
})

punchButton.addEventListener('click', () => {
    if (playerHealth > 0 && enemyHealth > 0) {
        choosePunch()
        checkWinner()
    }
    else {
        return
    }
    let punchSound = new Audio('punchsound.mp3')
    punchSound.volume = 0.2
    punchSound.play()
})

document.getElementById('retry-button').addEventListener('click', restartGame)

document.getElementById('game-screen').children[0].addEventListener('click', () => {
    let dialogueBox = document.getElementById('game-screen').children[0]
    buttonCounter += 1
    if (buttonCounter === 1) {
        dialogueBox.innerText = `You: "ribbit"`
    }
    else if (buttonCounter === 2) {
        startBattle()
        dialogueBox.remove()
    }

})