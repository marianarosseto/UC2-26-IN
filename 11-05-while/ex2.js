//const numeros = [11, 15, 18, 14, 12, 13]
///console.log(Math.max(...numeros))


const numeros = [11, 15, 18, 14, 12, 13]

let maior = numeros[0] // = 11

for(
    let i = 0; 
    i < numeros.length; // = 6
    i++){ // adiciona +1

    if(numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log (maior)





/*const numeros = [11, 15, 18, 14, 12, 13]

let maior = numeros[0]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log(maior)*/