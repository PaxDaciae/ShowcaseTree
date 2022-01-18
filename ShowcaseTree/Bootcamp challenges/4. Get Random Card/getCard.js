// Write a getCard() function which returns a random playing card object:
// {
//     value: 'K'
//     suit: 'Clubs'
// }
// Pick a random value from:
// ---- 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ----
// Pick a random suit from:
// ---- clubs, spades, hearts, diamonds ----
// Return both as an object

function getCard() {
    // Here we generate the card template and define the basic arrays
    // From which we will obtain the number and suit.
    const playingCard = {
        cardValue: "",
        cardSuit: ""
    }
    const cardNumberArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuitArray = ['clubs', 'spades', 'hearts', 'diamonds'];

    // This f. generates a random number between 0 and maxNumber-1
    function generateNumber(maxNumber) {
        let number = Math.floor(Math.random()*maxNumber);
        return number
    }
    // This line returns the number of the card from the numbers array.
    console.log(cardNumberArray.length)
    playingCard.cardValue = cardNumberArray[generateNumber(cardNumberArray.length)];
    // This line returns the suit of the card from the suits array.
    console.log(cardSuitArray.length)
    playingCard.cardSuit = cardSuitArray[generateNumber(cardSuitArray.length)];
    return playingCard;
}