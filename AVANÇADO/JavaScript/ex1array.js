function minMax(n,ray){
    let sum=[0,0];

    let ray2=[...ray].sort((a,b)=>a-b);
    let ray3=[...ray].sort((a,b)=>b-a);

    for(let i=0;i<n;i++){
        sum[0]+=ray2[i];
        sum[1]+=ray3[i];
    }
    console.log(ray2,ray3);
    return sum
}

let array=[1,2,3,4,5,6];
console.log(minMax(3,array));