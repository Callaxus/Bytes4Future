function trimestresDoAno(t) {
    const tris=[
        {mes1:"Janeiro",mes2:"Fevereiro",mes3:"Março"},
        {mes1:"Abril",mes2:"Maio",mes3:"Junho"},
        {mes1:"Julho",mes2:"Agosto",mes3:"Setembro"},
        {mes1:"Outubro",mes2:"Novembro",mes3:"Dezembro"}
    ]
    switch(t){
        case 1: return Object.values(tris[0]);
        case 2: return Object.values(tris[1]);
        case 3: return Object.values(tris[2]);
        case 4: return Object.values(tris[3]);
        default: return "Número invalido. Por favor insira um número entre 1 e 4.";
    }
}

console.log(trimestresDoAno(0));
console.log(trimestresDoAno(1));
console.log(trimestresDoAno(2));
console.log(trimestresDoAno(3));
console.log(trimestresDoAno(4));
console.log(trimestresDoAno(5));

