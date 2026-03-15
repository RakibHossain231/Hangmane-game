// 150+ Challenging Words with Hints (4-6 letters)
const WORD_WITH_HINTS = [
    // 4 letter words (50+)
    { word: 'ECHO', hint: '🔊 sound reflection' },
    { word: 'GNAT', hint: '🦟 small flying insect' },
    { word: 'KNOB', hint: '🚪 round door handle' },
    { word: 'MYTH', hint: '📜 ancient legend' },
    { word: 'OXEN', hint: '🐂 strong work animals' },
    { word: 'QUIZ', hint: '📝 test your knowledge' },
    { word: 'RHYME', hint: '🎤 poetry pattern' },
    { word: 'SCAR', hint: '🤕 skin mark after wound' },
    { word: 'TWIG', hint: '🌿 small tree branch' },
    { word: 'WHIP', hint: '🪢 used by a rider' },
    { word: 'ZEST', hint: '🍋 citrus peel' },
    { word: 'AXIS', hint: '📊 center line' },
    { word: 'BOLT', hint: '⚡ lightning fastener' },
    { word: 'CLIP', hint: '📎 holds papers' },
    { word: 'DRIP', hint: '💧 water drop' },
    { word: 'FROG', hint: '🐸 jumps, croaks' },
    { word: 'GLOW', hint: '✨ soft light' },
    { word: 'HERB', hint: '🌿 cooking plant' },
    { word: 'ICON', hint: '⭐ symbol on screen' },
    { word: 'JAZZ', hint: '🎷 music genre' },
    { word: 'KICK', hint: '🦵 hit with foot' },
    { word: 'LARK', hint: '🐦 morning bird' },
    { word: 'MINT', hint: '🌱 fresh herb' },
    { word: 'NEST', hint: '🐦 bird home' },
    { word: 'OATH', hint: '📜 solemn promise' },
    { word: 'PLUM', hint: '🟣 purple fruit' },
    { word: 'QUILT', hint: '🛏️ warm blanket' },
    { word: 'RUST', hint: '⚙️ iron corrosion' },
    { word: 'SWAN', hint: '🦢 white bird' },
    { word: 'TUNA', hint: '🐟 fish sandwich' },
    { word: 'URBAN', hint: '🏙️ city related' },
    { word: 'VINE', hint: '🌿 climbing plant' },
    { word: 'WASP', hint: '🐝 stinging insect' },
    { word: 'XRAY', hint: '🩻 bone photo' },
    { word: 'YARN', hint: '🧶 knitting thread' },
    { word: 'ZINC', hint: '⚗️ metal element' },
    { word: 'ARCH', hint: '🏛️ curved structure' },
    { word: 'BLADE', hint: '🔪 knife edge' },
    { word: 'CRANE', hint: '🏗️ bird or machine' },
    { word: 'DICE', hint: '🎲 game cubes' },
    { word: 'ELBOW', hint: '💪 arm joint' },
    { word: 'FLASK', hint: '🧪 lab bottle' },
    { word: 'GLOBE', hint: '🌍 world map' },
    { word: 'HATCH', hint: '🥚 egg opens' },
    { word: 'IVORY', hint: '🐘 white tusk' },
    { word: 'JELLY', hint: '🍇 fruit spread' },
    { word: 'KNOLL', hint: '⛰️ small hill' },
    { word: 'LATCH', hint: '🔒 door lock' },
    { word: 'MOTOR', hint: '🏎️ engine' },
    
    // 5 letter words (50+)
    { word: 'CRYPT', hint: '⚰️ underground room' },
    { word: 'DWARF', hint: '⛏️ fantasy creature' },
    { word: 'FJORD', hint: '🏞️ narrow sea inlet' },
    { word: 'GNOME', hint: '🧔 garden decoration' },
    { word: 'JAZZY', hint: '🎷 lively, colorful' },
    { word: 'KAYAK', hint: '🛶 small boat' },
    { word: 'LYMPH', hint: '🩸 body fluid' },
    { word: 'NYMPH', hint: '🧚 mythological spirit' },
    { word: 'PYREX', hint: '🧪 heat-resistant glass' },
    { word: 'QUARK', hint: '⚛️ physics particle' },
    { word: 'RHINO', hint: '🦏 large animal' },
    { word: 'SYRUP', hint: '🥞 sweet liquid' },
    { word: 'THYME', hint: '🌿 cooking herb' },
    { word: 'VYING', hint: '🤺 competing' },
    { word: 'WHARF', hint: '⚓ boat docking' },
    { word: 'XENON', hint: '💨 rare gas' },
    { word: 'YACHT', hint: '🛥️ luxury boat' },
    { word: 'ZEBRA', hint: '🦓 black and white' },
    { word: 'AMBER', hint: '🟠 fossilized resin' },
    { word: 'BLIMP', hint: '🎈 airship' },
    { word: 'CORAL', hint: '🪸 reef creature' },
    { word: 'DRONE', hint: '🚁 flying robot' },
    { word: 'EMBER', hint: '🔥 hot coal' },
    { word: 'FLUTE', hint: '🎵 woodwind' },
    { word: 'GRIT', hint: '💪 courage' },
    { word: 'HUMUS', hint: '🌱 soil layer' },
    { word: 'INPUT', hint: '⌨️ data entry' },
    { word: 'JULEP', hint: '🍹 mint drink' },
    { word: 'KRAFT', hint: '🧀 cheese brand' },
    { word: 'LUMEN', hint: '💡 light unit' },
    { word: 'MIMIC', hint: '🎭 copy, imitate' },
    { word: 'NEXUS', hint: '🔗 connection point' },
    { word: 'OZONE', hint: '🌍 atmospheric gas' },
    { word: 'PLAZA', hint: '🏢 public square' },
    { word: 'QUERY', hint: '❓ database question' },
    { word: 'RADAR', hint: '📡 detection system' },
    { word: 'SONAR', hint: '🌊 underwater detection' },
    { word: 'TAPIR', hint: '🦧 jungle animal' },
    { word: 'USHER', hint: '🎭 theater guide' },
    { word: 'VIGOR', hint: '💪 strength' },
    { word: 'WALTZ', hint: '💃 dance' },
    { word: 'XERIC', hint: '🏜️ dry adapted' },
    { word: 'YOGIC', hint: '🧘 meditation related' },
    { word: 'ZONAL', hint: '📍 area based' },
    { word: 'ACORN', hint: '🌰 oak seed' },
    { word: 'BRIAR', hint: '🌿 thorny bush' },
    { word: 'CHASM', hint: '⛰️ deep crack' },
    { word: 'DWELL', hint: '🏠 live somewhere' },
    { word: 'EXERT', hint: '💪 put forth effort' },
    { word: 'FLARE', hint: '🔥 sudden flame' },
    
    // 6 letter words (50+)
    { word: 'BANANA', hint: '🍌 yellow curved fruit' },
    { word: 'CANYON', hint: '🏜️ deep valley' },
    { word: 'DENGUE', hint: '🦟 mosquito fever' },
    { word: 'EFFORT', hint: '💪 hard work' },
    { word: 'FOSSIL', hint: '🦴 ancient remains' },
    { word: 'GLITCH', hint: '⚡ temporary error' },
    { word: 'HACKER', hint: '💻 computer expert' },
    { word: 'IGNITE', hint: '🔥 set on fire' },
    { word: 'JUNGLE', hint: '🌳 dense forest' },
    { word: 'KITTEN', hint: '🐱 baby cat' },
    { word: 'LIZARD', hint: '🦎 reptile' },
    { word: 'MYSTIC', hint: '🔮 spiritual' },
    { word: 'NEBULA', hint: '🌌 space cloud' },
    { word: 'OXYGEN', hint: '💨 we breathe it' },
    { word: 'PENGUIN', hint: '🐧 flightless bird' },
    { word: 'QUIVER', hint: '🏹 arrow holder' },
    { word: 'RHYTHM', hint: '🥁 beat pattern' },
    { word: 'SYSTEM', hint: '⚙️ organized group' },
    { word: 'TUNDRA', hint: '❄️ arctic plain' },
    { word: 'UNZIPS', hint: '🤐 opens zipper' },
    { word: 'VORTEX', hint: '🌀 whirlpool' },
    { word: 'WHISKY', hint: '🥃 alcoholic drink' },
    { word: 'YOGURT', hint: '🥛 fermented milk' },
    { word: 'ZIPPER', hint: '👖 clothing fastener' },
    { word: 'ABSORB', hint: '🧽 take in liquid' },
    { word: 'BAMBOO', hint: '🎋 giant grass' },
    { word: 'CRADLE', hint: '👶 baby bed' },
    { word: 'DRAGON', hint: '🐉 mythical beast' },
    { word: 'EMBRYO', hint: '🥚 early development' },
    { word: 'FALTER', hint: '😕 lose strength' },
    { word: 'GALAXY', hint: '🌌 star system' },
    { word: 'HABITAT', hint: '🏠 natural home' },
    { word: 'INSECT', hint: '🐞 small bug' },
    { word: 'JASMINE', hint: '🌸 fragrant flower' },
    { word: 'KEYHOLE', hint: '🔑 lock opening' },
    { word: 'LATTICE', hint: '🔲 grid pattern' },
    { word: 'MAGNET', hint: '🧲 attracts metal' },
    { word: 'NUCLEUS', hint: '⚛️ cell center' },
    { word: 'OCTOPUS', hint: '🐙 eight arms' },
    { word: 'PISTON', hint: '⚙️ engine part' },
    { word: 'QUARTZ', hint: '💎 hard mineral' },
    { word: 'RUSTIC', hint: '🏡 country style' },
    { word: 'SULFUR', hint: '🟡 yellow element' },
    { word: 'THYROID', hint: '🏥 neck gland' },
    { word: 'ULTRAS', hint: '🔊 beyond sound' },
    { word: 'VACUUM', hint: '🧹 empty space' },
    { word: 'WALNUT', hint: '🥜 tree nut' },
    { word: 'XENIAL', hint: '🤝 friendly' },
    { word: 'YONDER', hint: '👉 over there' },
    { word: 'ZEALOT', hint: '🙏 passionate fan' },
    { word: 'BRONZE', hint: '🏆 medal metal' },
    { word: 'CRYSTAL', hint: '🔮 clear gem' },
    { word: 'DENIM', hint: '👖 jean fabric' },
    { word: 'EXODUS', hint: '🚶 mass departure' }
];

