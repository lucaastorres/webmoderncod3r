/* 40)​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos 
de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído
 o conceito C, de 7,0 a 8,9 oconceito B e de 9,0 a 10,0 o conceito A.*/
vetor = [4.5, 6.2, 8, 9.5]

function notas(vetor) {
    resultado = []
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] >= 0 && vetor[i] <= 4.9){
            resultado[i] = 'D'
        } else if(vetor[i] >= 5 && vetor[i] <= 6.9) {
            resultado[i] = 'C'
        } else if(vetor[i] >= 7 && vetor[i] <= 8.9) {
            resultado[i] = 'B'
        } else if(vetor[i] >= 9 && vetor[i] <= 10) {
            resultado[i] = 'A'
        } else {
            resultado[i] = 'Nota inválida'
        }
    }
    return resultado
}

console.log(notas(vetor))