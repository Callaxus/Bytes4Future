const plus = document.getElementById("plus");
const display = document.getElementById("display");
const minus = document.getElementById("minus");

let n=0;

display.innerText = `${n}`;

plus.addEventListener("click", add);
minus.addEventListener("click", sub);

function add(){
    n++;
    display.innerText = `${n}`;
}

function sub(){
    if(n===0){
        return;
    }
    n--;
    display.innerText = `${n}`;
}
