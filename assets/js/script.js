/*jshint esversion: 6 */
//set x and y in a class for faster acess
const X_CLASS = 'x';
const Y_CLASS = 'y';

//setting const to shorten code to get data
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message-id');
const restartButton = document.getElementById('restart-button');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

const startGameClick = document.getElementById('start-game-click');

// set combnations into arrays
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//set turn for player y
let YTurn;

startGameClick.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

//toggel function to swap from start screen to game to result screen
function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'grid' : 'none';
    element.style.display = display;
}
//start game function 

function startGame() {
    toggleScreen('start-screen', false);
    toggleScreen('board', true);
    YTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(Y_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {
            once: true
        });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}


//turn swap  after win or draw check
function handleClick(e) {
    const cell = e.target;
    const currentClass = YTurn ? Y_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

//function to check id draw or win
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${YTurn ? "Charizard Y" : "Charizard X"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

//draw state
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(Y_CLASS);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

//swap turn
function swapTurns() {
    YTurn = !YTurn;
}

//hover setting to swap hover icon
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(Y_CLASS);
    if (YTurn) {
        board.classList.add(Y_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

//check win
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}