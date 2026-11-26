/* Ejercicio 24:

Crea un array con 10 numero aleatorios del 1 al 10.
Luego , pide al ususario que adivine un numero.

Si acierta, muestra unmensaje de celebracion;
si no,muestra  el numero correcto.

*/

//Crear ARRAY 
//PEDIR NUMERO AL USUARIO 
//IMPRIMIR SI ACIERTA O SI NO 

let numaleatorios = [ 3, 7, 8, 9, 11, 13, 17, 22, 24, 33];


let numdeuser = prompt ("Adivina un numero del 1 a 100");


if (numaleatorios.includes(Number(numdeuser))){
// esta expresion includes nos permite pedir que el numero elegido
// sea la condicion 
// si el numero los numeros alatoreos incluyen el numero elegido 
    alert("¡Adivinaste, felicidades!");

} else if ( numdeuser > 100 ){
// 
    alert("Escriba un numero del 1 al 100 ");
    let numdeuser = prompt ("Adivina un numero del 1 a 100");

} else {

    alert ("intenta de nuevo");
}

//*  toma en cuenta que el numero se tiene que convertir de string a array 