
var Death_Guard = {
    Plague_Marine: ['plagueMarineStats', 'plagueMarineTest'], 
    Blight_Drone: ['blightDroneStats', 'blightDroneTest']
};
  
var Space_Marines = {
    Intercessor: ['intercessorStats', 'intercessorTest'], 
    Librarian: ['librarianStats', 'librarianTest']
};



// asta merge sa imi dea obiectul

var list = document.body;

var deathGuardOptionsArray = ['Plague_Marine', 'Blight_Drone'];

var selectList = document.createElement("select");
selectList.id = "selectDeathGuardUnit";
list.appendChild(deathGuardOptionsArray);

//Create and append the options
for (i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = deathGuardOptionsArray[i];
    option.text = deathGuardOptionsArray[i];
    selectList.appendChild(option);
}

function getModel () {

}
function getFaction() {
    
    function readChoice() {
        let choice = document.getElementById("factionSelect").value;
        return choice
    }

    var name = readChoice()
    return window[name];
    

    // document.getElementById("factionDisplay").innerHTML = Death_Guard['Plague_Marine'];

}

// Asta imi da continutul obiectului 
// function getFaction(object) {
    
//     function readChoice(object) {
//         let choice = document.getElementById("factionSelect").value;
//         return Death_Guard[`${choice}`];
//     }
//     readChoice(object);
//     document.getElementById("factionDisplay").innerHTML = readChoice()
// }