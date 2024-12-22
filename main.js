let humanScore = 0;
let computerScore = 0;
let roundDisplay = document.getElementById("current-round");

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
	console.log(String(choice));
};

const playRound = () => {
	const humanChoice = playerChoice();
	const computerChoice = getComputerChoice();

	if (humanChoice === computerChoice) {
		roundDisplay.innerHTML(`It's a draw! You both selected ${humanChoice}`);
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		computerScore++;
		roundDisplay.innerHTML(
			`Paper beats rock! CPU Wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		humanScore++;
		roundDisplay.innerHTML(
			`Rock beats Scissors! Player Wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		humanScore++;
		roundDisplay.innerHTML(
			`Paper beats Rock! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		computerScore++;
		roundDisplay.innerHTML(
			`Scissors beats Paper! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		humanScore++;
		roundDisplay.innerHTML(
			`Scissors beats Paper! Player wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		computerScore++;
		roundDisplay.innerHTML(
			`Rock beats Scissors! Computer wins! The score is Player:${humanScore} to CPU:${computerScore}`
		);
	} else {
		console.log("Something went wrong woopsie");
	}
};

const displayWinner = () => {};

const playGame = () => {
	if (humanScore < 5 || computerScore < 5) {
		playRound();
	} else {
		displayWinner();
	}
};

// Start the game
playGame();
