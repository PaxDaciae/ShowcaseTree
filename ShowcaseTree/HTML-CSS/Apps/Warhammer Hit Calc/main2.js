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

// This function prints
function toHit (attacker, cover, modelCount) {
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
    return (`To Hit Dice: ${hitDice}, Successful Number of Hits: ${successfulHits}`);
}