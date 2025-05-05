let score=0;

function computer(){
    let n=Math.floor(Math.random()*3);
    switch (n){
        case 0:
            return"rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(){
    let gon = prompt("Choose! rock, paper, scissors!").toLowerCase();

    if(gon === computer())
    {
        alert(`Draw... \n You:${gon}\nCPU:${computer()}\n${score}`);
        return 0;
    }
    else if(gon === "rock" && computer()==="paper" || gon === "paper" && computer()==="scissors" || gon === "scissors" && computer()==="rock")
    {
        alert(`You lose\n You: ${gon}\nCPU: ${computer()}\n${score}`);
        return -1;
    }
    else if(gon === "rock" && computer()==="scissors" || gon === "paper" && computer()==="rock" || gon === "scissors" && computer()==="paper")
    {
        alert(`You Win!\n You: ${gon}\nCPU: ${computer()}\n${score}`);
        return +1;
    }
    else
    {
        alert(`Please write only rock paper or scissors! \n You:${gon}\nCPU:${computer()} \n${score}`);
        return 0;
    }
}

while(score<3 && score>-3){
    playRound();
    score=score+playRound();
}

