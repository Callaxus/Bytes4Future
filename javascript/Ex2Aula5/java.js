const perguntas =[
    {
        "pergunta": "qual o index desta pergunta?",
        "resposta": "zero"
    },
    {
        "pergunta": "qual o index desta pergunta?",
        "resposta": "um"
    },
    {
        "pergunta": "qual o index desta pergunta?",
        "resposta": "dois"
    },
    {
        "pergunta": "qual o index desta pergunta?",
        "resposta": "tres"
    },
    {
        "pergunta": "qual o index desta pergunta?",
        "resposta": "quatro"
    }
]

const usranswr = document.getElementById("posta");
let i=0;
const display = document.getElementById("quest");

usranswr.addEventListener(KeyboardEvent);

function trivia(){
    while(i<perguntas.length){
        display.innerText = perguntas[i].pergunta;
        if(lowercase().usranswr === perguntas[i].resposta){
            i++
        }
    }
}