module.exports = class Eleicao {
    
    constructor (totalEleitores, validos, votosBrancos, nulos){
    this.totalEleitores = parseInt(totalEleitores);
    this.validos = parseInt(validos);
    this.votosBrancos = parseInt(votosBrancos);
    this.nulos = parseInt(nulos);     
    }

    percentualValidos(){
        return (this.validos /this.totalEleitores)*100
    }

    percentualBrancos(){
        return (this.votosBrancos /this.totalEleitores)*100
    }

    percentualNulos(){
        return (this.nulos /this.totalEleitores)*100
    }

}
