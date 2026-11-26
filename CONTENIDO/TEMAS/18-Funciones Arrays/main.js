/*  CREAR ARRAY VACIO

let vacia = new Array(4);

    console.log(vacia);


*/

let gadgets = ["pc", "laptop" , "tablet", "movil", "smartwatch", "consola de videojuegos"];

    console.log(gadgets);

// longuitud del array

    console.log(gadgets.length); // muestra la distancia

// AÑADIR elementos

gadgets.push("Television");
gadgets.push("Tostadora");

    console.log(gadgets);

// ELIMINAR ultimo elemento

gadgets.pop();
gadgets.pop();
gadgets.pop();
gadgets.pop();
gadgets.pop();
gadgets.pop();

    console.log(gadgets);

//  AÑADIR AL PRINCIPIO 

gadgets.unshift("BOCINAS");
gadgets.unshift("Nintendo Switch");

// ELMINAR AL PRINCIPIO 

gadgets.shift();
gadgets.shift();
gadgets.shift();

    console.log(gadgets);

// BUSQUEDA DEVUELVE INDICE

let indice = gadgets.indexOf("BOCINAS");

    console.log(indice);

// Busqueda  para ver si existe elemento    

let existe = gadgets.includes("tablet");

    console.log(existe); 

// FILTRAR ARRAYS 

gadgets.push("Monitores");
gadgets.push("Teclado");
gadgets.push("Mouse");
gadgets.push("HDMI");
gadgets.push("MotherBoard");

let gadgetsconA = gadgets.filter(gadgets => gadgets.includes("a"));
// gadgets.includes("a") la funcion  te da true false 
//return de gadgets. includes a
console.log (gadgetsconA);

// REDUCE

let reducir = gadgets.reduce((total,actual,indice) => {

    let capitalizarTotal = total;

    if (indice === 1){
        capitalizarTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
    }

    let capitalizarActual = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

    return capitalizarTotal+", "+capitalizarActual;

});

console.log(reducir);
// MEJOR OPCION

let numeros = [1, 2, 3 , 4]; // se pueden sumar de golpe 

let suma = numeros.reduce((acumulador, numeroActual, iteraciones) => acumulador+numeroActual);

console.log(suma);

// ORDENAR ARRAYS 
gadgets = ["almanaque", "batidora", "cenicero", "freidora", "alacena", "cocina"];

gadgets.sort();

console.log(gadgets);

// Revertir  / ordena a la inversa 

    gadgets.reverse();

     console.log(gadgets);

// COMBINAR ARRAYS

let union = gadgets.concat(numeros);

console.log(union);

// CONVERTIR EN CADENA /SEPARADOR

let etiquetas = gadgets.join (", ");

console.log(etiquetas);

// COPIAR PORCION ARRAY

let misGadgetsFavs = gadgets.slice(3,5);

console.log(misGadgetsFavs);

// BUSQUEDAS 

let Buscar = gadgets.find(gadgets => gadgets.length > 5 );
console.log (Buscar);
// funcion busca algo pero devuelve primer resultado

// Busca igual pero devuelve el indice

let BuscarIndex = gadgets.find(gadgets => gadgets.length > 7 );
console.log (BuscarIndex);

/*F U N C I O N E S Y M E T O D O S  N U E V O S para Arrays */

// SOME - algunos arrays

let letrasE = gadgets.some(gadgets => gadgets.includes("e"));

console.log(letrasE);

// EVERY 
 let letrasA = gadgets.every
 (gadgets => gadgets.includes("s"));

 console.log(letrasA)

// APLANAR

let anios = [

    [1990, 1985, 1986],
    [2005, 2007, 2222],
    [2200, 3698, 1852, [2021, 2022, 2023,[2025,2026,2027]]]

];

let plana = anios.flat(3); // .flat te permite juntar todos los arrays 
console.log(plana);

// COPYWITHIN

// Nos permite compiar una secuencia de elementos
// A otra posicion pero sin cambiar el tamaño de radio 
 
let fechas = ["20-08-2001", "08-01-2000", "12-05-2006", "03-12-2003"];

fechas.copyWithin(0,3);

console.log(fechas);



// Convertir STRING EN ARRAY 

 // Serie de letras string - convertidas en array
 //.from permite pasar convertir

 let nombre = "David";

 let arrayString = Array.from(nombre);
 
 console.log(arrayString);

 //   DESECTRUCTURACION
 // crear variables con valores 

 let [uno, dos, tres] = [1, 2, 3];

 console.log(tres);

 let [actor, ...restoDeActores] = ["Robert de niro", "Robert Pattinson", "Bruce Willis", "Leonardo DiCaprio",];
 
 console.log(restoDeActores);


 // EXPANDIR ARRAYS

 let array1 = [1, 2, 3];
 let array2 = [4, 5, 6 ];

 let arrayCompleto = [...array1, ...array2];
 console.log(arrayCompleto);

//... spreed 

console.log(gadgets.toString());
// Convertir ARRRAY a STRING

let frase  = "bienvenido al curso de JavaScript para tu entendimiento "; 

let palabras = frase.split("");

console.log(palabras);

// Pasar a seo slug 

let slug = palabras.join("-").toLowerCase();

console.log(slug);