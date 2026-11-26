//Evento 

/* Las interacciones que el usuario puede usar con las paginas */
/* clic, minimizar, abrir teclado, mover cursor, que teclas pulso, */

// se tiene un "escuchador" 


/******* EVENTOS DE MOUSE ********/

// EVENTO  1 Click 

let boton = document.querySelector("#Receptorc");

console.log(boton);

// poner escuchar al boton 
boton.addEventListener("click" , (event) => {
    alert("Buen click muchacho");
    console.log (event.clientX)
});


/* selecciono un elemento 
lo pongo a escuchar el evento
se ejecuta la funcion de call back */ 

// al crear un evento tambien existira una captura de esos eventos


// EVENTO 2 Double Click

let botonDoble = document.querySelector("#botonDoble");
botonDoble.addEventListener("dblclick" , (event) => {
    alert("Doble click muchacho ! ");
    console.log (event.clientX)
});

// EVENTO Mouse over

// pasar el raton por encima de un elementoo 

let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", () => {

    console.log("has pasado por encima de el area de texto ");
});

// EVENTO Mouseout

cajaTexto.addEventListener("mouseout", () => {

    console.warn ("saliste de cajad de texto")
}) 

// EVENTO mousemove 
//captura donde yo me muevo dentro de un elemento 

cajaTexto.addEventListener ("mousemove", () => {
    console.error("te mueves donetro de la text area ")
});

/*******  KEYBOARD EVENTS ********/

let campoTexto =document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", (event) => {
    console.log("has presionado la tecla: "+event.key);
});  // sacar que tecla se pulsa

campoTexto.addEventListener("keyup", (event) => {
    console.warn("Has soltado la tecla: "+event.key);
});  // soltado  la tecla 

/*
campoTexto.addEventListener("keypress", (event) => {
    console.log("Mantienes pulsada  la tecla: "+event.key);
});  // sacar que tecla se pulso 

*/

/************* EVENTOS DE FORMULARIO - SUBMIT ****************/

let superFormulario = document.querySelector("#superFormulario");

superFormulario.addEventListener("submit", (event) => {
    
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    let nombre = document.querySelector("#nombre").value; 
    let correo = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value;
  
    alert(nombre);
    alert(correo);
    alert(genero);


});


/***** EVENTOS DE INPUT - CHANGE   *********/

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", () => { // input es un evento que se ejecuta cada vez que el usuario digite algo en el input.
        console.log("El usuario ha escrito" +inputNombre.value);
}); // cada vez que el usuario escriba algo en el input se ejecutara la funcion de call back 


let selectGenero = document.querySelector("#genero");
    selectGenero.addEventListener("change", function() {
//change se ejecuta cada vez que el usuario cambie la opcion de select genero
//se utiliza function en vez de flechas para la referencia this. 
//no permitiendo buscar el valor de select con selectGenero.value sino con this.value
        console.warn("has cambadio el select a: " + this.value);

    });

/***** EVENTOS DE FOCUS - BLUR  */
// EN el campo de emails

let campoEmail = document.querySelector("#email");

campoEmail.addEventListener("focus",() => { 
    //El evento focus permite detectar el click dentro del campu este caso email 
        console.log ("Entraste al campo EMAIL ");

        campoEmail.style.border = "2px  lightblue solid"; 
        campoEmail.style.outline= "none";
        campoEmail.style.borderRadius= "30px";
});

campoEmail.addEventListener("blur",() => {

    console.warn ("Saliste al campo EMAIL "); 
    // Detecta cuando sale el usuario de la casilla
    // CAMBIA el estilo cada vez que es detectado 

       campoEmail.style.border = "";
       campoEmail.style.borderRadius= "";
       
});

/********** EVENTOS  DOCUMENT Y VENTANA *********/

//Se usan para ver si las paginas estan cargadas 

window.addEventListener("load", () => {
    console.warn("Toda la web esta cargada, incluidos los recursos !!!");
    // Permite detectar cuando toda la pagina esta cargada
});

window.addEventListener("resize", () => {
    console.error("Ventana redimensaionada!! " +window.innerWidth+ " " +window.innerHeight);
    // Cuando la ventana se redimensiona se ejecuta la funcion call back 
})

window.addEventListener ("scroll", () => {
    console.log("Estas en el pixel " +Math.round(window.scrollY)+" del scroll de la pantalla");
    // Detecta el scroll que se hace y aplica call back en un console.log
});

/************** EVENTOS  PORTA PAPELES *********/

// Detectara los eventos relacionados con el porta papeles y menu contextual

let portapapeles = document.querySelector("#portapapeles");

portapapeles.addEventListener("copy", () =>{

    alert ("Copiado dentro del portapapeles");
    navigator.clipboard.writeText("");
    // vacia el porta papeles despues de copiar algo 

});

portapapeles.addEventListener("paste", () =>{
    alert ("no puedes pegar en esta pagina");

});

portapapeles.addEventListener("cut", () =>{
    alert ("Cortado dentro del portapapeles");

});

// Menu contextual 

portapapeles.addEventListener("contextmenu", () => {

    event.preventDefault();
    //evita que el menucontextual se abra
    console.warn("Se abrio el menu");

});

// Dejar de escuchar eventos

let botoncito2 = document.querySelector("#botoncito2");

function alertita () {
    // se crea una funcion para el even
    alert ("Has hecho click en el botoncito 2");

}
 botoncito2.addEventListener ("click", alertita);
 // se crea un evento click y asigna alertita  como call back   

 setTimeout(() => {

    botoncito2.removeEventListener("click", alertita);

    alert("¡botoncito2 - ya no esta disponible ")


 }, 10000)
 // despues de 10 se elimina el evento y mostrara alerta 

 
 
 
 
 /******* EVENTO PROPAGACION **********/

 //

 let cajaPadre = document.querySelector("#cajaPadre");
 let botonHijo = document.querySelector("#botonHijo");

 cajaPadre.addEventListener("click",()=>{
    alert ("Encontraste al padre! ");
 });

 botonHijo.addEventListener("click",(event)=>{
    event.stopPropagation();
    //permite detener la propagacion de seleccion por bubbeling 
    alert ("Encontraste al hijo! ");
 });
 