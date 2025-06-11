"use client"
import{ useState } from "react";
export default function Formulario(){

    const [tarefas, setTarefas] = useState<{text: string; completed: boolean}[]>([]);
    const [input, setInput] = useState("");

    const addTarefa = (e: React.FormEvent) => {
        e.preventDefault();
        if(input.trim()==="") return;
        setTarefas([...tarefas,{text: input, completed: false}]);
        setInput("");
    };

    const ligarTarefa = (idx: number)=>{
        setTarefas(tarefas.map((tarefa, i) =>
        i === idx ? { ...tarefa, completed: !tarefa.completed} : tarefa));
    }

    const removerTarefa = (idx: number) =>{
        setTarefas(tarefas.filter((_,i)=> i !== idx));
    };

    return(
        <main className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={addTarefa}>
                <div className="border-2 border-[#fff] rounded-lg p-4">
                    <input value={input} className="bg-[#444]"
                    onChange={e=> setInput(e.target.value)}
                    />
                    <button type="submit" className="text-[#555] bg-[#999]">
                        &nbsp;&nbsp;&nbsp; Addicionar Tarefa
                    </button>
                </div>
                <ol className="list-decimal ml-6">
                    {tarefas.map((tarefa, idx) => (
                        <li key={idx}>
                        <input type="checkbox"
                        checked={tarefa.completed}
                        onChange={() => ligarTarefa(idx)}
                        />
                        <span style={{textDecoration: tarefa.completed ? "line-through" : "none"}}>
                            {tarefa.text}
                        </span>
                            <button
                            type="button"
                            onClick={()=> removerTarefa(idx)}>
                                &nbsp;&nbsp;&nbsp;Remover
                            </button>
                        </li>
                    ))}
                </ol>
            </form>
        </main>
    )
}