document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmountString = document.getElementById('deposit-input-filed');
    const depositAmount = parseFloat(depositAmountString.value);
    
    
    const depositElemnt = document.getElementById('deposit-toal-amount');
    const depositTotal = depositElemnt.innerText;
    const depositNumber = parseFloat(depositTotal);
    const depositUpdate = depositNumber + depositAmount ;
    


    depositElemnt.innerText = depositUpdate;
    // Balance Update
    const balance = document.getElementById('balace-amount');
    const balaceNumebr = parseFloat(balance.innerText);
    const newBalance = depositAmount + balaceNumebr;
    balance.innerText = newBalance;
    depositAmountString.value = '';
})


// Withdraw Button curriculam
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFlied = document.getElementById('withdraw-input-filed');
    const withdrawFliedString = withdrawFlied.value ;
    const withdrawAmount = parseFloat(withdrawFliedString);
    
    // Withdraw Amount
    const withdraw = document.getElementById('withdraw-amount');
    const withdrawString = withdraw.innerText;
    const withdrawAmountNumber = parseFloat(withdrawString);



    // Balance Calculation
    const priveousBalance = document.getElementById('balace-amount');
    const priveousBalanceString = priveousBalance.innerText;
    const totalBalance = parseFloat(priveousBalanceString);
    if(withdrawAmount <= totalBalance){
        const newTotalBalance = totalBalance - withdrawAmount;

    priveousBalance.innerText = newTotalBalance;
    
    // Calculation
    const WithdrawTotal = withdrawAmountNumber + withdrawAmount;
    withdraw.innerText = WithdrawTotal;
    }
    else{
        alert('Eficensi Your Balance');
    }
    

    

    // Reset Input Filed
    withdrawFlied.value = '';
})