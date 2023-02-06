const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0EL = document.querySelector(".current--0");
const current1EL = document.querySelector(".current--1");
//Dice image
const diceImage = document.querySelector(".dice-image");
//Buttons
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceImage.classList.add("hidden");
current0EL.textContent = 0;
current1EL.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  //Make current score of the  player to 0
  currentScore = 0;
  //Changing in the user interface
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  //switch the active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("active-player");
  player1EL.classList.toggle("active-player");
};

btnRoll.addEventListener("click", function () {
  //Generate a random number (1-6()
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //Display the dice
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //Adding the dice to the current score
      currentScore = currentScore + dice;
      document.querySelector(`.current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //add current score to the score of the active player
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active-player");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winner");
      diceImage.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  player0EL.classList.add("active-player");
  player1EL.classList.remove("active-player");
  player0EL.classList.remove("winner");
  player1EL.classList.remove("winner");
  diceImage.classList.add("hidden");

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
});
