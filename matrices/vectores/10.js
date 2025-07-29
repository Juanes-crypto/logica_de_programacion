/**
 * Cargar 2 vectores, uno con los códigos de los estudiantes que perdieron C, el segundo con los
 * códigos de los estudiantes que perdieron Java. Se pide crear otro arreglo formado por los
 * códigos de los estudiantes que perdieron ambas materias. Mostrar el arreglo resultante.
 */

const perdieronC = [101, 102, 103, 104, 105, 106];
const perdieronJava = [104, 105, 107, 108, 101, 110];

// Encontrar los códigos que están en ambos vectores
const perdieronAmbas = perdieronC.filter(codigo => perdieronJava.includes(codigo));

console.log(`Códigos que perdieron C: ${perdieronC.join(', ')}`);
console.log(`Códigos que perdieron Java: ${perdieronJava.join(', ')}`);
console.log(`Códigos que perdieron ambas materias: ${perdieronAmbas.join(', ')}`);