function getComputerChoice(result) {
  result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    console.log("rock");
  } else if (result === 2) {
    console.log("paper");
  } else if (result === 3) {
    console.log("scissors");
  }
  return result;
}

function getHumanChoice(result) {
  result = prompt("What's your choice?");
  return result;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();
  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose! Scissors beats Rock");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors ");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose! Rock beats Scissors");
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Draw! Paper can't beat Paper");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("Draw! Scissors can't beat Scissors");
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Draw! Rock can't beat Rock");
  }
 }

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 playRound(humanSelection, computerSelection);

let humanScore = 0;
let computerScore = 0;

