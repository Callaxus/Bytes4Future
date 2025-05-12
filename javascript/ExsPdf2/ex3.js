let valor1=parseInt(prompt("Valor 1"));
let valor2=parseInt(prompt("Valor 2"));

    function contaParesEntreValores(v1,v2){
        let vmenor;
        let vmaior;
        let total=0;


        if(v1===v2){
            alert("Porfavor insira dois valores diferentes");
            return;
        }else if(typeof v1!= "number" || typeof v2!= "number"){
            alert("Porfavor insira dois valores NUMERICOS diferentes");
            return;
        }else{
            if(v1>v2){
                vmaior=v1;
                vmenor=v2;
            }else{
                vmenor=v1;
                vmaior=v2;
            }
            for(let counter=vmenor; counter<=vmaior; counter++){
                if(counter%2===0){
                    total++;
                }
            }
            return total;
        }
    }

alert(`pares entre os valores: ${contaParesEntreValores(valor1,valor2)}`);
