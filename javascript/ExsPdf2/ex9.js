let narray = [4,1,4,5];
let min = 0;

function arrayminFinder(ray){
    let mamin=ray[0];
    for(let i=0; i<ray.length; i++){
        if(ray[i]<mamin){
            mamin=ray[i];
        }
    }
    return mamin;
}
min=arrayminFinder(narray);

console.log(min);