// Create a function that takes a Tic-tac-toe board and returns "X" if the X's are placed in a way that
// there are three X's in a row or returns "O" if there is three O's in a row.

const board = [
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "X", "X"]
];

function checkTick(board) {
    for (rand=0; rand<board.length; rand++) {
        for (coloana=0; coloana<board[rand].length; coloana++) {
            currentSign = board[rand][coloana];
            // if (currentSign)
            console.log(`pentru randul ${rand} si coloana ${coloana} simbolul este`, currentSign);
        }
        // currentSign = board[i][i];
        // console.log(`${0+i} este`, currentSign);
    }
} 