class cat{
    catname:string;
    age:number;
    level:number;
    exp:number;
    move1:string;
    move2:string;
    move3:string;
    move4:string;
    constructor(catname:string,age:number,level:number,exp:number,move1:string,move2:string,move3:string,move4:string){
        this.catname = catname;
        this.age = age;
        this.level = level;
        this.exp = exp;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
    }
}

const cat1 = new cat(
    "Poirot",
    10,
    99,
    5000,
    "Bite",
    "Scratch",
    "Poop",
    "Mega Fang"
); 
 console.log(cat1);