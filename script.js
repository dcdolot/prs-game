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

