/**
 * De los 50 elementos de un vector, muestre cuántos son: pares, impares, negativos y positivos.
 */

const vector = [];
// Generar 50 números aleatorios entre -100 y 100
for (let i = 0; i < 50; i++) {
    vector.push(Math.floor(Math.random() * 201) - 100);
}

let pares = 0;
let impares = 0;
let negativos = 0;
let positivos = 0;

for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) pares++;
    else impares++;

    if (vector[i] < 0) negativos++;
    else if (vector[i] > 0) positivos++;
}

console.log(`Cantidad de pares: ${pares}`);
console.log(`Cantidad de impares: ${impares}`);
console.log(`Cantidad de negativos: ${negativos}`);
console.log(`Cantidad de positivos: ${positivos}`);