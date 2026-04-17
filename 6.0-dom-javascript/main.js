// sempre planejar antes de codar -> entrevistas consideram
// resolver mentalmente o problema primeiro

//ao carregar a página, verificar se o usuário salvou algum tema
//evento de load da página
document.addEventListener("DOMContentLoaded", function(){
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme){ //carrega o ultimo tema salvado
        document.body.classList.add(savedTheme)
    }
})


//ponteiro para o button desejado
const btnChangeTheme = document.getElementById("changeTheme") 

btnChangeTheme.onclick = function(){
    const body = document.body

    if (body.classList.contains("dark")){
        body.classList.remove("dark")
        localStorage.setItem("theme", "light") //salvando o tema que o usuário selecionou por ultimo
    } else {
        body.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
    
}
