function diaDaSemana(dia){
    const dias=new Map([
        [1,"Domingo"],
        [2,"Segunda-Feira"],
        [3,"Terça-Feira"],
        [4,"Quarta-Feira"],
        [5,"Quinta-Feira"],
        [6,"Sexta-Feira"],
        [7,"Sábado"]
    ]);
    return (dia>0 && dia<=7) ? dias.get(dia) : "Número inválido. Por favor insira um número entre 1 e 7.";
}