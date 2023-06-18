function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  //for true false return
  console.log(isPrime(4));
 
    function checkIfPrime() {
    var inputNumber = parseInt(document.getElementById('numberInput').value);
    var result = isPrime(inputNumber);
    var outputText = result ? 'It is a prime number.' : 'It is not a prime number.';
    document.getElementById('result').textContent = outputText;
  }