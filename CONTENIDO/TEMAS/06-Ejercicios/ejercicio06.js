/* Ejercicio 6 
En mi tienda de videojuegos tenemos oferta
si compras un juego de 50 euros hacemos un 
20% de descuento

Si un cliente compra el Tekken 15 que
cuesta  50 euros, ¿cuanto pagara el cliente? */

const precioTekkenJuego = 50;
const promocion = 0.20; 
const descuento = precioTekkenJuego * promocion;

const precioFinal = precioTekkenJuego - descuento;
let resultado = `El cliente pagara ${precioFinal} euros por el Tekken 15.`;

console.log(resultado); 
