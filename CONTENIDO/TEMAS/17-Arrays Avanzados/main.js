
// ARRAYS AVANZADOs

let frameworks = ["Angular", "React","Astro", "NodeJS", "SolidJS" , "Qwik" ];

/*Acceso manual

console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);
console.log(frameworks[5]); 

*/

// Acceso con bucles
 
for (let i = 0; i <frameworks.length; i++){
    console.log(frameworks[i]);
}

// Bucles para recoger arrays

console.log("****************************");

let actores =["Leonardo DiCaprio ", "Timothee Chalamet " ,"Michael B Jordan", "Robert de niro" , "Brad Pitt"];

console.log("Listado de actores:");


//Bucle for 
// Para controlar el indice o hacer cambios especificos en cada iteracion 

for (let contador = 0; contador < actores.length; contador ++){

   // console.log(actores[contador]);
}


// B U C L E  for OF
//Acceder el valor rapido

for(let actor of actores){
// console.log(actor)

}


// B U C L E for I N
// para arrays no se usa
//si quieres acceder indice o recorrer popiedad de objetos

for(let indice in actores){
   // console.log(actores[indice]);

}

//  B U C L E for E A C H
// Sin controlar el flujo del bucle
// Array de Objetos y acceder sencillamente 
    actores.forEach(actor=> {
        // console.log(actor);
    });

    // BUCLE  map
    //Si se necesita transformar preservando datos

    let nuevosActores = actores.map(actor =>{
        console.log(actor);
        
        return actor + "Hollywood";
    });

    console.log(nuevosActores);


    //  Arrays multidimensionales

    let categorias = ["Lucha", "Deportes", "Accion", 
        "Carreras", "Sanbox"];
    let titulos = ["SupersmashBros", "Uncharted", "FIFA ",
         "Spiderman", "Tekken" ,"GTA VI", "NBA"];

    //UNIR DOS ARRAYS

    let videojuegos = [categorias, titulos] ;

    //mostrar o seleccionar informacion
        console.log(videojuegos);
            console.log(videojuegos[1][2]);
            console.log(videojuegos[0][2]);


            // ARRAYS BI DI MEN SIO NALES
let tabla = [

    ["Producto" , "Cantidad" , "Precio"],
    ["PC", 2, 350 ],
    ["SmartPhone", 4,  127],
    ["Impresiora ", 10, 57]

] ;

console.table(tabla);

// console.Log(tabla[2][0], tabla [2][2]);
    
document.write("<table border=1>");

tabla.forEach((fila, indexFila) => {

        
    document.write("<tr>");

    fila.forEach(elemento => {
        if (indexFila === 0){
            document.write("<th>"+elemento+"</th>") ;

        }else {
            document.write("<td>"+elemento+"</td>") ;
        }
    
});

    document.write ("</tr>") ;

   
});

document.write("</table>");

// T R I D I M E N C I O N A L E S

console.log("****************************");

let cartaRestaurante = [ // ARRAY PRINCIPAL 
    ["plato", "Cantidad", "Precios", "Tamaños"], 
    // 2DA ARRAY DIMENSIONADO
    ["Menu Pizza", 2, [8,10,15], ["pequeño", "mediano", "grande"]], 
    // [[]] TERCERA DIMENSION DENTRO DE LA SEGUNDA
    ["Menu Hamburgesa", 5, [10,11,17], ["pequeño", "mediano", "grande"]],
    ["Menu Paella", 7, [18,80,55], ["pequeño", "mediano", "grande"]],

];
// ACCEDER A ESTOS ARRAYS
for (let menu of cartaRestaurante){

         console.log("****************************"); // separacion

         console.log(menu)

        if(Array.isArray(menu[2]) && Array.isArray(menu[3])) {
            // recorrer elmentos
            console.log(menu[0]);
            console.log(menu[3][0], menu[2][0], "euros");

            for(let index in menu[2]){ // otro bucle 
                console.log(menu[3][index], menu[2][index], "euros");   

            }
        }
      /*  for(let elemento of menu){

                if(Array.isArray(elemento)){
                    for(let subElemento of elemento){
                        console.log(subElemento);
                    
                    }
                
                
                }else{
                    console.log(elemento) ;
                    } */  
 }
    



