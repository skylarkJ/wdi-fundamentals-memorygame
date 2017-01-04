console.log("JS file is connected to HTML! Woo!")

// Created 4 cards with 4 string values
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards =["queen", "queen", "king", "king"];

/*

// comparing a queen variable with a king variable = false
if (cardTwo !== cardFour) {
 alert('Sorry, try again.');
 //comparing two queen variables to check for equality = true
} else if (cardTwo  === cardOne) {
 alert('You found a match!');
} else if (cardThree === cardFour) {
 alert('You found a match!');
} else {
    alert ('The game is over');
}

*/


//Create the HTML for the cards using JavaScript asignment 10
var gameBoard = document.getElementById('game-board');

gameBoard.addEventListener('click', createCards);

function createCards() {
    var card;

    for (var i = 1; i <= 4; i++) {

        //create a new card each loop iteration 1-4
        card = document.createElement('div');
        card.classList.add('card');
        gameBoard.appendChild(card);

    }
}
createCards(1);