function addMember() {
  let name = memberForm.first.value + " " + memberForm.last.value;

  let ul = document.getElementById("members");

  let li = document.createElement("LI");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}
