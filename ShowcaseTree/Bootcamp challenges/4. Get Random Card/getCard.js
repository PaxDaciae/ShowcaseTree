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
    const cardNumberArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuitArray = ['clubs', 'spades', 'hearts', 'diamonds'];
    function select(array) {
        let index = Math.floor(Math.random()*array.length)
        return array[index]
    }
    return {number: select(cardNumberArray), suit: select(cardSuitArray)}
}