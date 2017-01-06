console.log("JS file is connected to HTML! Woo!")

// 4 cards with 4 string values
var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];




//Create the HTML for the cards using JavaScript
var gameBoard = document.getElementById('game-board');

gameBoard.addEventListener('click', createBoard);

function createBoard () {
    var newCard;

    for (var i = 0; i < cards.length; i++) {

        //create a new card each loop iteration 1-4
        newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('data-card', cards[i]);
        newCard.addEventListener('click', isTwoCards);
        gameBoard.appendChild(newCard);

    }
};

function isMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

function isTwoCards () {
    cardsInPlay.push(this.getAttribute('data-card'));
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }

    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = '<img src="/Users/jana/fundamentals/wdi-fundamentals-memorygame/starter-code/king.png" width="150px" alt="King of Spades">';
        } else { this.innerHTML = '<img src="/Users/jana/fundamentals/wdi-fundamentals-memorygame/starter-code/queen.png" width="150px" alt="Queen of Clubs">';
    }
};

createBoard(1);