

const cards = [ 
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];



const cardsInPlay = [];
	
   


var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};

var flipcard = function() {
	cardsInPlay.push(cards[cardsId].rank)

	console.log("User flipped" + cards[cardId].rank);
	console.log(cards[cardsId].cardImage);
	console.log(cards[cardsId].suit);
};




if (cardsInPlay.length === 2);









 
