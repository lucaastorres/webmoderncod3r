/* 31)​Escrever um algoritmo que percorre um vetor de inteiros, 
conta quantos números negativos há nesse vetore imprime a quantidade no console*/

function negativos(vetor) {
    let quantidade = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0)
        quantidade++
    }
    return quantidade
}

array = [1, 2, -1, 4, -2, -4, 9, -19, 3]

console.log(negativos(array))