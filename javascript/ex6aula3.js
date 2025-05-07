function mesconverter(nmes){
    switch(nmes){
        case 1:
        return "Segunda";

        case 2:
        return "Terça-feira";

        case 3:
        return "Quarta-feira";

        case 4:
        return "Quinta-feira";

        case 5:
        return "Sexta-feira";

        case 6:
        return "Sabado";

        case 7:
        return "Domingo";

        default:
            return "Erro! \nInput invalido!";
    }
}

let mes=parseInt(prompt("insira numero de um dia da semana 1 = 2ºa:"));
alert(`O mes é: ${mesconverter(mes)}`);