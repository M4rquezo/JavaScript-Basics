// DOM - Document Object Model 

// la pagina web es una casa y DOM es el plano de la casa 


//GetElementByID - Seleccioanr elementos por ID

let caja = document.getElementById("caja");

// console.log(caja); // para evitar null requiere "defer" script

// Modificar caracteristicas de un elemento seleccionado 
caja.innerHTML = "<h2>  Hola soy David modificando desde js </h2>";// mostrar lo que tiene cargado o inner text 
 
//tambien NULL se puede evitar
/* window.addEventListener("DOMContentLoaded", () => {}) */

/*
caja.style.background = "lightblue" ;
caja.style.maxWidth = "50%" ; 
caja.style.margin = "0 auto" ;
caja.style.padding ="35px" ;
caja.style.textAlign =" Center" ;
caja.style.fontFamily = "Arial ";

Es importante crear separado estilos para reutilizarlos
*/

//COMO APLICAR A UNA CAJA UNA CLASE
caja.classList.add("cajita");

caja.className = " cajita cajaza cajon"; 
//solo para saber el nombre de las clases 



// solo hace sentido cuando se enfocara en cambiar 1 especifico

function cambiarColor(color, radiuss){
    caja.style.background = color;
    caja.style.borderRadius = radiuss; 
}

console.log(caja.innerText ); // modificar otro texto

// mas METODOS Para seleccionar

// getElementbyClassName - Seleccionar multiples elementos con 1 clase

/* let articulos = document.getElementsByClassName("articulo");

console.log(articulos); 

for(let i = 0; i< articulos.length; i++){
    articulos[i].classList.add("articuloBase");

    //para agregar cosas +HTML
    articulos[i].innerHTML += "<a href='https://davidMO.web.es/ruta'> Leer mas </a>";

    // añadir un nodo del dom 

    let enlace = document.createElement("a"); // crear etiqueta variable "a"
    enlace.setAttribute("href","https://davidMO.web.es"); // agregar atributo enlace
    enlace.setAttribute("target" , "_blank"); // 
    enlace.style.color = "red"; 

    //texto que tendra enlace 
    let textoEnlace = document.createTextNode ("Sigue Leyendo");

    enlace.append(textoEnlace);
    articulos[i].append(enlace); // se consigue agregar el nodo 

    if (i=== 0){
        articulos[i].classList.add("articuloAmarillo");
    }

    if (i  ===  (articulos.length - 1)){
        articulos[i].classList.add("articuloUlti");


    }
} */

///getElementbyTagName /// 
// en vez de clase se elige con etiqueta

 let etiquetasArticulo = document.getElementsByTagName("article");

 etiquetasArticulo[3].style.backgroundColor = "black" ;

 etiquetasArticulo[3].style.color= "white" ;

 console.log(etiquetasArticulo[3]); 

//QuerySelector // UNA  etiquieta o clase por seleccion

// let seccionArticulos =  document.querySelector("section"); // como se selecciona CSS 
let seccionArticulos =  document.querySelector("#articulos");


seccionArticulos.innerHTML += "David Marquez Ortega"
seccionArticulos.style.padding = "40px" ;
console.log(seccionArticulos);

// Seleccionar una clase 

let primeroArticulo = document.querySelector(".articulo");
console.log (primeroArticulo);

primeroArticulo.style.borderRadius = "50px" ; // borde radial 

//Query Selector ALL // MULTILPES  selecciones 
// RECOMENDABLE USAR

//con selectores te devuelve como array de objetos

let articulos = document.querySelectorAll(".articulo"); // todos

articulos.forEach((articulo, i) =>  {

    articulo.classList.add("articuloBase");

    // Añadir mas HTML 

    articulo.innerHTML += "<a href= 'https://www.linkedin.com/in/damarquezo/'> leer mas </a>";
  
    // añadir un nodo del dom 

    let enlace = document.createElement("a"); // crear etiqueta variable "a"
    enlace.setAttribute("href","https://davidMO.web.es"); // agregar atributo enlace
    enlace.setAttribute("target" , "_blank"); // 
    enlace.style.color = "red"; 

    //texto que tendra enlace 
    let textoEnlace = document.createTextNode ("Sigue Leyendo");

    enlace.append(textoEnlace);
    articulo.append(enlace); // se consigue agregar el nodo 

    if (i=== 0){
        articulo.classList.add("articuloAmarillo");
    }

    if (i  ===  (articulos.length - 1)){
        articulo.classList.add("articuloUlti");

    }

});


// MODIFICACIONES   

const tarjeta = document.querySelector("#tarjeta");

console.log(tarjeta);

tarjeta.textContent = "Modifique contenido con text Content" ;
 // aparte de ver con esto el contenido se puede cambiar 

tarjeta.innerHTML = " <strong> Contenido en HTML de la tarjeta </strong> ";
// en algunos casos puedes dar crosssidescripting 

tarjeta.setAttribute("data-id", 12);
tarjeta.setAttribute("class", "hola");

// agregar clases de diferente forma

console.log(tarjeta.getAttribute("data-id")); 
// conseguir el valor de atributo 

// modificacion de estilos

tarjeta.style.border  = "1px solidblue" ;

tarjeta.style.background = "steelblue" ;
tarjeta.style.padding = "30px" ;


// CREAR ELEMENTOS DENTRO DEL DOM 


// añadir
tarjeta.classList.add("destacar2");
 
// eliminar
tarjeta.classList.remove("destacar2");

tarjeta.classList.remove("remarcado");

// toggle 
// si existe la quita si no la pone 
tarjeta.classList.toggle("remarcado");

//  crear elementos demanera constante

const titular = document.createElement("h2");

titular.textContent = " agregado con  create element tarjeta";
// tarjeta.append(titular);

// para agregar al principio sin usar append
// (insert before)

tarjeta.insertBefore(titular, tarjeta.firstChild);

// tarjeta.querySelector("Strong").remove();