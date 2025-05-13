let arrayn=[4,7,8,5,2];

function mediaArray(ray){
    let raysoma=0;
    let i=0
    for(i=0; i<ray.length;i++){
        raysoma+=ray[i];
    }
    return raysoma/i;
}

console.log(parseFloat(mediaArray(arrayn)));