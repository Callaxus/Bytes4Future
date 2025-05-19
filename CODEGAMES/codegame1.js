function filtrarStrings(ray){
    let raystring=[];
    for(let i=0;i<ray.length;i++){
        if(typeof ray[i] == 'string')
            raystring.push(ray[i]);
    }
    return raystring;
}

let test=['um',2,'tres'];
console.log(filtrarStrings(test));

