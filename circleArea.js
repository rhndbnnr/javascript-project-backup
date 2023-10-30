let unit = "inches";
let radius = prompt("Enter a radius " + unit);
let circleArea = Math.PI * radius * radius;

let userRoundPreference = prompt("Would you like to round? (y/n)");

if (userRoundPreference === "y") {
  circleArea = circleArea.toFixed();
}

if (userRoundPreference === "y" || userRoundPreference === "Y") {
  circleArea = circleArea.toFixed();
}

alert("The area in " + unit + " is " + circleArea + ".");
