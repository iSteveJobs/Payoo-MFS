/*

// Add Money Button
document
  .getElementById("btn-add-money-features")
  .addEventListener("click", function () {

    // remove cash out page from home page
    document.getElementById("hidden-cashout").classList.add("hidden");
    
    // add cashout page to home page
    document.getElementById("hidden-addmoney").classList.remove("hidden");
  });

// Cash Out Button
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault(); 
    // form er bairer button tai preventDefault() na dileo cholbe
    

    // remove add money page from home page
    document.getElementById("hidden-addmoney").classList.add("hidden");
    


    // add cash out page to home page
    document.getElementById("hidden-cashout").classList.remove("hidden");
  });

// Refresh Button
document.getElementById("btn-refresh").addEventListener("click", function () {
  // remove add money page from home page
  document.getElementById("hidden-addmoney").classList.add("hidden");

  // remove cash out page from home page
  document.getElementById("hidden-cashout").classList.add("hidden");
});

*/

// Add Money Button
document
  .getElementById("btn-add-money-features")
  .addEventListener("click", function () {

    showSection('hidden-addmoney');
  });

// Cash Out Button
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    

    showSection('hidden-cashout');
  });

  // Refresh Button
document.getElementById("btn-refresh").addEventListener("click", function () {
  document.getElementById("hidden-addmoney").classList.add("hidden");
  
  document.getElementById("hidden-cashout").classList.add("hidden");
});