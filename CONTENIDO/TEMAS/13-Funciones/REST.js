    //  P A R A M E T R O S
    // REST
//forma de mandar parametros indefinidos 
// resto se utiliza con los tres puntos ...
    function mispeliculas (pelicula1,pelicula2,
        ...Resto_De_Peliculas){

        console.log(pelicula1);
        console.log(pelicula2);

        console.log(Resto_De_Peliculas);
        //coleccion de variables (array)
    }
    mispeliculas 
    ("Matrix",
     "Godfather", 
     "Scarface",
      "Terminator 2",
       "Jurassic Park",
        "Sinlimites",);


