/*  Requirement 1: 
    Given two variables, x and y, swap their values so that x is less than y.
*/

//Define the two variables
let x = 10;
let y = -5;

//Make sure x is greater than y before swapping
if (x > y) {
    //Swap their values
    const temp = x; //Store memory of what x was
    x = y; // Assign x to y
    y = temp; // Assign y to the memory of x
}

//Verify our results! Try changing the x and y values and re-running the code.
console.log(`x is: ${x}, and y is: ${y}`);



/*  Requirement 2: 
    Given three variables, x, y, and z, where x and y are both positive
    numbers. Set z to be a string of each value from 0 to y that is divisible by x.
*/

/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Do we need commas to separate values?
    2. Should we start our string with 0, since 0 is divisible by any positive number?
    3. What should we do if x is greater than y?
    4. Is y inclusive or exclusive?
    5. Can we assume x is an integer?

    Example:
    x = 2
    y = 10
    at the end, z = '0,2,4,6,8,10'

    There are a couple ways to do this one:
    1. Count from 0 through y.
    2. if the current number is divisible by x, write it down

    We could also do:
    1. Start at 0, count by x, until we are > y
    2. write down each value, since it is guaranteed to be divisible by x.

    The second option seems like less work, since we don't need to check for divisibility. Let's code it out.
*/

//x and y were previously defined. Re-assign their values, and declare a new variable, z
x = 3;
y = 45;
let z = '0'; //Initialize z with the base case of '0'.

//1. We already accounted for 0. Start at x, count by x, until we are > y
for (let i = x; i <= y; i += x) {
    //2. write down each value, since it is guaranteed to be divisible by x.
    z += `, ${i}` //Provides a comma separated result. Starting with '0' prevents us from dealing with trailing or leading commas
}

//Verify our results! Try changing the x and y values and re-running the code.
console.log(z);



/*  Requirement 3: 
    Given two variables, x and y, perform the following based on the value of x:
    x = 'A': Set y to the value of x. 
    x = 'B': Set y to 3 times the value of y.
    x = 'C': Set y to be 0.
    x = 'D': Set y to null
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Will x always be A,B,C, or D?
    2. Will y always be a number?

    Example:
    x = 'A'
    y = 10
    at the end, y === 'A';

    x = 'B'
    y = 10
    at the end, y === 30;

    x = 'C'
    y = 10
    at the end, y === 0;

    x = 'D'
    y = 10
    at the end, y === null

    This could be an if/else chain or a switch. Since there are discrete cases for x, let's use a switch:
*/

//x and y were previously defined. Re-assign their values.
x = 'A';
y = 10;

switch (x) {
    //x = 'A': Set y to the value of x. 
    case 'A':
        y = x;
        break; //Don't want to fall through to other cases. Exit out of the switch.

    //x = 'B': Set y to 3 times the value of y.
    case 'B':
        y = y * 3;
        break;

    //x = 'C': Set y to be 0.
    case 'C':
        y = 0;
        break;

    //x = 'D': Set y to null
    case 'D':
        y = null;
        break;

    default:
        //Generally you would put some type of fallback message in a default case
        break;
}

//Verify our results! Try changing the x and y values and re-running the code.
console.log(`x is: ${x}, and y is: ${y}`);



/*  Stretch Requirement: 
    Given four variables, x, y, even, and odd, where x and y are positive numbers
    and even and odd start at 0; count how many numbers are even or odd between x and y.
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Will x and y always be integers?
    2. Are x and y inclusive or exclusive?
    3. Will x always be smaller than y?

    Example:
    x = 1
    y = 10
    even = 0
    odd = 0
    at the end, even === 5 AND odd === 5;

    x = 2
    y = 10
    even = 0
    odd = 0
    at the end, even === 5 AND odd === 4;

    If x is smaller, we can loop from x to y, checking for even. If even, increment even. Otherwise increment odd.
*/

//x and y were previously defined. Re-assign their values.
x = 2;
y = 10;

let even = 0;
let odd = 0;

//Guarantee that x is smaller based on logic from first requirement
if (x > y) {
    const temp = x;
    x = y;
    y = temp;
}

//Loop from x to y
for (let i = x; i <= y; i++) {
    //if even, increment even
    if (i % 2 === 0) {
        even++;
    } else { //Otherwise, increment odd
        odd++;
    }
}

//Verify our results! Try changing the x and y values and re-running the code.
console.log(`${even} even numbers and ${odd} odd numbers from ${x} to ${y}`);