/*37)​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que 
recebam como parâmetros um número n (número de termos), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos,
bem como a soma dos elementos*/

function progressaoAritmetica(n, a1, r) {
    let an = a1 + (n-1) * r
    return (a1 + an) * n / 2 
}

function progressaoGeometrica(n, a1, q) {
    return  a1 * ((q ** n) - 1) / (q - 1)
}

console.log(progressaoAritmetica(5, 1, 2))
console.log(progressaoGeometrica(5, 1, 2))