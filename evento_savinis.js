let prompt = require("prompt-sync")();

// Capitalize JS
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Variáveis
let partEvento = 99;
let dataHoje = new Date();
let dataEvento = new Date("2022-07-25");

// Sistema
console.log("Sistema de Cadastro");
if (partEvento <= 100) {
  let nomeUsuario = prompt("Digite seu nome: ");
  console.log(
    `Seja bem-vindo(a) ${capitalizeFirstLetter(
      nomeUsuario
    )}\nO evento acontecerá dia ${dataEvento}`
  );
  if (dataEvento > dataHoje) {
    console.log("A data é válida, prosseguindo com o cadastro...");
  } else {
    console.log(
      "Não é possível continuar com o cadastro porque a data ja passou ou é inválida"
    );
    process.exit();
  }
  let idadeUsuario = prompt("Digite sua idade: ");
  if (idadeUsuario >= 18) {
    console.log("Idade válida, prosseguindo com o cadastro");
    partEvento++;
    console.log(`Cadastro finalizado, o evento ocorrerá ${dataEvento}`);
  } else {
    console.log("Idade inválida, não podemos prosseguir com o cadastro");
    process.exit();
  }
} else {
  console.log(
    "Limite de pessoas atingido, não é possível concluir o cadastro."
  );
}
