



// Logging settings
const ENABLE_LOGGING = true;

// Constants for Vision game timing
const SHUFFLE_BUTTON_DISABLE_TIME = 1500;
const RANDOM_RESULT_MIN_TIME = 800;
const RANDOM_RESULT_MAX_TIME = 1450;

// Constants for Intention game randomization
const INTENTION_RANDOMIZER_MIN_INTERVAL = 30;
const INTENTION_RANDOMIZER_MAX_INTERVAL = 100;
const INTENTION_FIXATION_DELAY_MIN = 0;
const INTENTION_FIXATION_DELAY_MAX = 500;
const SHOW_INTENTION_THROTTLE_MS = 500;
const NEW_GAME_BUTTON_DELAY_MS = 5000; // 5-second delay
const SOUND_FILE = 'plsound.wav';
// const SOUND_WAVE_IMAGE_FILE = 'wav.png'; // Removed


// Объект с переводами
const translations = {
    ru: {
        title: 'Намерение или Видение',
        playIntention: 'Играть в Намерение',
        playVision: 'Играть в Видение',
        readMore: 'Прочти',
        intentionTitle: 'Намерение',
        visionTitle: 'Видение',
        newGame: 'Новая игра',
        showResult: 'Показать',
        shuffle: 'Перемешать',
        back: 'На сейчас достаточно',
        readMoreTitle: 'Отличие Намерения и Видения',
        readMoreText1: 'В игре «Видение» за черным экраном находится объект. Сначала перемешайте объекты, нажав на черный экран. Через три секунды перемешивание останавливается. Задача — в воображении увидеть, что скрыто за ширмой, и нажать соответствующую кнопку. Перед выбором обязательно перемешивайте объекты.',
        readMoreText2: 'В игре «Намерение» за черным экраном происходит циклический перебор объектов. Задача — в воображении зафиксировать объект и нажать на черный экран или кнопку «Показать». В этот момент цикл останавливается. Показанный объект может совпасть с вашим внутренним взором.',
        closeReadMore: 'Закрыть',
        themeDay: 'День',
        themeNight: 'Ночь',
        themeToggle: 'Переключить тему',
        success: 'Угадал',
        failure: 'Не угадал',
        color: 'Цвет',
        shape: 'Фигура',
        soundMode: 'Звук',
        limited: '10 попыток',
        unlimited: 'Безлимит',
        statsAttempts: 'Попытки',
        statsSuccesses: 'Успехи',
        statsFailures: 'Неудачи',
        statsSuccessRate: 'Процент успеха',
        statsAvgTime: 'Среднее время',
        statsLastAttemptTimeLabel: 'Время на попытку',
        statsHistoryLabel: 'История успеха:',
        visionSuccess: 'Успех!',
        visionFailure: 'Попробуй ещё!',
        greeting: 'Порепетируем',
        defaultUserName: 'Игрок',
        altSoundWave: 'Звуковая волна',
        altSilence: 'Тишина',
        chooseSoundOn: 'Выбрать звук включен',
        chooseSoundOff: 'Выбрать звук выключен'
    },
    uk: {
        title: 'Намір чи Бачення',
        playIntention: 'Грати в Намір',
        playVision: 'Грати в Бачення',
        readMore: 'Прочитай',
        intentionTitle: 'Намір',
        visionTitle: 'Бачення',
        newGame: 'Нова гра',
        showResult: 'Показати',
        shuffle: 'Перемішати',
        back: 'Наразі досить',
        readMoreTitle: 'Відмінність Наміру та Бачення',
        readMoreText1: 'У грі «Бачення» за чорним екраном знаходиться об’єкт. Спочатку перемішайте об’єкти, натиснувши на чорний екран. Через три секунди перемішування зупиняється. Завдання — уявити, що приховано за ширмою, і натиснути відповідну кнопку. Перед вибором обов’язково перемішуйте об’єкти.',
        readMoreText2: 'У грі «Намір» за чорним екраном відбувається циклічний перегляд об’єктів. Завдання — уявити об’єкт і натиснути на чорний екран або кнопку «Показати». У цей момент цикл зупиняється. Показаний об’єкт може збігтися з вашим внутрішнім баченням.',
        closeReadMore: 'Закрити',
        themeDay: 'День',
        themeNight: 'Ніч',
        themeToggle: 'Переключити тему',
        success: 'Вгадав',
        failure: 'Не вгадав',
        color: 'Колір',
        shape: 'Фігура',
        soundMode: 'Звук',
        limited: '10 спроб',
        unlimited: 'Безліміт',
        statsAttempts: 'Спроби',
        statsSuccesses: 'Успіхи',
        statsFailures: 'Невдачі',
        statsSuccessRate: 'Відсоток успіху',
        statsAvgTime: 'Середній час',
        statsLastAttemptTimeLabel: 'Час на спробу',
        statsHistoryLabel: 'Історія успіху:',
        visionSuccess: 'Успіх!',
        visionFailure: 'Спробуй ще!',
        greeting: 'Порепетируємо',
        defaultUserName: 'Гравець',
        altSoundWave: 'Звукова хвиля',
        altSilence: 'Тиша',
        chooseSoundOn: 'Обрати звук увімкнено',
        chooseSoundOff: 'Обрати звук вимкнено'
    },
    en: {
        title: 'Intention or Vision',
        playIntention: 'Play Intention',
        playVision: 'Play Vision',
        readMore: 'Read More',
        intentionTitle: 'Intention',
        visionTitle: 'Vision',
        newGame: 'New Game',
        showResult: 'Show',
        shuffle: 'Shuffle',
        back: 'Enough for Now',
        readMoreTitle: 'Difference Between Intention and Vision',
        readMoreText1: 'In the "Vision" game, an object is hidden behind a black screen. First, shuffle the objects by clicking the black screen. After three seconds, the shuffling stops. Your task is to imagine what is hidden behind the screen and press the corresponding button. You must shuffle the objects before making a choice.',
        readMoreText2: 'In the "Intention" game, objects are cycled behind a black screen. Your task is to mentally fixate on an object and click the black screen or the "Show" button. At that moment, the cycle stops. The revealed object may match your mental image.',
        closeReadMore: 'Close',
        themeDay: 'Day',
        themeNight: 'Night',
        themeToggle: 'Toggle Theme',
        success: 'Guessed',
        failure: 'Not Guessed',
        color: 'Color',
        shape: 'Shape',
        soundMode: 'Sound',
        limited: '10 Attempts',
        unlimited: 'Unlimited',
        statsAttempts: 'Attempts',
        statsSuccesses: 'Successes',
        statsFailures: 'Failures',
        statsSuccessRate: 'Success Rate',
        statsAvgTime: 'Average Time',
        statsLastAttemptTimeLabel: 'Time per Attempt',
        statsHistoryLabel: 'Success History:',
        visionSuccess: 'Success!',
        visionFailure: 'Try Again!',
        greeting: 'Let\'s practice',
        defaultUserName: 'Player',
        altSoundWave: 'Sound wave',
        altSilence: 'Silence',
        chooseSoundOn: 'Choose sound on',
        chooseSoundOff: 'Choose sound off'
    },
    es: {
        title: 'Intención o Visión',
        playIntention: 'Jugar a Intención',
        playVision: 'Jugar a Visión',
        readMore: 'Leer Más',
        intentionTitle: 'Intención',
        visionTitle: 'Visión',
        newGame: 'Nuevo Juego',
        showResult: 'Mostrar',
        shuffle: 'Mezclar',
        back: 'Suficiente por Ahora',
        readMoreTitle: 'Diferencia entre Intención y Visión',
        readMoreText1: 'En el juego "Visión", un objeto está oculto detrás de una pantalla negra. Primero, mezcla los objetos haciendo clic en la pantalla negra. Después de tres segundos, la mezcla se detiene. Tu tarea es imaginar qué está oculto detrás de la pantalla y presionar el botón correspondiente. Debes mezclar los objetos antes de elegir.',
        readMoreText2: 'En el juego "Intención", los objetos se ciclan detrás de una pantalla negra. Tu tarea es fijar mentalmente un objeto y hacer clic en la pantalla negra o en el botón "Mostrar". En ese momento, el ciclo se detiene. El objeto revelado puede coincidir con tu imagen mental.',
        closeReadMore: 'Cerrar',
        themeDay: 'Día',
        themeNight: 'Noche',
        themeToggle: 'Cambiar Tema',
        success: 'Adivinado',
        failure: 'No Adivinado',
        color: 'Color',
        shape: 'Forma',
        soundMode: 'Sonido',
        limited: '10 Intentos',
        unlimited: 'Ilimitado',
        statsAttempts: 'Intentos',
        statsSuccesses: 'Éxitos',
        statsFailures: 'Fracasos',
        statsSuccessRate: 'Tasa de Éxito',
        statsAvgTime: 'Tiempo Promedio',
        statsLastAttemptTimeLabel: 'Tiempo por Intento',
        statsHistoryLabel: 'Historial de Éxitos:',
        visionSuccess: '¡Éxito!',
        visionFailure: '¡Intenta de Nuevo!',
        greeting: 'Practiquemos',
        defaultUserName: 'Jugador',
        altSoundWave: 'Onda de sonido',
        altSilence: 'Silencio',
        chooseSoundOn: 'Elegir sonido activado',
        chooseSoundOff: 'Elegir sonido desactivado'
    },
    alien: {
        title: '△◈▷',
        playIntention: '⊸◉',
        playVision: '⊸◬',
        readMore: '◇',
        intentionTitle: '◉',
        visionTitle: '◬',
        newGame: '↺',
        showResult: '◉',
        shuffle: '↻',
        back: '⟿',
        readMoreTitle: '◉◬',
        readMoreText1: '◬⊸|▥|⊹|↻▥→3⊸→⊹|⊹|◈▥→⊸|⊹|↻',
        readMoreText2: '◉⊸|↺▥|⊹|◈⊸→▥/◉|⊹|⊹↺|⊹|▥=◈',
        closeReadMore: '⊷',
        themeDay: '◍',
        themeNight: '◌',
        themeToggle: '⊸◍◌',
        success: '⊸',
        failure: '⊹',
        color: '◼|⊹',
        shape: '◻|⊹',
        soundMode: '∮', // U+222E Contour Integral for Alien Sound
        limited: '⊸⊸|⊹',
        unlimited: '↺|⊹',
        statsAttempts: '↺|⊹',
        statsSuccesses: '⊸',
        statsFailures: '⊹',
        statsSuccessRate: '%⊸',
        statsAvgTime: '⊸⊹',
        statsLastAttemptTimeLabel: '⏲️',
        statsHistoryLabel: '📜', // Alien label for history - no colon
        visionSuccess: '⊸◬',
        visionFailure: '↺◬',
        greeting: '⊸◇',
        defaultUserName: '⊸Игрок⊹',
        altSoundWave: '∮∼',
        altSilence: '∮—',
        chooseSoundOn: '∮∼⊕',
        chooseSoundOff: '∮—⊖'
    }
};

// Текущий язык (по умолчанию украинский)
let currentLanguage = 'uk';

// Объект для сопоставления кодов языков с их названиями для кнопки
const languageNames = {
    ru: 'RU',
    uk: 'UK',
    en: 'EN',
    es: 'ES',
    alien: '👽'
};


