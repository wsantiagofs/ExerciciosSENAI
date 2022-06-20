let dataHoje = new Date()  // Salvando a data atual
let dataEventoString = new Date("2022-06-28")  // Salvando a data do evento com uma string
let dataEventoArg = new Date(2022, 7, 28)  // Salvando a data do evento com argumentos numericos

console.log("A data de hoje é:", dataHoje)
console.log("O aniversário do Thiago é:", dataEventoString)
console.log("O aniversário do Thiago é:", dataEventoArg)

if (dataEventoString > dataHoje) {
    console.log("A data do evento é válida")
} else {
    console.log("Data inválida")
}
