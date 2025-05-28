function verificaPalindromo(string) {
    let indiceCentral = string.length / 2;
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i <= Math.floor(indiceCentral); i++) {
        primeiraMetade += string[i]
    }
    for (let i = string.length - 1; i >= Math.ceil(indiceCentral) ; i--) {
        segundaMetade += string[i]
    }
    for(let i=0;i<Math.floor(primeiraMetade.length/2);i++){
    for(e=segundaMetade.length-1;e>=MathFloor(segundaMetade/2);e--){
        if(primeiraMetade[i].toLowerCase() === segundaMetade[e].toLowerCase()){
        return true
    }else{
        return false
    }}}
}