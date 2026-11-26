// Funciones dentro de otras


function operaciones ( numero1, numero2){


let resultados ={ // funcion que usaremos dentro de las otras funciones 

    "suma" : (numero1+numero2),
    "resta" : (numero1-numero2),
    "multiplicacion" : (numero1*numero2),
    "division" : (numero1/numero2),
};

    return resultados;

}

function porConsola(numero1, numero2){

    let resultados = operaciones(numero1, numero2);

    console.log("Suma: " +resultados.suma);
    console.log("Resta:" + resultados.resta);
    console.log("Multiplicacion: " +resultados.multiplicacion);
    console.log("Division: " + resultados.division);

    return true;

}

function porPantalla(numero1, numero2){

document.write("<h2>Calculadora</h2>");
document.write("<h2>suma:" + (numero1+numero2)+"</h2>");
document.write("<h2>resta:" + (numero1-numero2)+"</h2>");
document.write("<h2>Multiplicacion:" + (numero1*numero2)+"</h2>");
document.write("<h2>division:" + (numero1/numero2)+"</h2>");
document.write("<hr>");

return true;    

}

function calculadora (numero1, numero2, mostrar = false){

if(mostrar == false){

    porConsola(numero1, numero2);
    }else {
        porPantalla(numero1, numero2);
    }

    return true;
}
    calculadora (7,9);
    calculadora (1,12,true);

