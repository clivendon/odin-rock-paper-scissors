let humanScore = 0;
let computerScore = 0;
let playerHasChosen = false;
let playerChoice = null;
let roundCount = 0;
let roundDisplay = document.getElementById("current-round");
let roundWinnerDisplay = document.getElementById("round-winner-display");

const restartButton = document.getElementById("restart-button");

const weapons = {
	rock: { weakTo: "paper", strongTo: "scissors" },
	paper: { weakTo: "scissors", strongTo: "rock" },
	scissors: { weakTo: "rock", strongTo: "paper" },
};

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

const playerChoiceMade = (choice) => {
	playerHasChosen = true;
	playerChoice = choice;
	playRound();
};

const playRound = () => {
	if (playerHasChosen && humanScore < 5 && computerScore < 5) {
		let computerChoice = getComputerChoice();
		if (weapons[playerChoice].strongTo === computerChoice) {
			humanScore++;
			roundWinnerDisplay.innerHTML = `${playerChoice} beats ${computerChoice}! Player wins! The score is now Player:${humanScore} to CPU:${computerScore}`;
		} else if (weapons[playerChoice].weakTo === computerChoice) {
			computerScore++;
			roundWinnerDisplay.innerHTML = `${computerChoice} beats ${playerChoice}! CPU wins! The score is now Player:${humanScore} to CPU:${computerScore}`;
		} else {
			roundWinnerDisplay.innerHTML = `You both chose ${playerChoice}! It's a draw this round!`;
		}
		roundCount++;
		roundDisplay.innerHTML = roundCount;
	} else {
		if (humanScore > computerScore) {
			roundWinnerDisplay.innerHTML = `CONGRATULATIONS You've beat the computer!`;
		} else {
			roundWinnerDisplay.innerHTML = `Better luck next time the computer takes this one.`;
		}
	}

	playerHasChosen = false;
};

const restartGame = () => {
	humanScore = 0;
	computerScore = 0;
	playerHasChosen = false;
	playerChoice = null;
	roundCount = 0;
	roundDisplay.innerHTML = 0;
	roundWinnerDisplay.innerHTML = "";
};

restartButton.addEventListener("click", restartGame);

// Start the game
playerChoiceMade();
