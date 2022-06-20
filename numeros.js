let prompt = require("prompt-sync")()

let numeroMaior;
let numeroMenor;
let valorInserido;

for(let contador = 0; contador < 10; contador++) {
    let valorInserido = parseInt( prompt("Digite um número: ") )

    if (contador == 0) {
        numeroMaior = valorInserido;
        numeroMenor = valorInserido;
    }

        if (valorInserido > numeroMaior) {
            numeroMaior = valorInserido;
        } else if (valorInserido < numeroMenor) {
            numeroMenor = valorInserido
        }
}

console.log(`O maior valor é ${numeroMaior} e o menos valor é ${numeroMenor}`)