# randomize (min = 0 , max = 1 , not = NaN , identifier = "none set");
<hr/>
## Randomization Script - Parameters - min, max, not - [low,high], ID

### min: The Minimum value of your randomization - Default is 0 (number - optional)

### max: The Maximum value you want radomized - Default is 1 (number - optional)

### not: A number or array range [low, high] that you do NOT want to repeat or select - Default is NaN (number - optional)

### identifier: An optional text Identifier, Useful in identifying a specific instance of randomizer - Default is "none set" (string - optional)

### return: A random integer between min and max, excluding not
<hr/>

This randomization script: 
* Returns a random int between MIN and MAX.
* FIXED sets how many decimal places you want returned.
* You may optionally specify a number or range to not select using NOT.

Other Features:
* Prevents infinite loops
* Returns an warning to the console if an infinite loop has been prevented or an error if the input is incorrect. 


###### Usage:

randomize(0, 100, [25,75], 'Usage Example');

returns - An integer within the 0 < 25 ! 75 > 100 range
