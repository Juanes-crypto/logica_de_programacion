/**
 * Se tiene un vector de 365 elementos, cada elemento corresponde a la estación para ese
 * día (V ‐ Verano, I‐ Invierno, O ‐ Otoño, P ‐ Primavera). Calcular el número de días de verano
 * durante el año.
 */

const estaciones = [];
const opciones = ['V', 'I', 'O', 'P'];

// Generar estaciones aleatorias para cada día del año
for (let i = 0; i < 365; i++) {
    estaciones.push(opciones[Math.floor(Math.random() * opciones.length)]);
}

// Contar los días de verano
let diasVerano = 0;
for (let i = 0; i < estaciones.length; i++) {
    if (estaciones[i] === 'V') diasVerano++;
}

console.log(`Número de días de verano en el año: ${diasVerano}`);