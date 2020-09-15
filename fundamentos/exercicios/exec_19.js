/*19)​ O cardápio de uma lanchonete é o seguinte: 

Código  Descrição do Produto    Preço
100     Cachorro Quente         R$3,00
200     Hambúrguer Simples      R$4,00
300     Cheeseburguer           R$5,50
400     Bauru                   R$7,50
500     Refrigerante            R$3,50
600     Suco                    R$2,80

Implemente uma  função que receba como parâmetros o código do item pedido, 
a quantidade e calcule o valora ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. 
Use o comando switch. Crie um caso default para produto não existente.*/

function pedidoLanchonete(codigo, quantidade) {
    switch(codigo){
        case 100:
            console.log(`${3 * quantidade}`)
            break
        case 200:
            console.log(`${4 * quantidade}`)
            break
        case 300:
            console.log(`${5.5 * quantidade}`)
            break
        case 400:
            console.log(`${7.5 * quantidade}`)
            break
        case 500:
            console.log(`${3.5 * quantidade}`)
            break
        case 600:
            console.log(`${2.8 * quantidade}`)
            break
        default:
            console.log(`Produto não existente`)
    }
}

pedidoLanchonete(100, 2)
pedidoLanchonete(200, 3)
pedidoLanchonete(300, 4)
pedidoLanchonete(400, 2)
pedidoLanchonete(500, 1)
pedidoLanchonete(600, 2)
pedidoLanchonete(800)
