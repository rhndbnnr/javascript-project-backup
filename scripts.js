// Class One

// Variables and Values
// a variable is a memory location used to hold data
// - a string variable is text- more to add later
// -You can declare multiple variables on one line if they are separated by a comma

// Keywords for variables
// - var = functional block scope/ are able to reassign values
// - let = block scope (mainly text)/ are able to reassign values
// - const = cannot reassign values

// declaring a variable in javascript

// var x; // declaration
// x = 10; //assignment
// var y = 30; //initialization

// console.log(y);

// let x = 10; //example using let follows to line 26
// var y = 20;
// console.log(x);

// if ((x = 10)) {
//   let n = 20;
//   console.log(n); //accessed inside of the block statement
// }
// console.log(n); // unable to access outside of the statement

// function myFunction() {
//   // can access var inside the function block but not outside (example to line 36)
//   var x = 10;

//   if ((n = 20)) {
//     x = 10;
//   }
// }

// x = 10; // browser wont bark at ya but it will make it global instead

// Global Scope Variable

// const countries = ["USA", "CANADA"]; //cant reassign a new value to a const like we can w/ var and let

// function myFunc() {
//   countries(0);
// } // can access const anywhere within your code because the values do not change

// const myName = "Rhonda"; // Try a const like this & see how it goes in the output
// myName = "Chenoa";
// console.log(myName);

// let myName = "Rhonda"; // String Type
// let myAge = 22; //Number Type- if 22 is in quotes it will be a string type
// let isOld = true; //Boolean Type = true or false
// let bar; //Undefined = just declaring a variable

// Differences between String and Number Types
// with numbers you can perform math however you cant with strings

// let a = 10;
// let b = "10"; // Deleting the quotes and just having the number, it will perform the math
// let c = a + b;

// console.log(c);

// let d = "Rhonda"; // This is how the + operator is used with text
// let e = "Bonner";
// let f = d + e;

// console.log(f);

// Arithmatic Operators__ + - * / %

// let a = 10;
// let b = 3;
// let c = a % b;
// a++; // increment operator will increase the total by 1 using a++;
// //decrement operator will decrease by 1 by using a--;
// console.log(c);

// var x = 5,
//   y = 10,
//   z = 15;
// result = x + y + z; //declaring multiple variables on one line

// console.log(result);*/

// Assignment Operators

// var x = 5,
//   y = 10,
//   z = 15,
//   result = x + y + z;

// x += 5; // equivalent to saying x = x + 5
// x -= 2; // equivalent to saying x = x - 2

// console.log(x);

// Comparison Operators

// var a = 5,
//   b = 10,
//   c = "5";
// var x = a;
// var result = a === c; // == stands for loose equality-- three === means strict equality

// var result = a != b; //inequality !=

// var result = a < b; // can also use greater than or equal to >= and all the other combos with greater than and less than

// var result = "Success!!";

// if (a < b) {
//   console.log(result);
// } else {
//   console.log("A is not greater than B");
// }

// console.log(result);

// Logical Operators - and && ... or ||... ! knot (forces a false result if true. Changes the outcome)

// var a = 5,
//   b = 10,
//   c = "5";
// var x = a;

// var result = a < b || a == b;

// console.log(result);*/

// Class 2

// Parsefloat

// let myAge = parseFloat(prompt("Enter your age"));
// let nyName = prompt("Enter your name");
// alert("Hello " + myName + ", you are" + myAge + " years old.");*/

// Conditions

// if statement

// let a = 10,
//   b = 20,
//   c = 5;

// if (a > b) {
//   console.log("thruthy");
// } else {
//   console.log("falsy");
// }

// testing multiple conditions

// let a = 10,
//   b = 20,
//   c = 5;

// if (a > b) {
//   console.log("truthy");
// } else if (a > c) {
//   console, log("truthy in else if statement");
// } else {
//   console.log("falsy");
// }

// Switch Statement

// let grade = "A";

// switch (grade) {
//   case "A":
//     console.log("Grade A");
//     break; //put in a break statement when you only want the let var to show.
//   case "B":
//     console.log("Grade B");
//   default:
//     console.log("default"); //default will always print if no other cases match expression
// }

// Math Object Methods

// let random = Math.random() * 5; //this function allows you to choose a random number
// let round = Math.floor(random); //round the number/ always round up use math.ceil
// let PI = Math.PI; //generates PI every time
// console.log(random);
// console.log(round);
// console.log(PI);

// Math Objects in Use

// let radius = 5;
// let area = Math.PI * radius * radius;
// console.log("The area is " + area);
// document.getElementById("myCircles").innerHTML = area; //For HTML file-- remove the console log

// Object datatypes- more structural--to create new instances

// Arrays- not datatypes on their own- used to store a list of items
// -0 based indexes meaning in order they start with 0 in the list
// There are multidimensional arrays as well

// let colors = ["green", "blue", "red"];
// console.log(colors[1]); //accessing blue in the list

// Longer sets

// let colors = ["green", "blue", "red", "yellow", "purple"];
// console.log(colors[colors.length - 1]); //displays purple

// let colors = ["green", "blue", "red"];
// let person = {
//   name: "Rhonda", //property accessed via name- whatever is assigned to it
//   age: 23,
// };
// console.log(person.name); //object uses .notation to access
// console.log(colors[0]); // use index number to access

// Loops

// var i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++; // the loop will cont until it is a false
// }

// /*if you did not have a number in the while statement, it would be come an infinite loop.
// These need to be avoided because they will crash your website and server--using less than instead of > can avoid it
// the loop will stop at some point*/

// var y = 1;

// do {
//   console.log(y);
//   y++;
// } while (y > 5); // will only run the code once

// For loop

// var i = 1;

// for (var idx = 1; idx <= 5; idx++) {
//   //idx used to intialize a counter
//   console.log("For Loop: " + idx);
// }

//For Loop in Action

// let colors = ["green", "blue", "red"];
// let person = {
//   name: "Rhonda",
//   age: 22,
// };
// for (var idx = 0; idx < colors.length; idx++) {
//   console.log(colors[idx]);
// } //for loop

// for (let color of colors) {
//   console.log(color);
// } //for of loop

// for (let prop in person) {
//   console.log(prop + " = " + person[prop]); //prop variable represents the key
// }// for end loop

//Functions - used to produce an action within the code

// let colors = ["green", "blue", "red"];
// let sports = ["basketball", "baseball", "soccer"];

// function writeSum(num1, num2) {
//   // function needs a custom name--- (num1, num 2) is peramitter
//   // console.log(num1 + num2); //pulling the console and doing a retur sum
//   let sum = num1 + num2;
//   return sum;
// } // this is a function declaration

// let mySum = writeSum(20, 30);
// writeSum(5, 10); //Initializing the function--creating the argument
// console.log(mySum); //printing return out to console

// function displayArray(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }

// displayArray(colors);
// displayArray(sports);
