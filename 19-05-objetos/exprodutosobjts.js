const ask = require('readline-sync')

function cadastrarProduto() {
    console.clear()
    let novoProduto = {
        id: produtos.length + 1,
        nome: ask.question("digite o nome: "),
        precoVenda: Number(ask.question(" qual o preco de venda: ")),
        precoFabricacao: Number(ask.question(" qual o preco de fabricao: ")),
        stok: Number(ask.question(" qual a quatidade em stok "))
    }
    console.clear()
    produtos.push(novoProduto)
    console.log(`produto${novoProduto.nome} inserido com sucesso`)
    ask.question(" pressione ENTER para continjar...")

}


function buscarprodutosporid(id) {
    for (let produto of produtos) {
        if (produto.id === id) {
            return produto
        }
    }
    return null
}


function buscarprodutospornome(nome) {
    for (let produto of produtos) {
        if (produto.nome == nome)
            return produto
    }
    return null
}


function mostrarProduto() {
    for (let produto of produtos) {
        console.log(`
        --------------------
        ID: ${produto.id}
        nome: ${produto.nome}
        preco de venda: R$${produto.precoVenda}
        preco de fabricaçao: R$${produto.precoFabricacao}
        Stock: ${produto.stok}
        --------------------`)

    }
}

let produtos = []





//menu

while (true) {
    console.clear()
    console.log(`
1 - Register new product
2 - Search product by name
3 - Search product by id
4 - Show all products
0 - Exit`)

    let option = ask.question("escolha um aopcao: ")

    switch (option) {
        case "1":
            cadastrarProduto()
            break

        case "2":
            let nome = (ask.question('Insert nome: '))
            console.log(buscarprodutospornome(nome))
            ask.question('Press ENTER to continue...')
            break
        case "3":
            let id = Number(ask.question('Insert ID: '))
            console.log(buscarprodutosporid(id))
            ask.question('Press ENTER to continue...')
            break
        case "4":

            mostrarProduto()
            ask.question('Press ENTER to continue...')
            break
            break

        case "0":
            process.exit()
            break

        default:
            console.clear()
            console.log('Invalid option')
            ask.question('Press ENTER to continue...')
break
    