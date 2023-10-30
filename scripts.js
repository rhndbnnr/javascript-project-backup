//Class One//

//Variables and Values
/* a variable is a memory location used to hold data
- a string variable is text- more to add later
-You can declare multiple variables on one line if they are separated by a comma

Keywords for variables
- var = functional block scope/ are able to reassign values
- let = block scope (mainly text)/ are able to reassign values
- const = cannot reassign values
*/

//declaring a variable in javascript

/*var x; // declaration
x = 10; //assignment
var y = 30; //initialization

console.log(y);

let x = 10; //example using let follows to line 26
var y = 20;
console.log(x);

if ((x = 10)) {
  let n = 20;
  console.log(n); //accessed inside of the block statement
}
console.log(n); // unable to access outside of the statement

function myFunction() {
  // can access var inside the function block but not outside (example to line 36)
  var x = 10;

  if ((n = 20)) {
    x = 10;
  }
}

x = 10; // browser wont bark at ya but it will make it global instead

//Global Scope Variable

const countries = ["USA", "CANADA"]; //cant reassign a new value to a const like we can w/ var and let

function myFunc() {
  countries(0);
} // can access const anywhere within your code because the values do not change */

/*const myName = "Rhonda"; // Try a const like this & see how it goes in the output
myName = "Chenoa";
console.log(myName);*/

/*let myName = "Rhonda"; // String Type
let myAge = 22; //Number Type- if 22 is in quotes it will be a string type
let isOld = true; //Boolean Type = true or false
let bar; //Undefined = just declaring a variable

//Differences between String and Number Types
//with numbers you can perform math however you cant with strings

let a = 10;
let b = "10"; // Deleting the quotes and just having the number, it will perform the math
let c = a + b;

console.log(c);

let d = "Rhonda"; // This is how the + operator is used with text
let e = "Bonner";
let f = d + e;

console.log(f);*/

/*Arithmatic Operators__ + - * / %

let a = 10;
let b = 3;
let c = a % b;
a++; // increment operator will increase the total by 1 using a++;
//decrement operator will decrease by 1 by using a--;
console.log(c);

var x = 5,
  y = 10,
  z = 15;
result = x + y + z; //declaring multiple variables on one line

console.log(result);*/

/*Assignment Operators

var x = 5,
  y = 10,
  z = 15,
  result = x + y + z;

x += 5; // equivalent to saying x = x + 5
x -= 2; // equivalent to saying x = x - 2

console.log(x);*/

/* Comparison Operators

var a = 5,
  b = 10,
  c = "5";
var x = a;
var result = a === c; // == stands for loose equality-- three === means strict equality

var result = a != b; //inequality !=

var result = a < b; // can also use greater than or equal to >= and all the other combos with greater than and less than

var result = "Success!!";

if (a < b) {
  console.log(result);
} else {
  console.log("A is not greater than B");
}

console.log(result); */

//Logical Operators - and && ... or ||... ! knot (forces a false result if true. Changes the outcome)

var a = 5,
  b = 10,
  c = "5";
var x = a;

var result = a < b || a == b;

console.log(result);
