// Write two functions:
// One to retrieve all unique substrings that start and end with a vowel.
// One to retrieve all unique substrings that start and end with a consonant.
// The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', ,'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 'q', 's', 't', 'v', 'w', 'x', 'y', 'z'];
// let string = ("Test string is this");
let string = ("abcedfoguha");

function allVowelSubstringsInString(string) {
    stringToLowercase = string.toLowerCase();
    const substrings = [];
    for (let char in stringToLowercase) {
        for ( i = 0; i <= stringToLowercase.length; i++ ) {
            if (vowels.includes(stringToLowercase[char]) && vowels.includes(stringToLowercase[i])) {
                substrings.push(stringToLowercase.slice(char, (i+1)))
            }
        }
    }    
    // const arrayFiltered = substrings.filter(e => e)
    const arraySortedUniqued = [...(new Set(substrings))].filter(word => word)
    return arraySortedUniqued.sort()
}

    
function allConsonantsSubstringsInString(string) {
    stringToLowercase = string.toLowerCase();
    const substrings = [];
    for (let char in stringToLowercase) {
        for ( i = 0; i <= stringToLowercase.length; i++ ) {
            if (consonants.includes(stringToLowercase[char]) && consonants.includes(stringToLowercase[i])) {
                substrings.push(stringToLowercase.slice(char, (i+1)))
            }
        }
    }    
    // const arrayFiltered = substrings.filter(e => e)
    const arraySortedUniqued = [...(new Set(substrings))].filter(word => word)
    return arraySortedUniqued.sort()
}
