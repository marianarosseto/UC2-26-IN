const ask = require('readline-sync')


function insertProducts() {
    console.clear()
    let id = products.lenght + 1
    let name = ask.question(`Insert product name: `)
    let sellPrice = Number(ask.question(` insert selling price: `))
    let manufacturingPrice = Number(ask.question(`insert manufacturing: `))
    let stock = Number(ask.question(`insert quantity in stock: `))

    console.clear()

    products.push([id, name, sellPrice, manufacturingPrice, stock])

    console.log(`product ${name} inserted successfully`)

    ask.question(`Press enter to continuing...`)
}


function searchById() {
    console.clear()
    for (let product of products) {
        if (product[0] === id) {
            return product
        } {
            return null
        }
    }

}
function searchByname(name) {
    console.clear()
    for (let product of products) {
        if (product[1] === name) {
            return product
        }

        {
            return null
        }

    }

    function showProducts() {
        console.clear()
        for (let product of products)
            console.log(`
        -------------------------
        id: ${product[0]}
        name: ${product[1]}
        selling prices: ${product[2]}
        manufacturing price: ${product[3]}
        stock: ${product[4]}
        `)


    }

}



function searchByname(name) {
    for (let product of products) {
        if (product[1] === name) {
            return product
        }

        {
            return null
        }
    }
}



let products = []
insertProducts()

while (true) {
    console.clear()
    console.log(`
    1- register new product
    2- search prodict bz id
    2- search product by name
    4- show all products
    5- exit
    `)
    let option = Number(ask.question(`choose optin: `))

    switch (option) {
        case 1:
            insertProducts()
            break
        case 2:
            console.clear
            let id = Number(ask.question(`insert id: `))
            console.log(searchById(id))
            break
        case 3:
            console.clear
            let name = ask.question(`insert name: `)
            console.log(searchByname(name))
            break
        case 4:
            console.clear()
            showProducts()
            break
        case 0:
            console.clear()
            process.exit()
            break
        default:
            break
            console.clear()
            console.log(`invalid option`)
            ask.question(` press enter to continue...`)

    }
}