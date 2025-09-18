// Declaración de variable con mi nombre
let nombre = "ChatGPT";
console.log("Hola, mi nombre es " + nombre);

// Declaración y suma de dos números
let num1 = 8;
let num2 = 12;
let suma = num1 + num2;
console.log("La suma es: " + suma);

// Uso de operadores lógicos
console.log("¿10 > 5 y 5 < 2? " + (10 > 5 && 5 < 2));

// Variables con let y const
let edad = 25;
const pais = "Argentina";

edad = 30; // ✅ let se puede cambiar
// pais = "Chile"; ❌ const no se puede reasignar

console.log("Edad actual: " + edad);
console.log("País: " + pais);

// Comentario: este código demuestra conceptos básicos de JavaScript

// Variable booleana en operación lógica
let esMayor = true;
console.log("¿Es mayor y 10 > 5? " + (esMayor && 10 > 5));

// Imprimir tipo de dato
console.log("El tipo de 'nombre' es: " + typeof nombre);

// Declarar un array y mostrar un elemento
let colores = ["rojo", "verde", "azul"];
console.log("Un color es: " + colores[1]);

// Operación con %
let resto = 17 % 3;
console.log("El resto de 17 ÷ 3 es: " + resto);

// Declarar variable sin valor
let sinValor;
console.log("Valor inicial de sinValor: " + sinValor);