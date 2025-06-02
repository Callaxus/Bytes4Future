function arrayDePares(array){
    let display=[];
    for(const nArray of array){
        if(nArray % 2 === 0){~
            display.push(nArray)
        }
    }
}

// com filter method
function arrayDePares(array) {
    return array.filter(num => num % 2 === 0);
}