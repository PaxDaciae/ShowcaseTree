// Create a function that takes a Tic-tac-toe board and returns "X" if the X's are placed in a way that
// there are three X's in a row or returns "O" if there is three O's in a row.

const board = [
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "X", "X"]
];

function checkTick(board) {

    function sign(rand,coloana){
        return board[rand][coloana];
    };
    for (rand=0; rand<board.length; rand++) {
        for (coloana=0; coloana<board[rand].length; coloana++) {
            currentSign = sign(rand, coloana);
            function checkHorizontal(rand, coloana) {
                if (currentSign === sign(rand, (coloana+1)%3) === sign(rand, (coloana+2)%3))
                return true;
            }
            function checkVertical(rand, coloana) {
                if (currentSign === sign((rand+1)%3, coloana) === sign((rand+2)%3, coloana))
                return true;
            }
            function checkDiagonal(rand, coloana) {
                if (currentSign === sign((rand+1)%3, (coloana+1)%3) === sign((rand+2)%3, (coloana+2)%3))
                return true;
            }
            if (checkHorizontal(rand, coloana) || checkVertical(rand, coloana) || checkDiagonal(rand, coloana)) console.log(currentSign);
                // (currentSign === sign(rand+1,coloana) === sign() || currentSign === sign(rand, coloana+1) || currentSign === sign(rand+1, coloana+1)) 
            // if (coloana < 0)
        }
    }
}

            /** function checkTick(board) {
//     for (rand=0; rand<board.length; rand++) {
//         for (coloana=0; coloana<board[rand].length; coloana++) {
//             currentSign = board[rand][coloana];
//             // if (currentSign)
//             console.log(`pentru randul ${rand} si coloana ${coloana} simbolul este`, currentSign);
//         }
//         // currentSign = board[i][i];
//         // console.log(`${0+i} este`, currentSign); **/