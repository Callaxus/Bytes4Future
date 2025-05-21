function aplica(n,fun){
    return fun(n);
}
function soma(n){
    return n+n;
}

console.log(aplica(5,(n)=>n+n));
console.log(aplica(5,soma));

// declarar uma funçao que recebe um numero e outra função e returna o resultado do numero inserido na 2a função;