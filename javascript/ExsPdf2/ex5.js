function arrayGenerator(num){
    let numeros=[];
    if(num===0||typeof num!='number'){
        alert("insira um NUMERO acima de 0");
        return;
    }else{
        for(let cont=0; cont<=num; cont++){
            numeros.push(cont);
        }
        return numeros;
    }
}

let n=parseInt(prompt('Insira um valor maior que 0'));

alert(`Eis todos os numeros entre 0 e o valor inserido (${n}) \n ${arrayGenerator(n)}`);