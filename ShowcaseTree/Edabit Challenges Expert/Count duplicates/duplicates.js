// You were tasked with making a list of every makeup item your local pharmacy had in stock.
// You created a very long array of each item, with each element having both a name and brand property.
// Now you're looking to simplify the list by combining duplicate items,
// and adding a count property to everything.

// const array1 = ["John","Peter","Markus","Ion"];

// // checks whether an element is even
// const even = (element) => element === "Ion";

// console.log(array1.some(even));
// // expected output: true

const array = [
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "Urban Decay", name: "Naked Honey Pallete" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
  ]

function simplifyList(array){
    const shoppingList = []
    for (element in array) {
        var brand = array[element].brand
        console.log(element) 
        console.log(array[element])
        console.log(brand)
        const test = (element) => array[element].brand === shoppingList[element].brand
        if (shoppingList.some(test)) {
            // (element) => element.brand === element.brand)) {
            console.log("contine")
            console.log(shoppingList)

        } else {
            console.log("nu contine")
            shoppingList.push(array[element])
            console.log(shoppingList)
        }
    }
}

// const array = [
//     {name:"John", age:7},
//     {name:"Peter", age:8},
//     {name:"Markus", age: 40},
//     {name:"Ion", age: 50}   
// ]
// const variable = (element) => element === "Ion";
// console.log(array.some(variable))

// function testAlgo(){
//     if (array.some((element) => element.name === "Ion")){
//         console.log("works");
//     } else {
//         console.log("no work");
//     }
// }

// function testAlgo(array) {
//     console.log(array.some(variable));
    // for (object in array) {
    //     if (array.some(object => object.name === "Ion")){
    //         console.log("works");
    //     } else {
    //         console.log("no work");
    //     }
    // }
// }


// function simplifyList(array) {
//     const finalList = [];
//     for (object in array) {
//         // console.log(object, array[object])
//         if (!finalList.some(array => array.name === finalList.name)) {
//             console.log("object not in array")
//             finalList.push(array[object]);
//             console.log(finalList)
//             // finalList[finalList.length - 1].count = 1;
//         } else {
//             console.log("object in array already")
//             // finalList[object].count += 1;
//         }
//         console.log(finalList)
//     }
// }

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