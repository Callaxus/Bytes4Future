function dataPorExtenso(data){
    const feiras= new Map([
        [0,"domingo,"],
        [1,"segunda-feira,"],
        [2,"terça-feira,"],
        [3,"quarta-feira,"],
        [4,"quinta-feira,"],
        [5,"sexta-feira,"],
        [6,"sábado,"]
    ]);
    const meses= new Map([
        [0, "de janeiro de"],
        [1, "de fevereiro de"],
        [2, "de março de"],
        [3, "de abril de"],
        [4, "de maio de"],
        [5, "de junho de"],
        [6, "de julho de"],
        [7, "de agosto de"],
        [8, "de setembro de"],
        [9, "de outubro de"],
        [10, "de novembro de"],
        [11, "de dezembro de"]
    ]);
    const diaSemana=data.getDay();
    const diaMes=data.getDate();
    const mes=data.getMonth();
    const ano=data.getFullYear();
    return feiras.get(diaSemana)+" "+diaMes+" "+meses.get(mes)+" "+ano;
 } 