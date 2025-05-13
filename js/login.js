

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-number').value;

    const inputPin = document.getElementById('input-pin').value;
    
    if(inputNumber === '5' && inputPin === '5555'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('phone number or pin not matched')
    }
})