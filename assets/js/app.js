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
        //
    } else {
        // TODO: Indicate to the user that the letter is wrong
        console.log('FAILURE');
    }
    console.groupEnd();
});
