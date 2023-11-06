//'use strict';
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = 'images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
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
