//TROCAR ARRAYS POR VARS NORMAIS E FAZER SOMA DO DIA
function calculaDiaDoAno(dia, mes){
    let jan=[];
    let fev=[];
    let mar=[];
    let abr=[];
    let mai=[];
    let jun=[];
    let jul=[];
    let ago=[];
    let set=[];
    let out=[];
    let nov=[];
    let dez=[];

    if(dia<=0||dia>31){
        return "Por favor introduza um dia entre 1 e 31.";
    }else if(mes<=0||mes>12){
        return "Por favor introduza um mês entre 1 e 12.";
    }else if((mes===4||mes===6||mes===9||mes===11)&&(dia>30)){
        return "Por favor introduza um dia entre 1 e 30.";
    }else if(mes===1){
        jan[0]=1;
            for(let i=1;i<dia;i++){
                jan[i]=(jan[i-1]+i);
            }
                return jan[dia-1];
    }else if(mes===2){
        fev[0]=32;
            for(let i=1;i<dia;i++){
                fev[i]=(fev[i-1]+i);
            }
                return fev[dia-1];
    }else if(mes===3){
        mar[0]=60;
            for(let i=1;i<dia;i++){
                mar[i]=(mar[i-1]+i);
            }
                return mar[dia-1];
    }else if(mes===4){
        abr[0]=91;
            for(let i=1;i<dia;i++){
                abr[i]=(abr[i-1]+i);
            }
                return abr[dia-1];
    }else if(mes===5){
        mai[0]=121;
            for(let i=1;i<dia;i++){
                mai[i]=(mai[i-1]+i);
            }
                return mai[dia-1];
    }else if(mes===6){
        jun[0]=152;
            for(let i=1;i<dia;i++){
                jun[i]=(jun[i-1]+i);
            }
                return jun[dia-1];
    }else if(mes===7){
        jul[0]=182;
            for(let i=1;i<dia;i++){
                jul[i]=(jul[i-1]+i);
            }
                return jul[dia-1];
    }else if(mes===8){
        ago[0]=213;
            for(let i=1;i<dia;i++){
                ago[i]=(ago[i-1]+i);
            }
                return ago[dia-1];
    }else if(mes===9){
        set[0]=244;
            for(let i=1;i<dia;i++){
                set[i]=(set[i-1]+i);
            }
                return set[dia-1];
    }else if(mes===10){
        out[0]=274;
            for(let i=1;i<dia;i++){
                out[i]=(out[i-1]+i);
            }
                return out[dia-1];
    }else if(mes===11){
        nov[0]=305;
            for(let i=1;i<dia;i++){
                nov[i]=(nov[i-1]+i);
            }
                return nov[dia-1];
    }else if(mes===12){
        dez[0]=335;
            for(let i=1;i<dia;i++){
                dez[i]=(dez[i-1]+i);
            }
                return dez[dia-1];
    }
}

console.log(calculaDiaDoAno(2,1));
console.log(calculaDiaDoAno(2,2));
console.log(calculaDiaDoAno(2,3));
console.log(calculaDiaDoAno(2,4));
console.log(calculaDiaDoAno(2,5));
console.log(calculaDiaDoAno(2,6));
console.log(calculaDiaDoAno(2,7));
console.log(calculaDiaDoAno(2,8));
console.log(calculaDiaDoAno(2,9));
console.log(calculaDiaDoAno(2,10));
console.log(calculaDiaDoAno(2,11));
console.log(calculaDiaDoAno(2,12));