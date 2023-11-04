//'use strict';
let playerId=1;
let score;
let currentScore=0;
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
  getScorePlayer1(rollValue);
}

function changePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  for (let i = 0; i < 2; i++) {
    sectionClass[i].classList.toggle('player--active');
  }
}
  
const getScorePlayer1=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById("current--0");
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}

  
const getScorePlayer2=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById("current--1");
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}
