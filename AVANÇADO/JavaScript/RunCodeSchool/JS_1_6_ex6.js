function mesesDoAno(mes){
    const mesMap = new Map([
        [1,"Janeiro"],[2,"Fevereiro"],[3,"Março"],
        [4,"Abril"],[5,"Maio"],[6,"Junho"],
        [7,"Julho"],[8,"Agosto"],[9,"Setembro"],
        [10,"Outubro"],[11,"Novembro"],[12,"Dezembro"]
    ]);
    return (mes > 0 && mes <= 12) ?  mesMap.get(mes) :  "Por favor insira um número entre 1 e 12." ;
}
console.log(mesesDoAno(1));
console.log(mesesDoAno(2));
console.log(mesesDoAno(3));
console.log(mesesDoAno(4));
console.log(mesesDoAno(5));
console.log(mesesDoAno(6));
console.log(mesesDoAno(7));
console.log(mesesDoAno(8));
console.log(mesesDoAno(9));
console.log(mesesDoAno(10));
console.log(mesesDoAno(11));
console.log(mesesDoAno(12));
console.log(mesesDoAno(13));