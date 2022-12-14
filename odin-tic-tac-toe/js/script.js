/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */

const GameModeEnum = {
  twoPlayer: 'twoPlayer',
  computer: 'computer',
};

function Player(playerSign) {
  const sign = playerSign;

  function getSign() {
    return Object.freeze(sign);
  }

  return { getSign };
}

function Computer(computerSign) {
  const sign = computerSign;

  function getSign() {
    return Object.freeze(sign);
  }

  return { getSign };
}

const gameBoard = (() => {
  /*
    Indizes
      0 1 2
      3 4 5
      6 7 8
  */
  let board = new Array(9);

  function isFieldEmpty(index) {
    if (board[index] === undefined) return true;
    return false;
  }

  function setField(index, sign) {
    if (index > board.length) return false;
    if (!isFieldEmpty(index)) return false;

    board[index] = sign;
    return true;
  }

  function getField(index) {
    if (index === board.length) return;
    return Object.freeze(board[index]);
  }

  function getRandomEmptyField() {
    const emptyFieldsArr = [];
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === undefined) {
        emptyFieldsArr.push(i);
      }
    }
    // get random empty field index
    const idx = emptyFieldsArr[Math.floor(Math.random() * emptyFieldsArr.length)];
    return idx;
  }

  function resetBoard() {
    board = new Array(9);
  }
  /*
    Indizes
      0 1 2
      3 4 5
      6 7 8
  */
  function checkWinner(sign) {
    if ( // Rows
      (board[0] === sign && board[1] === sign && board[2] === sign)
       || (board[3] === sign && board[4] === sign && board[5] === sign)
       || (board[6] === sign && board[7] === sign && board[8] === sign)
       // Columns
       || (board[0] === sign && board[3] === sign && board[6] === sign)
       || (board[1] === sign && board[4] === sign && board[7] === sign)
       || (board[2] === sign && board[5] === sign && board[8] === sign)
       // Diagonals
       || (board[0] === sign && board[4] === sign && board[8] === sign)
       || (board[2] === sign && board[4] === sign && board[6] === sign)) {
      return true;
    }
    return false;
  }

  return Object.freeze({
    setField,
    getField,
    resetBoard,
    checkWinner,
    getRandomEmptyField,
  });
})();

const displayController = (() => {
  const gameboardDiv = document.querySelector('.gameboard');
  const chooseEnemyDiv = document.querySelector('.choose-enemy');
  const message = document.querySelector('.message');
  const markButtons = document.querySelectorAll('.row button');
  const startBtn = document.querySelector('.startBtn');
  startBtn.addEventListener('click', () => {
    showPlayerTurn('X');
    markButtons.forEach((btn) => {
      btn.addEventListener('click', gameController.playRound);
    });
    deactivateStartButton();
  });

  const resetBtn = document.querySelector('.resetBtn');
  resetBtn.addEventListener('click', () => {
    gameController.resetGame();
  });

  const backBtn = document.querySelector('.backBtn');
  backBtn.addEventListener('click', () => {
    gameboardDiv.classList.add('inactive');
    chooseEnemyDiv.classList.remove('inactive');
    gameController.resetGame();
    markButtons.forEach((btn) => {
      btn.removeEventListener('click', gameController.playRound);
    });
    activateStartButton();
  });

  const playerBtn = document.querySelector('.playerBtn');
  playerBtn.addEventListener('click', () => {
    gameboardDiv.classList.remove('inactive');
    chooseEnemyDiv.classList.add('inactive');
    message.textContent = 'You are playing against Player';
    gameController.setGameMode(GameModeEnum.twoPlayer);
    gameController.initPlayerTwo('twoPlayer');
    activateStartButton();
  });

  const aiBtn = document.querySelector('.aiBtn');
  aiBtn.addEventListener('click', () => {
    gameboardDiv.classList.remove('inactive');
    chooseEnemyDiv.classList.add('inactive');
    message.textContent = 'You are playing against AI';
    gameController.setGameMode(GameModeEnum.computer);
    gameController.initPlayerTwo('computer');
    activateStartButton();
  });

  function activateStartButton() {
    startBtn.disabled = false;
    resetBtn.disabled = true;
  }

  function deactivateStartButton() {
    startBtn.disabled = true;
    resetBtn.disabled = false;
  }

  function setFieldDom(btn, sign) {
    btn.textContent = sign;
    btn.classList.add(sign);
  }

  function resetDom() {
    markButtons.forEach((btn) => {
      btn.textContent = '';
      btn.className = '';
    });
  }

  function showPlayerWinner(sign) {
    message.textContent = `Player ${sign} won!`;
  }

  function showPlayerTurn(sign) {
    message.textContent = `It's Player ${sign}'s turn!`;
  }

  function showComputerTurn() {
    message.textContent = 'It\'s Computer\'s turn!';
  }

  function showComputerWinner() {
    message.textContent = 'Computer won!';
  }

  function showDraw() {
    message.textContent = 'It\'s a draw!';
  }

  // eslint-disable-next-line max-len
  return Object.freeze({
    setFieldDom,
    showPlayerWinner,
    resetDom,
    showPlayerTurn,
    showDraw,
    showComputerTurn,
    showComputerWinner,
  });
})();

const gameController = (() => {
  const playerOne = new Player('X');
  let playerTwo;
  let round = 1;
  let roundOver = false;
  let gameMode;

  const setGameMode = (gm) => {
    gameMode = gm;
  };

  const initPlayerTwo = (gm) => {
    if (gm === GameModeEnum.twoPlayer) {
      playerTwo = new Player('O');
    } else if (gm === GameModeEnum.computer) {
      playerTwo = new Computer('O');
    }
  };

  const isRoundOver = () => Object.freeze(roundOver);

  const playRound = (e) => {
    if (roundOver) return;

    const btn = e.target;
    const idx = btn.id;
    const sign = round % 2 === 0 ? playerTwo.getSign() : playerOne.getSign();
    const nextSign = (round + 1) % 2 === 0 ? playerTwo.getSign() : playerOne.getSign();

    if (!gameBoard.setField(idx, sign)) return;
    displayController.setFieldDom(btn, sign);

    if (gameBoard.checkWinner(sign)) {
      displayController.showPlayerWinner(sign);
      roundOver = true;
    } else if (round > 8) {
      displayController.showDraw();
      roundOver = true;
    } else {
      displayController.showPlayerTurn(nextSign);
    }
    round += 1;

    // Make random computer move, if gamemode is AI
    if (gameMode === GameModeEnum.computer && nextSign === 'O') {
      playAIRound(nextSign, sign);
    }
  };

  const playAIRound = (nextSign, currentSign) => {
    if (roundOver) return;

    const idx = gameBoard.getRandomEmptyField();
    const btn = document.getElementById(idx);

    if (!gameBoard.setField(idx, nextSign)) return;
    displayController.setFieldDom(btn, nextSign);

    if (gameBoard.checkWinner(nextSign)) {
      displayController.showComputerWinner(nextSign);
      roundOver = true;
    } else if (round > 8) {
      displayController.showDraw();
      roundOver = true;
    } else {
      // Always shows that its player x's turn
      displayController.showPlayerTurn(currentSign);
    }
    round += 1;
  };

  const resetGame = () => {
    round = 1;
    roundOver = false;
    displayController.resetDom();
    gameBoard.resetBoard();
    displayController.showPlayerTurn('X');
  };

  return Object.freeze({
    playRound,
    resetGame,
    isRoundOver,
    initPlayerTwo,
    setGameMode,
  });
})();
