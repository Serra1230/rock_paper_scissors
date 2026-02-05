function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return "rock";
    else if(number === 1) return "paper";
    else return "scissors";
}


function getHumanChoice(){
    let inp = prompt("What is your input: ");
    return inp.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } 
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } 
        else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    console.log("--- GAME START ---");
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log("Round " + (i + 1));
        playRound(humanSelection, computerSelection);
        console.log("Score: You " + humanScore + " - " + computerScore + " CPU");
        console.log("------------------");
    }

    console.log("--- FINAL RESULTS ---");
    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("GAME OVER. The computer won.");
    } else {
        console.log("It was a draw!");
    }
}

playGame();

