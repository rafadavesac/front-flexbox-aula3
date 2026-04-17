const produtos = [
    {
        nome: "Notebook",
        preco:4500,
        quantidade: 1,
    },
    {
        nome: "Tablet",
        preco: 2000,
        quantidade: 2,
    },
    {
        nome: "Mouse",
        preco: 200,
        quantidade: 3,
    },
]

let totalCarrinho = 0 //acumulador

for (let i = 0/*contador*/; i < produtos.length; i++){
    const totalPorProduto = produtos[i].preco * produtos[i].quantidade
    console.log(`Total do produto ${produtos[i].nome}: R$${totalPorProduto}`)

    totalCarrinho += totalPorProduto
}

console.log(`\nTotal carrinho: R$${totalCarrinho}`)