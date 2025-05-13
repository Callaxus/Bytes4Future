

function meses(trimestre){
    switch(trimestre){
    
    case 1:
        return "Jan, Fev, Mar";
    case 2:
        return "Abr, Mai, Jun";
    case 3:
        return "Jul, Ago, Set"
    case 4:
        return "Oct, Nov, Dez"
    default:
        return alert("Insira um valor referente a um trimestre\n 1 a 4");
    }
}

let tri=parseInt(prompt("Insira o nº do trimestre"));

alert(meses(tri));