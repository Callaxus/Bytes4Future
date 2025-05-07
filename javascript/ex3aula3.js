function carolinaOlivia(str1, str2){
    if(typeof str1!= "string" || typeof str2!= "string"){
        return 0;
    }
    return (str1 +" "+str2);
}

let nome = prompt("Insira o primeiro nome:");
let apelido = prompt("Insira o apelido:");

alert(`Olá, ${carolinaOlivia(nome, apelido)}`);
