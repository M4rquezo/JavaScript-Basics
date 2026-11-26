/*  Ejercicio 26:


Dado un array de palabras , cuenta cuantas letras tiene cada palabra 
y crea un nuevo array
que contenga solo esos numeros 

*/


//recorrer y devolever el nuevo array 

function cuentaLetras(datos){

    let nuevosDatos = datos.map(elemento => elemento.length);

    return nuevosDatos;

}

const oracion= [ "Esta oracion se esta contando por cada palabra que tiene"];

const luchadores = ["  John Cena", "Batista", "Axiom", "Undertaker", "Bron Breakker"];

console.log(
    cuentaLetras(luchadores)
);