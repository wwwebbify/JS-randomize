# randomize (min = 0 , max = 1 , fixed = 0 , not = NaN , ID = "none set");
<hr/>
## Randomization Script - Parameters - min, max, fixed, not, ID

### min: The Minimum value of your randomization - Default is 0 (number - optional)

### max: The Maximum value you want radomized - Default is 1 (number - optional)

### fixed: Sets the number of decimals to return - Default is 0 (integer - optional)

### not: A number or array range [low, high] that you do NOT want to repeat or select - Default is NaN (number - optional)

### ID: An optional text Identifier, Useful in identifying a specific instance of randomizer - Default is "none set" (string - optional)
<hr/>

This is my randomization JavaScript: 
* Returns a random number between MIN and MAX.
* FIXED sets how many decimal places you want returned.
* You may optionally specify a number to not select using NOT.

Other Features:
* Prevents infinite loops
* Returns an error to the console if an infinite loop has been prevented or if the input is incorrect. 
