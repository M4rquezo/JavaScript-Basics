/* Ejercicio 12 

Programa que pida dos numeros y que nos diga 
cual es mayor, el menor o iguales 

PLUS: Si los numeros no son numero o son menores o iguales a 0,
no los vuelva a  pedir, sino que muestre un mensaje de error y termine el programa.

*/


let x = parseInt(prompt("Ingrese el primer numero: ")); 
// parseInt es para convertir el valor ingresado
// por el usuario a un numero entero. 
// Si el usuario ingresa un valor que no se puede 
// convertir a numero, parseInt devuelve NaN (Not a Number).
let y = parseInt(prompt("Ingrese el segundo numero: "));  

while( x <= 0 || y <= 0 || isNaN(x) || isNaN(y)){

//is nan(x) es para verificar si x no es un numero, lo mismo para y.    
// esto sirve para validar que los datos ingresados sean numeros y mayores a 0, si no se cumple esta condicion, 
// se muestra un mensaje de error y el programa termina.   
    alert("Error: Ingrese numeros mayores a 0 y que sean numeros validos.");
    x = parseInt(prompt("Ingrese el primer numero: ")); // reasignacion de valores 
    y = parseInt(prompt("Ingrese el segundo numero: "));  
}

if(x === y){
    alert("Los numeros son iguales.");
} else if (x > y) {
    alert("El numero mayor es: " + x);
    alert ("El numero menor es: " + y);
} else if (y > x) {
    alert("El numero mayor es: " + y);
    alert ("El numero menor es: " + x);
}else {
    alert("Error: Ingrese numeros validos.");
}
  