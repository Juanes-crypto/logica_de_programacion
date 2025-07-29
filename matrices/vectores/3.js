/**
 * Llenar un vector con los 10 primeros múltiplos de 3 y luego sume los elementos del vector.
Mostrar la suma de los elementos.
 */

const vector = [];

for(let num = 0; num <= 30; num++){
    let suma = 0;
    vector.push(num*3);
    suma += num;
    console.log(suma);
}

console.log(vector)