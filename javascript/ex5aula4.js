let numeros=[10,25,55,80,15,45,70];
let i=0;
    let sum=0;

for(i=0; i<numeros.length; i++){
    if(numeros[i]%2===0){
        console.log(`${numeros[i]} é par`);
    }else{
        console.log(`${numeros[i]} é impar`);
    }
    sum += numeros[i];
    console.log(sum);
}

