"use client"
import { useState } from "react";

export default IncrementalBotao;

function IncrementalBotao(){


    const [numero, setNumero] =  useState(0);

    const handleClick = () =>{
        setNumero(numero+1);
    };

    const [numeroRandom, setNumeroRandom] = useState(0);
    const handleGen = () =>{
        setNumeroRandom( Math.floor(Math.random()*10000));
    }

    const mapaNome = new Map<number, string>([
        [0,"Carolina"],
        [1,"Catarina"],
        [2,"Frida"],
        [3,"Van"],
        [4,"Bob"],
        [5,"Bill"],
        [6,"Karl"],
        [7,"Hel"],
        [8,"Jubby"]
    ]);

    const mapaInsult=new Map<number, string>([
        [0,"the Anoying"],
        [1,"the Stupid"],
        [2,"the Reprobate"],
        [3,"the Gooner"],
        [4,"the Decroded"],
        [5,"the Foul"],
        [6,"the Nasty"],
        [7,"the Stinker"],
        [8,"the Poopy"],
        [9,"the Feeder"],
        [10,"the Goopy"],
        [11,"the Slimy"],
        [12,"the Chronic Masturbator"],
        [13,"the Silly Pants"]
    ]);

    const [nomeRando, setNomeRando] =useState(0);
    const [insuRando, setInsuRando] =useState(0);

    const insultGen=()=>{
        setInsuRando(Math.floor(Math.random()*14));
        setNomeRando(Math.floor(Math.random()*9));
    }


    return(

    <main className="m-auto; flex-auto">
        <div className="">
            <p className="color-[#00ff00]">{numero}</p>
            <button onClick={()=> handleClick()}>"Incrementa"</button>
        </div>

        <div>
            <p>{numeroRandom}</p>
            <button onClick={()=> handleGen()}>"Gerar Numero"</button>
        </div>

        <div>
            <p>{mapaNome.get(nomeRando)} {mapaInsult.get(insuRando)}</p>
            <button onClick={()=>insultGen()}>"Gerar"</button>
        </div>
    </main>
)

}