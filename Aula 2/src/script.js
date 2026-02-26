//Exemplos de operador de atribuição
let x = 100;

x += 5;
console.log(x);


x-=5;
console.log(x);

//Exemplos de Aritmética em JavaScript
let soma = 5 + 5 + 4;
console.log(soma);

const primeiroNome = 'Lucas';
const ultimoNome = ' Mota';

let nomeCompleto = primeiroNome + ultimoNome;

console.log(nomeCompleto);

// Exemplos de tipos em JavaScript
// String
let cor = 'Azul';
let fruta = 'Laranja';
console.log(cor);
console.log(fruta);

// number
let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

// BigInt
let bigint = 1234567890123456789012345n;
let bigint2 = BigInt (1234567890123456789012345n);
console.log(bigint);
console.log(bigint2);

// Boolen
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

// Object
const carro = {
    marca: 'Porsche',
    modelo: '911 Turbo S',
    cor: 'Ruby Star Neo',
}

console.log(carro);
console.log('A marca do carro é: ' + carro.marca);

// Array 
const frutas = ['Laranja', 'Banana', 'Uva', 'Morango', 'Abacaxi'];

console.log(frutas);

// Date Object
const data = new Date; 

console.log(data);

// Undefined
let indefinido;

console.log(indefinido);

// Null
let nulo = null;

console.log(nulo);

// Symbol
let y = Symbol();

console.log(y);

// Exemplos de typeof
let stringTipo = "300";
let numberTipo = "300";

// const tipoDado = typeof numberTipo;
const tipoDado = typeof numberTipo;

console.log(tipoDado);

// Exemplos de Boolean
let cinco = 5;
let comparacao = cinco == 8;

console.log(comparacao);
