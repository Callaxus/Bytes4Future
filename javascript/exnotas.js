
let nota = prompt("introduza a nota:");

if(nota>0 && nota<49){
    console.log("F");
}else if(nota>50 && nota<59){
    console.log("D");
}else if(nota>60 && nota<69){
    console.log("C");
}else if(nota>70 && nota<=89){
    console.log("B");
}else if(nota>89 && nota<=100){
    console.log("A");
}else{
    console.log("ERRO: valor fora do formato");
}