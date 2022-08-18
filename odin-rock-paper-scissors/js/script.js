const gameScreen = document.querySelector('.game-screen');
const btnsDiv = document.querySelector('.player-selection');
const btns = document.querySelectorAll('.player-selection-btn');
btns.forEach((button) => {
  const playerSelection = button.classList[0];
  button.addEventListener('click', function() {
    playRound(playerSelection)
  });
})
const result = document.querySelector('.result');
const score = document.querySelector('.score');

const winScreen = document.querySelector('.win-screen');
const winner = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');
playAgain.addEventListener('click', restartGame);

let playerWins = 0;
let computerWins = 0;
const MAXWINS = 5;

startGame();

function startGame() {
  resetScores();
  showGameScreen();
}

function restartGame() {
  startGame();
}

function showGameScreen() {
  winScreen.style.display = "none";
  gameScreen.style.display = "block";
}

function showResultScreen() {
  winScreen.style.display = "block";
  gameScreen.style.display = "none";
}

function resetScores() {
  playerWins = 0;
  computerWins = 0;
  result.textContent = '';
  score.textContent = `Score: Computer 0 - Player 0`;
}

function getComputerChoice() {
  const choices = new Array('rock', 'paper', 'scissors');
  const choice = Math.floor((Math.random() * 3));

  return choices[choice];
}

function playRound(playerSelection) {
  const ps = playerSelection.toLowerCase();
  const cs = getComputerChoice().toLowerCase();

  const playerWon = checkIfPlayerWon(ps,cs);

  if(playerWon != undefined) {
    playerWon ? playerWins++ : computerWins++;
  }
  
  if(playerWins < MAXWINS && computerWins < MAXWINS) {
    score.textContent = `Score: Computer ${computerWins} - Player ${playerWins}`;
    result.textContent = `Result: ${buildResultMessage(playerWon, ps, cs)}`;
  }
  else {
    showWinner();
  }
}

function showWinner() {
  showResultScreen();
  if(playerWins === MAXWINS) {
    winner.textContent = 'Player won! :)';
  }
  else {
    winner.textContent = 'Computer won! :(';
  }
}

function checkIfPlayerWon(ps, cs) {
  let playerWon = false;

  switch(ps) {
    case 'rock':
      if(cs == 'scissors') {
        playerWon = true;
      }
      else if (cs == 'paper') {
        playerWon = false;
      }
      else {
        playerWon = undefined;
      }
      break;
    case 'paper':
      if(cs == 'rock') {
        playerWon = true;
      }
      else if (cs == 'scissors') {
        playerWon = false;
      }
      else {
        playerWon = undefined;
      }
      break;
    case 'scissors':
      if(cs == 'paper') {
        playerWon = true;
      }
      else if (cs == 'rock') {
        playerWon = false;
      }
      else {
        playerWon = undefined;
      }
      break;
    default:
      playerWon = undefined;
  }

  return playerWon;
}

function buildResultMessage(playerWin, playerSelection, computerSelection) {
  if(playerWin == undefined) {
    return `It\'s a tie with ${playerSelection}!`;
  }

  if(playerWin) {
    return `You win! Player selection ${playerSelection} beats Computer selection ${computerSelection}.`;
  }
  else {
    return `You lose! Computer selection ${computerSelection} beats Player selection ${playerSelection}.`;
  }
}