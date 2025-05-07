let numeros = [1,2,3,4,5];
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.push(6);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.unshift(0);
console.log(numeros);
numeros[2]=10;
console.log(numeros);

let n=0;

for(n = 0; n < numeros.length; n++){
    console.log(numeros[n]);
}

