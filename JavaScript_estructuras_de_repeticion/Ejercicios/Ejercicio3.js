function esPrimo(numero) {
    if (numero < 2) return false;
    // Un numero primo solo es divisible por 1 y por sí mismo
    for (let i = 2; i < numero; i++) {  // Cambiado de <= a <
        if (numero % i === 0) {
            return false; // El número no es primo
        }
    }
    return true; // El número es primo
}

console.log("Los números primos del 1 al 1000 son: ");
for (let i = 2; i <= 1000; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}