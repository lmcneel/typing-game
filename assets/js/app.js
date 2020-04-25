const text2 = 'Hello world!';
const textEl = document.querySelector('#typing-text');
textEl.textContent = text;
let letterOn = 0; // TODO: Rename this variable
const interval = 1000;
const totalTime = 5;
let remainingTime = totalTime;
let letterCount = 0;
let errors = 0;
let gameOn = true;
const timerEl = document.querySelector('#timer');
timerEl.textContent = `${remainingTime} seconds`;
let timer;
const gameOverModal = $('#game-over-modal');

function triggerTimer() {
    timer = setInterval(function countDown() {
        remainingTime--;
        timerEl.textContent = `${remainingTime} seconds`;
        if (remainingTime <= 0) gameOver();
    }, interval);
}

function gameOver() {
    clearInterval(timer);
    document.querySelector('#score').textContent =
        Math.floor((letterCount / 5 / totalTime) * 60) + ' WPM';
    timer = undefined;
    remainingTime = totalTime;
    gameOn = false;
    gameOverModal.modal('show');
}

function startGame() {
    letterCount = 0;
    letterOn = 0;
    textEl.textContent = text;
    timerEl.textContent = `${remainingTime} seconds`;
    gameOn = true;
}

document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Shift' || !gameOn) return;
    if (!timer) triggerTimer();
    if (remainingTime >= 0) {
        letterCount++;
        console.group('KEY UP');
        if (event.key === text[letterOn]) {
            letterOn++;
            const goodText = `<span class="text-primary border-bottom border-primary">${text.slice(
                0,
                letterOn
            )}</span>`;
            const staticText = text.slice(letterOn);
            textEl.innerHTML = goodText + staticText;
        } else {
            // TODO: Stretch Goal::: ADD AUDITORY CLUE
            errors++;
            const goodText = `<span class="text-primary border-bottom border-primary">${text.slice(
                0,
                letterOn
            )}</span>`;
            const badText = `<span class="text-danger border-bottom border-danger">${text[letterOn]}</span>`;
            const staticText = text.slice(letterOn + 1);
            textEl.innerHTML = goodText + badText + staticText;
        }
        console.groupEnd();
    }
});

gameOverModal.on('hidden.bs.modal', (event) => {
    startGame();
});
