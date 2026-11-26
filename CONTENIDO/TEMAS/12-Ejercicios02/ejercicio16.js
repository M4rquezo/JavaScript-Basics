    /* E J E R C I C I O 16:

    Escribe un programa que muestra
    la tabla de multiplicar del numero 
    que el usuario ingrese por prompt. */

    let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:",1));
let Resultado = "Tabla del número " + numero + "\n";
    

for (let i = 1; i <= 10; i++) { 
    // Iteramos del 1 al 10 para mostrar 
    // la tabla de multiplicar e i++ es el multiplicador
    // i<=10 es la condición para que el bucle se ejecute 10 veces
    let multiplicacion = numero * i;
    Resultado += `${numero} x ${i} = ${multiplicacion}\n`;
    // resultado cambia en cada iteración, 
    // se va acumulando la tabla de multiplicar

}
//para salto o escape de línea se puede usar \n 

console.log(Resultado);
alert(Resultado);
