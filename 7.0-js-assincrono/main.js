document.addEventListener("DOMContentLoaded", function(){

    function atualizarHorario(){
    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    const clockTime = document.querySelector(".clock") //ponteiro

    if (segundos < 10){
        clockTime.textContent = `${horas}:${minutos}:0${segundos}`;
    } else {
        clockTime.textContent = `${horas}:${minutos}:${segundos}`;
    }

    }
    
    setInterval(atualizarHorario, 1000)
})

