/**
 * En vector de 40 elementos numéricos llamado totales, se requiere ir sumando y mostrando
 * cada elemento, siempre y cuando sea mayor al primer elemento y menor al elemento 25.
 * Finalmente, muestre el total de los elementos que fueron sumados.
 */

const totales = [];
// Generar 40 números aleatorios entre 1 y 100
for (let i = 0; i < 40; i++) {
    totales.push(Math.floor(Math.random() * 100) + 1);
}

const primerElemento = totales[0];
const elemento25 = totales[24];

let suma = 0;

console.log(`Primer elemento: ${primerElemento}`);
console.log(`Elemento 25: ${elemento25}`);
console.log("Elementos sumados:");

for (let i = 0; i < totales.length; i++) {
    if (totales[i] > primerElemento && totales[i] < elemento25) {
        suma += totales[i];
        console.log(totales[i]);
    }
}

console.log(`Total de los elementos sumados: ${suma}`);