// Calculate Monthly income And Cost
document.getElementById('calculate').addEventListener
('click', function () {
    const salary = document.getElementById('salary').value;
    const salaryText = parseFloat(salary);

    const food = document.getElementById('foodFeild').value;
    const foodText = parseFloat(food);

    const rent = document.getElementById('rentFeild').value;
    const rentText = parseFloat(rent);

    const clothes = document.getElementById('clothesFeild').value;
    const clothesText = parseFloat(clothes);

        const total = foodText + rentText + clothesText;
    document.getElementById('totalExpenses').innerText = total;

    const balance = salaryText - total;
    document.getElementById('balance').innerText = balance;
    
})

// Savings and Remaining Balance Calculate

document.getElementById('savings').addEventListener
('click', function() {
    const saveing = document.getElementById('savingField').value;
    const mySave = parseFloat(saveing);
    const totalSaving = balance / mySave;
    document.getElementById('save-amount').innerText = totalSaving;
})