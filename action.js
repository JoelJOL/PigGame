const landingPage2=()=>{
    window.location.href = "playerNames.html";
  }
  let name1,name2;
const gamePage=()=>{
    name1=document.getElementById("player-name-1").value;
    name2=document.getElementById("player-name-2").value;
    console.log(name1);
    console.log(name2);
    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    window.location.href = "index.html";
  }
