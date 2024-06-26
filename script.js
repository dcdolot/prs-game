// Make the computer choose randomly among the choices: rock, paper, and scissors.
function getComputerChoice() {
    let computerChoice = Math.random();
    
    if(computerChoice <= 0.33) {
        return "rock";
    }
    else if(computerChoice >= 0.66) {
        return "paper";
    }
    else {
        return "scissors"
    }

}

computerChoice = getComputerChoice()


// Add prompt that allows users to input their pick among the three choices. must be case-insensitive.
function getHumanChoice() {
    let humanChoice = window.prompt("Please input rock, paper, or scissors")
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice == "rock") {
        return "rock";
    }
    else if(humanChoice == "paper") {
        return "paper";
    }
    else if(humanChoice == "scissors") {
        return "scissors";
    }
    else {
        console.log("Invalid choice")
        humanChoice = getHumanChoice()
    }


    return humanChoice
}

humanChoice = getHumanChoice()


// Play a single round and determine the winner.
function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) {
        console.log(computerChoice, humanChoice)
        return "It's a tie!";
    }
    else if(computerChoice == "rock" && humanChoice == "paper") {
        console.log(computerChoice, humanChoice)
        return "You win!";
    }
    else if(computerChoice == "paper" && humanChoice == "scissors") {
        console.log(computerChoice, humanChoice)
        return "You win!";
    }
    else if(computerChoice == "scissors" && humanChoice == "rock") {
        console.log(computerChoice, humanChoice)
        return "You win!";
    }
    else {
        console.log(computerChoice, humanChoice)
        return "You lose!"
    }
}
 
// Play five consecutive rounds.
function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        let result = playRound(computerChoice, humanChoice);

        console.log(`Round ${i + 1}: I chose ${computerChoice}. You chose ${humanChoice}. Result: ${result}`)
    }
}

playGame()
