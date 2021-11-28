let bubbleSort = (vetor) => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let tmp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = tmp;
            }
        }
    }
    return vetor;
};

const v = [5,3,2,4,7,1,0,6]

console.log("Vetor original = "+v)
console.log("Vetor ordenado = "+bubbleSort(v))
