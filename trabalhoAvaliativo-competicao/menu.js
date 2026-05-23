const ask = require("readline-sync")


while (true) {
    console.clear
    console.log(`
    1- mensagem  de bom dia
    2- mensagem de boa noite
    3- mensagem de boa tarde
    0- exit
    `)
    let optin = Number(ask.question(` escolha uma opcao: `))

    switch (optin) {
        case 1:
            console.clear
            console.log(` bom dia flor do dia`)
            ask.question(`press enter to continue`)
            break
        case 2:
            console.log(`boa nooite`)
            ask.question(`press enter to contunue`)
            break
        case 3:
            console.clear
            console.log(`boa tarde`)
            ask.question(`press enter to continue`)
            break
            case 0:
                Process.exit()
                break
                default:
                    console.clear
                    console.log(`presss enter to coninue`)
                    break

    }

}