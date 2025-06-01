function diaEmPalavras(dia, mes, ano){
    const diasComum=new Map([
        [1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]
    ]);
    const diasBisexto=new Map([
        [1,31],[2,29],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]
    ]);
    const mesExtenso=new Map([
        [1,"Janeiro"],[2,"Fevereiro"],[3,"Março"],[4,"Abril"],
        [5,"Maio"],[6,"Junho"],[7,"Julho"],[8,"Agosto"],
        [9,"Setembro"],[10,"Outubro"],[11,"Novembro"],[12,"Dezembro"]
    ]);
    const mapaNums=new Map([
        [1,"um"],[2,"dois"],[3,"três"],[4,"quatro"],
        [5,"cinco"],[6,"seis"],[7,"sete"],[8,"oito"],
        [9,"nove"],[10,"dez"],[11,"onze"],[12,"doze"],
        [13,"treze"],[14,"catorze"],[15,"quinze"],[16,"dezasseis"],
        [17,"dezassete"],[18,"dezoito"],[19,"dezanove"],
        [20,"vinte"],[30,"trinta"]
    ])
    // checks de dados as seguintes funcoes retornam bolleans para confirmar se os dados inseridos são validos if true os dados sao validos

    // ve se o ano é bissexto
    function checkBisexto(ano){
        return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
    }
    // confirma se ano cai entre 2000 e 2030
    function checkAno(ano){
        return (ano >= 2000 && ano <= 2030);
    }
    // check de mes na de mais 
    function checkMes(mes){
        return (mes > 0 && mes <= 12);
    }
    // confirma se dia cabe no mes, recebe booleana de checkBissexto para decidir qual do mapas(diasComun ou diasBisexto) usar para comparar o valor dos dias ao mês correspondente
    function checkDia(dia, mes, ano){
        let maxDias = checkBisexto(ano) ? diasBisexto.get(mes) : diasComum.get(mes);
            return (dia > 0 && dia <= maxDias);
    }

    // casos falsos apanha os valoes dos check acima e dá uma mensagem apropriada ao erro    
    function errosDados(dia, mes, ano){
        if(!checkAno(ano)){
            return  "Por favor introduza um ano entre 2000 e 2030."
        }
        if(!checkMes(mes)){
           return "Por favor introduza um mês entre 1 e 12."
        }
        if(checkBisexto(ano) && !checkDia(dia, mes, ano)){
            return `Por favor introduza um dia entre 1 e ${diasBisexto.get(mes)}.`
        }else if(!checkBisexto(ano) && !checkDia(dia, mes, ano)){
            return `Por favor introduza um dia entre 1 e ${diasComum.get(mes)}.`
        }
        return null;
    }
    // leitura dos dados lÊ dados e returna o valor escrito por extenso sem espaços no fim e no inicio
    function lerDias(dia){
        if((dia >0 && dia <= 20) || dia === 30){
            return `${mapaNums.get(dia)}`;
        }else if(dia > 20 && dia < 30){
            return `${mapaNums.get(20)} e ${mapaNums.get(dia-20)}`
        }else if(dia > 30 && dia <= 31){
            return `${mapaNums.get(30)} e ${mapaNums.get(dia-30)}`
        }
    }
    function lerMes(mes){
        return `de ${mesExtenso.get(mes)}`
    }
    function lerAno(ano){
        if(ano > 2020 && ano < 2030  ){
            return `de dois mil e vinte e ${mapaNums.get((ano-2000)-20)}`
        }else if(ano > 2000 && ano <=2020 ){
            return `de dois mil e ${mapaNums.get(ano-2000)}`;
        }else if(ano === 2000){
            return "de dois mil";
        }else if(ano === 2030){
            return "de dois mil e trinta";
        }
    }

    const erro = errosDados(dia, mes, ano);
    if(erro !== null){
        return erro;
    }
        return lerDias(dia)+" "+lerMes(mes)+" "+lerAno(ano);
}


console.log(diaEmPalavras(1, 1, 2000));    // um de Janeiro de dois mil
console.log(diaEmPalavras(15, 5, 2010));   // quinze de Maio de dois mil e dez
console.log(diaEmPalavras(21, 7, 2021));   // vinte e um de Julho de dois mil e vinte e um
console.log(diaEmPalavras(29, 2, 2024));   // vinte e nove de Fevereiro de dois mil e vinte e quatro (leap year)
console.log(diaEmPalavras(31, 12, 2030));  // trinta e um de Dezembro de dois mil e trinta

// Invalid year
console.log(diaEmPalavras(10, 10, 1999));  // Por favor introduza um ano entre 2000 e 2030.
console.log(diaEmPalavras(10, 10, 2031));  // Por favor introduza um ano entre 2000 e 2030.

// Invalid month
console.log(diaEmPalavras(10, 0, 2020));   // Por favor introduza um mês entre 1 e 12.
console.log(diaEmPalavras(10, 13, 2020));  // Por favor introduza um mês entre 1 e 12.

// Invalid day (not leap year)
console.log(diaEmPalavras(29, 2, 2023));   // Por favor introduza um dia entre 1 e 28.
console.log(diaEmPalavras(32, 1, 2022));   // Por favor introduza um dia entre 1 e 31.
console.log(diaEmPalavras(31, 4, 2022));   // Por favor introduza um dia entre 1 e 30.