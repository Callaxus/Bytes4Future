function inverteArray(array, i=0, invArray=[]){
    
    if (i >= array.length) {
        return invArray;
    }
    invArray.unshift(array[i]);
    return inverteArray(array, i + 1, invArray);
}
//o k nao fazer return (i >= array.length ? [] : invArray.unshift(array[i])+inverteArray(array, i+1,invArray))