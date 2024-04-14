function calculateTax(income, extraIncome, ageGroup, deduction) {
    // Convert inputs to numbers
    income = parseFloat(income);
    extraIncome = parseFloat(extraIncome);
    deduction = parseFloat(deduction);

    // Ensure that extraIncome is not NaN
    if (isNaN(extraIncome, deduction)) {
        extraIncome = 0;
        deduction = 0;
    }

    // Calculate overall income after deductions
    let overallIncome = income + extraIncome - deduction;

    console.log(overallIncome);

    // Check if overall income is less than or equal to 8 Lakhs
    if (overallIncome <= 800000) {
        return 0; // No tax
    } else {
        // Calculate tax based on age group
        if (ageGroup === '< 40') {
            let tax = 0.3 * (overallIncome - 800000); // 30% tax for age < 40
            return tax;
        } else if (ageGroup === '≥ 40 & < 60') {
            let tax = 0.4 * (overallIncome - 800000); // 40% tax for age ≥ 40 but < 60
            return tax;
        } else {
            let tax = 0.1 * (overallIncome - 800000); // 10% tax for age ≥ 60
            return tax;
        }
    }
}

// Function to display result in popup
function displayResult(result) {
    document.getElementById('result-in').value = result.toFixed(2);
    document.querySelector('.result-box').style.display = 'block'; // Show the result box
}

// Attach click event handler to the submit button
document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission for demonstration purpose

    // Get input values
    var income = document.getElementById('income').value;
    var extraIncomeValue = document.getElementById('extra-income').value; 
    var ageGroup = document.getElementById('age').value;
    var deductionValue = document.getElementById('deduction').value;

    // Convert empty inputs to 0
    var extraIncome = extraIncomeValue === '' ? 0 : parseFloat(extraIncomeValue);
    var deduction = deductionValue === '' ? 0 : parseFloat(deductionValue);

    // Check if age group is selected
    if (ageGroup === '') {
        // Show the red exclamation icon for age
        document.getElementById('exclamation-age').classList.add('red');
        document.getElementById('exclamation-age').style.display = 'block';
        showTooltip(document.getElementById('exclamation-age'), 'Please select an age group');
        return; // Exit function if age group is not selected
    }

    // Calculate tax
    var tax = calculateTax(income, extraIncome, ageGroup, deduction);

    // Check if the result is NaN (Not a Number)
    if (isNaN(tax)) {
        document.getElementById('result-in').value = 'Error';
    } else {
        // Display result in popup
        displayResult(tax);
    }
});

// Function to close the result popup
function closePopup() {
    document.querySelector('.result-box').style.display = 'none';
}

// Attach click event handler to the close button
document.getElementById('close').addEventListener('click', function() {
    closePopup();
});
