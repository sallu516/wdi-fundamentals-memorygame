var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
		cardsInPlay = [];
	} if (cards[0] === cards[2]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
