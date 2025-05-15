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

    // enter amount number or not
    if(isNaN(enterWithdrawMoney)){
      alert('Faild ! Not a Number.');
      return;
    }

    if (enterPinWithdraw === 5555) {

      if(enterWithdrawMoney > availableBalance){
         alert('You don not have sufficient amount to withdraw');

         return;
      }
      const newBalance = availableBalance - enterWithdrawMoney;

      document.getElementById("available-balance").innerText = newBalance;

      // add to transaction history>>>start

      const div = document.createElement('div');
      div.innerHTML = `
      <p class = " text-red-600">Cash Out: ${enterWithdrawMoney} TK. Available Balance: ${newBalance}</p>
      
      `;

      const transactionHistoryContainer = document.getElementById('transaction-history-container');

      transactionHistoryContainer.appendChild(div);

      // add to transaction history>>>end
    } 
    else {
      alert("Wrong Pin! Failed Withdraw.");
    }
  });


