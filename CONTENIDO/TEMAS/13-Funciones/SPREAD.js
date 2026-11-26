// Operador  SPREAD

/* 

   Es un parametro que se dedica expandir un array dentro de otro


*/

 function mispeliculas (pelicula1,pelicula2,
        ...Resto_De_Peliculas){

 console.log(pelicula1);
        console.log(pelicula2);

        console.log(Resto_De_Peliculas);
        }
        
    mispeliculas("Matrix","Godfather",  "Scarface", "Terminator 2", "Jurassic Park")
let numeros = [1, 2 ,3 , 4 ];

let misNumeros = [...numeros, 77, 21, 7, 9, 18];
    
console.log(misNumeros);

let misPelisFavs = ["Spiderman", "AttackonTitan", "FullMetal"];
mispeliculas(...misPelisFavs, "Naruto", "Batman");

// añadir con SPREAD EVITA GENERAR PARAMETROS DENTRO DE OTROS Y LO
// AÑADE AL PRINCIPAL 