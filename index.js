

let sum = 0
let cards = [] 
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let rulesEl = document.getElementById("rules-el")

rulesEl.textContent = "Simplified BlackJack rules: Your draw cannot exceed 21 or else you lose the game. To win you must draw exactly 21"
function getRandomCard() { 
    let randCard = Math.floor(Math.random() * 13) + 1
    if (randCard === 1) {
        return 11
    }
    else if (randCard > 10){
        return 10
    }else {
    return randCard
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards =[firstCard, secondCard]
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent ="Cards: "
    cardsEl.style.whiteSpace = "pre"
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "   " 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Woohoo! You have Blackjack!"
        hasBlackJack = true 
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
} 

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame() 
    }
    else if (hasBlackJack === true ){
        hasBlackJack = false
        startGame()
    }

}
