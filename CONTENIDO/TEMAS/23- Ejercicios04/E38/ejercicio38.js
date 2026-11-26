/* 

Ejercicio 37 

1. Crea un formulario con estos campos: 
Nombre, Apellidos y edad
2. Añade un boton de enviar y usa el evento submit
3. Muestra los datos por pantalla cuando se termine de enviar el formulario 

*/

const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");

let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");
let edad = document.querySelector("#edad");

let infoNombre = document.querySelector("#info_nombre strong");
let infoApellidos = document.querySelector("#info_apellidos strong");
let infoEdad = document.querySelector("#info_edad strong");

let errorNombre = document.querySelector("#error_nombre");
let errorApellidos = document.querySelector("#error_apellidos");
let errorEdad = document.querySelector("#error_edad");

formulario.addEventListener("submit",(e)=> {// se pone a escuchar el evento submit 

    e.preventDefault(); 
    // VALIDAR EL NOMBRE APPELLIDOS Y EDAD 

    if(nombre.value.trim() == null || nombre.value.trim().length == 0){
        
        let mensaje = "El nombre no es valido" ;

        alert(mensaje);
        errorNombre.textContent = mensaje;
        
        return false ;

    }else{
        errorNombre.style.display = "none";
    }
     if(apellidos.value.trim() == null || apellidos.value.trim().length == 0){
        
        let mensaje = "Los apellidos no son valido" ;

        alert(mensaje);
        errorApellidos.textContent = mensaje;
        
        return false ;

    }else{
        errorApellidos.style.display = "none";
    } 

    let miEdad =parseInt(edad.value);
     if(miEdad == null || miEdad <= 0 || isNaN(miEdad)){
        
        let mensaje = "La edad no es valida" ;

        alert(mensaje);
        errorEdad.textContent = mensaje;
        
        return false ;

    }else{
        errorEdad.style.display = "none";
    }   
    cajaInfo.style.display = "block"; 
    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent= edad.value;



});