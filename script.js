'use strict';
function NewGame() {
  document.getElementById('score--0').innerHTML = '0';
  document.getElementById('score--1').innerHTML = '0';
  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';
  document.getElementById('img').src = 'images/dice-1.png';
}
//'use strict';
let playerId=0;
let score;
let currentScore=0;
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
  getScorePlayer(rollValue);
}

function changePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  for (let i = 0; i < 2; i++) {
    if (sectionClass[i].classList.contains('player--active')) {
      let activeScore = document.getElementById(`current--${i}`).innerHTML;
      document.getElementById(`current--${i}`).innerHTML='0';
      document.getElementById(`score--${i}`).innerHTML = parseInt(document.getElementById(`score--${i}`).innerHTML)+parseInt(activeScore);
      sectionClass[i].classList.remove('player--active');
    } else {
      sectionClass[i].classList.add('player--active');
      playerId = i;
    }
  }
  currentScore=0;
}
  
const getScorePlayer=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById(`current--${playerId}`);
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}

  
  
   function checkwinner()
   {
    let playerId=0;
    let winnerscore=document.getElementsByClassName('player--active');
    console.log(winnerscore)
    let score=document.getElementById(`score--${playerId}`);
    winScore=score.textContent;
    console.log(winScore)
    if(winScore>=100)
    {
     winnerscore[0].classList.add('player--winner');
    }

  }
   
  
 

  
  
   function checkwinner()
   {
    let playerId=0;
    let winnerscore=document.getElementsByClassName('player--active');
    console.log(winnerscore)
    let score=document.getElementById(`score--${playerId}`);
    winScore=score.textContent;
    console.log(winScore)
    if(winScore>=100)
    {
     winnerscore[0].classList.add('player--winner');
    }

  }
   
  
 