// Condicional Switch es una estructura de control que permite  
// ejecutar diferentes bloques de código dependiendo del valor de una expresión.
// Es una alternativa a la estructura if-else cuando se tienen múltiples condiciones que evaluar.


 let midesayuno = 1 
switch (midesayuno) { 

    case 1: // bloque de instrucciones para el caso 1
        console.log("Café con leche");
        break; // se utiliza para salir del switch después de ejecutar el bloque de instrucciones

    case 2: // bloque de instrucciones para el caso 2
        console.log("Tostadas con mermelada");
        break;  

    case 3: // bloque de instrucciones para el caso 3
        console.log("Huevos revueltos con pan");
        break;  

    default: // bloque de instrucciones para el caso por defecto
        console.log(" Selecciona una opción válida");
        break;  
}


//  C O N D I C I O N A L   T E R N A R I O

// mas rapida y en una sola linea de codigo, 
// se utiliza para asignar un valor a una variable en función 
// de una condición.
// La sintaxis es: condicion ? valor_si_verdadero : valor_si_falso;     

let nombre = "David Marquez";
let edad = 18;
  
let resultado = (edad >= 18) ? "Eres mayor de edad"
 // ? se utiliza para separar la condición del valor (case)
 // que se asignará si la condición es verdadera
 : "Eres menor de edad"; // : se utiliza para separar (break)
 // el valor que se asignará si la condición es falsa

 console.log(resultado);

// D I F E R E N C I A S   E N T R E   V A R   Y   L E T

/* l E T : Es una variable de ámbito de bloque, lo que significa que solo puede ser accedida dentro del bloque de código donde se declara. 
 Esto ayuda a evitar problemas de hoisting y redeclaración, 
 lo que hace que el código sea más seguro y fácil de depurar.*/

/* V A R
: Es una variable de ámbito global o de función, lo que significa
  que puede ser accedida desde cualquier parte del código. 
 Sin embargo, su uso puede llevar a problemas de 
 hoisting y redeclaración, 
 lo que puede causar errores difíciles de depurar.*/

 let CURSO = " Maestro en software"; // let solo puede ser accedida dentro del bloque de código donde se declara
// tenemos acceso a variables fuera del bloque para su uso posterior,}
//  pero no podemos redeclarar la variable dentro del mismo bloque,
//  lo que ayuda a evitar errores de programación.
 if ("hola" == "hola") {
    let CURSO = " Maestro en react y node"; 
    // var tiene que ser usada dentro 
    // de una función o en el ámbito global,
    // lo que puede llevar a problemas de hoisting y redeclaración
    // solo estan limitadas por el ámbito de la función o el ámbito global,

    console.log(CURSO); // " Maestro en react y node"
 }