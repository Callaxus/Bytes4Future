//somar 
//subtração
//multi
//division

//guardar historico de resultados
//guardar o ultimo resultado mais atual
// os metedos recebm dois numeros inteiros, se um deles nao for definido, o segundo passa a ser o ultimo resultado disponivel.
//o metedo deve returnar a instancia da calculadora e nao o resultado da soma.

//metedo limpar historico, nao recebe nenhum parametro, quando usado apaga o historico e o ultimo resultado passa a 0,
// metedo obter reultado, apresenta o ultmimo resultado como um bigInt return bigInt

//toJson (historico, ultimoResultado) json.something
//o historico deve ser um array que tem cada posição um a operação no formato valora operador valorb = resultado deve ser organizado da 1º á ultima (usar Push)
//o ultimoResultado deve ser a representação textual do número em string.

// toString se não existir histórico returns "Calculadora Limpa"
// deve retornar uma string formatada para uma lista numerada[i+1] com arrays do historico
//a lista deve ter um cabeçalho e um roda pé 
// depois do roda pé apresenta o nº total de operações no historico, e o ultimo resultado


class Calculadora{
    constructor(){
        this.historico = [];
        this.ultimoResultado = 0;
    }

// operaçoes
    soma(a,b){
        if(b===undefined){ b = Number(this.ultimoResultado) }
        
        const resultado = Math.round(a+b);
        this.ultimoResultado = String(resultado);
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return this;
    }
    subtracao(a,b){
        if(b===undefined){ b = Number(this.ultimoResultado) }
        
        const resultado = Math.round(a-b);
        this.ultimoResultado = String(resultado);
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return this;
    }
    multiplicacao(a,b){
                if(b===undefined){ b = Number(this.ultimoResultado) }
        
        const resultado = Math.round(a*b);
        this.ultimoResultado = String(resultado);
        this.historico.push(`${a} x ${b} = ${resultado}`);
        return this;
    }
    divicao(a,b){
                if(b===undefined){ b = Number(this.ultimoResultado) }
        
        const resultado = Math.round(a/b);
        this.ultimoResultado = String(resultado);
        this.historico.push(`${a} / ${b} = ${resultado}`);
        return this;
    }

    // limpeza
    limparHistory(){
        this.historico=[];
        this.ultimoResultado=String(0);
        return this;
    }

    //reusltado
    obterResultado(){
        return BigInt(this.ultimoResultado);
    }

    // X - JAAAASSOOOOOOOOOOON!!
    toJSON(){
        let obj = {
            historico: this.historico,
            ultimoResultado: String(this.ultimoResultado)
       }
       return JSON.stringify(obj);
    }

    //strings of fate
    toString(){
        if(this.historico.length===0){
            return "Calculadora Limpa ";
        }else{
            let listHead="=== Histórico da Calculadora===";
            let listBody="";
            let listFooter="\n=== Fim do Histórico ==="
            let operationsNum=`\nForam realizadas ${this.historico.length} operações`;
            let lastResultado=`\nÚltimo resultado: ${this.ultimoResultado}`
                for(let i=0;i<this.historico.length;i++){
                    listBody += `\n ${i+1}. ${this.historico[i]}`;
                }
                return listHead+listBody+listFooter+operationsNum+lastResultado;
        }
    }
}

// testes 
const calc = new Calculadora();
// Test 1: Soma
calc.soma(2, 3);
console.log(calc.obterResultado()); // 5n

// Test 2: Subtração
calc.subtracao(10, 4);
console.log(calc.obterResultado()); // 6n

// Test 3: Multiplicação
calc.multiplicacao(3, 7);
console.log(calc.obterResultado()); // 21n

// Test 4: Divisão (integer division)
calc.divicao(20, 3);
console.log(calc.obterResultado()); // 7n (if using Math.trunc or Math.floor)

// Test 5: Operação usando ultimoResultado
calc.soma(5); // Should sum 5 + ultimoResultado (7)
console.log(calc.obterResultado()); // 12n

// Test 6: Histórico e toString
console.log(calc.toString());

// Test 7: Limpar histórico
calc.limparHistory();
console.log(calc.toString()); // "Calculadora Limpa "

// Test 8: toJSON
calc.soma(1, 2).multiplicacao(2, 3);
console.log(calc.toJSON());









































/*
      _______
     /       \
    |  CAL   |
    |  CULON |
    |_______ |
   /  O   O  \
  |     ∆     |
  |   \___/   |
   \_________/
     |  |  |
    /   |   \
   |    |    |
   |    |    |
  /_____|_____\

*/