// Функция для обновления текста на странице
function updateLanguage() {
    const t = translations[currentLanguage];
    document.querySelector('#menu-screen h1').textContent = t.title;
    document.getElementById('btn-start-intention').textContent = t.playIntention;
    document.getElementById('btn-start-vision').textContent = t.playVision;
    document.getElementById('btn-read-more').textContent = t.readMore;
    document.getElementById('game-intention').querySelector('h2').textContent = t.intentionTitle;
    document.getElementById('game-vision').querySelector('h2').textContent = t.visionTitle;
    document.getElementById('intention-new-game-btn').textContent = t.newGame;
    document.getElementById('vision-new-game-btn').textContent = t.newGame;
    document.getElementById('intention-show-btn').textContent = t.showResult;
    document.getElementById('vision-shuffle-btn').textContent = t.shuffle;
    document.querySelectorAll('.back-btn').forEach(btn => btn.textContent = t.back);
    const readMoreArea = document.getElementById('read-more-area');
    readMoreArea.querySelector('h3').textContent = t.readMoreTitle;
    readMoreArea.querySelectorAll('p')[0].textContent = t.readMoreText1;
    readMoreArea.querySelectorAll('p')[1].textContent = t.readMoreText2;
    document.getElementById('btn-close-read-more').textContent = t.closeReadMore;

    // Обновление кнопки темы
    const themeText = document.body.classList.contains('light-theme') ? t.themeDay : t.themeNight;
    document.getElementById('theme-toggle-btn').childNodes[2].textContent = themeText;
    document.getElementById('theme-icon').textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    document.getElementById('theme-toggle-btn').setAttribute('aria-label', `${t.themeToggle}: ${themeText}`);

    // Обновление кнопки языка
    const languageToggleBtn = document.getElementById('language-toggle-btn');
    const languageTextEl = document.getElementById('language-text'); // Renamed to avoid conflict
    if (languageToggleBtn && languageTextEl) {
        languageTextEl.textContent = languageNames[currentLanguage];
        languageToggleBtn.setAttribute('aria-label', `${t.themeToggle.replace('тему', 'мову')}: ${languageNames[currentLanguage]}`);
    }

    // Обновление активного пункта меню языка
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-selected', 'false');
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
            option.setAttribute('aria-selected', 'true');
        }
    });

    document.querySelector('label[for="intention-mode-color"]').childNodes[1].textContent = ` ${t.color}`;
    document.querySelector('label[for="intention-mode-shape"]').childNodes[1].textContent = ` ${t.shape}`;
    document.querySelector('label[for="intention-mode-sound"]').childNodes[1].textContent = ` ${t.soundMode}`;
    document.querySelector('label[for="vision-mode-color"]').childNodes[1].textContent = ` ${t.color}`;
    document.querySelector('label[for="vision-mode-shape"]').childNodes[1].textContent = ` ${t.shape}`;
    document.querySelector('label[for="vision-mode-sound"]').childNodes[1].textContent = ` ${t.soundMode}`;
    document.querySelector('label[for="intention-attempts-limited"]').childNodes[1].textContent = ` ${t.limited}`;
    document.querySelector('label[for="intention-attempts-unlimited"]').childNodes[1].textContent = ` ${t.unlimited}`;
    document.querySelector('label[for="vision-attempts-limited"]').childNodes[1].textContent = ` ${t.limited}`;
    document.querySelector('label[for="vision-attempts-unlimited"]').childNodes[1].textContent = ` ${t.unlimited}`;


    // Обновление меток статистики Намерения
    const intentionStatsDiv = document.getElementById('intention-stats');
    if (intentionStatsDiv) {
        intentionStatsDiv.querySelectorAll('p > span[data-translate-key]').forEach(span => {
            const key = span.dataset.translateKey;
            if (t[key]) {
                span.textContent = t[key];
            }
        });
    }

    // Обновление меток статистики Видение
    const visionStatsDiv = document.getElementById('vision-stats');
    if (visionStatsDiv) {
        visionStatsDiv.querySelectorAll('p > span[data-translate-key]').forEach(span => {
            const key = span.dataset.translateKey;
            if (t[key]) {
                span.textContent = t[key];
            }
        });
    }
    
    feedbackButtonsTemplate.querySelectorAll('button')[0].textContent = t.success;
    feedbackButtonsTemplate.querySelectorAll('button')[1].textContent = t.failure;
    const visionMessage = document.querySelector('#vision-result p');
    if (visionMessage) {
        visionMessage.textContent = visionMessage.textContent.includes('Успех') || visionMessage.textContent.includes('Успіх') ? t.visionSuccess : t.visionFailure;
    }

    // Обновление приветственного сообщения
    const greetingTextPart = document.getElementById('greeting-text-part');
    if (greetingTextPart) {
        greetingTextPart.textContent = t.greeting;
    }
    const userNameSpan = document.getElementById('telegram-user-name');
    // Обновление имени по умолчанию, если пользователь не из Telegram или имя не определено
    if (!telegramUser || !telegramUser.first_name) {
        if (userNameSpan) userNameSpan.textContent = t.defaultUserName;
    } else {
         if (userNameSpan) userNameSpan.textContent = telegramUser.first_name; // Set actual telegram name if available
    }


    // Обновление aria-label
    document.getElementById('btn-start-intention').setAttribute('aria-label', t.playIntention);
    document.getElementById('btn-start-vision').setAttribute('aria-label', t.playVision);
    document.getElementById('btn-read-more').setAttribute('aria-label', t.readMore);
    document.getElementById('intention-new-game-btn').setAttribute('aria-label', `${t.newGame} ${t.intentionTitle}`); // Updated for dynamic title
    document.getElementById('vision-new-game-btn').setAttribute('aria-label', `${t.newGame} ${t.visionTitle}`); // Updated for dynamic title
    document.getElementById('intention-show-btn').setAttribute('aria-label', t.showResult);
    document.getElementById('vision-shuffle-btn').setAttribute('aria-label', t.shuffle);
    document.querySelectorAll('.back-btn').forEach(btn => btn.setAttribute('aria-label', t.back));
    document.getElementById('btn-close-read-more').setAttribute('aria-label', t.closeReadMore);
    document.querySelector('.color-btn[data-choice="red"]').setAttribute('aria-label', `${t.color} Червоний`);
    document.querySelector('.color-btn[data-choice="blue"]').setAttribute('aria-label', `${t.color} Синій`);
    document.querySelector('.shape-btn[data-choice="circle"]').setAttribute('aria-label', `${t.shape} Коло`);
    document.querySelector('.shape-btn[data-choice="triangle"]').setAttribute('aria-label', `${t.shape} Трикутник`);
    document.querySelector('.sound-btn[data-choice="sound_on"]').setAttribute('aria-label', t.chooseSoundOn);
    document.querySelector('.sound-btn[data-choice="sound_off"]').setAttribute('aria-label', t.chooseSoundOff);


    // Управление классом alien-text и alien-language
    if (currentLanguage === 'alien') {
        readMoreArea.classList.add('alien-text');
        document.body.classList.add('alien-language'); // Добавляем класс для инопланетного языка
    } else {
        readMoreArea.classList.remove('alien-text');
        document.body.classList.remove('alien-language'); // Удаляем класс для других языков
    }

    // Update aria-labels for cached SVGs
    if (cachedElements.svgOscilloscopeWave) {
        cachedElements.svgOscilloscopeWave.setAttribute("aria-label", t.altSoundWave);
    }
    if (cachedElements.svgSilenceLine) {
        cachedElements.svgSilenceLine.setAttribute("aria-label", t.altSilence);
    }

    // Обновить статистику намерения, чтобы символы истории обновились при смене языка
    updateIntentionStatsDisplay();
    updateVisionStatsDisplay(); // Обновить статистику и для "Видение"
}

// Initialize sessionId, userId, and subsessionId
window.sessionId = `${Date.now()}${Math.random().toString(36).slice(2)}`;
window.userId = 'anonymous_' + Math.random().toString(36).slice(2, 9);
window.currentSubsessionId = `${window.sessionId}_0`; // Initial subsession_id
let subsessionCounter = 0;

// Initialize variables
let telegramUser = null;
let currentGameMode = 'menu';
let gameStartTime = null;
let shuffleStartTime = null;
let intentionAttemptStartTime = null;
let choiceButtonsEnabledTime = null;
let sessionSummarySent = false;
let lastShowIntentionTime = 0;
let subsessionSequences = [];
const sentRandomizerStartEvents = new Set();
let newGameButtonTimeoutId = null; // For the Intention game 5-second delay
let visionNewGameButtonTimeoutId = null; // For the Vision game 5-second delay

// Audio variables
let audioContext = null;
let soundBuffer = null;
// let soundWaveImage = null; // Removed global variable for sound wave image


let intentionRandomizerInterval = null;
let intentionCurrentResult = null;
let intentionMode = 'color';
let intentionAttemptsMode = 'limited';
let intentionMaxAttempts = 10;
let isProcessingIntention = false;
const intentionStats = {
    attempts: 0,
    successes: 0,
    failures: 0
};
let intentionGuessSequence = [];
let intentionRandomizerCount = 0;
const intentionAttempts = [];

let visionRandomizerTimeout = null;
let visionCurrentResult = null;
let visionMode = 'color';
let visionAttemptMode = 'limited';
let visionMaxAttempts = 10;
const visionStats = {
    attempts: 0,
    successes: 0,
    failures: 0
};
let visionGuessSequence = [];
const visionAttempts = [];

// DOM elements
const appDiv = document.getElementById('app');
const userGreeting = document.getElementById('user-greeting');
const menuScreen = document.getElementById('menu-screen');
const btnStartIntention = document.getElementById('btn-start-intention');
const btnStartVision = document.getElementById('btn-start-vision');
const btnReadMore = document.getElementById('btn-read-more');
const readMoreArea = document.getElementById('read-more-area');
const btnCloseReadMore = document.getElementById('btn-close-read-more');
const gameIntention = document.getElementById('game-intention');
const intentionDisplay = document.getElementById('intention-display');
const intentionResultDisplay = document.getElementById('intention-result');
const intentionShowBtn = document.getElementById('intention-show-btn');
const intentionNewGameBtn = document.getElementById('intention-new-game-btn');
const intentionAttemptsModeDiv = document.getElementById('intention-attempts-mode');
const intentionModeRadios = document.querySelectorAll('input[name="intention-mode"]');
const intentionAttemptsModeRadios = document.querySelectorAll('input[name="intention-attempts-mode"]');
const intentionStatsSpanAttempts = document.getElementById('intention-stats-attempts');
const intentionStatsSpanMaxAttempts = document.getElementById('intention-stats-max-attempts');
const intentionStatsSpanSuccesses = document.getElementById('intention-stats-successes');
const intentionStatsSpanFailures = document.getElementById('intention-stats-failures');
const intentionStatsSpanSuccessRate = document.getElementById('intention-stats-success-rate');
const intentionStatsSpanAvgTime = document.getElementById('intention-stats-avg-time');
const intentionLabelLastAttemptTime = document.getElementById('intention-label-last-attempt-time');
const intentionStatsSpanLastAttemptTime = document.getElementById('intention-stats-last-attempt-time');
const intentionLabelHistory = document.getElementById('intention-label-history');
const intentionStatsSpanHistory = document.getElementById('intention-stats-history');

