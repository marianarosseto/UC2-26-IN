const ask = require("readline-sync")

function escola(nome, nota1, nota2, nota3) {
    return [nome, nota1, nota2, nota3]
}

let cadastro = (ask.question("1- cadastrar"))
let ooo = Number(ask.question(" 2- saber media "))
let nota2 = Number(ask.question("  3-digite "))
let nota3 = Number(ask.question(" qual sua terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3

console.log(` Sua media é : ${media}`)

if (media >= 7) {
    console.log(` Estudante ${nome} esta: aprovado`)
}
else if (media >= 5) {
    console.log(` Estudante${nome} esta em recuperacao`)
}
else   {
    console.log(` Estudante ${nome} esta: reprovado`)
}
/////////////




let novo = ask.question(" quer cadastrar outro? ")
console.log(novo)
switch (novo) {
    case novo = "sim":
        console.log(name, grade1, grade2, grade3)
        break
    case novo = "não":
        console.log("ok")
        break
    default:
        console.log(" Opçao invalida")
        break


        let name = (ask.question(" qual seu nome: "))
        let grade1 = Number(ask.question(" qual sua primeira nota: "))
        let grade2 = Number(ask.question(" qual sua segunda nota: "))
        let grade3 = Number(ask.question(" qual sua terceira nota: "))

        let division = (grade1 + grade2 + grade3) / 3


let final = (`nome: ${nome}
notas: ${nota1}, ${nota2}, ${nota3}
media: ${media}` )
 
console.log(final)
}




