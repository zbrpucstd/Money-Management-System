document.getElementById("deposit-btn").addEventListener("click", function () {
  depositField = document.getElementById("deposit-field");
  depositAmountString = depositField.value;
  depositAmount = parseFloat(depositAmountString);

  prevDepositAmount = document.getElementById("prev-deposit-amount");
  prevDepositString = prevDepositAmount.innerText;
  prevDeposit = parseFloat(prevDepositString);
  totalDeposit = prevDeposit + depositAmount;

  if (totalDeposit >= 0) {
    document.getElementById("prev-deposit-amount").innerText = totalDeposit;
    prevBalAmountString = document.getElementById(
      "prev-balance-amount"
    ).innerText;
    prevBalAmount = parseFloat(prevBalAmountString);

    totalBalance = prevBalAmount + depositAmount;
    document.getElementById("prev-balance-amount").innerText = totalBalance;
    depositField.value = " ";
  } else {
    alert("Invalid Input");
  }
});
