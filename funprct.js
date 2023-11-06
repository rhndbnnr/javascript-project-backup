const homework = document.querySelector("h1");
homework.addEventListener("click", getMotto);

alert("Good day to you");

function getMotto() {
  let alert = prompt("What is your favorite motto?");
}

const homework2 = document.querySelector("h1");
homework2.addEventListener("click", getCount);

function getCount() {
  let answer = parseFloat(
    prompt("How many times would you like to see your favorite motto?")
  );
}

function printMotto() {}
