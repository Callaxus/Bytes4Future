function calculaEstacaoDoAno(dia, mes){
    if(dia<=0||dia>31){/*limite base de dias */
        return "Por favor introduza um dia entre 1 e 31.";
    }else if(mes<=0||mes>12){/*Limite Base dos meses*/
        return "Por favor introduza um mês entre 1 e 12.";
    }else if(/*meses 30 dias (4,6,9,11)*/
    (mes===4||mes===6||mes===9||mes===11)&&(dia>30)){
        return "Por favor introduza um dia entre 1 e 30.";
    }else if(mes===2&&dia>28){
        return "Por favor introduza um dia entre 1 e 28.";
    }else if(/* Primavera - 21 de Março a 20 de Junho*/
    (mes===3 && dia>=21 && dia<=31)||
    (mes===4 && dia<=30)||
    (mes===5 && dia<=31)||
    (mes===6 && dia<=20)){
        return "Primavera";
    }else if(/* Verão - 21 de Junho a 20 de Setembro*/
    (mes===6 && (dia>=21||dia<30))||
    (mes===7 && dia<31)||
    (mes===8 && dia<30)||
    (mes===9 && dia<21)){
        return "Verão";
    }else if(/* Outono - 21 de Setembro a 20 de Dezembro*/
    (mes===9&&(dia>=21||dia<30))||
    (mes===10&&dia<31)||
    (mes===11&&dia<30)||
    (mes===12&&dia<21)){
        return "Outono";
    }else if(/* Inverno - 21 de Dezembro a 20 de Março*/
    (mes===12&&(dia>=21||dia<31))||
    (mes===1&&dia<31)||
    (mes===2&&dia<28)||
    (mes===3&&dia<21)){
        return "Inverno";
    }else{
        return "Erro: Valores fora dos Parametros";
    }
}
/*Testes*/
console.log(calculaEstacaoDoAno(15,1));
console.log(calculaEstacaoDoAno(15,5));
console.log(calculaEstacaoDoAno(12,7));
console.log(calculaEstacaoDoAno(15,11));
console.log(calculaEstacaoDoAno(5,25));
console.log(calculaEstacaoDoAno(50,12));
console.log(calculaEstacaoDoAno(0,0));
console.log(calculaEstacaoDoAno(31,2));