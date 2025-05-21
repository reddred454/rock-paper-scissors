const container = document.querySelector('.container')
const ul = document.querySelector('ul')
let counter = 0;
let humanScore = 0;
let computerScore = 0;

const div = document.createElement('div');
const li = document.createElement('li')


const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')


rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)


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


function playRound(humanChoice, computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'paper'){
        li.textContent = "Player lose! Paper beats rock!"
        ul.appendChild(li)
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        li.textContent = "Player win! Rock beats scissors!"
        ul.appendChild(li)
        humanScore++

    }
    else if (humanChoice === 'rock' && computerChoice === 'rock'){
        li.textContent = 'Draw'
        ul.appendChild(li)
    }

    if (humanChoice === 'paper' && computerChoice === 'paper'){
        li.textContent = 'Draw'
        ul.appendChild(li)

    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        li.textContent = "Player lose! scissors beats paper!"
        ul.appendChild(li)
        computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        li.textContent = "Player win! paper beats rock!"
        ul.appendChild(li)
        humanScore++
    }

    if (humanChoice === 'scissors' && computerChoice === 'paper'){
        li.textContent = "Player win! scissors beats paper!"
        ul.appendChild(li)
        humanScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        li.textContent = "Player lose! rock beats scissors!"
        ul.appendChild(li)
        computerScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
        li.textContent = 'Draw'
        ul.appendChild(li)
    }
}


function playGame(){
    counter++
    const playerSelection = this.textContent
    const computerSelection = getComputerChoice()
    console.log(playerSelection);
    console.log(computerSelection);
    div.textContent = counter
    container.append(div)
    playRound(playerSelection, computerSelection)
    const buttons = document.querySelectorAll('button');


    if (humanScore > 4){
        div.textContent = 'Game over! Player wins'
        buttons.forEach(button => {
            button.disabled = true
        })
    } 
    else if (computerScore > 4){
        div.textContent = 'Game over! Computer wins'
        buttons.forEach(button => {
            button.disabled = true
        })
    }

    

}