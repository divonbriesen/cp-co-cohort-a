/*  Requirement 1:
    Create a function printSequence that, given two numbers, returns a string of the values from the lowest number to the highest number. 
        printSequence(3, 8) → '3, 4, 5, 6, 7, 8'
        printSequence(8, 3) → '3, 4, 5, 6, 7, 8' 
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Is it safe to assume that the two numbers are integers?

    Steps
    1. if the first number is greater than the second number, swap them.
    2. Count from smaller to larger number
    3. Write down the number plus a comma and space.
*/

const printSequence = (x, y) => {
    //if the first number is greater than the second number, swap them.
    if(x > y) {
        const temp = x;
        x = y;
        y = temp;
    }

    //Now we don't have to worry about trailing or leading commas
    let output = `${x}`; 

    //Count from smaller to larger number. We already wrote down x, so start at x+1
    for(let i = x + 1; i <= y; i++) {
        //add our values, including the comma space for separation.
        output += `, ${i}`;
    }

    return output;
}

/*
Create a function calculate that, given a string and two numbers, does the following based on the value of the string:
    'add' → add the two numbers and return the result
    'subtract' → subtract the second number from the first and return the result
    'multiply' → multiply the numbers together and return the result
    'divide' → divide the first number by the second and return the result
    For everything else, do not return anything.
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Is it safe to assume that the two numbers are integers?

    Steps
    1. Chain of if/else or just a switch
*/

const calculate = (operand, x, y) => {
    switch(operand) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
    }
}

/*
Create a function validate that takes in 2 strings and a number
    Return false if either of the strings are undefined or empty (Hint: remember what values are falsey)
    Return false if the number is not undefined but is less than 0.
    For all other cases, return true.
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Should a null value for either string param also return false?

    Steps
    1. Check each case individually, returning the correct boolean
*/

const validate = (string1, string2, num) => {

    //Checked with the client to ensure that a null string should return false as well.
    //!string1 returns true if string 1 is any falsey value.
    if(!string1 || !string2) {
        return false;
    }

    if(num !== undefined && num < 0) {
        return false;
    }

    return true;
}

/*
Create a function that, given a number, returns true if it can be reached
by the Fibonacci  sequence, else return false.
*/
/*
PLANNING
    Questions that we should clarify with the client (training staff):
    1. Can we assume the number is within safe integer limits for JS?

    Steps
    1. Count through the fibonacci sequence until we equal or pass the number
        note: Fibonacci sequence is defined as current = previous + 2nd previous, starting at 1,1
*/
const isFibonacci = (num) => {
    //Initialize our base cases
    let previous = 1;
    let current = 1;

    //Loop until we are at or beyond the given number
    while(current < num) {
        const memory = current; //Need the temp variable
        current = previous + current; //Increment current
        previous = memory; //Increment previous
    }

    //At the end, current will either be equal to or beyond num. Returns true if they are equal.
    return num === current;
}