//Variables and Values
/* a variable is a memory location used to hold data
- a string variable is text- more to add later

Keywords for variables
- var = functional block scope
- let = block scope (mainly text)
*/

//declaring a variable in javascript

/*var x; // declaration
x = 10; //assignment
var y = 30; //initialization

console.log(y); */

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
    x = 20;
  }
}

x = 10; // browser wont bark at ya but it will make it global instead
