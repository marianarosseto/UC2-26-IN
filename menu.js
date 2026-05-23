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

    }

}

