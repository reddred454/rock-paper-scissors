let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let arr = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random()  * 3) ;
    return arr[rand]
    
}


function getHumanChoice(){
    let str = prompt('Enter parameter' )
    return str;
}


function playGround(humanChoice, computerChoice){
    

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);
