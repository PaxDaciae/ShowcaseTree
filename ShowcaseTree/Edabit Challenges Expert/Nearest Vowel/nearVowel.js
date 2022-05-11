// Write a function that takes in a string and for each character, 
// returns the distance to the nearest vowel in the string.
// If the character is a vowel itself, return 0.

const vowels = ['a', 'e', 'i', 'o', 'u'];

function distanceToNearestVowel(string) {
    const distanceArray = [];
    for (position in string) {
        // console.log(position)
        // console.log(string[position])
        if (vowels.includes(string[position])) {
            distanceArray.push(0);
        } else {
            
        }
    }
    return distanceArray;
}