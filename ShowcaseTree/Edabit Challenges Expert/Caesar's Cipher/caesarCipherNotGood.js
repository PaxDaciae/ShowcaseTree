// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor).
// It should return an encrypted string.


let alphabet = ""

function caesarCipher (string, rotationFactor) {
    let criptedString = [];
    function returnCode(letter) {
        return letter.toString().charCodeAt();
    }
    function returnLetter(code) {
        return String.fromCharCode(code);
    }
    for (i = 0; i < string.length; i++ ) {
        console.log(returnCode(string[i]))
        console.log(returnLetter(returnCode(string[i])))
        if (returnCode(string[i]) >= 97 && returnCode(string[i] <= 122)) {
            let tempCode = returnCode(string[i]) + rotationFactor;
            console.log(returnLetter(tempCode));
            while (tempCode > 122){
                console.log(`TempCode initial: ${tempCode}; prea mare`)
                let workCode = (tempCode % 25);
                console.log(`Noul tempCode: ${workCode + 97}`)
                tempCode = workCode + 97;
            }
            console.log('TempCode in parametrii')
            tempCode = tempCode

            criptedString.push(returnLetter(tempCode))
        }
        else {
            criptedString.push(string[i])
        }
        
        // if (returnCode(string[i]) > 90 || returnCode(string[i]) < 65) return
        // if (returnCode(string[i]) >= 97 && returnCode(string[i]) <= 122){
        //     let tempCode = returnCode(string[i]) + rotationFactor;
        //     console.log(tempCode);
        //     console.log(string[i], returnLetter(tempCode));
            // criptedString.push(returnLetter(tempCode));
        }
        return criptedString.join("").toString();

    }

