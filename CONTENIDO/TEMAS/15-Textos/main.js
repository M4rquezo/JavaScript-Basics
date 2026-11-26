// L O N G I T U D 

//CUANTOS CARACTERES SE OBTIENE DENTRO 
//Util para cadenas de texto

let nombre = "David Marquez" ;

console.log(nombre.length); 


// Conversion a texto 

let numero = 1255;

console.log(typeof numero.toString());

// Convertir texto  a mayusculas 

let web = "davidmarquez.com";

let webMayus = web.toUpperCase();

console.log(webMayus);

//Convertir a minusculas    

let plato = " PIZZA NAPOLITANA" ; 

console.log(plato.toLowerCase());

// conseguir una letra concreta 

let frase = " Mexico se vive en la piel ";

console.log(frase.charAt(5));

// Comprobar si una cadena tiene dentro otra

let eslogan = "Soluciones que si convienen tener";

if(eslogan.includes("tener")){

    console.log("tener se refiere a que lo necesitas!");
}else {
    console.log("lo que buscas no lo encuentras aqui");

}

// BUSCAR LA POSICION DE UNA PALABRA

let mensaje = "Aprendiendo JavaScript para ser un profesional y encontrar trabajo";

console.log (mensaje.indexOf("JavaScript"));
console.log(mensaje.charAt(18));

// E X T R A E R Parte de T E X T O

let curso =" Master en JavaScript" ;

console.log(TextDecoder.slice( 10));

//remplazar parte de un texto 

let pelicula = "Dos tontos muy tontos";

console.log(
    // pelicula.replace("tontos", "listos") // remplace solo una
     pelicula.replaceAll("tontos", "listos")
);

// Trim o eliminar espacio en blanco 


let email = " victor@victor.com    ";

console.log(
    email.trim()
);

// Dividir cadena // pasar en array 

let listaCompra = "huevos, carne, jitomate, lechuga, queso, cebolla, pan brioche, mayonesa" ;

let listaArray = listaCompra.split (",");
console.log(listaArray);


// SUB S T R I N G 

// Diferencia del slice no acepta indices negativos 

let curso2 =" Master en React" ;

console.log(curso2.substring(0,6));


// C O N C A T E N A R // UNIR+CADENAS DE TEXTO

let ciudad = "Puebla";
let pais = "Mexico";

let frase_final = ` vivo en ${ciudad} que se ecuentra en ${pais}`;
frase_final = "", concat("Mi ciudad es", ciudad, "y esta en", pais);

console.log (frase_final)


// SI comienza con palabra especifica 

let frase2 = " Bienvenido a el temario para aprender JS"
    console.log (

        frase2.startsWith("Bienvenido")
    );


//  SI ACABA con palabra especifica 

    console.log (

        frase2.endsWith("JS")


    );

//  Repetir  P A L A B R A S

let mensaje2= "JavaScript es lo mejor que existe";

console.log(

    mensajito.repeat(10)
);


// Buscar texto en una cadena 

let micadena = "Constancia y repeticion es lo mas importante";

    console.log(

        micadena.search("mas") // se puede buscar con expesiones regulares
    );


// MATCH - devuelve lo mismo pero completo

console.log(

        micadena.match("mas")// se puede buscar con expesiones regulares
 // micadena.search(/mas/g) g - busqueda global para mas de 1    
    ); 
        
        
