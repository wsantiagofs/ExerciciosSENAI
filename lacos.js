// Laço contado - For
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

let prompt = require('prompt-sync')()

let opcaoUsuario = parseInt(prompt("Digite uma opção: "))

console.log(`A opção digitada pelo usuário foi ${opcaoUsuario}`)

// Laço Condicional - While
while(opcaoUsuario != 0) {
    opcaoUsuario = parseInt(prompt("Digite 0 para sair: "))
}

console.log('Você saiu do loop')