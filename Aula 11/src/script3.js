// Utilização o this em função

function teste() {
    return console.log(this)
}

// teste();

const carro = {
    marca: "Pagani",
    modelo: "Huayra",
    cor: "Prata",
}

let carroArray = Object.values(carro);

let cArrayString = carroArray.toString();

console.log(cArrayString);