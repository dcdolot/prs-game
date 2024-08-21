let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(playerSelection) {
    // Define possible choices
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        // console.log("It's a tie!");
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        // console.log("You win this round!");
        return "You win this round!";
    } else {
        computerScore++;
        // console.log("Computer wins this round!");
        return "Computer wins this round!";
    }
}

function checkWinner() {
    console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (playerScore < computerScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game is a tie!");
    }
}

function playGame(playerSelection) {
    const result = playRound(playerSelection);
    console.log(result);
    roundCount++;

    if (roundCount === 5) {
        checkWinner();
    }
}

// Add event listeners to the buttons
document.getElementById('rockButton').addEventListener('click', () => {
    alert('You chose Rock!');
    playGame('Rock');
});

document.getElementById('paperButton').addEventListener('click', () => {
    alert('You chose Paper!');
    playGame('Paper');
});

document.getElementById('scissorsButton').addEventListener('click', () => {
    alert('You chose Scissors!');
    playGame('Scissors');
});



