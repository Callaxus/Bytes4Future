function fatorialN(n){
    let i=1;
    let fat=1;
    if(n===0||n<0) return 1;
    while(i<=n){
        fat=fat*i;
        i++;
    }
    return fat;
}