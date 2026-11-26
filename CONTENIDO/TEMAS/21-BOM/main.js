// BOM - Browser Object Model 

// Alertas y dialogos * compnenetes del navegador
alert("¡Saludos abuela!"); // ventana de alerta

prompt ("como se llama tu abuela?"); // venta para interactuar con usuario

confirm ("esta en la tercera edad?"); // ventana confirmacion (si o no)


// BOM - Window 

console.log(window);

console.log(window.innerWidth); // ancho de la ventana
console.log(window.innerHeight); // alto

console.log (window.outerWidth, window.outerHeight) ;    

console.log(window.closed, window.document, window.navigator.userAgent);
 // si la ventana esta cerrada // 

 /* .setInterval(() => {
    console.log ("hola spiderman");
 } 1000, interval);
*/
 console.log(window.scrollX, window.scrollY); // traquear posicion de mause



 // BOM Navigator 

 //Sacar datos concretos

 console.log(navigator.appName, navigator.appversion);

 if(!navigator. onLine){ // si esta en linea
    console.log ("No internet accesible");
}else{
    console.log ("conectado de vuelta");
}

// Location / navegacion de nuestra pagina

console.log(location.href); // saca url
console.log(location.hostname); // informacion con la barra de direcciones - dominio

// location.href = "https:redireccion.com" direcciona a el link original 

// metodo reload  location.reload 


// BOM History

// history.back()
 // vas a pagina anterior

 // si hay muchas iteraciones se usa a go
 // history.go(1)
 //history.length pa saber cuanto historialse tiene
// history.back


// Screen 

console.log(screen.width, screen.height) // anchura y la  altura




// Distancia de ventanas en el navegadir 

let miweb = window.open("https.webqueseabre.com", "ruta de acceso") // pop ups  abriendo  pestaña 
   

let miweb2 = window.open("https.webqueseabre.com", 
                        "ruta de acceso"
                        "width=450,height=500")
                    ; // abrir nueva ventana  anchura altura y movimiento 