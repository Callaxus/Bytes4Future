function calculaFaixaEtaria(idade){
    let faixa;
    if(idade>0||idade<=11){
        faixa="Criança";
        return faixa;
    }else if(idade>=12||idade<=17){
        faixa="Adolescente";
        return faixa;
    }else if(idade>=18||idade<=64){
        faixa="Adulto";
        return faixa;                
    }else if(idade>=65){
        faixa="Sénior";
        return faixa;            
    }else{
        return;
    }            
}

console.log(calculaFaixaEtaria(1));
console.log(calculaFaixaEtaria(15));
console.log(calculaFaixaEtaria(25));
console.log(calculaFaixaEtaria(65));
console.log(calculaFaixaEtaria(-1));