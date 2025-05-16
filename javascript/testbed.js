function formulaResolvente(a, b, c) {
    let sol=[];
    let xmais=0;
    let xmenos=0;
    if(Math.sqrt((b**2)-(4*(a*c)))<0){
        return"Sem solução";
    }else{
        xmenos=(-b-(Math.sqrt((b**2)-(4*(a*c)))))/(2*a);
        sol.push(xmenos);
        xmais=(-b+(Math.sqrt((b**2)-(4*(a*c)))))/(2*a);
        sol.push(xmais);
    }
    return sol;
}

 //console.log(formulaResolvente(2,-4,-6));



let arrayn=[];
let narray=[];
let oarray=[];
 for(let i=0; i <10; i++){
 arrayn.push(Math.floor(Math.random()*30));
}
console.log(arrayn);

narray=arrayn.sort((a,b)=>a-b);
console.log(narray);
for(let i2=0;i2<narray.length;i2++){
    oarray.unshift(narray[i2]);
}
console.log(oarray);