let num = prompt("Insira um numero");

if(num == 0){
    console.log("zero");
}else if((num % 2) == 0){
    console.log(`${num} é um numero par`);
}else if((num % 2) == 1){
    console.log(`${num} é um numero impar`);
}else{
    console.log("ERRO!");
}