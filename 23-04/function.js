/**function ImprimirFrase(){
    console.log("Ola mundo!")
}
ImprimirFrase( )


function calculaArea(altura, base){
    const area =altura*base
    console.log(area)
}
calculaArea(2,3)
calculaArea(4, 5)

function ImprimirMensagem(nome){
console.log(`ola, ${nome}`)
}
ImprimirMensagem("mariana")
ImprimirMensagem("Ana")
ImprimirMensagem("Julia")

function testeVariavel(){
    let numero = 5
    console.log (numero)
}
testeVariavel()

let variavelGlobal = "esta eh a variaval global"

    function funcao1(){
        let variavelGlobal=  "esta eh a variaval global"
        console.log(variavelGlobal)
    }

    funcao1()

    function calculaArea(altura, largura){
        const area = altura* largura
        return area
    }
    console.log(calculaArea(5,6))
    let areaCalculada = calculaArea(7,8)
    console.log(calculaArea(7,9)> 100))



    function somar(numero1, numero2) {
        return numero1 + numero2
      }
      
      let somaFinal = somar(5, 3)
      
      console.log(somaFinal)*/

      let variavelArray =[1, 2, 3, 4, 5, 6, 9]

      function exercicio4 (array){
     
        let novoArray=[]
       novoArray.push((array[array.length - 1])/2)
       novoArray.push((array[0])/2)
        return novoArray
      }
      console.log(exercicio4(variavelArray))