let narray = [4,1,4,5];
let max = 0;

function arrayMaxFinder(ray){
    let mamax=0
    for(let i=0; i<=ray.length; i++){
        if(ray[i]>mamax){
            mamax=ray[i];
        }
    }
    return mamax;
}

max=arrayMaxFinder(narray);

console.log(max);