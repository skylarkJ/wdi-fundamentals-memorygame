console.log("JS file is connected to HTML! Woo!")

// Created 4 cards with 4 string values
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

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
