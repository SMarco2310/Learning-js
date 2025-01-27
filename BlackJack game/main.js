let card = document.querySelector('#cards');    // This is fine if 'card1' is the ID of an HTML element
let sum = document.querySelector('#sum');        // This is fine if 'sum' is the ID of an HTML element
let outCome = document.querySelector('#outcomes'); // This is fine if 'outcomes' is the ID of an HTML element
let prize = document.querySelector('#prize');    // This is fine if 'prize' is the ID of an HTML element


let hasBlackJack = false;

const message1 = "You're out of the game!";
const message2 = "Do you want to draw another card?";
const message3 = "You've got Blackjack !";


let isAlive = true;

// The back jack logic

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// the Math.random() generate number from the range of 0.00 -> 0.99
// the Math.floor(n) rounds the number that has been put inside the parentheses
let crd1 = cards[Math.floor(Math.random() * cards.length)]
let crd2 = cards[Math.floor(Math.random() * cards.length)]

let crds = [crd1, crd2];

let sumValue = crd1 + crd2;

// let gameState = 0;
function StarGame() {
    renderGame();

}

function renderGame() {
    card.innerHTML = "Cards: ";
    for (let i = 0; i < crds.length; i++) {
        card.textContent += crds[i] + " ";
    }

    sum.textContent = sumValue;

    if (sumValue === 21) {
        hasBlackJack = true;
        isAlive = false;
        outCome.innerHTML = message3;
    } else if (sumValue < 21) {
        isAlive = true;
        outCome.innerHTML = message2;
    } else {
        isAlive = false;
        outCome.innerHTML = message1;
    }


}


function NewCard() {
    // Create a card that holds the values between (2-11)
    let crd3 = cards[Math.floor(Math.random() * cards.length)]
    sumValue += crd3;
    crds.push(crd3)
    renderGame()
}

// function NewGame() {
//     card1.innerHTML = " ";
//     card2.innerHTML = " ";
//     sum.innerHTML = " ";
//     outCome.innerHTML = "Want to play a round?";
//     prize.innerHTML = " ";
//     hasBlackJack = false;
//     isAlive = true;
//
// }