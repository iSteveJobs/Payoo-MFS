/* older version
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const enterAddMoney = document.getElementById("enter-add-money").value;
    const enterPin = document.getElementById("enter-pin").value;
    const availableBalance =
      document.getElementById("available-balance").innerText;

    if (enterPin === "5555") {
      const newBalance =
        parseFloat(availableBalance) + parseFloat(enterAddMoney);

      document.getElementById("available-balance").innerText = newBalance;
    } else {
      alert("Wrong Pin! Failed to Add Money");
    }
  });

  */

  document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const enterAddMoney = getInput('enter-add-money')
    const enterPin = getInput('enter-pin')
    const availableBalance = getText('available-balance')

    if (enterPin === 5555) {
      const newBalance =
        availableBalance + enterAddMoney;

      document.getElementById('available-balance').innerText = newBalance;
    } 
    else {
      alert("Wrong Pin! Failed to Add Money");
    }
  });
