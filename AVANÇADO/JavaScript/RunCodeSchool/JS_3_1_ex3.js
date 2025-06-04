function contaParesDoArray(array, index = 0) {
    if (index >= array.length) return 0;
    return (array[index] % 2 === 0 ? 1 : 0) + contaParesDoArray(array, index + 1);
}