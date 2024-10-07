document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    

    //const addMoney = getInputFieldValueById();
    //console.log('add money value', addMoney);
    
    const addMoney = getInputFieldValueById('input-add-money');
    const addPin = getInputFieldValueById('input-pin-num');
    console.log('add money with parameter', addMoney,addPin);

    if (addPin === 1234) {
           const balance = getTextFieldById('account-balance');
           const newBalance = balance + addMoney;


           document.getElementById('account-balance').innerText = newBalance;
           
           //add to transaction history
           const p = document.createElement('p');
           p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
           console.log(p);
           

           document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Failed to add money');
    }

});
