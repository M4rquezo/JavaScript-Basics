// Funciones Anonimas

    // "funcion sin nombre"


    const saludo = function (nombre = "" ){
        console.log("Hola Abuela que tal estas!");


    }; // cuando se necesita pasar parametros esto funciona perfecto

    saludo();

    let veces =0;
// set time out detiene y solo genera 1 
    setInterval(function(){
 // funcion call back 
 // se pasan como parametro de otra funcion para que
 // la funcion pueda ejecutarlas
        veces++;
        console.log("Se ha ejecutado el timeout" +veces+ "veces");
        
    }, 10000);


    // setInterval(saludo("amelia"),1000);
    /* 
    
    setInterval(function(){
        saludo("Amelia");
    },1000)
    
    
    */ 
    //se tendria que hacer asi
     // esto no es valido pq tiene parametro 


     //
    function restame(n1,n2, mostrar, multiplicarportres){

        let resta = n1 - n2;

        mostrar(resta);
        multiplicarportres(resta);

        return resta;

    }
        restame(20,5, function(resultado){
                console.log(resultado);
        }, 
        function (resultado){
            console.log(resultado*3);

        });


    // Ambito variables ( S C O P E)

    /* **** GLOBAL **** */ 


/* Se puede acceder 
desde cualquier parte en cualquier lugar */ 

let ruta= " Davidmarquezweb.es/ruta" ;

function mostrarRuta(){


    console.warn(ruta) ;
     let  nombre = "David Marquez web " ;
      // variable fuera no puede ser utilizada

}

console.warn(ruta) ;
mostrarRuta() ;

if(true){
    let deporte = "mi deporte favorito es soccer ";

    console.log(deporte);


}

// console.log(deporte) ; 
// se considera bloque no puedes taerla de fuera

/* con var si es posible 
 var deporte = "mi deporte favorito es soccer ";*/


 // H O S T I N G

 // Elevacion 
 //var se mueve hacia arriba antes de que se ejecute el codigo 

 console.log (coche); // al hacaerlo antes no se ejecuta
 var coche = "Ferrari"; // primero esto se tiene que crear

 //console.log (moto)
 // let moto =  "ducati"; // antes de definirla no se puede acceder 

 // F U N C I O N E S  F L E  C H A

 let nuevocurso = horas => {
    console.log ("Funcion1") // asi se define una funcion 
 } ; 

 nuevocurso() // si yo le pongo parametro no hace falta () solo cuando hay mas 

 // Utilizar en un callback

 setTimeout (() => {
    console.log("estoy usando funcion de flecha")

 } , 2000);