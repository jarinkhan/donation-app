
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();  //prevent for reloading by default
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone').value;
    console.log(phoneNumber);

})



