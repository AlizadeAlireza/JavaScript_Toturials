// javascript

// variables

// let thirdCard = 5
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "ali",
    chips: 500,
    // sayHello: function () {
    //     console.log("hi alireza")
    // },
}

let cards = [] // array

// DOM variables

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// function for random numbers
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (sum === 0 && isAlive == false) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you got the BlackJack!!!"
        hasBlackJack = true
    } else {
        message = "you're lost your money!!"
        isAlive = false
    }

    // cash out the money
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    // render out first and second card
    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " - "
    }

    // render out All the cards we have
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // sumEl.textContent = "Sum: " + sum
        cards.push(card)
        console.log(cards)
        // cardsEl.textContent += cards[2]
        renderGame()
    }
}

function reset() {
    if ((isAlive === false && sum > 0) || hasBlackJack === true) {
        cardsEl.textContent = "Cards: " + 0
        sumEl.textContent = "Sum: " + 0
        sum = 0
        // cards = new cards()
        // renderGame()
    }
}
