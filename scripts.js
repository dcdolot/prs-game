// Function to play a single round and determine the winner
function playRound(playerSelection) {
    // Define possible choices
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

// Add event listeners to the buttons
document.getElementById('rockButton').addEventListener('click', () => {
    alert('You chose Rock!');
    playRound('Rock');
});

document.getElementById('paperButton').addEventListener('click', () => {
    alert('You chose Paper!');
    playRound('Paper');
});

document.getElementById('scissorsButton').addEventListener('click', () => {
    alert('You chose Scissors!');
    playRound('Scissors');
});

 
// // Play five consecutive rounds.
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = getHumanChoice();

//         let result = playRound(computerSelection, playerSelection);

//         console.log(`Round ${i + 1}: I chose ${computerChoice}. You chose ${humanChoice}. Result: ${result}`)
//     }
// }

// playGame()



