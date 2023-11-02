const homework = document.querySelector("p");
homework.addEventListener("click", getMotto);

function getMotto() {
  alert("Good Day to You!");
  let quote = prompt("Please enter your favorite phrase?");
}

const homework2 = document.querySelector("p");
homework2.addEventListener("click", getCount);

function getCount() {
  let phrase = parseFloat(
    prompt("How many times would you like to see your favorite phrase?")
  );
  let quote = prompt(phrase);
}
