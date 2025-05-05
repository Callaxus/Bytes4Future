function somar(a, b){
    if (typeof a != "number" || typeof b !="number"){
        return;
    }
        return a+b;
}

let a1=prompt("insira 1º valor da soma:");
let b1=prompt("insira 2º valor da soma:");
alert(`resultado da soma: ${somar(a1,b1)}`);

