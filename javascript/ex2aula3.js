function areaRect(a, b){
    if (typeof a != "number" || typeof b !="number"){
        return;
    }
    return a*b;
}

let ladoa=parseFloat(prompt("Insira o valor de um lado:"));
let ladob=parseFloat(prompt("Insira o valor de um lado:"));
result = areaRect(ladoa, ladob);
alert(`A area do rectangulo é:${result}`);
