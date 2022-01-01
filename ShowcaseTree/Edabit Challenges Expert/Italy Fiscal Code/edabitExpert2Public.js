// Each person in Italy has an unique identifying ID code issued by the national tax office after
// the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

// Given an object containing the personal data of a person (name, surname, gender and date of birth) 
// return the 11 code characters as a string following these steps:

// Generate 3 capital letters from the surname, if it has:

// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
// Generate 3 capital letters from the name, if it has:

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', ,'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 'q', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const obj = {
    surname     : "Filip".toLowerCase(),
    name        : "Micu".toLowerCase(),
    gender      : "M".toLowerCase(),
    dateOfBirth : "07.11.1996"
}

// This part returns an object with two arrays one containing the vowels in the person's surname, the other
// containing the consonants in the person's surname, in the order they appear.
function surnameLetters(obj) {
    const surnameLetters = {
        surnameVowels     : [],
        surnameConsonants : []
    }
    for (let char in obj.surname) {
            if (consonants.includes(obj.surname[char])) {
            surnameLetters.surnameConsonants.push(obj.surname[char]);
        }
        else if (vowels.includes(obj.surname[char])) {
            surnameLetters.surnameVowels.push(obj.surname[char]);            
        }
    }
    return surnameLetters;
}

// This part produces the first 3 letters of the ID in uppercase.
function firstThreeLetters(obj) {
    let firstThree = "";
    const letters = {
        vowelsInName     : surnameLetters(obj).surnameVowels,
        consonantsInName : surnameLetters(obj).surnameConsonants
    }
    if (letters.consonantsInName.length >= 3) {
        for (let char in letters.consonantsInName) {
            firstThree += letters.consonantsInName[char];
        }
        return firstThree.substring(0,3).toUpperCase();
    }
    else if (letters.consonantsInName.length < 3 && (letters.consonantsInName.length + letters.vowelsInName.length) >= 3) {
        for (let char in letters.consonantsInName) {
            firstThree += letters.consonantsInName[char];
        }
        for (let char in letters.vowelsInName) {
            firstThree += letters.vowelsInName[char]
        }
        return firstThree.substring(0,3).toUpperCase();
    }
    else if (letters.consonantsInName.length < 3 && (letters.consonantsInName.length + letters.vowelsInName.length) < 3 ) {
        for (let char in letters.consonantsInName) {
            firstThree += letters.consonantsInName[char];
        }
        for (let char in letters.vowelsInName) {
            firstThree += letters.vowelsInName[char]
        }
        if (firstThree.length < 3) {
            firstThree += "xxx";
        }
    return firstThree.substring(0,3).toUpperCase();
    }
}

// This part returns an object with two arrays, one containing the vowels in a person's name, the other
// containing the consonants in the person's name, in the order they appear.
function nameLetters(obj) {
    const nameLetters = {
        nameVowels     : [],
        nameConsonants : []
    }
    for (let char in obj.name) {
            if (consonants.includes(obj.name[char])) {
                nameLetters.nameConsonants.push(obj.name[char]);
        }
            else if (vowels.includes(obj.name[char])) {
                nameLetters.nameVowels.push(obj.name[char]);            
        } else return;
    }
    return nameLetters;

}

// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

// This part produces the middle 3 letters of the ID in uppercase.
function middleThreeLetters(obj) {
    let middleThree = "";
    const letters = {
        vowelsInName     : nameLetters(obj).nameVowels,
        consonantsInName : nameLetters(obj).nameConsonants
    }
    if (letters.consonantsInName.length === 3) {
        for (let char in letters.consonantsInName) {
            middleThree += letters.consonantsInName[char];
        }
        return middleThree.toUpperCase();
    }
    else if (letters.consonantsInName.length >= 3) {
        for (let char in letters.consonantsInName) {
            middleThree += letters.consonantsInName[0] += letters.consonantsInName[2] += letters.consonantsInName[3] ;
        }
        return middleThree.substring(0,3).toUpperCase();
    }
    else if (letters.consonantsInName.length < 3 && (letters.consonantsInName.length + letters.vowelsInName.length) >= 3) {
        for (let char in letters.consonantsInName) {
            middleThree += letters.consonantsInName[char];
        }
        for (let char in letters.vowelsInName) {
            middleThree += letters.vowelsInName[char]
        }
        return middleThree.substring(0,3).toUpperCase();
    }
    else if (letters.consonantsInName.length < 3 && (letters.consonantsInName.length + letters.vowelsInName.length) < 3 ) {
        for (let char in letters.consonantsInName) {
            middleThree += letters.consonantsInName[char];
        }
        for (let char in letters.vowelsInName) {
            middleThree += letters.vowelsInName[char]
        }
        if (middleThree.length < 3) {
            middleThree += "xxx";
        }
    return middleThree.substring(0,3).toUpperCase();
    }
}

// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

// This bit does all three tasks asociated with processing the birthdate.
function lastFiveCharacters(obj) {

    // Here we retrieve the last 2 digits of the year. 
    function twoNumbers(obj) {
        let year = obj.dateOfBirth.split('.')[2]
        let yearNumber = year.slice(-2)
        return yearNumber;
    }

    // Here we retrieve the month and transform it into a letter using the rules of the Italian Fiscal Code 
    // (https://en.wikipedia.org/wiki/Italian_fiscal_code)
    function monthToLetter(obj) {
        const monthCodes = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
        let monthNumber = obj.dateOfBirth.split('.')[1];
        let monthLetter = monthCodes[monthNumber-1];
        return monthLetter;
    }

    //Here we extract the birthday and process it, by gender, following the guidelines in the exercise.
    function birthDayNumber(obj) {
        let dayNumber = obj.dateOfBirth.split('.')[0];
        if (obj.gender === "m") {
            if (dayNumber < 10) {
                birthCode = "0" + dayNumber.substring(1,2);
            }
            else {
                birthCode = dayNumber;
            }
        } 
        else if (obj.gender === "f") {
            birthCode = parseInt(dayNumber) + 40;
        }
        return birthCode;
    }
    twoNumbers(obj);
    monthToLetter(obj);
    birthDayNumber(obj)

    let lastFiveCharacters = twoNumbers(obj) + monthToLetter(obj) + birthDayNumber(obj)
    return lastFiveCharacters;
}

function returnFiscalCode (obj) {
    let fiscalCode = (`${firstThreeLetters(obj)}${middleThreeLetters(obj)}${lastFiveCharacters(obj)}`);
    return fiscalCode;
}