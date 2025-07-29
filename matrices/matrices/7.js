/* 
Hacer un algoritmo que cree una matriz y que posteriormente, cada elemento de esa matriz
sea almacenado en un vector X, el cual debe ser ordenado descendentemente.
*/

const array = [];
const tamaño = 4;
const llenar = 2;
for (let i = 0; i < tamaño; i++) {
    array[i] = i*llenar;
}

const vectorX = [...array];

vectorX.sort((a, b) => b - a);

console.log(vectorX)
