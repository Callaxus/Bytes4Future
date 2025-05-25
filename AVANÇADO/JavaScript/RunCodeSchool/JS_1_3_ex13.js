function contaNumeroDeDivisoesPorDois(n){
let ctr=0;
    for(;Number.isInteger(n/2);n=n/2){
        ctr++
    }
    return ctr;
}
console.log(contaNumeroDeDivisoesPorDois(127));
console.log(contaNumeroDeDivisoesPorDois(10));
console.log(contaNumeroDeDivisoesPorDois(20));

