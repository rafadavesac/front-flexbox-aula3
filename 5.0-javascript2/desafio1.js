const numeros = [1,20, 3, 4, 5];
let soma = 0; //variavel acumuladora

//i = contador do for / indices
for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
    console.log(`Índice: ${i} | Valor do índice: ${numeros[i]} | Soma: ${soma}`)
}

console.log(`Soma dos números da array: ${soma}`)

//como pegar o último item de uma array:
//array[array.length - 1]