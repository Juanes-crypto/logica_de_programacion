const matris = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log("Matriz original:", matris);

const valor = 6;
console.log("Valor a multiplicar:", valor);

let nuevaMatriz = []; 

for (let i = 0; i < matris.length; i++) {
  nuevaMatriz[i] = []; 
    for (let j = 0; j < matris[i].length; j++) {
    nuevaMatriz[i][j] = matris[i][j] * valor;
  }
}

console.log("Matriz resultante:");
console.table(nuevaMatriz);