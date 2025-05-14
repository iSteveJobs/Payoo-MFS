document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const enterWithdrawMoney = document.getElementById(
      "enter-withdraw-money"
    ).value;
    const enterPinWithdraw =
      document.getElementById("enter-pin-withdraw").value;
    const availableBalance =
      document.getElementById("available-balance").innerText;

    if (enterPinWithdraw === "5555") {
      const newBalance =
        parseFloat(availableBalance) - parseFloat(enterWithdrawMoney);

      document.getElementById("available-balance").innerText = newBalance;
    } else {
      alert("Wrong Pin! Failed Withdraw.");
    }
  });
