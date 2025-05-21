/*CORREÇÃO*/
function superDigito(n){
    while(n.length>1){
        let sum=0;
    for(let i=0;i<n.length;i++){
        sum += Number(n[i]);
    }
    n=String(sum);

}
    return n;
}
console.log(superDigito("8"));

/*Com comments */
function superDigit(str) {
  // while there is more than 1 digit:
  while (str.length > 1) {
  let sum = 0;
  
  // sum all digits
  for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    // convert the sum back to String
    str = String(sum);
  }
  // return the single digit number
  return Number(str); 
}
/*RECURSÂO*/
function superDigitRecursao(n) {
    let sum = 0;
    if (n.length <= 1) {
        return n
    }
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i])
    }
    return superDigitRecursao(String(sum))
}

/*function superDigito(n){
    let sum=0;
    let narr=[];
    if(n<10){
        return n
    }else{
        for(let i=0;i<n.length;i++){
            narr.push(n.split());
        }
        while (sum>n.length){
            for(let i=0;i<narr.length;i++){
                sum+=parseInt(narr[i]);
            }
        }
        return sum
    }

}*/