/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação 
e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  
Crie um caso default para operações inválidas.*/

function calculadora(a ,op , b) {
    switch(op){
        case '+':
            console.log(`A soma é: ${a + b}`)
            break
        case '-':
            console.log(`A subtração é: ${a - b}`)
            break
        case '*':
            console.log(`A multiplicação é: ${a * b}`)
            break
        case '/':
            console.log(`A divisão é: ${a / b}`)
            break
        default:
            console.log(`Operação Inválida!`)
    }
}

calculadora(2, '+', 3)
calculadora(3, '-', 1)
calculadora(2, '*', 4)
calculadora(10, '/', 2)
calculadora(20, '%', 100)