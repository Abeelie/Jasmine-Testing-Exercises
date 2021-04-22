window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let defaultValues = {amount: 20000, years: 5, rate: 5};
  let defaultAmount = document.getElementById("loan-amount");
  let defaultYears = document.getElementById("loan-years");
  let defaultRates = document.getElementById("loan-rate");

  defaultAmount.value = defaultValues.amount;
  defaultYears.value = defaultValues.years;
  defaultRates.value = defaultValues.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);

  let monthlyPayment = (p * i) / (1 - Math.pow((1+i), -n));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let updatedMonthly = document.getElementById("monthly-payment");
  updatedMonthly.innerText = "$" + monthly;
}
