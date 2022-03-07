"use strict";

// Pour pouvoir dessiner sur le canvas
const canvas = document.getElementById("canvas-id");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

console.log(`width: ${canvasWidth}`);
console.log(`height: ${canvasHeight}`);

// Nbr de vie de départ
const lifeStart = 8;
let currentLife = lifeStart;

// Score
let score = document.querySelector(".score-total");
score.textContent = 0;

// input
// let input = document.querySelector(".word-to-guess").toUpperCase();

// Element du DOM
const alphabetLetters = [...document.getElementsByClassName("letter")];

let life = document.querySelector(".nbr-lives");
life.textContent = currentLife;
console.log(life);

let boxText = (document.querySelectorAll(".box2").innerText = "");

// Récupère l'ID de la div ou on va mettre la case
const findWordLetters = document.getElementById("find-letters");

// Mot
const words = ["chien", "immeuble", "jouissance"];
const wordToFind =
  words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(wordToFind);

let boxLetterText = null;
let boxEmpty = null;

let letterFind = false;
const arrayLetterToCheck = [];






function drawHangMan(nbrStep) {
  switch (nbrStep) {
    case 1:
      // Montant
      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = "white";
      context.moveTo(50, canvasHeight - 10);
      context.lineTo(50, 30);
      context.stroke();
      break;
    case 2:
      // Renfort
      context.beginPath();
      context.lineWidth = 3;
      context.moveTo(50, 50);
      context.lineTo(100, 30);
      context.stroke();
      break;
    case 3:
      // Barre horizontal
      context.beginPath();
      context.moveTo(50, 30);
      context.lineTo(canvasWidth - 100, 30);
      context.stroke();
      break;
    case 4:
      // Petit montant
      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 30);
      context.lineTo(canvasWidth - 100, 50);
      context.stroke();
      break;
    case 5:
      // Tête
      context.lineWidth = 3;
      context.beginPath();
      context.arc(canvasWidth - 100, 60, 10, 0, Math.PI * 2, true);
      context.stroke();
      break;
    case 6:
      // Corps
      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 70);
      context.lineTo(canvasWidth - 100, 100);
      context.stroke();
      break;
    case 7:
      // Bras
      context.beginPath();
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 75);
      context.lineTo(canvasWidth - 120, 90);
      context.stroke();

      context.beginPath();
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 75);
      context.lineTo(canvasWidth - 80, 90);
      context.stroke();
      break;
    case 8:
      // Jambes
      context.beginPath();
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 100);
      context.lineTo(canvasWidth - 80, 115);
      context.stroke();

      context.beginPath();
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.moveTo(canvasWidth - 100, 100);
      context.lineTo(canvasWidth - 120, 115);
      context.stroke();
      break;

    default:
      alert("erreur avec dessin");
      break;
  }
}



function addBox(word) {
  const wordToLetter = word.split("");

  wordToLetter.forEach((element) => {
    // On créer la div qui va être la case
    boxEmpty = document.createElement("div");
    // On ajoute une class à cette div
    boxEmpty.className = "box box2";
    boxEmpty.innerText = "";

    // On créer un text dans d'un noeud/tag
    console.log(boxEmpty);

    // On place le noeud/tag ou on désir

    findWordLetters.appendChild(boxEmpty);
  });
}

function playGame() {

}

addBox(wordToFind);

alphabetLetters.forEach((element) => {
  // Action au clique sur une lettre de l'alphabet
  element.addEventListener("click", (e) => {
    let clickLetter = e.target.innerText;
    const wordToLetter = wordToFind.split("");

    console.log(`clickLetter: ${clickLetter}`);
    console.log(`lifeStart: ${lifeStart}`);

    letterFind = false;

    // Vérifie si la lettre cliquer correspond à une lettre du mot à trouver
    wordToLetter.forEach((element, index) => {
      if (element === clickLetter) {
        console.log(`${clickLetter}: correspond a une lettre`);
        document.querySelectorAll(".box2")[index].innerText = clickLetter;
        arrayLetterToCheck.push(clickLetter);
        letterFind = true;
      }
    });

    element.classList.remove("box");
    element.className = "boxOff";

    // Enlèvement de point et gagner/perdu
    if (!letterFind) {
      
      currentLife -= 1;
      console.log("1 point en moins");
      life.textContent = currentLife;

      // Dessin
      switch (currentLife) {
        case 7:
          drawHangMan(1)
          break;
        case 6:
          drawHangMan(2)
          break;
        case 5:
          drawHangMan(3)
          break;
        case 4:
          drawHangMan(4)
          break;
        case 3:
          drawHangMan(5)
          break;
        case 2:
          drawHangMan(6)
          break;
        case 1:
          drawHangMan(7)
          break;
        case 0:
          drawHangMan(8)
          break;
      
        default:
          break;
      }

      if (currentLife <= 0) {
        alert("perdu");
      }
    } else if (wordToLetter.length === arrayLetterToCheck.length) {
      score.textContent = currentLife * 100;
      alert("gagner");
    }
  });
});

// - A :  Etre sur de comprendre le problème à 100 %. Poser les bonnes questions pour avoir une idée claire du problème.
// - Créer un élément du DOM avec la class ".letter" qui sera vide. Le nombre de case dépendra du nombre de lettre présent dans le mot à trouver.
// - Au click sur une lettre de l'alphabet : si la lettre cliquer est présent dans le mot, la/les case/s vide/s correspondante/nt ajoutera la lettre.
// - Vérifier si utilisateur à trouver le mot. Si oui message gagner sinon continuer.
// - Tracer lettre déjà utiliser
// - Si lettre pas présent dans le mot enlever 1 points, vérifier si vie est à zero si oui perdu sinon continuer.
// - Si lettre ne correspond pas au mot ajouter une étape du dessin
// - Input si mot est juste

// - B :  Diviser un gros problème en plusieurs petit problèmes.
// -

// - C :  Ne pas avoir peur ou honte de faire autant de recherche que nécessaire qu’on a besoin.
// - D :  Pour les plus gros problèmes, écrire du pseudo-codes avant d’écrire du code même.


