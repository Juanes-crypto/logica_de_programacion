//Determine si un valor que es ingresado por el usuario, se encuentra en una matriz y mostrar
//su posición. Para lo anterior, utilice una búsqueda secuencial, recorriendo la matriz por
//columnas. Si encuentra el valor, hacer rompimiento de ciclos.
let valor = 4;
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for (let i = 0; i < matriz.length; i ++){
    for (let j = 0; j < matriz[i].length; j ++){
        if (valor === matriz[i][j]){
            console.log("valor:",valor, "encontrado en la posicion:",i,j);
        } else continue;
    }
}