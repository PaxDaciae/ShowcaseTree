// Your task is to write a function that determines whether a name is valid or not. 
// Return true if the name is valid, false otherwise.
// Both initials and words must be capitalized. x
// Initials must end with a dot. x
// A name must be either 2 or 3 terms long. x
// If the name is 3 words long, you can expand the first and middle name or expand the first name only. (x)
// You cannot keep the first name as an initial and expand the middle name only. x
// The last name must be a word (not an initial). x

let name = "";
const capitals = ['A', 'B', 'C', 'D','E','F']

function validName (name) {
    let words = name.split(" ");
    let stringLength = words.length;
    // console.log(words, stringLength, words[0]);

    // escape clause: if name is under 2 words, returns false.
    if (stringLength < 2 || stringLength > 3) return false;

    for (element in words) {
        //checks if names are expanded properly, i.e. if borh or only 2nd name are expanded
        if (stringLength == 3) {
            if (words[element][0].length == 2 && words[element][0].includes('.')) {
                if (words[element][0].length > 2) return false;
            }
        }
        if (stringLength >= 2) {
            for (element in words) {
            // console.log(words[element])
            // console.log(words[element][0], words[element][0].toLowerCase())

            // checks for capitalization, returns false if not capitalized
            if (words[element][0] == words[element][0].toLowerCase()) return false; 

            // checks if last name is only one letter, returns false if it is or contains '.'
            if ((words[stringLength-1]).length == 1 || 
                ((words[stringLength-1]).length == 2 && words[stringLength-1].includes('.'))) return false; 
            
            // checks if initials end with '.', returns false.
            if (words[element].length == 1 ||
                (words[element].length > 2 && words[element].includes('.') )) return false
            }
        }
        return true;
    }
}
