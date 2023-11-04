const homework = document.querySelector("p");
homework.addEventListener("click", getMotto);

function getMotto() {
  let quote = (alert = prompt("Please enter your favrotie motto?"));
}

const homework2 = document.querySelector("p");
homework2.addEventListener("click", getCount);

function getCount() {
  let quote = parseFloat(
    prompt("How many times would you like to see your favorite phrase?")
  );
}

function printMotto() {}
