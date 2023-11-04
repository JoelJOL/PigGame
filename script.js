//'use strict';

function ChangePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  console.log(sectionClass);
  for (let i = 0; i < 2; i++) {
    sectionClass[i].classList.toggle('player--active');
  }
}
