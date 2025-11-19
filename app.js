let balance = 0;

// calculate total balance
document.getElementById('calculate-balance').addEventListener('click', function(){
    const rent = getElementValueById('rent-input');
    const cloth = getElementValueById('cloth-amount');
    const food = getElementValueById('food-amount');

    // total expenses

    const totalExpenses = rent + cloth + food;
    setValueTextElement('total-expenses', totalExpenses);


    const income = getElementValueById('income-input');
    if( totalExpenses > income ){
        alert('Expenses exceed income');
        return;
    }
    balance = income - totalExpenses;
    setValueTextElement('total-balance', balance);
})

// calculate saving and remaining
document.getElementById('save-amount').addEventListener('click', function(){
    const savePercent = getElementValueById('save-percent');
    const savingAmount = balance * (savePercent / 100);
    
    setValueTextElement('saving-amount', savingAmount);

   
    const remainingBalance = balance - savingAmount;
    setValueTextElement('remaining-balance', remainingBalance);

}) 
