/*  E J E R C I C I O   1 7 

MOSTRAR TODSO LOS NUMEROS IMPARES QUE HAY
ENTRE DOS NUMEROS INGRESADOS POR EL USUARIO */

 let numero1 = parseInt(prompt ("Ingrese el primer numero"));
 let numero2 = parseInt(prompt ("Ingrese el segundo numero"));


 while (numero1 <= numero2) { 
    // mientras que numero1 sea menor o igual a numero2, 
    // se ejecuta el bloque de codigo
    

     numero1++; // se le suma 1 a numero1 para avanzar al siguiente numero  

        
     if (numero1 % 2 != 0) {
        // si el resultado de ser dividido entre 2 
        //es diferente de 0, entonces es impar, se muestra 
        // el mensaje en consola
         console.log(`El numero ${numero1} es impar`);
     }

    }