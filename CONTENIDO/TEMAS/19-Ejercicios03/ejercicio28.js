/* 
Ejercicio 28:

1. Pide 6 numeros por pantalla y metelos en un array
2. Muestra al array entero (todos sus elementos)
    en el cuerpo de la pagina y en la consola
3. Ordenalo y muestarlo
4. Invierte su orden y muestralo
5. Muestra cuantos elementos tiene el array
6.Buca uno de los valores que ha metido el usuario,
    que nos diga si lo encuentra y su indice 
8. Refactoriza todo lo posible usando funciones 





*/


// 1. Pedir 6 numeros 

let numeros = [];

for(let contador = 1; contador <= 6; contador++){

    let numerito = Number(prompt("Inserte un numero: ", 0));

    numeros.push(numerito);
}

// 2. Mostrar array entero

function mostrar(coleccion){

    console.log(coleccion);

    document.write("<h1>Contenido del array </h1>");
    document.write("<ul>");
    // ul sirve para

    coleccion.forEach(elemento => {
        document.write("<li>"+elemento+"</li>");
               // Li sirve para 
    });

    document.write("</ul>");
    return coleccion;
}
mostrar(numeros);

// 3. Ordenar y Mostar

numeros.sort((a, b) => a-b );
//algoritmo de ordenacion
mostrar(numeros);

// 4. Invertir y mostrar

numeros.reverse();

mostrar(numeros);

// 5. Mostrar elementos en  array

document.write(` <h1> El array tiene ${numeros.length} numero de elementos`);

// 6.  Busqueda de elementos

let busqueda = Number(prompt("Busca un numero", 0 ));

let posicion = numeros.findIndex(numero => numero === busqueda);

if(posicion && posicion != -1){
console.log("Encontrado, La posicion de busqueda es:" +posicion);

}else {
console.log("numero no encontrado");
}