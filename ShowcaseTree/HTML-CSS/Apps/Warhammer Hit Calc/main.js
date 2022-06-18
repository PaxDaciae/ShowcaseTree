
const units = { 
    plagueMarine: [5, 3, 3, 4, 5, 1, 1, 7, 3],
    spaceMarineIntercessor: [6, 3, 3, 4, 3, 2, 2, 7, 3]
}
// Template for unit stat lists, to be completed using unit statlines in array form from below//
const statBlock = {
    movement: '',
    weaponSkill: '',
    balisticSkill: '',
    strengh: '',
    toughness: '',
    wounds: '',
    attacks: '',
    leadership: '',
    save: ''
}

            // Here we have the statlines for units in array form//
// const plagueMarine = [5, 3, 3, 4, 5, 1, 1, 7, 3];
// const spaceMarineIntercessor = [6, 3, 3, 4, 4, 2, 2, 7, 3];

// Here we have the statlines for units in array form, simplified placeholder names for testing//
const a = [5, 3, 3, 4, 5, 1, 1, 7, 3];
const b = [6, 3, 3, 4, 3, 2, 2, 7, 3];
/*    c = [M,Ws,Bs, S, T,Wu, A,Ld, S]; */

// This function merges the template object with the unit's statline array //
function unitStatLineObject(array) {
    let statLine = {};
    Object.assign(statLine, statBlock)
    for (i=0; i<9; i++) {
        statLine[Object.keys(statLine)[i]]=array[i];
        // console.log (`${[Object.keys(statLine)[i]]} = ${array[i]}`)
    }
    return statLine;
}   

// Used to debug unitStatLineObject function; //
 function statLineTest(array1, array2){
    const unit1 = unitStatLineObject(array1)
    const unit2 = unitStatLineObject(array2)
    console.log(unit1);
    console.log(unit2)
}

// This function creates a d6 dice roll//
function diceRoll() { 
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

// This function performs a given number of rolls and returns them as an array. //
function rollBucket(rollNumber) {
    const rollBucket = [];
    for (i = 0; i<rollNumber; i++) {
        rollBucket.push(diceRoll());
    }
    return(rollBucket);
    
}

// This function rolls dice for whole units based on rollBucket() ;
function rollHitDice(attacker, modelCount) {
    const numberOfAttacks = unitStatLineObject(attacker).attacks;
    console.log(rollBucket)
    return rollBucket(numberOfAttacks*modelCount);  
}

// toHit for testing purposes //
function toHit (attacker, denseCover, modelCount) {
    const toHitResult = {toHitDice: '', successfulHits:''};
    function rollHitDice(attacker, modelCount) {
        const numberOfAttacks = unitStatLineObject(attacker).attacks;
        return rollBucket(numberOfAttacks*modelCount);  
    }

    const hitDice = rollHitDice(attacker, modelCount).slice();
    // console.log(hitDice);

    function numberOfHits (attacker, denseCover, dice) {
        if (denseCover > 1) { denseCover = 1};
        const attackerObject = unitStatLineObject(attacker);
        const rolls = dice;
        var hitBucket = 0;
        // console.log("To-Hit:", rolls);
        for (elem in rolls) {
            if (rolls[elem] >= (attackerObject.balisticSkill + denseCover)) {
                hitBucket++;
            } 
            // continue
        }
        return(hitBucket);
    }
    const successfulHits = numberOfHits(attacker, denseCover, hitDice);
    toHitResult.toHitDice = hitDice;
    toHitResult.successfulHits = successfulHits;
    console.log(toHitResult)
    return toHitResult;
}

function toWound (attacker, target, hits) {
    const attackerObject = unitStatLineObject(attacker);
    const strength = parseInt(attackerObject.strengh);
    const targetObject = unitStatLineObject(target);
    const toughness = parseInt(targetObject.toughness);
    const woundObject = {toWoundDice: rollBucket(hits), successfulWounds: 0};
    const counter = woundObject.toWoundDice.length;
    // console.log(woundObject.toWoundDice, counter)
    if (woundObject.toWoundDice.length < 1) {
        woundObject.successfulWounds = 0;
        return woundObject;}

    if ((2*strength) < toughness) {
        console.log("2S<T");
        for (i = 0; i < counter; i++) {
            // console.log(`Zarul ${i} este ${woundObject.toWoundDice[i]}`)
            if (woundObject.toWoundDice[i] >= 2) woundObject.successfulWounds ++;
        }
    }
    else if (strength < toughness) {
        for (i = 0; i < counter; i++) {
            // console.log(`Zarul ${i} este ${woundObject.toWoundDice[i]}`)
            if (woundObject.toWoundDice[i] >= 3) woundObject.successfulWounds ++;
        }
        console.log("S<T")
    }
    else if (strength == toughness) {
        for (i = 0; i < counter; i++) {
            // console.log(`Zarul ${i} este ${woundObject.toWoundDice[i]}`)
            if (woundObject.toWoundDice[i] >= 4) woundObject.successfulWounds ++;
        }
        console.log("S=T");
    }
    else if ((strength > toughness) && !(strength > toughness*2)){
        for (i = 0; i < counter; i++) {
            // console.log(`Zarul ${i} este ${woundObject.toWoundDice[i]}`)
            if (woundObject.toWoundDice[i] >= 5) woundObject.successfulWounds ++;
        }
        console.log("S>T")
    }
    else if (strength > (2*toughness)) {
        for (i = 0; i < counter; i++) {
            // console.log(`Zarul ${i} este ${woundObject.toWoundDice[i]}`)
            if (woundObject.toWoundDice[i] >= 6) toWoundDice.successfulWounds ++;
        }
        console.log("S>2T")
    }
    return woundObject;

}

// function toSave (target, wounds)

// Runs the whole thing -- better description needed //
// function diceAlgo (attacker, target, denseCover, cover, modelCount) {
//     const hitObject = toHit(attacker, cover, modelCount)
//     const woundObject = toWound(attacker, target, hitObject.successfulHits);
// }


function factionOption() {
    let faction = document.getElementById("factionSelect").value;
    function pick(faction) {
      return obj[String(faction)];
    }
    document.getElementById("factionScreen").innerHTML = console.log(pick(faction));
  }

  function unitOption() {
    let unit = document.getElementById("unitSelect").value;
    function pick(unit) {
      return units[String(unit)];
    }
    document.getElementById("unitScreen").innerHTML = pick(unit);
  }