'use strict'

// Pour pouvoir dessiner sur le canvas
const canvas = document.getElementById('canvas-id');
const context = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

console.log(`width: ${canvasWidth}`);
console.log(`height: ${canvasHeight}`);





















































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