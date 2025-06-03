function paresDoArray(array){
    if(array.length===0){
        return [];
    }
    const [first, ...rest] = array;  //separar o 1º elemento do resto do array
    if(first % 2 === 0){ // se o 1º elemento é par, junta-se ao resultado e o resto do array passa a fazer parte da recurssão
        return [first, ...paresDoArray(rest)]; 
    }else{// caso contrario o 1º elemento é descartado e faz-se a recurssão com o resto do array
        return paresDoArray(rest); 
    }
}
console.log(paresDoArray([1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6]))