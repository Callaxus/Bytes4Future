const array1 = ['11111', '2222', '333', '44', '5'];
const array2 = ['ananas', 'bambi', 'chandelier', 'dig', 'elvismelvis'];

function mapaearArray(ray){
    const lArray=(e)=>e.length;
    const ray2=ray.map(lArray)

    return ray2;
}

console.log(mapaearArray(array2));
console.log(mapaearArray(array1));