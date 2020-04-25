// BUG: Shift key causes failure....
const text2 = 'Hello world!';
const textEl = document.querySelector('#typing-text');
textEl.textContent = text;
let onLetter = 0; // TODO: Rename this variable
const interval = 1000;
const totalTime = 5;
let remainingTime = totalTime;
let letterCount = 0;
const timerEl = document.querySelector('#timer');
timerEl.textContent = `${remainingTime} seconds`;
let timer;
// 1 second = 1000 ms ->
// 30 seconds * 1000 ms = 30000 ms
// Keep count
// Set a timer

// formula for WPM = typedCharacters/5/Time -> 30 second

function triggerTimer() {
    console.log('TRIGGER TIMER');
    timer = setInterval(function countDown() {
        remainingTime--;
        timerEl.textContent = `${remainingTime} seconds`;
        if (remainingTime <= 0) gameOver();
    }, interval);
}

function gameOver() {
    clearInterval(timer);
    timer = undefined;
    remainingTime = totalTime;
    console.log('GAME OVER');
}

document.body.addEventListener('keyup', (event) => {
    if (!timer) triggerTimer();
    if (remainingTime >= 0) {
        letterCount++;
        console.group('KEY UP');
        console.log('EVENT KEY', event.key);
        console.log('TEXT LETTER', text[onLetter]);
        if (event.key === text[onLetter]) {
            console.log('SUCCESS');
            onLetter++;
            const goodText = `<span class="text-primary border-bottom border-primary">${text.slice(
                0,
                onLetter
            )}</span>`;
            const staticText = text.slice(onLetter);
            textEl.innerHTML = goodText + staticText;
        } else {
            // TODO: Stretch Goal::: ADD AUDITORY CLUE
            console.log('FAILURE');
            const goodText = `<span class="text-primary border-bottom border-primary">${text.slice(
                0,
                onLetter
            )}</span>`;
            const badText = `<span class="text-danger border-bottom border-danger">${text[onLetter]}</span>`;
            const staticText = text.slice(onLetter + 1);
            textEl.innerHTML = goodText + badText + staticText;
        }
        console.groupEnd();
    }
});
