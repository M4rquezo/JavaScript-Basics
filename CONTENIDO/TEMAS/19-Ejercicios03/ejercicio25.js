/*  Ejercicio 25;

Crea un array de ingredientes para una receta absurda 
(como una pizza con chocolate y piña )

Muestra la receta completa en una frase divertida.
*/


const  ingredientes = [ "piña", "chocolate", "peperoni", "fresa", "huevo",  "aceitunas", "miel", "hamburgesa"   ];

//arrays funcion join
let frase = ` Que rica esta la Pizza de  ${ingredientes.join(", ")}realmente absurda!`

// se utiliza join para convertirlo en string para que pase a el texto que se quiere
// se le agrega al texto una coma y espacio (", ")

document.write("<h1>"+frase+"</h1>");