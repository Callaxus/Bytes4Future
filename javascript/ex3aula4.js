let cores=["vermelho","verde,","azul","amarelo"];

cores.pop();
cores.push("Roxo");
cores.shift();
cores.unshift("laranja");
cores[1]="preto";

console.log(cores);
let n = 0;

for (n=0; n<cores.length;  n++){
    console.log(` o indice ${n} é a cor: ${cores[n]}  `);
}