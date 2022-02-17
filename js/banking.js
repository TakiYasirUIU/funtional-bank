function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = ''; 
    return amountValue;
}

function updateTotalField(totalFielId,amount){
    debugger;
    const totalElement = document.getElementById(totalFielId);
    const totalText = totalElement.innerText;
    const previousDepositTotal = parseFloat(totalText);
    totalElement.innerText = previousDepositTotal + amount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input'); 

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    updateTotalField('deposit-total',depositAmount);
    
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    
   
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withDrawInput = document.getElementById('withdraw-input');
    // const withDrawAmountText = withDrawInput.value;
    // const withDrawAmount = parseFloat(withDrawAmountText);
    const withDrawAmount = getInputValue('withdraw-input');

    //get and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withDrawAmount;

    updateTotalField('withdraw-total', withDrawAmount)

    // update balance after withdraw  
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withDrawAmount;
    
    // clear withdraw input field
    // withDrawInput.value = '';
});