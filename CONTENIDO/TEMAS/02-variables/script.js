 // Variables - guarda cualquier tipo de dato

//Tipos
var nombre = "David "; //clasica alcance amplio
let apellido = "Marquez Ortega "; // let alcance de bloque
const  nacionalidad = "Mexicana"; // valor no cambia

let heroe = "Spiderman"; // asignado a "heroe"
let universo = "Marvel"; // se pueden sustituir 
let edad = "26"; // los datos se guardan en las variables asignadas 

//forma concatenada

let heroe_y_universo = heroe + " Es el mejor de la casa de dibujos " + universo;

heroe = "Batman";
universo = "DC" ;

console.log(heroe,universo,edad);//al invocar la variable asignada invoca la informacion guardada
alert(heroe_y_universo);
