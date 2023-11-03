var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
        break;
}

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Tie!";
}