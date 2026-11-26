/* E J E R C I C I O   1 5

Muestra la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y de ahi mostrar
el resultado.*/

let suma = 0; 
// tiene que ser 0 porque es el
//  elemento neutro de la suma
let numero = 0;
let ejecuciones = 0;


do {
    numero = prompt ("Introduce numero hasta que introduzcas un numero negativo");
    if (isNaN(numero)) {
        numero = 0;

    } else if (numero >= 0) {
        suma += parseFloat(numero);
        // suma = suma + parseFloat(numero);
        // suma + nuevo numero;
        ejecuciones++;
    }

} while ( numero >= 0);

alert("La suma es: " + suma);
alert("La media es: " + (suma / ejecuciones));

