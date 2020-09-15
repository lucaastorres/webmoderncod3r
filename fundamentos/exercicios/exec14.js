/*14) ​Crie uma estrutura condicional switch que receba uma string com o nome 
de uma fruta e que possua três casos: Caso maçã, retorne no console: 
“Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. 
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções. 
Crie também um default, que retornará uma mensagem de erro no console.*/

function qualFruta(fruta) {
    switch(fruta.toLowerCase()) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case "kiwi":
            console.log('Estamos comescassez de kiwis')
            break
        case "melancia":
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Fruta inválida')
    }
}

qualFruta('maçã')
qualFruta('Kiwi')
qualFruta('Melancia')
qualFruta('Mamão')