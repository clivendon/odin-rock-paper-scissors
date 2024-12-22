let humanScore = 0;
let computerScore = 0;



const getComputerChoice = () => {
  let cpuChoice = Math.floor(Math.random() * 3) + 1; // Generate a value between 1 and 3
  if (cpuChoice === 1) {
    return "rock";
  } else if (cpuChoice === 2) {
    return "paper";
  } else if (cpuChoice === 3) {
    return "scissors";
  } else {
    console.log("Error in getComputerChoice() function");
  }
};

const playerChoice = (choice) => {
  return String(choice);
};


const playRound = () => {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log(
      `It's a draw! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log(
      `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log(
      `Rock beats Scissors! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(
      `Paper beats Rock! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log(
      `Scissors beats Paper! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(
      `Scissors beats Paper! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log(
      `Rock beats Scissors! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    );
  } else {
    console.log("Something went wrong woopsie");
  }
};

const playGame = () => {
  
}

// Start the game
playGame();
