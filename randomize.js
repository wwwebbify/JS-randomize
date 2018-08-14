/*
* This randomize function was originally created by David Sutherland.
* You may use or modify it freely as needed. Just notify me in some way, so I can tract how useful it is (star it, watch it, fork it... whatever works for you!)
*/

/*
    @public
    @function randomize
    @description - Returns a random integer between 'min' - 'max', but will not return 'not'
    @param {number} [min] - The minimum number to return
    @param {number} [max] - The maximum number to return
    @param {number or [low, high]} [not] - The number or array of numbers [low, high] to NOT return (default - NaN)
    @param {string} - An optional Identifyer used for error tracking, useful to narrow down a problematic function call (default - 'none set')
    @return {int}
*/
function randomize(min = 0, max = 1, not = [null, null], identifier = 'none set') {

not = typeof not === 'number' ? [not, not] : not;

var loopBreak = 0;
var loopStop = (not[1]-not[0])*10;
var randomNumber;
var error = false;

//throw errors if input is no good
    
if(min > max){error = '"min" should not be greater than "max"';}
if (Array.isArray(not)) {
 if(typeof not[0] !== 'number' || typeof not[1] !== 'number'){
  error = 'If 3rd Parameter is an array - "not[low, high]" - both must be a number';}
 } else {
  if(typeof not !== 'number'){error = '3rd Parameter - "not" - must be a number';}
 }//END IF
if(typeof identifier !== 'string'){
 error = '4th Parameter - "identifier" -  must be a string';}
if(error !== false){
 error += '\n ---- \n"min" = ' + min + '\n"max" = ' + max + '\n"not" = [(low)' + not[0] + ',  (high)' + not[1] + ']\n"identifier" = ' + identifier + '\n';

 throw error;
}

    //Pick a number
do {
 randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
 loopBreak++;
} while (loopBreak < loopStop && (randomNumber >= not[0] && randomNumber <= not[1]))//END DO

    //Return error if Infinite loop has been prevented
 if (loopBreak >= loopStop) {
  console.warn('Min returned from randomize \nidentifier = \'' + identifier + '\'\nattempt # ' + loopBreak + '\nmin = ' + min + '\nmax = ' + max + '\nnot =' + not);

  return min;
 }//END IF

 return randomNumber;
}
