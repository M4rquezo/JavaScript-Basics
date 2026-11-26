/* 

SUPER EJERCICIO JS

Crea una aplicacion web en la que puedas añadir, mostrar y eliminar
tus pelicuilas favoritas

Cada peli que guardes debe tener:

-Titulp de la pelicula
-fecha de guardado
- Puntuacion de popularidad /un valor aleatorio entre 1 y 100)

Las peliculas deben mantenerse guardads aunque se recargue la pagina, y se debe poder eliminar cualquiera de ellas 
de la lista en cualquier momento.

Tareas:

V -E39 - Crea el formulario
V -40 - Funcion para guardar peliculas con los datos necesarios
V -41 - Funcion para mostrar peliculas extraidas del LocalStorage
V -E42 - Haz que las peliculas carguen automaticamente al abrir la web.
V -E43 - Funcion para eliminar peliculas

*/

function eliminar(indice) {
    alert("Eliminado");

    // Sacar todas las peliculas (array de obj)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    //Eliminar pelicula del indice
    pelisGuardadas.splice(indice, 1);

    //Actualizar array de localstorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    //Listado actualizado 
    mostrar();
}

function mostrar() {
    // Seleccionar la etiquieta del listado 
    let listado = document.querySelector("#listado");
    listado.innerHTML = "";

    //Sacar peliculas de locaStorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

    // Si no hay pelis, mostrar mensaje
    if (pelisGuardadas.length === 0) {
        listado.innerText = "Aun, Nada que mostar ";

        return false;
    }

    // Recorrer  pelis y mostar

    pelisGuardadas.forEach((pelicula, indice) => {

        const peliArticle = document.createElement("article");

        peliArticle.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <p>Fecha: ${pelicula.fecha}</p>
        <p>Popularidad: ${pelicula.popularidad}</p>
     `;

        // Crear boton y bindear evento

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", () => eliminar(indice));

        peliArticle.appendChild(eliminarBtn);
        peliArticle.appendChild(document.createElement("hr"));


        listado.appendChild(peliArticle);
    });

    return true;

}

function guardar() {

    //Seleccionar la caja de texto y sacar tu valor
    let campoT = document.querySelector("#titulo");
    let titulo = campoT.value;

    // Validacion 

    if (titulo.trim() === "") {
        alert("Por favor, mete el titulo de la pelicula!!!");


        return false;

    }

    //Conseguir fecha actual 

    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    console.log(fechaActual);

    //Generar un numero aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    console.log(popularidad);


    //Crear objeto pelicula

    let pelicula = {
        titulo,
        fecha: fechaActual,
        popularidad

    };

    console.log(pelicula);


    //Sacar todas las peliculas (array de objetos)

    let peliculasguardadas = JSON.parse(localStorage.getItem("peliculas"));

    if (!peliculasguardadas) {

        peliculasguardadas = [];
    }


    //Añadir al array la nueva peli

    peliculasguardadas.push(pelicula);

    //Guardar todo en el localStorage

    localStorage.setItem("peliculas", JSON.stringify(peliculasguardadas));

    //Limpiar el campu de texo para poner una nueva peli

    campoT.value = "";


    // Mostrar las peliculas  en pantalla 
    mostrar();

    // para que la funcion devuelva algo
    return true;
}

//E42

window.addEventListener("load", () => {

    //cargar todas las peliculas por defecto 
    mostrar();

    // Aplicar evento a formulario para guardar.

    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        guardar();

    });

});