// Filter unique words (4-6 letters only)
const uniqueMap = new Map();
WORD_WITH_HINTS.forEach(item => {
    const w = item.word.toUpperCase();
    if (w.length >= 4 && w.length <= 6 && !uniqueMap.has(w)) {
        uniqueMap.set(w, item.hint);
    }
});

const WORD_LIST = Array.from(uniqueMap.entries()).map(([word, hint]) => ({ word, hint }));
console.log(`Total words: ${WORD_LIST.length}`);

// ========== SOUND & VIBRATION FUNCTIONS ==========
// Check if vibration is supported
function vibrate(pattern) {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(pattern);
    }
}

// Play sound using Web Audio API
function playSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'wrong') {
            // Short buzz sound for wrong guess
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.value = 150;
            gainNode.gain.value = 0.1;
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.15);
            
        } else if (type === 'win') {
            // Happy melody for win
            const now = audioContext.currentTime;
            
            // Play a little victory tune (C-E-G-C)
            const frequencies = [523.25, 659.25, 783.99, 1046.50];
            
            frequencies.forEach((freq, index) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.value = 0.1;
                
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.start(now + index * 0.15);
                osc.stop(now + index * 0.15 + 0.2);
            });
            
        } else if (type === 'lose') {
            // Sad sound for lose
            const now = audioContext.currentTime;
            
            // Descending sad tone (G-E-C)
            const frequencies = [392.00, 329.63, 261.63];
            
            frequencies.forEach((freq, index) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.value = 0.1;
                
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.start(now + index * 0.2);
                osc.stop(now + index * 0.2 + 0.3);
            });
        }
    } catch (e) {
        // Browser doesn't support Web Audio API or user interaction required
        console.log('Sound not supported:', e);
    }
}

