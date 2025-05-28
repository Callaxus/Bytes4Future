const numbers=[27, 84, 3, 56, 91, 12, 68, 45, 77, 9, 38, 62, 51, 23, 70];

function filMapRed(ray){
    return ray
    .filter(e=>e%2===0).map(ee=>ee*ee).reduce((acu, eee)=>acu+eee,0);
}
console.log(filMapRed(numbers))