// Game State
let currentSystem = '';
let currentLevel = 0;
let score = 0;
let correctAnswers = 0;
let totalQuestions = 0;

// Game Data
const gameData = {
    digestive: {
        title: 'Sistema Digestório',
        levels: [
            {
                organ: 'Boca',
                image: './images/digestive_mouth.png',
                description: 'A boca é onde começa a digestão. Os dentes trituram o alimento e a saliva inicia a quebra dos carboidratos.',
                question: 'Qual enzima é responsável pela digestão de carboidratos na boca?',
                options: ['Pepsina', 'Amilase Salivar', 'Lipase', 'Tripsina'],
                correct: 1,
                fact: 'Você sabia que produzimos cerca de 1 a 1,5 litros de saliva por dia? A saliva não só ajuda na digestão, mas também protege os dentes e a boca de bactérias!'
            },
            {
                organ: 'Esôfago',
                image: './images/digestive_esophagus.png',
                description: 'O esôfago é um tubo muscular que transporta o alimento da faringe para o estômago através de movimentos peristálticos.',
                question: 'Qual é a função principal do esôfago?',
                options: ['Absorver nutrientes', 'Produzir enzimas digestivas', 'Transportar o alimento da faringe para o estômago', 'Armazenar bile'],
                correct: 2,
                fact: 'O peristaltismo é tão eficiente que você pode engolir mesmo de cabeça para baixo! Os músculos do esôfago contraem em ondas para empurrar o alimento.'
            },
            {
                organ: 'Estômago',
                image: './images/digestive_stomach.png',
                description: 'O estômago é um órgão em forma de J que armazena e digere os alimentos através do suco gástrico.',
                question: 'Onde o alimento é transformado em quimo?',
                options: ['Boca', 'Esôfago', 'Estômago', 'Intestino Delgado'],
                correct: 2,
                fact: 'O estômago pode se expandir para conter até 1,5 litros de alimento! Suas paredes produzem ácido clorídrico tão forte que poderia dissolver metal.'
            },
            {
                organ: 'Intestino Delgado',
                image: './images/digestive_small_intestine.png',
                description: 'O intestino delgado é onde ocorre a maior parte da absorção de nutrientes. Suas vilosidades aumentam a superfície de absorção.',
                question: 'Onde ocorre a maior parte da absorção de nutrientes no sistema digestório?',
                options: ['Estômago', 'Intestino Grosso', 'Intestino Delgado', 'Esôfago'],
                correct: 2,
                fact: 'O intestino delgado tem cerca de 6 metros de comprimento, mas sua superfície interna, devido às vilosidades, é equivalente a uma quadra de tênis!'
            },
            {
                organ: 'Intestino Grosso',
                image: './images/digestive_large_intestine.png',
                description: 'O intestino grosso absorve água e forma as fezes. É a última parte do sistema digestório.',
                question: 'Qual parte do sistema digestório é responsável pela absorção de água e formação das fezes?',
                options: ['Intestino Delgado', 'Estômago', 'Intestino Grosso', 'Esôfago'],
                correct: 2,
                fact: 'O intestino grosso abriga trilhões de bactérias benéficas que ajudam na digestão e produzem vitaminas importantes como a vitamina K!'
            }
        ]
    },
    respiratory: {
        title: 'Sistema Respiratório',
        levels: [
            {
                organ: 'Nariz',
                image: './images/respiratory_nose.png',
                description: 'O nariz filtra, aquece e umedece o ar que respiramos. Os pelos nasais e o muco capturam partículas estranhas.',
                question: 'Qual é a função dos cílios e do muco nas vias aéreas?',
                options: ['Produzir som', 'Aquecer o ar', 'Filtrar e umedecer o ar, retendo partículas estranhas', 'Realizar trocas gasosas'],
                correct: 2,
                fact: 'O nariz pode detectar mais de 1 trilhão de odores diferentes! Ele também aquece o ar frio até a temperatura corporal em apenas alguns segundos.'
            },
            {
                organ: 'Traqueia',
                image: './images/respiratory_trachea.png',
                description: 'A traqueia é um tubo reforçado por anéis cartilaginosos que conduz o ar dos brônquios até a laringe.',
                question: 'Qual estrutura impede que o alimento entre na traqueia durante a deglutição?',
                options: ['Faringe', 'Laringe', 'Epiglote', 'Esôfago'],
                correct: 2,
                fact: 'A traqueia tem cerca de 10-12 cm de comprimento e é revestida por cílios que se movem como uma "escada rolante" para expulsar partículas estranhas!'
            },
            {
                organ: 'Pulmões',
                image: './images/respiratory_lungs.png',
                description: 'Os pulmões são órgãos esponjosos onde ocorrem as trocas gasosas. Contêm milhões de alvéolos.',
                question: 'Onde ocorrem as trocas gasosas (oxigênio e dióxido de carbono) nos pulmões?',
                options: ['Brônquios', 'Bronquíolos', 'Alvéolos', 'Traqueia'],
                correct: 2,
                fact: 'Os pulmões contêm cerca de 300 a 500 milhões de alvéolos! Se esticados, cobririam uma área de cerca de 70 metros quadrados.'
            },
            {
                organ: 'Diafragma',
                image: './images/respiratory_diaphragm.png',
                description: 'O diafragma é o principal músculo da respiração. Quando se contrai, permite a entrada de ar nos pulmões.',
                question: 'Qual é o principal músculo envolvido na respiração?',
                options: ['Músculos intercostais', 'Diafragma', 'Músculos abdominais', 'Músculos do pescoço'],
                correct: 1,
                fact: 'O diafragma se move cerca de 1,5 cm durante a respiração normal, mas pode se mover até 10 cm durante a respiração profunda!'
            },
            {
                organ: 'Sistema Completo',
                image: './images/respiratory_lungs.png',
                description: 'O sistema respiratório trabalha em conjunto para garantir que o oxigênio chegue a todas as células do corpo.',
                question: 'Uma pessoa adulta em repouso respira quantas vezes por minuto aproximadamente?',
                options: ['5 a 8 vezes', '12 a 20 vezes', '25 a 30 vezes', '35 a 40 vezes'],
                correct: 1,
                fact: 'Respiramos mais de 17.000 vezes por dia! O ar que exalamos ainda contém cerca de 15% de oxigênio, por isso a respiração boca a boca funciona em primeiros socorros.'
            }
        ]
    }
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const systemCards = document.querySelectorAll('.system-card');
const backBtn = document.getElementById('back-btn');
const systemTitle = document.getElementById('system-title');
const progressBar = document.getElementById('progress');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const organImage = document.getElementById('organ-image');
const organName = document.getElementById('organ-name');
const organDescription = document.getElementById('organ-description');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionArea = document.getElementById('question-area');
const factArea = document.getElementById('fact-area');
const factText = document.getElementById('fact-text');
const continueBtn = document.getElementById('continue-btn');
const finalScore = document.getElementById('final-score');
const correctAnswersElement = document.getElementById('correct-answers');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');
const feedbackModal = document.getElementById('feedback-modal');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const feedbackClose = document.getElementById('feedback-close');
const confettiCanvas = document.getElementById('confetti-canvas');

// Event Listeners
systemCards.forEach(card => {
    card.addEventListener('click', () => {
        const system = card.dataset.system;
        startGame(system);
    });
});

backBtn.addEventListener('click', showWelcomeScreen);
continueBtn.addEventListener('click', nextLevel);
restartBtn.addEventListener('click', () => startGame(currentSystem));
homeBtn.addEventListener('click', showWelcomeScreen);
feedbackClose.addEventListener('click', closeFeedbackModal);

// Game Functions
function startGame(system) {
    currentSystem = system;
    currentLevel = 0;
    score = 0;
    correctAnswers = 0;
    totalQuestions = gameData[system].levels.length;
    
    updateUI();
    showGameScreen();
    loadLevel();
}

function showWelcomeScreen() {
    welcomeScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
}

function showGameScreen() {
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');
}

function showResultsScreen() {
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScore.textContent = score;
    correctAnswersElement.textContent = `${correctAnswers}/${totalQuestions}`;
    
    // Trigger confetti
    createConfetti();
}

function loadLevel() {
    const levelData = gameData[currentSystem].levels[currentLevel];
    
    // Update system title
    systemTitle.textContent = gameData[currentSystem].title;
    
    // Update progress
    const progress = ((currentLevel + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update organ display
    organImage.src = levelData.image;
    organImage.alt = levelData.organ;
    organName.textContent = levelData.organ;
    organDescription.textContent = levelData.description;
    
    // Update question
    questionText.textContent = levelData.question;
    
    // Create option buttons
    optionsContainer.innerHTML = '';
    levelData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.option = index;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    // Show question area, hide fact area
    questionArea.classList.remove('hidden');
    factArea.classList.add('hidden');
}

function selectAnswer(selectedIndex) {
    const levelData = gameData[currentSystem].levels[currentLevel];
    const isCorrect = selectedIndex === levelData.correct;
    
    // Disable all buttons
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === levelData.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score and stats
    if (isCorrect) {
        score += 100;
        correctAnswers++;
        updateUI();
        showFeedback(true, 'Correto!', 'Muito bem! Você acertou a resposta.');
    } else {
        showFeedback(false, 'Incorreto!', `A resposta correta é: ${levelData.options[levelData.correct]}`);
    }
}

function showFeedback(isCorrect, title, text) {
    feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    feedbackTitle.textContent = title;
    feedbackText.textContent = text;
    feedbackModal.classList.remove('hidden');
    
    if (isCorrect) {
        createConfetti();
    }
}

function closeFeedbackModal() {
    feedbackModal.classList.add('hidden');
    
    // Show fact after closing feedback
    setTimeout(() => {
        showFact();
    }, 300);
}

function showFact() {
    const levelData = gameData[currentSystem].levels[currentLevel];
    
    factText.textContent = levelData.fact;
    questionArea.classList.add('hidden');
    factArea.classList.remove('hidden');
}

function nextLevel() {
    currentLevel++;
    
    if (currentLevel >= totalQuestions) {
        showResultsScreen();
    } else {
        loadLevel();
    }
}

function updateUI() {
    scoreElement.textContent = score;
    levelElement.textContent = currentLevel + 1;
}

// Confetti Animation
function createConfetti() {
    const canvas = confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach((piece, index) => {
            // Update position
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            // Apply gravity
            piece.vy += 0.1;
            
            // Draw confetti piece
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            ctx.restore();
            
            // Remove pieces that are off screen
            if (piece.y > canvas.height + 10) {
                confettiPieces.splice(index, 1);
            }
        });
        
        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    showWelcomeScreen();
});

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