// ========== SVG Hangman Stages ==========
function getHangmanSVG(step) {
    const svgs = [
        // Step 0 - Empty Gallows
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
        </svg>`,
        // Step 1 - Head
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
        </svg>`,
        // Step 2 - Body
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="67" x2="81.5" y2="97" stroke="#2C3E50" stroke-width="3"/>
        </svg>`,
        // Step 3 - Left Arm
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="67" x2="81.5" y2="97" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="61.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
        </svg>`,
        // Step 4 - Both Arms
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="67" x2="81.5" y2="97" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="61.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="101.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
        </svg>`,
        // Step 5 - Left Leg
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="67" x2="81.5" y2="97" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="61.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="101.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="97" x2="61.5" y2="117" stroke="#2C3E50" stroke-width="3"/>
        </svg>`,
        // Step 6 - Complete
        `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="130" width="80" height="5" fill="#8B4513"/>
            <rect x="35" y="20" width="5" height="110" fill="#8B4513"/>
            <rect x="35" y="20" width="50" height="5" fill="#8B4513"/>
            <rect x="80" y="25" width="3" height="20" fill="#A9A9A9"/>
            <circle cx="81.5" cy="55" r="12" fill="none" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="67" x2="81.5" y2="97" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="61.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="77" x2="101.5" y2="87" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="97" x2="61.5" y2="117" stroke="#2C3E50" stroke-width="3"/>
            <line x1="81.5" y1="97" x2="101.5" y2="117" stroke="#2C3E50" stroke-width="3"/>
            <circle cx="77" cy="51" r="1.5" fill="#2C3E50"/>
            <circle cx="86" cy="51" r="1.5" fill="#2C3E50"/>
            <path d="M77 60 Q81.5 65, 86 60" stroke="#2C3E50" stroke-width="2" fill="none"/>
        </svg>`
    ];
    return svgs[step] || svgs[0];
}

