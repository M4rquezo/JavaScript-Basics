    /* Ejercicio 07

    Tenemos un circulo con diametro de 18cm 
    calcular radio del circulo y su area 
    mostrar resultado en alerta*/

const diametroCirculo = 18;
const radioCirculo = diametroCirculo / 2;
const areaCirculo = Math.PI * Math.pow(radioCirculo, 2);
const areacirculoog = 3.1416 * (radioCirculo * radioCirculo);

alert(`El radio del circulo es ${radioCirculo} cm y su area es ${areaCirculo.toFixed(2)} cm².`);