const ask = require('readline-sync')

function createAconunt() {
    let username = ask.question("insert username: ")
    let password = ask.question(`insert password: `, {
        hideEchoBack: true,
        mask: '*'
    })

    accounts.push({
        username: username,
        password: password
    })
}

function login() {
    let username = ask.question("insert username: ")

    let password = ask.question(`insert password: `, {
        hideEchoBack: true,
        mask: '*'
    })

    for (let user of accounts) {

        if (user.username === username &&
            user.password === password) {


            token = {
                username: username,
                password: password
            }

            return true
        }
    }

    return false
}

const accounts = []


let token = null


while (true) {

    console.clear()

    if (token) {

        console.log(`
   1- show welcoming message
   2- logout
   0- exit`)

        let option = Number(
            ask.question("chosse option: ")
        )

        switch (option) {

            case 1:


                console.log(`Welcome ${token.username}`)

                ask.question(
                    "press enter to continue..."
                )

                break

            case 2:

                token = null

                break

            case 0:

                process.exit()

                break
        }

    } else {

        console.log(` 
        1- create acont
        2- login
        0- exit`)

        let option = Number(
            ask.question(`chosse option: `)
        )

        switch (option) {

            case 1:

                createAconunt()

                break

            case 2:


                if (login()) {

                    console.log(`login successful ${token.username}`)

                } else {

                    console.log("invalid username or password")
                }

                ask.question(
                    "press enter to continue..."
                )

                break

            case 0:

                process.exit()

                break

            default:

                console.log(
                    "invalid option. try again"
                )

                ask.question(
                    "press enter to continue..."
                )

                break
        }
    }
}