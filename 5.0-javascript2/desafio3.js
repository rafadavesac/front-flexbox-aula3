const numeros = [1, 2, 2, 3, 3, 12, 4, 5, 5];

let numerosUnicos = [];

for (let i = 0; i < numeros.length; i++){
    if(!numerosUnicos.includes(numeros[i])){ //ou === false
        numerosUnicos.push(numeros[i]);
    }
}
console.log(`Quantia de números únicos: ${numerosUnicos.length}`)
console.log(`Números únicos: ${numerosUnicos.sort((a, b) => a - b)}`)