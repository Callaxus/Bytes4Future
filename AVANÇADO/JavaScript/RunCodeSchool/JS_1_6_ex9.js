function paresDeZeroAN(n){
    if(n<0){
        return "Por favor insira um número superior a 0.";
    }else if(n===0){
        return [0];
    }else{
        return n%2===0 ? paresDeZeroAN(n-1).concat(n) : paresDeZeroAN (n - 1);
    }
}