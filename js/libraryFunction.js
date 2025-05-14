function getInput(id){
    return parseFloat(document.getElementById(id).value);
}

function getText(id){
    return parseFloat(document.getElementById(id).innerText);
}

function showSection(id){
    // hide all the section
    document.getElementById("hidden-addmoney").classList.add("hidden");
    document.getElementById("hidden-cashout").classList.add("hidden");

    // only show the section(id)

    document.getElementById(id).classList.remove("hidden");
}