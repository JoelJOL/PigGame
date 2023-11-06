//'use strict';
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
}

let playerId;
function ChangePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  for (playerId = 0; playerId < 2; playerId++) {
    if (sectionClass[playerId].classList.contains('player--active')) {
      let activeScore = document.getElementById(
        `current--${playerId}`
      ).innerHTML;
      console.log(activeScore);
      document.getElementById(`score--${playerId}`).innerHTML = activeScore;
    }
    sectionClass[playerId].classList.toggle('player--active');
  }
}
