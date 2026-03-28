const pessoas = [
 { nome: "João", idade: 25 },
 { nome: "Maria", idade: 16 },
 { nome: "Pedro", idade: 30 }
];


for(let i = 0; i < pessoas.length; i++){
    if (pessoas[i].idade > 18){
        console.log(`${pessoas[i].nome} tem mais de 18 anos`);
    };
};

