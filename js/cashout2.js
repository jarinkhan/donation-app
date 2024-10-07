// using function


document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault()

    const cashOut = getInputFieldValueById('input-cash-out');
    
    const pinNumber = document.getElementById('cash-pin-num').value;
    console.log('inside click handler', cashOut,pinNumber);

    if (pinNumber === '1234'){

     const balance = getTextFieldById('account-balance');
     const newBalance = balance - cashOut;
     document.getElementById('account-balance').innerText = newBalance;




    }


});

