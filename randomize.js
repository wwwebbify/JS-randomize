//RANDOMIZE returns a random number between 'min' - 'max', but will not return 'not'
function randomize(min, max, not) {
    var loopBreak = 0;
    var loopStop = 100;

    do {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        loopBreak++;
        console.assert(randomNumber !== not, 'randomize duplicate number - ' + loopBreak)
    } while (loopBreak < loopStop && randomNumber === not);

    if (randomNumber !== not) {
        return randomNumber;
    } else {
        console.log('duplicate # ' + loopBreak + ' | min = ' + min + ' | max = ' + max + ' | not =' + not);
        return min
    }
}
