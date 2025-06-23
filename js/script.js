const boardElement = document.getElementById('game-board');
const statusElement = document.getElementById('status');
const restartButton = document.getElementById('restart-button');
const playAgainButton = document.getElementById('play-again-button');
const winnerModal = document.getElementById('winner-modal');
const winnerMessageElement = document.getElementById('winner-message');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resetScoresButton = document.getElementById('reset-scores-button');

const PLAYER = 'cat';
const COMPUTER = 'rabbit';
let currentPlayer = PLAYER;
let boardState = Array(9).fill(null);
let gameActive = true;
let playerScore = 0;
let computerScore = 0;

// Referências para as imagens dos jogadores
const catImage = '<img src="./images/cat.gif" alt="Gato" class="game-icon">';
const rabbitImage = '<img src="./images/rabbit.gif" alt="Coelho" class="game-icon">';

         const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]  // Diagonais
        ];

        //--- FUNÇÕES DO JOGO ---

        // CRIA O TABULEIRO INICIAL
        function createBoard(){
            boardElement.innerHTML = '';
            for (let i = 0; i < 9; i++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = i;
                cell.addEventListener('click',  handleCellClick);
                boardElement.appendChild(cell);
            }
        }

        // Lida com o clique na célula
        function handleCellClick(event){
            const clickedCell = event.target;
            const clickedCellIndex = parseInt(clickedCell.dataset.index);

            if(boardState[clickedCellIndex] !== null || !gameActive || currentPlayer !== PLAYER){
                return;
            }

            placeMark(clickedCell, clickedCellIndex, PLAYER);

            if(checkWin(PLAYER)){
                endGame(false, PLAYER);
            } else if (isDraw()){
                endGame(true);
            } else {
                swapPlayerAndPlayComputer();
            }
        }

        // Coloca a marca (gato ou coelho) na célula
        function placeMark(cell, index, player){
            boardState[index] = player;
            cell.innerHTML = player === PLAYER ? catImage : rabbitImage;
            cell.classList.add('occupied');
        }

        // Troca o jogador e aciona a jogada do computador
        function swapPlayerAndPlayComputer(){
            currentPlayer = COMPUTER;
            statusElement.textContent = 'Vez do Coelho...';
            // Adiciona u  pequeno delay para a jogada do computador parecer mas natural
            setTimeout(computerMove, 800);
        }

        // Lógica da jogada do computador
        function computerMove() {
            if (!gameActive) return;

            // 1. Tenta vencer
            let move = findBestMove(COMPUTER);
            if (move !== -1) {
                const cell = boardElement.children[move];
                placeMark(cell, move, COMPUTER);
            } else {
                // 2. Tenta bloquear o jogador
                move = findBestMove(PLAYER);
                if (move !== -1) {
                    const cell = boardElement.children[move];
                    placeMark(cell, move, COMPUTER);
                } else {
                    // 3. Joga em um canto ou centro aleatório se disponível
                    const emptyCells = boardState.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
                    const cornersAndCenter = [0, 2, 6, 8, 4].filter(idx => emptyCells.includes(idx));
                    if(cornersAndCenter.length > 0) {
                        const randomIndex = Math.floor(Math.random() * cornersAndCenter.length);
                        move = cornersAndCenter[randomIndex];
                    } else {
                        // 4. Joga em qualquer lugar aleatório
                        const randomIndex = Math.floor(Math.random() * emptyCells.length);
                        move = emptyCells[randomIndex];
                    }
                    const cell = boardElement.children[move];
                    placeMark(cell, move, COMPUTER);
                }
            }

            if (checkWin(COMPUTER)) {
                endGame(false, COMPUTER);
            } else if (isDraw()) {
                endGame(true);
            } else {
                currentPlayer = PLAYER;
                statusElement.textContent = 'Sua vez!';
            }
        }

        // Encontra o melhor movimento (para vencer ou bloquear)
        function findBestMove(player) {
            for (const condition of winningConditions) {
                const [a, b, c] = condition;
                // Verifica se duas células são do jogador e uma está vazia
                if (boardState[a] === player && boardState[b] === player && boardState[c] === null) return c;
                if (boardState[a] === player && boardState[c] === player && boardState[b] === null) return b;
                if (boardState[b] === player && boardState[c] === player && boardState[a] === null) return a;
            }
            return -1; // Nenhum movimento encontrado
        }

        // Verifica se há um vencedor
        function checkWin(player) {
            return winningConditions.some(condition => {
                return condition.every(index => boardState[index] === player);
            });
        }

        // Verifica se o jogo empatou
        function isDraw() {
            return boardState.every(cell => cell !== null);
        }

        // Finaliza o jogo
        function endGame(draw, winner) {
            gameActive = false;
            statusElement.textContent = 'Fim de Jogo!';
            if (draw) {
                winnerMessageElement.textContent = 'Deu Velha!';
            } else {
                winnerMessageElement.innerHTML = `${winner === PLAYER ? catImage : rabbitImage} <span class="ml-4">Venceu!</span>`;
                // Ajuste para alinhar imagem e texto
                winnerMessageElement.classList.add('flex', 'items-center', 'justify-center');
                winnerMessageElement.querySelector('img').style.width = '50px';
                winnerMessageElement.querySelector('img').style.height = '50px';

                // Atualiza a pontuação
                if (winner === PLAYER) {
                    playerScore++;
                    playerScoreElement.textContent = playerScore;
                } else {
                    computerScore++;
                    computerScoreElement.textContent = computerScore;
                }
                // Salva a pontuação no localStorage
                saveScores();
            }
            // Mostra o modal de fim de jogo
            winnerModal.classList.remove('opacity-0', 'pointer-events-none');
        }

        // Reinicia o jogo
        function restartGame() {
            gameActive = true;
            currentPlayer = PLAYER;
            boardState = Array(9).fill(null);
            statusElement.textContent = 'Sua vez!';
            createBoard();
             // Esconde o modal de fim de jogo
            winnerModal.classList.add('opacity-0', 'pointer-events-none');
            winnerMessageElement.classList.remove('flex', 'items-center', 'justify-center');
        }

        // Salva as pontuações no localStorage
        function saveScores() {
            localStorage.setItem('ticTacToeScores', JSON.stringify({
                player: playerScore,
                computer: computerScore
            }));
        }

        // Carrega as pontuações do localStorage
        function loadScores() {
            const scores = JSON.parse(localStorage.getItem('ticTacToeScores'));
            if (scores) {
                playerScore = scores.player;
                computerScore = scores.computer;
                playerScoreElement.textContent = playerScore;
                computerScoreElement.textContent = computerScore;
            }
        }

        // Reinicia as pontuações
        function resetScores() {
            playerScore = 0;
            computerScore = 0;
            playerScoreElement.textContent = '0';
            computerScoreElement.textContent = '0';
            saveScores();
        }

        // --- Inicialização do Jogo ---

        restartButton.addEventListener('click', restartGame);
        playAgainButton.addEventListener('click', restartGame);
        resetScoresButton.addEventListener('click', resetScores);
        // Adicionar um ouvinte de evento de tecla para a combinação Shift+R para resetar pontuações
        document.addEventListener('keydown', function(event) {
            if (event.shiftKey && event.key === 'R') {
                resetScores();
            }
        });
        
        // Carrega as pontuações ao iniciar o jogo
        loadScores();
        createBoard();