var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

var diceNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

//Шоог шидэх эвэнт листенэр
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 санамсаргүй нэг тоо гаргах
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // шооны зургийг гаргах
  diceDom.style.display = "block";

  diceDom.src = "dice-" + diceNumber + ".png";
  // тоглогчийн ээлжийн оноог өөрчлөх
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});

// hold tovchnii eventlistener
document.querySelector(".btn-hold").addEventListener("click", function() {
  // toglogchiin eeljind tsugluulsan onoog global onoon deer nemj ugnu
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // delgets deer onoog n uurchilnu

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //hojih esehiig shalgah
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = " WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});
// ene function ni togloh eeljiig daraagiin eeljruu shiljuulne
function switchToNextPlayer() {
  // eeljiin onoog butsaagad noillono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // ulaan tseg shiljuuleh toggle baival nemne bxgui bol hasna
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur alga bolgono
  diceDom.style.display = "none";
}
