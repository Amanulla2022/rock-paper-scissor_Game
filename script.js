const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const winnerScores = [0, 0];
let playerName = "";

// Add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  playerName = document.getElementById("playerName").value;
  if (playerName === "") {
    alert("Please enter your name!");
    return;
  }

  // Setup player's selection
  let playerSelection = e.target.innerText;

  // Setup a random number to select for computer
  let computerSelection = Math.random();

  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  // Compare selections and determine the winner
  let result = checkWinner(playerSelection, computerSelection);

  // Output scores to the DOM
  if (result === playerName) {
    result = "You win!";
    // Update player's score
    winnerScores[0]++;
  }

  if (result === "Computer") {
    result += " wins!";
    // Update computer's score
    winnerScores[1]++;
  }

  if (result === "Draw") {
    result += ". It's a tie!";
  }

  // Output score into Score DIV
  score.innerHTML =
    playerName +
    ": [ " +
    winnerScores[0] +
    " ] Computer: [ " +
    winnerScores[1] +
    " ]";

  // Output player and computer's selections
  messenger(
    playerName +
      ": <strong>" +
      playerSelection +
      "</strong> Computer: <strong>" +
      computerSelection +
      "</strong><br>" +
      result
  );
}

function messenger(selectionMessage) {
  message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  }

  if (player === "Rock") {
    if (computer === "Paper") {
      return "Computer";
    } else {
      return playerName;
    }
  }

  if (player === "Paper") {
    if (computer === "Scissors") {
      return "Computer";
    } else {
      return playerName;
    }
  }

  if (player === "Scissors") {
    if (computer === "Rock") {
      return "Computer";
    } else {
      return playerName;
    }
  }
}
