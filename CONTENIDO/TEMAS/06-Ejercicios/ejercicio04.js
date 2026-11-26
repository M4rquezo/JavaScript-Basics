/* Ejercicio

tenemos una jirafa en el zoo que pesa 1.120 kg y
le damos de comer 141 kilos de hojas frescas

¿Cuanto pesa la jirafa despues de comer??*/

let pesoJirafa = 1120;
let comida = 141;

let pesoTotal = pesoJirafa + comida;

let resultado = "La jirafa que pesa " + pesoJirafa + " kg ahora pesa " + pesoTotal + " kg despues de comer";

console.log(resultado);


// templete strings

resultado = `La jirafa que pesa // ´ se utiliza para abrir y cerrar el string, no las comillas dobles ni simples
 ${pesoJirafa} kg ahora pesa ${pesoTotal} kg despues de comer`; // ${} se utiliza para insertar variables dentro del string

 //dando como resultado lo mismo pero con una sintaxis mas limpia y facil de leer

console.log(resultado);
