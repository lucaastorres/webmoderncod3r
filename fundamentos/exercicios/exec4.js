/*04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultadoe o resto da divisão destes dois valores.*/

function divisao(a, b) {
    let resultado = a / b
    let resto = a % b
    return console.log(`O resultado da divisão é ${resultado} e o resto é ${resto}`)
}

divisao(10, 5)
divisao(20, 2)
divisao(21, 4)