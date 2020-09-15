/*18)​ Faça um programa que leia um número entre 0 e 10, 
e escreva este número por extenso. Use o comando switch. 
Crie um case default que escreva ‘Número fora do intervalo.*/

function porExtenso(numero) {
    switch(numero){
        case 0: 
            console.log('Zero')
            break
        case 1: 
            console.log('Um')
            break
        case 2: 
            console.log('Dois')
            break
        case 3: 
            console.log('Tres')
            break
        case 4: 
            console.log('Quatro')
            break
        case 5: 
            console.log('Cinco')
            break
        case 6: 
            console.log('Seis')
            break
        case 7: 
            console.log('Sete')
            break
        case 8: 
            console.log('Oito')
            break
        case 9: 
            console.log('Nove')
            break
        case 10: 
            console.log('Dez')
            break
        default:
            console.log('Intervalo Inválido')
    }
}

porExtenso(0)
porExtenso(1)
porExtenso(2)
porExtenso(3)
porExtenso(4)
porExtenso(5)
porExtenso(6)
porExtenso(7)
porExtenso(8)
porExtenso(9)
porExtenso(10)
porExtenso(20)
