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
    let cpu = computer();

    if(gon === cpu)
    {
        alert(`Draw... \n You:${gon}\nCPU:${cpu}\n${score}`);
        return 0;
    }
    else if(gon === "rock" && cpu==="paper" || gon === "paper" && cpu==="scissors" || gon === "scissors" && cpu==="rock")
    {
        alert(`You lose\n You: ${gon}\nCPU: ${cpu}\n${score}`);
        return -1;
    }
    else if(gon === "rock" && cpu==="scissors" || gon === "paper" && cpu==="rock" || gon === "scissors" && cpu==="paper")
    {
        alert(`You Win!\n You: ${gon}\nCPU: ${cpu}\n${score}`);
        return +1;
    }
    else
    {
        alert(`Please write only rock paper or scissors! \n You:${gon}\nCPU:${cpu} \n${score}`);
        return 0;
    }
}

while(score<3 && score>-3){
    let result=playRound();
    score=score+result;
}

if(score==3){
    alert("You are the champion!");
}else if(score== -3){
    alert("You got wrecked by the rng");
}

