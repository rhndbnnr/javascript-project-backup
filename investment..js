function submitData() {
  let balance = parseFloat(document.getElementById("balance").value);
  let annualRate = parseFloat(document.getElementById("annualRate").value);
  let months = parseInt(document.getElementById("months").value);

  if (
    isNaN(balance) ||
    isNaN(annualRate) ||
    isNaN(months) ||
    balance < 0 ||
    annualRate < 0 ||
    months < 0
  ) {
    updateDOM("Please enter valid date for the fields?", "red");
    return;
  }

  computeFutureValue(balance, annualRate, months);
}

function updateDOM(value, color) {
  let resultElement = document.getElementById("result");
  let messageDiv = document.createElement("div");

  messageDiv.textContent = value;
  messageDiv.style.color = color;
  resultElement.innerHTML = "";

  resultElement.appendChild(messageDiv);
}

function computeFutureValue(balance, annualRate, months) {
  let monthlyRate = annualRate / 100 / 12;

  for (let i = 0; i < months; i++) {
    balance += balance * monthlyRate;
  }

  updateDOM("Future Value: $" + balance.toFixed(2), "green");
  return;
}
