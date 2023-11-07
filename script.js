const displayNames=()=>{
  let name1=localStorage.getItem("name1");
  let name2=localStorage.getItem("name2");
  
  document.getElementById("name--0").textContent=name1;
  document.getElementById("name--1").textContent=name2;
}

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
        sectionClass[i].classList.remove('player--active');
      } else {
        sectionClass[i].classList.add('player--active');
        playerId = i;
      }
    }
    currentScore = 0;
  }, 500);
  checkWinner();
}

const getScorePlayer = score => {
  currentScore += score;
  let scoreTag = document.getElementById(`current--${playerId}`);
  console.log(scoreTag);
  scoreTag.textContent = `${currentScore}`;
};

function checkWinner() {
  let winnerscore = document.getElementsByClassName('player--active');
  console.log(winnerscore);
  let score = document.getElementById(`score--${playerId}`);
  let winScore = score.textContent;
  console.log(winScore);
  if (winScore >= 100) {
    winnerscore[0].classList.add('player--winner');
  }
  let sectionClass = document.getElementsByTagName('section');
  sectionClass[playerId].classList.add("won-celebration");

}
const reset = () => {
  document.getElementById(`current--${playerId}`).innerHTML = '0';
  changePlayer();
};