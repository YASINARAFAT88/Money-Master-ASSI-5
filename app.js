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

    const total = foodText + rentText + clothesText;
    document.getElementById('totalExpenses').innerText = total;

    const balance = salaryText - total;
    document.getElementById('balance').innerText = balance;
})

