function changeColor() {
  let colors = ["pink", "turquoise", "yellow", "teal"];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    "The random number is: " +
      random +
      ", the random color is: " +
      colors[random]
  );
  document.body.style.backgroundColor = colors[random];
}
