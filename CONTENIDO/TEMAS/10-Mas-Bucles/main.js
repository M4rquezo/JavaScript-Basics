// B U C L E W H I L E
// Estructura de control que se repite mientras una condición sea verdadera

// S I N T A X I S

/* while (condición) {
        Código a ejecutar mientras la condición sea verdadera
} */   

// hay que tener un contador para evitar un bucle infinito
    //  Ejemplo 


    let year = 2001; 
    let objetivo =  2098;

    while (year != objetivo) {  // condicion para while, mientras el año sea diferente al objetivo, se ejecutará el bloque de código
        console.log(`Estamos en el año ${year}`); // indicador de que el bucle se está ejecutando
        
        
             if (year == 2090) { // condición para if, si el año es igual a 2090, se ejecutará el bloque de código
                break; // break es una palabra reservada que se utiliza para salir del bucle, en este caso, cuando el año sea igual a 2090, se saldrá del bucle
        
             }
        
        year++; // accion que hace que el bucle avance, sino se quedaría en un bucle infinito
    }



    // D O   W H I L E 

    /* Estructura de control que se 
    repite al menos una vez,
    Y luego se repite mientras 
    una condición sea verdadera */

    /* Sintaxis 
    
    DO{ // EJECITA EL CODIGO AL MENOS UNA VEZ
    
} WHILE (condición); // CONDICION PARA SEGUIR EJECUTANDO EL CODIGO
        
    */
    


let numero = 48 

do{

    console.log(`El numero es ${numero}`); // indicador de que el bucle se está ejecutando

        numeros --; // accion que hace que el bucle avance, sino se quedaría en un bucle infinito   

} while (numero > 77); // condicion para while, mientras el numero sea mayor a 0, se ejecutará el bloque de código

                    