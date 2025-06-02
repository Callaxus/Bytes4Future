function calculaDiasAteAoNatal(dia, mes){
    if((dia<=0||dia>31)&&(mes===1||mes===3||mes===5||mes===7||mes===8||mes===10||mes===12)){
        return "Por favor introduza um dia entre 1 e 31.";
    }else if(mes<=0||mes>12){
        return "Por favor introduza um mês entre 1 e 12.";
    }else if((mes===4||mes===6||mes===9||mes===11)&&(dia>30)){
        return "Por favor introduza um dia entre 1 e 30.";
    }else if(mes===2&&dia>28){
        return "Por favor introduza um dia entre 1 e 28.";
    }

    const natal=359;
    const primeiroDoMes=[0,31,59,90,120,151,181,212,243,273,304,334];
    const diaDoAno=primeiroDoMes[mes-1]+dia;
    const natalCounter=natal-diaDoAno;
    let negNatalCounter=0;
    
    if(natalCounter===0){
        return "Hoje é Natal!"
    }else if(natalCounter>0){
        return `Faltam ${natalCounter} dias até ao Natal.`
    }else if(natalCounter<0){
        negNatalCounter=natalCounter+365;
        return `Faltam ${negNatalCounter} dias para o Natal.`
    }
}


console.log(calculaDiasAteAoNatal(24,12))