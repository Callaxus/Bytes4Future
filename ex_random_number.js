/*
let unum ; 
let rnum = Math.floor(Math.random() * 10) + 1;

unum = parseInt(prompt("Insira um numero entre 1 e 10"));

if (isNaN(unum) || unum < 1 || unum > 10){
    alert("Valor fora dos Parametros! \n Insira um numero entre 1 e 10");
}else if(unum === rnum){
    alert(`Parabéns Shinji!\n RanNumber: ${rnum} O seu Numero: ${unum}` );
}else{
    while(unum !== rnum){
        alert(`Try Again\n RanNumber: ${rnum} O seu Numero: ${unum}`);
        rnum = Math.floor(Math.random() * 10) + 1;
        unum = parseInt(prompt("Insira um numero entre 1 e 10"));

        if (isNaN(unum) || unum < 1 || unum > 10){
            alert("Valor fora dos Parametros! \n Insira um numero entre 1 e 10");
        }
    }
}

*/

let unum; // user number
const rnum = Math.floor(Math.random()*10)+1; // random number, uso const pq nao vai ser alterado

unum = parseInt(prompt("Insira um numero de 1 a 10:")); // aqui peço o numero ao user, dentro do parse in para que seja logo convertido de string para int
while(unum !== rnum){  // aqui abro o um loop para que o processo se repita se os numeros forem diferentes
    if(isNaN(unum) || unum <1 || unum >10){ // este if apanha letras e numeros fora do range 1 a 10
        alert("Valor fora dos parametros");
        unum = parseInt(prompt("Insira um numero de 1 a 10:")); // e volto a pedir um numero

    }else if(unum === rnum){ // comparação dento do while para vitoria
        alert("You Win!");
    }
    else{ // else para o que sobra que sao so numeros de 1 a 10 que nao sejam iguais ao random
        alert("Try again!");
        unum = parseInt(prompt("Insira um numero de 1 a 10:"));
    }
}

if(isNaN(unum) || unum <1 || unum >10){ // fora do while meti outro if para apanhar letras e numeros fora do range o isNan() serve para ver se foram postas letras no prompt
    alert("Valor fora dos parametros");
    unum = parseInt(prompt("Insira um numero de 1 a 10:"));

}else if(unum === rnum){ // nao sei porque meti o else if o else devia ser suficiente
    alert("You Win!");
}
