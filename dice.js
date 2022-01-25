let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

let diceRoll;

// message at top of screen indicating who has current turn
const gameMessage = document.getElementById("game-message");
// output player current score
const scorePlayer1 = document.getElementById("score-player-one");
const scorePlayer2 = document.getElementById("score-player-two");
// output roll
const rollPlayer1 = document.getElementById("player1-roll");
const rollPlayer2 = document.getElementById("player2-roll");
// buttons
const rollBtn = document.getElementById("roll-dice-el");
const resetBtn = document.getElementById("reset-game-btn");
