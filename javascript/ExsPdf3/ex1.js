let velas=["acessa","acessa","apagada","acessa","apagada","acessa"];
let velas2=["apagada","apagada","acessa","apagada","apagada"];
function velasCounter(candles){
    let counter=0;
    for(let i=0; i<candles.length; i++){
        if(candles[i]=="acessa"){
            counter++;
        }
    }
    return counter;
}


console.log(velasCounter(velas));
console.log(velasCounter(velas2));