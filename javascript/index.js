/*

var nameFirst = prompt(" Qual o seu nome?");
var nameLast = prompt("\n Qual o seu apelido?");
var age = prompt("Qual a sua idade?");
let year = 2025;
const message = ` Nome: ${nameFirst} ${nameLast} \n Idade:${age} \n Ano nascimento ${year-age}`;
console.log(message);

*/
/*

let n=0;

while(n<=10){
    console.log(n);
    n +=1;

    if(n>=10){
        while(n<=100){
            n +=10;
            console.log(n);
        }
    }
}


*/


let input = prompt("Indica um numero entre 1 e 10");

console.log(parseInt(input));

let n = (Math.floor(Math.random() * 10) + 1);

console.log(n);

if (input == n) {
    alert(" 😄 YOU WIN!!! XD");
} else {
    while (input != n) {
        alert(" 😦 oh no, try again...");
        let input = prompt("Indica um numero entre 1 e 10");
        console.log(parseInt(input));
        let n = (Math.floor(Math.random() * 10) + 1);
        console.log(n);
    }
}