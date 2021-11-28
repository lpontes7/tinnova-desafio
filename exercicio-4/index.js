
function validacao(num) {
    if (num <= 0 || isNaN(num)) return "Número informato não é válido, por favor insira um número natural"
    else return multiplos(num)
}

function multiplos(num) {
    let soma = 0;

    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma += i;
        }
    }

    return soma
}

function main() {
    var readlineSync = require("readline-sync");
    const numero = readlineSync.question("Informe um número maior que zero: ");

    const resposta = validacao(numero)

    if (!isNaN(resposta)) console.log("A soma dos multiplos de 3 e 5 do número informado é : " + resposta)
    else console.log(resposta)
}

main()
