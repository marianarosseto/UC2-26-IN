const ask= require('readline-sync')
let raca =["a", "b", "c","d","e",]
let pergunte= ask.question("insera um numero de 0 a 4: ")
console.log(raca[pergunte])


raca.push(`pastor alemao`, `caramelo`)
console.log(raca)


let peixes =["nemo", "palhaço","dori"]
peixes.pop()
console.log(peixes)

peixes.splice(1,2)
console.log(peixes)