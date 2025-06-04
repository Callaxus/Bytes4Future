function computeRookMoves(board, position) {
    // Inicializa array de jogadas possíveis
    let moves = []

    // Obtém a equipa do jogador
    const player = board[position.line][position.column][1]

    // Inicializa direções
    const dirs = [
        { line: 1, column: 0 },
        { line: 0, column: 1 },
        { line: -1, column: 0},
        { line: 0, column: -1}
    ]

    // Para cada direção
    for (const { line, column } of dirs) {
        // Começando da casa mais próxima e indo para a mais distante
        for (let i = 1; i < 8; i++) {

            // Calcula linha e coluna possível na direção atual com o multiplicador atual
            const l = position.line + line * i
            const c = position.column + column * i

            // Se já tiver saído do tabuleiro, quebra o ciclo interno
            if (l < 0 || l > 7 || c < 0 || c > 7) break;

            // Obtém conteúdo da casa
            const casa = board[l][c]
            // Se estiver vazia
            if (casa === "") {
                // Adiciona jogada possível
                moves.push({ line: l, column: c})
            } else {
                // Se estiver ocupada por um adversário
                if (eAdversario(casa, player)) {
                    // Adiciona jogada possível
                    moves.push({ line: l, column: c })
                    break;
                }
                continue;
            }
        }
    }
    return moves;
}

// Função que retorna true se a peça presente na casa for do jogador adversário
function eAdversario(casa, player) {
    return casa[0] !== player
}