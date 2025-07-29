//Buscar el valor mayor y el valor menor en una matriz dada y mostrarlos.
const matriz =  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

function obtenerMenorMayor(matriz) {
    let menor =matriz[0][0];
    let mayor =matriz[0][0];
    for (numero of matriz) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = obtenerMenorMayor(matriz)
console.log(numeros);

