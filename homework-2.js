const homework = document.querySelector("p");
homework.addEventListener("click", getMotto);

function getMotto() {
  return prompt("Please enter your favorite motto?");
}

function getCount() {
  let count = prompt(
    "How many times would you like to see your favorite motto?"
  );

  return parseFloat(count);
}

function printMotto(motto, count) {
  for (let i = 0; i < count; i++) {
    console.log(motto);
  }
}
let motto = getMotto();
let count = getCount();
printMotto(motto, count);
