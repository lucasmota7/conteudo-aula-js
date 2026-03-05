// Exercício 8: Exercício 8: Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo.

alert("Área de um triângulo")

let base = parseFloat(prompt("Informe o valor 1"));
let altura = parseFloat(prompt("Informe o valor 2"));

let areaTriangulo = (base * altura) /2;

alert(`O resultado da área de um triângulo de base ${base} e altura ${altura} é: ${areaTriangulo}`);