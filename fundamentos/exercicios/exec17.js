/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: 
Plano   Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function aumentoDeSalario(plano, salario) {
    switch(plano.toUpperCase()){
        case 'A':
            console.log(`Novo salário: R$${salario * 1.1} com 10% de Aumento`)
            break
        case 'B':
            console.log(`Novo salário: R$${salario * 1.15} com 15% de Aumento`)
            break
        case 'C':
            console.log(`Novo salário: R$${salario * 1.2} com 20% de Aumento`)
            break
        default:
            console.log('Plano Inválido')
    }
}

aumentoDeSalario('a', 4000)
aumentoDeSalario('B', 2500)
aumentoDeSalario('C', 1000)
aumentoDeSalario('d', 5000)

