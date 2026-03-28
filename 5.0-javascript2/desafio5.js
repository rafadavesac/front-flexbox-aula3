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

let totalPorProduto = 0
let totalCarrinho = 0

for (let i = 0; i < produtos.length; i++){
    totalPorProduto = produtos[i].preco * produtos[i].quantidade
    console.log(`Total do produto ${produtos[i].nome}: R$${totalPorProduto}`)

    totalCarrinho += produtos[i].preco * produtos[i].quantidade
}

console.log(`Total carrinho: ${totalCarrinho}`)