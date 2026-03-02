const readline = require('prompt-sync')();

let m = parseInt(readline("Ingrese el número de filas (m): "));
let n = parseInt(readline("Ingrese el número de columnas (n): "));
let caracter = readline("Ingrese el carácter a utilizar: ");

for (let i = 0; i < m; i++) {
    let linea = "";
    for (let j = 0; j < n; j++) {
        linea += caracter;
    }
    console.log(linea);
}