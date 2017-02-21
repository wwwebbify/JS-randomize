/*
* This randomize function was originally created by David Sutherland.
* You may use or modify it freely as needed. Just notify me in some way, so I can tract how useful it is (star it, watch it, fork it... whatever works for you!)
*/

//RANDOMIZE returns a random number between 'min' - 'max', but will not return 'not'.
function randomize(min = 0, max = 1, fixed = 0, not = NaN, identifier = 'none set') {
    var loopBreak = 0;
    var loopStop = 100;
    //throw errors if input is no good
    console.assert(min <= max, 'Please place the greater value in the "max" perameter | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    console.assert(typeof not === 'number', '3rd Parameter - "not" - must be a number | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    console.assert(typeof identifier === 'string', '4th Parameter - "identifier" -  must be a string | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    do {
        //Pick a number
        var randomNumber = Math.random() * (max - min) + min;
        if (randomNumber>max){ 
            console.log(randomNumber);
            
            randomNumber=max;};
        loopBreak++;
    } while (loopBreak < loopStop && randomNumber === not);
    //write error if randomNumber still === not
    console.assert(randomNumber !== not, 'Randomized number equals "not" - randomize function | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    if (randomNumber !== not) {
        return Number(randomNumber.toFixed(fixed));
    } else {
        //Return error if Infinite loop has been prevented
        console.log('Randomization Loop Ended on attempt # ' + loopBreak + ' | min = ' + min + ' | max = ' + max + ' | not =' + not);
        return min
    }
}
