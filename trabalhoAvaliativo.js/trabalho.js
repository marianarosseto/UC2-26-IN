function criarUsuario(nome, idade, cidade, hobbies) {
  return [nome, idade, cidade, hobbies]

}
let user1 = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "cantar"])

console.log(user1)
console.log(formatarHobbies(user1[3]))


function formatarHobbies(hobbies) {
  let hobbiesFormatados = hobbies.join(", ");
  return hobbies.join(", ");
}





function gerarDescricao(nome, idade, cidade, hobbies) {
  return ` meu nome é ${nome} tenho ${idade} anos, moro em ${cidade}, e gosta de: ${hobbies}`
}

let nome3 = gerarDescricao("Mariana", 16, " sao leo", ["pintar unha", "ver tv"])
console.log(nome3)
let nome4 = gerarDescricao("bia", 22, " sapucaia", ["dormir e estudar"])
console.log(nome4)



////////////////////////////////////////////////////////////////////////



function adicionarUsuario(usuarios, usuario) {
  usuarios.push(usuario);
  return usuarios;
}

const usuarios = [];

console.log(adicionarUsuario(usuarios, user1));



function gerarRelatorio(usuarios) {
  return `Total de usuários: ${usuarios.length}`;
}
 