function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = ''; 
    return amountValue;
}

function updateTotalField(totalFielId,amount){
    const totalElement = document.getElementById(totalFielId);
    const totalText = totalElement.innerText;
    const previousDepositTotal = parseFloat(totalText);
    totalElement.innerText = previousDepositTotal + amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount,isAdd){
    const balanceTotal = document.getElementById('balance-total');

    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
    

}


document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    
    
    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input'); 
    if(depositAmount > 0) {
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);

    }
    

    
   
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withDrawInput = document.getElementById('withdraw-input');
    // const withDrawAmountText = withDrawInput.value;
    // const withDrawAmount = parseFloat(withDrawAmountText);
    

    //get and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withDrawAmount;

    

    // update balance after withdraw  
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withDrawAmount; */
    const withDrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withDrawAmount > 0 && withDrawAmount < currentBalance){
        updateTotalField('withdraw-total', withDrawAmount);
        updateBalance(withDrawAmount, false);
    }
    if(withDrawAmount > currentBalance){
       console.log('You can not withdraw more than what you have in your account'); 
    }
    
    
    // clear withdraw input field
    // withDrawInput.value = '';
});