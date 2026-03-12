// Utilizando o operador in
const pessoa = {
    primeiroNome: "Lucas",
    ultimoNome: "Mota",
    idade: 23,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados

const pessoa2 = {
    primeiroNome: "Arthur",
    segundoNome: "Morgan",
    carrros: {
        carro1: "Porsche",
        carro2: "Ferrari",
        carro3: "Audi",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Ninja",
    },
}

let moto1 = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"][carro1]);
console.log(pessoa2.motos[moto1]);
