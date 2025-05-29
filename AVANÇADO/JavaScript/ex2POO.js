class ContaInstancias{
    constructor(){
        ContaInstancias.instancias +=1
    }
    static instancias=0
}


const a = new ContaInstancias();
const b = new ContaInstancias();
console.log(ContaInstancias.instancias); // 2