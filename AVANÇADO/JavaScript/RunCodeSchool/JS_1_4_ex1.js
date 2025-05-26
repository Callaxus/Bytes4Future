function superDigito(numero) {
    return superDigito(somaDosDigitos(numero))
}

function somaDosDigitos(numeros) {
    return (numeros % 10) + somaDosDigitos(Math.floor(numeros / 10))
}





function superDigito(numero) {
    if (numero < 10) return numero;
    return superDigito(somaDosDigitos(numero));
}

function somaDosDigitos(numeros) {
    if (numeros < 10) return numeros;
    return (numeros % 10) + somaDosDigitos(Math.floor(numeros / 10));
}