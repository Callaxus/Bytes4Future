class Inteiro {
    #valor
    constructor(n){
        this.#valor = (typeof n==="number"&& !isNaN(n)) ? Math.trunc(n) : 0 ;
    }
    get valor(){
        return this.#valor;
    }
    set valor(n){
        if(typeof n==="number" && !isNaN(n)){
            this.#valor = Math.trunc(n);
        }
    }


}