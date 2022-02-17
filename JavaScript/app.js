function getInputValues(idName) {
    const inputField = document.getElementById(idName);
    const amountInNumber = parseFloat(inputField.value);
    return amountInNumber;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const totalExpenses = document.getElementById('expenses-amount');
    const balance = document.getElementById('balance');



    const total = getInputValues('food-field') + getInputValues('rent-field') + getInputValues('clothes-field');
    totalExpenses.innerText = total;
    balance.innerText = getInputValues('income-field') - total;
});

document.getElementById('save-button').addEventListener('click', function () {
    const saveField = document.getElementById('save-field');
    const savePercentange = parseFloat(saveField.value);

    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseFloat(incomeField.value);


    const save = document.getElementById('save-amount');
    const saveAmount = parseFloat(save.innerText);
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);

    const remainingBalance = document.getElementById('remaining-balance');

    const savingAmount = (incomeAmount * savePercentange) / 100;
    save.innerText = savingAmount;
    remainingBalance.innerText = balanceAmount - savingAmount;
});