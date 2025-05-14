/*
Common shared Function
function reuse kora sikhci 
Update: 
1>>>> 
function use kore easily input value k constant kora sikhci, go to libraryFunction.js file 

2>>>
text field thake value neoa korci

3>>>
features a to onek option a thake 1.Add Money, Cash Out, Transaction
akhon ami chasci je sudhu add money form dekhabo baki gula bondho korbo, er upay
*/

// 1>>>>>>
function getInputFieldValueById(id) {
  //    const inputValue = document.getElementById(id).value;

  //    return inputValue;

  return parseFloat(document.getElementById(id).value);
}

// 2>>>>
function getTextFieldValueById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// 3>>>>jei id dia hidden kora hobe, sei id deoa lagbe, addEventListner er function er vitore

function showSection(id) {
  // hide all the section
  document.getElementById("hidden-addmoney").classList.add("hidden");
  document.getElementById("hidden-cashout").classList.add("hidden");

  // only show the section(id)

  document.getElementById(id).classList.remove("hidden");
}
