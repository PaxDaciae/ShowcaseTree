// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number) {
    let sum = 0;
    for (i = 0; i <= number; i++) {
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function numberOfMatches(step) {
    if (step === 0) {
        return 0;
    }
    return step * 5 + 1;
}

// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

function shiftToLeft(x, y) {
    console.log(Math.pow(2, y));
    return x * Math.pow(2, y);
}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function compareNumbers(a, b) {
    return a - b;
}

function minMax(arr) {
    function compareNumbers(a, b) {
        return a - b;
    }
    const result = [];
    let min = arr.sort(compareNumbers).slice(0,1);
    let max = arr.sort(compareNumbers).slice(arr.length-1, arr.length);
    result.unshift(min);
    result.push(max);
    // console.log(result);
    return result;
}

function minMaxEx(arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return results = [min, max];
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) 
// and false otherwise. Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.

var xmasEve = new Date(3000, 11, 24);

function timeForMilkAndCookies(date) {
    var day = date.getDate();
    var month = date.getMonth();

    if (day === 24 && month === 11) {
        return true;
    }
    else {
        return false;
    }
}

// Your function will be passed two functions, f and g, that don't take any parameters. 
// Your function has to call them, and return a string which indicates which function returned the larger number.
// If f returns the larger number, return the string f.
//If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function f(){
    return Math.floor(Math.random() * 10 + 1);
}

function g(){
    return Math.floor(Math.random() * 10 + 1);
}

function whichIsLarger() {
    let varF = f();
    console.log(varF);
    let varG = g();
    console.log(varG);
    if (varF > varG) {
        return varF;
    }
    else if (varG > varF) {
        return varG;
    }
    else {
        return ('Neither');
    }
}

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
// To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, 
// value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// function binary(number) {
//     let numberLength = number.toString().length;
//     const binaryNumber = [];
//     if (number === 0) {
//         return 0;
//     }
//     else if (number !== 0) {
//         let workingNumber = number;
//         while (workingNumber >= 2) {
//             for (i = 0; i <= numberLength; i++ ) {
//                 binaryNumber.unshift(workingNumber % 2);
//                 console.log(`Modulo acum este ${workingNumber % 2}`)
//                 workingNumber = (workingNumber - workingNumber % 2) / 2;
//                 console.log(`Numarul acum este ${workingNumber}`)                
//             }
//         return binaryNumber;
//         }
//         if (workingNumber = 0) {
//             binaryNumber = binaryNumber;
//         }
//         else if (workingNumber = 0) {
//             binaryNumber = binaryNumber.unshift(workingNumber);
//         }
    
//     }
// }

function binary(number) {
    const binaryNumberArray = [];
    let numberLength = number.toString().length;

    for (i = 0; i <= numberLength; i++) {
        while (number >= 2) {
            binaryNumberArray.unshift(number % 2);
            number = (number - number % 2) / 2;
        }
        binaryNumberArray.unshift(number);
        break;
    }
    return binaryNumberArray;
}

// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest (array1, array2) {
    if (Math.min.apply(Math, array1) > Math.min.apply(Math, array2) && 
    Math.max.apply(Math, array1) < Math.max.apply(Math, array2)) {
        return true;
    }
    else {
        return false;
    }
}

// The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.
// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. 
// In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. 
// The regexp should not match 123:456.

// https://regexr.com/ for breakdown of regEx

let timeAndPlace = ('Breakfast at 09:00 in the room 123:456.');

let regPattern = /(?<![0-9])[0-9]{2}:[0-9]{2}/g;
let regCheck = timeAndPlace.search(regPattern);
let regRet = /(?<![0-9])[0-9]{2}:[0-9]{2}/g.exec(timeAndPlace);

// Create a regular expression to match all red flag and blue flag in a string. 
// You must use | in your expression. Flags can come in any order.

const flagMatchPattern = /blue flag|red flag/g;
