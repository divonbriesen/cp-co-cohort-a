console.log("This script is running in the fizzbuzz page.");

let output = "";

let startNumber = 1;
let endNumber = 100;

output = output + "<ul>";
// for (let i = 0; i < 100; i++)
for (let counter = startNumber; counter <= endNumber; counter = counter + 1) // or counter++
{
  output = output + "<li>";

  if ((counter % 3 == 0) && (counter % 5 == 0)) // same as 15
  {
    output = output + "FizzBuzz";
  } else if (counter % 3 == 0) // it's even 
  {
    output = output + "Fizz";
  } else if (counter % 5 == 0) {
    output = output + "Buzz";
  } else {
    output = output + counter;
  }

  output = output + "</li>";
}

output = output + "</ul>";
document.getElementById("results1").innerHTML = output;
console.log("This script is running in the fizzbuzz page.");

output = "";
output = output + "<ol>";
// for (let i = 0; i < 100; i++)
for (let counter = startNumber; counter <= endNumber; counter = counter + 1) // or counter++
{
  output = output + "<li>";
  let newText = "";

  if (counter % 3 == 0) {
    newText = "Fizz";
  }

  if (counter % 5 == 0) {
    newText = "Buzz";
  }

  if (newText == "") {
    newText = counter;
  }

  output = output + newText + "</li>";
}

output = output + "</ol>";
document.getElementById("results2").innerHTML = output;