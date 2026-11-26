// Ejemplo 3 condicional IF

let nombre = "Joaquin Perez"
let edad = 31 

if(edad >= 18 ){ // si edad es mayor o igual de 18 automaticamente tiene edad suficiente para votar, entonces se ejecuta el bloque de código
    console.log(`${nombre} tiene ${edad} años, edad suficiente para votar`);  

    if(edad <= 21){ // si edad es menor o igual a 21 automaticamente es un adolescente, entonces se ejecuta el bloque de código
    console.log(`${nombre} es catalogado como adolescente`);
    }else if (edad >= 70){
    console.log(`${nombre} es catalogado como adulto mayor`);
    }else if (edad >= 22 && edad <= 69){ // si edad es mayor o igual a 22 y menor o igual a 69 automaticamente es un adulto, entonces se ejecuta el bloque de código
    console.log(`${nombre} es catalogado como adulto`);
    }   

}else{ // si la condición es falsa, entonces se ejecuta el bloque de código del else
    console.log(`${nombre} tiene ${edad} años, no tiene edad suficiente para votar`);
}