class Inteiro {
    #valor;
    constructor(n){
        typeof n === "number" && !isNaN(n) ? this.#valor=Math.trunc(n) : this.#valor=0;
    }

    get valor(){
        return this.#valor;
    }
}