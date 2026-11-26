/* 

*/

document.addEventListener("DOMContentLoaded", () => {

    // TODO programa JS
    
    let nuevoProducto = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#agregar");
    let listaCompra = document.querySelector("#listaCompra");

    btnAgregar.addEventListener("click", () => {

        let productoParaAgregar = nuevoProducto.value.trim();
        //Esto hace que se guarde el valor nuevo que se escucho en eñ input
        // al momento de hacer click en el boton agregar 
    
        if(productoParaAgregar){

                //crea un nuevo elemento a la lista 
                // asigna el valor del producto a ese elemento
            const productoFinal = document.createElement ("li");
            productoFinal.textContent =productoParaAgregar;

                // crea boton eliminar
                                
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                // texto del boton

                btnEliminar.addEventListener("click", () => {
                        productoFinal.remove(); 
                });
                
                productoFinal.appendChild(btnEliminar);
                productoFinal.classList.add("producto");
                //porque el boton es un hijo entonces se agrega el producto
                // al producto final se le agrega el boton eliminar como hijo 


            //añade el nuevo elemento a la lista de compra
            // li al Ul   para agregar mas de uno      
            listaCompra.appendChild(productoFinal);
            nuevoProducto.value = ""; 
        }

    });

});