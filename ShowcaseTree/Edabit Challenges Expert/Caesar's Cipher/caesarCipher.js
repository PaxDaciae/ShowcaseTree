// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor).
// It should return an encrypted string.


let alphabet = ""

function caesarCipher (string, rotationFactor) {
    let criptedString = [];

    // f returns ASCII code from leter
    function returnCode(letter) {
        return letter.toString().charCodeAt();
    }

    // f returns letter from ASCII code
    function returnLetter(code) {
        return String.fromCharCode(code);
    }
    for (i = 0; i < string.length; i++ ) {
        let letterToBeTransformed = string[i].toLowerCase();

        // checks if code is within bounds for lowercase letters in ASCII
        if ( returnCode(letterToBeTransformed) < 122 && returnCode(letterToBeTransformed) > 96 ) {
            let endCode = returnCode(letterToBeTransformed) + rotationFactor;

            // if code is out of bounds, this switches it back around
            if (endCode > 122) {
                endCode = endCode%122%25 + 96;
            }

            // this part returns the letter as uppercase if it was uppercase in the original string
            if (string[i] == string[i].toUpperCase()){
                criptedString.push(returnLetter(endCode).toUpperCase());
            } else {
                criptedString.push(returnLetter(endCode))
            }
        }

        // this part handles characters that were not letters in the original string
        else {
            criptedString.push(letterToBeTransformed);
        }
    }
    return criptedString.join("").toString();
}

function checkCipher (string, end) {
    [1, 2, 3, 4, 5, 6, 7].forEach(caesarCipher(string, i));

    }
}




//         let letterToBeTransformed = string[i];
//         if ( 122 < returnCode(letterToBeTransformed.toLowerCase) || 97 > returnCode(letterToBeTransformed.toLowerCase) ) {
//             criptedString.push(letterToBeTransformed)
//         }
//         if (letterToBeTransformed == letterToBeTransformed.toUpperCase()) {
//             letterToBeTransformed = letterToBeTransformed.toLowerCase()
//             console.log(letterToBeTransformed)
//             let tempCode = returnCode(letterToBeTransformed) + rotationFactor;
//             if (tempCode > 122){
//                 console.log(`TempCode initial: ${tempCode}; prea mare`)
//                 tempCode = (tempCode%97)%25 + 97;
//                 console.log(`Noul tempCode: ${tempCode}`)
//             }
//             criptedString.push(returnLetter(tempCode).toUpperCase())
//         }
//         else {
//             let tempCode = returnCode(letterToBeTransformed) + rotationFactor;
//             if (tempCode > 122){
//                 console.log(`TempCode initial: ${tempCode}; prea mare`)
//                 tempCode = (tempCode%97)%25 + 97;
//                 console.log(`Noul tempCode: ${tempCode}`)
//             }
//             else {
//                 tempCode = tempCode;
//             }
//             criptedString.push(returnLetter(tempCode));
//         }
//     }
//     return criptedString.join("").toString();
// }