const gameVision = document.getElementById('game-vision');
const visionShuffleBtn = document.getElementById('vision-shuffle-btn');
const visionDisplay = document.getElementById('vision-display');
const visionResultDisplay = document.getElementById('vision-result');
const visionChoicesDiv = document.getElementById('vision-choices');
const visionNewGameBtn = document.getElementById('vision-new-game-btn');
const visionAttemptsModeDiv = document.getElementById('vision-attempts-mode');
const visionColorChoiceBtns = document.querySelectorAll('#vision-choices .color-btn');
const visionShapeChoiceBtns = document.querySelectorAll('#vision-choices .shape-btn');
const visionSoundChoiceBtns = document.querySelectorAll('#vision-choices .sound-btn'); // New
const visionStatsSpanAttempts = document.getElementById('stats-attempts');
const visionStatsSpanMaxAttempts = document.getElementById('stats-max-attempts');
const visionStatsSpanSuccesses = document.getElementById('stats-successes');
const visionStatsSpanFailures = document.getElementById('stats-failures');
const visionStatsSpanSuccessRate = document.getElementById('stats-success-rate');
const visionStatsSpanAvgTime = document.getElementById('stats-avg-time');
const visionStatsSpanLastAttemptTime = document.getElementById('vision-stats-last-attempt-time'); // New for Vision
const visionStatsSpanHistory = document.getElementById('vision-stats-history'); // New for Vision
const visionModeRadios = document.querySelectorAll('input[name="vision-mode"]');
const visionAttemptsModeRadios = document.querySelectorAll('input[name="vision-attempts-mode"]');
const backButtons = document.querySelectorAll('.back-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const languageToggleBtn = document.getElementById('language-toggle-btn');
const languageMenu = document.getElementById('language-menu');
const languageOptions = document.querySelectorAll('.language-option');

// Check critical DOM elements
if (!appDiv || !menuScreen || !gameIntention || !gameVision || !languageToggleBtn || !languageMenu || !userGreeting) {
    console.error('Critical DOM elements are missing. Check HTML for ids: app, menu-screen, game-intention, game-vision, language-toggle-btn, language-menu, user-greeting');
    throw new Error('Missing critical DOM elements');
}


// SVG Creation Functions
function createSvgShape(type) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");
    svg.setAttribute("viewBox", "0 0 100 100");
    // Fill is set by CSS for .shape-btn svg, or dynamically if needed elsewhere

    if (type === 'circle') {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "40");
        svg.appendChild(circle);
    } else if (type === 'triangle') {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", "50,10 90,90 10,90");
        svg.appendChild(polygon);
    }
    return svg;
}

function createSilenceLineSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 50");
    svg.setAttribute("aria-label", translations[currentLanguage].altSilence);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "5");
    line.setAttribute("y1", "25");
    line.setAttribute("x2", "95");
    line.setAttribute("y2", "25");
    line.setAttribute("stroke", "currentColor"); // Use currentColor
    line.setAttribute("stroke-width", "3");
    line.setAttribute("stroke-linecap", "round"); // Added for rounded ends
    svg.appendChild(line);
    return svg;
}

function createOscilloscopeWaveSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 50"); // Width 100, Height 50
    svg.setAttribute("aria-label", translations[currentLanguage].altSoundWave);

    const numBars = 12;
    const barWidth = 5;
    const cornerRadius = 2; 
    const maxBarHeight = 45; 
    const minBarHeight = 5;
    const relativeHeights = [0.3, 0.6, 0.9, 0.7, 0.4, 0.2, 0.5, 0.8, 1.0, 0.75, 0.5, 0.25];

    const totalBarAreaWidth = numBars * barWidth;
    // Calculate spacing to distribute bars evenly across the 100-unit width
    // If numBars is 1, it will be centered. Otherwise, space them out.
    const spacing = numBars > 1 ? (100 - totalBarAreaWidth) / (numBars -1) : 0;
    
    let currentX;
    if (numBars === 1) {
        currentX = (100 - barWidth) / 2; // Center a single bar
    } else {
        // For multiple bars, start so the entire group is centered.
        const contentWidth = numBars * barWidth + (numBars - 1) * spacing;
        currentX = (100 - contentWidth) / 2;
    }

    for (let i = 0; i < numBars; i++) {
        const barHeight = minBarHeight + (relativeHeights[i % relativeHeights.length] * (maxBarHeight - minBarHeight));
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        let xPos = currentX + i * (barWidth + spacing);
        if (numBars === 1) xPos = currentX;

        rect.setAttribute("x", String(xPos));
        rect.setAttribute("y", String((50 - barHeight) / 2)); // Center vertically
        rect.setAttribute("width", String(barWidth));
        rect.setAttribute("height", String(barHeight));
        rect.setAttribute("fill", "currentColor"); // Use currentColor
        rect.setAttribute("rx", String(cornerRadius));
        rect.setAttribute("ry", String(cornerRadius));
        svg.appendChild(rect);
    }
    return svg;
}


// Cached DOM elements
const cachedElements = {
    colorBlock: document.createElement('div'),
    svgCircle: createSvgShape('circle'),
    svgTriangle: createSvgShape('triangle'),
    svgOscilloscopeWave: createOscilloscopeWaveSvg(),
    svgSilenceLine: createSilenceLineSvg()
};
cachedElements.colorBlock.style.width = '100%';
cachedElements.colorBlock.style.height = '100%';

// Inject SVGs into Vision sound choice buttons
if (visionSoundChoiceBtns.length === 2) {
    visionSoundChoiceBtns[0].appendChild(cachedElements.svgOscilloscopeWave.cloneNode(true)); // sound_on
    visionSoundChoiceBtns[1].appendChild(cachedElements.svgSilenceLine.cloneNode(true));    // sound_off
}


// Feedback buttons template
const feedbackButtonsTemplate = document.createElement('div');
feedbackButtonsTemplate.className = 'feedback-buttons';
const successBtnTemplate = document.createElement('button');
successBtnTemplate.textContent = translations[currentLanguage].success;
successBtnTemplate.className = 'small-btn';
const failureBtnTemplate = document.createElement('button');
failureBtnTemplate.textContent = translations[currentLanguage].failure;
failureBtnTemplate.className = 'small-btn';
feedbackButtonsTemplate.appendChild(successBtnTemplate);
feedbackButtonsTemplate.appendChild(failureBtnTemplate);

// Centralized subsession_id generation
function generateSubsessionId() {
    subsessionCounter++;
    const newSubsessionId = `${window.sessionId}_${subsessionCounter}`;
    window.currentSubsessionId = newSubsessionId;
    logDebug(`Generated subsession_id: ${newSubsessionId}`);
    return newSubsessionId;
}

// Debug logging function
function logDebug(...args) {
    if (ENABLE_LOGGING) console.log(...args);
}

function isOnline() {
    return navigator.onLine;
}

function sendGtagEvent(eventName, params) {
    if (!eventName || !params) {
        console.error('Invalid eventName or params:', { eventName, params });
        return false;
    }
    const currentSubsessionId = window.currentSubsessionId || `temp_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`;
    const eventParams = {
        ...params,
        subsession_id: params.subsession_id || currentSubsessionId,
        session_id: window.sessionId,
        custom_user_id: telegramUser ? telegramUser.id : window.userId
    };
    if (!params.subsession_id && (eventName.includes('intention') || eventName === 'randomizer_start' || eventName === 'mode_change' || eventName === 'display_click' || eventName === 'game_select' || eventName === 'show_result' || eventName === 'game_exit')) {
        logDebug(`subsession_id was undefined for ${eventName}, used: ${eventParams.subsession_id}`);
    }
    if (!isOnline()) {
        logDebug(`No internet connection, saving ${eventName} to localStorage`);
        saveToLocalStorage(eventName, eventParams);
        return false;
    }
    try {
        gtag('event', eventName, eventParams);
        logDebug(`gtag ${eventName} sent:`, eventParams);
        return true;
    } catch (error) {
        console.error(`gtag ${eventName} failed:`, error);
        saveToLocalStorage(eventName, eventParams);
        return false;
    }
}

function saveToLocalStorage(eventName, params) {
    const key = eventName.includes('vision') ? 'visionStats' : 'intentionStats';
    const savedStats = JSON.parse(localStorage.getItem(key) || '[]');
    savedStats.push({
        eventName,
        params,
        sessionId: window.sessionId,
        timestamp: Date.now()
    });
    localStorage.setItem(key, JSON.stringify(savedStats));
    logDebug(`Saved ${eventName} to localStorage:`, params);
}

function saveAttempts(gameMode) {
    const key = gameMode === 'intention' ? 'intentionAttempts' : 'visionAttempts';
    const attempts = gameMode === 'intention' ? intentionAttempts : visionAttempts;
    localStorage.setItem(key, JSON.stringify(attempts));
    logDebug(`Saved ${gameMode} attempts to localStorage:`, attempts);
}

function saveSubsessionSequence() {
    if (intentionGuessSequence.length > 0) {
        subsessionSequences.push({
            subsessionId: window.currentSubsessionId,
            sequence: [...intentionGuessSequence],
            attempts: intentionStats.attempts,
            successes: intentionStats.successes,
            failures: intentionStats.failures
        });
        logDebug(`Saved subsession sequence:`, subsessionSequences[subsessionSequences.length - 1]);
    }
}

function sendSessionSummary() {
    if (!gameStartTime || currentGameMode === 'menu' || sessionSummarySent) {
        logDebug('sendSessionSummary skipped:', { gameStartTime, currentGameMode, sessionSummarySent });
        return;
    }
    if (currentGameMode === 'vision' && visionStats.attempts === 0) {
        logDebug('No vision attempts, skipping sendSessionSummary');
        return;
    }
    if (currentGameMode === 'intention' && intentionStats.attempts === 0) {
        logDebug('No intention attempts, skipping sendSessionSummary');
        return;
    }

    const duration = ((Date.now() - gameStartTime) / 1000).toFixed(1);
    const eventName = currentGameMode === 'vision' ? 'game_session_summary' : 'intention_session_summary';
    const eventLabel = currentGameMode === 'vision' ? 'Vision' : 'Intention';
    const stats = currentGameMode === 'vision' ? visionStats : intentionStats;
    const mode = currentGameMode === 'vision' ? visionMode : intentionMode;
    const guessSequence = currentGameMode === 'vision' ? visionGuessSequence : intentionGuessSequence;

    const eventParams = {
        event_category: 'Game',
        event_label: eventLabel,
        attempts: stats.attempts,
        successes: stats.successes,
        failures: stats.failures,
        mode: mode,
        session_duration_seconds: parseFloat(duration),
        session_start_time: Math.floor(gameStartTime),
        win_sequence: guessSequence.join(',') || 'none',
        subsession_id: window.currentSubsessionId
    };

    logDebug(`Sending ${eventName} with win_sequence: [${guessSequence.join(', ')}]`, eventParams);
    const success = sendGtagEvent(eventName, eventParams);
    if (success) {
        sessionSummarySent = true;
        if (currentGameMode === 'intention') {
            saveSubsessionSequence();
        }
        saveAttempts(currentGameMode);
    } else {
        logDebug('sendSessionSummary failed, saved to localStorage');
    }
}

