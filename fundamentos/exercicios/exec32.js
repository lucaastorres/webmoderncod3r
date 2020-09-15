/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros*/

function media(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma / vetor.length
}

array = [1, 2, 4, 5, 10, 21, 42,]
console.log(media(array))