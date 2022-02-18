
let sum = 0
let cards = [] 
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")

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
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards =[firstCard, secondCard]
    isAlive = true
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent ="Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
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
    if (isAlive === true && hasBlackJack === false){}
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame() 
    }
    

}
