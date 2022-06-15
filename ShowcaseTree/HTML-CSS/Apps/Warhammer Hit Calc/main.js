
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
const a = [5, 3, 3, 4, 5, 1, 1, 7, 3];
const b = [6, 3, 3, 4, 3, 2, 2, 7, 3];
/*    c = [M,Ws,Bs, S, T,Wu, A,Ld, S]; */

// This function merges the template object with the unit's statline array //
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
function toHit (attacker, cover, modelCount) {
    const toHitResult = {toHitDice: '', successfulHits:''};
    function rollHitDice(attacker, modelCount) {
        const numberOfAttacks = unitStatLineObject(attacker).attacks;
        console.log(rollBucket)
        return rollBucket(numberOfAttacks*modelCount);  
    }

    const hitDice = rollHitDice(attacker, modelCount).slice();
    console.log(hitDice);

    function numberOfHits (attacker, cover, dice) {
        if (cover > 1) { cover = 1};
        const attackerObject = unitStatLineObject(attacker);
        const rolls = dice;
        var hitBucket = 0;
        // console.log("To-Hit:", rolls);
        for (elem in rolls) {
            console.log("Zarul to hit:", rolls[elem]);
            if (rolls[elem] >= (attackerObject.balisticSkill + cover)) {
                hitBucket++;
                console.log ('hit')
            } 
            continue
        }
        return(hitBucket);
    }
    const successfulHits = numberOfHits(attacker, cover, hitDice);
    toHitResult.toHitDice = hitDice;
    toHitResult.successfulHits = successfulHits;
    return toHitResult;
}

function diceAlgo (attacker, cover, modelCount) {
    const hitObject = {toHitDice: '', successfulHits:''};
    function toHit (attacker, cover, modelCount) {
        const toHitResult = {toHitDice: '', successfulHits:''};
        function rollHitDice(attacker, modelCount) {
            const numberOfAttacks = unitStatLineObject(attacker).attacks;
            console.log(rollBucket)
            return rollBucket(numberOfAttacks*modelCount);  
        }
    
        const hitDice = rollHitDice(attacker, modelCount).slice();
        console.log(hitDice);
    
        function numberOfHits (attacker, cover, dice) {
            if (cover > 1) { cover = 1};
            const attackerObject = unitStatLineObject(attacker);
            const rolls = dice;
            var hitBucket = 0;
            // console.log("To-Hit:", rolls);
            for (elem in rolls) {
                console.log("Zarul to hit:", rolls[elem]);
                if (rolls[elem] >= (attackerObject.balisticSkill + cover)) {
                    hitBucket++;
                } 
                continue
            }
            return(hitBucket);
        }
        const successfulHits = numberOfHits(attacker, cover, hitDice);
        toHitResult.toHitDice = hitDice;
        toHitResult.successfulHits = successfulHits;
        console.log(toHitResult)
        return toHitResult;
    }

    const storage = toHit(attacker, cover, modelCount)
    hitObject.toHitDice = storage.toHitDice;
    hitObject.successfulHits = storage.successfulHits;
    console.log("Obiectul final este:", hitObject);
    
    function toWound (attacker, target) {
        const numberOfHits = hitObject.successfulHits;
        function rollWoundDice(attacker, target) {
            console.log(numberOfHits)
            // return rollBucket(numberOfAttacks*modelCount);  
        }
        rollWoundDice(hitObject);
    }
    console.log(toWound(hitObject, 1, 1))
}





// This function calculates the number of successful hits based on the attacker's BS, its rolls, and the presence of cover. No cover = 0, cover = 1.//

// This function calculates the number of hits per model//

function numberOfHits (unit, cover) {
    if (cover > 1) { cover = 1};
    const attackerObject = unitStatLineObject(unit);
    const rolls = rollBucket(attackerObject.attacks);
    var hitBucket = 0;
    // console.log("To-Hit:", rolls);
    for (elem in rolls) {
        // console.log("Zarul to hit:", rolls[elem]);
        if (rolls[elem] >= (attackerObject.balisticSkill + cover)) {
            hitBucket++;
            // console.log('hit');}
        }
    }
    return(hitBucket);
}

// This function expands the numberOfHit functions for the whole squad //
function hitDiceWholeUnit(unit, cover, modelCount) {
    // const hitBucket = numberOfHits(unit, cover);
    var finalHits = 0;
    var i=0;
    while (i < modelCount) {
        finalHits += parseInt(numberOfHits(unit, cover));
        i++
    }
    return finalHits;
}

function successfulHitsWholeUnit (attacker, cover, modelCount) {
    const attackerObject = unitStatLineObject(attacker);
    const rollBucket = hitDiceWholeUnit(attacker, cover, modelCount);
    console.log(attackerObject.balisticSkill, rollBucket)
    const numberOfChecks = rollBucket.length;
    const hitBucket = 0;
    for (i = 0; i<numberOfChecks; i++) {
        if (rollBucket[i] >= (attackerObject.balisticSkill + cover)) hitBucket++}    
    console.log ("Successful damage rolls:", hitBucket);
    return hitBucket;
}

