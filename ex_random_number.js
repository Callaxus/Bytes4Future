/* 
Roll a number between 1-10
ask usr for another number
while numbers are diferent keep asking usr for numbers
if numbers equal usr wins
*/


let unum = prompt("Insira um numero entre 1 e 10");
let rnum = Math.floor(Math.random() * 10) + 1;


while(unum != rnum){
    unum = prompt("Guess the number!\nInsira um numero entre 1 e 10");
    rnum = Math.floor(Math.random() * 10) + 1;
    console.log(`${unum} é o numero errado! \nO numero certo era: ${rnum}`);
    if(unum<=0 || unum >10 ){
        console.log("Numero tem de ser maior que 0 e menor que 10!");
    }
}

{
    console.log(` random number is:${rnum} \n${unum} é o numero certo! \n Parabéns Shinji!`);
}
