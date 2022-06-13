
// Template for unit stat lists, to be completed using unit statlines in array form from below//
const unit = {
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
const a = [5, 3, 2, 4, 5, 1, 3, 7, 3];
const b = [6, 3, 3, 4, 3, 2, 2, 7, 3];

            // This function creates a d6 dice roll//
function diceRoll() { 
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

            // This function merges the template object with the unit's statline array//
function unitStatLineObject(array) {
    const statLine = unit;
    for (i=0; i<9; i++) {
        statLine[Object.keys(statLine)[i]]=array[i];
        // console.log (`${[Object.keys(statLine)[i]]} = ${array[i]}`)
    }
    return statLine;
}


            // This function performs a number of d6 rolls equivalent to the attacker's Attacks stat from their completed stat object, returns the values as an arrray//
function rollBucketOutcome(unit) {
    const rollBucket = [];
    const attackerObject = unitStatLineObject(unit)
    let numberAttacks = parseInt(attackerObject.attacks);
    for (i = 0; i<numberAttacks; i++) {
        rollBucket.push(diceRoll());
    }
    console.log(... rollBucket);
    return(rollBucket);
    
}

            // This function calculates the number of successful hits based on the attacker's BS, its rolls, and the presence of cover. No cover = 0, cover = 1.//
function hitCalculator (attacker, cover) {
    if (cover > 1) { cover = 1};
    const attackerObject = unitStatLineObject(attacker);
    const rollBucket = rollBucketOutcome(attacker);
    const numberOfChecks = rollBucket.length;
    var numberOfHits = 0;
    for (i = 0; i<=numberOfChecks; i++) {
        if (rollBucket[i] >= (attackerObject.balisticSkill + cover)) numberOfHits++;         
        }
    // console.log(cover);
    return numberOfHits;
}


            // This function calculates the number of damaging shots based on the nr of hits, attackers' strength, target's toughness.//
function damagesCalculator(attacker, target, cover) {
    const attackerObject = unitStatLineObject(attacker);
    const targetObject = unitStatLineObject(target);
    const numberOfHits = hitCalculator(attacker, target, cover);
    console.log("stats sunt", attackerObject.strengh, targetObject.toughness)
    console.log("hitcalc", hitCalculator(attackerObject, targetObject, cover))
    var numberOfDamages = 0;
    for (i = 0; i<= numberOfHits; i++) {
        console.log("i este", i)
    }
    console.log(numberOfDamages);
    return numberOfDamages;
}



// console.log("hits este", diceRoll());
// if (attackerObject.strengh > diceRoll()) numberOfDamages ++;
// console.log(`Nr of Hits ${numberOfHits}, i ${i}`)

// function hitCalculator (attacker, target) {
//     const attackerObject = unitStatLineObject(attacker);
//     const targetObject = unitStatLineObject(target);
//     let numberOfHits = 0;
//     let numberOfAttacks = parseInt(attackerObject.attacks);
//     for (i = 0; i<numberOfAttacks; i++) { 
//         var roll = diceRoll();
//         if (roll > 3) numberOfHits+= 1;
//         console.log(roll)
//     }
//     console.log(numberOfHits)
// }


//     if (attackerObject.balisticSkill > targetObject.toughness) { console.log('Hit!')}
//     else {
//         console.log('No Hit!');
//     console.log(attackerObject.balisticSkill)
//     console.log(targetObject.toughness)

//     }
// }

