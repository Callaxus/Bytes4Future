let narray=[4,6,4,5,3,6];


function maxIndexFinder(ray){
    let maxi=0;
    let maxi2=0;
    for(let i=0; i<ray.length;i++){
        if(ray[i]>maxi){
            maxi=ray[i];
            maxi2=i;
        }
    }
    return maxi2;
}

let maxindex=maxIndexFinder(narray);

console.log(maxindex);