function sendSavedStats() {
    ['visionStats', 'intentionStats'].forEach(key => {
        const savedStats = JSON.parse(localStorage.getItem(key) || '[]');
        if (savedStats.length === 0) return;
        logDebug(`Found ${savedStats.length} saved stats in ${key}`);
        savedStats.forEach(stat => {
            logDebug(`Sending saved ${stat.eventName}:`, stat.params);
            const success = sendGtagEvent(stat.eventName, stat.params);
            if (success) {
                logDebug(`Successfully sent saved ${stat.eventName}`);
            } else {
                logDebug(`Failed to send saved ${stat.eventName}, keeping in localStorage`);
            }
        });
        if (savedStats.every(stat => sendGtagEvent(stat.eventName, stat.params))) {
            localStorage.removeItem(key);
            logDebug(`Cleared ${key} from localStorage`);
        } else {
            logDebug(`Retaining ${key} in localStorage due to failed sends`);
        }
    });
}

function showScreen(screenId) {
    logDebug('Showing screen:', screenId, 'current subsessionId:', window.currentSubsessionId);
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    // Manage user greeting visibility
    if (userGreeting) {
        if (screenId === 'game-intention' || screenId === 'game-vision') {
            userGreeting.classList.add('hidden');
        } else {
            userGreeting.classList.remove('hidden');
        }
    }

    if (screenId !== 'game-intention') {
        stopIntentionGame();
         if (newGameButtonTimeoutId) { // Clear timeout if leaving intention game
            clearTimeout(newGameButtonTimeoutId);
            newGameButtonTimeoutId = null;
        }
    }
    if (screenId !== 'game-vision') { // Stop vision game if not showing vision screen
      stopVisionGame(); // This will also clear visionNewGameButtonTimeoutId
    }


    if (screenId === 'menu-screen') {
        sendSessionSummary();
        if (menuScreen) menuScreen.classList.remove('hidden');
        currentGameMode = 'menu';
        gameStartTime = null; // Сбрасываем gameStartTime
        Telegram.WebApp.MainButton.hide();
        if (readMoreArea) readMoreArea.classList.add('hidden');
        if (btnReadMore) btnReadMore.classList.remove('hidden');
        if (languageMenu) languageMenu.classList.add('hidden'); // Скрываем меню языка
        if (languageToggleBtn) languageToggleBtn.setAttribute('aria-expanded', 'false');
        if (ENABLE_LOGGING) {
            logDebug('Returned to menu');
            logDebug(`Intention subsession sequences:`, subsessionSequences);
            logDebug(`Vision guess sequence: [${visionGuessSequence.join(', ')}]`);
        }
    } else if (screenId === 'game-intention') {
        if (gameIntention) gameIntention.classList.remove('hidden');
        currentGameMode = 'intention';
        updateIntentionStatsDisplay();
        if (intentionNewGameBtn) intentionNewGameBtn.classList.add('hidden');
        if (intentionAttemptsModeDiv) intentionAttemptsModeDiv.classList.remove('hidden');
        Telegram.WebApp.MainButton.hide();
        if (intentionRandomizerInterval === null) {
            startIntentionGame('showScreen');
        } else {
            logDebug('Intention randomizer already active, skipping startIntentionGame');
        }
    } else if (screenId === 'game-vision') {
        if (gameVision) gameVision.classList.remove('hidden');
        currentGameMode = 'vision';
        updateVisionChoicesDisplay();
        updateVisionStatsDisplay();
        if (visionShuffleBtn) {
            visionShuffleBtn.disabled = false;
            visionShuffleBtn.classList.remove('hidden');
        }
        if(visionChoicesDiv) visionChoicesDiv.classList.remove('hidden');
        if (visionNewGameBtn) visionNewGameBtn.classList.add('hidden');
        if (visionAttemptsModeDiv) visionAttemptsModeDiv.classList.remove('hidden');
        setVisionChoiceButtonsEnabled(false);
        if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
        if (visionDisplay) visionDisplay.style.backgroundColor = 'black'; // Default screen behind result area
        if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent'; // Result area itself
        visionCurrentResult = null;
        choiceButtonsEnabledTime = null;
        generateSubsessionId(); // Generate new subsession_id for Vision
    }
}

function getRandomResult(mode) {
    const randomValue = Math.random();
    logDebug(`getRandomResult: mode=${mode}, randomValue=${randomValue}`);
    if (mode === 'color') {
        return randomValue > 0.5 ? 'red' : 'blue';
    } else if (mode === 'shape') {
        return randomValue > 0.5 ? 'circle' : 'triangle';
    } else if (mode === 'sound') {
        return randomValue > 0.5 ? 'sound_on' : 'sound_off';
    }
    return null; // Default for unknown mode
}


async function loadSound(url) {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API is not supported in this browser", e);
            sendGtagEvent('error', { event_category: 'App', event_label: 'Audio Error', error_message: 'Web Audio API not supported', subsession_id: window.currentSubsessionId });
            return;
        }
    }
    if (!soundBuffer) { 
        try {
            logDebug('Attempting to load sound:', url);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} while fetching ${url}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            // Use a promise-based approach for decodeAudioData
            soundBuffer = await new Promise((resolve, reject) => {
                audioContext.decodeAudioData(arrayBuffer, resolve, reject);
            });
            logDebug('Sound loaded successfully:', url);
        } catch (error) {
            console.error('Error loading sound:', error);
            sendGtagEvent('error', { event_category: 'App', event_label: 'Audio Load Error', error_message: `Failed to load ${url}: ${error.message}`, subsession_id: window.currentSubsessionId});
            soundBuffer = null; 
        }
    }
}

function playSound() {
    if (!soundBuffer) {
        logDebug('Sound buffer not loaded, cannot play sound.');
        // Attempt to load if not loaded, though ideally it's preloaded.
        if ((intentionMode === 'sound' || visionMode === 'sound') && !soundBuffer) {
            loadSound(SOUND_FILE).then(() => { // Try loading and playing again if successful
                if (soundBuffer) playSoundInternal();
            });
        }
        return;
    }
    playSoundInternal();
}

function playSoundInternal() {
    if (!audioContext || !soundBuffer) return;

    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            logDebug('AudioContext resumed.');
            actuallyPlaySound();
        }).catch(e => console.error('Error resuming AudioContext:', e));
    } else {
        actuallyPlaySound();
    }
}

function actuallyPlaySound() {
    const source = audioContext.createBufferSource();
    source.buffer = soundBuffer;
    source.connect(audioContext.destination);
    source.start(0);
    logDebug('Playing sound');
}


function resetIntentionGame() {
    logDebug(`Resetting Intention game, current subsessionId: ${window.currentSubsessionId}`);
    if (intentionStats.attempts > 0 && !sessionSummarySent) {
        sendSessionSummary();
    }

    if (newGameButtonTimeoutId) { // Clear pending new game button timeout
        clearTimeout(newGameButtonTimeoutId);
        newGameButtonTimeoutId = null;
    }

    intentionStats.attempts = 0;
    intentionStats.successes = 0;
    intentionStats.failures = 0;
    intentionGuessSequence = [];
    intentionAttempts.length = 0;
    intentionAttemptStartTime = null;
    intentionRandomizerCount = 0;
    gameStartTime = null; // Сбрасываем gameStartTime
    generateSubsessionId(); // Generate new subsession_id
    sentRandomizerStartEvents.clear();
    stopIntentionGame();
    startIntentionGame('resetIntentionGame');
    updateIntentionStatsDisplay();
    if (intentionShowBtn) {
        intentionShowBtn.disabled = false;
        intentionShowBtn.classList.remove('hidden');
    }
    if (intentionNewGameBtn) {
        intentionNewGameBtn.classList.add('hidden');
    }
    if (intentionAttemptsModeDiv) { // Make sure attempts mode selection is visible
        intentionAttemptsModeDiv.classList.remove('hidden');
    }
    sessionSummarySent = false;
    logDebug('Intention game reset, new subsession_id:', window.currentSubsessionId);
}

function resetVisionGame() {
    logDebug('Resetting Vision game');
    if (visionStats.attempts > 0 && !sessionSummarySent) {
        sendSessionSummary();
    }
    if (visionNewGameButtonTimeoutId) {
        clearTimeout(visionNewGameButtonTimeoutId);
        visionNewGameButtonTimeoutId = null;
    }
    visionStats.attempts = 0;
    visionStats.successes = 0;
    visionStats.failures = 0;
    visionGuessSequence = [];
    visionAttempts.length = 0;
    stopVisionGame(); // This will also clear visionNewGameButtonTimeoutId if it's running
    generateSubsessionId(); // Generate new subsession_id
    updateVisionStatsDisplay();
    if (visionShuffleBtn) {
        visionShuffleBtn.disabled = false;
        visionShuffleBtn.classList.remove('hidden');
    }
    if (visionChoicesDiv) {
        visionChoicesDiv.classList.remove('hidden');
    }
    if (visionNewGameBtn) visionNewGameBtn.classList.add('hidden');
    if (visionAttemptsModeDiv) visionAttemptsModeDiv.classList.remove('hidden');
    setVisionChoiceButtonsEnabled(false);
    if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
    if (visionDisplay) visionDisplay.style.backgroundColor = 'black';
    if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent'; // BG is handled by #intention-result's CSS var
    visionCurrentResult = null;
    choiceButtonsEnabledTime = null;
    sessionSummarySent = false;
    updateVisionChoicesDisplay(); // Ensure correct choice buttons are visible for the current mode
    logDebug('Vision game reset, new subsession_id:', window.currentSubsessionId);
}

function startIntentionGame(caller = 'unknown') {
    logDebug(`startIntentionGame called by: ${caller}`);
    if (intentionRandomizerInterval !== null) {
        logDebug('Intention randomizer already running, skipping start');
        return;
    }
    if (!window.currentSubsessionId || caller === 'resetIntentionGame' || caller === 'modeChange') {
        generateSubsessionId();
    }
    logDebug(`Starting intention game, mode: ${intentionMode} attempt_start_time: ${Date.now()} subsession_id: ${window.currentSubsessionId}`);
    intentionAttemptStartTime = Date.now();
    intentionRandomizerCount = 0;
    
    if (intentionMode === 'sound') {
        if (!soundBuffer) loadSound(SOUND_FILE);
    }


    const INACTIVITY_TIMEOUT = 5 * 60 * 1000;
    let inactivityTimer = null;

    function updateRandomResult() {
        const randomInterval = INTENTION_RANDOMIZER_MIN_INTERVAL + Math.random() * (INTENTION_RANDOMIZER_MAX_INTERVAL - INTENTION_RANDOMIZER_MIN_INTERVAL);
        intentionRandomizerCount++;
        if (ENABLE_LOGGING && intentionRandomizerCount % 10 === 0) {
            logDebug(`Randomizer updated (count: ${intentionRandomizerCount}), next update in ${randomInterval.toFixed(2)}ms`);
        }
        intentionRandomizerInterval = setTimeout(updateRandomResult, randomInterval);
        if (inactivityTimer) clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            logDebug('Inactivity timeout, stopping intention randomizer');
            stopIntentionGame();
        }, INACTIVITY_TIMEOUT);
    }

    updateRandomResult();

    sendGtagEvent('randomizer_start', {
        event_category: 'Game',
        event_label: 'Intention Randomizer',
        mode: intentionMode,
        subsession_id: window.currentSubsessionId
    });
    sentRandomizerStartEvents.add(window.currentSubsessionId);
    logDebug(`randomizer_start event sent for subsession_id: ${window.currentSubsessionId}`);

    if (intentionShowBtn) intentionShowBtn.classList.remove('hidden');
    if (intentionResultDisplay) {
         intentionResultDisplay.classList.add('hidden');
         // CSS var --result-bg-color handles background, no need to set here
    }
    if (intentionDisplay) intentionDisplay.style.backgroundColor = 'black'; // Main display area behind result screen
}

