    /* 

    Ejercicio 27:

    Crea un array de personaes de peliculas y clasificalos en grupos
    (heroes, villanos, etc.).


    Muestraun mensaje para cada grupo.

    */

    const personajes = [
        
        "V:Joker",
        "H:Batman",
        "V:Green Goblin",
        "H:Spiderman",
        "V:Voldemort",
        "H:Harry P",
                        
    ]

    let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
    let villanos =  personajes.filter(personaje => personaje.startsWith("V:"));

    console.log("heroes: ");

    heroes.forEach(heroe => {
        console.log(heroe.split(":")[1]);
    });

    console.log("******************");
   //con split es necesario indicar que parte quieres mostrar de la division que se creo (":")[1]); 
    console.log("villanos:");

    villanos.forEach(villanos => {
        console.log(villanos.slice (2));
    });

    // con slice se corta en el caracter elegido este seria el 2 por tanto se pierde V: