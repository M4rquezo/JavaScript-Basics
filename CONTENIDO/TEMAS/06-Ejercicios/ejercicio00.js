/* Calcula cuantas horas le llevaria llegar
 a la luna a una nave espacial y 
guarda el resultado en una variable */


let distancia =384400;
let velocidad = 1225;

let HRS = distancia / velocidad;

console.log("la nave espacial tardara "  +Math.ceil(HRS));