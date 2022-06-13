
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
    //c = [M,Ws,Bs, S, T,Wu, A,Ld, S];

            // This function creates a d6 dice roll//
function diceRoll() { 
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}

            // This function merges the template object with the unit's statline array//
function unitStatLineObject(array) {
    let statLine = {};
    Object.assign(statLine, unit)
    for (i=0; i<9; i++) {
        statLine[Object.keys(statLine)[i]]=array[i];
        // console.log (`${[Object.keys(statLine)[i]]} = ${array[i]}`)
    }
    return statLine;
}
            // Used to debug unitStatLineObject function; //
function statLinetest(array1, array2){
    const unit1 = unitStatLineObject(array1)
    const unit2 = unitStatLineObject(array2)
    console.log(unit1);
    console.log(unit2)
}


            // This function performs a number of d6 rolls equivalent to the attacker's Attacks stat from their completed stat object, returns the values as an arrray//
function rollBucketOutcome(unit) {
    const rollBucket = [];
    const attackerObject = unitStatLineObject(unit)
    let numberAttacks = parseInt(attackerObject.attacks);
    for (i = 0; i<numberAttacks; i++) {
        rollBucket.push(diceRoll());
    }
    console.log("Zarurile sunt", ... rollBucket);
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
    const numberOfHits = hitCalculator(attacker, cover);
    var aStrength = parseInt(attackerObject.strengh);
    var tTough = parseInt(targetObject.toughness);
    console.log("stats pentru hit sunt", attackerObject.weaponSkill)
    console.log("nr de hituri", numberOfHits);
    console.log("A-strength", attackerObject.strengh, "T-tough", targetObject.toughness);

    console.log(attackerObject)
    console.log(targetObject)
    var numberOfDamages = numberOfHits;
    console.log("Strength e", aStrength)
    console.log("Tough e", tTough)
    if ((2*aStrength) <= tTough) {
        console.log("2S<T")
    }
    else if (aStrength < tTough) {
        console.log("S<T")

    }
    else if (aStrength == tTough) {
        console.log("S=T")

    }
    else if (aStrength > tTough && !(aStrength >= 2*tTough)) {
        console.log("S>T")

    }
    else if (aStrenght >= (2*tTough)) {
        console.log("S>2T")

    }
}
damagesCalculator(a, b, 0)






// var damageRoll = diceRoll();
// console.log ("i este", i, "rollul este", damageRoll);

// }
// for (i = 0; i<numberOfHits; i++) {
// console.log("i este", i);





            // Here we calculate saves//
//         var saveRoll = diceRoll()
//         if (saveRoll >= targetObject.save) {
//             numberOfDamages --;
//             console.log("i este", i, "save roll este", saveRoll, "save successful")}
//             else {
//                 console.log("i este", i, "save roll este", saveRoll, "save failed");
//             }

//     }
//     console.log("numarul de damages", numberOfDamages);
//     return numberOfDamages;
// }



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

