/* 30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function maiorMenor(vetor) {
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++) {
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if(vetor[i] > maior) {
                maior = vetor[i]
        }
            if(vetor[i] < menor) {
                menor = vetor[i]
            }
        }   
    }
    return [maior, menor]
}
array = [-1, 2, 4, 5, -12, 40, 19, 22, -2, -67]
console.log(maiorMenor(array))