let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
  let cpuChoice = Math.round(Math.random() * 3);
  if (cpuChoice === "1") {
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
  let choice = prompt("What's your choice? (Rock, Paper, or Scissors");
  let choiceLowercase = choice.toLocaleLowerCase();

  if (
    choiceLowercase === "rock" ||
    choiceLowercase === "paper" ||
    choiceLowercase === "scissors"
  ) {
    return choiceLowercase;
  } else {
    console.log(
      "You input an incorrect choice. Please select Rock Paper or Scissors"
    );
  }
}

const playRound = (getComputerChoice, getHumanChoice) => {
    if (getComputerChoice === getHumanChoice){
        return `It's a draw! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'rock' && getComputerChoice === 'paper'){
        computerScore++;
        return `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'rock' && getComputerChoice === 'scissors'){
        humanScoreScore++;
        return `Rock beats Scissors! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'paper' && getComputerChoice === 'paper'){
        computerScore++;
        return `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'paper' && getComputerChoice === 'paper'){
        computerScore++;
        return `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'scissors' && getComputerChoice === 'paper'){
        computerScore++;
        return `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }else if (getHumanChoice === 'scissors' && getComputerChoice === 'paper'){
        computerScore++;
        return `Paper beats Rock! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
    }
