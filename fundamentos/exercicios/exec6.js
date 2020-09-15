/*06)​ Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira 
sob o regime de juros simples e a segunda retornará o valor da 
aplicação sob o regime de juros compostos.*/

function jurosSimples(capital, taxa, tempo) {
    capital += (capital * taxa * tempo)
    console.log(capital)
}

function jurosCompostos(capital, taxa, tempo) {
    console.log(capital * ((1 + taxa) ** tempo))
}

jurosSimples(1000, 0.1, 3)
jurosCompostos(1000, 0.1, 3)

