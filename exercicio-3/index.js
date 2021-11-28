
function validacao(num) {
    if (num < 2 || isNaN(num)) return "Número informato não é válido, por favor insira um número maior ou igual a 2"
    else return factorial(num)
}

function factorial(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return num * factorial(num - 1);
}

function main() {
    var readlineSync = require("readline-sync");
    const numero = readlineSync.question("Informe um número maior ou igual a 2: ");

    const resposta = validacao(numero)

    if (!isNaN(resposta)) console.log("O fatorial do número informado é: "+resposta) 
    else console.log(resposta) 
}

main()
