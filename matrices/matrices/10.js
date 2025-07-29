/*
Diseñar un algoritmo para organizar una matriz columna por columna en forma ascendente.
*/

function ordenarColumnasAscendente(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    // Para cada columna
    for (let j = 0; j < columnas; j++) {
        // Extraer la columna
        let columna = [];
        for (let i = 0; i < filas; i++) {
            columna.push(matriz[i][j]);
        }
        // Ordenar la columna
        columna.sort((a, b) => a - b);
        // Volver a colocar los valores ordenados en la matriz
        for (let i = 0; i < filas; i++) {
            matriz[i][j] = columna[i];
        }
    }
    return matriz;
}

// Ejemplo de uso:
const matriz = [
    [5, 2, 9],
    [1, 8, 3],
    [7, 4, 6]
];

console.log("Matriz original:");
console.table(matriz);

const matrizOrdenada = ordenarColumnasAscendente(matriz);

console.log("Matriz ordenada columna por columna:");
console.table(matrizOrdenada);

