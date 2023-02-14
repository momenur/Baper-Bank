document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmountString = document.getElementById('deposit-input-filed');
    const depositAmount = parseFloat(depositAmountString.value);
    console.log('input amount', depositAmount, typeof depositAmount);
    const depositElemnt = document.getElementById('deposit-toal-amount');
    const depositTotal = depositElemnt.innerText;
    const depositNumber = parseFloat(depositTotal);
    const depositUpdate = depositNumber + depositAmount ;
    console.log('total Amunt', depositUpdate, typeof depositUpdate);
    depositElemnt.innerText = depositUpdate;
    // Balance Update
    const balance = document.getElementById('balace-amount');
    const balaceNumebr = parseFloat(balance.innerText);
    const newBalance = depositAmount + balaceNumebr;
    balance.innerText = newBalance;
    depositAmountString.value = '';
})