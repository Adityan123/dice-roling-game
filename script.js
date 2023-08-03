'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];

//Fuctionm for Changing the active css between players

const activeChange = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll buttion

btnRoll.addEventListener('click', function () {
  if (playing) {
    let ranNumber = Math.trunc(Math.random() * 6) + 1;
    // console.log(ranNumber);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ranNumber}.png`;

    if (ranNumber !== 1) {
      currentScore += ranNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      activeChange();
    }
  }
});

//Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      activeChange();
    }
  }
});

//new game button

btnNew.addEventListener('click', function () {
  document.location.reload();
});
