/**
 * Leer un vector de N elementos numéricos enteros y posteriormente:
 * - Mostrar cuántas veces se repite el número 10.
 * - Sumar los elementos de las posiciones pares.
 * - Mostrar los elementos del vector empezando por el último elemento.
 */

const vector = [10, 5, 7, 10, 3, 10, 8, 2, 10, 1]; // Puedes cambiar los valores y la cantidad

// Contar cuántas veces se repite el número 10
let contador10 = 0;
for (let i = 0; i < vector.length; i++) {
    if (vector[i] === 10) {
        contador10++;
    }
}

// Sumar los elementos de las posiciones pares (índices 0, 2, 4, ...)
let sumaPares = 0;
for (let i = 0; i < vector.length; i += 2) {
    sumaPares += vector[i];
}

// Mostrar los elementos del vector empezando por el último elemento
console.log("Elementos en orden inverso:");
for (let i = vector.length - 1; i >= 0; i--) {
    console.log(vector[i]);
}

console.log(`El número 10 se repite ${contador10} veces.`);
console.log(`La suma de los elementos en posiciones pares es ${sumaPares}.`);