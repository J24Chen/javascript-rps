
/* For the main calculation algorithm. We'll be assigning 3 numbers to each rock, paper and scissor
Rock = 0
Paper = 1
Scissor = 2 

This will make determining the winner easier with a game winning algorithm:
    player ties to n%3 number
    player loses to (n+1)%3 number
    player wins to (n+2)%3 number 
*/

let playerScore = 0;
let computerScore = 0;

function isValidPlayerChoice(playerChoice){
    if(playerChoice == null){
        return false;
    }
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == 'rock' || playerChoice == 'r' || playerChoice == '0' ||
       playerChoice == 'paper' || playerChoice == 'p' || playerChoice == '1' ||
       playerChoice == 'scissor' || playerChoice == 's' || playerChoice == '2') {
        return true;
       } else {
        return false;
       }
}

function convertPlayerChoice(playerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'r' || playerChoice == '0') {
        return 0;
    } else if (playerChoice == 'paper' || playerChoice == 'p' || playerChoice == '1'){
        return 1
    }else if  (playerChoice == 'scissor' || playerChoice == 's' || playerChoice == '2') {
        return 2;
    }
}


//returns 0,1,2 for its corresponding choice (rock,paper, or scissors)
let getComputerChoice = () => {
    num = Math.floor(Math.random()* 3);
    return num;
};

function numberToGameChoice(num) {
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}


function determineRoundWinner(playerChoice){
    let computerChoice = getComputerChoice()
    let text = ""

    let computerChoiceName = numberToGameChoice(computerChoice);
    let playerChoiceName = numberToGameChoice(playerChoice);

    console.log(`playerChoice = ${playerChoice}, ${playerChoiceName}, Computer Choice = ${computerChoice}, ${computerChoiceName}`);
    if (playerChoice == computerChoice) {
        text += `${playerChoiceName} ties to ${computerChoiceName}! `
    } else if ((playerChoice+1)%3 == computerChoice){
        text += `${playerChoiceName} loses to ${computerChoiceName}! `
        computerScore++;

    } else {
        text += `${playerChoiceName} wins against ${computerChoiceName}! `
        playerScore++;
    }
    text += `Player: ${playerScore} | Computer: ${computerScore}`
    alert(text)
}


function getGameWinner() {
    if (computerScore == 5) {
        return "Computer"
    } else if (playerScore == 5) {
        return "Player"
        }
        return null;
}

while(!(getGameWinner())){
    let playerChoice = "";
    do {
        playerChoice = prompt("Please choose 'rock', 'paper' or 'scissor");
    } while ( !(isValidPlayerChoice(playerChoice)) );

    playerChoice = convertPlayerChoice(playerChoice);
    determineRoundWinner(playerChoice);

}

alert(`GAME OVER: ${getGameWinner()} wins!: total score: Player: ${playerScore} | Computer: ${computerScore}`)

