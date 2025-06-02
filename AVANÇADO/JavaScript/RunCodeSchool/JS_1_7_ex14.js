function diferencaEmDias(data1, data2){
    let t1MS = data1.getTime();
    let t2MS = data2.getTime();

    let diffMS = t1MS>t2MS ? t1MS-t2MS : t2MS-t1MS;
    return Math.floor(diffMS/(1000*60*60*24));
}