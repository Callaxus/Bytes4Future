class Tabletop {
    constructor(material) {
        this.material = material;
    }
}

class Leg {
    constructor(type) {
        this.type = type;
    }
}

class Table {
    constructor(tabletop) {
        if (!(tabletop instanceof Tabletop)) {
            throw new Error("tabletop must be an instance of Tabletop");
        }
        this.tabletop = tabletop;
        this.legs = [];
    }

    legAssemble(leg) {
        if (!(leg instanceof Leg)) {
            throw new Error("leg must be an instance of Leg");
        }
        this.legs.push(leg);
    }

    assembled() {
        return this.legs.length === 4;
    }
}

// Example usage:
const top = new Tabletop("wood"); // criar instancia de tabletop para enviar para a t
const round=new Leg("round");// criar nova instancia de Leg para adicionar 4 vezes ao metodo legAssemble
const t = new Table(top);// criar instancia de table com o tabletop

t.legAssemble(round);
t.legAssemble(round);
t.legAssemble(round);
t.legAssemble(round); // cada metodo adiciona uma nova instancia Leg do tipo round á instancia t da classe Table

console.log(t.assembled()); // true