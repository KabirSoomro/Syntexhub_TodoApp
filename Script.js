// Data Structure
const quizData = {
    categories: {
        'country-currency': {
            name: 'Country & Currency',
            icon: 'fa-coins',
            levels: {
                'level-1': {
                    name: 'Novice',
                    questions: [
                        { question: 'What is the currency of Japan?', options: ['Won', 'Yuan', 'Yen', 'Ringgit'], correct: 2 },
                        { question: 'What is the currency of United Kingdom?', options: ['Euro', 'Pound Sterling', 'Franc', 'Dollar'], correct: 1 },
                        { question: 'What is the currency of USA?', options: ['US Dollar', 'Euro', 'Peso', 'Pound'], correct: 0 },
                        { question: 'What is the currency of India?', options: ['Taka', 'Indian Rupee', 'Baht', 'Yen'], correct: 1 },
                        { question: 'What is the currency of China?', options: ['Yuan', 'Won', 'Yen', 'Ringgit'], correct: 0 }
                    ]
                },
                'level-2': {
                    name: 'Intermediate',
                    questions: [
                        { question: 'What is the currency of Australia?', options: ['Australian Dollar', 'Euro', 'Pound', 'Franc'], correct: 0 },
                        { question: 'What is the currency of Canada?', options: ['Canadian Dollar', 'US Dollar', 'Euro', 'Franc'], correct: 0 },
                        { question: 'What is the currency of Pakistan?', options: ['Taka', 'Afghan Afghani', 'Pakistani Rupee', 'Iranian Rial'], correct: 2 },
                        { question: 'What is the currency of Russia?', options: ['Ruble', 'Lev', 'Krona', 'Zloty'], correct: 0 },
                        { question: 'What is the currency of South Africa?', options: ['Rand', 'Pound', 'Dollar', 'Franc'], correct: 0 }
                    ]
                },
                'level-3': {
                    name: 'Expert',
                    questions: [
                        { question: 'What is the currency of Switzerland?', options: ['Euro', 'Swiss Franc', 'Krona', 'Mark'], correct: 1 },
                        { question: 'What is the currency of Brazil?', options: ['Peso', 'Real', 'Bolivar', 'Sol'], correct: 1 },
                        { question: 'What is the currency of Sweden?', options: ['Euro', 'Krona', 'Krone', 'Markka'], correct: 1 },
                        { question: 'What is the currency of South Korea?', options: ['Yen', 'Yuan', 'Won', 'Dong'], correct: 2 },
                        { question: 'What is the currency of Turkey?', options: ['Lira', 'Dinar', 'Rial', 'Dirham'], correct: 0 }
                    ]
                },
                'level-4': {
                    name: 'Master',
                    questions: [
                        { question: 'What is the currency of Thailand?', options: ['Baht', 'Dong', 'Rial', 'Kyat'], correct: 0 },
                        { question: 'What is the currency of Vietnam?', options: ['Yuan', 'Dong', 'Baht', 'Riel'], correct: 1 },
                        { question: 'What is the currency of Saudi Arabia?', options: ['Dinar', 'Riyal', 'Dirham', 'Pound'], correct: 1 },
                        { question: 'What is the currency of Kenya?', options: ['Shilling', 'Rand', 'Pula', 'Naira'], correct: 0 },
                        { question: 'What is the currency of Argentina?', options: ['Peso', 'Real', 'Bolivar', 'Guarani'], correct: 0 }
                    ]
                }
            }
        },
        'country-capital': {
            name: 'Country & Capital',
            icon: 'fa-landmark',
            levels: {
                'level-1': {
                    name: 'Novice',
                    questions: [
                        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 2 },
                        { question: 'What is the capital of Germany?', options: ['Vienna', 'Berlin', 'Munich', 'Frankfurt'], correct: 1 },
                        { question: 'What is the capital of Italy?', options: ['Venice', 'Milan', 'Naples', 'Rome'], correct: 3 },
                        { question: 'What is the capital of Spain?', options: ['Barcelona', 'Madrid', 'Seville', 'Valencia'], correct: 1 },
                        { question: 'What is the capital of Japan?', options: ['Kyoto', 'Osaka', 'Tokyo', 'Seoul'], correct: 2 }
                    ]
                },
                'level-2': {
                    name: 'Intermediate',
                    questions: [
                        { question: 'What is the capital of India?', options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'], correct: 1 },
                        { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correct: 2 },
                        { question: 'What is the capital of Pakistan?', options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'], correct: 2 },
                        { question: 'What is the capital of Russia?', options: ['St. Petersburg', 'Moscow', 'Kiev', 'Minsk'], correct: 1 },
                        { question: 'What is the capital of Canada?', options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'], correct: 3 }
                    ]
                },
                'level-3': {
                    name: 'Expert',
                    questions: [
                        { question: 'What is the capital of Brazil?', options: ['Rio de Janeiro', 'Sao Paulo', 'Brasilia', 'Buenos Aires'], correct: 2 },
                        { question: 'What is the capital of South Africa?', options: ['Johannesburg', 'Cape Town', 'Pretoria', 'Durban'], correct: 2 },
                        { question: 'What is the capital of Turkey?', options: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'], correct: 1 },
                        { question: 'What is the capital of Egypt?', options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'], correct: 1 },
                        { question: 'What is the capital of Argentina?', options: ['Santiago', 'Lima', 'Bogota', 'Buenos Aires'], correct: 3 }
                    ]
                },
                'level-4': {
                    name: 'Master',
                    questions: [
                        { question: 'What is the capital of New Zealand?', options: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'], correct: 1 },
                        { question: 'What is the capital of Norway?', options: ['Oslo', 'Bergen', 'Stockholm', 'Helsinki'], correct: 0 },
                        { question: 'What is the capital of Kenya?', options: ['Mombasa', 'Nairobi', 'Kisumu', 'Nakuru'], correct: 1 },
                        { question: 'What is the capital of Peru?', options: ['Lima', 'Cusco', 'Arequipa', 'Trujillo'], correct: 0 },
                        { question: 'What is the capital of Vietnam?', options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong'], correct: 1 }
                    ]
                }
            }
        },
        'mountains-seas': {
            name: 'Mountains & Seas',
            icon: 'fa-mountain-sun',
            levels: {
                'level-1': {
                    name: 'Novice',
                    questions: [
                        { question: 'What is the highest mountain in the world?', options: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'], correct: 2 },
                        { question: 'What is the largest ocean in the world?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 },
                        { question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correct: 1 },
                        { question: 'What is the deepest ocean in the world?', options: ['Pacific', 'Atlantic', 'Indian', 'Southern'], correct: 0 },
                        { question: 'What is the largest sea in the world?', options: ['Mediterranean', 'Caribbean', 'Philippine', 'Arabian'], correct: 2 }
                    ]
                },
                'level-2': {
                    name: 'Intermediate',
                    questions: [
                        { question: 'What is the highest mountain in Africa?', options: ['Mount Kenya', 'Kilimanjaro', 'Mount Stanley', 'Mount Speke'], correct: 1 },
                        { question: 'What is the largest desert in the world?', options: ['Arabian', 'Gobi', 'Sahara', 'Kalahari'], correct: 2 },
                        { question: 'What is the longest mountain range in the world?', options: ['Himalayas', 'Rockies', 'Andes', 'Alps'], correct: 2 },
                        { question: 'Which ocean lies between Africa and Australia?', options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 2 },
                        { question: 'What is the highest mountain in North America?', options: ['Denali', 'Mount Logan', 'Mount Whitney', 'Mount Elbert'], correct: 0 }
                    ]
                },
                'level-3': {
                    name: 'Expert',
                    questions: [
                        { question: 'What is the longest river in Asia?', options: ['Ganges', 'Mekong', 'Yangtze', 'Indus'], correct: 2 },
                        { question: 'Which sea separates Europe from Africa?', options: ['Red Sea', 'Mediterranean Sea', 'Black Sea', 'Caspian Sea'], correct: 1 },
                        { question: 'What is the highest mountain in Europe?', options: ['Mont Blanc', 'Mount Elbrus', 'Matterhorn', 'Mount Olympus'], correct: 1 },
                        { question: 'What is the deepest lake in the world?', options: ['Lake Victoria', 'Lake Superior', 'Lake Baikal', 'Lake Tanganyika'], correct: 2 },
                        { question: 'Which ocean is the smallest in the world?', options: ['Indian', 'Southern', 'Atlantic', 'Arctic'], correct: 3 }
                    ]
                },
                'level-4': {
                    name: 'Master',
                    questions: [
                        { question: 'What is the highest mountain in South America?', options: ['Aconcagua', 'Ojos del Salado', 'Monte Pissis', 'Huascaran'], correct: 0 },
                        { question: 'What is the largest coral reef system in the world?', options: ['Mesoamerican Reef', 'Great Barrier Reef', 'New Caledonia Barrier Reef', 'Red Sea Coral Reef'], correct: 1 },
                        { question: 'Which sea is the saltiest in the world?', options: ['Dead Sea', 'Red Sea', 'Mediterranean Sea', 'Baltic Sea'], correct: 0 },
                        { question: 'What is the longest river in Europe?', options: ['Danube', 'Rhine', 'Volga', 'Ural'], correct: 2 },
                        { question: 'What is the highest mountain in Antarctica?', options: ['Mount Vinson', 'Mount Tyree', 'Mount Shinn', 'Mount Craddock'], correct: 0 }
                    ]
                }
            }
        },
        'longest-biggest': {
            name: 'Longest & Biggest',
            icon: 'fa-globe',
            levels: {
                'level-1': {
                    name: 'Novice',
                    questions: [
                        { question: 'What is the biggest country in the world by area?', options: ['Canada', 'China', 'USA', 'Russia'], correct: 3 },
                        { question: 'What is the longest wall in the world?', options: ['Hadrian\'s Wall', 'Great Wall of China', 'Western Wall', 'Berlin Wall'], correct: 1 },
                        { question: 'What is the biggest continent in the world?', options: ['Africa', 'North America', 'Europe', 'Asia'], correct: 3 },
                        { question: 'What is the highest waterfall in the world?', options: ['Niagara Falls', 'Victoria Falls', 'Angel Falls', 'Iguazu Falls'], correct: 2 },
                        { question: 'What is the biggest island in the world?', options: ['New Guinea', 'Borneo', 'Madagascar', 'Greenland'], correct: 3 }
                    ]
                },
                'level-2': {
                    name: 'Intermediate',
                    questions: [
                        { question: 'What is the most populated country in the world (as of 2023)?', options: ['USA', 'China', 'India', 'Indonesia'], correct: 2 },
                        { question: 'What is the largest animal in the world?', options: ['African Elephant', 'Blue Whale', 'Colossal Squid', 'Giraffe'], correct: 1 },
                        { question: 'What is the tallest building in the world?', options: ['Shanghai Tower', 'Abraj Al-Bait', 'Ping An Finance Centre', 'Burj Khalifa'], correct: 3 },
                        { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], correct: 2 },
                        { question: 'What is the longest bone in the human body?', options: ['Tibia', 'Fibula', 'Femur', 'Humerus'], correct: 2 }
                    ]
                },
                'level-3': {
                    name: 'Expert',
                    questions: [
                        { question: 'What is the largest internal organ in the human body?', options: ['Heart', 'Lungs', 'Liver', 'Kidneys'], correct: 2 },
                        { question: 'What is the largest bird in the world?', options: ['Emu', 'Ostrich', 'Albatross', 'Condor'], correct: 1 },
                        { question: 'What is the longest river in the United States?', options: ['Mississippi', 'Missouri', 'Yukon', 'Rio Grande'], correct: 1 },
                        { question: 'What is the largest lake in Africa?', options: ['Lake Tanganyika', 'Lake Malawi', 'Lake Victoria', 'Lake Albert'], correct: 2 },
                        { question: 'What is the tallest tree species in the world?', options: ['Giant Sequoia', 'Coast Redwood', 'Douglas Fir', 'Mountain Ash'], correct: 1 }
                    ]
                },
                'level-4': {
                    name: 'Master',
                    questions: [
                        { question: 'What is the largest land carnivore?', options: ['Lion', 'Tiger', 'Polar Bear', 'Grizzly Bear'], correct: 2 },
                        { question: 'What is the longest venomous snake in the world?', options: ['Black Mamba', 'King Cobra', 'Inland Taipan', 'Rattlesnake'], correct: 1 },
                        { question: 'What is the largest flower in the world?', options: ['Titan Arum', 'Rafflesia arnoldii', 'Corpse Flower', 'Sunflower'], correct: 1 },
                        { question: 'What is the longest railway line in the world?', options: ['Trans-Siberian', 'Canadian Pacific', 'Qinghai-Tibet', 'Indian Pacific'], correct: 0 },
                        { question: 'What is the largest archipelago in the world?', options: ['Philippines', 'Japan', 'Indonesia', 'Maldives'], correct: 2 }
                    ]
                }
            }
        }
    }
};

// DOM Elements
const elements = {
    screens: {
        category: document.getElementById('category-screen'),
        level: document.getElementById('level-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    },
    categoryBtns: document.querySelectorAll('#category-screen .category-card'),
    levelBtns: document.querySelectorAll('#level-screen .level-card'),
    backToCategoriesBtn: document.getElementById('back-to-categories'),
    backToLevelsBtn: document.getElementById('back-to-levels'),
    levelScreenCategoryName: document.getElementById('selected-category-name'),
    quiz: {
        categoryIcon: document.getElementById('quiz-category-icon'),
        categoryLevelName: document.getElementById('current-category-level-name'),
        timerCircle: document.getElementById('timer-circle'),
        timeLeft: document.getElementById('time-left'),
        questionCounter: document.getElementById('question-counter'),
        progressBar: document.getElementById('progress-bar'),
        questionText: document.getElementById('question-text'),
        optionsGrid: document.getElementById('options-grid'),
        nextBtn: document.getElementById('next-btn'),
        skipBtn: document.getElementById('skip-btn'),
        submitBtn: document.getElementById('submit-btn')
    },
    results: {
        title: document.getElementById('feedback-title'),
        subtitle: document.getElementById('feedback-subtitle'),
        scoreCircle: document.getElementById('score-circle'),
        percentageText: document.getElementById('percentage'),
        scoreText: document.getElementById('score'),
        totalText: document.getElementById('total-questions'),
        avgTime: document.getElementById('avg-time'),
        skippedText: document.getElementById('skipped-questions'),
        restartBtn: document.getElementById('restart-btn')
    },
    themeToggle: document.getElementById('theme-toggle')
};

// Audio Context for Beeps
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'tick') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    }
}

// State
let state = {
    selectedCategoryId: null,
    selectedLevelId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    skipped: 0,
    timer: null,
    timeLeft: 15,
    timeTakenTotal: 0,
    isAnswered: false
};

const TIME_PER_QUESTION = 15;

// Theme Initialization
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

elements.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    elements.themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// Navigation Event Listeners
elements.categoryBtns.forEach(card => {
    card.addEventListener('click', () => {
        state.selectedCategoryId = card.dataset.category;
        elements.levelScreenCategoryName.textContent = quizData.categories[state.selectedCategoryId].name;
        switchScreen('level');
    });
});

elements.levelBtns.forEach(card => {
    card.addEventListener('click', () => {
        state.selectedLevelId = card.dataset.level;
        startQuiz();
    });
});

elements.backToCategoriesBtn.addEventListener('click', () => switchScreen('category'));
elements.backToLevelsBtn.addEventListener('click', () => {
    clearInterval(state.timer);
    switchScreen('level');
});
elements.results.restartBtn.addEventListener('click', () => switchScreen('category'));

elements.quiz.nextBtn.addEventListener('click', nextQuestion);
elements.quiz.skipBtn.addEventListener('click', skipQuestion);
elements.quiz.submitBtn.addEventListener('click', endQuiz);

function switchScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
        if (screen !== elements.screens[screenName]) {
            screen.classList.add('hidden');
        }
    });
    elements.screens[screenName].classList.remove('hidden');
    setTimeout(() => elements.screens[screenName].classList.add('active'), 10);
}

function startQuiz() {
    const categoryData = quizData.categories[state.selectedCategoryId];
    const levelData = categoryData.levels[state.selectedLevelId];
    
    // Reset State
    state.questions = [...levelData.questions].sort(() => Math.random() - 0.5); // Shuffle
    state.currentIndex = 0;
    state.score = 0;
    state.skipped = 0;
    state.timeTakenTotal = 0;
    
    // Update Header
    elements.quiz.categoryIcon.className = `fa-solid ${categoryData.icon}`;
    elements.quiz.categoryLevelName.textContent = `${categoryData.name} - ${levelData.name}`;
    
    switchScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    state.isAnswered = false;
    const question = state.questions[state.currentIndex];
    const totalQ = state.questions.length;
    
    // UI Updates
    elements.quiz.questionCounter.textContent = `${state.currentIndex + 1}/${totalQ}`;
    elements.quiz.progressBar.style.width = `${((state.currentIndex) / totalQ) * 100}%`;
    elements.quiz.questionText.textContent = question.question;
    
    // Setup Buttons
    elements.quiz.skipBtn.disabled = false;
    
    if (state.currentIndex === totalQ - 1) {
        elements.quiz.nextBtn.classList.add('hidden');
        elements.quiz.submitBtn.classList.remove('hidden');
        elements.quiz.submitBtn.disabled = true;
    } else {
        elements.quiz.nextBtn.classList.remove('hidden');
        elements.quiz.submitBtn.classList.add('hidden');
        elements.quiz.nextBtn.disabled = true;
    }
    
    // Render Options
    elements.quiz.optionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-text-wrapper">
                <span class="option-letter">${letters[idx]}</span>
                <span>${opt}</span>
            </div>
            <i class="fa-solid fa-circle-check option-icon"></i>
        `;
        btn.onclick = () => handleAnswer(idx, btn);
        elements.quiz.optionsGrid.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(state.timer);
    state.timeLeft = TIME_PER_QUESTION;
    updateTimerUI();
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();
        
        if (state.timeLeft <= 3 && state.timeLeft > 0) {
            playSound('tick');
        }
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerUI() {
    elements.quiz.timeLeft.textContent = state.timeLeft;
    const dashoffset = 283 - (283 * state.timeLeft) / TIME_PER_QUESTION;
    elements.quiz.timerCircle.style.strokeDashoffset = dashoffset;
    
    elements.quiz.timerCircle.className = 'timer-circle-fg';
    if (state.timeLeft <= 5) {
        elements.quiz.timerCircle.classList.add('danger');
    } else if (state.timeLeft <= 10) {
        elements.quiz.timerCircle.classList.add('warning');
    }
}

function handleAnswer(selectedIndex, btnElement) {
    if (state.isAnswered) return;
    
    clearInterval(state.timer);
    state.timeTakenTotal += (TIME_PER_QUESTION - state.timeLeft);
    state.isAnswered = true;
    
    const correctIndex = state.questions[state.currentIndex].correct;
    const allBtns = elements.quiz.optionsGrid.querySelectorAll('.option-btn');
    
    allBtns.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        state.score++;
        playSound('correct');
    } else {
        btnElement.classList.add('wrong');
        btnElement.querySelector('.option-icon').className = 'fa-solid fa-circle-xmark option-icon';
        allBtns[correctIndex].classList.add('correct');
        playSound('wrong');
    }
    
    enableNextAction();
}

function skipQuestion() {
    if (state.isAnswered) return;
    clearInterval(state.timer);
    state.timeTakenTotal += (TIME_PER_QUESTION - state.timeLeft);
    state.isAnswered = true;
    state.skipped++;
    
    const correctIndex = state.questions[state.currentIndex].correct;
    const allBtns = elements.quiz.optionsGrid.querySelectorAll('.option-btn');
    
    allBtns.forEach(btn => btn.disabled = true);
    allBtns[correctIndex].classList.add('correct');
    
    enableNextAction();
}

function handleTimeOut() {
    if (state.isAnswered) return;
    state.isAnswered = true;
    state.timeTakenTotal += TIME_PER_QUESTION;
    
    const correctIndex = state.questions[state.currentIndex].correct;
    const allBtns = elements.quiz.optionsGrid.querySelectorAll('.option-btn');
    
    allBtns.forEach(btn => btn.disabled = true);
    allBtns[correctIndex].classList.add('correct');
    playSound('wrong');
    
    enableNextAction();
}

function enableNextAction() {
    elements.quiz.skipBtn.disabled = true;
    if (state.currentIndex === state.questions.length - 1) {
        elements.quiz.submitBtn.disabled = false;
    } else {
        elements.quiz.nextBtn.disabled = false;
    }
    elements.quiz.progressBar.style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
}

function nextQuestion() {
    state.currentIndex++;
    loadQuestion();
}

function endQuiz() {
    const total = state.questions.length;
    const percent = Math.round((state.score / total) * 100);
    const avgTime = (state.timeTakenTotal / total).toFixed(1);
    
    // UI Update
    elements.results.scoreText.textContent = state.score;
    elements.results.totalText.textContent = total;
    elements.results.percentageText.textContent = `${percent}%`;
    elements.results.avgTime.textContent = avgTime;
    elements.results.skippedText.textContent = state.skipped;
    
    // Dynamic Circle Color & Animation
    let strokeColor = '#ef4444'; // red
    if (percent >= 75) strokeColor = '#10b981'; // green
    else if (percent >= 50) strokeColor = '#f59e0b'; // yellow
    
    elements.results.scoreCircle.style.stroke = strokeColor;
    
    // Trigger Reflow for animation
    elements.results.scoreCircle.style.strokeDasharray = `0, 100`;
    setTimeout(() => {
        elements.results.scoreCircle.style.strokeDasharray = `${percent}, 100`;
    }, 100);
    
    // Feedback
    if (percent === 100) {
        elements.results.title.textContent = "Flawless Victory! 🏆";
        elements.results.subtitle.textContent = "You're a certified genius in this domain.";
        fireConfetti();
    } else if (percent >= 75) {
        elements.results.title.textContent = "Excellent Work! 🌟";
        elements.results.subtitle.textContent = "You have great knowledge here.";
        fireConfetti();
    } else if (percent >= 50) {
        elements.results.title.textContent = "Good Effort! 👍";
        elements.results.subtitle.textContent = "You passed, but there's room to grow.";
    } else {
        elements.results.title.textContent = "Keep Learning! 📚";
        elements.results.subtitle.textContent = "Review the topics and try again.";
    }
    
    switchScreen('results');
}

function fireConfetti() {
    if (typeof confetti === 'function') {
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#4f46e5', '#10b981', '#f59e0b']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#4f46e5', '#10b981', '#f59e0b']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}
