/*29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações*/

function contarIntervalo(vetor) {
    let sim = 0
    let nao = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            sim++
        } else {
            nao++
        }
    }
    console.log(`Numeros entre o intervalo ${sim}. Numeros que não estão no intervalor: ${nao}`)
}

contarIntervalo([1, 3, 4, 12, 15, 20, 16, 11, 19, 21, 100, 49, 59])