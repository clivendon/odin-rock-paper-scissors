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

const getHumanChoice = () => {
  let choice = prompt("What's your choice? (Rock, Paper, or Scissors)");
  let choiceLowercase = choice.toLocaleLowerCase();

  while (
    choiceLowercase !== "rock" &&
    choiceLowercase !== "paper" &&
    choiceLowercase !== "scissors"
  ) {
    choice = prompt("Invalid choice. Please select Rock, Paper, or Scissors");
    choiceLowercase = choice.toLocaleLowerCase();
  }

  return choiceLowercase;
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
  for (let round = 0; round < 5; round++) {
    console.log(`Round ${round + 1}:`);
    playRound();
  }
  if (humanScore === computerScore) {
    console.log(`It's a tie! Both the player and CPU scored ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(
      `The humans prevail! The player wins ${humanScore} to ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `The computers have prevailed this time. Computer wins ${computerScore} to ${humanScore}`
    );
  }
};

// Start the game
playGame();
