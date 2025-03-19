function getComputerChoice() {
    switch (Math.floor(3 * Math.random())) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
