function computerPlay() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock"
    } else if (random === 2) {
        return "paper"
    } else 
        return "scissors"
}
let result;

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Your Weapon")
        let computerSelection = computerPlay();
        console.log("Round " + (i + 1) + "  |  " + playerScore + " - " + computerScore)
        console.log(playRound(playerSelection, computerSelection));
        if (result === "win") {
            playerScore++;
        } else if (result === "loss") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return "You Win " + playerScore + " to " + computerScore 
    }
    return "You Lose " + computerScore + " to " + plyerScore 
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "win"
        return "You Win! Rock Beats Scissors"
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        result = "tie"
        return "Tie! Try Again!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "loss"
        return "You Lose! Paper Beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = "tie"
        return "Tie! Try Again!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "loss"
        return "You Lose! Rock Beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "win"
        return "You Win! Scissors Beat Paper"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "loss"
        return "You Lose! Scissors Beat Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "win"
        return "You Win! Paper Beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "tie"
        return "Tie! Try Again!"
    }
  }
  
  
  console.log(game());