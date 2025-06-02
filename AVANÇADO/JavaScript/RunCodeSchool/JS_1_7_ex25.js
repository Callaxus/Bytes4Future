function diaDoAno(data){
    const mapaDias=new Map([
        [0,0],
        [1,31],
        [2,59],
        [3,90],
        [4,120],
        [5,151],
        [6,181],
        [7,212],
        [8,243],
        [9,273],
        [10,304],
        [11,334]
    ]);

    const ano=data.getFullYear();
    const dia=data.getDate();
    const mes=data.getMonth();
    const diaDoAno=mapaDias.get(mes)+dia;


    if((ano % 4 === 0 && (ano % 100 !==0 || ano % 400 === 0)&& mes > 1 )){
        return diaDoAno+1;
    }else{
        return diaDoAno;
    }
} 