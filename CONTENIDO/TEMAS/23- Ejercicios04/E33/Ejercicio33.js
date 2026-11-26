       alert("Listo para el evento click?");

       let contador = 0; // donde se suma
       let numero = document.querySelector("#numeroClicks");
       //escucha el evento de representacion de click
       let btn = document.querySelector("#click");
       // boton  para guardar contador 
       
       console.log(btn);

       btn.addEventListener("click" , () => {
             
              contador++;
              if (contador === 17) {
                     numero.textContent = " Reiniciar";
                     alert("Limite alcanzado. Felicidades");
                     contador = 0;

              }else{

                     numero.textContent =contador + "clicks";
              }
              
              console.log(contador);


});