function stopIntentionGame() {
    logDebug(`Stopping Intention game, current subsessionId: ${window.currentSubsessionId}`);
    if (intentionRandomizerInterval !== null) {
        clearTimeout(intentionRandomizerInterval);
        intentionRandomizerInterval = null;
        logDebug('Intention randomizer stopped');
    }
    if (newGameButtonTimeoutId) { // Clear intention new game button timeout
        clearTimeout(newGameButtonTimeoutId);
        newGameButtonTimeoutId = null;
    }
    if (intentionResultDisplay) {
        intentionResultDisplay.classList.add('hidden');
        // Background is controlled by CSS var --result-bg-color
    }
    if (intentionDisplay) intentionDisplay.style.backgroundColor = 'black';
    intentionAttemptStartTime = null;
    intentionCurrentResult = null;
}

function showIntentionResult() {
    const now = Date.now();
    const timeSinceLast = now - lastShowIntentionTime;
    if (currentGameMode !== 'intention' || isProcessingIntention || timeSinceLast < SHOW_INTENTION_THROTTLE_MS) {
        logDebug('showIntentionResult throttled or invalid state:', {
            timeSinceLast,
            gameMode: currentGameMode,
            currentResult: intentionCurrentResult,
            isProcessing: isProcessingIntention
        });
        return;
    }
    lastShowIntentionTime = now;
    isProcessingIntention = true;
    const randomDelay = INTENTION_FIXATION_DELAY_MIN + Math.random() * (INTENTION_FIXATION_DELAY_MAX - INTENTION_RANDOMIZER_MIN_INTERVAL);
    logDebug(`Fixation delay: ${randomDelay.toFixed(2)}ms`);

    setTimeout(() => {
        requestAnimationFrame(() => {
            intentionCurrentResult = getRandomResult(intentionMode);
            logDebug('Showing intention result, mode:', intentionMode, 'result:', intentionCurrentResult, 'subsession_id:', window.currentSubsessionId);
            logDebug(`Intention result displayed at: ${Date.now()}`);
            intentionStats.attempts++;
            if (intentionStats.attempts === 1 && intentionAttemptsModeDiv) {
                 // Hide attempts mode selection after the first attempt, regardless of mode.
                intentionAttemptsModeDiv.classList.add('hidden');
            }
            // updateIntentionStatsDisplay() will be called after success/failure/timeout

            sendGtagEvent('show_result', {
                event_category: 'Game',
                event_label: 'Intention Show',
                mode: intentionMode,
                subsession_id: window.currentSubsessionId
            });

            clearTimeout(intentionRandomizerInterval);
            intentionRandomizerInterval = null;

            if (intentionResultDisplay) {
                intentionResultDisplay.innerHTML = '';
                // background-color is now handled by var(--result-bg-color) via CSS
                intentionResultDisplay.style.display = 'flex'; // Ensure it's flex for alignment
                intentionResultDisplay.classList.remove('hidden');
            }
            
            if (intentionDisplay) { // The main display area behind result-display
                intentionDisplay.style.backgroundColor = 'transparent'; // Make it transparent to show result-display's bg
                intentionDisplay.classList.remove('processing');
            }

            if (intentionShowBtn) {
                intentionShowBtn.classList.add('hidden'); // Hide show button when result is shown
                intentionShowBtn.classList.remove('processing');
            }

            if (intentionMode === 'color' && intentionResultDisplay) {
                cachedElements.colorBlock.style.backgroundColor = intentionCurrentResult || 'gray'; // Or use a fallback color
                intentionResultDisplay.appendChild(cachedElements.colorBlock);
            } else if (intentionMode === 'shape' && intentionResultDisplay) {
                const svg = intentionCurrentResult === 'circle' ? cachedElements.svgCircle : cachedElements.svgTriangle;
                const clonedSvg = svg.cloneNode(true);
                clonedSvg.querySelectorAll('circle, polygon').forEach(el => el.setAttribute('fill', 'currentColor'));
                intentionResultDisplay.appendChild(clonedSvg);

            } else if (intentionMode === 'sound' && intentionResultDisplay) {
                if (intentionCurrentResult === 'sound_on') {
                    playSound();
                    const waveSvg = cachedElements.svgOscilloscopeWave.cloneNode(true);
                    intentionResultDisplay.appendChild(waveSvg);
                } else { // 'sound_off'
                    const silenceSvg = cachedElements.svgSilenceLine.cloneNode(true);
                    intentionResultDisplay.appendChild(silenceSvg);
                }
            }


            const feedbackButtons = feedbackButtonsTemplate.cloneNode(true);
            const successBtn = feedbackButtons.querySelectorAll('button')[0];
            const failureBtn = feedbackButtons.querySelectorAll('button')[1];

            if (intentionDisplay) intentionDisplay.insertAdjacentElement('afterend', feedbackButtons);

            successBtn.addEventListener('click', handleSuccess);
            failureBtn.addEventListener('click', handleFailure);

            const timeout = setTimeout(() => {
                if (!isProcessingIntention) return;
                isProcessingIntention = false;
                const guessTimeMs = Date.now();
                const timeDiffMs = intentionAttemptStartTime ? (guessTimeMs - intentionAttemptStartTime) : 0;
                const timeToGuess = timeDiffMs ? Math.max(0.1, Number((timeDiffMs / 1000).toFixed(1))) : 0.1;
                intentionAttempts.push({ time: timeToGuess, result: 0 });
                saveAttempts('intention');
                updateIntentionStatsDisplay(); // Update stats after timeout
                sendGtagEvent('intention_timeout', {
                    event_category: 'Game',
                    event_label: 'Intention Timeout',
                    mode: intentionMode,
                    result: intentionCurrentResult,
                    time_to_guess: timeToGuess,
                    subsession_id: window.currentSubsessionId
                });
                logDebug(`Intention attempt timed out, time_to_guess: ${timeToGuess}s, subsession_id: ${window.currentSubsessionId}`);
                logDebug('Intention attempts:', intentionAttempts);
                cleanupAndRestart();
            }, 60000);

            function handleSuccess() {
                if (!isProcessingIntention) return;
                isProcessingIntention = false;
                const guessTimeMs = Date.now();
                const timeDiffMs = intentionAttemptStartTime ? (guessTimeMs - intentionAttemptStartTime) : 0;
                const timeToGuess = timeDiffMs ? Math.max(0.1, Number((timeDiffMs / 1000).toFixed(1))) : 0.1;
                intentionAttemptStartTime = guessTimeMs;
                intentionStats.successes++;
                intentionGuessSequence.push(1);
                intentionAttempts.push({ time: timeToGuess, result: 1 });
                saveAttempts('intention');
                updateIntentionStatsDisplay(); // Update stats after success
                sendGtagEvent('intention_guess', {
                    event_category: 'Game',
                    event_label: 'Intention Guess',
                    value: 'success',
                    guess_result: 1,
                    mode: intentionMode,
                    result: intentionCurrentResult,
                    time_to_guess: timeToGuess,
                    attempt_id: intentionStats.attempts,
                    subsession_id: window.currentSubsessionId
                });
                const totalTime = gameStartTime ? ((Date.now() - gameStartTime) / 1000).toFixed(1) : 'N/A';
                logDebug(`Intention guess: Success, result: ${intentionCurrentResult}, time_to_guess: ${timeToGuess}s, sequence: [${intentionGuessSequence.join(', ')}], total game time: ${totalTime}s, subsession_id: ${window.currentSubsessionId}`);
                logDebug('Intention attempts:', intentionAttempts);
                cleanupAndRestart();
            }

            function handleFailure() {
                if (!isProcessingIntention) return;
                isProcessingIntention = false;
                const guessTimeMs = Date.now();
                const timeDiffMs = intentionAttemptStartTime ? (guessTimeMs - intentionAttemptStartTime) : 0;
                const timeToGuess = timeDiffMs ? Math.max(0.1, Number((timeDiffMs / 1000).toFixed(1))) : 0.1;
                intentionAttemptStartTime = guessTimeMs;
                intentionStats.failures++;
                intentionGuessSequence.push(0);
                intentionAttempts.push({ time: timeToGuess, result: 0 });
                saveAttempts('intention');
                updateIntentionStatsDisplay(); // Update stats after failure
                sendGtagEvent('intention_guess', {
                    event_category: 'Game',
                    event_label: 'Intention Guess',
                    value: 'failure',
                    guess_result: 0,
                    mode: intentionMode,
                    result: intentionCurrentResult,
                    time_to_guess: timeToGuess,
                    attempt_id: intentionStats.attempts,
                    subsession_id: window.currentSubsessionId
                });
                const totalTime = gameStartTime ? ((Date.now() - gameStartTime) / 1000).toFixed(1) : 'N/A';
                logDebug(`Intention guess: Failure, result: ${intentionCurrentResult}, time_to_guess: ${timeToGuess}s, sequence: [${intentionGuessSequence.join(', ')}], total game time: ${totalTime}s, subsession_id: ${window.currentSubsessionId}`);
                logDebug('Intention attempts:', intentionAttempts);
                cleanupAndRestart();
            }

            function cleanupAndRestart() {
                try {
                    clearTimeout(timeout);
                    if (feedbackButtons && feedbackButtons.parentNode) {
                        feedbackButtons.remove();
                        logDebug('Feedback buttons removed');
                    } else {
                        logDebug('Feedback buttons not found or already removed');
                    }
                    if (intentionResultDisplay) intentionResultDisplay.classList.add('hidden');
                    if (intentionDisplay) intentionDisplay.style.backgroundColor = 'black'; // Reset main display behind result area
                    // intentionResultDisplay background is handled by CSS var
                    
                    isProcessingIntention = false;

                    if (newGameButtonTimeoutId) {
                        clearTimeout(newGameButtonTimeoutId);
                        newGameButtonTimeoutId = null;
                    }

                    if (intentionAttemptsMode === 'limited' && intentionStats.attempts >= intentionMaxAttempts) {
                        if (intentionShowBtn) {
                            intentionShowBtn.disabled = true;
                            intentionShowBtn.classList.add('hidden'); 
                        }
                        if (!sessionSummarySent) {
                            sendSessionSummary();
                        }
                        if (intentionNewGameBtn) {
                            logDebug(`Scheduling New Game Button to show in ${NEW_GAME_BUTTON_DELAY_MS}ms`);
                            intentionNewGameBtn.classList.add('hidden'); // Ensure hidden before scheduling
                            newGameButtonTimeoutId = setTimeout(() => {
                                if (intentionNewGameBtn) intentionNewGameBtn.classList.remove('hidden');
                                logDebug('New Game Button shown after delay');
                                newGameButtonTimeoutId = null; 
                            }, NEW_GAME_BUTTON_DELAY_MS);
                        }
                    } else {
                        intentionCurrentResult = null;
                        if (intentionShowBtn) {
                           intentionShowBtn.classList.remove('hidden'); 
                           intentionShowBtn.disabled = false;
                        }
                        if (intentionNewGameBtn) { // Ensure new game button is hidden if game is not over
                            intentionNewGameBtn.classList.add('hidden');
                        }
                        if (intentionRandomizerInterval === null) {
                            logDebug('Restarting intention game from cleanupAndRestart');
                            startIntentionGame('cleanupAndRestart');
                        } else {
                            logDebug('Randomizer already active, skipping restart');
                        }
                    }
                } catch (error) {
                    console.error('Error in cleanupAndRestart:', error);
                    sendGtagEvent('error', {
                        event_category: 'App',
                        event_label: 'Runtime Error',
                        error_message: error.message,
                        error_file: 'script.js',
                        subsession_id: window.currentSubsessionId
                    });
                }
            }
        });
    }, randomDelay);
}

