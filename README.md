#Income Tax Calculator
This is a simple web application for calculating income tax based on gross annual income, extra income, age group, and total applicable deductions.

![image](https://github.com/KNnath/tax_calculator/assets/157242029/bdb41be4-f560-4d8a-8f04-7272cfa316cd)

![image](https://github.com/KNnath/tax_calculator/assets/157242029/b8e8a670-5c1e-4673-9e8f-3da919bb73dc)


Features
Allows users to input their gross annual income, extra income, age group, and total applicable deductions.
Provides a tooltip feature to explain each input field.
Validates user inputs to ensure they are numerical values.
Alerts users if they forget to select an age group.
Calculates income tax based on the provided inputs.
Displays the calculated income tax in a popup window.
Provides a button to close the popup window.
If user Extra Income & Deduction Box is null then it's calculated as a 0.
if the Overall Income is <= 8 lakh then NO TAX.

- Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
    - 30% for people with age < 40
    - 40% for people with age ≥ 40 but < 60
    - 10% for people with age ≥ 60

- Example
    - Age = 34, OverallIncome = 400000, no deductions/0, tax = .3 * (400000 - 800000) = .3 * 32 = 960000.00
    - Age = 30, OverallIncome = 400000, 100000, tax = 0.3 * (400000 - 100000) = 0.3 * 300000 = 0.00

Technologies Used
HTML
CSS
JavaScript
jQuery


Installation
To run this project locally, follow these steps:

Clone this repository to your local machine:
bash
Copy code
git clone <repository_url>
Open the index.html file in your web browser.
Usage
Enter your gross annual income, extra income, select your age group, and provide any applicable deductions.
Click the "Submit" button to calculate your income tax.
The calculated income tax will be displayed in a popup window.
Click the "Close" button to close the popup window.


Credits
This project was created by Koushik Nath.

License
This project is licensed under the MIT License.
