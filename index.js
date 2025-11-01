// --- 1. CONFIGURAÇÃO DOS NÍVEIS ---
const levels = [
    // Níveis Originais
    { gridSize: 8, words: ["CASA", "CARRO", "LIVRO", "ARVORE", "RIO", "SOL", "LUA", "ESTRELA", "CIDADE", "ESTRADA"], directions: ['horizontal', 'vertical'] },
    { gridSize: 9, words: ["ESCOLA", "MESA", "CADEIRA", "FLOR", "JANELA", "DOCE", "PARQUE", "VERDE", "AZUL", "FELIZ"], directions: ['horizontal', 'vertical', 'horizontalReverse'] },
    { gridSize: 10, words: ["MONTANHA", "PONTE", "PRAIA", "ONDA", "VENTO", "NOITE", "DIA", "SONHO", "TEMPO", "FUTURO"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse'] },
    { gridSize: 11, words: ["CRIANÇA", "BRINCAR", "AMIGO", "FAMILIA", "VIAGEM", "PASSEIO", "CAMINHAR", "ESPACO", "PLANETA", "MUNDO"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown'] },
    { gridSize: 12, words: ["COMPUTADOR", "PROGRAMA", "TECLADO", "MOUSE", "TELA", "CODIGO", "SISTEMA", "DADOS", "REDE", "DIGITAL"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp'] },
    { gridSize: 13, words: ["UNIVERSO", "ASTRONAUTA", "GALAXIA", "COMETA", "ORBITA", "TELESCOPIO", "FOGUETE", "ALIEN", "GRAVIDADE", "ESTACAO"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse'] },
    { gridSize: 14, words: ["CONHECIMENTO", "INTELIGENCIA", "CULTURA", "SABEDORIA", "FILOSOFIA", "CIENCIA", "HISTORIA", "GEOGRAFIA", "MATEMATICA", "LITERATURA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 15, words: ["CONSTITUCIONAL", "DESENVOLVIMENTO", "OPORTUNIDADE", "RESPONSABILIDADE", "TECNOLOGIA", "COMUNICACAO", "INFRAESTRUTURA", "SUSTENTABILIDADE", "GLOBALIZACAO", "AMBIENTE"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 16, words: ["OTORRINOLARINGOLOGISTA", "OFTALMOLOGIA", "GASTROENTEROLOGIA", "CARDIOLOGIA", "NEUROLOGIA", "PEDIATRIA", "GERIATRIA", "PSICOLOGIA", "ODONTOLOGIA", "DERMATOLOGIA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 18, words: ["PNEUMONOULTRAMICROSCOPICOSSILICOVOLCANOCONIOSE", "ANTIDESESTABELECIMENTARISMO", "INCOMPREENSIBILIDADES", "EXTRAORDINARIO", "AUTOMATIZACAO", "BIODIVERSIDADE", "INFRAESTRUTURA", "CONSCIENCIA", "INTERDISCIPLINAR", "AUTOSSUFICIENCIA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    
    // 10 NOVOS NÍVEIS
    { gridSize: 18, words: ["MERCURIO", "VENUS", "TERRA", "MARTE", "JUPITER", "SATURNO", "URANO", "NETUNO", "PLUTAO", "ASTEROIDE", "NEBULOSA", "SUPERNOVA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 19, words: ["EINSTEIN", "NEWTON", "GALILEU", "CURIE", "DARWIN", "TESLA", "KEPLER", "COPERNICO", "ARQUIMEDES", "PASTEUR", "HAWKING", "FARADAY"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 19, words: ["BRASILIA", "MOSCOU", "PEQUIM", "WASHINGTON", "CANBERRA", "OTTAWA", "BERLIM", "PARIS", "LONDRES", "ROMA", "MADRID", "TOQUIO"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 20, words: ["VIOLINO", "PIANO", "GUITARRA", "BATERIA", "SAXOFONE", "TROMPETE", "FLAUTA", "VIOLONCELO", "CONTRABAIXO", "HARPA", "ACORDEAO", "CLARINETE"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 20, words: ["LEONARDO", "MICHELANGELO", "RAFAEL", "DONATELLO", "REMBRANDT", "MONET", "PICASSO", "VAN GOGH", "DALI", "VELAZQUEZ", "CARAVAGGIO", "RENOIR"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 21, words: ["AMAZONIA", "SAARA", "HIMALAIA", "ANDES", "NILO", "EVEREST", "PACIFICO", "ATLANTICO", "ANTARTIDA", "GROENLANDIA", "CONGO", "GANGES"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 22, words: ["QUIMICA", "FISICA", "BIOLOGIA", "ASTRONOMIA", "GEOLOGIA", "ECOLOGIA", "GENETICA", "BOTANICA", "ZOOLOGIA", "CITOLOGIA", "MECANICA", "TERMODINAMICA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 23, words: ["ARQUITETURA", "ENGENHARIA", "MEDICINA", "ADVOCACIA", "JORNALISMO", "PUBLICIDADE", "ECONOMIA", "ADMINISTRACAO", "PSICANALISE", "ANTROPOLOGIA", "SOCIOLOGIA", "PALEONTOLOGIA"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 24, words: ["PARADOXO", "METAFORA", "ALGORITMO", "HEURISTICA", "EPISTEMOLOGIA", "ONTOLOGIA", "SILOGISMO", "DIALETICA", "EMPIRISMO", "RACIONALISMO", "FENOMENOLOGIA", "EXISTENCIALISMO"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] },
    { gridSize: 25, words: ["CALEIDOSCOPIO", "VENTRILOQUO", "ORNITORRINCO", "PARALELEPIPEDO", "PROTAGONISTA", "ANACRONISMO", "METAMORFOSE", "UBIQUIDADE", "RESILIENCIA", "PERSPECTIVA", "EQUILIBRIO", "SINERGIA", "QUINTESSENCIA", "EFEMERIDADE"], directions: ['horizontal', 'vertical', 'horizontalReverse', 'verticalReverse', 'diagonalDown', 'diagonalUp', 'diagonalDownReverse', 'diagonalUpReverse'] }
];

// --- 2. CLASSE DO JOGO (Lógica Central) ---
class WordSearchGame {
    constructor(domElements, config) {
        this.elements = domElements;
        this.config = config;
        this.foundColorsCount = 6; 
        this.colorRGBMap = { 0: 'var(--found-rgb-0)', 1: 'var(--found-rgb-1)', 2: 'var(--found-rgb-2)', 3: 'var(--found-rgb-3)', 4: 'var(--found-rgb-4)', 5: 'var(--found-rgb-5)' };
        this.directionMap = { 'horizontal': { dx: 1, dy: 0 }, 'vertical': { dx: 0, dy: 1 }, 'horizontalReverse': { dx: -1, dy: 0 }, 'verticalReverse': { dx: 0, dy: -1 }, 'diagonalDown': { dx: 1, dy: 1 }, 'diagonalUp': { dx: 1, dy: -1 }, 'diagonalDownReverse': { dx: -1, dy: -1 }, 'diagonalUpReverse': { dx: -1, dy: 1 } };
        this.state = { currentLevelIndex: 0, grid: [], wordsToFind: [], foundWords: new Set(), wordLocations: {}, gameActive: false, selectedCells: [], lastClickedCell: null, wordsFoundCount: 0, cellColors: {} };
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.levelChangeTimeout = null;
        this.eventsBound = false;
        
        // Contexto de Áudio para efeitos sonoros
        this.audioContext = null;
    }
    
    // Inicializa o contexto de áudio com um gesto do usuário
    initAudio() {
        if (!this.audioContext) {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.error("Web Audio API não é suportada neste navegador.", e);
            }
        }
    }

    // Função para tocar o som de palavra encontrada
    playFoundWordSound() {
        if (!this.audioContext) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.01);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.exponentialRampToValueAtTime(0.00001, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }

    showTutorial() { this.state.gameActive = false; this.elements.tutorialModal.style.display = 'flex'; }
    hideTutorial() { this.state.gameActive = true; this.elements.tutorialModal.style.display = 'none'; }

    startGame(initialLevelIndex) {
        this.initAudio(); // Inicializa o áudio no início do jogo
        this.state.currentLevelIndex = initialLevelIndex;
        this.elements.startScreen.style.display = 'none';
        this.elements.gameWrapper.style.display = 'flex';
        this.elements.totalLevels.textContent = this.config.levels.length;
        this.bindEvents();
        this.loadLevel(this.state.currentLevelIndex);
    }

    loadLevel(levelIndex) {
        this.state.foundWords.clear(); this.state.wordLocations = {}; this.state.cellColors = {}; this.elements.grid.innerHTML = ''; this.elements.wordList.innerHTML = ''; this.elements.levelCompleteMessage.style.display = 'none'; this.state.selectedCells = []; this.state.currentLevelIndex = levelIndex; this.state.wordsFoundCount = 0; this.state.lastClickedCell = null; 
        if (this.levelChangeTimeout) clearTimeout(this.levelChangeTimeout);

        const level = this.config.levels[levelIndex];
        if (!level) {
            alert("🎉 Parabéns! Você completou todos os níveis!");
            window.location.reload(); // Recarrega para voltar à tela inicial
            return;
        }
        
        if (levelIndex === parseInt(this.elements.difficultySelect.value)) { this.showTutorial(); } else { this.state.gameActive = true; }

        const { gridSize, words, directions } = level;
        this.state.wordsToFind = words.map(word => word.toUpperCase());
        this.elements.levelDisplay.textContent = levelIndex + 1;

        let placementSuccess = false; let attempts = 0;
        while (!placementSuccess && attempts < 10) { 
            attempts++; this.state.grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)); this.state.wordLocations = {}; placementSuccess = this.placeWords(gridSize, directions);
        }
        if (!placementSuccess) { console.error(`Falha ao posicionar palavras para o nível ${levelIndex + 1}.`); this.loadLevel(this.state.currentLevelIndex); return; }

        this.fillEmptyCells(gridSize); this.renderGrid(gridSize); this.renderWordList();
    }

    placeWords(gridSize, allowedDirections) {
        const shuffledWords = [...this.state.wordsToFind].sort((a, b) => b.length - a.length);
        for (const word of shuffledWords) {
            let placed = false; let attempts = 0;
            while (!placed && attempts < 500) { 
                attempts++; const direction = allowedDirections[Math.floor(Math.random() * allowedDirections.length)]; const { dx, dy } = this.directionMap[direction]; const x = Math.floor(Math.random() * gridSize); const y = Math.floor(Math.random() * gridSize);
                if (this.canPlaceWord(word, x, y, dx, dy, gridSize)) {
                    const wordCoords = [];
                    for (let i = 0; i < word.length; i++) { const newX = x + i * dx; const newY = y + i * dy; this.state.grid[newY][newX] = word[i]; wordCoords.push({ x: newX, y: newY }); }
                    this.state.wordLocations[word] = wordCoords; placed = true;
                }
            }
            if (!placed) return false; 
        }
        return true;
    }

    canPlaceWord(word, x, y, dx, dy, gridSize) {
        for (let i = 0; i < word.length; i++) {
            const newX = x + i * dx; const newY = y + i * dy;
            if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) return false;
            const cell = this.state.grid[newY][newX]; if (cell !== null && cell !== word[i]) return false;
        }
        return true;
    }

    fillEmptyCells(gridSize) {
        for (let y = 0; y < gridSize; y++) { for (let x = 0; x < gridSize; x++) { if (this.state.grid[y][x] === null) { this.state.grid[y][x] = this.alphabet[Math.floor(Math.random() * this.alphabet.length)]; } } }
    }
    
    // Lógica de responsividade aprimorada
    renderGrid(gridSize) {
        this.elements.grid.innerHTML = '';
        
        const containerWidth = this.elements.gameContainer.clientWidth - 20;
        const containerHeight = this.elements.gameContainer.clientHeight - 20;
        const cellSize = Math.floor(Math.min(containerWidth, containerHeight) / gridSize);
        const fontSize = `${Math.max(10, cellSize * 0.5)}px`;

        document.documentElement.style.setProperty('--cell-size', `${cellSize}px`);
        document.documentElement.style.setProperty('--font-size', fontSize);

        this.elements.grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                cell.textContent = this.state.grid[y][x];
                cell.dataset.x = x;
                cell.dataset.y = y;

                const key = `${x},${y}`;
                if (this.state.cellColors[key]) {
                    const shadows = this.state.cellColors[key].map(rgb => `0 0 0 50px rgba(${rgb}, var(--found-opacity)) inset`).join(', ');
                    cell.style.boxShadow = shadows;
                }

                this.elements.grid.appendChild(cell);
            }
        }
    }

    renderWordList() { this.state.wordsToFind.forEach(word => { const li = document.createElement('li'); li.textContent = word; li.id = `word-${word}`; this.elements.wordList.appendChild(li); }); }

    bindEvents() {
        if (!this.eventsBound) {
            this.elements.grid.addEventListener('mousedown', this.handleCellClick.bind(this));
            this.elements.closeTutorialBtn.addEventListener('click', this.hideTutorial.bind(this));
            this.eventsBound = true;
        }
    }
    
    clearSelection() { this.state.selectedCells.forEach(cell => cell.classList.remove('selected')); this.state.selectedCells = []; this.state.lastClickedCell = null; }

    handleCellClick(e) {
        if (!this.state.gameActive || e.target === this.elements.grid) return;
        const cell = e.target.closest('.grid-cell'); if (!cell) return;
        
        if (this.state.lastClickedCell === null) { this.clearSelection(); this.state.lastClickedCell = cell; cell.classList.add('selected'); } 
        else if (cell === this.state.lastClickedCell) { this.clearSelection(); } 
        else {
            const newCells = this.getPath(this.state.lastClickedCell, cell);
            if (newCells.length > 1) { this.state.selectedCells = newCells; newCells.forEach(c => c.classList.add('selected')); this.checkSelection(); }
            this.clearSelection();
        }
    }

    getPath(startCell, endCell) {
        const startX = parseInt(startCell.dataset.x); const startY = parseInt(startCell.dataset.y); const endX = parseInt(endCell.dataset.x); const endY = parseInt(endCell.dataset.y);
        const dx = endX - startX; const dy = endY - startY;
        if (!(dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy))) return [];
        const cells = []; const numSteps = Math.max(Math.abs(dx), Math.abs(dy)); if (numSteps === 0) return [];
        const stepX = dx / numSteps; const stepY = dy / numSteps;
        for (let i = 0; i <= numSteps; i++) {
            const cell = document.querySelector(`[data-x="${startX + i * stepX}"][data-y="${startY + i * stepY}"]`);
            if (cell) { cells.push(cell); } else { return []; }
        }
        return cells;
    }

    markWordAsFound(word, cellsToMark, colorIndex) {
        this.playFoundWordSound();
        this.state.foundWords.add(word);
        const colorRGB = this.colorRGBMap[colorIndex]; const colorClass = `found-${colorIndex}`;

        cellsToMark.forEach(cell => {
            const key = `${cell.dataset.x},${cell.dataset.y}`;
            if (!this.state.cellColors[key]) { this.state.cellColors[key] = []; }
            this.state.cellColors[key].push(colorRGB);
            
            const shadows = this.state.cellColors[key].map(rgb => `0 0 0 50px rgba(${rgb}, var(--found-opacity)) inset`).join(', ');
            cell.style.boxShadow = shadows;
        });

        const wordLi = document.getElementById(`word-${word}`);
        if (wordLi) { wordLi.classList.add('found-list-word', colorClass); }

        this.checkWinCondition();
    }
    
    checkSelection() {
        if (this.state.selectedCells.length === 0) return;
        const selectedWord = this.state.selectedCells.map(cell => cell.textContent).join('');
        const selectedWordReverse = [...selectedWord].reverse().join('');

        for (const word of this.state.wordsToFind) {
            if (!this.state.foundWords.has(word) && (word === selectedWord || word === selectedWordReverse)) {
                const coords = this.state.wordLocations[word];
                if (this.isCorrectLocation(coords, this.state.selectedCells)) {
                    const cellsToMark = (word === selectedWord) ? this.state.selectedCells : this.state.selectedCells.slice().reverse();
                    const colorIndex = this.state.wordsFoundCount % this.foundColorsCount;
                    this.markWordAsFound(word, cellsToMark, colorIndex);
                    this.state.wordsFoundCount++; 
                    return;
                }
            }
        }
    }

    isCorrectLocation(wordCoords, cells) {
        if (wordCoords.length !== cells.length) return false;
        const cellCoords = cells.map(cell => ({ x: parseInt(cell.dataset.x), y: parseInt(cell.dataset.y) }));
        const matchNormal = wordCoords.every((coord, index) => coord.x === cellCoords[index]?.x && coord.y === cellCoords[index]?.y);
        const matchReverse = wordCoords.slice().reverse().every((coord, index) => coord.x === cellCoords[index]?.x && coord.y === cellCoords[index]?.y);
        return matchNormal || matchReverse;
    }

    checkWinCondition() {
        if (this.state.foundWords.size === this.state.wordsToFind.length) {
            this.elements.levelCompleteMessage.style.display = 'block';
            this.levelChangeTimeout = setTimeout(() => {
                this.loadLevel(this.state.currentLevelIndex + 1);
            }, 2500);
        }
    }
}

// --- 3. INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    const domElements = {
        startScreen: document.getElementById('start-screen'), startButton: document.getElementById('start-button'),
        gameWrapper: document.getElementById('game-wrapper'), gameContainer: document.getElementById('game-container'),
        grid: document.getElementById('grid'), wordList: document.getElementById('word-list'),
        levelDisplay: document.getElementById('level-display'), totalLevels: document.getElementById('total-levels'),
        levelCompleteMessage: document.getElementById('level-complete-message'), tutorialModal: document.getElementById('tutorial-modal'),
        closeTutorialBtn: document.getElementById('close-tutorial-btn'), difficultySelect: document.getElementById('difficulty-select')
    };

    const game = new WordSearchGame(domElements, { levels: levels });
    
    domElements.startButton.addEventListener('click', () => {
        const initialLevelIndex = parseInt(domElements.difficultySelect.value);
        game.startGame(initialLevelIndex);
    });

    domElements.closeTutorialBtn.addEventListener('click', () => { game.hideTutorial(); });

    // Listener de redimensionamento para ajustar a grade dinamicamente
    window.addEventListener('resize', () => {
        if (domElements.gameWrapper.style.display === 'flex' && game.state.currentLevelIndex < levels.length) {
             clearTimeout(window.resizedFinished);
             window.resizedFinished = setTimeout(() => {
                 game.renderGrid(levels[game.state.currentLevelIndex].gridSize);
             }, 100);
        }
    });
});