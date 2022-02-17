// Function to get Input Values
function getInputValues(idName) {
    const inputField = document.getElementById(idName);
    const amountInNumber = parseFloat(inputField.value);
    return amountInNumber;
}


// Function for calculation
function expensesCalculation(foodCost, rentCost, clothesCost) {
    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        const total = foodCost + rentCost + clothesCost;
        return total;
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}

function savingCalculation(income, savingPercentange) {
    if (income >= 0 && savingPercentange >= 0 && savingPercentange <= 100) {
        const savingAmount = (income * savingPercentange) / 100;
        return savingAmount;
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}


// Expense Calculation and Show output
document.getElementById('calculate-button').addEventListener('click', function () {
    const totalExpenses = document.getElementById('expenses-amount');
    const balance = document.getElementById('balance');
    const income = getInputValues('income-field');

    // Calculation and Assign Values for Output
    const totalM = expensesCalculation(getInputValues('food-field'), getInputValues('rent-field'), getInputValues('clothes-field'));
    if (income >= totalM && income >= 0) {
        totalExpenses.innerText = totalM;
        balance.innerText = income - totalM;
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
});


// Saving Calculation and Show output
document.getElementById('save-button').addEventListener('click', function ()
{
    const save = document.getElementById('save-amount');
    const remainingBalance = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);

    // Calculation and Assign Values for Output
    const savingAmount = savingCalculation(getInputValues('income-field'), getInputValues('save-field'));
    const remaining = balanceAmount - savingAmount;
    if (remaining >= 0) {
        save.innerText = savingAmount.toFixed(2);
        remainingBalance.innerText = remaining.toFixed(2);
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
});