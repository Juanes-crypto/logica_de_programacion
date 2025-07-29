/**
 * Crear un vector de 20 elementos con valores numéricos diferentes. Hallar el mayor valor y su
 * posición y el valor promedio.
 */

const vector = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function obtenerMayor(vector) {
    let mayor = vector[0];
    let posicion = 0;
    let suma = vector[0];

    for (let i = 1; i < vector.length; i++) {
        suma += vector[i];
        if (vector[i] > mayor) {
            mayor = vector[i];
            posicion = i;
        }
    }

    const promedio = suma / vector.length;
    return { mayor, posicion, promedio };
}

const resultado = obtenerMayor(vector);
console.log(`Mayor valor: ${resultado.mayor}`);
console.log(`Posición: ${resultado.posicion}`);
console.log(`Valor promedio: ${resultado.promedio}`);