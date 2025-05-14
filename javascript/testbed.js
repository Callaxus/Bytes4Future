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

console.log(formulaResolvente(2,-4,-6));