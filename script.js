document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var bmi = weight / ((height / 100) ** 2);

  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Your BMI: ' + bmi.toFixed(2);
});
// Get the form element
const form = document.querySelector('form');

// Attach an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
  // Get the weight and height values entered by the user
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  // Calculate the BMI
  const bmi = weight / ((height/100) * (height/100));
  
  // Display the BMI result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
  
  // Check the BMI range and provide feedback to the user
  if (bmi < 18.5) {
    resultElement.innerHTML += '<br>& you are slim';
  } else if (bmi >= 18.5 && bmi < 25) {
    resultElement.innerHTML += '<br>& you are fit!';
  } else {
    resultElement.innerHTML += '<br>& you are obese';
  }
});

