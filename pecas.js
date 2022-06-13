let pesoPeca = 50
let qntddPecas = 7
let nomePeca = "Roda"

// verificador de peso
if (pesoPeca > 100) {
    console.log("Pode-se cadastrar a peça")
} else {
    console.log("Peça com peso insuficiente")
}

// verificador de número de peças
if (qntddPecas >= 10) {
    console.log("Não é possível cadastrar, limite de peças excedido")
} else {
    console.log("Cadastro Permitido")
}

// verificador caracteres
if (nomePeca.length < 3) {
    console.log("O nome da peça é inválido (o número de caracteres deve ser maior que 3)")
} else {
    console.log("Nome válido")
}