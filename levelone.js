//global functions
let playerHealth = 100
let enemyHealth = 25
const slashButton = document.querySelector("#slash")
const shootButton = document.querySelector("#shoot")
const punchButton = document.querySelector("#punch")

console.log(slashButton, shootButton, punchButton)
//functions
const showIntro = () => {
    document.querySelector('.intro').style.opacity = 1
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
