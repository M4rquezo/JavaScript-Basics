/* Ejercicio 30 :

Crea una funcion que reciba un numero y devuelva su factorial. */ 

let elFactorial = (numero) => {

    if (numero <= 1 ){
        return 1;
    }

    let factorial = 1;

    for(let contador = 2; contador <= numero; contador++){

        factorial = factorial * contador;

    }

    return factorial;

}

console.log( 
    elFactorial(
        Number(prompt("Dime un umero y te digo su factorial", 0))
    )


)