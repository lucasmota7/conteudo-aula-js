// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio.

alert("Trapézio")

let B = parseFloat(prompt("Informe um valor de base maior"));
let b = parseFloat(prompt("Informe um valor de base menor"));
let altura = parseFloat(prompt("Informe um valor para altura"));

let resultado = ((B+b) * altura) /2;

alert("O resultado da operação é: " + resultado);