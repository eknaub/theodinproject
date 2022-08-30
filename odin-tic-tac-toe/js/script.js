"use strict";

function Player(playerSign) {
  const sign = playerSign;
  
  function getSign() {
    return sign;
  }

  return { getSign };  
};

const gameBoard = (() => {
  /* 
    Indizes
      0 1 2
      3 4 5
      6 7 8
  */
  let board = new Array(9);

  function isFieldEmpty(index) {
    if(board[index] === undefined) return true;
    return false;
  }

  function setField(index, sign) {
    if(index > board.length) return false;
    if(!isFieldEmpty(index)) return false;
    
    board[index] = sign;
    return true;
  }

  function getField(index) {
    if(index = board.length) return;
    return board[index];
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
    if( //Rows
      (board[0] === sign && board[1] === sign && board[2] === sign) ||
       (board[3] === sign && board[4] === sign && board[5] === sign) ||
       (board[6] === sign && board[7] === sign && board[8] === sign) ||
       //Columns
       (board[0] === sign && board[3] === sign && board[6] === sign) ||
       (board[1] === sign && board[4] === sign && board[7] === sign) ||
       (board[2] === sign && board[5] === sign && board[8] === sign) ||
       //Diagonals
       (board[0] === sign && board[4] === sign && board[8] === sign) ||
       (board[2] === sign && board[4] === sign && board[6] === sign)) {
      return true;
    }
    return false;
  }
  
  return {setField, getField, resetBoard, checkWinner};
})();

const displayController = (() => {
  let gameboardDiv = document.querySelector('.gameboard');
  let chooseEnemyDiv = document.querySelector('.choose-enemy');
  let message = document.querySelector('.message');
  let signButtons = document.querySelectorAll('.row button');
  let startBtn = document.querySelector('.startBtn');
  startBtn.addEventListener('click', () => {
    showPlayerTurn('X');
    signButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        gameController.playRound(e);
      });
    });
    startBtn.disabled = true;
  });

  let resetBtn = document.querySelector('.resetBtn');
  resetBtn.addEventListener('click', () => {
    gameController.resetGame();
  });

  let backBtn = document.querySelector('.backBtn');
  backBtn.addEventListener('click', () => {
    gameboardDiv.classList.add('inactive');
    chooseEnemyDiv.classList.remove('inactive');
  });

  let playerBtn = document.querySelector('.playerBtn');
  playerBtn.addEventListener('click', () => {
    gameboardDiv.classList.remove('inactive');
    chooseEnemyDiv.classList.add('inactive');
    message.textContent = 'You are playing against Player';
  });
  
  let aiBtn = document.querySelector('.aiBtn');
  aiBtn.addEventListener('click', () => {
    gameboardDiv.classList.remove('inactive');
    chooseEnemyDiv.classList.add('inactive');
    message.textContent = 'You are playing against AI';
  });

  function setFieldDom(btn, sign) {
    btn.textContent = sign;
    btn.classList.add(sign);
  }

  function resetDom() {
    signButtons.forEach((btn) => {
      btn.textContent = '';
      btn.className = '';
    });
  }

  function showWinner(sign) {
    message.textContent = `Player ${sign} won!`;
  }

  function showDraw() {
    message.textContent = `It\'s a draw!`;
  }

  function showPlayerTurn(sign) {
    message.textContent = `It\'s Player ${sign}\'s turn!`;
  }
  
  return { setFieldDom, showWinner, resetDom, showPlayerTurn, showDraw };
})();

const gameController = (() => {
  const playerX = new Player('X');
  const playerO = new Player('O');
  let round = 1;
  let roundOver = false;

  const isRoundOver = () => {
    return roundOver;
  }

  const playRound = (e) => {
    if(roundOver) return;

    let btn = e.target;
    let idx = btn.id;
    let sign = round%2 === 0 ? playerO.getSign() : playerX.getSign();
    if(!gameBoard.setField(idx, sign)) return;
    displayController.setFieldDom(btn, sign);

    if(gameBoard.checkWinner(sign)) {
      displayController.showWinner(sign);
      roundOver = true;
    }
    else if(round > 8) {
      displayController.showDraw();
      roundOver = true;
    }
    else {
      let nextSign = (round+1)%2 === 0 ? playerO.getSign() : playerX.getSign();;
      displayController.showPlayerTurn(nextSign);
    }
    round++;
  }

  const resetGame = () => {
    round = 1;
    roundOver = false;
    displayController.resetDom();
    gameBoard.resetBoard();
    displayController.showPlayerTurn('X');
  }

  return { playRound, resetGame, isRoundOver };
})();