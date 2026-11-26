/* E J E R C I C I O   1 9
 *
 *EN BASE AL NUMERO QUE NOS DE EL USUARIO

 DECIRLE SI ES PAR O IMPAR*/


 let  numero = parseInt(prompt("INGRESE UN NUMERO: "))

 while(isNaN(numero)){

    numero =parseInt
    (prompt("mete un numero para ver si es par o impar:",0))
 
}
if (numero % 2 == 0 ) {
    // el resto  nos permite entender si es par o impar
    alert("el " + numero + " es par")
} else {
    alert("el " + numero + " es impar")
}