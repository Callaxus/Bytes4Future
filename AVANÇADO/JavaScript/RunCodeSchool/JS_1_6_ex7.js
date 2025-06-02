function arrayDeZeroAN(n){
    let ray=[];
    if (n<0){
        return "Por favor insira um número superior a 0.";
        }else if(n===0){
            return [0];
        }else{
        return arrayDeZeroAN(n-1).concat(n);
    }
}

console.log(arrayDeZeroAN(9))