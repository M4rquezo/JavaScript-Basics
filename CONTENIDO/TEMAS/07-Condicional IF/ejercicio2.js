// Ejemplo 2 - Condicional IF

let quieroCebolla =  false;

if (quieroCebolla === true) { // si la variable quieroCebolla es igual a true, entonces se ejecuta el bloque de código
    console.log("hamburgesa con cebolla");
} else { // si la condición es falsa, entonces se ejecuta el bloque de código del else
    console.log("hamburgesa sin cebolla");
}

if (!quieroCebolla){
// ! modifica la variable quieroCebolla para que sea igual a false, entonces se ejecuta el bloque de código

    console.log("hamburgesa sin cebolla!");
} else { // si la condición es verdadera ya que ! invertirá el valor de quieroCebolla, entonces se ejecuta el bloque de código del else

    console.log("hamburgesa con cebolla");

}