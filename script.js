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