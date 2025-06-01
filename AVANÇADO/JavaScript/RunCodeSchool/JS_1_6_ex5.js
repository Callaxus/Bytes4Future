const ray=[1, 2, 2, 3, 3, 3, 4];

function calculaModa(array){
    const modeCount=new Map();
    let modaCtr=0;
    let nModa=0;
    //iterar pelo array e adicionar o numero do array á chave do mapa para que se caso repita o numero no array o valor no mapa aumenta;
    for(const valArray of array){
        modeCount.set(valArray, (modeCount.get(valArray) || 0)+1 );
    }
    // agora iterar pelo mapa para ver qual dos valores é o maior, a sua chave é a moda
    for(const[nArray, iNumNum] of modeCount){
        if(iNumNum > modaCtr){
            modaCtr = iNumNum;
            nModa = nArray;
        }
    }
    return nModa;
}