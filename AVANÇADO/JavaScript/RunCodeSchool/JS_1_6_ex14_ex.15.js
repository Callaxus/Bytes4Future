function somaDiagonalPrincipal(matrizquadrada) {
    let sum=0;
    for (let i=0; i<matrizquadrada.length; i++){
        sum += matrizquadrada[i][i];
    }
    return sum;
}

function somaDiagonalSecundaria(matrizquadrada) {
    let sum = 0;
    let n = matrizquadrada.length;
    for (let i = 0; i < n; i++) {
        sum += matrizquadrada[i][n - 1 - i];
    }
    return sum;
}