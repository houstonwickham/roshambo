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
let round = 1;
let playerScore = 0;
let computerScore = 0;

function game(e) {
    let computerSelection = computerPlay();
    document.querySelector("#result").textContent = playRound(e.target.id, computerSelection);
    document.querySelector("#round").textContent = "Round " + round;
    if (result === "win") {
        playerScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    document.querySelector("#score").textContent = playerScore + " - " + computerScore;
    if (playerScore >= 5) {
        for (let i = 0; i < document.querySelectorAll("button").length; i++) {
            document.querySelectorAll("button")[i].style.display = "none";
        }
        document.querySelector("#reset").style.display = "block";
        for (let i = 0; i < document.querySelectorAll("h3").length; i++) {
            document.querySelectorAll("h3")[i].style.display = "none";
        }
        document.querySelector("h1").textContent = "Game Over! You Win!";
    }
    if (computerScore >= 5) {
        for (let i = 0; i < document.querySelectorAll("button").length; i++) {
            document.querySelectorAll("button")[i].style.display = "none";
        }
        document.querySelector("#reset").style.display = "block";
        for (let i = 0; i < document.querySelectorAll("h3").length; i++) {
            document.querySelectorAll("h3")[i].style.display = "none";
        }
        document.querySelector("h1").textContent = "Game Over! You Lose!";
    }
}

document.querySelector("#rock").addEventListener("click", function(e) {
    game(e)
});

document.querySelector("#paper").addEventListener("click", function(e) {
    game(e)
});

document.querySelector("#scissors").addEventListener("click", function(e) {
    game(e)
});

document.querySelector("#reset").addEventListener("click", function(e) {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#round").textContent = "Round " + round;
    document.querySelector("#score").textContent = playerScore + " - " + computerScore;
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
        document.querySelectorAll("button")[i].style.display = "inline-block";
    }
    for (let i = 0; i < document.querySelectorAll("h3").length; i++) {
        document.querySelectorAll("h3")[i].style.display = "block";
    }
    document.querySelector("h1").textContent = "Rock Paper Scissors";
    document.querySelector("#result").textContent = "Rock Paper Scissors";
});

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase;
    round++;

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
  
  
//   console.log(game());