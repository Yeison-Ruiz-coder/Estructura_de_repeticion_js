const prompt = require('prompt-sync')();  // Nota los paréntesis extra

let numero = parseInt(prompt("Ingrese un número no negativo: "));

for (let i = numero; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += j;
    }
    console.log(linea);
}
