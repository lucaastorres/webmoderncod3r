/* 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) 
que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. 
Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/ 

function pagamentoDeAnuidade(mesDePagamento, valorDaAnuidade) {
    let jurosMensal = 1.05
     switch(mesDePagamento) {
        case 1:
            return valorDaAnuidade
            break
        case 2:
            return valorDaAnuidade * jurosMensal
            break
        case 3:
            return valorDaAnuidade * (jurosMensal ** 2)
            break
        case 4:
            return valorDaAnuidade * (jurosMensal ** 3)
            break
        case 5:
            return valorDaAnuidade * (jurosMensal ** 4)
            break
        case 6:
            return valorDaAnuidade * (jurosMensal ** 5)
            break
        case 7:
            return valorDaAnuidade * (jurosMensal ** 6)
            break
        case 8:
            return valorDaAnuidade * (jurosMensal ** 7)
            break
        case 9:
            return valorDaAnuidade * (jurosMensal ** 8)
            break
        case 10:
            return valorDaAnuidade * (jurosMensal ** 9)
            break
        case 11:
            return valorDaAnuidade * (jurosMensal ** 10)
            break
        case 12:
            return valorDaAnuidade * (jurosMensal ** 11)
            break
        default:
            return `Mês Inválido`
     }
}

console.log(pagamentoDeAnuidade(1, 100))
console.log(pagamentoDeAnuidade(3, 100))
console.log(pagamentoDeAnuidade(4, 100))
console.log(pagamentoDeAnuidade(8, 100))
console.log(pagamentoDeAnuidade(10, 100))
console.log(pagamentoDeAnuidade(15, 100))