// Game state
let currentWord = null;
let secretWord = '';
let displayed = [];
let wrong = 0;
let guessed = new Set();
let active = true;

// DOM elements
const hangmanContainer = document.getElementById('hangmanContainer');
const wordEl = document.getElementById('wordDisplay');
const wordLengthEl = document.getElementById('wordLength');
const hintEl = document.getElementById('hintText');
const wrongEl = document.getElementById('wrongCount');
const guessedEl = document.getElementById('guessedLetters');
const messageEl = document.getElementById('messageDisplay');
const restartBtn = document.getElementById('restartButton');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');

// Render word
function renderWord() {
    const letters = secretWord.split('');
    const show = active ? displayed : letters;
    wordEl.innerHTML = show.map(c => `<span>${c === '_' ? '_' : c}</span>`).join('');
    wordLengthEl.textContent = `${secretWord.length} letters`;
}

// Update hint
function updateHint() {
    hintEl.textContent = currentWord ? currentWord.hint : '✨';
}

// Update hangman & status
function updateStatus() {
    // Update SVG hangman
    hangmanContainer.innerHTML = getHangmanSVG(Math.min(wrong, 6));
    
    wrongEl.textContent = `❌${wrong}/6`;
    
    const arr = Array.from(guessed).sort();
    guessedEl.textContent = arr.length ? arr.join(' ') : '⚡';
}

// Check win
function checkWin() {
    return secretWord.split('').every(l => guessed.has(l));
}

// End game
function endGame(win) {
    active = false;
    
    if (win) {
        messageEl.textContent = '🎉 WINNER! 🎉';
        playSound('win');
        
        // 🎉 Celebration vibration - longer and happier!
        vibrate([300, 200, 300, 200, 500]); 
        // 300ms vibrate, 200ms pause, 300ms vibrate, 200ms pause, 500ms final vibrate
    } else {
        messageEl.textContent = `💀 Word was "${secretWord}"`;
        playSound('lose');
        
        // 💀 Game over vibration - long and sad!
        vibrate(800); // 800ms continuous vibration (double the previous)
    }
    
    document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = true);
    renderWord();
}

// Process guess
function guess(letter) {
    if (!active || guessed.has(letter)) return;
    
    guessed.add(letter);
    
    if (secretWord.includes(letter)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) displayed[i] = letter;
        }
        renderWord();
        if (checkWin()) endGame(true);
    } else {
        wrong++;
        
        // Wrong guess feedback
        playSound('wrong');
        vibrate(50);
        
        // Shake effect
        wrongEl.classList.add('shake');
        setTimeout(() => {
            wrongEl.classList.remove('shake');
        }, 300);
        
        updateStatus();
        if (wrong >= 6) endGame(false);
    }
    
    updateStatus();
    const btn = document.querySelector(`.key-btn[data-key="${letter}"]`);
    if (btn) btn.disabled = true;
}

// Create key button
function createKeyButton(letter) {
    const btn = document.createElement('button');
    btn.className = 'key-btn';
    btn.setAttribute('data-key', letter);
    btn.textContent = letter;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (active && !btn.disabled) guess(letter);
    });
    return btn;
}

// Build QWERTY keyboard
function buildKeyboard() {
    const row1Keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2Keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3Keys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    
    row1.innerHTML = '';
    row2.innerHTML = '';
    row3.innerHTML = '';
    
    row1Keys.forEach(letter => {
        const btn = createKeyButton(letter);
        row1.appendChild(btn);
    });
    
    row2Keys.forEach(letter => {
        const btn = createKeyButton(letter);
        row2.appendChild(btn);
    });
    
    row3Keys.forEach(letter => {
        const btn = createKeyButton(letter);
        row3.appendChild(btn);
    });
}

// Enable all keys
function enableKeys() {
    document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = false);
}

// New game
function newGame() {
    const rand = Math.floor(Math.random() * WORD_LIST.length);
    currentWord = WORD_LIST[rand];
    secretWord = currentWord.word;
    displayed = Array(secretWord.length).fill('_');
    wrong = 0;
    guessed.clear();
    active = true;
    
    enableKeys();
    renderWord();
    updateHint();
    updateStatus();
    messageEl.textContent = 'Guess a letter';
    
    // Small vibration to indicate new game started
    vibrate(50);
}

// Event listeners
restartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
});

// Initialize
buildKeyboard();
newGame();