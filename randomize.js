//RANDOMIZE returns a random integer between 'min' - 'max', but will not return 'not'.
function randomize(min, max, not = NaN, identifier = 'none set') {
    var loopBreak = 0;
    var loopStop = 100;
    //throw errors if input is no good
    console.assert(min<max, 'Please place the greater value in the "max" perameter')
    console.assert(typeof not === 'number', '3rd Parameter - "not" - must be a number')
    console.assert(typeof identifier === 'string', '4th Parameter - "identifier" -  must be a string')
    do {
        //Pick a number
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        loopBreak++;
    } while (loopBreak < loopStop && randomNumber === not);
        //write error if randomNumber still === not
        console.assert(randomNumber !== not, 'Randomized number equals "not" - randomize function - identifier = ' + identifier)
    if (randomNumber !== not) {
        return randomNumber;
    } else {
        //Return error if Infinite loop has been prevented
        console.log('Randomization Loop Ended on attempt # ' + loopBreak + ' | min = ' + min + ' | max = ' + max + ' | not =' + not);
        return min
    }
}
