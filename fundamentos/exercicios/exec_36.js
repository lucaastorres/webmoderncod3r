/*36)​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo 
número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.*/

vetor = [1, 2, 3, 4, 5]

function multiplicacaoNormal(vetorNumerico, multiplicador) {
    for(let i = 0; i < vetorNumerico.length; i++) {
    vetorNumerico[i] = vetorNumerico[i] * multiplicador
    }
    return vetorNumerico
}

function multiplicacaoCondicional(multiplicador) {
    if(multiplicador > 5) 
        return multiplicacaoNormal()
}

console.log(multiplicacaoNormal(vetor, 2))
console.log(multiplicacaoCondicional(vetor, 7))
console.log(multiplicacaoCondicional(vetor, 3))