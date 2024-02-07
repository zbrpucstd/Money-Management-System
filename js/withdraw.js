document.getElementById("withdraw-btn").addEventListener("click", function () {
  withdrawField = document.getElementById("withdraw-field");
  withdrawFieldString = withdrawField.value;
  withdrawFieldValue = parseFloat(withdrawFieldString);

  prevWithdrawString = document.getElementById(
    "prev-withdraw-amount"
  ).innerText;
  prevWithdraw = parseFloat(prevWithdrawString);

  totalWithdraw = withdrawFieldValue + prevWithdraw;

  balanceString = document.getElementById("prev-balance-amount").innerText;
  balance = parseFloat(balanceString);

  if (totalWithdraw <= balance && totalWithdraw > 0) {
    document.getElementById("prev-withdraw-amount").innerText = totalWithdraw;

    newBalance = balance - withdrawFieldValue;
    document.getElementById("prev-balance-amount").innerText = newBalance;

    withdrawField.value = " ";
  } else {
    alert("Invalid Input");
  }
});
