let n1=parseInt(prompt("Inserir valor 1:"));
let n2=parseInt(prompt("Inserir valor 2:"));
let n3=parseInt(prompt("Inserir valor 3:"));

if(n1>n2 && n1>n3){
    alert(` o maior valor é o valor 1: ${n1}.`);
}else if(n2>n1 && n2>n3){
    alert(` o maior valor é o valor 2: ${n2}.`);
}else if(n3>n1 && n3>n2){
    alert(` o maior valor é o valor 3: ${n3}.`);
}else if(n1 === n2 && n2 === n3){
    alert(`os valores sao iguais\n ${n1} ${n2} ${n3}`);
}else if(n1 === n2 && n1 > n3){
    alert(`os valores 1: ${n1} e 2: ${n2} sao iguais e  os maiores`);
}else if(n2 === n3 && n2 > n1){
    alert(`os valores 2: ${n2} e 3: ${n3} sao iguais e  os maiores`);
}else if(n1 === n3 && n1 > n2){
    alert(`os valores 1: ${n1} e 3: ${n3} sao iguais e  os maiores`);
}else{
    alert("Erro: Valores fora dos parametros esperados!");
}



/*
usei chat gpt para fazer permutações CUIDADO as permutaçoes do gpt nao fazem muito sentido mas sao um bom sitio para começar se nao queres esquecer de algum caso
*/