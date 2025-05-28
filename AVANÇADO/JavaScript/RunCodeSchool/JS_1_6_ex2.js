function tempoEmPalavras(horas, minutos){
const horasmap= new Map([
    [0,"meia noite"],[12,"meio dia"],
    [1,"uma"],[13,"uma"],
    [2,"duas"],[14,"duas"],
    [3,"três"], [15,"três"],
    [4,"quatro"],[16,"quatro"],
    [5,"cinco"],[17,"cinco"],
    [6,"seis"],[18,"seis"],
    [7,"sete"],[19,"sete"],
    [8,"oito"], [20,"oito"],
    [9,"nove"],[21,"nove"],
    [10,"dez"], [22,"dez"],
    [11,"onze"], [23,"onze"]]);
const minutosmap= new Map([
    [0,"em ponto"],[1,"um"],[2,"dois"],
    [3,"três"],[4,"quatro"],[5,"cinco"],
    [6,"seis"],[7,"sete"],[8,"oito"],
    [9,"nove"],[10,"dez"],[11,"onze"],
    [12,"doze"],[13,"treze"],[14,"catorze"],
    [15,"um quarto"],[16,"dezasseis"],[17,"dezassete"],
    [18,"dezoito"],[19,"dezanove"],[20,"vinte"],
    [21,"vinte e um"],[22,"vinte e dois"],[23,"vinte e três"],
    [24,"vinte e quatro"],[25,"vinte e cinco"],[26,"vinte e seis"],
    [27,"vinte e sete"],[28,"vinte e oito"],[29,"vinte e nove"],
    [30,"meia"],[45,"um quarto para"]
]);
    if(horas<0||horas>23||minutos<0||minutos>59){return "Valores fora do formato!"
    }else if(minutos===0){
        return horasmap.get(horas)+" "+minutosmap.get(0);
    }else if(minutos===45){
        if(horas===23){
            return minutosmap.get(minutos)+" a "+horasmap.get(0);
        }else if(horas===11){
            return minutosmap.get(minutos)+" o "+horasmap.get(12);
        }else{
            return minutosmap.get(minutos)+" as "+horasmap.get(horas+1);}
    }else if(minutos >30){
        if(horas===23){
            return minutosmap.get(60-minutos)+" para a "+horasmap.get(0);
        }else if(horas===11){
            return minutosmap.get(60-minutos)+" para o "+horasmap.get(12);
        }else{
            return minutosmap.get(60-minutos)+" para as "+horasmap.get(horas+1);}
    }else{
        return horasmap.get(horas)+" e "+minutosmap.get(minutos);
    }
}


//Depois do minuto 30, deve ser dito, por exemplo, "dez para as cinco" (T-T) minutosmap.get(60-minutos)
// isto a partir dos 30 é inutil, mas deu trabalho fazer portanto nao vou apagar

/* in memoriam ...
,[31,"trinta e um"],[32,"trinta e dois"],[33,"trinta e três"],[34,"trinta e quatro"],[35,"trinta e cinco"],
    [36,"trinta e seis"],[37,"trinta e sete"],[38,"trinta e oito"],[39,"trinta e nove"],
    [40,"quarenta"],[41,"quarenta e um"],[42,"quarenta e dois"],[43,"quarenta e três"],[44,"quarenta e quatro"],,
    [46,"quarenta e seis"],[47,"quarenta e sete"],[48,"quarenta e oito"],[49,"quarenta e nove"],
    [50,"cinquenta"],[51,"cinquenta e um"],[52,"cinquenta e dois"],[53,"cinquenta e três"],[54,"cinquenta e quatro"],[55,"cinquenta e cinco"],
    [56,"cinquenta e seis"],[57,"cinquenta e sete"],[58,"cinquenta e oito"],[59,"cinquenta e nove"] */

console.log(tempoEmPalavras(0, 0));
console.log(tempoEmPalavras(12, 0));
console.log(tempoEmPalavras(1, 0));
console.log(tempoEmPalavras(10, 15));
console.log(tempoEmPalavras(10, 30));
console.log(tempoEmPalavras(10, 45));
console.log(tempoEmPalavras(23, 45));
console.log(tempoEmPalavras(11, 45));
console.log(tempoEmPalavras(22, 45));
console.log(tempoEmPalavras(10, 40));
console.log(tempoEmPalavras(23, 59));
console.log(tempoEmPalavras(11, 59));
console.log(tempoEmPalavras(5, 22));
console.log(tempoEmPalavras(15, 27));
console.log(tempoEmPalavras(20, 29));
console.log(tempoEmPalavras(20, 31));
console.log(tempoEmPalavras(23, 30));
console.log(tempoEmPalavras(12, 16));
console.log(tempoEmPalavras(-1, 10));
console.log(tempoEmPalavras(10, 60));