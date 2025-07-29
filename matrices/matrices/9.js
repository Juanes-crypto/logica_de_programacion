/*
Calcular el promedio de los valores que están por debajo de la diagonal principal de una
matriz dada; en caso que la matriz no sea cuadrada, calcule el promedio de los valores de los
laterales.
*/

function promedioMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    // Verificar si la matriz es cuadrada
    if (filas === columnas) {
        // Promedio de los valores por debajo de la diagonal principal
        let suma = 0;
        let contador = 0;
        for (let i = 1; i < filas; i++) {
            for (let j = 0; j < i; j++) {
                suma += matriz[i][j];
                contador++;
            }
        }
        return contador > 0 ? suma / contador : 0;
    } else {
        // Promedio de los valores de los laterales (primer y último columna)
        let laterales = [];
        for (let i = 0; i < filas; i++) {
            laterales.push(matriz[i][0]); // Primera columna
            laterales.push(matriz[i][columnas - 1]); // Última columna
        }
        const suma = laterales.reduce((acc, val) => acc + val, 0);
        return laterales.length > 0 ? suma / laterales.length : 0;
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

console.log("Promedio debajo diagonal:", promedioMatriz(matrizCuadrada));
console.log("Promedio laterales:", promedioMatriz(matrizNoCuadrada));

