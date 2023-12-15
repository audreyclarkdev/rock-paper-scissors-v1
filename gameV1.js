const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Sorry, your entry is not valid!');
    }
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else if (randomNumber === 2){
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'You both tied!';
    }

    if (userChoice === 'bomb') {
        return 'You blew up the computer. He was my only friend :(';
    }
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } 
        if (computerChoice === 'scissors') {
            return 'Congrats, you win!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } 
        if (computerChoice === 'rock') {
            return 'Congrats, you win!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } 
        if (computerChoice === 'paper') {
            return 'Congrats, you win!';
        }
    }
};

let playGame = (userInput) => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();

    console.log("The User chose", userChoice);   
    console.log("The Computer chose", computerChoice);
    
    let winnerText = determineWinner(userChoice, computerChoice);
    console.log(winnerText);
};

let userInput = prompt("Please enter rock, paper, or scissors.");

playGame(userInput);
