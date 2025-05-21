function calculaDiaDoAno(dia, mes){
    let jan=1;
    let fev=32;
    let mar=60;
    let abr=91;
    let mai=121;
    let jun=152;
    let jul=182;
    let ago=213;
    let set=244;
    let out=274;
    let nov=305;
    let dez=335;

    if(dia<=0||dia>31){
        return "Por favor introduza um dia entre 1 e 31.";
    }else if(mes<=0||mes>12){
        return "Por favor introduza um mês entre 1 e 12.";
    }else if((mes===4||mes===6||mes===9||mes===11)&&(dia>30)){
        return "Por favor introduza um dia entre 1 e 30.";
    }else if(mes===2&&dia>28){
        return "Por favor introduza um dia entre 1 e 28.";
    }else if(mes===1){
        jan+=dia;
                return jan;
    }else if(mes===2){
        fev+=dia;
                return fev;
    }else if(mes===3){
        mar+=dia;
        return mar;
    }else if(mes===4){
        abr+=dia;
        return abr;
    }else if(mes===5){
        mai+=dia;
        return mai;
    }else if(mes===6){
        jun+=dia;
        return jun;
    }else if(mes===7){
        jul+=dia;
        return jul;
    }else if(mes===8){
        ago+=dia;
        return ago;
    }else if(mes===9){
        set+=dia;
        return set;
    }else if(mes===10){
        out+=dia;
        return out;
    }else if(mes===11){
        nov+=dia;
            return nov;
    }else if(mes===12){
        dez+=dia;
            return dez;
    }
}

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
console.log(calculaDiaDoAno(5,12));