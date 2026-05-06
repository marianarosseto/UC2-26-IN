const ask= require ("readline-sync")

// =========================================
// LISTA DE EXERCÍCIOS - JAVASCRIPT
// =========================================



// =========================================
// EXERCÍCIO 1
// Crie variáveis para armazenar:
// - seu nome
// - sua idade
// - se você gosta de programar
//
// Imprima tudo em uma única frase
// =========================================

let nome= "mariana"
let idade = 16
let like =true

console.log(`meu nome é ${nome}, tenho ${idade} anos, e é ${like} que eu gosto de programar`)



// =========================================
// EXERCÍCIO 2
// Crie duas variáveis com números.
//
// Mostre no console:
// - soma
// - multiplicação
// - divisão
// - resto da divisão
// =========================================

let n1 = 1
let n2 = 2
console.log(n1 + n2)
console.log( n1 * n2)
console.log (n1 / n2)
console.log (n1 % n2)


// =========================================
// EXERCÍCIO 3
// Crie duas variáveis com números.
//
// Mostre no console o resultado das comparações:
// - são iguais
// - são diferentes
// - o primeiro é maior
// - o segundo é menor ou igual
// =========================================

 let numer1 = 3
 let number2  = 4

 console.log( n1===n2)
 console.log( n1!==n2)
 console.log( n1>n2)
 console.log( n1<=n2)
 
 

 
// =========================================
// EXERCÍCIO 4
// Crie três variáveis booleanas:
// a = true
// b = false
// c = true
//
// Mostre no console o resultado das seguintes operações:
// - a e b
// - b e c
// - a e c
// - a ou b
// - b ou c
// - negação de a
// - negação de b
// =========================================
 
 
 let a = true
 let b = false
 let c = true

 console.log(a && b)  
console.log(b && c)  
console.log(a && c) 

console.log(  a || b)
console.log(  b || c   )

console.log(!a)
console.log(!b)


// =========================================
// EXERCÍCIO 5
// Peça ao usuário um número.
//
// Crie outra variável com esse mesmo valor,
// mas convertido para texto.
//
// Mostre:
// - valor e tipo da primeira
// - valor e tipo da segunda
// =========================================


let numero = Number(ask.question("Digite um número: "))

let texto = numero.toString()

console.log(numero, typeof numero)
console.log(texto, typeof texto)


// =========================================
// EXERCÍCIO 6
// Crie uma variável com o seguinte valor:
// "   Aprender Javascript é legal   "
//
// Faça as seguintes operações:
// - remover os espaços no início e no fim
// - transformar toda a frase em maiúsculo
//
// Mostre:
// - a frase original
// - a frase sem espaços
// - a frase em maiúsculo
// - o tamanho da frase original
// - o tamanho da frase sem espaços
// =========================================


let codigo =  "   Aprender Javascript é legal   "
console.log(codigo.trim)
