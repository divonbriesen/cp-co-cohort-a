/*
    Welcome to the JS Functions and Objects exercise! Follow the instructions for each requirement.
    To check your answers, open the index.html file in your browser. Follow the instructions
    there to see your results. The training staff may use additional test cases when grading
    your work.

    Write your answers in the space under each question.
    
    Don't forget to save this file and refresh your browser before running the tests again!
*/

/*
The main purpose of this exercise is to demonstrate how to interact with objects and arrays. 

Imagine that you've been tasked with user management of a training program. Your job resonsibilities
include verifying eligibility of individuals, as well as filtering out completed vs active students.
*/
////////////////////////////////////
//SECTION 1: Creating a Data Model//
////////////////////////////////////
/* 
Before you can begin writing any code to verify eligibility or filter students based on active status,
you need to understand the data model (what does the data look like?).

An individual applicant to the program has a lot of data that must be kept up to date. This data includes
name
age (Realistically, this would be date of birth, but we'll keep it simple for now)
state
city
zip code
program status (one of: ['Applied', 'Accepted', 'Active', 'Completed', 'Dismissed', 'Rejected'])

Because all of this data is relevant to a single applicant, we want to use an object to group the data.
*/

//1.    Create an object named "applicant1"


//2.    Add a "name" field to applicant1, and assign it a string value of your choosing


//3.    Add an "age" field to applicant1, and assign it a number between 0 and 122


//4.    Add a "programStatus" field to applicant1, and assign it a string value of one of the following:
//      ['Applied', 'Accepted', 'Active', 'Completed', 'Dismissed', 'Rejected']


/* 
state, city, and zip code are all part of an address. It's extremely common for objects to contain other
objects. Let's do that with address
*/

//5.    Add an "address" field to applicant1, and assign it to an object with the following value:
/*
{
    state: 'MD',
    city: 'Baltimore',
    zipCode: 21201
}
*/

////////////////////////////////////////////
//SECTION 2: Accessing Data from an Object//
////////////////////////////////////////////

//6.    Uncomment the line that properly accesses applicant1's name
// const applicant1NameA = applicant1.name;
// const applicant1NameB = 'Kjirsten';
// const applicant1NameC = applicant1.getName();


//7.    Uncomment the line that properly accesses applicant1's age
//const applicant1AgeA = applicant1.getAge();
//const applicant1AgeB = applicant1['age'];
//const applicant1AgeC = applicant1.Age;


//8.    Uncomment the line that properly accesses applicant1's city
//const applicant1CityA = applicant1.city;
//const applicant1CityB = applicant1.address;
//const applicant1CityC = applicant1.address.city;

/////////////////////////////////////////////////////
//SECTION 3: Using object properties in expressions//
/////////////////////////////////////////////////////

//9.    Replace the placeholder string with an expression that returns true if
//      applicant1's age is greater than or equal to 18.
let isApplicant1Eligible = 'placeholder';

//10.   Using the stubbed out function, "isEligibleApplicant", write code that returns
//      whether or not the applicant at least 18 years old.
const isEligibleApplicant = (applicant) => {
    return false; //Change this logic!
}

//11.   Replace the placeholder string  with an expression that returns true if
//      applicant1's programStatus is "Active".
let isApplicant1Active = 'placeholder';

//12.   Using the stubbed out function, "isActiveApplicant", write code that returns
//      whether or not the applicant is active.
const isActiveApplicant = (applicant) => {
    return false;
}

//////////////////////////////////////
//SECTION 4: Interacting with Arrays//
//////////////////////////////////////

/*
At this point, you have demonstrated how to access and interact with an individual object.
The next series of questions involves interacting with arrays.  
*/

//13.   Given the following array, write code to access the first item
const vegetables = ['bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrots', 'cauliflower', 'onion'];
//TODO: Use bracket notation to assign the value of the first item in vegetables to firstVegetable .
const firstVegetable = vegetables; //This line needs to change

//14.   Add 'cucumber' to vegetables using the .push array method. 


//15.   Make a copy of an array using a for loop and the .push method. The loop has been created for you.
const copyArray = (array) => {
    const arrayCopy = [];
    for (const item of array) {
        //TODO: push the current item into the array.
    }
    return arrayCopy;
}
/*
NOTE:
A for/of loop syntax might be new to you. The above loop does the same thing as this one:
for(let i = 0; i < array.length; i++) {
    const item = array[i];
    //push the current item into the array.
}

The difference is that a for/of loop implicitly creates a variable to store a single item in the array,
instead of making you access it via index. With a for/of loop, you don't even have access to the index.
*/

/*
It's extremely common to loop over an array and collect some data from each item.
This is known as an accumulation, and it usually uses an accumulator.
If you've ever counted something using tally marks, you've done this manually!

In JS, we follow the same process. First, create a variable to hold the running total.
Then, loop over the array. For each item, update the running total.
At the end of the array, check the variable that stored the running total. 
*/

//16.   A baseball coach keeps track of runs scored in each inning. They want a function
//      to calculate the total runs scored. Fill out runsScored with the correct logic!
const runs = [0, 1, 4]; //This is just an example array that you can use to test your runsScored function
const runsScored = (innings) => {
    //TODO: instantiate a variable to hold the total runs

    //TODO: Loop over the innings
    //TODO: inside of the loop, add the current innings' run total to the totalRuns variable

    //TODO: Don't forget to return the totalRuns!
}

///////////////////////////////////////////
//SECTION 5: Combining arrays and objects//
///////////////////////////////////////////

/*
It's time to look back to the use cases from the original problem. 
We needed to find eligible students and also find active students. You have all
the necessary tools to solve these problems:
Define a variable to hold an accumulation
Loop over an array to get an object
Use an object's property in a conditional
Push an object to an array
*/

//17.   Given an array of applicants, return an array of eligible applicants.
//      Remember that you already wrote logic to determine if a single applicant
//      is eligible in the isEligibleApplicant function.
const filterApplicantsByEligibility = (applicants) => {
    return []; //TODO: fill in the correct logic for this function
}

//18.   Given an array of applicants, return an array of active students. Remember
//      that you already wrote the logic for a single applicant in the 
//      isActiveApplicant function.
const filterApplicantsByProgramStatus = (applicants) => {
    return []; //TODO: fill in the correct logic for this function
}