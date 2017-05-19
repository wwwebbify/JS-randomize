/*
* This randomize function was originally created by David Sutherland.
* You may use or modify it freely as needed. Just notify me in some way, so I can tract how useful it is (star it, watch it, fork it... whatever works for you!)
*/

//RANDOMIZE returns a random integer between 'min' - 'max', but will not return 'not'.
function randomize(min = 0, max = 1, not = NaN, identifier = 'none set') {
    var loopBreak = 0;
    var loopStop = 100;
    //throw errors if input is no good
    console.assert(min <= max, 'Please place the greater value in the "max" perameter | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    if (typeof not === "object") {
        console.assert(typeof not[0] === 'number' || typeof not[1], 'If 3rd Parameter is an array - "not[low, high]" - must both be a number | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    } else {
        console.assert(typeof not === 'number', '3rd Parameter - "not" - must be a number | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)
    }//END IF
    console.assert(typeof identifier === 'string', '4th Parameter - "identifier" -  must be a string | min = ' + min + ' | max = ' + max + ' | not =' + not + ' | identifier = ' + identifier)

    //Pick a number
    do {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        loopBreak++;
    } while (
        loopBreak < loopStop &&
        (typeof not === "object" ? randomNumber >= not[0] && randomNumber <= not[1] : randomNumber === not)
    )//END DO

    //Return error if Infinite loop has been prevented
    if (loopBreak === 100) {
        console.warn('Min returned - Randomization Loop Ended on attempt # ' + loopBreak + ' | min = ' + min + ' | max = ' + max + ' | not =' + not);
        return min
    }//END IF

    return randomNumber;
}
