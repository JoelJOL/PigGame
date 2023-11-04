//'use strict';
function rollButton() {
  var rollValue = Math.floor(Math.random() * 6 + 1);
  var diceLocation = '/PigGame/images/' + 'dice-' + rollValue + '.png';
  var img = document.querySelectorAll('img')[0];
  img.setAttribute('src', diceLocation);
}

function ChangePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  for (let i = 0; i < 2; i++) {
    sectionClass[i].classList.toggle('player--active');
  }
}
