const notInvert=["pera","tangerina","banana","ananas","maracujá","tomate","limão"];

    function stringInverter(ray){
        if(ray.length<=1) return ray;
        return stringInverter(ray.slice(1))+ray[0];
    }

    function rayInverser(ray){
        return ray.map(e => stringInverter(e));
    }

console.log(rayInverser(notInvert));