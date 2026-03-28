const numeros = [-10, -3, -8, -20, -7];
let maiorNum = numeros[0]; //isso garante com que isso funcione com números negativos

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maiorNum){
        maiorNum = numeros[i];
    }
}
console.log(maiorNum)