
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