// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

elemento.innerHTML = tamanho;

// Exemplo de utilização do caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união.';

let texto3 = "Somente a dor \"coletiva\" gera a união.";

let texto4 = "Somente a dor \\ coletiva gera a união";

console.log(texto2);
console.log(texto3);
console.log(texto4);

// Exemplo de template string
let nome = "Lucas Mota"
let idade = 23;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

console.log(frase);