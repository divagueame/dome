function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();

    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

    
    const outcomes = {
        rock: { beats: 'scissors', message: 'You Win! Rock beats Scissors' },
        paper: { beats: 'rock', message: 'You Win! Paper beats Rock' },
        scissors: { beats: 'paper', message: 'You Win! Scissors beats Paper' }
    };

    
    if (playerSelection === computerSelection.toLowerCase()) {
        const result = "It's a Tie!";
        console.log(`Result: ${result}`);
        return result;
    }

    
    if (outcomes[playerSelection] && outcomes[playerSelection].beats === computerSelection) {
        const result = outcomes[playerSelection].message;
        console.log(`Result: ${result}`);
        return result;
    } else {
        
        const result = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
        console.log(`Result: ${result}`);
        return result;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    
    document.getElementById('result').textContent = result;
}


