

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const enterNumber = document.getElementById('enter-number').value;
    const enterPin = document.getElementById('enter-pin').value;

    if(enterNumber === '55' && enterPin === '5555'){
        console.log('Login Successful');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong Number or Pin, Try again!');
    }
})