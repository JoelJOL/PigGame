<<<<<<< HEAD
<<<<<<< HEAD
function rollButton() {
    var rollValue = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "/PigGame/images/" + "dice-" + rollValue + ".png";
	var img = document.querySelectorAll("img")[0];
	img.setAttribute("src", diceLocation);
  }
=======
'use strict';
//TEST
>>>>>>> b4452e1 (Testing first commit)
=======
//'use strict';

function ChangePlayer() {
  let sectionClass = document.getElementsByTagName('section');
  console.log(sectionClass);
  //for (let i = 0; i < 2; i++) {
  sectionClass[i].classList.toggle('player--active');
  //}
}
>>>>>>> dfb5f4d (feat: Change active player background on clicking HOLD)
