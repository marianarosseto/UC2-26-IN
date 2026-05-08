 const ask = require("readline-sync")


let opcao = Number(ask.question(" qual nuemro vc quer somar:\n -1: soma \n -2: subtracao \n -3: multiplicacao\n -4: divisao\n -5: resto \n escreva aqui: "))

switch (opcao) {
    case 1:
        const num = Number(ask.question("Digite o primeiro numero: "))
        const num1 = Number(ask.question("Digite o segundo numero: "))
        console.log(soma(num1, num))

        break

    case 2:
        const num2 = Number(ask.question("digite o primeiro numero: "))
        const num3 = Number(ask.question("Digite o segundo numero: "))
        console.log(subtracao(num2, num3))

        break

    case 3:
        const num4 =Number(ask.question('Digite o primeiro numero: '))
        const num5=Number(ask.question("Digite o segundo numero: "))
        console.log(multiplicacao(num4,num5))

        break

        case 4:
            const num6=Number(ask.question("Digite o primeiro numero: "))
            const num7= Number(ask.question("Digite o segundo numero:"))
            console.log(divisao(num6,num7))

            break

            case 5:
                const num8 = Number(ask.question("Digite o primeiro numero:"))
                const  num9 =Number(ask.question("Digite o segundo numero:"))
                console.log(resto(num8,num9))

}


function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num2, num3) {
    return num2 - num3
}

function multiplicacao(num4, num5) {
    return num4 * num5
}
function divisao(num6,num7){
    return num6/ num7
}

function resto(num8,num9){
    return num8%num9
}