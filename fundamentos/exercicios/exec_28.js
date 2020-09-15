/*28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/

function paresImpares(vetor) {
    let numeroDePares = 0
    let numeroDeImpares = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 ==0){
            numeroDePares++
        } else {
            numeroDeImpares++
        }
    }
    console.log(`Pares: ${numeroDePares}, Impares: ${numeroDeImpares}`)
}

paresImpares([2, 3, 4, 5, 6, 7, 8])