/* older version
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

  */
  document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const enterWithdrawMoney = getInput('enter-withdraw-money');
    const enterPinWithdraw = getInput('enter-pin-withdraw');
    const availableBalance = getText('available-balance');

    if (enterPinWithdraw === 5555) {
      const newBalance = availableBalance - enterWithdrawMoney;

      document.getElementById("available-balance").innerText = newBalance;
    } 
    else {
      alert("Wrong Pin! Failed Withdraw.");
    }
  });


