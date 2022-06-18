
// This part works in returning the array I need, but it requires that they are placed inside an object and returning them based on the key, which I would want to avoid //
const obj = { att: [1, 1, 1, 1], btt: [2, 2, 2, 2], ctt: [3, 3, 3, 3], dtt: [4, 4, 4, 4] };

function getOption() {
  let choice = document.getElementById("mySelect").value;
  function pick(name) {
    return obj[String(name)];
  }
  document.getElementById("demo").innerHTML = pick(choice);
}

// Here, although the arrays are named One and Two and I return a string that is either "One" or "Two", JS doesn't seem to notice that those are array names and returns the string themselves. //


var One = ['a','a'];
var Two = ['b','b'];
function getSecondOption() {
  let choice = document.getElementById("mySelectZwei").value;
  function pick(name) {
    return window[name];
  }
  document.getElementById("demoZwei").innerHTML = pick(choice);
}

var Death_Guard = {
  Plague_Marine: ['plagueMarineStats', 'plagueMarineTest'], 
  Blight_Drone: ['blightDroneStats', 'blightDroneTest']
};

var Space_Marines = {
  Intercessor: ['intercessorStats', 'intercessorTest'], 
  Librarian: ['librarianStats', 'librarianTest']
};

function getFaction() {
    function interpret () {
    let faction = document.getElementById("factionSelect").value;
    return faction;
  }

  var factionName = interpret();
  console.log(factionName)
  // document.getElementById("factionDisplay").innerHTML = interpret();
}


function getUnit(object) {
  let unit = document.getElementById("factionSelect").value;
  return unit
  document.getElementById("modelDisplay").innerHTML = window[Death_Guard[String(interpret())]];
}

function getModel(object) {
  document.getElementById("modelDisplay").innerHTML = object[String(faction)];
}

var a = {a: "hello world", b: 'bye'};
var varName = "a";
console.log( window[varName] ); // outputs hello world
console.log( this[varName] );