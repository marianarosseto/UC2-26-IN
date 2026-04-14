let mensagem1 = "Caminhão cai nos trilhos e afeta passageiros"
let mensagem2 = mensagem1.toLocaleLowerCase()
console.log ( `mensagem original ${mensagem1}`)
console.log(`mensagem alterada${mensagem2}`)

const ask= require("readline-sync")

const opiniao =ask.question("Digite sua opiniao: ")
const opiniaoMaiusculo = opiniao.toLocaleUpperCase()
console.log(`frase original: ${opiniao}\nopiniao maisucula: ${opiniaoMaiusculo}`)


let mensagem3 ="    trem parado pr causo de um caminhao nos trilhos      "
let semEspaco =mensagem3.trim()
console.log(`mensagem original: ${mensagem3}\n mensagem editada: ${semEspaco} `)
console.log (` numero de letras na frse original: ${mensagem3.length}`)
console.log (` numero de letras na frse aditada: ${semEspaco.length}`)



let frase= ask.question(" diga uma frase sobre o ocorrido: ")
let palavra = ask.question(" digite um apalvra a ser verificada: ")
console.log(` frase: ${frase}\n
palvra: ${palavra}\n
${palavra } aparece ${frase}:  ${ frase.includes(palavra)}
`)


let diga = ask.question("descreva o impacto do acidente: ")
const word =ask.question("doigite a palavra a ser substituida: ")
const subistitute = ask.question("dogite a palavra substitura: ")
const descricap = diga.replaceAll(word, subistitute)
console.log( diga)
console.log (descricap)