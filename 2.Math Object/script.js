
function squareRootOfSumOfSquares(numbers) {
  var sumOfSquares = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    sumOfSquares += Math.pow(numbers[i], 2);
  }
  
  return Math.sqrt(sumOfSquares);
}

function displayResult() {
  var numbers = [3, 4, 8, 6, 7];
  var result = squareRootOfSumOfSquares(numbers);
  document.getElementById('result').textContent = result;
}
