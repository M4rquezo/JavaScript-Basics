/* Ejercicio 10

el otro dia fui con mi amigo pepe y manolo a un restaurante
yo comi 2 hamburgesas pepe comio 3 y manolo como es culturista
se comio 6

¿Cuantas hamburgesas nos comimos en total?
es cierto que yo comi menos que pepe?

Responde estas dos preguntasn en la consola de tu navegador */

let hamburguesasYo = 2;
let hamburguesasPepe = 3;
let hamburguesasManolo = 6;

let totalHamburguesas = hamburguesasYo + hamburguesasPepe + hamburguesasManolo;
let yoComiMenosQuePepe = hamburguesasYo < hamburguesasPepe;

console.log(`Total de hamburguesas consumidas: ${totalHamburguesas}`);
console.log(`Es cierto que yo comi menos que pepe? ${yoComiMenosQuePepe}`);