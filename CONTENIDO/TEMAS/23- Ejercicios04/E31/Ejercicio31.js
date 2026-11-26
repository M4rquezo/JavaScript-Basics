let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () =>{

    //Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activa"));

    //Enceder una luz
    luces[indice].classList.add("activa");

    //Cambiar el indice para la siguiente luz
    indice++;

    if(indice > 2){
        indice = 0;
    }


});