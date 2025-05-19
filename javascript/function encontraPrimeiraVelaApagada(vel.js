function encontraPrimeiraVelaApagada(velas) {
    let indexcount=0;
    for(let i=0; velas[i]==true;i++){
        indexcount++;
    }
    return indexcount;
}
//          0     1     2       3   4   5
let velasx=[true,true,false,false,true,false];

console.log(encontraPrimeiraVelaApagada(velasx));

function encontraUltimaVelaAcesa(velas) {
    let iva=0;
    for(let e=0;e<velas.length;e++){
        if(velas[e]==true){
            iva=e;
        }
    }
    return iva;
}

console.log(encontraUltimaVelaAcesa(velasx));

function ordenaVelasApagadasPrimeiro(velas) {
    let sortedvelas=[];
    sortedvelas=velas.sort((a,b)=>a-b);
    return (sortedvelas);
}

console.log(ordenaVelasApagadasPrimeiro(velasx));

function ordenaVelasAcesasPrimeiro(velas) {
let sort=[];
let resort=[];
    sort=velas.sort((a,b) => a-b);

    for(let i=0;i<sort.length;i++){
        resort.unshift(sort[i]);
    }

    return resort;
}

console.log(ordenaVelasAcesasPrimeiro(velasx));