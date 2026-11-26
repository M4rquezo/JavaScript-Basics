/* E J E R C I C I O 13 

TENGO UN KANGURO QU SALTA 3 METROS CADA VEZ
HAZ UN PROGRAMA QUE ME DIGA CUANTOS SALTOS  HA DADO EL KANGURO 

Y CUAL ES LA DISTANCIA TOTAL RECORRIDA TRAS 17 SALTOS */

let saldodistancia = 3;
let saltos = 17;

let distanciaRecorrida= 0;
for (let  contador  = 1; contador <= saltos; contador++) {
    distanciaRecorrida += saldodistancia;


console.log(`La distancia total recorrida tras
     ${saltos} saltos es de ${distanciaRecorrida} metros.`);    

}
