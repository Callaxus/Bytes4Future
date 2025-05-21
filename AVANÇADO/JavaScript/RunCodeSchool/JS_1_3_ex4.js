function calculaDiaDoAno(dia, mes){
    let arrDiaUmMes=[0,31,59,90,120,151,181,212,243,273,304,334];
    let sumArr=0;
    if((dia<=0||dia>31)&&(mes===1||mes===3||mes===5||mes===7||mes===8||mes===10||mes===12)){
        return "Por favor introduza um dia entre 1 e 31.";
    }else if(mes<=0||mes>12){
        return "Por favor introduza um mês entre 1 e 12.";
    }else if((mes===4||mes===6||mes===9||mes===11)&&(dia>30)){
        return "Por favor introduza um dia entre 1 e 30.";
    }else if(mes===2&&dia>28){
        return "Por favor introduza um dia entre 1 e 28.";
    }else if(mes===1){
        sumArr=arrDiaUmMes[0]+dia;
            return sumArr;
    }else if(mes===2){
        sumArr=arrDiaUmMes[1]+dia;
            return sumArr;
    }else if(mes===3){
        sumArr=arrDiaUmMes[2]+dia;
            return sumArr;
    }else if(mes===4){
        sumArr=arrDiaUmMes[3]+dia;
            return sumArr;
    }else if(mes===5){
        sumArr=arrDiaUmMes[4]+dia;
            return sumArr;
    }else if(mes===6){
        sumArr=arrDiaUmMes[5]+dia;
            return sumArr;
    }else if(mes===7){
        sumArr=arrDiaUmMes[6]+dia;
            return sumArr;
    }else if(mes===8){
        sumArr=arrDiaUmMes[7]+dia;
            return sumArr;
    }else if(mes===9){
        sumArr=arrDiaUmMes[8]+dia;
            return sumArr;
    }else if(mes===10){
        sumArr=arrDiaUmMes[9]+dia;
            return sumArr;
    }else if(mes===11){
        sumArr=arrDiaUmMes[10]+dia;
            return sumArr;
    }else if(mes===12){
        sumArr=arrDiaUmMes[11]+dia;
            return sumArr;
    }
}
    console.log(calculaDiaDoAno(31,12));

/*
versão refatorizada mais eficiente by copilot
function calculaDiaDoAno(dia, mes) {
    const diasNoMes = [31,28,31,30,31,30,31,31,30,31,30,31];
    const acumulado = [0,31,59,90,120,151,181,212,243,273,304,334];

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }
    if (dia < 1 || dia > diasNoMes[mes-1]) {
        return `Por favor introduza um dia entre 1 e ${diasNoMes[mes-1]}.`;
    }
    return acumulado[mes-1] + dia;
}

*/
/*
console.log(calculaDiaDoAno(5,1));
console.log(calculaDiaDoAno(5,2));
console.log(calculaDiaDoAno(5,3));
console.log(calculaDiaDoAno(5,4));
console.log(calculaDiaDoAno(5,5));
console.log(calculaDiaDoAno(5,6));
console.log(calculaDiaDoAno(5,7));
console.log(calculaDiaDoAno(5,8));
console.log(calculaDiaDoAno(5,9));
console.log(calculaDiaDoAno(5,10));
console.log(calculaDiaDoAno(5,11));
console.log(calculaDiaDoAno(31,12));
console.log(calculaDiaDoAno(2,31));
console.log(calculaDiaDoAno(301,31));
console.log(calculaDiaDoAno(31,2));
*/