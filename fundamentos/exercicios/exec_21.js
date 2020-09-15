/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130*/

function planoDeSaude(idade) {
    let taxaFixa = 100
    if(idade >= 0 && idade < 10) {
        return taxaFixa + 80
    } else if(idade >= 10 && idade <= 30) {
        return taxaFixa + 50
    } else if(idade > 30 && idade <= 60) {
        return taxaFixa + 95
    } else if(idade > 60) {
        return taxaFixa + 130
    } else {
        return `Idade Inválida`
    }
}

console.log(planoDeSaude(4))
console.log(planoDeSaude(25))
console.log(planoDeSaude(50))
console.log(planoDeSaude(65))
console.log(planoDeSaude('x'))
