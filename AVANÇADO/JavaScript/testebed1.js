const map = {a:"4",A:"4",e:"3",E:"3",i:"1",I:"1",o:"0",O:"0",s:"5",S:"5"}

let text = "education";
let result = text.replace(/[aAeEiIoOsS]/g, l => map[l]);
console.log(result); // "2d5c1t32n"