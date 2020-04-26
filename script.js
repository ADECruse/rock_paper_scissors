function computerPlay() {
    // Generates random number between 1 - 3
   const min = Math.ceil(1);
   const max = Math.floor(3);
   let result = Math.floor(Math.random() * (max - min + 1)) + min; 
    // returns the random number result as a game move
   switch (result) {
       case 1:
           return 'rock'
           break;
       case 2:
            return 'paper'
           break;
       default:
           return 'scissors'
           break;
   }             
}

let playerWins = 0; // keeps count of rounds won by the player
let computerWins = 0; // keeps count of rounds won by the computer
let roundResultMessage = ''; // holds the message to return after a round is played
function playRound(playerSelection, computerSelection) {
    // map array of a move (key) and its corresponindg number (value)
    const moves = new Map([['rock',1],['paper', 2],['scissors', 3]]);
    let playerMove = moves.get(playerSelection.toLowerCase());
    let computerMove = moves.get(computerSelection);
    console.log('Computer\'s choice: ' + computerSelection);
    console.log('Player\'s choice: ' + playerSelection);
    // logic that decides who wins a round
    if (playerMove < computerMove) {
        if (playerMove === 1 && computerMove === 3) {
            playerWins++;
            roundResultMessage = "You Win! " + playerSelection + " beats " + computerSelection;
        } else {
            computerWins++
            roundResultMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerMove > computerMove) {
        if (playerMove === 3 && computerMove === 1) {
            computerWins++
            roundResultMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            playerWins++
            roundResultMessage = "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else {
        roundResultMessage = 'Draw!';
    }                
}

let playerSelection = 'rock';
let computerSelection = computerPlay();
function game() {
    // logic that plays a best of out 5 game
    while (playerWins < 3 && computerWins < 3) {
        playerSelection = window.prompt('Enter move');
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(roundResultMessage);
        console.log('Player: '+ playerWins + ' ' + 'Computer: ' + computerWins);
        if (playerWins >= 3) {
            return 'You won, computer lost best out of 5!'
            break;
        } else if (computerPlay >=3) {
            return 'You lose, computer won best out of 5!'
            break;
        } else {
            continue;
        }        
    }
}
