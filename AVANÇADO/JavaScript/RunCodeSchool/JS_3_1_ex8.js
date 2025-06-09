function fatoriaisDoArray(array){
    if(array.length === 0){
        return [];
    }
    const[pri, ...resto]=array;

    function fatorial(n){
        if(n === 0 || n === 1){
            return 1;
        }
        return n * fatorial(n-1);
    }
    return [fatorial(pri), ...fatoriaisDoArray(resto)];
}