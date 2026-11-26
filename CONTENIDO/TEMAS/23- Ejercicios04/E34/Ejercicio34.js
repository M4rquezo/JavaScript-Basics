let pequena = document.querySelector("#pequena");
let mediana = document.querySelector("#mediana");
let grande = document.querySelector("#grande");

let ventana = (anchura, altura) => {

    window.open("https://www.linkedin.com/in/damarquezo/",
        "_blank",
    `width=${anchura},height=${altura}`);

      return true;

};

pequena.addEventListener("click", () => {

    ventana(450, 350 );

});

mediana.addEventListener("click", () => {
    ventana(650, 550);
});


grande.addEventListener("click", () => {

    ventana(850, 750);

});