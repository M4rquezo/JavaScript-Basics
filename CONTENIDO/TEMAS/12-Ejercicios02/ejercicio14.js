  /*Un DJ no sabe que genero musical poner en su fiesta...
  
  Preguntale al usuario que genero

  (rock, pop, salsa, cumbia, reggaeton) 
  le gusta y dependiendo de su respuesta imprime un mensaje diferente.*/

let genero = prompt
("¿Qué género musical te gusta?(rock, pop, rap, cumbia, reggaeton)");

switch (genero) {
    case "rock":
        alert(" Sonando Pink Floyd - Time");
        break;
    case "pop":
        alert(" Sonando Taylor Swift - Shake It Off");
        break;  
    case "rap":
        alert(" Sonando Eminem - Lose Yourself");
        break;
    case "cumbia":
        alert(" Sonando Carlos Vives - La Vida Es Un Carnaval");
        break;
    case "reggaeton":
        alert(" Sonando bad bunny - debi tirar mas fotos");
        break;
    default:
        alert(" musica no disponible");
}