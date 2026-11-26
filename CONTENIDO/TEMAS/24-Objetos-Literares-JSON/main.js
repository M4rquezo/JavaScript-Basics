alert("Hola, Objetos Literales en JS  y JSON ")

// OBJETOS LITERALES

//Es una estructura de datos que agrupa propiedades y metodos
// bajo un mismo nombre

// un hechiza

let pelicula = {
    titulo: "Spider-Man Brand New Day",
    anio: 2026,
    genero: "Ciencia Ficcion",
    director: "Destin Daniel Cretton",
    protagonista: "Tom Holland",
    elenco:[ "Tom Holland", "Zendaya", "Jacob Batalon", "Mark Ruffalo" ],// array  dentro del  objeto 
    detalles: {

        duracion: 150,
        clasificacion: "PG-13",

    },
    descripcion: function(){ // metodo del objeto 
        return  `${this.titulo} es una pelicula  
                de ${this.genero},
                dirigida por ${this.director}
                y lanzada en el año ${this.anio}`;
    },
    mostrarElenco: () => {

        console.log("Elenco de actores:");

        pelicula.elenco.forEach(nombre => {
            console.log(nombre);
        });
    }
    
    // lo que se hace con this es acceder al objeto actual
};

//Forna de acceder a las propiedadees del objeto

console.log(
    pelicula.protagonista,
    pelicula.anio
);
//muy usado en arrays variable.length
// . punto accedemos a propiedades y metodos
 
// Otra forma preferible usar para 
// diferente debido a que es mas dinamico y flexible 

console.log(pelicula);

console.log(
    pelicula["director"],
    pelicula["genero"]
);

pelicula.director= "Sam Raimi";
console.log(pelicula);
pelicula.secuela = "Spiderman a Miles Story";
console.log(pelicula);
console.log(pelicula.descripcion());
pelicula.mostrarElenco();
// se pueden agregar arrays metodos sub objetos 
console.log(pelicula.detalles.duracion);

// Eliminar propiedades de un objeto 

delete pelicula.genero;
delete pelicula.elenco;

console.log(pelicula)

// OBJETOS JSON

// JavaScript Object Notation
// Formato de texto ligero para el intercambio de datos 

let palaDePadel = {

    nombre: "MetalBone",
    marca: "Bullpadel",
    anio: 2026,
    peso: 360,
    rigidez: "Media",
    forma: "Diamante",
    
};

let palaDePadelJSON = JSON.stringify(palaDePadel); 
//convierte el objeto java en JSON   
console.log(palaDePadel);
console.log(palaDePadelJSON);

let objetoConvertido = JSON.parse(palaDePadelJSON);
//.parse convierte un objeto json a java
console.log(objetoConvertido);

// +Cositas conJSON David Marquez 

//recorrer un objeto 

let caja = document.querySelector("#datos");

for(let clave in palaDePadel){
    
    caja.innerHTML += `<p>${clave}: ${palaDePadel[clave]} </p>`;
}
// va a recorrer dentro de la paladepadel  todas las claves 