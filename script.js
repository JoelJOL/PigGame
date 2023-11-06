'use strict';
function NewGame() {
  document.getElementById('score--0').innerHTML = '0';
  document.getElementById('score--1').innerHTML = '0';
  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';
  document.getElementById('img').src = 'images/dice-1.png';
}
//'use strict';
let playerId=1;
let score;
let currentScore=0;
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
  getScorePlayer(rollValue);
}


let playerId = 0;
function ChangePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  for (i = 0; i < 2; i++) {
    if (sectionClass[i].classList.contains('player--active')) {
      let activeScore = document.getElementById(`current--${i}`).innerHTML;
      document.getElementById(`score--${i}`).innerHTML = activeScore;
      sectionClass[i].classList.remove('player--active');
    } else {
      sectionClass[i].classList.add('player--active');
      playerId = i;
    }
  }
}
  
const getScorePlayer=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById(`current--${playerId}`);
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}