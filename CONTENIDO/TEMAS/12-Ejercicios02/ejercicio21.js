    /* E J E R C I C I O  2 1 
    
    Calculadora

    -Pida dos nuemeros al usuario
    - si metemos uno mal que nos lo pida de nuevo
    - En una alerta y por la consola
    - el resultado de sumar restar multiplicar y dividir
     
    
    */

     let n1;
     let n2

     while (n1 < 0 || n1 < 0 || isNaN(n1) || isNaN(n2)) {
        // esto nos permite evitar error 
        // de que el usuario meta un numero negativo o un string
         alert("Introduce un numero valido");
         n1 = parseFloat(prompt("Introduce el 1er numero"));
         n2 = parseFloat(prompt("Introduce el 2do numero"));
     }

        // utilizar template strings

        let resultado = `
        
        SUMA : ${n1 + n2}
        RESTA : ${n1 - n2}
        MULTIPLICACION : ${n1 * n2}
        DIVISION : ${n1 / n2}
        RESTO : ${n1 % n2} `

        alert(resultado);
        console.log(resultado); 

        document.write(resultado); 
         //.write nos permite escribir en el documento html, es decir,
         //  en la pagina web, lo que pongamos entre los parentesis. 
        // En este caso, el resultado de las operaciones matematicas.