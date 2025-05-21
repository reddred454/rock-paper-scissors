function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0){
        return 'rock';
    } 
    else if (rand === 1){
        return 'paper';
    } 
    else if (rand === 2){
        return 'scissors';
    }
    
}

function getHumanChoice(){
    let str = prompt('Enter parameter' )
    return str;
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'paper'){
        // computerScore++;
        console.log("Player lose! Paper beats rock!");
         
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        // humanScore++;
        console.log("Player win! Rock beats scissors!");

    }
    else if (humanChoice === 'rock' && computerChoice === 'rock'){
        console.log("Draw");
    }

    if (humanChoice === 'paper' && computerChoice === 'paper'){
        console.log("Draw");
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        // computerScore++;
        console.log("Player lose! scissors beats paper!");
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        // humanScore++;
        console.log("Player win! paper beats rock!");
    }


    if (humanChoice === 'scissors' && computerChoice === 'paper'){
        // humanScore++;
        console.log("Player win! scissors beats paper!");
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        // computerScore++;
        console.log("Player lose! rock beats scissors!");
    }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
        console.log("Draw!");
    }
    
}





const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(humanSelection);



function playGame(){
    playRound(humanSelection, computerSelection);

    // setInterval(playGame, 1000)
    
    let humanScore = 0;
    let computerScore = 0;
    let counter = 0

    
}
playGame()