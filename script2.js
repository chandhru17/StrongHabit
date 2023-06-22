document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var activity = document.getElementById('activity').value;
  var duration = parseInt(document.getElementById('duration').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var caloriesBurned;

  if (activity === 'running') {
    caloriesBurned = duration * 10 * weight;
  } else if (activity === 'walking') {
    caloriesBurned = duration * 5 * weight;
  } else if (activity === 'cycling') {
    caloriesBurned = duration * 8 * weight;
  }

  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Calories Burned: ' + caloriesBurned.toFixed(2);
});
