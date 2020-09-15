/*02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles:  
Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
classificação quantoao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições 
matemáticas de existência de umtriângulo).*/

function tipoTriangulo(lado1, lado2, lado3) {
    if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        return `Temos um triângulo Escaleno`
    } else if(lado1 == lado2 && lado1 == lado3){
        return `Temos um Triângulo Equilátero`
    } else {
        return `Temos um triângulo Isósceles`
    }
}

console.log(tipoTriangulo(3,3,4))