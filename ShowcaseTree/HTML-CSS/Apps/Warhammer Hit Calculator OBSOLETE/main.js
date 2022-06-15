
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
const a = [5, 3, 3, 4, 5, 1, 3, 7, 3];
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
function statLineTest(array1, array2){
    const unit1 = unitStatLineObject(array1)
    const unit2 = unitStatLineObject(array2)
    console.log(unit1);
    console.log(unit2)
}

            // This function performs a number of d6 rolls equivalent to the attacker's Attacks stat from their completed stat object, returns the values as an arrray.//
function rollBucketOutcome(unit) {
    const rollBucket = [];
    const attackerObject = unitStatLineObject(unit);
    let numberAttacks = parseInt(attackerObject.attacks);
    for (i = 0; i<numberAttacks; i++) {
        rollBucket.push(diceRoll());
    }
    console.log("To hit rolls:", rollBucket);
    return(rollBucket);
    
}
            // This function performs a given number of rolls //
function rollBucket(rollNumber) {
    const rollBucket = [];
    for (i = 0; i<rollNumber; i++) {
        rollBucket.push(diceRoll());
    }
    return(rollBucket);
    
}

        // This function was added to allow for the values of the To Hit rolls to be preserved. Calculates the number of successful hits based on the attacker's BS, its rolls, and the presence of cover. No cover = 0, cover = 1.//
function hitBucketOutcome (attacker, cover) {
    if (cover > 1) { cover = 1};
    const attackerObject = unitStatLineObject(unit);
    const rollBucket = rollBucketOutcome(attacker);
    const numberOfChecks = rollBucket.length;
    const hitBucket = []
    for (i = 0; i<numberOfChecks; i++) {
        if ((rollBucket[i] > 1) && (rollBucket[i] >= (attackerObject.balisticSkill + cover))) hitBucket.push(diceRoll());}
        // else {hitBucket.push(0)}
    
    console.log ("To damage rolls:", hitBucket);
    return hitBucket;
}
            // ***Commented-out, see below*** This function calculates the number of successful hits based on the attacker's BS, its rolls, and the presence of cover. No cover = 0, cover = 1.// 

            // Changed to use the hitBucketOutcome results instead //
// function hitCalculator (attacker, cover) {
//     if (cover > 1) { cover = 1};
//     const attackerObject = unitStatLineObject(attacker);
//     const rollBucket = rollBucketOutcome(attacker);
//     const numberOfChecks = rollBucket.length;
//     const finalHits = [];
//     for (i = 0; i<=numberOfChecks; i++) {
//         if (rollBucket[i] >= (attackerObject.balisticSkill + cover)) numberOfHits++;         
//         }
//     // console.log(cover);
//     return numberOfHits;
// }

            // This function calculates the number of successful hits based on the the hitBucketOutcome results.// 
function hitCalculator(attacker, cover) {
    const attackerObject = unitStatLineObject(attacker);
    const rollBucket = hitBucketOutcome(attacker);
    const numberOfChecks = rollBucket.length;
    var numberOfHits = 0;
    for (i = 0; i<=numberOfChecks; i++){
        if (rollBucket[i] > 1 && rollBucket[i] >= (attackerObject.balisticSkill + cover)) numberOfHits++;
    }
    return numberOfHits;
}

            // This function calculates the number of damaging shots based on the nr of hits, attackers' strength, target's toughness.//
function damagesCalculator(attacker, target, cover) {
    const attackerObject = unitStatLineObject(attacker);
    const targetObject = unitStatLineObject(target);
    const numberOfHits = hitCalculator(attacker, cover);
    var aStrength = parseInt(attackerObject.strengh);
    var tTough = parseInt(targetObject.toughness);
    var numberOfDamages = 0;

    // console.log("stats pentru hit sunt", attackerObject.weaponSkill);
    // console.log("A-strength", attackerObject.strengh, "T-tough", targetObject.toughness);
    console.log("nr de hituri initiale", numberOfHits);
    // console.log(attackerObject)
    // console.log(targetObject)
    // console.log("Strength e", aStrength)
    // console.log("Tough e", tTough)

    if (numberOfDamages = 0) {return 0}
    else if ((2*aStrength) <= tTough) {
        for (i=1; i<=numberOfHits; i++) {   
            var damageRoll = diceRoll();
            console.log("2S<T", damageRoll)

            if (damageRoll >= 6) numberOfDamages ++;
        }

    }
    else if (aStrength < tTough) {
        for (i=1; i<=numberOfHits; i++) {
            var damageRoll = diceRoll();

            console.log("S<T", damageRoll)

            if (damageRoll >= 5) numberOfDamages ++;
        }

    }
    else if (aStrength == tTough) {
        for (i=1; i<=numberOfHits; i++) {
            var damageRoll = diceRoll();

            console.log("S=T",damageRoll)

            if (damageRoll >= 4) numberOfDamages ++;
        }

    }
    else if (aStrength > tTough && !(aStrength >= 2*tTough)) {
        for (i=1; i<=numberOfHits; i++) {
            var damageRoll = diceRoll();

            console.log("S>T")
            console.log(damageRoll)

            if (damageRoll >= 3) numberOfDamages ++;
        }

    }
    else if (aStrenght >= (2*tTough)) {
        for (i=1; i<=numberOfHits; i++) {
            var damageRoll = diceRoll();

            console.log("S>2T", damageRoll)

            if (damageRoll >= 2) numberOfDamages ++;
        }
    }
    // console.log(numberOfDamages);
    return numberOfDamages;
}

            // This function loops the damagesCalculator function for a given number, meant to calculate the damage performed by a whole squad or big statistical analysis of probability //
function damagePerUnit (attacker, target, cover, numberModels) {
    const rollBucket = []
    for (i = 1; i<=numberModels; i++) {
        // rollBucket.push(damagesCalculator(attacker, target, cover))        
        console.log(i);
        var perModel = damagesCalculator(attacker, target, cover)
        rollBucket.push(perModel);
        
    }
    return rollBucket;
}

            // Used to debug damagePerUnit function //

function damageDebug (attacker, target, cover, nr) {
    for (i=1; i<=nr; i++) {
        console.log(i);
        console.log(damagesCalculator(attacker, target, cover));
    }
}





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

