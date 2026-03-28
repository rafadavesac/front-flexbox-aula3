const endereco = {
    uf: "SP",  // uf = propriedade | "SP" = valor
    bairro: "Centro",
    cidade: "São Paulo",
    rua: "Rua dos Bobos",
    numero: 0,
};

console.log(endereco);

const cliente = {
    nome: "João",
    idade: 30,
    endereco: endereco,
    compras: [
        {
            produto:"Notebook",
            preco: 3000,
            quantidade: 1,
        },
    ],
};

console.log(cliente)