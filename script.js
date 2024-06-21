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


