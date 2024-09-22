
/* For the main calculation algorithm. We'll be assigning 3 numbers to each rock, paper and scissor
Rock = 0
Paper = 1
Scissor = 2 

This will make determining the winner easier with a game winning algorithm:
    player ties to n%3 number
    player loses to (n+1)%3 number
    player wins to (n+2)%3 number 
*/
const buttons = document.getElementsByTagName('button');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const information = document.getElementById('information');
const playerCard = document.getElementById('player-card');
const computerCard = document.getElementById('computer-card');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;


//Listens for player choice buttons. 0,1,2 correspond to rock,paper,scissor accordingly
rock.addEventListener('click',() => {
    determineRoundWinner(0);
    displayOnCard(playerCard,0);
});
paper.addEventListener('click',() => {
    determineRoundWinner(1);
    displayOnCard(playerCard,1);
});
scissor.addEventListener('click',() => {
    determineRoundWinner(2);
    displayOnCard(playerCard,2);
});

//Displays player/computer choice on card on screen.
function displayOnCard (html,num){
    switch (num){
        case 0:
            html.innerHTML = "✊";
            break;
        case 1:
            html.innerHTML = "✋";
            break;
        case 2:
            html.innerHTML = "✌ ";
            break;
    }
}



//Computer choice returns 0,1,2 for its corresponding choice
let getComputerChoice = () => {
    num = Math.floor(Math.random()* 3);
    displayOnCard(computerCard,num);
    console.log(num);
    return num;
    
};

/* Using
Because of the placement of Rock = 0, Paper =1, Scissor = 2, we have an algorithm to determine the winner

    player ties to n%3 number
    player loses to (n+1)%3 number
    player wins to (n+2)%3 number 
e.g: paper (1) will 
    tie to paper(1)
    loses to scissor(2)
    wins to rock(0)

*/

/*
This function has two functions: 
1: Determining the winner of the current round
2: Determining if either the player or computer has reached 5 points, i.e: won the entire game.
*/
function determineRoundWinner(playerChoice){
    let computerChoice = getComputerChoice()
    if (playerChoice == computerChoice) {
        information.innerHTML = "It's a Tie!";
    } else if ((playerChoice+1)%3 == computerChoice){
        information.innerHTML = "You Lose!";
        computerScore++;
        computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
        
    } else {
        information.innerHTML = "You win!";
        playerScore++;
        playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
    }
    
    if (getGameWinner){
        information.innerHTML = `GAME OVER: ${getGameWinner} wins!`;
        disableButtons();
    }

function disableButtons(){
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.backgroundColor = "#DADAD9";
    }
}


function getGameWinner() {
    if (computerScore == 5) {
        return "Computer"
    } else if (playerScore == 5) {
        return "Player"
        }
    }
    return null;
}





