/* F U N C I O N E S

Una funcion es una agrupacion reutilizable
de un conjunto de intrucciones sin tener que escribir el mismo codigo una y otra vez, se pueden usar
para realizar tareas especificas, se pueden usar para calcular valores, mostrar mensajes, etc.

Las funciones se pueden definir de varias formas, la mas comun es la siguiente:

function nombreFuncion(parametros) {
    // codigo a ejecutar
}

*/ 

function saludo(nombre = "amelia", plato = "tortilla de patatas") {
     // = para darle valores opcionales se sobreescriben
    console.log("¡Hola, abue!" + nombre);
    console.log("¿Cómo estás?");
    console.log("Me pasas la receta del "+plato+", por favor?");   
    console.log("******************")
    

    return " abuela "+nombre+" saludada correctamente!"
}

let mensajefinal = saludo("chuy", "pozole"); // al ponerlo en una variable se guarda lo que devuelve la funcion
// cuando se usan parametros hay que añadirlos a la funcion final
alert(mensajefinal);


saludo("Titi", "arroz con leche");
saludo("Horte", "sopa frita");
saludo("Lucy", "tortitas de papa");
saludo("Nana", "papatas cocidas");
saludo("vegetta", "hacer una casa ");

/* for (let i = 0; i < 3; i++) {
    saludo();
    saludo(); 
    saludo();  

}

Llamada a la funcion saludo, 
se ejecuta el codigo dentro de la funcion
*/ 



