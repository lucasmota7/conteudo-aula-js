// Criação de métodos 
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Snoopy",
            raca: "Vira-Lata",
            latir: function () {
                return this.nome + " latiu: au au";
            }
        },
    },
}

console.log(casa.pets.cachorro.latir());

let texto = new String("Snoop");

console.log(texto);