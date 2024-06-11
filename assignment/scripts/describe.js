// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// this is assigning a variable called 'number' to the value of 1, then adds to it using ++ to increment it up to 2. 
// then it checks if the variable is greater or equal to 2, creating a console log saying "yes" if that is true
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// this sets a variable called "name" to the value of 'Dane'
// then checks if the variable is exactly equal to "Mary", console logging "Hi, Mary!" if that is true, otherwise it console logs "How do you do?"
// 
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// funny.
// it sets a variable "secret", then also sets a variable "code" with a value of 123.
// it then checks to see if the code is exactly equal to 123, which would change "secret" to have the value of "super", following with the value of "code" to then be doubled
// it then checks again to see if the value of "code" is larger than 250, again changing the value of "secret" to "duper", following with a console log of the hidden "secret"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

// number-- decrements number, and the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/





//4. We start with three variables -- colorOne is set to 'blue' and colorTwo is set to 'red', and mix is set to true. We check if mix is true 
//-- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';                     //the two variables are swapped. colorOne should be blue and colorTwo should be red
let colorTwo = 'blue';                    // should be let colorOne = 'blue';   let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;  
const time = 4;

if (temp > 39 || time >= 4) {               // the problem lies in the use of the || which means OR. in reality if you are checking to see if two things are happening at once, using the & symbol
  console.log('throw away the food!');      // so it should say   if (temp > 39 && time >= 4)
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {               // this is simple where we are instead checking if the minAge is less than or equal to age when we need to be looking for if the age is greater than or equal to minAge
  console.log('no entry');        // it should say if(age >= minAge) instead of if(minAge <= age)
} else {
  console.log('enter');
}
*/

