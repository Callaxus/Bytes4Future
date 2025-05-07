let idade = prompt("qual a sua idade?");

if (idade >= 18){
    console.log(`tem ${idade} anos é maior de idade`);
}else if(idade <18 && idade >=0){
    console.log(`tem ${idade} anos é menor de idade`);
}else{
    console.log("Erro!");
}