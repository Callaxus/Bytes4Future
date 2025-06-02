function arraySemDuplicados(array){
    const semDuplos = new Set();
    const display=[];
    for(num of array){
        semDuplos.add(num);
    }
    for (num2 of semDuplos){
        display.push(num2);
    }
    return display;
}