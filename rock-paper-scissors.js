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
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const roundResultsDiv = document.querySelector("#roundResults");
const finalResultsDiv = document.querySelector("#finalResults");

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundResultsDiv.textContent = `Round Draw! Both chose ${humanChoice}`;
    }
    else if ((humanChoice == "Rock" && computerChoice == "Paper")
        || (humanChoice == "Paper" && computerChoice == "Scissors")
        || (humanChoice == "Scissors" && computerChoice == "Rock"))
    {
        computerScore++;
        roundResultsDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
    else
    {
        humanScore++;
        roundResultsDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame(humanChoice)
{
    if (humanScore == 0 && computerScore == 0)
    {
        finalResultsDiv.textContent = "";
    }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    playerScoreDiv.textContent = `Player: ${humanScore}    Computer: ${computerScore}`
    // Game over!
    if (humanScore == 5 || computerScore == 5)
    {
        if (humanScore == computerScore) {
            finalResultsDiv.textContent = "Game over! It's a draw.";
        }
        else if (humanScore > computerScore) {
            finalResultsDiv.textContent = "Game over! You win!";
        }
        else {
            finalResultsDiv.textContent = "Game over! You lost. Better luck next time.";
        }

        // Reset
        humanScore = 0;
        computerScore = 0;
    }
}

document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", () => playGame(e.id));
});