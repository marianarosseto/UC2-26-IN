const filme = {
    direcao: "marvel",
    nome: "homem aranha",
    lancamento: "2020",
    elenco: ['zenday', 'tom holland', 'elena', 'stefan'],
    javi: true,
   

    
    discription: function () {


        console.log(`
        nome: ${this.nome}
        lancamento: ${this.lancamento}
       cast: 
        `)

        for (let actor of this.elenco) {
            console.log(`- ${actor}`)

            if (this.javi) {
                console.log(` assisti`)
            } else {
                console.log(`nao assisti`)
            }
        }

    }
}
console.log(`a direca do filme é : ${filme.direcao}`)
console.log(`o nome do filme é : ${filme.nome}`)
console.log(`o ano de lencamento do filme é : ${filme.lancamento}`)
console.log(`o elenco  do filme é : ${filme.elenco}`)
console.log(` ja vi o filme : ${filme.javi}`)



filme.discription()


 filme.characters =['mary Jane',' peter parker', 'nina','poul']
for (let i =0; i < filme.elenco.length; i++){
    console.log(`${filme.elenco[i]} - ${filme.characters[i]}`)
}
console.log(`${filme}`)