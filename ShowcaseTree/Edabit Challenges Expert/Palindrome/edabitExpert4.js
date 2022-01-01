// A palindrome is a series of letters or numbers that reads equivocally backwards.
// Write a recursive function that determines whether a given string is a palindrome or not.


function isPalindrome(string, letterNumber = 0) {

    string = string.toLowerCase().replace(/[^a-zA-Z ]/g, "");

    if (letterNumber >= ((string.length - string.length % 2) / 2)) return;

    if (string[letterNumber] !== string[string.length - 1 - letterNumber]) {
        isPalindrome(string, letterNumber + 1)
        return (false);
    }
    
    else {
        return (true)
    }
    ;
}


// This is the backup recurssive-stopping condition in case I mess up the code:

// function isPalindrome(string, letterNumber = 0) {
//     if (letterNumber > ((string.length - string.length % 2) / 2)) {
//         return;
//     }
//     console.log(letterNumber, (string.length - string.length % 2) / 2);
//     isPalindrome(string, letterNumber + 1);
// }
