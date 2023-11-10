const displayNames = () => {
  let name1 = localStorage.getItem('name1');
  let name2 = localStorage.getItem('name2');

  document.getElementById('name--0').textContent = name1;
  document.getElementById('name--1').textContent = name2;
};

displayNames();

function NewGame() {
  location.reload();
  document.getElementById('score--0').innerHTML = '0';
  document.getElementById('score--1').innerHTML = '0';
  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';
  document.getElementById('img').src = 'images/dice-1.png';
}

let playerId = 0;
let score;
let currentScore = 0;
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
  if (rollValue == 1) reset();
  else getScorePlayer(rollValue);
}

function changePlayer() {
  let moveScore = document.getElementById(`current--${playerId}`);
  moveScore.classList.toggle('current--score--active');
  setTimeout(function () {
    moveScore.classList.toggle('current--score--active');
    let sectionClass = document.getElementsByTagName('section');
    for (let i = 0; i < 2; i++) {
      if (sectionClass[i].classList.contains('player--active')) {
        let activeScore = document.getElementById(`current--${i}`).innerHTML;
        document.getElementById(`current--${i}`).innerHTML = '0';
        document.getElementById(`score--${i}`).innerHTML =
          parseInt(document.getElementById(`score--${i}`).innerHTML) +
          parseInt(activeScore);
        checkWinner(i);
        sectionClass[i].classList.remove('player--active');
        console.log('active before' + sectionClass[i]);
      } else {
        sectionClass[i].classList.add('player--active');
        console.log('active after' + sectionClass[i]);
        playerId = i;
      }
    }
    currentScore = 0;
  }, 500);
}

const getScorePlayer = score => {
  currentScore += score;
  let scoreTag = document.getElementById(`current--${playerId}`);
  scoreTag.textContent = `${currentScore}`;
};

function checkWinner(i) {
  console.log('checking winner' + playerId);
  // let winnerscore = document.getElementsByClassName('player--active');
  let score = document.getElementById(`score--${i}`);
  let winScore = score.textContent;
  if (winScore >= 100) {
    console.log('won');
    // winnerscore[0].classList.add('player--winner');
    let sectionClass = document.getElementsByTagName('section');
    sectionClass[i].classList.add('player--winner');
  }
}
const reset = () => {
  document.getElementById(`current--${playerId}`).innerHTML = '0';
  changePlayer();
};
