//DOM
document.title = "ROCK-PAPER-SCISSOR";
//Function Calling

//save in local storage and covert String to OBJ and start the from loaded score || if score becomes NULL than make Scores Default
let Score = JSON.parse(localStorage.getItem("Score")) || {
  Win: 0,
  Loss: 0,
  Tie: 0,
};
//to print in browser page
updateScoreElement();

/*if (Score === null) {
  Score = {
    Win: 0,
    Loss: 0,
    Tie: 0,
  };
}*/
//-Function Calling  for Player
function playerGame(playerMove) {
  const computerMove = pickComputer();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    Score.Win += 1;
  } else if (result === "You Lose") {
    Score.Loss += 1;
  } else if (result === "Tie") {
    Score.Tie += 1;
  }
  //toUpdate Score  in browser page......
  updateScoreElement();
  //STORE in Local Storage....convert object to string.....
  localStorage.setItem("Score", JSON.stringify(Score));
  //print in page
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon" />
      <img src="images/${computerMove}-emoji.png" class="move-icon" />
      Computer`;
}
// Function Calling for Computer..........
function pickComputer() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
//Update Score in Page
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Win: ${Score.Win}, Loses: ${Score.Loss}, Ties: ${Score.Tie}`;
}