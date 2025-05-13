let arrayn=[4,7,8,5,2];

function medianFinder(ray){
    let medn1=0;
    let medn2=0;
    let rayord=ray;
    rayord.sort(function(a, b){return b - a});
    if(ray.length%2===0){
        medn1=rayord[(rayord.length/2)-1];
        medn2=rayord[(rayord.length/2)+1];
        return (medn1+medn2)/2;
    }else{
        medn1=rayord[Math.floor(rayord.length/2)];
        return medn1;
    }

}

console.log(medianFinder(arrayn));