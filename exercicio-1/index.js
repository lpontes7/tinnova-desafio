const Eleicao = require("./Eleicao");

const eleicao = new Eleicao(1000,800,150,50)

console.log("Porcentagem de votos validos: "+eleicao.percentualValidos()+"%")
console.log("Porcentagem de votos brancos: "+eleicao.percentualBrancos()+"%")
console.log("Porcentagem de votos nulos: "+eleicao.percentualNulos()+"%")
