'use strict';
<<<<<<< HEAD
function rollButton() {
    var rollValue = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "/PigGame/images/" + "dice-" + rollValue + ".png";
	var img = document.querySelectorAll("img")[0];
	img.setAttribute("src", diceLocation);
  }

  'use strict';
  let score=10;
  let currentScore=0;
  const getScorePlayer1=(score)=>{
      currentScore+=score;
      let scoreTag=document.getElementById("current--0");
      console.log(scoreTag);
      scoreTag.textContent=`${currentScore}`;
  }
  getScorePlayer1(score);
  
  
  const getScorePlayer2=(score)=>{
      currentScore+=score;
      let scoreTag=document.getElementById("current--1");
      console.log(scoreTag);
      scoreTag.textContent=`${currentScore}`;
  }
  getScorePlayer2(score);
=======
let score=10;
let currentScore=0;
const getScorePlayer1=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById("current--0");
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}
getScorePlayer1(score);


const getScorePlayer2=(score)=>{
    currentScore+=score;
    let scoreTag=document.getElementById("current--1");
    console.log(scoreTag);
    scoreTag.textContent=`${currentScore}`;
}
getScorePlayer2(score);
>>>>>>> 3430b75fb014ad5aab460cb3d9026071d899289e
