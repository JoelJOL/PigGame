
  
  
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
   
  
 