/**
 * Se tiene un vector de 125 elementos con valores numéricos, realice lo siguiente:
‐ Hallar y mostrar el valor promedio del vector.
‐ Leer un valor x y buscar en que posición del vector se encuentra.
‐ Llene un vector con los elementos de las posiciones impares.
‐ Busque cuántos elementos del vector son múltiplos de 3 y positivos.
 */

const vector = [];
// Generar 125 números aleatorios entre -50 y 150
for (let i = 0; i < 125; i++) {
    vector.push(Math.floor(Math.random() * 201) - 50);
}

// Hallar y mostrar el valor promedio del vector
let suma = 0;
for (let i = 0; i < vector.length; i++) {
    suma += vector[i];
}
const promedio = (suma / vector.length).toFixed(2);
console.log(`Promedio del vector: ${promedio}`);

// Leer un valor x y buscar en qué posición del vector se encuentra
const x = 15; // Cambia este valor para buscar otro
const posicionesX = [];
for (let i = 0; i < vector.length; i++) {
    if (vector[i] === x) posicionesX.push(i);
}
if (posicionesX.length > 0) {
    console.log(`El valor ${x} se encuentra en las posiciones: ${posicionesX.join(', ')}`);
} else {
    console.log(`El valor ${x} no se encuentra en el vector.`);
}

// Llenar un vector con los elementos de las posiciones impares
const impares = [];
for (let i = 1; i < vector.length; i += 2) {
    impares.push(vector[i]);
}
console.log(`Elementos en posiciones impares: ${impares.join(', ')}`);

// Buscar cuántos elementos del vector son múltiplos de 3 y positivos
let multiplos3Positivos = 0;
for (let i = 0; i < vector.length; i++) {
    if (vector[i] > 0 && vector[i] % 3 === 0) multiplos3Positivos++;
}
console.log(`Cantidad de elementos múltiplos de 3 y positivos: ${multiplos3Positivos}`);