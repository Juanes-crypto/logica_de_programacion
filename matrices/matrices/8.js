/*
Calcular el promedio de los valores que están por encima de la diagonal principal de una
matriz dada; en caso de que la matriz no sea cuadrada, calcule el promedio de los valores de
los extremos.
*/

function promedioMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    // Verificar si la matriz es cuadrada
    if (filas === columnas) {
        // Promedio de los valores por encima de la diagonal principal
        let suma = 0;
        let contador = 0;
        for (let i = 0; i < filas; i++) {
            for (let j = i + 1; j < columnas; j++) {
                suma += matriz[i][j];
                contador++;
            }
        }
        return contador > 0 ? suma / contador : 0;
    } else {
        // Promedio de los valores de los extremos
        let extremos = [];
        // Primera fila
        extremos = extremos.concat(matriz[0]);
        // Última fila
        extremos = extremos.concat(matriz[filas - 1]);
        // Primera columna (sin repetir esquinas)
        for (let i = 1; i < filas - 1; i++) {
            extremos.push(matriz[i][0]);
        }
        // Última columna (sin repetir esquinas)
        for (let i = 1; i < filas - 1; i++) {
            extremos.push(matriz[i][columnas - 1]);
        }
        const suma = extremos.reduce((acc, val) => acc + val, 0);
        return extremos.length > 0 ? suma / extremos.length : 0;
    }
}

// Ejemplo de uso:
const matrizCuadrada = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizNoCuadrada = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

