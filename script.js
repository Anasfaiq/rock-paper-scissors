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

// udah gak di pake karna sekarang udah ada GUI nya
// function getHumanChoice(result) {
//   result = prompt("What's your choice. Rock, Paper, Scissors?");
//   return result;
// }

let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  
  if (humanChoice === computerChoice) {
    humanScore += 1;
    computerScore += 1;
    div.textContent = `Draw! The current score is ${humanScore} - ${computerScore}`;
    // console.log(`Draw! The current score is ${humanScore} - ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    div.textContent = `You Win! The current score is ${humanScore} - ${computerScore}`;
    // console.log(`You Win! The current score is ${humanScore} - ${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    div.textContent = `You Lose! The current score is ${humanScore} - ${computerScore}`
    // console.log(`You Lose! The current score is ${humanScore} - ${computerScore}`);
  }
  
  if (humanScore === 5 || computerScore === 5){
    if (humanScore === 5){
      div.textContent = `You won the game! the final score is ${humanScore} - ${computerScore}`
      // console.log("You won the game!");
    } else {
      div.textContent = `You lose, the final score is ${humanScore} - ${computerScore}`
      // console.log("You lose");
    }
    // untuk disable button agar tidak bisa lanjut saat salah satu score sudah mencapai 5
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
  
}

//   // udah gak dipake lagi

// function playGame() {
  
//   // for (let i = 1; i <= 5; i++ ) {
  //   //   let humanSelection = getHumanChoice();
  //   //   let computerSelection = getComputerChoice();
  //   //   playRound(humanSelection, computerSelection)
  //   // }
  
  //   if (humanScore > computerScore) {
    //     console.log(`You Win! The final score is ${humanScore} - ${computerScore}`);
    //   } else if (humanScore < computerScore) {
      //     console.log(`You Lose! The final score is ${humanScore} - ${computerScore}`);
      //   } else if (humanScore  === computerScore) {
        //     console.log(`Draw! The final score is ${humanScore} - ${computerScore}`);
        //   }
        // }

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restartBtn");
const div = document.querySelector("#score");

rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

        
        
// bagian ini berguna untuk me restart score game
restartBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  alert("Game restarted! Score reset to 0 - 0")
  div.textContent = "";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
})