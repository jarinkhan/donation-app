document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault()


    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-pin-num').value;
    
    console.log(cashOut,pinNumber);

    if (pinNumber === '1234'){
        console.log('outing money');
        const balance = document.getElementById('account-balance').innerText;

        const newBalance = balance - cashOutNumber;

     //updating the UI
     document.getElementById('account-balance').innerText = newBalance; 
    } 

    
});
