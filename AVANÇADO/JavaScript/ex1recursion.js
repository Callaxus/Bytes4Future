function contaPares(ray){
    let i=0;
    let n=ray.length-1
    if(ray[0]%2===0){
        i++;
        return i;
    }else if(ray[n]%2===0){
        i++;
        return i+contaPares(ray[n-1]);
    }
}


console.log(contaPares([1,2,3,4,5,6,7,8,9,10]));


//correção


function corrigidaPares(ray){
    if(ray.length===0)return 0;
    if(ray[0]%2===0){
        return 1+ corrigidaPares([...ray].slice(1));
    }return corrigidaPares(ray.slice(1));

}