let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let symbols = ['o',"x"];
let possibilidades = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function jogada(position){
    
    if(gameOver){
        return;
    }

    if(board[position] == ""){
    board[position] = symbols[playerTime];
    }

    gameOver= isWin();

    if(gameOver == false){
        if(playerTime == 0){
            playerTime = 1;
        }else{
            playerTime = 0;
        }
    }

    return gameOver;
}



function isWin(){

    for(let i = 0; i < possibilidades.length;i++){
        let v = possibilidades[i];
        let pos1 = v[0];
        let pos2 = v[1];
        let pos3 = v[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true;
        }
    }
        return false;
}