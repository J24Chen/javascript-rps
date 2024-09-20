
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
    determineWinner(0);
    displayOnCard(playerCard,0);
});
paper.addEventListener('click',() => {
    determineWinner(1);
    displayOnCard(playerCard,1);
});
scissor.addEventListener('click',() => {
    determineWinner(2);
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


function determineWinner(playerChoice){
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

    if (computerScore == 5) {
        information.innerHTML = "GAME OVER: Computer wins!";
        //disable the rest of the buttons
        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.backgroundColor = "#DADAD9";
        }
    } else if (playerScore == 5) {
        information.innerHTML = "GAME OVER: You win!";
        //disables the rest of the buttons
        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.backgroundColor = "#DADAD9";
        }
    }


}






