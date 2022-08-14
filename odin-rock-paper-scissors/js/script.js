game();

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors?");
    const computerSelection = getComputerChoice();
    const playerWon = playGame(playerSelection, computerSelection);

    if(playerWon != undefined) {
      playerWon ? playerWins++ : computerWins++;
      console.log(`PlayerWins ${playerWins}`);
      console.log(`ComputerWins ${computerWins}`);
    }
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const choice = Math.floor((Math.random() * 3));

  return choices[choice];
}

function playGame(playerSelection, computerSelection) {
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();

  const playerWon = checkIfPlayerWon(ps,cs);
  
  console.log(buildMessage(playerWon, ps, cs));

  return playerWon;
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

function buildMessage(playerWin, playerSelection, computerSelection) {
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