document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNum = document.getElementById('input-pin-num').value;
    console.log(pinNum); 


    if (pinNum === '1234'){
        console.log('adding money');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);


        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

    }
});