function updateIntentionStatsDisplay() {
    if (intentionStatsSpanAttempts) intentionStatsSpanAttempts.textContent = intentionStats.attempts;
    if (intentionStatsSpanMaxAttempts) intentionStatsSpanMaxAttempts.textContent = intentionAttemptsMode === 'limited' ? intentionMaxAttempts : '∞';
    if (intentionStatsSpanSuccesses) intentionStatsSpanSuccesses.textContent = intentionStats.successes;
    if (intentionStatsSpanFailures) intentionStatsSpanFailures.textContent = intentionStats.failures;
    
    const successRate = intentionStats.attempts > 0 ? Math.round((intentionStats.successes / intentionStats.attempts) * 100) : 0;
    if (intentionStatsSpanSuccessRate) intentionStatsSpanSuccessRate.textContent = `${successRate}%`;
    
    const lastAttemptTimeText = intentionAttempts.length > 0 
        ? `${intentionAttempts[intentionAttempts.length - 1].time.toFixed(1)}s` 
        : '0s';
    if (intentionStatsSpanLastAttemptTime) intentionStatsSpanLastAttemptTime.textContent = lastAttemptTimeText;

    const successChar = currentLanguage === 'alien' ? translations.alien.success : '✅';
    const failureChar = currentLanguage === 'alien' ? translations.alien.failure : '❌';
    const historyText = intentionAttempts.map(attempt => attempt.result === 1 ? successChar : failureChar).join(' ');
    if (intentionStatsSpanHistory) intentionStatsSpanHistory.textContent = historyText;
    
    const avgTime = intentionAttempts.length ? (intentionAttempts.reduce((sum, a) => sum + a.time, 0) / intentionAttempts.length).toFixed(1) : 0;
    if (intentionStatsSpanAvgTime) intentionStatsSpanAvgTime.textContent = `${avgTime}s`;
}


function startVisionShuffle() {
    logDebug('Starting Vision shuffle');
    if (!visionShuffleBtn || visionShuffleBtn.disabled) return;
    shuffleStartTime = Date.now();
    sendGtagEvent('shuffle', {
        event_category: 'Game',
        event_label: 'Vision Shuffle',
        mode: visionMode,
        subsession_id: window.currentSubsessionId
    });

    visionShuffleBtn.disabled = true;
    setVisionChoiceButtonsEnabled(false);
    if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
    if (visionDisplay) visionDisplay.style.backgroundColor = 'black';
    if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent';

    const randomTime = RANDOM_RESULT_MIN_TIME + Math.random() * (RANDOM_RESULT_MAX_TIME - RANDOM_RESULT_MIN_TIME);

    visionRandomizerTimeout = setTimeout(() => {
        visionCurrentResult = getRandomResult(visionMode);
        logDebug(`Random result generated at ${randomTime.toFixed(2)}ms:`, visionCurrentResult);
    }, randomTime);

    setTimeout(() => {
        if (visionShuffleBtn) visionShuffleBtn.disabled = false;
        setVisionChoiceButtonsEnabled(true);
        choiceButtonsEnabledTime = Date.now();
        if (visionChoicesDiv) {
            visionChoicesDiv.classList.add('active');
            setTimeout(() => visionChoicesDiv.classList.remove('active'), 1000);
        }
        logDebug(`Choice buttons enabled at: ${choiceButtonsEnabledTime}, mode: ${visionMode}`);
    }, SHUFFLE_BUTTON_DISABLE_TIME);
}

function stopVisionGame() {
    if (visionRandomizerTimeout !== null) {
        clearTimeout(visionRandomizerTimeout);
        visionRandomizerTimeout = null;
    }
    if (visionNewGameButtonTimeoutId) { // Clear vision new game button timeout
        clearTimeout(visionNewGameButtonTimeoutId);
        visionNewGameButtonTimeoutId = null;
    }
    if (visionShuffleBtn) visionShuffleBtn.disabled = false;
    setVisionChoiceButtonsEnabled(false);
    if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
    if (visionDisplay) visionDisplay.style.backgroundColor = 'black';
    if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent';
    visionCurrentResult = null;
    choiceButtonsEnabledTime = null;
}

function setVisionChoiceButtonsEnabled(enabled) {
    if (!visionChoicesDiv) return;
    const buttons = visionChoicesDiv.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        if (!button.classList.contains('hidden')) {
            button.disabled = !enabled;
        } else {
            button.disabled = true;
        }
    });
}

function handleVisionChoice(event) {
    const targetBtn = event.target.closest('.choice-btn');
    if (visionCurrentResult === null || !targetBtn || targetBtn.disabled) return;

    const choice = targetBtn.dataset.choice;
    setVisionChoiceButtonsEnabled(false);
    if (visionShuffleBtn) visionShuffleBtn.disabled = true;
    visionStats.attempts++;
    if (visionStats.attempts === 1 && visionAttemptsModeDiv) {
        visionAttemptsModeDiv.classList.add('hidden');
    }
    const isCorrect = (choice === visionCurrentResult);
    const guessResult = isCorrect ? 1 : 0;

    const resultDisplayTime = Date.now();
    const timeDiffMs = choiceButtonsEnabledTime ? (resultDisplayTime - choiceButtonsEnabledTime) : 0;
    const timeToGuess = timeDiffMs ? Math.max(0.1, Number((timeDiffMs / 1000).toFixed(1))) : 0.1;
    choiceButtonsEnabledTime = null;
    visionGuessSequence.push(guessResult);
    visionAttempts.push({ time: timeToGuess, result: guessResult });
    saveAttempts('vision');

    const totalTime = gameStartTime ? ((Date.now() - gameStartTime) / 1000).toFixed(1) : 'N/A';
    logDebug(`Vision guess: ${isCorrect ? 'Success' : 'Failure'}, choice: ${choice}, correct: ${visionCurrentResult}, time_to_guess: ${timeToGuess}s, sequence: [${visionGuessSequence.join(', ')}], total game time: ${totalTime}s`);
    logDebug('Vision attempts:', visionAttempts);

    sendGtagEvent('guess', {
        event_category: 'Game',
        event_label: 'Vision Guess',
        value: isCorrect ? 'success' : 'failure',
        guess_result: guessResult,
        mode: visionMode,
        choice: choice,
        correct_answer: visionCurrentResult,
        time_to_guess: timeToGuess,
        attempt_id: visionStats.attempts,
        subsession_id: window.currentSubsessionId
    });

    if (isCorrect) {
        visionStats.successes++;
    } else {
        visionStats.failures++;
    }

    if (visionResultDisplay) visionResultDisplay.classList.remove('hidden');
    if (visionDisplay) visionDisplay.style.backgroundColor = 'transparent'; // To show result display's own background
    
    if (visionResultDisplay) {
        visionResultDisplay.innerHTML = '';
        visionResultDisplay.style.backgroundColor = 'transparent'; 
    }


    if (visionMode === 'color' && visionResultDisplay) {
        visionResultDisplay.style.backgroundColor = visionCurrentResult; 
        let messageText = document.createElement('p');
        messageText.textContent = isCorrect ? translations[currentLanguage].visionSuccess : translations[currentLanguage].visionFailure;
        const bgColor = visionCurrentResult; 
        messageText.style.color = (bgColor === 'blue') ? 'white' : 'black'; 
        messageText.style.textShadow = '1px 1px 3px rgba(0,0,0,0.5)';
        visionResultDisplay.appendChild(messageText);
        visionResultDisplay.style.flexDirection = 'column';
        visionResultDisplay.style.gap = '0';
    } else if ((visionMode === 'shape' || visionMode === 'sound') && visionResultDisplay) { // Handle shape and sound
        const feedbackContent = document.createElement('div');
        feedbackContent.classList.add('vision-feedback-content');
        
        let svgToDisplay;
        if (visionMode === 'shape') {
            svgToDisplay = visionCurrentResult === 'circle' ? cachedElements.svgCircle.cloneNode(true) : cachedElements.svgTriangle.cloneNode(true);
        } else { // sound mode
            if (visionCurrentResult === 'sound_on') {
                playSound(); // Play sound if it was 'sound_on'
                svgToDisplay = cachedElements.svgOscilloscopeWave.cloneNode(true);
            } else {
                svgToDisplay = cachedElements.svgSilenceLine.cloneNode(true);
            }
        }
        
        svgToDisplay.querySelectorAll('circle, polygon, rect, line').forEach(el => el.setAttribute(el.tagName === 'line' ? 'stroke' : 'fill', 'currentColor'));
        feedbackContent.appendChild(svgToDisplay);

        const messageText = document.createElement('p'); // Still hidden by CSS but part of the structure
        messageText.textContent = isCorrect ? translations[currentLanguage].visionSuccess : translations[currentLanguage].visionFailure;
        messageText.style.color = 'currentColor'; 
        feedbackContent.appendChild(messageText);
        
        visionResultDisplay.appendChild(feedbackContent);
        visionResultDisplay.style.flexDirection = 'row'; // Or column, depending on desired layout
        visionResultDisplay.style.gap = '0';
    }

    updateVisionStatsDisplay();
    visionCurrentResult = null;

    if (visionNewGameButtonTimeoutId) { 
        clearTimeout(visionNewGameButtonTimeoutId);
        visionNewGameButtonTimeoutId = null;
    }

    setTimeout(() => {
        if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
        if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent'; 
        if (visionDisplay) visionDisplay.style.backgroundColor = 'black'; 

        if (visionAttemptMode === 'limited' && visionStats.attempts >= visionMaxAttempts) {
            if (visionShuffleBtn) {
                visionShuffleBtn.disabled = true;
                visionShuffleBtn.classList.add('hidden');
            }
            if(visionChoicesDiv) visionChoicesDiv.classList.add('hidden');
            setVisionChoiceButtonsEnabled(false);

            if (!sessionSummarySent) {
                sendSessionSummary();
            }
            if (visionNewGameBtn) {
                visionNewGameBtn.classList.add('hidden'); 
                visionNewGameButtonTimeoutId = setTimeout(() => {
                    if (visionNewGameBtn) visionNewGameBtn.classList.remove('hidden');
                    visionNewGameButtonTimeoutId = null;
                }, NEW_GAME_BUTTON_DELAY_MS);
            }
        } else { 
            if (visionShuffleBtn) {
                visionShuffleBtn.disabled = false;
                visionShuffleBtn.classList.remove('hidden');
            }
            if(visionChoicesDiv) visionChoicesDiv.classList.remove('hidden');
            setVisionChoiceButtonsEnabled(false); 
            if (visionNewGameBtn) visionNewGameBtn.classList.add('hidden'); 
        }
    }, 2500);
}

