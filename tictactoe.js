
var player1 = ""
var player2 = ""
var currentPlayer = ""
var gameBoard = ["", "", "", "", "", "", "", "", ""]
var wins = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]
document.getElementById("restart").disabled = true
document.getElementById("board").style.display = "none"

startGame = document.getElementById("form")
if (startGame !== null) {startGame.addEventListener("submit", function (e) {e.preventDefault(); playerone = document.getElementById("player1").value; playertwo = document.getElementById("player2").value;console.log(playerone + " and " + playertwo + " starting a game of tic-tac-toe.");const player1Symbol = "O"; const player2Symbol = "X"; player1 = playerFactory(playerone, player1Symbol); player2 = playerFactory(playertwo, player2Symbol); console.log({ player1, player2 });startGame.style.display = "none"; document.getElementById("board").style.display = "block"; });}
const playerFactory = (name, symbol) => {return { name, symbol };};
var table = document.getElementById("table")
var i = 0
var gameOver = false
table.addEventListener("click", function (e) {if (e.target && e.target.nodeName == "TD") {cell = e.target.innerHTML;if (cell == "" || cell == undefined){if (!gameOver){currentPlayer = changePlayer(i);e.target.innerHTML = currentPlayer.symbol; gameBoard[Number(e.target.attributes["0"].nodeValue)] = currentPlayer.symbol; console.log(gameBoard);if (i == 8){console.log("Nobody won the game. It's a tie. Restart to play again.");startGame.innerHTML = "Nobody won the game. It's a tie. Restart to play again.";gameOver = true;document.getElementById("restart").disabled = false;document.getElementById("banner").innerHTML="Nobody won the game. It's a tie. Restart to play again.";} if (checkIfWon(gameBoard, currentPlayer, i)) {console.log(currentPlayer.name + " won the game. Restart to play again."); startGame.innerHTML = currentPlayer.name + " won the game. Restart to play again.";gameOver = true;document.getElementById("restart").disabled = false;document.getElementById("banner").innerHTML=currentPlayer.name + " won the game. Restart to play again.";}}i++;}}})
function changePlayer(i) {return (i % 2 == 0) ? player1 : player2;}
function checkIfWon(gameBoard, currentPlayer, i) {if (i < 5) return false; return checkWin(gameBoard, currentPlayer.symbol);}
function checkWin(gameBoard, symbol) {var gotWinner = false; 
        wins.forEach(a => {if ((gameBoard[a[0]] == symbol) && (gameBoard[a[1]] == symbol) && (gameBoard[a[2]] == symbol)) {console.log("looks like we got winner.");gotWinner = true;return false;}}); return gotWinner
}
document.getElementById("restart").addEventListener("click", function (e) {location.reload();})
