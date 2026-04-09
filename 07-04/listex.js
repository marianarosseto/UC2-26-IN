// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome


const  ask = require("readline-sync")
let name = ask.question("Escreva seu nome completo:")
console.log ("olá", name)
console.log( name.length)


// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

let frase = ask.question("escreva uma frase:")
console.log( frase.toUpperCase() )
console.log (frase.toLowerCase())


// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços


let sentece =  "  Socorram-me! Subi no onibus em Marrocos!      "
console.log (sentece)
console.log ( sentece.trim())
let newsentece = (sentece.trim()) 
console.log(sentece.length)
console.log (newsentece.length)


// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.



let frutas = "maçã banana uva laranja morango"

let frase1 = ask.question("Diga uma fruta:")

let contem = frutas.includes(frase1)

console.log(contem)


// 5
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.



let frase3 =ask.question (" Digite uma frase: ")
let word = ask.question (" escolha uma palavra que deseja substituir: ")
let word1= ask.question (" Qual palavra para a substituicao: ")
console.log( frase3.replaceAll(word, word1))





// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string


let number = 3
let number2 = 3

let result = number + number2
console.log (result)
let explication = `o número ${number} mais o ${number2} é igual a ${result}`
console.log (explication)



// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof




let usuario= ask.question (" digite algum valor: ")
console.log (usuario)
console.log(typeof usuario)



// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase


 
 let say= ask.question ("escolha uma palavra: ")
 let say1= ask.question(" diga outra palavra: ")
 let newsent= (`${say} ${say1}`)
 console.log(newsent)
 console.log (newsent.length)



 // 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.


let dig = ask.question(" digite uma frase: ")
let letra= ask.question (" digite uma letra: ")
let maiúsculas = (dig.toUpperCase())
console.log(maiúsculas)
let ocorrencia = dig.replaceAll(letra, "*")
console.log (ocorrencia)