// The syllabic structure of the Persian language is CV(C)(C). 
// C stands for Consonants and V stands for Vowels. 
// The CV(C)(C) means that there are three types of syllables in Persian:
// CV  /  CVC  /  CVCC
// Write a function that takes the phonetic transcription of a Persian word
// as an argument and returns the syllabified word based on the syllabic structure. 
// In other words, put a period between syllables.
// Mono-syllabic words don't need syllabification.
// Persian has six vowels: a, A, e, i, o, u
// Persian has 23 consonants: p, b, t, d, k, g, G, ?, f, v, s, z, S, Z, x, h, c, j, m, n, r, l, y
// Try to solve the problem by using RegEx.


function persianSyllables(string) {
    // this guard clause uses regEx to check if string is monosyllabic:
    const testMonoSyllabic = /[aAeiou]/g;
    if (string.match(testMonoSyllabic).length <= 1) console.log(string);
    // if not monosyllabic:
    if (string.match(testMonoSyllabic).length > 1) {
        // this regex checks for one C followed by a V, 
        // followed by 0-2 C but only if they are not followed by a V
        const syllablesRegEx = /[pbtdkgG?fvszSZxhcjmnrly]{1}[aAeiou]{1}([pbtdkgG?fvszSZxhcjmnrly]{0,2}(?![aAeiou]))/g;
        // this step returns all the syllables as a string separeated with .
        return (string.match(syllablesRegEx).join(".").toString())
    }
}

// Works, but algo is wrong:
// function syllab(string) {
//     const testMonoSyllabic = /[aAeiou]/g;
//     if (string.match(testMonoSyllabic).length <= 1) return;

//     const regExTest = /[aAeiou]{1}[pbtdkgG?fvszSZxhcjmnrly]{0,2}/g;
//     console.log(string.match(regExTest).join(".").toString())
//     // [pbtdkgG?fvszSZxhcjmnrly]
// }


// backups:
// 1.
// function syllab(string) {
//     const regExTest = /[aAeiou]/g;
//     console.log(string.match(regExTest))
// }