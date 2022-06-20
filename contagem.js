let listaAlunos = ["Icaro", "Elisama", "Tamires", "Juan", "William"]

for(let numero = 0; numero < listaAlunos.length; numero++) {
    console.log(numero)
    if (numero == 0) {
        console.log("O número é ZERO")
    } else if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR`)
    } else if (numero % 2 == 1) {
        console.log(`O número ${numero} é ÍMPAR`)
    }

}