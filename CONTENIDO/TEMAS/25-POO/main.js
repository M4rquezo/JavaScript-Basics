// Programacion Orienada a Objetos 
// POO  OOP
// paradigma de programacion para organizar donde creamos objetos representantes 
// 
// Propiedades y metodos 


//Molde
class Gato {
    
    constructor (nombre, raza, color){
            // Propiedades o atributos
            this.nombre = nombre;
            this.raza = raza;
            this.color = color;
    }

    // Metodos (Acciones)

    maullar () {
        console.log(`${this.nombre} dice : ¡Miau Miau!`);
    }
    
    saltar (){
        console.log(`${this.nombre} ha saltado`);
    }

 
 
    // getter y Setter 

    getRaza(){
        return this.raza;
    }

    setRaza(raza){
        this.raza = raza;
    }

        //GETTER Y SETTER QUE VIENE EN JS 

    
    set guardarcolor (color) {
        this.color= color; 
    }

    get sacarcolor () {
        return this.color;
    }
// Se convierten en propiedades de la clase no en metodos
// no se invocan con ()

/* METODO STATIC */ 

static saludar () {

    alert("Te quiero miau");
} // metodo esta hecho para ser llamado sin crear el objeto


}



let miGato = new Gato("Mowgli", "Americano", " Multicolor" );
// nosotros definimos datos en un segundo momento

miGato.setRaza("Persa")

console.log(miGato.raza);

miGato.maullar();
miGato.saltar();

miGato.guardarcolor = "Negro" ;

console.log(miGato.sacarcolor);


Gato.saludar();


class GatoEspecial extends Gato {
    
   constructor(nombre, raza, color, habilidad){

        super( nombre , raza, color);

        this.habilidad = habilidad;

   }

   setHabilidad (habilidad) {
        this.habilidad = habilidad; 
   }

   getHabilidad () {
        return this.habilidad;
   }

   ejecutar () {

        console.log (`${this.nombre} esta usando habilidad ${this.habilidad} para ayudar a su dueño `);
   }

} 

let superGato = new GatoEspecial( "Honey", "Europeo", "Naranja Atigrada", "Arañazo" )

superGato.ejecutar ();

console.log(superGato.getRaza());

superGato.saltar();
 




/*
let miGato2 = new Gato("July", "PeloCorto", "Gris");

console.log(miGato2.raza);

miGato2.maullar();
miGato2.saltar(); 

*/ 