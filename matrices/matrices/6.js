/*
Hacer un algoritmo que lea dos valores R y S. Luego, se debe llenar las posiciones pares de
una matriz con los múltiplos de R y las posiciones impares de la misma matriz con los
múltiplos de S.
*/

let R = 100;
let S = 50;

const matriz = [];
const tamañoMatris = 3
for (let i = 0; i < tamañoMatris; i++) {
    if (i %2 === 0) {
        matriz[i] = R*i;
    } else {
        matriz[i] = S*i;
    }
}
console.log(matriz);