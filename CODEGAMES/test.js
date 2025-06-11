function combineArrays(ray1,ray2){
    ray3=[];
    for(let i=0; i<ray1.length;i++){
           if(ray1.length > i) ray3.push(ray1[i]);
        
        for(let e=0; e<ray2.length;e++){
            if(ray2.length > e) ray3.push(ray2[e]);
        }
    }

    return ray3;
}