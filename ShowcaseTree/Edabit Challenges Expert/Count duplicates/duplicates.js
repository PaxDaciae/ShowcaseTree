// You were tasked with making a list of every makeup item your local pharmacy had in stock.
// You created a very long array of each item, with each element having both a name and brand property.
// Now you're looking to simplify the list by combining duplicate items,
// and adding a count property to everything.


function simplifyList(array) {
    const finalList = [];
    for (object in array) {
        // console.log(object, array[object])
        if (!finalList.some(array => array.name === finalList.name)) {
            finalList.push(array[object]);
            finalList[finalList.length - 1].count = 1;
        } else {
            finalList[object].count += 1;
        }
        console.log(finalList)
    }
}

// Backup:
// function simplifyList(array) {
//     const finalList = []
//     for (object in array) {
//         // console.log(object, array[object])
//         if (!finalList.includes(array[object])) {
//             finalList.push(array[object]);
//             // finalList[finalList.length - 1].count = 1;
//         } else {
//             finalList[object].count += 1;
//         }
//         console.log(finalList)
//     }

// }

// Use this as an example for some()
// 
// let animals = [{name: "dog"}, {name: "snake"}, {name: "monkey"}, {name: "donkey"}]
// let element = {name: "monkey"}
// animals.some(animal => animal.name === element.name)