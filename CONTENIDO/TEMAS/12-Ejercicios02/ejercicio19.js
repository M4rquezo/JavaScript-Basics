/* E J E R C I C I O   1 9

Muestra todos los numeros divisores de un numero
que el usuario introduzca por teclado. */

let numero = parseInt(prompt("Mete tu numero y te dire sus divisores: ",1 ));

for (let contador = 1; contador <= numero; contador++){ 
//let contador comienza con 1 mientras sea menor o igual    
//al numero introducido por el usuario, se incrementa en 1 cada vez
    
           if(numero % contador == 0){
               console.log(`El ${contador} es divisor de ${numero}`);
           }



    }