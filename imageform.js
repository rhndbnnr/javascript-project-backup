function addImage() {
  let imageURL = document.getElementById("imageURL").value;
  let imageElement = document.createElement("img");
  imageElement.src = imageURL;

  let imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = "img";

  imageContainer.appendChild(imageElement);

  return false;
}
