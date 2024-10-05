
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();  //prevent for reloading by default
   

    const phoneNumber = document.getElementById('phone').value;
    const pinNum = document.getElementById('pin').value;
    console.log(phoneNumber,pinNum);
    

})



