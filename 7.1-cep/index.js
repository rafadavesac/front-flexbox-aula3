function getCep(cep){
    const txtCep = document.getElementById("inputCep")

    console.log("Consultando cep...")

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => txtCep.value = data.logradouro)
        .catch(error => console.error("Erro ao buscar CEP: ", error) );
}


/*
async function getCep(cep) {

    const cep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    console.log(response)
}

getCep(99010100)
*/

// 3 states of a promise (we cannot change mannually): pending(nem cumprido nem rejeitado); fullfilled; rejected