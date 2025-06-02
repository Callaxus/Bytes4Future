function contarNsNoArray(n, array){
    //filter cria um array apenas com o n, o lenght desse array é o n de vezes que n se repete
return array.filter(num => num === n).length
}