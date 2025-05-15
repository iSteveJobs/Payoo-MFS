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

    // enter amount number or not
    if(isNaN(enterAddMoney)){
      alert('Faild ! Not a Number.');
      return;
    }

    if (enterPin === 5555) {
      const newBalance =
        availableBalance + enterAddMoney;

      document.getElementById('available-balance').innerText = newBalance;

      // add to transaction history>>>start

      const p = document.createElement('p');

      p.classList.add('text-green-600');

      p.innerText = `Add Money: ${enterAddMoney} Taka, Available Balance: ${newBalance}`;
      // ${er vitor je kono variable dile tar value paoa jabe}

      const transactionHistoryContainer = document.getElementById('transaction-history-container');

      transactionHistoryContainer.appendChild(p);
      // add to transaction history>>>end
    } 
    else {
      alert("Wrong Pin! Failed to Add Money");
    }
  });
