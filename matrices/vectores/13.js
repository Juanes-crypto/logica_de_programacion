/**
 * Elabore un algoritmo que lea un vector de N elementos. Si el número de elementos es par
 * intercambiar el elemento i‐ésimo por el elemento i‐ésimo+1. Mostrar el vector final. Si el
 * número de elementos es impar, indicarlo en un mensaje que no es posible hacer el
 * intercambio y forzar al usuario hasta que digite un número de elementos par. 
 */

// Ejemplo de entrada, puedes cambiar el vector y N
let N = 8; // Cambia este valor para probar
let vector = [1, 2, 3, 4, 5, 6, 7, 8];

while (N % 2 !== 0) {
    console.log("El número de elementos es impar. Por favor ingrese un número par.");
    // Simulación de entrada: aquí deberías pedir al usuario el nuevo valor de N y el vector
    N = 8; // Cambia este valor manualmente si pruebas en consola
    vector = [1, 2, 3, 4, 5, 6, 7, 8]; // Cambia el vector según N
}

for (let i = 0; i < N; i += 2) {
    // Intercambiar el elemento i con el elemento i+1
    let temp = vector[i];
    vector[i] = vector[i + 1];
    vector[i + 1] = temp;
}

console.log(`Vector final: ${vector}`);