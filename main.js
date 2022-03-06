'use strict'

// Pour pouvoir dessiner sur le canvas
const canvas = document.getElementById('canvas-id');
const context = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

console.log(`width: ${canvasWidth}`);
console.log(`height: ${canvasHeight}`);


// Nbr de vie de départ
const lifeStart = 8;

// Element du DOM
const alphabetLetters = [...document.getElementsByClassName("letter")];
let life = document.querySelector(".nbr-lives");
life.textContent = lifeStart;
console.log(life);

let boxText = document.querySelectorAll('.box2').innerText = "";

// Récupère l'ID de la div ou on va mettre la case
const findWordLetters = document.getElementById("find-letters");





// Mot
const words = ['chien', 'immeuble', 'jouissance'];
let wordToFind = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(wordToFind);

let boxLetterText = null;
let boxEmpty = null;



function addBox(word) {
    const wordToLetter = word.split("");

    wordToLetter.forEach(element => {

        // On créer la div qui va être la case
        boxEmpty = document.createElement("div");
        // On ajoute une class à cette div
        boxEmpty.className = "box box2";
        boxEmpty.innerText = "";
        
        
        // On créer un text dans d'un noeud/tag
        console.log(boxEmpty);


        // On place le noeud/tag ou on désir

        findWordLetters.appendChild(boxEmpty)
        
    });
}

addBox(wordToFind);

alphabetLetters.forEach((element) => {

    element.addEventListener('click', (e) => {

        let clickLetter = e.target.innerText;
        const wordToLetter = wordToFind.split("");

        console.log(`clickLetter: ${clickLetter}`);
        console.log(`lifeStart: ${lifeStart}`);
        
        wordToLetter.forEach((element, index) => {

            if(element === clickLetter) {
                console.log(`${clickLetter}: correspond a une lettre`);
                document.querySelectorAll('.box2')[index].innerText = clickLetter;
            } else {
               
            }
            
        });
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






















context.beginPath();
context.lineWidth = 5;
context.strokeStyle = 'white';
context.moveTo(50, canvasHeight - 10);
context.lineTo(50, 30);
context.stroke();

context.beginPath();
context.lineWidth = 3;
// context.strokeStyle = 'white';
context.moveTo(50, 50);
context.lineTo(100, 30);
context.stroke();

context.beginPath();
// context.lineWidth = 5;
// context.strokeStyle = 'white';
context.moveTo(50, 30);
context.lineTo(canvasWidth - 100 , 30);
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 30);
context.lineTo(canvasWidth - 100, 50);
context.stroke();

context.lineWidth = 3;
context.beginPath();
context.arc(canvasWidth - 100, 60, 10, 0, Math.PI*2, true);
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 70);
context.lineTo(canvasWidth - 100, 100);
context.stroke();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 75);
context.lineTo(canvasWidth - 120, 90);
context.stroke();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 75);
context.lineTo(canvasWidth - 80, 90);
context.stroke();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 100);
context.lineTo(canvasWidth - 80, 115);
context.stroke();

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = 'white';
context.moveTo(canvasWidth - 100 , 100);
context.lineTo(canvasWidth - 120, 115);
context.stroke();