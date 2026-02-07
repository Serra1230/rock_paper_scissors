function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return "rock";
    else if(number === 1) return "paper";
    else return "scissors";
}


let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector('#round-result');
const pScoreDisplay = document.querySelector('#player-score');
const cScoreDisplay = document.querySelector('#computer-score');
const finalWinner = document.querySelector('#final-winner');


function playRound(playerSelection){
    if(playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerSelection = getComputerChoice();
    let result = "";

    if(playerSelection === computerSelection){
        result = "It's a tie!";
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    roundResult.textContent = result;
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;

    checkWinner();
}


function checkWinner(){
    if(playerScore === 5){
        finalWinner.textContent = "Game Over: You are the Champions";
        finalWinner.style.color = "green";
    }
    else if(computerScore === 5){
        finalWinner.textContent = "Game Over: Computer is the Champions";
        finalWinner.style.color = "red";
    }
}


document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));