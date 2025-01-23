function getComputerChoice(){
const computerChoice = Math.floor(Math.random()*3);
switch(computerChoice){
    case 0: 
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
}
}

function getHumanChoice(){
const humanChoice = window.prompt("Choose rock, paper or scissors").toLowerCase();
return humanChoice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
   
        if (humanChoice == "rock" && computerChoice =="paper"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice =="scissors"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }else if (humanChoice == "paper" && computerChoice =="scissors"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }else if (humanChoice == "paper" && computerChoice =="rock"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }else if (humanChoice == "scissors" && computerChoice =="rock"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
        }else if (humanChoice == "scissors" && computerChoice =="paper"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log("It's a draw!");
        }
        console.log(`Computer score: ${computerScore}, Human score: ${humanScore}`)
    }

let round = 0;
while(round < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
}
if(humanScore>computerScore){
    console.log("Congratulations! You won!");
} else if(humanScore===computerScore){
    console.log("It's a draw! Try again.");
} 
else {
    console.log("Too bad! Computer wins. Better luck next time.");
}
}
 playGame();