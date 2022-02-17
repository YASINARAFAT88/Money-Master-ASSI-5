// Calculate Monthly income And Cost
document.getElementById('calculate').addEventListener
('click', function () {
    const salary = document.getElementById('salary').value;
    const salaryText = parseInt(salary);

    const food = document.getElementById('foodFeild').value;
    const foodText = parseInt(food);

    const rent = document.getElementById('rentFeild').value;
    const rentText = parseInt(rent);

    const clothes = document.getElementById('clothesFeild').value;
    const clothesText = parseInt(clothes);

    // Error Handleing Part 
    if(isNaN(foodText && rentText && clothesText)){
     const error = document.getElementById('salary')
     const visibleError = 
    }

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
    document.getElementById('').innerText = totalSaving;
})