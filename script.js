function getComputerChoice(result) {
  result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    return "rock"
  } else if (result === 2) {
    return "paper"
  } else if (result === 3) {
    return "scissors"
  }
  return result;
}

function getHumanChoice(result) {
  result = prompt("What's your choice. Rock, Paper, Scissors?");
  return result;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    humanScore += 1;
    computerScore += 1;
    console.log(`Draw! The current score is ${humanScore} - ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log(`You Win! The current score is ${humanScore} - ${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    console.log(`You Lose! The current score is ${humanScore} - ${computerScore}`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++ ) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }

  if (humanScore > computerScore) {
    console.log(`You Win! The final score is ${humanScore} - ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You Lose! The final score is ${humanScore} - ${computerScore}`);
  } else if (humanScore  === computerScore) {
    console.log(`Draw! The final score is ${humanScore} - ${computerScore}`);
  }
}

playGame();