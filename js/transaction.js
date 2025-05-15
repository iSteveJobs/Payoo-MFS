document
  .getElementById("btn-transaction")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSection('hidden-transaction');

    console.log("Transaction Button Clicked");
  });
