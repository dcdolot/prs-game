let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound(playerSelection) {
    // Define possible choices
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const selectionDiv = document.getElementById("selection")

    selectionDiv.textContent = (`Player: ${playerSelection}, Computer: ${computerSelection}`);

    const resultPerRound = document.getElementById("results")

    if (playerSelection === computerSelection) {


        resultPerRound.textContent = "It's a tie!";
        // return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        resultPerRound.textContent = "You win this round!";
        // return "You win this round!";
    } else {
        computerScore++;
        resultPerRound.textContent = "Computer wins this round!";
        // return "Computer wins this round!";
    }
}

function checkWinner() {
    const overallPointsResult = document.getElementById("overallPoints");
    
    overallPointsResult.textContent = (`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);

    const overallGameWinner = document.getElementById("overallWinner");
    
    if (playerScore > computerScore) {

        overallGameWinner.textContent = "You are the overall winner!";
    } else if (playerScore < computerScore) {
        overallGameWinner.textContent = "Computer is the overall winner!";
    } else {
        overallGameWinner.textContent = "The game is a tie!";
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



