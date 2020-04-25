// BUG: Shift key causes failure....
const text2 = 'Hello world!';
const textEl = document.querySelector('#typing-text');
textEl.textContent = text;
let onLetter = 0; // TODO: Rename this variable

document.body.addEventListener('keyup', (event) => {
    console.group('KEY UP');
    console.log('EVENT KEY', event.key);
    console.log('TEXT LETTER', text[onLetter]);
    if (event.key === text[onLetter]) {
        console.log('SUCCESS');
        onLetter++;
        // TODO: Progress the visual letter cue
        // Change letter to blue
        // match the border
        // Change the text from the 1st letter to the current onLetter
        // ADDING HTML so I need to use the innerHTML function
        // slice(0, onLetter) -> Should be the part that needs to wrapped
        // slice(onLetter) -> this should the part that shouldn't be wrapped
        const goodText = `<span class="text-primary border-bottom border-primary">${text.slice(
            0,
            onLetter
        )}</span>`;
        const staticText = text.slice(onLetter);
        textEl.innerHTML = goodText + staticText;
    } else {
        // TODO: Indicate to the user that the letter is wrong
        // TODO: Stretch Goal::: ADD AUDITORY CLUE
        // change letter to red
        // match the border
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
});
