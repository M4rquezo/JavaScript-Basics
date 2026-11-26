/* Ejercicio * 

Tengo una heladeria y cada bola de helado vale  1.8 euros
¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten encuenta que el barquillo cuesta cincuenta centimos de euro*/

const precioBola = 1.8;
const precioBarquillo = 0.5;

const precioCucurucho1Bola = precioBarquillo + precioBola;
const precioCucurucho2Bolas = precioBarquillo + (precioBola * 2);
const precioCucurucho3Bolas = precioBarquillo + (precioBola * 3);

console.log(`El precio del cucurucho de 1 bola es: ${precioCucurucho1Bola} euros`);
console.log(`El precio del cucurucho de 2 bolas es: ${precioCucurucho2Bolas} euros`);
console.log(`El precio del cucurucho de 3 bolas es: ${precioCucurucho3Bolas} euros`);

console.log(`

    1.Cucurucho de 1 bola: ${precioCucurucho1Bola} euros
    2.Cucurucho de 2 bolas: ${precioCucurucho2Bolas} euros
    3.Cucurucho de 3 bolas: ${precioCucurucho3Bolas} euros  

`)