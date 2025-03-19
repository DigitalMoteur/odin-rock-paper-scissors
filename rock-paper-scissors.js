function getChoice(selection) {
    switch (selection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getComputerChoice() {
    return getChoice(Math.floor(3 * Math.random()));
}

function getHumanChoice() {
    const promptMessage =
    "Select your choice!" +
    "\n 0: Rock" +
    "\n 1: Paper" +
    "\n 2: Scissors";
    const humanSelection = parseInt(prompt(promptMessage));
    // Not great error checking, but just clamp to 0, 1, 2 and get a valid choice.
    return getChoice(Math.min(Math.max(humanSelection, 0), 2));
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw!");
    }
    else if ((humanChoice == "Rock" && computerChoice == "Paper")
        || (humanChoice == "Paper" && computerChoice == "Scissors")
        || (humanChoice == "Scissors" && computerChoice == "Rock"))
    {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    else
    {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

function playGame()
{
    // Reset
    humanScore = 0;
    computerScore = 0;

    for (let idx = 0; idx < 5; ++idx) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore) {
        console.log("Game over! It's a draw.");
    }
    else if (humanScore > computerScore) {
        console.log("Game over! You win!");
    }
    else {
        console.log("Game over! You lost. Better luck next time.");
    }
    console.log(`Score: ${humanScore}.`);
}

playGame();