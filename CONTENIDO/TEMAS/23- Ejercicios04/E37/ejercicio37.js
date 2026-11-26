/* 

Ejercicio 37 

1. Crea un formulario con estos campos: 
Nombre, Apellidos y edad
2. Añade un boton de enviar y usa el evento submit
3. Muestra los datos por pantalla cuando se termine de enviar el formulario 

*/

const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");

// Se crean las variables para almacenar los datos del formulario

let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");
let edad = document.querySelector("#edad");
//VARIABLES PARA ALMACENAR LOS DATOS DEL FORMULARIO let infoNombre = document.querySelector("#info_nombre strong");


let infoNombre = document.querySelector("#info_nombre strong");
let infoApellidos = document.querySelector("#info_apellidos strong");
let infoEdad = document.querySelector("#info_edad strong");
formulario.addEventListener("submit",(e)=> {// se pone a escuchar el evento submit 

    e.preventDefault(); //Evita que se recargue la paguina al enviar el formulario
    
    console.log("Forumulario enviado !!");

    console.log(nombre.value, apellidos.value,  edad.value);
    cajaInfo.style.display = "block"; 
    // se muestra la caja de forumulario al enviarlo 
    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent= edad.value;

// mostrar caja de formulario <div class="info">



});