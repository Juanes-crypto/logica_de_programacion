/**
 * Crear 2 vectores de "N" posiciones cada uno. Con el resultado de la multiplicación de
 * elemento por elemento entre cada vector, formar otro arreglo; muestre posteriormente, los
 * elementos del vector resultante.
 */

const N = 10; // Puedes cambiar el valor de N
const vector1 = [];
const vector2 = [];
const resultado = [];

// Generar valores aleatorios para ambos vectores
for (let i = 0; i < N; i++) {
    vector1.push(Math.floor(Math.random() * 10) + 1);
    vector2.push(Math.floor(Math.random() * 10) + 1);
}

// Multiplicar elemento por elemento y guardar en resultado
for (let i = 0; i < N; i++) {
    resultado.push(vector1[i] * vector2[i]);
}

console.log(`Vector 1: ${vector1.join(', ')}`);
console.log(`Vector 2: ${vector2.join(', ')}`);
console.log(`Vector resultante: ${resultado.join(', ')}`);