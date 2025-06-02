function calculaSigno(dia, mes){
    const diaUmDoMes=[0,31,59,90,120,151,181,212,243,273,304,334]
    const diasPorMes=[31,28,31,30,31,30,31,31,30,31,30,31]
    const cavaleirosDoZodiaco=[
        {nome:"Capricórnio", start: 1},
        {nome:"Aquário", start: 20},
        {nome:"Peixes", start: 50},
        {nome:"Carneiro", start: 80},
        {nome:"Touro", start: 111},
        {nome:"Gémeos", start: 142},
        {nome:"Caranguejo", start: 173},
        {nome:"Leão", start: 204},
        {nome:"Virgem", start: 235},
        {nome:"Balança", start: 266},
        {nome:"Escorpião", start: 296},
        {nome:"Sagitário", start: 326},
        {nome:"Capricórnio", start: 356}        
    ];
    const diaDoAno=diaUmDoMes[mes-1]+dia;
    if(mes<1||mes>12) return "Por favor introduza um mês entre 1 e 12.";
    if(dia<1||dia>diasPorMes[mes-1]){
        return `Por favor introduza um dia entre 1 e ${diasPorMes[mes-1]}`;
    }
    for(let i=cavaleirosDoZodiaco.length-1;i>=0;i--){
        if(diaDoAno>=cavaleirosDoZodiaco[i].start){
            return cavaleirosDoZodiaco[i].nome;
        }
    }
}

console.log(calculaSigno(1,1));
console.log(calculaSigno(1,2));
console.log(calculaSigno(1,3));
console.log(calculaSigno(1,4));
console.log(calculaSigno(1,5));
console.log(calculaSigno(1,6));
console.log(calculaSigno(1,7));
console.log(calculaSigno(1,8));
console.log(calculaSigno(1,9));
console.log(calculaSigno(1,10));
console.log(calculaSigno(1,11));
console.log(calculaSigno(22,12));



