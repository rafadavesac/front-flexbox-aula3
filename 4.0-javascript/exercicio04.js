let nomeProduto = ["IPhone", "xBox"]
let valor = [6000, 4500]
let quantidade = [3, 2]

let frase = `${nomeProduto}, valor unitário: ${valor}, total da compra: ${quantidade * valor}`

function gerarMensagem(nomeProduto, valor, quantidade){
    console.log(`${nomeProduto}, valor unitário: ${valor}, total da compra: ${quantidade * valor}`)
}

gerarMensagem("IPhone", 6000, 3)
gerarMensagem("xBox", 4500, 2)

