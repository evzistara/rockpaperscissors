const buttons = document.querySelectorAll("button");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let span = document.querySelector("span");

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0: 
            return "Rock";
        break;
        case 1:
            return "Paper";
        break;
        case 2:
            return "Scissors";
        break;
}
}

let humanScore = 0;
let computerScore = 0;
let round = 0;



function playRound(playerSelection, computerSelection){
        if (
            (playerSelection == "Rock" && computerSelection =="Paper") ||
            (playerSelection == "Paper" && computerSelection =="Scissors") ||
            (playerSelection == "Scissors" && computerSelection =="Rock"))
            {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection} `;
            computerScore++;

        } else if (
            (playerSelection == "Rock" && computerSelection =="Scissors") ||
            (playerSelection == "Paper" && computerSelection =="Rock") ||
            (playerSelection == "Scissors" && computerSelection =="Paper"))
            {
            result.textContent = `You win! ${playerSelection} beats ${computerSelection} `;
            humanScore++;

        } else {
            result.textContent = "It's a draw!";
        }
        score.textContent = `Computer score: ${computerScore}, Human score: ${humanScore} `;
        round++;
        span.textContent = round;

        if (round >= 5){
            endGame();
    }
}

    function endGame(){
    if(humanScore>computerScore){
        score.textContent = "Congratulations! You won!";
    } else if(humanScore===computerScore){
        score.textContent = "It's a draw! Try again.";
    } 
    else {
        score.textContent = "Too bad! Computer wins. Better luck next time.";
    }

    humanScore = 0;
    computerScore = 0;
    round = 0;
}

buttons.forEach(button => {
    button.addEventListener("click",() => {
        const playerSelection = button.value;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    });
});


