# JS Exercise 2
This exercise covers functions, flow control, and variables

## Usage
* Check out the `main` branch for an annotated solution. 
* Check out the `bare-bones` branch for a bare bones solution.
* Copy and paste each requirement into the browser console. Make sure to refresh so that you don't get variable re-assignment errors!

## Exercise Instructions
Your client has requested a series of JavaScript functions they need for their JavaScript applications. Note that this exercise should be completed without using Arrays or Objects.

## Requirements
1. Create a function **_printSequence_** that, given two numbers, returns a string of the values from the lowest number to the highest number.
```
printSequence(3, 8);// returns '3, 4, 5, 6, 7, 8'
printSequence(8, 3);// returns '3, 4, 5, 6, 7, 8'
```

2. Create a function **_calculate_** that, given a string and two numbers, does the following based on the value of the string:
    1. 'add' → add the two numbers and return the result
    2. 'subtract' → subtract the second number from the first and return the result
    3. 'multiply' → multiply the numbers together and return the result
    4. 'divide' → divide the first number by the second and return the result
    5. For everything else, do not return anything.

3. Create a function **_validate_** that takes in 2 strings and a number:  
    1. Return false if either of the strings are undefined or empty (Hint: remember what values are falsey)  
    2. Return false if the number is not undefined but is less than 0.  
    3. For all other cases, return true.


## Stretch Requirements
1. Create a function that, given a number, returns true if it can be reached by the Fibonacci  sequence, else return false.