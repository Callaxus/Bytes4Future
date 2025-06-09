class Pessoa {
    constructor(nome, idade, gender){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    comparaIdade(pess){
        
        if(this.idade < pess.idade && pess.sexo === "m") {
            return `O ${pess.nome} é mais velho do que eu.`;
        }
        else if(this.idade > pess.idade && pess.sexo === "m" ){
            return `O ${pess.nome} é mais novo do que eu.`
        }
        else if(this.idade === pess.idade && pess.sexo === "m"){
            return `O ${pess.nome} é da mesma idade que eu.`
        }
        else if(this.idade < pess.idade && pess.sexo === "f"){
            return `A ${pess.nome} é mais velha do que eu.`
        }
        else if(this.idade > pess.idade && pess.sexo === "f"){
            return `A ${pess.nome} é mais nova do que eu.`
        }
        else if(this.idade === pess.idade && pess.sexo === "f"){
            return `A ${pess.nome} é da mesma idade que eu.`
        }
        else{
            return;
        }
    }
}