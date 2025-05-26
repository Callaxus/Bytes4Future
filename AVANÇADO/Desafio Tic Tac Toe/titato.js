
const jogadores={
    1:"O",
    2:"X"
}
    const GAME_STATE={
        // [["00",01","02"],["10,"11","12"],["20","21","22"]
        0:[["_","_","_"],["_","_","_"],["_","_","_"]],
    }

function adicionarJogada(jogo, jogador, lin, col){


    //ver se a jogada cabe na matriz 
    if((lin>=0 && col>=0) && (lin<=2 && col<=2)){
        if(jogador===1||jogador===2){
            //jogada player 1
        GAME_STATE[jogo] = GAME_STATE[jogo-1].map(row => [...row]);
            if(GAME_STATE[jogo][lin][col]!=="_"){
                return "Jogada Invalida"
            }else{
                GAME_STATE[jogo][lin][col]=jogadores[jogador];
            }

        }else{
            return "Jogador Invalido!"
        }
    }else{return "Jogada fora do tabuleiro!"}
    return GAME_STATE[jogo]
}

function obterJogadasPossiveis(jogo){
    const jogadas=[];
    for(let i=0;i<GAME_STATE[jogo].length;i++){
        for(let e=0;e<GAME_STATE[jogo][i].length;e++){
            if(GAME_STATE[jogo][i][e]==="_"){
                jogadas.push({linha: i, coluna: e});
            }
        }
    }
     return jogadas;
}

function verificaVencedor(jogo){
    //linhas
    if(GAME_STATE[jogo][0][0]===GAME_STATE[jogo][0][1]&&GAME_STATE[jogo][0][1]===GAME_STATE[jogo][0][2]){
		if(GAME_STATE[jogo][0][0]==="O"||GAME_STATE[jogo][0][0]==="X")return GAME_STATE[jogo][0][0];
        else return undefined;
    }else if(GAME_STATE[jogo][1][0]===GAME_STATE[jogo][1][1]&&GAME_STATE[jogo][1][1]===GAME_STATE[jogo][1][2]){
        if(GAME_STATE[jogo][1][0]==="O"||GAME_STATE[jogo][1][0]==="X")return GAME_STATE[jogo][1][0];
        else return undefined;
    }else if(GAME_STATE[jogo][2][0]===GAME_STATE[jogo][2][1]&&GAME_STATE[jogo][2][1]===GAME_STATE[jogo][2][2]){
        if(GAME_STATE[jogo][2][0]==="O"||GAME_STATE[jogo][2][0]==="X")return GAME_STATE[jogo][2][0];
        else return undefined;
    }
    //colunas
    else if(GAME_STATE[jogo][0][0]===GAME_STATE[jogo][1][0]&&GAME_STATE[jogo][1][0]===GAME_STATE[jogo][2][0]){
        if(GAME_STATE[jogo][0][0]==="O"||GAME_STATE[jogo][0][0]==="X") return GAME_STATE[jogo][0][0];
        else return undefined;
    }else if(GAME_STATE[jogo][0][1]===GAME_STATE[jogo][1][1]&&GAME_STATE[jogo][1][1]===GAME_STATE[jogo][2][1]){
        if(GAME_STATE[jogo][0][1]==="O"||GAME_STATE[jogo][0][1]==="X") return GAME_STATE[jogo][0][1];
        else return undefined;
    }else if(GAME_STATE[jogo][0][2]===GAME_STATE[jogo][1][2]&&GAME_STATE[jogo][1][2]===GAME_STATE[jogo][2][2]){
        if(GAME_STATE[jogo][0][2]==="O"||GAME_STATE[jogo][0][2]==="X") return GAME_STATE[jogo][0][2];
        else return undefined;
    }
    //diagonais
    else if(GAME_STATE[jogo][0][0]===GAME_STATE[jogo][1][1]&&GAME_STATE[jogo][1][1]===GAME_STATE[jogo][2][2]){
        if(GAME_STATE[jogo][0][0]==="O"||GAME_STATE[jogo][0][0]==="X")return GAME_STATE[jogo][0][0];
        else return undefined;
    }else if(GAME_STATE[jogo][2][0]===GAME_STATE[jogo][1][1]&&GAME_STATE[jogo][1][1]===GAME_STATE[jogo][0][2]){
        if(GAME_STATE[jogo][2][0]==="O"||GAME_STATE[jogo][2][0]==="X")return GAME_STATE[jogo][2][0];
        else return undefined;
    }else return undefined;
}

function verificarFimDoJogo(jogo){
    if (obterJogadasPossiveis(jogo).length === 0){
        return true;
    }else if(verificaVencedor(jogo)==="O"||verificaVencedor(jogo)==="X"){
        return true
    }else return false;
}