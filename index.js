var randomNumber1 = Math.round(Math.random() * 5);
var randomNumber2 = Math.round(Math.random() * 5);
var diceImg = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var diceRoll1 = diceImg[randomNumber1];
var diceRoll2 = diceImg[randomNumber2];

document.querySelector(".img1").setAttribute("src", diceRoll1);

document.querySelector(".img2").setAttribute("src", diceRoll2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Won!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Won!🚩";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "🚩Draw!🚩";
}