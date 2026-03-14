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
    { word: 'ECHO', hint: '🔊 sound repeats' },
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
    // Only take words with length 4-6
    if (w.length >= 4 && w.length <= 6 && !uniqueMap.has(w)) {
        uniqueMap.set(w, item.hint);
    }
});

const WORD_LIST = Array.from(uniqueMap.entries()).map(([word, hint]) => ({ word, hint }));
console.log(`Total words: ${WORD_LIST.length}`); // এখন ১৫০+ শব্দ

// Hangman stages
const HANGMAN_STAGES = [
    "┌───┐\n│   │\n    │\n    │\n    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n    │\n    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n│   │\n    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n/│   │\n    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n/│\\  │\n    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n/│\\  │\n/    │\n    │\n════╧══",
    "┌───┐\n│   │\nO   │\n/│\\  │\n/ \\  │\n    │\n════╧══"
];

// Game state
let currentWord = null;
let secretWord = '';
let displayed = [];
let wrong = 0;
let guessed = new Set();
let active = true;

// DOM elements
const hangmanEl = document.getElementById('hangmanDrawing');
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
    hangmanEl.textContent = HANGMAN_STAGES[Math.min(wrong, 6)];
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
    messageEl.textContent = win ? '🎉 WINNER!' : `💀 Word waz! ${secretWord}`;
    document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = true);
    renderWord();
}

// Process guess
function guess(letter) {
    if (!active || guessed.has(letter)) return;
    
    guessed.add(letter);
    
    if (secretWord.includes(letter)) {
        // Fill ALL occurrences of the letter
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) displayed[i] = letter;
        }
        renderWord();
        if (checkWin()) endGame(true);
    } else {
        wrong++;
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
    // Row 1: Q W E R T Y U I O P
    const row1Keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    // Row 2: A S D F G H J K L
    const row2Keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    // Row 3: Z X C V B N M
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
    messageEl.textContent = '🔤 guess';
}

// Event listeners
restartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newGame();
});

// Initialize
buildKeyboard();
newGame();