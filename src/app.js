import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //haber que cartas tiene el juego de cartas: treboles, diamantes, corazones y picas y van del 2 al 10 y empiezan con as y terminan con jota, reina y rey.  ♦ ♥ ♠ ♣
let cardNumber=["As",2,3,4,5,6,7,8,9,10,"J","Q","K"]
let randomCardNumber= cardNumber[Math.floor(Math.random()*cardNumber.length)];
let tipo=["♦", "♥", "♠", "♣"];
let randomTipo= tipo[Math.floor(Math.random()*tipo.length)];

console.log(randomCardNumber);
console.log(randomTipo);


document.getElementById("simboloArriba").innerHTML = randomTipo;
document.getElementById("numeroCentro").innerHTML = randomCardNumber;
document.getElementById("simboloAbajo").innerHTML = randomTipo;


if (randomTipo === "♦" || randomTipo === "♥") {
  document.getElementById("cuerpoDeCarta").style.color = "red";
} else {
  document.getElementById("cuerpoDeCarta").style.color = "black";
}
};
