/*08)​Pedro joga N jogos de basquete por temporada. 
Para saber como está ele está progredindo, 
ele mantém registro de todos os as pontuações feitas por jogo. 
Após cada jogo ele anota no novo valor e confere se o mesmo é 
maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e 
irá retornar um vetor com o número de vezes que ele bateu seu recorde de 
maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).*/

function basquete(lista) {
    let resultados = lista.split(', ')
    let recordes = 0
    let pior = 1
    let maior = resultados[0]
    let menor = resultados[0]
    for(let i = 1; i < resultados.length; i++) {
        if(resultados[i] > maior) {
            maior = resultados[i]
            recordes++
        } else if(resultados[i] < menor) {
            menor = resultados[i]
            pior = i + 1
        }
    }
    console.log([recordes, pior])
}

basquete("30, 40, 20, 4, 51, 25, 42, 38, 56, 0")