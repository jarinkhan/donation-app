document.getElementById('cash-out-btn').addEventListener('click',function(){

    //show cash out when clicked
    document.getElementById('cash-out-form').classList.remove('hidden');


    //hide add money
    document.getElementById('add-money-form').classList.add('hidden');

})


document.getElementById('add-money-btn')
.addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');


})