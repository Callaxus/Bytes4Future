function contaNumeroDeDivisoesPorDois(n){
    if(!Number.isInteger(n) || n<2){
        return 0;
    }return 1+contaNumeroDeDivisoesPorDois(n/2);
}