// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
 const ask = require('readline-sync')
let filmes = ["moana","fronzen","enrolados","harry potter","jogos vorases","mazze runner"]
let  usuário= Number(ask.question("digite um numenro de 1 a 6: "));
 console.log (filmes[usuário -1] )


 // =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

let bebida =["coca","guarana", "pepsi","agua","suco","energetico","vodka"," redbull"]
console.log(`o numero de elementos é: ${bebida.length}`)


// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================

let personagens = ["elena","katherine","stefan","damon","klaus"]
let perguntaPersonagem = ask.question(" Digite o nome de um personagem de tvd: ")
let existe = personagens.includes(perguntaPersonagem.toLowerCase())
console.log(existe)



// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================

let vazio = []
let say =ask.question("diga tres jogos: ")
let novoarray = say
console.log(novoarray)

// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================

let serie =[ "the vampire diares"," pretty litle liers","the originals","gossip girl","cobra kai"]
console.log (serie)
serie.pop()
console.log(serie)


// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================


let comidas =[ "arroz","feijão","massa","peixe", "bolo","pao"]
console.log(comidas)
comidas.splice(3,2)
console.log (comidas)


// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================

let banda =["now united","bts","black pink"]
console.log(banda)
console.log(banda.join( " - "))

// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================

let precos =[ "5.66","7.77","4.99"]
let primeiro =precos [0]
console.log(primeiro)
let ultimo = precos[2]
console.log(ultimo)



// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================

let jogo =["mario","luigi","sonic"]
console.log(jogo)
console.log(jogo.sort())


// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================
 

let nomefilmes =["crepusculo","crepusculo","crepusculo"]
console.log (nomefilmes.length)


// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =======================================


let movie =[" crepusculo","harry potter","enrolados","moana"]
let series =[ "cobra kai","riverdale","tvd","to"]
let together = filmes.concat(series)
console.log(together)


// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================

let episódios = [ "3","4","5","6"]
console.log ( episódios.reverse())


// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================
