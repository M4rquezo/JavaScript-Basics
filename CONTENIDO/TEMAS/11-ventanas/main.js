// Alertas

let mensaje = " Hola soy  David Marquez y estoy aprendiendo JavaScript";

alert(mensaje); // alert es una función que muestra un mensaje en una ventana emergente, en este caso, el mensaje que se le pasa como argumento

// Prompt o confirmaciones  

let pregunta =  confirm("¿Aceptar?");   
    // confirm es una función que muestra un mensaje en una ventana emergente con dos botones, "Aceptar" y "Cancelar", y devuelve true 
    // si se presiona "Aceptar" y false si se presiona "Cancelar"
     console.log(pregunta); // muestra el valor de la variable pregunta en la consola, en este caso, true o false dependiendo de la respuesta del usuario

     pregunta = confirm("¿Desea continuar?"); // se le asigna un nuevo valor a la variable pregunta, en este caso, el resultado de la función confirm
     console.log(pregunta); // muestra el nuevo valor de la variable pregunta en la consola, en este caso, true o false dependiendo de la respuesta del usuario     

     
     // promts ( ingresa un dato)
     let dato = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");

     console.log(dato); // muestra el valor de la variable dato en la consola, en este caso, el nombre ingresado por el usuario
     console.log(parseInt(edad)); // muestra el valor de la variable edad en la consola, en este caso, la edad ingresada por el usuario