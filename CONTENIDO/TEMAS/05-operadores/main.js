// Operadores de aritmeticos

let a = 10;
let b = 5;
let suma = a + b; // suma
let resta = a - b; // resta
let multiplicacion = a * b; // multiplicación
let division = a / b; // división
let modulo = a % b; // módulo resto
let potencia = a ** b; // potencia

console.log(a, b, suma, resta, multiplicacion, division, modulo, potencia);

// Operadores de asignación 

let numero  = 10;
numero += 5; // numero = 10 + 5
numero -= 3; // numero = 15 - 3
numero *= 2; // numero = 12 * 2
numero /= 4; // numero = 24 / 4
numero %= 3; // numero = 6 % 3          

console.log(numero);

// Operadores de comparación

let x = 10;
console.warn(x == "10"); // true, compara solo el valor
console.warn(x === "10"); // false, compara el valor y el tipo de dato
console.warn(x != "10"); // false, compara solo el valor
console.warn(x !== "10"); // true, compara el valor y el tipo de dato
console.warn(x > 5); // true, x es mayor que 5
console.warn(x < 20);// true, x es menor que 20
console.warn(x >= 10); // true, x es mayor o igual a 10
console.warn(x <= 10); // true, x es menor o igual a 10     

// Operadores lógicos

let Mayordeedad = true;
let tieneentrada = true;    
console.warn(Mayordeedad && tieneentrada); // true, ambas condiciones son verdaderas
console.warn(Mayordeedad || tieneentrada); // true, al menos una de las condiciones es verdadera
console.warn(!Mayordeedad); // false, niega la condición


// Cadena 
let mensaje1 = "Hola";
let mensaje2 = "que tal estas";

let mensaje_total = mensaje1 + " " + mensaje2; // concatenación de cadenas

mensaje_total += " espero que bien"; // mensaje_total = mensaje_total + " espero que bien"      
console.log (mensaje_total);

// Incremento y decremento

let cifra = 1200;
cifra++; // cifra = 1200+1
cifra--; // cifra = 1201-1
console.log(cifra); 


