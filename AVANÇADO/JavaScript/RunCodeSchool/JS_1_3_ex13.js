function contaNumeroDeDivisoesPorDois(n){
    let ctr=0;
    if(n>=0&& typeof n === "number"){
        for(let i = n; i >= 2 && i % 2 === 0;i= i/2){
            ctr++;
        }
            return ctr;
    }
    return 0;
}