// You are a skilled diamondsmith whose business is getting better by the day.
// Eventually, you decided that you needed to scale to keep up with demand.
// Build a diamond-cutting machine (i.e. write a function that takes in a positive integer 
// representing the raw stone's carat).
// The output would be the finished diamond and tag indicating its quality, 
// arranged in an array of two elements.
// The first element would be an array of arrays representing the diamond.
// The second element would be a string indicating "perfect cut" if all the diamond's 
// edges are pointy or "good cut" otherwise.

function diamondCut (carats) {;
    const diamond = Array(carats);
    const row = Array(carats).fill(0);
    console.log(row);
    if (carats % 2 == 0){
        for ( i = 0; i < carats/2; i++ ) {
            const workingRow = row.slice();
            workingRow[((carats/2) - i - 1)] = 1;
            workingRow[((carats/2) + i)] = 1;
            diamond[(0 + i)] = [workingRow];
            diamond[(carats - 1 - i)] = [workingRow];
        }
        diamond.splice(carats/2, 1)
        return [diamond, "Good Cut."];
    } else if (carats % 2 !== 0) {        
        for ( i = 0; i < (carats+1)/2; i++ ) {
            const workingRow = row.slice();
            workingRow[(((carats-1)/2) - i)] = 1;
            workingRow[(((carats-1)/2) + i)] = 1;
            diamond[(0 + i)] = [workingRow];
            diamond[(carats - 1 - i)] = [workingRow];
        }
    }
        return [diamond, "Perfect Cut."]
}
       



function testRow(x){
    let baseArray = [];
    let addArray = ['a','b','c','b','a']
    for (i=0; i<x; i++){
        baseArray.push(addArray)
    }
    return baseArray
}

function generateRows(carats, elementNumber){
  
}