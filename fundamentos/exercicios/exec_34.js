/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará 
True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras*/

function mesmaString(string1, string2) {
    string1.toLowerCase()
    string2.toLowerCase()
    return string1 === string2
}

console.log(mesmaString('lucas', 'Lucas'))