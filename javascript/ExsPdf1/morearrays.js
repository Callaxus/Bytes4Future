let vazio=[];
let maior=0;
let menor=40;

vazio.push("Big Bang","Quarks","Gluons","Leptons","Photons", "Protons and Neutrons", "Atomic Nuclei", "Neutral Atoms (H and He)");
vazio[0]="Big Bang, order of creation of particles";

// converte as strings para um valor do seu length e ve a maior e o menor
for(let n=0; n<vazio.length; n++){
    console.log(vazio[n]);
    if(vazio[n].length>maior){
        maior=vazio[n].length;
    }
    if(vazio[n].length<=menor){
        menor=vazio[n].length;
    }
}
console.log(maior);
console.log(menor);


//vazio.pop();
//vazio.unshift();
 // questao sobre remover items do meio de um array


