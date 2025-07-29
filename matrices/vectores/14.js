/**
 * Teniendo un vector de 144 elementos numéricos enteros diferentes, realice lo siguiente:
‐ Buscar el elemento mayor y en qué posición lo encontró.
‐ Sumar los elementos almacenados en las posiciones pares y mostrar la suma.
‐ Buscar cuántos elementos del vector son mayores de 80 y menores de 120.
‐ Hallar cuántos elementos del vector son múltiplos de 7.
‐ Mostrar los elementos del vector de forma inversa.
 */

const vector = [];
// Generar 144 números enteros diferentes entre 1 y 200
while (vector.length < 144) {
    let num = Math.floor(Math.random() * 200) + 1;
    if (!vector.includes(num)) vector.push(num);
}

// Buscar el elemento mayor y su posición
let mayor = vector[0];
let posicionMayor = 0;
for (let i = 1; i < vector.length; i++) {
    if (vector[i] > mayor) {
        mayor = vector[i];
        posicionMayor = i;
    }
}

// Sumar los elementos en posiciones pares (índices 0, 2, 4, ...)
let sumaPares = 0;
for (let i = 0; i < vector.length; i += 2) {
    sumaPares += vector[i];
}

// Buscar cuántos elementos son mayores de 80 y menores de 120
let entre80y120 = 0;
for (let i = 0; i < vector.length; i++) {
    if (vector[i] > 80 && vector[i] < 120) entre80y120++;
}

// Hallar cuántos elementos son múltiplos de 7
let multiplos7 = 0;
for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 7 === 0) multiplos7++;
}

// Mostrar los elementos del vector de forma inversa
console.log("Elementos en orden inverso:");
for (let i = vector.length - 1; i >= 0; i--) {
    console.log(vector[i]);
}

console.log(`Elemento mayor: ${mayor} en la posición ${posicionMayor}`);
console.log(`Suma de elementos en posiciones pares: ${sumaPares}`);
console.log(`Cantidad de elementos mayores de 80 y menores de 120: ${entre80y120}`);
console.log(`Cantidad de elementos múltiplos de 7: ${multiplos7}`);