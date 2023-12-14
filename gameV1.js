function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Sorry, your entry is not valid!');
    }
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else if (randomNumber === 2){
        return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'You both tied!';
    } 
    if (userChoice === 'bomb') {
        return 'You blew up the computer. He was my only friend :(';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer beat you!';
        } else {
            return 'Congrats, you win!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer beat you!';
        } else {
            return 'Congrats, you win!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer beat you!';
        } else {
            return 'Congrats, you win!';
        }
    }
};

function playGame() {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();

    console.log("The user chose", userChoice);   
    console.log("The computer played", computerChoice);
    
};

playGame();
console.log("And the winner is:", determineWinner('paper', 'rock'));
