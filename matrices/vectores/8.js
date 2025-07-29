/**
 * Se tiene un vector con las notas de un grupo de 30 estudiantes. Hallar y mostrar la nota
 * más alta y la más baja, cuántas personas perdieron y la nota promedio del grupo.
 */

const notas = [];
// Generar 30 notas aleatorias entre 0 y 5
for (let i = 0; i < 30; i++) {
    notas.push(Number((Math.random() * 5).toFixed(2)));
}

let notaAlta = notas[0];
let notaBaja = notas[0];
let suma = 0;
let perdieron = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaAlta) notaAlta = notas[i];
    if (notas[i] < notaBaja) notaBaja = notas[i];
    if (notas[i] < 3) perdieron++;
    suma += notas[i];
}

const promedio = (suma / notas.length).toFixed(2);

console.log(`Notas del grupo: ${notas.join(', ')}`);
console.log(`Nota más alta: ${notaAlta}`);
console.log(`Nota más baja: ${notaBaja}`);
console.log(`Cantidad de personas que perdieron: ${perdieron}`);
console.log(`Promedio del grupo: ${promedio}`);