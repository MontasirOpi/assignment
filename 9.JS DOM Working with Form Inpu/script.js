document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous error messages
    document.getElementById("errorMessages").innerHTML = "";
    
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Validate name
    if (!name.match(/^[A-Za-z]+$/)) {
      displayErrorMessage("Name should contain only letters.");
      return;
    }
    
    // Validate email
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      displayErrorMessage("Invalid email address.");
      return;
    }
    
    // Validate password
    if (password.length < 8 || !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
      displayErrorMessage("Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }
    
    // Validate confirm password
    if (password !== confirmPassword) {
      displayErrorMessage("Confirm Password should match the Password field.");
      return;
    }
    
    // If all validations pass, submit the form
    document.getElementById("myForm").submit();
  });
  
  function displayErrorMessage(message) {
    var errorMessages = document.getElementById("errorMessages");
    var errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessages.appendChild(errorMessage);
  }
  