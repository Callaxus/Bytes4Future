let n=15;

function fizzyDrink(fn){
    let bubbles=[];
    for(let ctr=1; ctr<=fn; ctr++){
        if(ctr%15===0){
            bubbles.push("FizzBuzz");
        }else if(ctr%5===0){
            bubbles.push("Buzz");
        }else if(ctr%3===0){
            bubbles.push("Fizz");
        }else{
            bubbles.push(" ");
        }
    }
    return bubbles;
}

console.log(fizzyDrink(n));