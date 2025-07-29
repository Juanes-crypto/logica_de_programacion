/*
Hacer un algoritmo para intercambiar los elementos entre dos matrices.
*/
let matrizA = [1, 2, 3, 4, 5];
let matrizB = [6, 7, 8, 9, 10];

for (let i = 0; i < matrizA.length; i++) {
    let guardar = matrizA[i];
    matrizA[i] = matrizB[i];
    matrizB[i] = guardar;
}

console.log("Matriz A:", matrizA); 
console.log("Matriz B:", matrizB);