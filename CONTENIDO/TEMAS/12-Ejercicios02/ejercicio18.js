/* Ejercicio 18

Tenemos una coleccion de numeros desde el 1 al 17.
y el usuario tiene que adivinar cual es el elegido.

haz un programa para que pueda adivinar el numero. */


const numeroElegido = 7; // numero que el usuario tiene que adivinar
 let intento = 0;

 while(intento != numeroElegido) {

   intento = parseInt(prompt("Adivina el numero entre 1 y 17"));
   // se pide al usuario que ingrese un numero, se guarda en la variable intento
   if (numeroElegido== intento) {
    alert("Felicidades, adivinaste el numero");
    // si el numero ingresado es igual al numero elegido, se muestra un mensaje de felicitaciones
   }else {
    alert("Intenta de nuevo");
    // si el numero ingresado es diferente al numero elegido, se muestra un mensaje para intentar de nuevo
   }  

 }