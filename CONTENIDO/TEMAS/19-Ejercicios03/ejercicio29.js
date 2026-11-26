/*  Ejercicio 29 

Crea una funcion que reciba una palabra y devuelva cuantas vocales contiene

*/ 

function misvocales(palabra){
    
    const vocales = "aeiouAEIOU";
    
    let count = 0; // este es el contador que empieza a 0 y se le sumara

    for(let letra of palabra){
        if (vocales.includes(letra)){
            count++; // si la letra de la palabra incl
        }

    }

    return count;

}

console.log(misvocales("DavidMarquez"));