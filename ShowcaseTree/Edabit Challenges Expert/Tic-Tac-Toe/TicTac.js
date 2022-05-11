// Create a function that takes a Tic-tac-toe board and returns "X" if the X's are placed in a way that
// there are three X's in a row or returns "O" if there is three O's in a row.

const board = [
    ["X", "X", "O"],
    ["X", "X", "O"],
    ["O", "X", "X"]
];

function checkTick(board) {
    for (rand=0; rand<board.length; rand++) {
        for (coloana=0; coloana<board[rand].length; coloana++) {
            function sign(rand, coloana) {
                return board[rand][coloana];
            }
            currentSign = board[rand][coloana]
            function checkHorizontal(rand, coloana) {
                if (currentSign === sign(rand, (coloana+1)%3) && currentSign === sign(rand, (coloana+2)%3))
                return true;
                else return false;
            }
            function checkVertical(rand, coloana) {
                if (currentSign === sign((rand+1)%3, coloana) && currentSign === sign((rand+2)%3, coloana))
                return true;
                else return false;
            }
            function checkDiagonal(rand, coloana) {
                if (currentSign === sign((rand+1)%3, (coloana+1)%3) && currentSign === sign((rand+2)%3, (coloana+2)%3))
                return true;
                else return false;
            }
            if (checkHorizontal(rand, coloana) || checkVertical(rand, coloana) || checkDiagonal(rand, coloana)) 
            return true;
            else return false;
                // (currentSign === sign(rand+1,coloana) === sign() || currentSign === sign(rand, coloana+1) || currentSign === sign(rand+1, coloana+1)) 
            // if (coloana < 0)
        }
    }
    const result = checkTick(board);
    console.log(result);
}

const result = checkTick(board);


            /** function checkTick(board) {
//     for (rand=0; rand<board.length; rand++) {
//         for (coloana=0; coloana<board[rand].length; coloana++) {
//             currentSign = board[rand][coloana];
//             // if (currentSign)
//             console.log(`pentru randul ${rand} si coloana ${coloana} simbolul este`, currentSign);
//         }
//         // currentSign = board[i][i];
//         // console.log(`${0+i} este`, currentSign); **/