function updateVisionStatsDisplay() {
    if (visionStatsSpanAttempts) visionStatsSpanAttempts.textContent = visionStats.attempts;
    if (visionStatsSpanMaxAttempts) visionStatsSpanMaxAttempts.textContent = visionAttemptMode === 'limited' ? visionMaxAttempts : '∞';
    if (visionStatsSpanSuccesses) visionStatsSpanSuccesses.textContent = visionStats.successes;
    if (visionStatsSpanFailures) visionStatsSpanFailures.textContent = visionStats.failures;
    
    const successRate = visionStats.attempts > 0 ? Math.round((visionStats.successes / visionStats.attempts) * 100) : 0;
    if (visionStatsSpanSuccessRate) visionStatsSpanSuccessRate.textContent = `${successRate}%`;

    const lastAttemptTimeText = visionAttempts.length > 0 
        ? `${visionAttempts[visionAttempts.length - 1].time.toFixed(1)}s` 
        : '0s';
    if (visionStatsSpanLastAttemptTime) visionStatsSpanLastAttemptTime.textContent = lastAttemptTimeText;

    const successChar = currentLanguage === 'alien' ? translations.alien.success : '✅';
    const failureChar = currentLanguage === 'alien' ? translations.alien.failure : '❌';
    const historyText = visionAttempts.map(attempt => attempt.result === 1 ? successChar : failureChar).join(''); 
    if (visionStatsSpanHistory) visionStatsSpanHistory.textContent = historyText;
    
    const avgTime = visionAttempts.length ? (visionAttempts.reduce((sum, a) => sum + a.time, 0) / visionAttempts.length).toFixed(1) : 0;
    if (visionStatsSpanAvgTime) visionStatsSpanAvgTime.textContent = `${avgTime}s`;
}

function updateVisionChoicesDisplay() {
    if (visionColorChoiceBtns) visionColorChoiceBtns.forEach(btn => btn.classList.add('hidden'));
    if (visionShapeChoiceBtns) visionShapeChoiceBtns.forEach(btn => btn.classList.add('hidden'));
    if (visionSoundChoiceBtns) visionSoundChoiceBtns.forEach(btn => btn.classList.add('hidden'));
    setVisionChoiceButtonsEnabled(false);

    if (visionMode === 'color') {
        if (visionColorChoiceBtns) visionColorChoiceBtns.forEach(btn => btn.classList.remove('hidden'));
    } else if (visionMode === 'shape') {
        if (visionShapeChoiceBtns) visionShapeChoiceBtns.forEach(btn => btn.classList.remove('hidden'));
    } else if (visionMode === 'sound') {
        if (visionSoundChoiceBtns) visionSoundChoiceBtns.forEach(btn => btn.classList.remove('hidden'));
    }
}

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.body.classList.contains('light-theme')
        ? translations[currentLanguage].themeDay
        : translations[currentLanguage].themeNight;
    themeIcon.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    document.getElementById('theme-toggle-btn').childNodes[2].textContent = themeText;
    document.getElementById('theme-toggle-btn').setAttribute('aria-label', `${translations[currentLanguage].themeToggle}: ${themeText}`);
    sendGtagEvent('theme_change', {
        event_category: 'App',
        event_label: 'Theme Toggle',
        value: document.body.classList.contains('light-theme') ? 'light' : 'dark',
        subsession_id: window.currentSubsessionId
    });
}

// Event listeners
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

if (languageToggleBtn && languageMenu && languageOptions.length) {
    // Переключение видимости меню языка
    languageToggleBtn.addEventListener('click', () => {
        const isExpanded = languageMenu.classList.toggle('hidden');
        languageToggleBtn.setAttribute('aria-expanded', !isExpanded);
        logDebug(`Language menu ${isExpanded ? 'hidden' : 'shown'}`);
    });

    // Обработка выбора языка
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newLanguage = option.dataset.lang;
            if (newLanguage === currentLanguage) {
                languageMenu.classList.add('hidden');
                languageToggleBtn.setAttribute('aria-expanded', 'false');
                return;
            }
            currentLanguage = newLanguage;
            updateLanguage();
            languageMenu.classList.add('hidden');
            languageToggleBtn.setAttribute('aria-expanded', 'false');
            sendGtagEvent('language_change', {
                event_category: 'App',
                event_label: 'Language Change',
                value: currentLanguage,
                subsession_id: window.currentSubsessionId
            });
            logDebug(`Language changed to: ${currentLanguage}`);
        });

        // Поддержка клавиатуры
        option.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                option.click();
            }
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (event) => {
        if (!languageToggleBtn.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
            languageToggleBtn.setAttribute('aria-expanded', 'false');
            logDebug('Language menu closed due to outside click');
        }
    });
}




if (btnStartIntention) {
    btnStartIntention.addEventListener('click', () => {
        gameStartTime = Date.now();
        sessionSummarySent = false;
        resetIntentionGame();
        showScreen('game-intention');
        setTimeout(() => {
            sendGtagEvent('game_select', {
                event_category: 'Game',
                event_label: 'Intention',
                game_mode: intentionMode,
                subsession_id: window.currentSubsessionId,
                event_timestamp_ms: Date.now(),
                timezone_offset: new Date().getTimezoneOffset() // Минуты смещения от UTC
            });
        }, 0);
    });
}

if (btnStartVision) {
    btnStartVision.addEventListener('click', () => {
        gameStartTime = Date.now();
        sessionSummarySent = false;
        resetVisionGame();
        showScreen('game-vision');
        setTimeout(() => {
            sendGtagEvent('game_select', {
                event_category: 'Game',
                event_label: 'Vision',
                game_mode: visionMode,
                subsession_id: window.currentSubsessionId,
                event_timestamp_ms: Date.now(),
                timezone_offset: new Date().getTimezoneOffset() // Минуты смещения от UTC
            });
        }, 0);
    });
}




if (btnReadMore) {
    btnReadMore.addEventListener('click', () => {
        if (readMoreArea) readMoreArea.classList.remove('hidden');
        btnReadMore.classList.add('hidden');
        sendGtagEvent('read_more', {
            event_category: 'App',
            event_label: 'Read More Clicked',
            subsession_id: window.currentSubsessionId
        });
    });
}

if (btnCloseReadMore) {
    btnCloseReadMore.addEventListener('click', () => {
        if (readMoreArea) readMoreArea.classList.add('hidden');
        if (btnReadMore) btnReadMore.classList.remove('hidden');
    });
}

if (backButtons) {
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (gameStartTime && !sessionSummarySent) {
                const duration = ((Date.now() - gameStartTime) / 1000).toFixed(1);
                sendGtagEvent('game_exit', {
                    event_category: 'Game',
                    event_label: currentGameMode === 'intention' ? 'Intention' : 'Vision',
                    game_mode: currentGameMode === 'intention' ? intentionMode : visionMode,
                    session_duration_seconds: parseFloat(duration),
                    subsession_id: window.currentSubsessionId
                });
                sendSessionSummary();
            }
            showScreen('menu-screen');
        });
    });
}

if (intentionShowBtn) {
    intentionShowBtn.addEventListener('click', showIntentionResult);
}

if (intentionDisplay) {
    intentionDisplay.addEventListener('click', () => {
        if (intentionShowBtn && !intentionShowBtn.classList.contains('hidden') && !intentionShowBtn.disabled && currentGameMode === 'intention' && !isProcessingIntention) {
            logDebug('Intention display clicked, triggering show result');
            sendGtagEvent('display_click', {
                event_category: 'Game',
                event_label: 'Intention Display',
                subsession_id: window.currentSubsessionId
            });
            intentionShowBtn.click();
        } else {
            logDebug('Intention display click ignored:', {
                showBtnHidden: intentionShowBtn ? intentionShowBtn.classList.contains('hidden') : 'N/A',
                showBtnDisabled: intentionShowBtn ? intentionShowBtn.disabled : 'N/A',
                gameMode: currentGameMode,
                isProcessing: isProcessingIntention
            });
        }
    });
}

if (!intentionModeRadios.length) {
    console.error('No radio buttons found for intention-mode');
} else {
    intentionModeRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (intentionStats.attempts > 0 && !sessionSummarySent) {
                sendSessionSummary();
            }
            intentionMode = event.target.value;
             if (intentionMode === 'sound') {
                if (!soundBuffer) loadSound(SOUND_FILE);
            }
            sendGtagEvent('mode_change', {
                event_category: 'Game',
                event_label: 'Intention Mode',
                value: intentionMode,
                subsession_id: window.currentSubsessionId
            });
            stopIntentionGame();
             if (newGameButtonTimeoutId) {
                clearTimeout(newGameButtonTimeoutId);
                newGameButtonTimeoutId = null;
            }
            if(intentionNewGameBtn) intentionNewGameBtn.classList.add('hidden'); // Hide new game button on mode change
            startIntentionGame('modeChange');
        });
    });
}

if (intentionAttemptsModeRadios) {
    intentionAttemptsModeRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            intentionAttemptsMode = event.target.value;
            updateIntentionStatsDisplay(); 

            if (newGameButtonTimeoutId) {
                clearTimeout(newGameButtonTimeoutId);
                newGameButtonTimeoutId = null;
            }
            
            if (intentionAttemptsMode === 'limited' && intentionStats.attempts >= intentionMaxAttempts) {
                if (intentionShowBtn) {
                    intentionShowBtn.disabled = true;
                    intentionShowBtn.classList.add('hidden');
                }
                if (intentionNewGameBtn) {
                    intentionNewGameBtn.classList.add('hidden'); 
                    newGameButtonTimeoutId = setTimeout(() => {
                        if(intentionNewGameBtn) intentionNewGameBtn.classList.remove('hidden');
                        newGameButtonTimeoutId = null;
                    }, NEW_GAME_BUTTON_DELAY_MS);
                }
            } else {
                if (intentionShowBtn) {
                    if (!isProcessingIntention) { // Only show if result isn't currently displayed
                        intentionShowBtn.disabled = false;
                        intentionShowBtn.classList.remove('hidden');
                    }
                }
                if (intentionNewGameBtn) {
                    intentionNewGameBtn.classList.add('hidden');
                }
            }
        });
    });
}

if (intentionNewGameBtn) {
    intentionNewGameBtn.addEventListener('click', () => {
        logDebug('New Game Button Clicked');
        resetIntentionGame();
    });
}

if (visionShuffleBtn) {
    visionShuffleBtn.addEventListener('click', startVisionShuffle);
}

if (visionDisplay) {
    visionDisplay.addEventListener('click', () => {
        if (visionShuffleBtn && !visionShuffleBtn.disabled && currentGameMode === 'vision') {
            sendGtagEvent('display_click', {
                event_category: 'Game',
                event_label: 'Vision Display',
                subsession_id: window.currentSubsessionId
            });
            visionShuffleBtn.click();
        }
    });
}

if (visionChoicesDiv) {
    visionChoicesDiv.addEventListener('click', handleVisionChoice);
}

