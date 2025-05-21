function removeDuplos(ray){
    let seti=new Set([])
    let newray=[];
    for(let i=0; i<ray.length;i++){
        seti.add(ray[i]);
    }
    for(let s=0; s<seti.size;s++){
        newray[s] = (seti.get(s));
    }
    return newray;
}
let array=[1,1,1,2,2,3,3,4,4,5,5,6,6];
console.log(removeDuplos(array));
///correçao
function removeDuplicados(arr){
    let arrLimpo=new Set([...arr]);
    return[...arrLimpo];
}