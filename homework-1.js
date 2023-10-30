const homework = document.querySelector("p");
homework.addEventListener("click", updateName);

function updateName() {
  let name = prompt("username");
  alert("Hello, '" + name + "'" + " I Graduated");
}
