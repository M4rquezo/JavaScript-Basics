//Array, matrices, arreglos

let nombre = "David Marquez" ;

let nombres =[ "David", "Jessica", "juan", "pepe", "frank"] ; // recomendada

let peliculas = new Array ("Avatar", "Spiderman", "Revenant");

console.log (nombres);
console.log (nombres.length);

console.log(peliculas);
console.log(peliculas.length);

// Acceder a los elementos
console.log(nombres[2]) ;// indice extrae 
console.log(nombres[1]) ;

// modificar elementos array

nombres [3] = "Manuel" ;
nombres [5] = "Francisco" ; 
console.log(nombres);


// PRACTICA 

let elemento = parseInt(prompt ("Selleciona Usuario", 0));
// Se requiere informacion por usuario

if (elemento >= nombres.length){ // condicion para limitar a los usuarios existentes
alert ("Usuario inexistente");

}else{ // alerta en respuesta correcta

    alert( "Bienvenido :" .concat(nombres[elemento])) ; // concatenar 
}

