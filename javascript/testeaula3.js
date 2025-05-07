function computer(){
    let n=Math.floor(Math.random()*3);
    switch (n){
        case 0:
            return"Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
console.log(computer());