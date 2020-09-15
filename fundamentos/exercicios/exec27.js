/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças 
e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function crescimento(altura1, altura2, taxa1, taxa2) {
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'A criança 1 ultrapassará a criança 2 em 1 ano'
        } else if(taxa2 > taxa1) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano'
        } else {
            return 'As crianças possuem mesma altura e mesma taxa de crescimento'
        }
    } else if(altura1 > altura2) {
        if(taxa1 > taxa2) {
            return 'A criança menor não ultrapassará a maior'
        } else {
            return calcularCrescimento(altura2, altura1, taxa2, taxa1)
        }
    } else {
        if(taxa2 > taxa1) {
            return 'A criança menor não ultrapassará a maior'
        } else {
            return calcularCrescimento(altura1, altura2, taxa1, taxa2)
        }
    }

}

function calcularCrescimento(alturaMenor, alturaMaior, taxaMenor, taxaMaior) {
    let tempo = 0
    while(alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        tempo++
    }
    return tempo
}

console.log(crescimento(120, 100, 2, 5 ))