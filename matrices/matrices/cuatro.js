/*
Las notas de una clase se tienen almacenadas en una matriz llamada clase de 30 x 5
elementos (30 alumnos x 5 asignaturas), realizar un algoritmo que permita calcular lo
siguiente:
a. El promedio de cada estudiante.
b. El promedio de la clase en cada asignatura.
c. El promedio general de la clase.
 */

const clase = [
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [5,5,5,5,5],
]

console.log("Promedio de cada estudiante:");
for (let i = 0; i < clase.length; i++) {
    let suma = 0;
    for (let j = 0; j < clase[i].length; j++){
        suma += clase[i][j];
    }
    let promedio = suma / clase[i].length;
    console.log("Estudiante:", i+1,": ","promedio: ", promedio);
}

console.log("Promedio de la clase en cada asignatura:");
for (let j = 0; j < clase[0].length; j++) {
    let suma = 0;
    for (let i = 0; i < clase.length; i++) {
        suma += clase[i][j];
    }
    let promedio = suma / clase.length;
    console.log("asignatura: ", j+1, "promedio: ", promedio);
}

console.log("Promedio General de la clase:")
let sumaTotal = 0;
let cantidadNotas = clase.length * clase[0].length;
for (let i = 0; i < clase.length; i ++) {
    for (let j = 0; j < clase[i].length; j++) {
        sumaTotal += clase[i][j];
    }
}
let promedioGeneral = sumaTotal / cantidadNotas;
console.log("promedio general de la clase:", promedioGeneral)