if (visionModeRadios) {
    visionModeRadios.forEach(radio => {
        radio.addEventListener('click', (event) => {
            if (visionStats.attempts > 0 && !sessionSummarySent) {
                sendSessionSummary();
            }
            visionMode = event.target.value;
            if (visionMode === 'sound' && !soundBuffer) { // Preload sound if switching to sound mode
                loadSound(SOUND_FILE);
            }
            generateSubsessionId(); // Generate new subsession_id for mode change
            sendGtagEvent('mode_change', {
                event_category: 'Game',
                event_label: 'Vision Mode',
                value: visionMode,
                subsession_id: window.currentSubsessionId
            });
            updateVisionChoicesDisplay();
            setVisionChoiceButtonsEnabled(false);
            if (visionShuffleBtn) {
                visionShuffleBtn.disabled = false;
                visionShuffleBtn.classList.remove('hidden');
            }
            if (visionChoicesDiv) visionChoicesDiv.classList.remove('hidden');
            if (visionResultDisplay) visionResultDisplay.classList.add('hidden');
            if (visionDisplay) visionDisplay.style.backgroundColor = 'black';
            if (visionResultDisplay) visionResultDisplay.style.backgroundColor = 'transparent';
            visionCurrentResult = null;
            choiceButtonsEnabledTime = null;
             if (visionNewGameButtonTimeoutId) { 
                clearTimeout(visionNewGameButtonTimeoutId);
                visionNewGameButtonTimeoutId = null;
            }
            if(visionNewGameBtn) visionNewGameBtn.classList.add('hidden');
        });
    });
}

if (visionAttemptsModeRadios) {
    visionAttemptsModeRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            visionAttemptMode = event.target.value;
            updateVisionStatsDisplay();

            if (visionNewGameButtonTimeoutId) {
                clearTimeout(visionNewGameButtonTimeoutId);
                visionNewGameButtonTimeoutId = null;
            }

            if (visionAttemptMode === 'limited' && visionStats.attempts >= visionMaxAttempts) {
                if (visionShuffleBtn) {
                    visionShuffleBtn.disabled = true;
                    visionShuffleBtn.classList.add('hidden');
                }
                if (visionChoicesDiv) {
                    visionChoicesDiv.classList.add('hidden');
                }
                setVisionChoiceButtonsEnabled(false);
                if (visionNewGameBtn) {
                    visionNewGameBtn.classList.add('hidden'); 
                    visionNewGameButtonTimeoutId = setTimeout(() => {
                        if (visionNewGameBtn) visionNewGameBtn.classList.remove('hidden');
                        visionNewGameButtonTimeoutId = null;
                    }, NEW_GAME_BUTTON_DELAY_MS);
                }
            } else { 
                if (visionShuffleBtn) {
                    visionShuffleBtn.disabled = false;
                    visionShuffleBtn.classList.remove('hidden');
                }
                if (visionChoicesDiv) {
                    visionChoicesDiv.classList.remove('hidden');
                }
                setVisionChoiceButtonsEnabled(false); 
                if (visionNewGameBtn) {
                    visionNewGameBtn.classList.add('hidden');
                }
            }
        });
    });
}

if (visionNewGameBtn) {
    visionNewGameBtn.addEventListener('click', resetVisionGame);
}

window.addEventListener('error', (error) => {
    sendGtagEvent('error', {
        event_category: 'App',
        event_label: 'Runtime Error',
        error_message: error.message,
        error_file: error.filename,
        subsession_id: window.currentSubsessionId
    });
});

window.addEventListener('beforeunload', () => {
    if (gameStartTime && !sessionSummarySent) {
        sendSessionSummary();
        saveAttempts(currentGameMode);
        sendGtagEvent('session_end', {
            event_category: 'App',
            event_label: 'App Closed',
            session_duration_seconds: parseFloat(((Date.now() - gameStartTime) / 1000).toFixed(1)),
            subsession_id: window.currentSubsessionId
        });
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && gameStartTime && !sessionSummarySent) {
        logDebug('App hidden, sending session summary');
        sendSessionSummary();
        sendGtagEvent('app_background', {
            event_category: 'App',
            event_label: 'App Minimized',
            session_duration_seconds: parseFloat(((Date.now() - gameStartTime) / 1000).toFixed(1)),
            subsession_id: window.currentSubsessionId
        });
    }
});

window.addEventListener('online', () => {
    logDebug('Internet connection restored, sending saved stats');
    sendSavedStats();
});

Telegram.WebApp.MainButton.onClick(() => {
    if (gameStartTime && !sessionSummarySent) {
        logDebug('MainButton clicked, sending session summary');
        sendSessionSummary();
        sendGtagEvent('app_close', {
            event_category: 'App',
            event_label: 'MainButton Close',
            session_duration_seconds: parseFloat(((Date.now() - gameStartTime) / 1000).toFixed(1)),
            subsession_id: window.currentSubsessionId
        });
    }
    Telegram.WebApp.close();
});

try {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    const userNameSpan = document.getElementById('telegram-user-name');
    if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
        telegramUser = Telegram.WebApp.initDataUnsafe.user;
        window.userId = telegramUser.id;
        if (userNameSpan) userNameSpan.textContent = telegramUser.first_name || translations[currentLanguage].defaultUserName;
        logDebug('Telegram User:', { id: telegramUser.id, first_name: telegramUser.first_name });
        gtag('set', 'user_properties', { custom_user_id: telegramUser.id });
        sendGtagEvent('app_launch', {
            event_category: 'App',
            event_label: 'Mini App Started',
            start_param: Telegram.WebApp.initDataUnsafe.start_param || 'none',
            subsession_id: window.currentSubsessionId
        });
    } else {
        telegramUser = { id: window.userId, first_name: translations[currentLanguage].defaultUserName };
        if (userNameSpan) userNameSpan.textContent = telegramUser.first_name;
        logDebug('Anonymous User:', { id: window.userId });
        gtag('set', 'user_properties', { custom_user_id: window.userId });
        sendGtagEvent('app_launch', {
            event_category: 'App',
            event_label: 'Mini App Started (No User)',
            start_param: Telegram.WebApp.initDataUnsafe.start_param || 'none',
            subsession_id: window.currentSubsessionId
        });
    }
} catch (e) {
    console.warn('Telegram WebApp not available, using anonymous user');
    const userNameSpan = document.getElementById('telegram-user-name');
    telegramUser = { id: window.userId, first_name: translations[currentLanguage].defaultUserName };
    if (userNameSpan) userNameSpan.textContent = telegramUser.first_name;
}

// Инициализация языка и темы
updateLanguage();
logDebug('Initialization completed, calling sendSavedStats and showScreen');
sendSavedStats();
showScreen('menu-screen');


// Инициализация текста кнопки
const languageTextEl = document.getElementById('language-text'); // Renamed to avoid conflict
if (languageToggleBtn && languageTextEl) {
    languageTextEl.textContent = languageNames[currentLanguage];
    languageToggleBtn.setAttribute('aria-label', `${translations[currentLanguage].themeToggle.replace('тему', 'мову')}: ${languageNames[currentLanguage]}`);
} else {
    console.warn('Language toggle button or text element missing');
}

// Проверка инициализации критических элементов
function checkCriticalElements() {
    const criticalElements = [
        { id: 'language-toggle-btn', element: languageToggleBtn },
        { id: 'language-menu', element: languageMenu },
        { id: 'language-text', element: languageTextEl },
        { id: 'menu-screen', element: menuScreen },
        { id: 'game-intention', element: gameIntention },
        { id: 'game-vision', element: gameVision },
        { id: 'user-greeting', element: userGreeting }
    ];

    criticalElements.forEach(({ id, element }) => {
        if (!element) {
            console.error(`Critical element #${id} not found in DOM`);
        }
    });

    if (!languageOptions.length) {
        console.error('No language options found with class .language-option');
    }
}

// Финальная инициализация
function initializeApp() {
    // Проверка критических элементов
    checkCriticalElements();

    // Установка начального состояния меню языка
    if (languageMenu) {
        languageMenu.classList.add('hidden');
        if (languageToggleBtn) languageToggleBtn.setAttribute('aria-expanded', 'false');
    }

    // Обновление отображения выбора для игры "Бачення"
    updateVisionChoicesDisplay();

    // Установка начальной темы, если не установлена
    // Удалена строка document.body.classList.add('light-theme'); для установки ночной темы по умолчанию
    if (!document.body.classList.contains('light-theme') && !document.body.classList.contains('dark-theme')) {
        // Теперь по умолчанию будет ночная тема (т.к. 'light-theme' не добавляется)
        logDebug('Defaulting to night theme (no light-theme class added).');
    }
    // Обновляем текст и иконку кнопки темы в любом случае, чтобы отразить текущее состояние
    const themeText = document.body.classList.contains('light-theme')
        ? translations[currentLanguage].themeDay
        : translations[currentLanguage].themeNight;
    const themeIconEl = document.getElementById('theme-icon');
    if (themeIconEl) themeIconEl.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    
    const themeToggleBtnEl = document.getElementById('theme-toggle-btn');
    if (themeToggleBtnEl && themeToggleBtnEl.childNodes[2]) {
        themeToggleBtnEl.childNodes[2].textContent = themeText;
    }
    

    // Отправка события инициализации приложения
    sendGtagEvent('app_initialized', {
        event_category: 'App',
        event_label: 'App Fully Initialized',
        language: currentLanguage,
        theme: document.body.classList.contains('light-theme') ? 'light' : 'dark',
        subsession_id: window.currentSubsessionId
    });

    // Проверка сохранённых попыток из localStorage
    ['intentionAttempts', 'visionAttempts'].forEach(key => {
        const savedAttemptsData = localStorage.getItem(key);
        if (savedAttemptsData) {
            try {
                const parsedAttempts = JSON.parse(savedAttemptsData);
                if (Array.isArray(parsedAttempts)) {
                    logDebug(`Found ${parsedAttempts.length} saved ${key} in localStorage`);
                    if (key === 'intentionAttempts') {
                        intentionAttempts.push(...parsedAttempts);
                        updateIntentionStatsDisplay();
                    } else {
                        visionAttempts.push(...parsedAttempts);
                        updateVisionStatsDisplay();
                    }
                }
            } catch (e) {
                console.error(`Error parsing ${key} from localStorage:`, e);
                localStorage.removeItem(key); // Clear corrupted data
            }
        }
    });

    // Установка фокуса на главную кнопку меню для доступности
    if (btnStartIntention) {
        btnStartIntention.focus();
    }

    logDebug('App fully initialized', {
        language: currentLanguage,
        theme: document.body.classList.contains('light-theme') ? 'light' : 'dark',
        subsessionId: window.currentSubsessionId
    });
}

// Запуск инициализации приложения
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    // После инициализации приложения, еще раз обновим язык/тему, чтобы гарантировать корректное отображение кнопки темы
    updateLanguage();
});

// Обработка ошибок во время инициализации
try {
    updateLanguage(); // Вызывается до DOMContentLoaded, но initializeApp перевызовет updateLanguage
    showScreen('menu-screen');
} catch (error) {
    console.error('Initialization error:', error);
    sendGtagEvent('error', {
        event_category: 'App',
        event_label: 'Initialization Error',
        error_message: error.message,
        error_file: 'script.js',
        subsession_id: window.currentSubsessionId
    });
}